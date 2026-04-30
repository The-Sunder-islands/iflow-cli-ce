/**
 * @module w3i
 * @category utils/oop
 * @label oop
 * @position 1697 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (w3i) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var w3i = T((fGc, S3i) => {
  "use strict";
  S3i.exports = function (t, e, r, n, o, s) {
    var a = Z0(),
      u = AN().TypeError,
      c = Z0().inherits,
      m = a.errorObj,
      d = a.tryCatch,
      f = {};
    function p(v) {
      setTimeout(function () {
        throw v;
      }, 0);
    }
    function h(v) {
      var C = r(v);
      return (
        C !== v &&
          typeof v._isDisposable == "function" &&
          typeof v._getDisposer == "function" &&
          v._isDisposable() &&
          C._setDisposable(v._getDisposer()),
        C
      );
    }
    function g(v, C) {
      var x = 0,
        k = v.length,
        R = new t(o);
      function P() {
        if (x >= k) return R._fulfill();
        var D = h(v[x++]);
        if (D instanceof t && D._isDisposable()) {
          try {
            D = r(D._getDisposer().tryDispose(C), v.promise);
          } catch (O) {
            return p(O);
          }
          if (D instanceof t) return D._then(P, p, null, null, null);
        }
        P();
      }
      return (P(), R);
    }
    function b(v, C, x) {
      ((this._data = v), (this._promise = C), (this._context = x));
    }
    ((b.prototype.data = function () {
      return this._data;
    }),
      (b.prototype.promise = function () {
        return this._promise;
      }),
      (b.prototype.resource = function () {
        return this.promise().isFulfilled() ? this.promise().value() : f;
      }),
      (b.prototype.tryDispose = function (v) {
        var C = this.resource(),
          x = this._context;
        x !== void 0 && x._pushContext();
        var k = C !== f ? this.doDispose(C, v) : null;
        return (x !== void 0 && x._popContext(), this._promise._unsetDisposable(), (this._data = null), k);
      }),
      (b.isDisposer = function (v) {
        return v != null && typeof v.resource == "function" && typeof v.tryDispose == "function";
      }));
    function A(v, C, x) {
      this.constructor$(v, C, x);
    }
    (c(A, b),
      (A.prototype.doDispose = function (v, C) {
        var x = this.data();
        return x.call(v, v, C);
      }));
    function y(v) {
      return b.isDisposer(v) ? (this.resources[this.index]._setDisposable(v), v.promise()) : v;
    }
    function E(v) {
      ((this.length = v), (this.promise = null), (this[v - 1] = null));
    }
    ((E.prototype._resultCancelled = function () {
      for (var v = this.length, C = 0; C < v; ++C) {
        var x = this[C];
        x instanceof t && x.cancel();
      }
    }),
      (t.using = function () {
        var v = arguments.length;
        if (v < 2) return e("you must pass at least 2 arguments to Promise.using");
        var C = arguments[v - 1];
        if (typeof C != "function") return e("expecting a function but got " + a.classString(C));
        var x,
          k = !0;
        v === 2 && Array.isArray(arguments[0])
          ? ((x = arguments[0]), (v = x.length), (k = !1))
          : ((x = arguments), v--);
        for (var R = new E(v), P = 0; P < v; ++P) {
          var D = x[P];
          if (b.isDisposer(D)) {
            var O = D;
            ((D = D.promise()), D._setDisposable(O));
          } else {
            var N = r(D);
            N instanceof t && (D = N._then(y, null, null, { resources: R, index: P }, void 0));
          }
          R[P] = D;
        }
        for (var F = new Array(R.length), P = 0; P < F.length; ++P) F[P] = t.resolve(R[P]).reflect();
        var B = t.all(F).then(function (G) {
            for (var Q = 0; Q < G.length; ++Q) {
              var K = G[Q];
              if (K.isRejected()) return ((m.e = K.error()), m);
              if (!K.isFulfilled()) {
                B.cancel();
                return;
              }
              G[Q] = K.value();
            }
            (L._pushContext(), (C = d(C)));
            var H = k ? C.apply(void 0, G) : C(G),
              U = L._popContext();
            return (s.checkForgottenReturns(H, U, "Promise.using", L), H);
          }),
          L = B.lastly(function () {
            var G = new t.PromiseInspection(B);
            return g(R, G);
          });
        return ((R.promise = L), L._setOnCancel(R), L);
      }),
      (t.prototype._setDisposable = function (v) {
        ((this._bitField = this._bitField | 131072), (this._disposer = v));
      }),
      (t.prototype._isDisposable = function () {
        return (this._bitField & 131072) > 0;
      }),
      (t.prototype._getDisposer = function () {
        return this._disposer;
      }),
      (t.prototype._unsetDisposable = function () {
        ((this._bitField = this._bitField & -131073), (this._disposer = void 0));
      }),
      (t.prototype.disposer = function (v) {
        if (typeof v == "function") return new A(v, this, n());
        throw new u();
      }));
  };
});