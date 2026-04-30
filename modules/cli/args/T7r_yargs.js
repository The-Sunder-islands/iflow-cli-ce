/**
 * @module T7r
 * @category cli/args
 * @label yargs
 * @position 52 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (T7r) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var T7r = T((b4u, x7r) => {
  "use strict";
  x7r.exports = function (t, e) {
    e = e || process.argv;
    var r = e.indexOf("--"),
      n = /^--/.test(t) ? "" : "--",
      o = e.indexOf(n + t);
    return o !== -1 && (r !== -1 ? o < r : !0);
  };
});