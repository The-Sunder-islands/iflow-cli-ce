/**
 * @module a3i
 * @category utils/oop
 * @label oop
 * @position 1688 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (a3i) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var a3i = T((iGc, s3i) => {
  "use strict";
  s3i.exports = function (t, e, r, n, o, s) {
    var a = Z0(),
      u = a.tryCatch,
      c = a.errorObj,
      m = t._async;
    function d(p, h, g, b) {
      (this.constructor$(p), this._promise._captureStackTrace());
      var A = t._getContext();
      if (
        ((this._callback = a.contextBind(A, h)),
        (this._preservedValues = b === o ? new Array(this.length()) : null),
        (this._limit = g),
        (this._inFlight = 0),
        (this._queue = []),
        m.invoke(this._asyncInit, this, void 0),
        a.isArray(p))
      )
        for (var y = 0; y < p.length; ++y) {
          var E = p[y];
          E instanceof t && E.suppressUnhandledRejections();
        }
    }
    (a.inherits(d, e),
      (d.prototype._asyncInit = function () {
        this._init$(void 0, -2);
      }),
      (d.prototype._init = function () {}),
      (d.prototype._promiseFulfilled = function (p, h) {
        var g = this._values,
          b = this.length(),
          A = this._preservedValues,
          y = this._limit;
        if (h < 0) {
          if (((h = h * -1 - 1), (g[h] = p), y >= 1 && (this._inFlight--, this._drainQueue(), this._isResolved())))
            return !0;
        } else {
          if (y >= 1 && this._inFlight >= y) return ((g[h] = p), this._queue.push(h), !1);
          A !== null && (A[h] = p);
          var E = this._promise,
            v = this._callback,
            C = E._boundValue();
          E._pushContext();
          var x = u(v).call(C, p, h, b),
            k = E._popContext();
          if ((s.checkForgottenReturns(x, k, A !== null ? "Promise.filter" : "Promise.map", E), x === c))
            return (this._reject(x.e), !0);
          var R = n(x, this._promise);
          if (R instanceof t) {
            R = R._target();
            var P = R._bitField;
            if ((P & 50397184) === 0) return (y >= 1 && this._inFlight++, (g[h] = R), R._proxy(this, (h + 1) * -1), !1);
            if ((P & 33554432) !== 0) x = R._value();
            else return (P & 16777216) !== 0 ? (this._reject(R._reason()), !0) : (this._cancel(), !0);
          }
          g[h] = x;
        }
        var D = ++this._totalResolved;
        return D >= b ? (A !== null ? this._filter(g, A) : this._resolve(g), !0) : !1;
      }),
      (d.prototype._drainQueue = function () {
        for (var p = this._queue, h = this._limit, g = this._values; p.length > 0 && this._inFlight < h; ) {
          if (this._isResolved()) return;
          var b = p.pop();
          this._promiseFulfilled(g[b], b);
        }
      }),
      (d.prototype._filter = function (p, h) {
        for (var g = h.length, b = new Array(g), A = 0, y = 0; y < g; ++y) p[y] && (b[A++] = h[y]);
        ((b.length = A), this._resolve(b));
      }),
      (d.prototype.preservedValues = function () {
        return this._preservedValues;
      }));
    function f(p, h, g, b) {
      if (typeof h != "function") return r("expecting a function but got " + a.classString(h));
      var A = 0;
      if (g !== void 0)
        if (typeof g == "object" && g !== null) {
          if (typeof g.concurrency != "number")
            return t.reject(new TypeError("'concurrency' must be a number but it is " + a.classString(g.concurrency)));
          A = g.concurrency;
        } else return t.reject(new TypeError("options argument must be an object but it is " + a.classString(g)));
      return ((A = typeof A == "number" && isFinite(A) && A >= 1 ? A : 0), new d(p, h, A, b).promise());
    }
    ((t.prototype.map = function (p, h) {
      return f(this, p, h, null);
    }),
      (t.map = function (p, h, g, b) {
        return f(p, h, g, b);
      }));
  };
});