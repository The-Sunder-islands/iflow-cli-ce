#!/usr/bin/env node
// iflow-cli-ce production entry - runs the pre-built bundle
// Usage: bin/iflow-ce [args...]

const path = require("path");
const { spawn } = require("child_process");

const bundlePath = path.join(__dirname, "..", "bundle", "iflow.js");
const args = process.argv.slice(2);

const child = spawn(process.execPath, [bundlePath, ...args], {
  stdio: "inherit",
  env: process.env,
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.exit(128 + (signal === "SIGTERM" ? 15 : signal === "SIGINT" ? 2 : 1));
  }
  process.exit(code || 0);
});
