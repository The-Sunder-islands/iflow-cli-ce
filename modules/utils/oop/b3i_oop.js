/**
 * @module b3i
 * @category utils/oop
 * @label oop
 * @position 1693 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (b3i) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var b3i = T((cGc, g3i) => {
  "use strict";
  g3i.exports = function (t, e, r, n, o, s) {
    var a = Z0(),
      u = a.tryCatch;
    function c(h, g, b, A) {
      this.constructor$(h);
      var y = t._getContext();
      ((this._fn = a.contextBind(y, g)),
        b !== void 0 && ((b = t.resolve(b)), b._attachCancellationCallback(this)),
        (this._initialValue = b),
        (this._currentCancellable = null),
        A === o
          ? (this._eachValues = Array(this._length))
          : A === 0
            ? (this._eachValues = null)
            : (this._eachValues = void 0),
        this._promise._captureStackTrace(),
        this._init$(void 0, -5));
    }
    (a.inherits(c, e),
      (c.prototype._gotAccum = function (h) {
        this._eachValues !== void 0 && this._eachValues !== null && h !== o && this._eachValues.push(h);
      }),
      (c.prototype._eachComplete = function (h) {
        return (this._eachValues !== null && this._eachValues.push(h), this._eachValues);
      }),
      (c.prototype._init = function () {}),
      (c.prototype._resolveEmptyArray = function () {
        this._resolve(this._eachValues !== void 0 ? this._eachValues : this._initialValue);
      }),
      (c.prototype.shouldCopyValues = function () {
        return !1;
      }),
      (c.prototype._resolve = function (h) {
        (this._promise._resolveCallback(h), (this._values = null));
      }),
      (c.prototype._resultCancelled = function (h) {
        if (h === this._initialValue) return this._cancel();
        this._isResolved() ||
          (this._resultCancelled$(),
          this._currentCancellable instanceof t && this._currentCancellable.cancel(),
          this._initialValue instanceof t && this._initialValue.cancel());
      }),
      (c.prototype._iterate = function (h) {
        this._values = h;
        var g,
          b,
          A = h.length;
        (this._initialValue !== void 0 ? ((g = this._initialValue), (b = 0)) : ((g = t.resolve(h[0])), (b = 1)),
          (this._currentCancellable = g));
        for (var y = b; y < A; ++y) {
          var E = h[y];
          E instanceof t && E.suppressUnhandledRejections();
        }
        if (!g.isRejected())
          for (; b < A; ++b) {
            var v = { accum: null, value: h[b], index: b, length: A, array: this };
            ((g = g._then(f, void 0, void 0, v, void 0)), (b & 127) === 0 && g._setNoAsyncGuarantee());
          }
        (this._eachValues !== void 0 && (g = g._then(this._eachComplete, void 0, void 0, this, void 0)),
          g._then(m, m, void 0, g, this));
      }),
      (t.prototype.reduce = function (h, g) {
        return d(this, h, g, null);
      }),
      (t.reduce = function (h, g, b, A) {
        return d(h, g, b, A);
      }));
    function m(h, g) {
      this.isFulfilled() ? g._resolve(h) : g._reject(h);
    }
    function d(h, g, b, A) {
      if (typeof g != "function") return r("expecting a function but got " + a.classString(g));
      var y = new c(h, g, b, A);
      return y.promise();
    }
    function f(h) {
      ((this.accum = h), this.array._gotAccum(h));
      var g = n(this.value, this.array._promise);
      return g instanceof t
        ? ((this.array._currentCancellable = g), g._then(p, void 0, void 0, this, void 0))
        : p.call(this, g);
    }
    function p(h) {
      var g = this.array,
        b = g._promise,
        A = u(g._fn);
      b._pushContext();
      var y;
      (g._eachValues !== void 0
        ? (y = A.call(b._boundValue(), h, this.index, this.length))
        : (y = A.call(b._boundValue(), this.accum, h, this.index, this.length)),
        y instanceof t && (g._currentCancellable = y));
      var E = b._popContext();
      return (s.checkForgottenReturns(y, E, g._eachValues !== void 0 ? "Promise.each" : "Promise.reduce", b), y);
    }
  };
});