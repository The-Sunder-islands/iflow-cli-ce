/**
 * @module Kyn
 * @category utils/oop
 * @label oop
 * @position 957 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Kyn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Kyn = T((_hc, Yyn) => {
  "use strict";
  Yyn.exports = function (t, e, r, n, o, s) {
    var a = t._getDomain,
      u = C0(),
      c = u.tryCatch,
      m = u.errorObj,
      d = t._async;
    function f(h, g, b, A) {
      (this.constructor$(h), this._promise._captureStackTrace());
      var y = a();
      ((this._callback = y === null ? g : u.domainBind(y, g)),
        (this._preservedValues = A === o ? new Array(this.length()) : null),
        (this._limit = b),
        (this._inFlight = 0),
        (this._queue = []),
        d.invoke(this._asyncInit, this, void 0));
    }
    (u.inherits(f, e),
      (f.prototype._asyncInit = function () {
        this._init$(void 0, -2);
      }),
      (f.prototype._init = function () {}),
      (f.prototype._promiseFulfilled = function (h, g) {
        var b = this._values,
          A = this.length(),
          y = this._preservedValues,
          E = this._limit;
        if (g < 0) {
          if (((g = g * -1 - 1), (b[g] = h), E >= 1 && (this._inFlight--, this._drainQueue(), this._isResolved())))
            return !0;
        } else {
          if (E >= 1 && this._inFlight >= E) return ((b[g] = h), this._queue.push(g), !1);
          y !== null && (y[g] = h);
          var v = this._promise,
            C = this._callback,
            x = v._boundValue();
          v._pushContext();
          var k = c(C).call(x, h, g, A),
            R = v._popContext();
          if ((s.checkForgottenReturns(k, R, y !== null ? "Promise.filter" : "Promise.map", v), k === m))
            return (this._reject(k.e), !0);
          var P = n(k, this._promise);
          if (P instanceof t) {
            P = P._target();
            var D = P._bitField;
            if ((D & 50397184) === 0) return (E >= 1 && this._inFlight++, (b[g] = P), P._proxy(this, (g + 1) * -1), !1);
            if ((D & 33554432) !== 0) k = P._value();
            else return (D & 16777216) !== 0 ? (this._reject(P._reason()), !0) : (this._cancel(), !0);
          }
          b[g] = k;
        }
        var O = ++this._totalResolved;
        return O >= A ? (y !== null ? this._filter(b, y) : this._resolve(b), !0) : !1;
      }),
      (f.prototype._drainQueue = function () {
        for (var h = this._queue, g = this._limit, b = this._values; h.length > 0 && this._inFlight < g; ) {
          if (this._isResolved()) return;
          var A = h.pop();
          this._promiseFulfilled(b[A], A);
        }
      }),
      (f.prototype._filter = function (h, g) {
        for (var b = g.length, A = new Array(b), y = 0, E = 0; E < b; ++E) h[E] && (A[y++] = g[E]);
        ((A.length = y), this._resolve(A));
      }),
      (f.prototype.preservedValues = function () {
        return this._preservedValues;
      }));
    function p(h, g, b, A) {
      if (typeof g != "function") return r("expecting a function but got " + u.classString(g));
      var y = 0;
      if (b !== void 0)
        if (typeof b == "object" && b !== null) {
          if (typeof b.concurrency != "number")
            return t.reject(new TypeError("'concurrency' must be a number but it is " + u.classString(b.concurrency)));
          y = b.concurrency;
        } else return t.reject(new TypeError("options argument must be an object but it is " + u.classString(b)));
      return ((y = typeof y == "number" && isFinite(y) && y >= 1 ? y : 0), new f(h, g, y, A).promise());
    }
    ((t.prototype.map = function (h, g) {
      return p(this, h, g, null);
    }),
      (t.map = function (h, g, b, A) {
        return p(h, g, b, A);
      }));
  };
});