/**
 * @module Hhi
 * @category utils/oop
 * @label oop
 * @position 1680 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Hhi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Hhi = T((KQc, qhi) => {
  "use strict";
  qhi.exports = function (t, e, r, n, o) {
    var s = Z0(),
      a = s.tryCatch;
    ((t.method = function (u) {
      if (typeof u != "function") throw new t.TypeError("expecting a function but got " + s.classString(u));
      return function () {
        var c = new t(e);
        (c._captureStackTrace(), c._pushContext());
        var m = a(u).apply(this, arguments),
          d = c._popContext();
        return (o.checkForgottenReturns(m, d, "Promise.method", c), c._resolveFromSyncValue(m), c);
      };
    }),
      (t.attempt = t.try =
        function (u) {
          if (typeof u != "function") return n("expecting a function but got " + s.classString(u));
          var c = new t(e);
          (c._captureStackTrace(), c._pushContext());
          var m;
          if (arguments.length > 1) {
            o.deprecated("calling Promise.try with more than 1 argument");
            var d = arguments[1],
              f = arguments[2];
            m = s.isArray(d) ? a(u).apply(f, d) : a(u).call(f, d);
          } else m = a(u)();
          var p = c._popContext();
          return (o.checkForgottenReturns(m, p, "Promise.try", c), c._resolveFromSyncValue(m), c);
        }),
      (t.prototype._resolveFromSyncValue = function (u) {
        u === s.errorObj ? this._rejectCallback(u.e, !1) : this._resolveCallback(u, !0);
      }));
  };
});