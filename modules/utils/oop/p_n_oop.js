/**
 * @module p_n
 * @category utils/oop
 * @label oop
 * @position 966 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (p_n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var p_n = T((Ihc, f_n) => {
  "use strict";
  f_n.exports = function (t, e, r, n, o, s) {
    var a = t._getDomain,
      u = C0(),
      c = u.tryCatch;
    function m(g, b, A, y) {
      this.constructor$(g);
      var E = a();
      ((this._fn = E === null ? b : u.domainBind(E, b)),
        A !== void 0 && ((A = t.resolve(A)), A._attachCancellationCallback(this)),
        (this._initialValue = A),
        (this._currentCancellable = null),
        y === o
          ? (this._eachValues = Array(this._length))
          : y === 0
            ? (this._eachValues = null)
            : (this._eachValues = void 0),
        this._promise._captureStackTrace(),
        this._init$(void 0, -5));
    }
    (u.inherits(m, e),
      (m.prototype._gotAccum = function (g) {
        this._eachValues !== void 0 && this._eachValues !== null && g !== o && this._eachValues.push(g);
      }),
      (m.prototype._eachComplete = function (g) {
        return (this._eachValues !== null && this._eachValues.push(g), this._eachValues);
      }),
      (m.prototype._init = function () {}),
      (m.prototype._resolveEmptyArray = function () {
        this._resolve(this._eachValues !== void 0 ? this._eachValues : this._initialValue);
      }),
      (m.prototype.shouldCopyValues = function () {
        return !1;
      }),
      (m.prototype._resolve = function (g) {
        (this._promise._resolveCallback(g), (this._values = null));
      }),
      (m.prototype._resultCancelled = function (g) {
        if (g === this._initialValue) return this._cancel();
        this._isResolved() ||
          (this._resultCancelled$(),
          this._currentCancellable instanceof t && this._currentCancellable.cancel(),
          this._initialValue instanceof t && this._initialValue.cancel());
      }),
      (m.prototype._iterate = function (g) {
        this._values = g;
        var b,
          A,
          y = g.length;
        if (
          (this._initialValue !== void 0 ? ((b = this._initialValue), (A = 0)) : ((b = t.resolve(g[0])), (A = 1)),
          (this._currentCancellable = b),
          !b.isRejected())
        )
          for (; A < y; ++A) {
            var E = { accum: null, value: g[A], index: A, length: y, array: this };
            b = b._then(p, void 0, void 0, E, void 0);
          }
        (this._eachValues !== void 0 && (b = b._then(this._eachComplete, void 0, void 0, this, void 0)),
          b._then(d, d, void 0, b, this));
      }),
      (t.prototype.reduce = function (g, b) {
        return f(this, g, b, null);
      }),
      (t.reduce = function (g, b, A, y) {
        return f(g, b, A, y);
      }));
    function d(g, b) {
      this.isFulfilled() ? b._resolve(g) : b._reject(g);
    }
    function f(g, b, A, y) {
      if (typeof b != "function") return r("expecting a function but got " + u.classString(b));
      var E = new m(g, b, A, y);
      return E.promise();
    }
    function p(g) {
      ((this.accum = g), this.array._gotAccum(g));
      var b = n(this.value, this.array._promise);
      return b instanceof t
        ? ((this.array._currentCancellable = b), b._then(h, void 0, void 0, this, void 0))
        : h.call(this, b);
    }
    function h(g) {
      var b = this.array,
        A = b._promise,
        y = c(b._fn);
      A._pushContext();
      var E;
      (b._eachValues !== void 0
        ? (E = y.call(A._boundValue(), g, this.index, this.length))
        : (E = y.call(A._boundValue(), this.accum, g, this.index, this.length)),
        E instanceof t && (b._currentCancellable = E));
      var v = A._popContext();
      return (s.checkForgottenReturns(E, v, b._eachValues !== void 0 ? "Promise.each" : "Promise.reduce", A), E);
    }
  };
});