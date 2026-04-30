/**
 * @module bYt
 * @category unknown
 * @label unknown
 * @position 1163 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (bYt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var bYt = T((HIn) => {
  var qIn = typeof TextDecoder > "u" ? null : new TextDecoder("utf-8");
  function HIs(t) {
    return typeof t == "string" ? t : qIn ? qIn.decode(t) : t.toString();
  }
  HIn.bufferToString = HIs;
});