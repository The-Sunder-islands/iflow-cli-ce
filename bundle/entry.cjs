#!/usr/bin/env node
// iflow-cli-ce production entry (CJS wrapper for bundle/iflow.js)
// The bundled iflow.js uses ESM imports, requires "type":"module" in package.json

const path = require("path");
const { spawn } = require("child_process");

const bundlePath = path.join(__dirname, "iflow.js");
const args = process.argv.slice(2);

const child = spawn(process.execPath, [bundlePath, ...args], {
  stdio: "inherit",
  env: process.env,
});

child.on("exit", (code, signal) => {
  process.exit(code || (signal ? 1 : 0));
});
