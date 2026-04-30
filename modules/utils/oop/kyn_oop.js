/**
 * @module kyn
 * @category utils/oop
 * @label oop
 * @position 949 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (kyn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var kyn = T((mhc, Ryn) => {
  "use strict";
  Ryn.exports = function (t, e) {
    var r = C0(),
      n = t.CancellationError,
      o = r.errorObj;
    function s(f, p, h) {
      ((this.promise = f), (this.type = p), (this.handler = h), (this.called = !1), (this.cancelPromise = null));
    }
    s.prototype.isFinallyHandler = function () {
      return this.type === 0;
    };
    function a(f) {
      this.finallyHandler = f;
    }
    a.prototype._resultCancelled = function () {
      u(this.finallyHandler);
    };
    function u(f, p) {
      return f.cancelPromise != null
        ? (arguments.length > 1 ? f.cancelPromise._reject(p) : f.cancelPromise._cancel(), (f.cancelPromise = null), !0)
        : !1;
    }
    function c() {
      return d.call(this, this.promise._target()._settledValue());
    }
    function m(f) {
      if (!u(this, f)) return ((o.e = f), o);
    }
    function d(f) {
      var p = this.promise,
        h = this.handler;
      if (!this.called) {
        this.called = !0;
        var g = this.isFinallyHandler() ? h.call(p._boundValue()) : h.call(p._boundValue(), f);
        if (g !== void 0) {
          p._setReturnedNonUndefined();
          var b = e(g, p);
          if (b instanceof t) {
            if (this.cancelPromise != null)
              if (b._isCancelled()) {
                var A = new n("late cancellation observer");
                return (p._attachExtraTrace(A), (o.e = A), o);
              } else b.isPending() && b._attachCancellationCallback(new a(this));
            return b._then(c, m, void 0, this, void 0);
          }
        }
      }
      return p.isRejected() ? (u(this), (o.e = f), o) : (u(this), f);
    }
    return (
      (t.prototype._passThrough = function (f, p, h, g) {
        return typeof f != "function" ? this.then() : this._then(h, g, void 0, new s(this, p, f), void 0);
      }),
      (t.prototype.lastly = t.prototype.finally =
        function (f) {
          return this._passThrough(f, 0, d, d);
        }),
      (t.prototype.tap = function (f) {
        return this._passThrough(f, 1, d);
      }),
      s
    );
  };
});