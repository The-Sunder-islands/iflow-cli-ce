/**
 * @module xyt
 * @category utils/json
 * @label json
 * @position 91 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (xyt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var xyt = T((Z4u, ckr) => {
  var Mho = Ae("buffer").Buffer;
  ckr.exports = function (e) {
    return typeof e == "string" ? e : typeof e == "number" || Mho.isBuffer(e) ? e.toString() : JSON.stringify(e);
  };
});