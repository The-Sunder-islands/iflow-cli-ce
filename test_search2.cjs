#!/usr/bin/env node
"use strict";

const path = require("path");
const fs = require("fs");
const vm = require("vm");

globalThis.require = require;
globalThis.module = module;
globalThis.exports = exports;
globalThis.__filename = __filename;
globalThis.__dirname = __dirname;

const HERE = __dirname;

console.log("[test] Loading preamble...");
const preambleCode = fs.readFileSync(path.join(HERE, "src", "runtime_preamble.cjs"), "utf8");
vm.runInThisContext(preambleCode, { filename: "src/runtime_preamble.cjs" });

console.log("[test] Loading modules...");
const { loadAllModules } = require("./src/lib/loader.cjs");
const { loaded, errors } = loadAllModules();
console.log(`Loaded ${loaded} modules, ${errors} errors`);

console.log("\n=== Core modules ===");
const core = ["SearchCore", "SearchProvider", "SearchPipeline", "SearchRenderer"];
for (const n of core) {
  const v = globalThis[n];
  const t = typeof v;
  console.log(`  ${n}: type=${t}, initFnExists=${typeof globalThis[`s${n[6]}`] || typeof globalThis[`s${n[n.length-1]}`]}`);
  // sC, sR, sP are the j() wrapper names
}
// Check sC, sR, sP directly
for (const initName of ["sC", "sR", "sP"]) {
  console.log(`  ${initName}: ${typeof globalThis[initName]}`);
}

// Call init functions to trigger module population
console.log("\n=== Triggering j() wrappers ===");
if (typeof globalThis.sC === "function") { console.log("  Calling sC()..."); globalThis.sC(); }
if (typeof globalThis.sR === "function") { console.log("  Calling sR()..."); globalThis.sR(); }
if (typeof globalThis.sP === "function") { console.log("  Calling sP()..."); globalThis.sP(); }

console.log("\n=== After init ===");
for (const n of core) {
  const v = globalThis[n];
  console.log(`  ${n}: ${typeof v}, isClass=${typeof v === 'function' && v.toString().startsWith('class')}`);
}

// Now call engine inits
console.log("\n=== Engine inits ===");
const engineInits = ["eG_web","eG_science","eG_media","eG_it","eG_shop","eG_social","eG_dev","eG_news","eG_images","eG_misc","eG_b2","eG_b3","eG_b4","eG_b5","eG_b6","eG_b7","eG_b8"];
for (const initName of engineInits) {
  const fn = globalThis[initName];
  const shortName = initName.replace("eG_", "EG_");
  const obj = globalThis[shortName];
  if (typeof fn === "function") {
    try { fn(); } catch(e) { console.log(`  ${initName}: ERROR ${e.message}`); continue; }
    const keys = Object.keys(globalThis[shortName] || {});
    console.log(`  ${shortName}: ${keys.length} engines`);
  } else {
    console.log(`  ${initName}: NOT FOUND`);
  }
}

// Test SearchCore
console.log("\n=== Test SearchCore ===");
if (globalThis.SearchCore) {
  const reg = new globalThis.SearchCore.EngineRegistry();
  // Register engines manually to verify
  for (const shortName of ["EG_web","EG_science","EG_media","EG_it","EG_misc"]) {
    const obj = globalThis[shortName];
    if (obj) reg.registerCategory(obj);
  }
  console.log(`  Manual registry: ${reg.all().length} engines`);
  
  // Now use SearchInit
  console.log("\n=== Test SearchInit ===");
  globalThis.SearchCore.SearchInit.init({
    setSearchProvider(p) {
      console.log(`  Provider set, engines: ${p.registry?.all()?.length}`);
    }
  });
  const prov = globalThis.SearchCore.SearchInit.getInstance();
  if (prov) {
    console.log(`  SearchProvider engines: ${prov.registry?.all()?.length || 0}`);
  } else {
    console.log("  Provider null");
  }
} else {
  console.log("  SearchCore is", typeof globalThis.SearchCore);
}
