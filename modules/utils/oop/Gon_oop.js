/**
 * @module Gon
 * @category utils/oop
 * @label oop
 * @position 657 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Gon) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Gon = T((bQe) => {
  "use strict";
  Object.defineProperty(bQe, "__esModule", { value: !0 });
  bQe.isPlainObject = void 0;
  var nJo = "[object Object]",
    iJo = "[object Null]",
    oJo = "[object Undefined]",
    sJo = Function.prototype,
    Uon = sJo.toString,
    aJo = Uon.call(Object),
    uJo = Object.getPrototypeOf,
    $on = Object.prototype,
    jon = $on.hasOwnProperty,
    Hq = Symbol ? Symbol.toStringTag : void 0,
    Qon = $on.toString;
  function cJo(t) {
    if (!lJo(t) || mJo(t) !== nJo) return !1;
    let e = uJo(t);
    if (e === null) return !0;
    let r = jon.call(e, "constructor") && e.constructor;
    return typeof r == "function" && r instanceof r && Uon.call(r) === aJo;
  }
  bQe.isPlainObject = cJo;
  function lJo(t) {
    return t != null && typeof t == "object";
  }
  function mJo(t) {
    return t == null ? (t === void 0 ? oJo : iJo) : Hq && Hq in Object(t) ? dJo(t) : fJo(t);
  }
  function dJo(t) {
    let e = jon.call(t, Hq),
      r = t[Hq],
      n = !1;
    try {
      ((t[Hq] = void 0), (n = !0));
    } catch {}
    let o = Qon.call(t);
    return (n && (e ? (t[Hq] = r) : delete t[Hq]), o);
  }
  function fJo(t) {
    return Qon.call(t);
  }
});