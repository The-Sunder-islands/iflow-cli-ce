/**
 * @module CVt
 * @category unknown
 * @label unknown
 * @position 1015 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (CVt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var CVt = T((S3c, Tvn) => {
  "use strict";
  function nvs() {
    for (var t, e = [], r = 0; r < 256; r++) {
      t = r;
      for (var n = 0; n < 8; n++) t = t & 1 ? 3988292384 ^ (t >>> 1) : t >>> 1;
      e[r] = t;
    }
    return e;
  }
  var ivs = nvs();
  function ovs(t, e, r, n) {
    var o = ivs,
      s = n + r;
    t ^= -1;
    for (var a = n; a < s; a++) t = (t >>> 8) ^ o[(t ^ e[a]) & 255];
    return t ^ -1;
  }
  Tvn.exports = ovs;
});