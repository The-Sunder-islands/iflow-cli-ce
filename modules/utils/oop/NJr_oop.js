/**
 * @module NJr
 * @category utils/oop
 * @label oop
 * @position 414 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (NJr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var NJr = T((uq) => {
  var DJr = [],
    Pwt = new WeakMap(),
    IJr = new WeakMap(),
    RJr = new Map(),
    kJr = [],
    KPo = {
      set(t, e, r) {
        return Pwt.get(t)[e](r);
      },
      get(t, e) {
        if (e === Symbol.toStringTag) return "Module";
        let r = IJr.get(t)[e];
        if (typeof r == "function") return r();
      },
      defineProperty(t, e, r) {
        if (!("value" in r)) throw new Error("Getters/setters are not supported for exports property descriptors.");
        return Pwt.get(t)[e](r.value);
      },
    };
  function JPo(t, e, r, n, o) {
    (RJr.set(t, o), Pwt.set(e, r), IJr.set(e, n));
    let s = new Proxy(e, KPo);
    (DJr.forEach((a) => a(t, s)), kJr.push([t, s]));
  }
  var OJr = !1;
  function XPo() {
    return OJr;
  }
  function ZPo(t) {
    OJr = t;
  }
  uq.register = JPo;
  uq.importHooks = DJr;
  uq.specifiers = RJr;
  uq.toHook = kJr;
  uq.getExperimentalPatchInternals = XPo;
  uq.setExperimentalPatchInternals = ZPo;
});