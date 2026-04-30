/**
 * @module oSt
 * @category app/hooks
 * @label iflow-hooks
 * @position 333 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (oSt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var oSt = T((NLe) => {
  "use strict";
  Object.defineProperty(NLe, "__esModule", { value: !0 });
  NLe.AbstractAsyncHooksContextManager = void 0;
  var Lko = Ae("events"),
    Mko = ["addListener", "on", "once", "prependListener", "prependOnceListener"],
    iSt = class {
      bind(e, r) {
        return r instanceof Lko.EventEmitter
          ? this._bindEventEmitter(e, r)
          : typeof r == "function"
            ? this._bindFunction(e, r)
            : r;
      }
      _bindFunction(e, r) {
        let n = this,
          o = function (...s) {
            return n.with(e, () => r.apply(this, s));
          };
        return (
          Object.defineProperty(o, "length", { enumerable: !1, configurable: !0, writable: !1, value: r.length }),
          o
        );
      }
      _bindEventEmitter(e, r) {
        return (
          this._getPatchMap(r) !== void 0 ||
            (this._createPatchMap(r),
            Mko.forEach((o) => {
              r[o] !== void 0 && (r[o] = this._patchAddListener(r, r[o], e));
            }),
            typeof r.removeListener == "function" &&
              (r.removeListener = this._patchRemoveListener(r, r.removeListener)),
            typeof r.off == "function" && (r.off = this._patchRemoveListener(r, r.off)),
            typeof r.removeAllListeners == "function" &&
              (r.removeAllListeners = this._patchRemoveAllListeners(r, r.removeAllListeners))),
          r
        );
      }
      _patchRemoveListener(e, r) {
        let n = this;
        return function (o, s) {
          let a = n._getPatchMap(e)?.[o];
          if (a === void 0) return r.call(this, o, s);
          let u = a.get(s);
          return r.call(this, o, u || s);
        };
      }
      _patchRemoveAllListeners(e, r) {
        let n = this;
        return function (o) {
          let s = n._getPatchMap(e);
          return (
            s !== void 0 && (arguments.length === 0 ? n._createPatchMap(e) : s[o] !== void 0 && delete s[o]),
            r.apply(this, arguments)
          );
        };
      }
      _patchAddListener(e, r, n) {
        let o = this;
        return function (s, a) {
          if (o._wrapped) return r.call(this, s, a);
          let u = o._getPatchMap(e);
          u === void 0 && (u = o._createPatchMap(e));
          let c = u[s];
          c === void 0 && ((c = new WeakMap()), (u[s] = c));
          let m = o.bind(n, a);
          (c.set(a, m), (o._wrapped = !0));
          try {
            return r.call(this, s, m);
          } finally {
            o._wrapped = !1;
          }
        };
      }
      _createPatchMap(e) {
        let r = Object.create(null);
        return ((e[this._kOtListeners] = r), r);
      }
      _getPatchMap(e) {
        return e[this._kOtListeners];
      }
      _kOtListeners = Symbol("OtListeners");
      _wrapped = !1;
    };
  NLe.AbstractAsyncHooksContextManager = iSt;
});