#!/usr/bin/env node
// iflow-cli-ce development entry - vm-based runtime, no build needed
// Usage: node bin/iflow-ce-dev.cjs [args...]

const path = require("path");

// Pass control to the runtime loader
require(path.join(__dirname, "..", "src", "runtime.cjs"));
