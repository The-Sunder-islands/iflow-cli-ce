/**
 * @module sHt
 * @category utils/oop
 * @label oop
 * @position 951 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (sHt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var sHt = T((fhc, Lyn) => {
  "use strict";
  var Pyn = C0(),
    X6s = Pyn.maybeWrapAsError,
    Z6s = Nk(),
    eys = Z6s.OperationalError,
    Byn = $V();
  function tys(t) {
    return t instanceof Error && Byn.getPrototypeOf(t) === Error.prototype;
  }
  var rys = /^(?:name|message|stack|cause)$/;
  function nys(t) {
    var e;
    if (tys(t)) {
      ((e = new eys(t)), (e.name = t.name), (e.message = t.message), (e.stack = t.stack));
      for (var r = Byn.keys(t), n = 0; n < r.length; ++n) {
        var o = r[n];
        rys.test(o) || (e[o] = t[o]);
      }
      return e;
    }
    return (Pyn.markAsOriginatingFromRejection(t), t);
  }
  function iys(t, e) {
    return function (r, n) {
      if (t !== null) {
        if (r) {
          var o = nys(X6s(r));
          (t._attachExtraTrace(o), t._reject(o));
        } else if (!e) t._fulfill(n);
        else {
          for (var s = arguments.length, a = new Array(Math.max(s - 1, 0)), u = 1; u < s; ++u) a[u - 1] = arguments[u];
          t._fulfill(a);
        }
        t = null;
      }
    };
  }
  Lyn.exports = iys;
});