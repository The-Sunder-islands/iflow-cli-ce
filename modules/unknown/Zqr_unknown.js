/**
 * @module Zqr
 * @category unknown
 * @label unknown
 * @position 159 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Zqr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Zqr = T((CRu, Xqr) => {
  "use strict";
  Xqr.exports = uxo;
  function uxo(t, e, r) {
    var n = r || 8192,
      o = n >>> 1,
      s = null,
      a = n;
    return function (c) {
      if (c < 1 || c > o) return t(c);
      a + c > n && ((s = t(n)), (a = 0));
      var m = e.call(s, a, (a += c));
      return (a & 7 && (a = (a | 7) + 1), m);
    };
  }
});