/**
 * @module SKn
 * @category utils/oop
 * @label oop
 * @position 1489 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (SKn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var SKn = T((xsr) => {
  "use strict";
  Object.defineProperty(xsr, "__esModule", { value: !0 });
  xsr.enumToMap = bsa;
  function bsa(t, e = [], r = []) {
    let n = (e?.length ?? 0) === 0,
      o = (r?.length ?? 0) === 0;
    return Object.fromEntries(
      Object.entries(t).filter(([, s]) => typeof s == "number" && (n || e.includes(s)) && (o || !r.includes(s))),
    );
  }
});