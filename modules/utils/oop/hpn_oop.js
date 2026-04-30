/**
 * @module hpn
 * @category utils/oop
 * @label oop
 * @position 737 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (hpn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var hpn = T((kze) => {
  "use strict";
  Object.defineProperty(kze, "__esModule", { value: !0 });
  kze.assignDefaults = void 0;
  var Loe = Ha(),
    fls = tc();
  function pls(t, e) {
    let { properties: r, items: n } = t.schema;
    if (e === "object" && r) for (let o in r) ppn(t, o, r[o].default);
    else e === "array" && Array.isArray(n) && n.forEach((o, s) => ppn(t, s, o.default));
  }
  kze.assignDefaults = pls;
  function ppn(t, e, r) {
    let { gen: n, compositeRule: o, data: s, opts: a } = t;
    if (r === void 0) return;
    let u = (0, Loe._)`${s}${(0, Loe.getProperty)(e)}`;
    if (o) {
      (0, fls.checkStrictMode)(t, `default is ignored for: ${u}`);
      return;
    }
    let c = (0, Loe._)`${u} === undefined`;
    (a.useDefaults === "empty" && (c = (0, Loe._)`${c} || ${u} === null || ${u} === ""`),
      n.if(c, (0, Loe._)`${u} = ${(0, Loe.stringify)(r)}`));
  }
});