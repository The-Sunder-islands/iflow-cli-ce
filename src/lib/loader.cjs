"use strict";
// Module loader for iflow-cli-ce dev runtime
// vm.runInThisContext + ESM→CJS import transform

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..", "..");
const MODULES_DIR = path.join(ROOT, "modules");

// Transform ESM import statements to CJS require
// Uses a line-by-line state machine for multi-line imports
function transformESMtoCJS(code) {
  // Handle import.meta.url first
  code = code.replace(/import\.meta\.url/g, "require('url').pathToFileURL(__filename).href");

  const lines = code.split("\n");
  const result = [];
  let pendingImport = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trimStart();

    if (pendingImport) {
      // We're accumulating a multi-line import
      pendingImport += " " + trimmed;
      if (trimmed.endsWith(";") || trimmed.endsWith('"') || trimmed.endsWith("'")) {
        // Got the full statement
        const transformed = transformImportLine(pendingImport.trim());
        result.push(transformed);
        pendingImport = null;
      }
    } else if (trimmed.startsWith("import ") && !trimmed.endsWith(";")) {
      // Start of multi-line import
      pendingImport = trimmed;
    } else if (trimmed.startsWith("import ")) {
      // Single-line import
      const transformed = transformImportLine(trimmed);
      result.push(transformed);
    } else {
      result.push(line);
    }
  }

  // Handle any leftover pending import
  if (pendingImport) {
    result.push(transformImportLine(pendingImport.trim()));
  }

  return result.join("\n");
}

function transformImportLine(stmt) {
  // Remove trailing semicolons/spaces
  stmt = stmt.replace(/;\s*$/, "");

  // import X, { a, b as c } from 'src'
  let m = stmt.match(/^import\s+(\w+)\s*,\s*\{([^}]*)\}\s+from\s+(['"])([^'"]+)\3\s*$/);
  if (m) {
    const names = m[2].replace(/\s+as\s+/g, ": ").replace(/\s+/g, " ").trim();
    let out = "var " + m[1] + " = require('" + m[4] + "');";
    if (names) out += "\nvar { " + names + " } = require('" + m[4] + "');";
    return out;
  }

  // import { a, b as c } from 'src'
  m = stmt.match(/^import\s*\{([^}]*)\}\s+from\s+(['"])([^'"]+)\3\s*$/);
  if (m) {
    const names = m[1].replace(/\s+as\s+/g, ": ").replace(/\s+/g, " ").trim();
    if (names) return "var { " + names + " } = require('" + m[3] + "');";
    return "require('" + m[3] + "');";
  }

  // import * as X from 'src'
  m = stmt.match(/^import\s+\*\s+as\s+(\w+)\s+from\s+(['"])([^'"]+)\3\s*$/);
  if (m) {
    return "var " + m[1] + " = require('" + m[3] + "');";
  }

  // import X from 'src'
  m = stmt.match(/^import\s+(\w+)\s+from\s+(['"])([^'"]+)\3\s*$/);
  if (m) {
    return "var " + m[1] + " = require('" + m[3] + "');";
  }

  // import 'src' (side-effect)
  m = stmt.match(/^import\s+(['"])([^'"]+)\1\s*$/);
  if (m) {
    return "require('" + m[2] + "');";
  }

  // If we can't parse, comment it out to avoid syntax errors
  return "// UNPARSED_IMPORT: " + stmt;
}

function loadAllModules() {
  const orderFile = path.join(ROOT, "module_order.json");
  if (!fs.existsSync(orderFile)) {
    console.error("ERROR: module_order.json not found");
    process.exit(1);
  }

  const order = JSON.parse(fs.readFileSync(orderFile, "utf8"));
  let loaded = 0;
  let errors = 0;

  for (const mod of order.order) {
    const { name, category, label } = mod;
    const safeLabel = label.replace(/[^a-zA-Z0-9_-]/g, "_");
    const filePath = path.join(MODULES_DIR, category, `${name}_${safeLabel}.js`);

    if (!fs.existsSync(filePath)) {
      if (errors < 3) console.error(`WARN: Missing: ${filePath}`);
      errors++;
      continue;
    }

    let code = fs.readFileSync(filePath, "utf8");

    // Strip annotation header
    const headerEnd = code.indexOf("*/\n\n");
    if (headerEnd >= 0) code = code.slice(headerEnd + 4);

    // Transform ESM imports
    code = transformESMtoCJS(code);

    // Ensure module starts on a newline
    if (!code.startsWith("\n")) code = "\n" + code;

    try {
      vm.runInThisContext(code, {
        filename: `modules/${category}/${name}_${safeLabel}.js`,
        lineOffset: 0,
        columnOffset: 0,
      });
      loaded++;
    } catch (err) {
      if (errors < 5) {
        console.error(`ERROR ${name} (${category}):`, err.message.split("\n")[0]);
      }
      errors++;
    }
  }

  console.log(`[loader] Loaded ${loaded}/${order.order.length} modules (${errors} errors)`);
  return { loaded, errors };
}

function loadEntryCode() {
  const entryFile = path.join(ROOT, "entry_code.js");
  if (!fs.existsSync(entryFile)) {
    console.error("ERROR: entry_code.js not found");
    process.exit(1);
  }

  let code = fs.readFileSync(entryFile, "utf8");

  // Strip JSDoc header
  if (code.startsWith("/**")) {
    const idx = code.indexOf("*/\n");
    if (idx >= 0) code = code.slice(idx + 3);
  }

  // Transform ESM imports
  code = transformESMtoCJS(code);

  // Find the split point: where top-level await code starts
  // Keep function/class/var definitions at global scope, wrap only execution
  const lines = code.split("\n");
  let splitAt = lines.length;
  let depth = 0;
  for (let i = 0; i < lines.length; i++) {
    const s = lines[i].trim();
    const open = (s.match(/\{/g) || []).length;
    const close = (s.match(/\}/g) || []).length;
    depth += open - close;
    if (s.startsWith("await ") && depth <= 0 && splitAt > i) {
      splitAt = i;
    }
  }
  
  // If top-level await found, split and wrap
  if (splitAt < lines.length) {
    const defs = lines.slice(0, splitAt).join("\n");
    const exec = lines.slice(splitAt).join("\n");
    code = defs + "\n(async function() {\n" + exec + "\n})().catch((err) => {\n" +
      "  console.error('FATAL:', err.message || err);\n" +
      "  if (err.stack) console.error(err.stack.split('\\\\n').slice(0,5).join('\\\\n'));\n" +
      "  process.exit(1);\n" +
      "});\n";
  }

  try {
    vm.runInThisContext(code, {
      filename: "entry_code.js",
      lineOffset: 0,
      columnOffset: 0,
    });
  } catch (err) {
    console.error("ERROR in entry_code.js:", err.message.split("\n")[0]);
    process.exit(1);
  }
}

module.exports = { loadAllModules, loadEntryCode };
