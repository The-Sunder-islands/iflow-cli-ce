/**
 * @module Mjn
 * @category unknown
 * @label unknown
 * @position 1401 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Mjn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Mjn = T((X9c, Ljn) => {
  Ljn.exports = function (e) {
    var r = process && process.version ? process.version : "v5.0.0",
      n = r.split(".")[0].replace("v", "");
    return n < 6 ? new Buffer(e) : Buffer.from(e);
  };
});