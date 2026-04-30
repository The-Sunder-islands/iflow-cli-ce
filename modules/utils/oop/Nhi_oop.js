/**
 * @module Nhi
 * @category utils/oop
 * @label oop
 * @position 1675 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Nhi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Nhi = T((qQc, Ohi) => {
  "use strict";
  Ohi.exports = function (t, e, r, n, o) {
    var s = Z0(),
      a = s.isArray;
    function u(m) {
      switch (m) {
        case -2:
          return [];
        case -3:
          return {};
        case -6:
          return new Map();
      }
    }
    function c(m) {
      var d = (this._promise = new t(e));
      (m instanceof t && (d._propagateFrom(m, 3), m.suppressUnhandledRejections()),
        d._setOnCancel(this),
        (this._values = m),
        (this._length = 0),
        (this._totalResolved = 0),
        this._init(void 0, -2));
    }
    return (
      s.inherits(c, o),
      (c.prototype.length = function () {
        return this._length;
      }),
      (c.prototype.promise = function () {
        return this._promise;
      }),
      (c.prototype._init = function m(d, f) {
        var p = r(this._values, this._promise);
        if (p instanceof t) {
          p = p._target();
          var h = p._bitField;
          if (((this._values = p), (h & 50397184) === 0))
            return (this._promise._setAsyncGuaranteed(), p._then(m, this._reject, void 0, this, f));
          if ((h & 33554432) !== 0) p = p._value();
          else return (h & 16777216) !== 0 ? this._reject(p._reason()) : this._cancel();
        }
        if (((p = s.asArray(p)), p === null)) {
          var g = n("expecting an array or an iterable object but got " + s.classString(p)).reason();
          this._promise._rejectCallback(g, !1);
          return;
        }
        if (p.length === 0) {
          f === -5 ? this._resolveEmptyArray() : this._resolve(u(f));
          return;
        }
        this._iterate(p);
      }),
      (c.prototype._iterate = function (m) {
        var d = this.getActualLength(m.length);
        ((this._length = d), (this._values = this.shouldCopyValues() ? new Array(d) : this._values));
        for (var f = this._promise, p = !1, h = null, g = 0; g < d; ++g) {
          var b = r(m[g], f);
          (b instanceof t ? ((b = b._target()), (h = b._bitField)) : (h = null),
            p
              ? h !== null && b.suppressUnhandledRejections()
              : h !== null
                ? (h & 50397184) === 0
                  ? (b._proxy(this, g), (this._values[g] = b))
                  : (h & 33554432) !== 0
                    ? (p = this._promiseFulfilled(b._value(), g))
                    : (h & 16777216) !== 0
                      ? (p = this._promiseRejected(b._reason(), g))
                      : (p = this._promiseCancelled(g))
                : (p = this._promiseFulfilled(b, g)));
        }
        p || f._setAsyncGuaranteed();
      }),
      (c.prototype._isResolved = function () {
        return this._values === null;
      }),
      (c.prototype._resolve = function (m) {
        ((this._values = null), this._promise._fulfill(m));
      }),
      (c.prototype._cancel = function () {
        this._isResolved() || !this._promise._isCancellable() || ((this._values = null), this._promise._cancel());
      }),
      (c.prototype._reject = function (m) {
        ((this._values = null), this._promise._rejectCallback(m, !1));
      }),
      (c.prototype._promiseFulfilled = function (m, d) {
        this._values[d] = m;
        var f = ++this._totalResolved;
        return f >= this._length ? (this._resolve(this._values), !0) : !1;
      }),
      (c.prototype._promiseCancelled = function () {
        return (this._cancel(), !0);
      }),
      (c.prototype._promiseRejected = function (m) {
        return (this._totalResolved++, this._reject(m), !0);
      }),
      (c.prototype._resultCancelled = function () {
        if (!this._isResolved()) {
          var m = this._values;
          if ((this._cancel(), m instanceof t)) m.cancel();
          else for (var d = 0; d < m.length; ++d) m[d] instanceof t && m[d].cancel();
        }
      }),
      (c.prototype.shouldCopyValues = function () {
        return !0;
      }),
      (c.prototype.getActualLength = function (m) {
        return m;
      }),
      c
    );
  };
});