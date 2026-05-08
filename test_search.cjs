#!/usr/bin/env node
"use strict";
// Test SearchProvider initialization and engine loading
// Uses the same approach as iflow dev runtime (vm.runInThisContext)

const path = require("path");
const fs = require("fs");
const vm = require("vm");

globalThis.require = require;
globalThis.module = module;
globalThis.exports = exports;
globalThis.__filename = __filename;
globalThis.__dirname = __dirname;

const HERE = __dirname;

// Step 1: Load preamble
console.log("[test] Loading preamble...");
const preamblePath = path.join(HERE, "src", "runtime_preamble.cjs");
const preambleCode = fs.readFileSync(preamblePath, "utf8");
vm.runInThisContext(preambleCode, { filename: "src/runtime_preamble.cjs" });

// Step 2: Load modules
console.log("[test] Loading modules...");
const { loadAllModules } = require("./src/lib/loader.cjs");
const { loaded, errors } = loadAllModules();
console.log(`[test] Loaded ${loaded} modules, ${errors} errors`);

// Step 3: Check our search modules
const checks = [
  "SearchCore", "SearchProvider", "SearchPipeline", "SearchRenderer",
  "eG_web", "eG_science", "eG_media", "eG_it",
  "eG_shop", "eG_social", "eG_dev", "eG_news", "eG_images", "eG_misc",
  "eG_b2", "eG_b3", "eG_b4", "eG_b5", "eG_b6", "eG_b7", "eG_b8",
];
let ok = true;
for (const n of checks) {
  const v = globalThis[n];
  if (typeof v === "undefined") {
    console.log(`  ${n}: MISSING`);
    ok = false;
  } else if (typeof v === "function") {
    console.log(`  ${n}: ✓ function`);
  } else {
    console.log(`  ${n}: ✓ ${typeof v} ${Object.keys(v||{}).length} keys`);
  }
}

// Step 4: Init SearchProvider
console.log("\n[test] Initializing SearchProvider...");
if (globalThis.SearchCore?.SearchInit) {
  globalThis.SearchCore.SearchInit.init({ setSearchProvider: () => {} });
  const p = globalThis.SearchCore.SearchInit.getInstance();
  if (p) {
    const count = p.registry?.all()?.length || 0;
    console.log(`  Engines registered: ${count}`);
    if (count > 0) {
      // Test web search
      (async () => {
        console.log("\n[test] Testing web search...");
        try {
          const r = await p.webSearch("hello world", 3);
          console.log(`  Results: ${r.results?.length || 0}`);
          if (r.results?.length > 0) {
            console.log(`  First result title: ${r.results[0].title}`);
            console.log(`  First result URL: ${r.results[0].url}`);
          } else {
            console.log("  No results returned");
          }
        } catch (e) {
          console.error(`  Search error: ${e.message}`);
        }
        // Test web fetch
        console.log("\n[test] Testing web fetch...");
        try {
          const f = await p.webFetch("https://example.com");
          console.log(`  Title: ${f.title}`);
          console.log(`  Content length: ${f.content?.length || 0}`);
        } catch (e) {
          console.error(`  Fetch error: ${e.message}`);
        }
        console.log("\n[test] Done");
      })();
    } else {
      console.log("  No engines registered!");
    }
  } else {
    console.log("  Provider is null");
  }
} else {
  console.log("  SearchCore not found!");
}
