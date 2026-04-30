/**
 * @module lDr
 * @category unknown
 * @label unknown
 * @position 31 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (lDr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var lDr = T((bEu, cDr) => {
  "use strict";
  var Zmo = /[|\\{}()[\]^$+*?.-]/g;
  cDr.exports = (t) => {
    if (typeof t != "string") throw new TypeError("Expected a string");
    return t.replace(Zmo, "\\$&");
  };
});