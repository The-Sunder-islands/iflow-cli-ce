/**
 * @module wun
 * @category system/sandbox
 * @label sandbox
 * @position 705 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (wun) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var wun = T((BQu, EZo) => {
  EZo.exports = {
    name: "systeminformation",
    version: "5.30.3",
    description: "Advanced, lightweight system and OS information library",
    license: "MIT",
    author: "Sebastian Hildebrandt <hildebrandt@plus-innovations.com> (https://plus-innovations.com)",
    homepage: "https://systeminformation.io",
    main: "./lib/index.js",
    type: "commonjs",
    bin: { systeminformation: "lib/cli.js" },
    types: "./lib/index.d.ts",
    scripts: { test: "node ./test/test.js", testDeno: "deno run -A ./test/test.js" },
    files: ["lib/"],
    keywords: [
      "system information",
      "sysinfo",
      "monitor",
      "monitoring",
      "os",
      "linux",
      "osx",
      "windows",
      "freebsd",
      "openbsd",
      "netbsd",
      "cpu",
      "cpuload",
      "physical cores",
      "logical cores",
      "processor",
      "cores",
      "threads",
      "socket type",
      "memory",
      "file system",
      "fsstats",
      "diskio",
      "block devices",
      "netstats",
      "network",
      "network interfaces",
      "network connections",
      "network stats",
      "iface",
      "printer",
      "processes",
      "users",
      "internet",
      "battery",
      "docker",
      "docker stats",
      "docker processes",
      "graphics",
      "graphic card",
      "graphic controller",
      "gpu",
      "display",
      "smart",
      "disk layout",
      "usb",
      "audio",
      "bluetooth",
      "wifi",
      "wifinetworks",
      "virtual box",
      "virtualbox",
      "vm",
      "backend",
      "hardware",
      "BIOS",
      "chassis",
    ],
    repository: { type: "git", url: "git+https://github.com/sebhildebrandt/systeminformation.git" },
    funding: { type: "Buy me a coffee", url: "https://www.buymeacoffee.com/systeminfo" },
    os: ["darwin", "linux", "win32", "freebsd", "openbsd", "netbsd", "sunos", "android"],
    engines: { node: ">=8.0.0" },
  };
});