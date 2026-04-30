/**
 * @module yAn
 * @category unknown
 * @label unknown
 * @position 861 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (yAn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var yAn = T((wrc, j$t) => {
  "use strict";
  var AAn = (t = {}) => {
    let e = t.env || process.env;
    return (t.platform || process.platform) !== "win32"
      ? "PATH"
      : Object.keys(e)
          .reverse()
          .find((n) => n.toUpperCase() === "PATH") || "Path";
  };
  j$t.exports = AAn;
  j$t.exports.default = AAn;
});