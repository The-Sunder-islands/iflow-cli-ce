/**
 * @module Ppr
 * @category utils/oop
 * @label oop
 * @position 1679 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Ppr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Ppr = T((YQc, Ghi) => {
  "use strict";
  var jhi = Z0(),
    Qxa = jhi.maybeWrapAsError,
    Gxa = AN(),
    qxa = Gxa.OperationalError,
    Qhi = f$();
  function Hxa(t) {
    return t instanceof Error && Qhi.getPrototypeOf(t) === Error.prototype;
  }
  var Vxa = /^(?:name|message|stack|cause)$/;
  function Wxa(t) {
    var e;
    if (Hxa(t)) {
      ((e = new qxa(t)), (e.name = t.name), (e.message = t.message), (e.stack = t.stack));
      for (var r = Qhi.keys(t), n = 0; n < r.length; ++n) {
        var o = r[n];
        Vxa.test(o) || (e[o] = t[o]);
      }
      return e;
    }
    return (jhi.markAsOriginatingFromRejection(t), t);
  }
  function zxa(t, e) {
    return function (r, n) {
      if (t !== null) {
        if (r) {
          var o = Wxa(Qxa(r));
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
  Ghi.exports = zxa;
});