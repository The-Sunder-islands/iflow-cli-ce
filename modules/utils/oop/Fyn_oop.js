/**
 * @module Fyn
 * @category utils/oop
 * @label oop
 * @position 952 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Fyn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Fyn = T((phc, Myn) => {
  "use strict";
  Myn.exports = function (t, e, r, n, o) {
    var s = C0(),
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
var $yn = T((hhc, Uyn) => {
  "use strict";
  Uyn.exports = function (t, e, r, n) {
    var o = !1,
      s = function (m, d) {
        this._reject(d);
      },
      a = function (m, d) {
        ((d.promiseRejectionQueued = !0), d.bindingPromise._then(s, s, null, this, m));
      },
      u = function (m, d) {
        (this._bitField & 50397184) === 0 && this._resolveCallback(d.target);
      },
      c = function (m, d) {
        d.promiseRejectionQueued || this._reject(m);
      };
    ((t.prototype.bind = function (m) {
      o ||
        ((o = !0),
        (t.prototype._propagateFrom = n.propagateFromFunction()),
        (t.prototype._boundValue = n.boundValueFunction()));
      var d = r(m),
        f = new t(e);
      f._propagateFrom(this, 1);
      var p = this._target();
      if ((f._setBoundTo(d), d instanceof t)) {
        var h = { promiseRejectionQueued: !1, promise: f, target: p, bindingPromise: d };
        (p._then(e, a, void 0, f, h), d._then(u, c, void 0, f, h), f._setOnCancel(d));
      } else f._resolveCallback(p);
      return f;
    }),
      (t.prototype._setBoundTo = function (m) {
        m !== void 0
          ? ((this._bitField = this._bitField | 2097152), (this._boundTo = m))
          : (this._bitField = this._bitField & -2097153);
      }),
      (t.prototype._isBound = function () {
        return (this._bitField & 2097152) === 2097152;
      }),
      (t.bind = function (m, d) {
        return t.resolve(d).bind(m);
      }));
  };
});