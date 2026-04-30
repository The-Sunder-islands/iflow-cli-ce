/**
 * @module fqr
 * @category utils/oop
 * @label oop
 * @position 145 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (fqr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var fqr = T((wNe) => {
  "use strict";
  Object.defineProperty(wNe, "__esModule", { value: !0 });
  wNe.isPlainObject = void 0;
  var Iwo = "[object Object]",
    Rwo = "[object Null]",
    kwo = "[object Undefined]",
    Owo = Function.prototype,
    cqr = Owo.toString,
    Nwo = cqr.call(Object),
    Pwo = Object.getPrototypeOf,
    lqr = Object.prototype,
    mqr = lqr.hasOwnProperty,
    FG = Symbol ? Symbol.toStringTag : void 0,
    dqr = lqr.toString;
  function Bwo(t) {
    if (!Lwo(t) || Mwo(t) !== Iwo) return !1;
    let e = Pwo(t);
    if (e === null) return !0;
    let r = mqr.call(e, "constructor") && e.constructor;
    return typeof r == "function" && r instanceof r && cqr.call(r) === Nwo;
  }
  wNe.isPlainObject = Bwo;
  function Lwo(t) {
    return t != null && typeof t == "object";
  }
  function Mwo(t) {
    return t == null ? (t === void 0 ? kwo : Rwo) : FG && FG in Object(t) ? Fwo(t) : Uwo(t);
  }
  function Fwo(t) {
    let e = mqr.call(t, FG),
      r = t[FG],
      n = !1;
    try {
      ((t[FG] = void 0), (n = !0));
    } catch {}
    let o = dqr.call(t);
    return (n && (e ? (t[FG] = r) : delete t[FG]), o);
  }
  function Uwo(t) {
    return dqr.call(t);
  }
});