#!/usr/bin/env node
"use strict";

// iflow-cli-ce dev runtime
// Uses vm.runInThisContext to load all modules in global scope,
// then executes the entry point code.
// Stack traces report exact file and line numbers.

const path = require("path");
const fs = require("fs");
const vm = require("vm");

// Inject CJS locals into global scope for vm compatibility
// These are normally function-scoped in CJS, but vm.runInThisContext
// runs in the global scope where they're not available.
globalThis.require = require;
globalThis.module = module;
globalThis.exports = exports;
globalThis.__filename = __filename;
globalThis.__dirname = __dirname;

// Step 1: Load the runtime preamble (defines T, j, etc. in global scope)
console.log("[runtime] Loading preamble...");
const preamblePath = path.join(__dirname, "runtime_preamble.cjs");
const preambleCode = fs.readFileSync(preamblePath, "utf8");
try {
  vm.runInThisContext(preambleCode, { filename: "src/runtime_preamble.cjs" });
} catch (err) {
  console.error("FATAL: Failed to load preamble:", err.message);
  process.exit(1);
}

// Step 2: Load all modules in order
console.log("[runtime] Loading modules...");
const { loadAllModules, loadEntryCode } = require("./lib/loader.cjs");
const { loaded, errors } = loadAllModules();
if (errors > 10) {
  console.error(`[runtime] Too many errors (${errors}), aborting`);
  process.exit(1);
}

// Step 3: Execute entry point code
console.log("[runtime] Executing entry code...");

// Inject all between-module imports as global variables
require("./builtin_injector.cjs");

loadEntryCode();
