/**
 * @module Npr
 * @category utils/oop
 * @label oop
 * @position 1678 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Npr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Npr = T((WQc, Fhi) => {
  "use strict";
  Fhi.exports = function (t) {
    var e = Z0(),
      r = f$().keys,
      n = e.tryCatch,
      o = e.errorObj;
    function s(a, u, c) {
      return function (m) {
        var d = c._boundValue();
        e: for (var f = 0; f < a.length; ++f) {
          var p = a[f];
          if (p === Error || (p != null && p.prototype instanceof Error)) {
            if (m instanceof p) return n(u).call(d, m);
          } else if (typeof p == "function") {
            var h = n(p).call(d, m);
            if (h === o) return h;
            if (h) return n(u).call(d, m);
          } else if (e.isObject(m)) {
            for (var g = r(p), b = 0; b < g.length; ++b) {
              var A = g[b];
              if (p[A] != m[A]) continue e;
            }
            return n(u).call(d, m);
          }
        }
        return t;
      };
    }
    return s;
  };
});
var $hi = T((zQc, Uhi) => {
  "use strict";
  Uhi.exports = function (t, e, r) {
    var n = Z0(),
      o = t.CancellationError,
      s = n.errorObj,
      a = Npr()(r);
    function u(h, g, b) {
      ((this.promise = h), (this.type = g), (this.handler = b), (this.called = !1), (this.cancelPromise = null));
    }
    u.prototype.isFinallyHandler = function () {
      return this.type === 0;
    };
    function c(h) {
      this.finallyHandler = h;
    }
    c.prototype._resultCancelled = function () {
      m(this.finallyHandler);
    };
    function m(h, g) {
      return h.cancelPromise != null
        ? (arguments.length > 1 ? h.cancelPromise._reject(g) : h.cancelPromise._cancel(), (h.cancelPromise = null), !0)
        : !1;
    }
    function d() {
      return p.call(this, this.promise._target()._settledValue());
    }
    function f(h) {
      if (!m(this, h)) return ((s.e = h), s);
    }
    function p(h) {
      var g = this.promise,
        b = this.handler;
      if (!this.called) {
        this.called = !0;
        var A = this.isFinallyHandler() ? b.call(g._boundValue()) : b.call(g._boundValue(), h);
        if (A === r) return A;
        if (A !== void 0) {
          g._setReturnedNonUndefined();
          var y = e(A, g);
          if (y instanceof t) {
            if (this.cancelPromise != null)
              if (y._isCancelled()) {
                var E = new o("late cancellation observer");
                return (g._attachExtraTrace(E), (s.e = E), s);
              } else y.isPending() && y._attachCancellationCallback(new c(this));
            return y._then(d, f, void 0, this, void 0);
          }
        }
      }
      return g.isRejected() ? (m(this), (s.e = h), s) : (m(this), h);
    }
    return (
      (t.prototype._passThrough = function (h, g, b, A) {
        return typeof h != "function" ? this.then() : this._then(b, A, void 0, new u(this, g, h), void 0);
      }),
      (t.prototype.lastly = t.prototype.finally =
        function (h) {
          return this._passThrough(h, 0, p, p);
        }),
      (t.prototype.tap = function (h) {
        return this._passThrough(h, 1, p);
      }),
      (t.prototype.tapCatch = function (h) {
        var g = arguments.length;
        if (g === 1) return this._passThrough(h, 1, void 0, p);
        var b = new Array(g - 1),
          A = 0,
          y;
        for (y = 0; y < g - 1; ++y) {
          var E = arguments[y];
          if (n.isObject(E)) b[A++] = E;
          else
            return t.reject(
              new TypeError("tapCatch statement predicate: expecting an object but got " + n.classString(E)),
            );
        }
        b.length = A;
        var v = arguments[y];
        return this._passThrough(a(b, v, this), 1, void 0, p);
      }),
      u
    );
  };
});