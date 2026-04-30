/**
 * @module Ctr
 * @category unknown
 * @label unknown
 * @position 1366 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Ctr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Ctr = T((Y8c, pUn) => {
  pUn.exports = fUn;
  function fUn(t, e) {
    if (t && e) return fUn(t)(e);
    if (typeof t != "function") throw new TypeError("need wrapper function");
    return (
      Object.keys(t).forEach(function (n) {
        r[n] = t[n];
      }),
      r
    );
    function r() {
      for (var n = new Array(arguments.length), o = 0; o < n.length; o++) n[o] = arguments[o];
      var s = t.apply(this, n),
        a = n[n.length - 1];
      return (
        typeof s == "function" &&
          s !== a &&
          Object.keys(a).forEach(function (u) {
            s[u] = a[u];
          }),
        s
      );
    }
  }
});