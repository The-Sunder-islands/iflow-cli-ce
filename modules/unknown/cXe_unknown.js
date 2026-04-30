/**
 * @module cXe
 * @category unknown
 * @label unknown
 * @position 1008 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (cXe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var cXe = T((g3c, HEn) => {
  "use strict";
  var _Es = Nd();
  function EEs() {
    for (var t, e = [], r = 0; r < 256; r++) {
      t = r;
      for (var n = 0; n < 8; n++) t = t & 1 ? 3988292384 ^ (t >>> 1) : t >>> 1;
      e[r] = t;
    }
    return e;
  }
  var qEn = EEs();
  function vEs(t, e, r, n) {
    var o = qEn,
      s = n + r;
    t = t ^ -1;
    for (var a = n; a < s; a++) t = (t >>> 8) ^ o[(t ^ e[a]) & 255];
    return t ^ -1;
  }
  function CEs(t, e, r, n) {
    var o = qEn,
      s = n + r;
    t = t ^ -1;
    for (var a = n; a < s; a++) t = (t >>> 8) ^ o[(t ^ e.charCodeAt(a)) & 255];
    return t ^ -1;
  }
  HEn.exports = function (e, r) {
    if (typeof e > "u" || !e.length) return 0;
    var n = _Es.getTypeOf(e) !== "string";
    return n ? vEs(r | 0, e, e.length, 0) : CEs(r | 0, e, e.length, 0);
  };
});