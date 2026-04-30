/**
 * @module rin
 * @category utils/oop
 * @label oop
 * @position 591 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (rin) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var rin = T((hje) => {
  "use strict";
  Object.defineProperty(hje, "__esModule", { value: !0 });
  hje.isPlainObject = void 0;
  var fzo = "[object Object]",
    pzo = "[object Null]",
    hzo = "[object Undefined]",
    gzo = Function.prototype,
    Xnn = gzo.toString,
    bzo = Xnn.call(Object),
    Azo = Object.getPrototypeOf,
    Znn = Object.prototype,
    ein = Znn.hasOwnProperty,
    Fq = Symbol ? Symbol.toStringTag : void 0,
    tin = Znn.toString;
  function yzo(t) {
    if (!_zo(t) || Ezo(t) !== fzo) return !1;
    let e = Azo(t);
    if (e === null) return !0;
    let r = ein.call(e, "constructor") && e.constructor;
    return typeof r == "function" && r instanceof r && Xnn.call(r) === bzo;
  }
  hje.isPlainObject = yzo;
  function _zo(t) {
    return t != null && typeof t == "object";
  }
  function Ezo(t) {
    return t == null ? (t === void 0 ? hzo : pzo) : Fq && Fq in Object(t) ? vzo(t) : Czo(t);
  }
  function vzo(t) {
    let e = ein.call(t, Fq),
      r = t[Fq],
      n = !1;
    try {
      ((t[Fq] = void 0), (n = !0));
    } catch {}
    let o = tin.call(t);
    return (n && (e ? (t[Fq] = r) : delete t[Fq]), o);
  }
  function Czo(t) {
    return tin.call(t);
  }
});