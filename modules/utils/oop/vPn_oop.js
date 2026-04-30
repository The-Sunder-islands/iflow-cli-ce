/**
 * @module vPn
 * @category utils/oop
 * @label oop
 * @position 1295 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (vPn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var vPn = T((xue) => {
  "use strict";
  var RMs =
    (xue && xue.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
  Object.defineProperty(xue, "__esModule", { value: !0 });
  xue.RowTransformerValidator = void 0;
  var _Pn = RMs(Get()),
    EPn = KXt(),
    JXt = class t {
      constructor() {
        ((this._rowTransform = null), (this._rowValidator = null));
      }
      static createTransform(e) {
        return EPn.isSyncTransform(e)
          ? (r, n) => {
              let o = null;
              try {
                o = e(r);
              } catch (s) {
                return n(s);
              }
              return n(null, o);
            }
          : e;
      }
      static createValidator(e) {
        return EPn.isSyncValidate(e)
          ? (r, n) => {
              n(null, { row: r, isValid: e(r) });
            }
          : (r, n) => {
              e(r, (o, s, a) =>
                o ? n(o) : s ? n(null, { row: r, isValid: s, reason: a }) : n(null, { row: r, isValid: !1, reason: a }),
              );
            };
      }
      set rowTransform(e) {
        if (!_Pn.default(e)) throw new TypeError("The transform should be a function");
        this._rowTransform = t.createTransform(e);
      }
      set rowValidator(e) {
        if (!_Pn.default(e)) throw new TypeError("The validate should be a function");
        this._rowValidator = t.createValidator(e);
      }
      transformAndValidate(e, r) {
        return this.callTransformer(e, (n, o) =>
          n
            ? r(n)
            : o
              ? this.callValidator(o, (s, a) =>
                  s
                    ? r(s)
                    : a && !a.isValid
                      ? r(null, { row: o, isValid: !1, reason: a.reason })
                      : r(null, { row: o, isValid: !0 }),
                )
              : r(null, { row: null, isValid: !0 }),
        );
      }
      callTransformer(e, r) {
        return this._rowTransform ? this._rowTransform(e, r) : r(null, e);
      }
      callValidator(e, r) {
        return this._rowValidator ? this._rowValidator(e, r) : r(null, { row: e, isValid: !0 });
      }
    };
  xue.RowTransformerValidator = JXt;
});