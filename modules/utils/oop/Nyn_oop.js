/**
 * @module Nyn
 * @category utils/oop
 * @label oop
 * @position 950 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Nyn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Nyn = T((dhc, Oyn) => {
  "use strict";
  Oyn.exports = function (t) {
    var e = C0(),
      r = $V().keys,
      n = e.tryCatch,
      o = e.errorObj;
    function s(a, u, c) {
      return function (m) {
        var d = c._boundValue();
        e: for (var f = 0; f < a.length; ++f) {
          var p = a[f];
          if (p === Error || (p != null && p.prototype instanceof Error)) {
            if (m instanceof p) return n(u).call(d, m);
          } else if (typeof p == "function") {
            var h = n(p).call(d, m);
            if (h === o) return h;
            if (h) return n(u).call(d, m);
          } else if (e.isObject(m)) {
            for (var g = r(p), b = 0; b < g.length; ++b) {
              var A = g[b];
              if (p[A] != m[A]) continue e;
            }
            return n(u).call(d, m);
          }
        }
        return t;
      };
    }
    return s;
  };
});