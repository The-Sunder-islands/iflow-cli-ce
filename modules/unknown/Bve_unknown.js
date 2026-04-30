/**
 * @module Bve
 * @category unknown
 * @label unknown
 * @position 1495 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Bve) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Bve = T((Bvc, FKn) => {
  "use strict";
  var $sa = new TextDecoder();
  function jsa(t) {
    return t.length === 0 ? "" : (t[0] === 239 && t[1] === 187 && t[2] === 191 && (t = t.subarray(3)), $sa.decode(t));
  }
  FKn.exports = { utf8DecodeBytes: jsa };
});