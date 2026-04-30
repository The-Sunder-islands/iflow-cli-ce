/**
 * @module Whi
 * @category utils/oop
 * @label oop
 * @position 1681 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Whi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Whi = T((JQc, Vhi) => {
  "use strict";
  Vhi.exports = function (t, e, r, n) {
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