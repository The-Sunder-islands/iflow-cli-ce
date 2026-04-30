/**
 * @module Cyn
 * @category unknown
 * @label unknown
 * @position 945 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Cyn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Cyn = T((ahc, vyn) => {
  "use strict";
  vyn.exports = function (t, e) {
    var r = C0(),
      n = r.errorObj,
      o = r.isObject;
    function s(f, p) {
      if (o(f)) {
        if (f instanceof t) return f;
        var h = u(f);
        if (h === n) {
          p && p._pushContext();
          var g = t.reject(h.e);
          return (p && p._popContext(), g);
        } else if (typeof h == "function") {
          if (m(f)) {
            var g = new t(e);
            return (f._then(g._fulfill, g._reject, void 0, g, null), g);
          }
          return d(f, h, p);
        }
      }
      return f;
    }
    function a(f) {
      return f.then;
    }
    function u(f) {
      try {
        return a(f);
      } catch (p) {
        return ((n.e = p), n);
      }
    }
    var c = {}.hasOwnProperty;
    function m(f) {
      try {
        return c.call(f, "_promise0");
      } catch {
        return !1;
      }
    }
    function d(f, p, h) {
      var g = new t(e),
        b = g;
      (h && h._pushContext(), g._captureStackTrace(), h && h._popContext());
      var A = !0,
        y = r.tryCatch(p).call(f, E, v);
      ((A = !1), g && y === n && (g._rejectCallback(y.e, !0, !0), (g = null)));
      function E(C) {
        g && (g._resolveCallback(C), (g = null));
      }
      function v(C) {
        g && (g._rejectCallback(C, A, !0), (g = null));
      }
      return b;
    }
    return s;
  };
});