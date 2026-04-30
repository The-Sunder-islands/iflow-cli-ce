/**
 * @module Y3n
 * @category utils/oop
 * @label oop
 * @position 806 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Y3n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Y3n = T((fYe) => {
  "use strict";
  Object.defineProperty(fYe, "__esModule", { value: !0 });
  fYe.assignDefaults = void 0;
  var Koe = _a(),
    Jfs = nc();
  function Xfs(t, e) {
    let { properties: r, items: n } = t.schema;
    if (e === "object" && r) for (let o in r) z3n(t, o, r[o].default);
    else e === "array" && Array.isArray(n) && n.forEach((o, s) => z3n(t, s, o.default));
  }
  fYe.assignDefaults = Xfs;
  function z3n(t, e, r) {
    let { gen: n, compositeRule: o, data: s, opts: a } = t;
    if (r === void 0) return;
    let u = (0, Koe._)`${s}${(0, Koe.getProperty)(e)}`;
    if (o) {
      (0, Jfs.checkStrictMode)(t, `default is ignored for: ${u}`);
      return;
    }
    let c = (0, Koe._)`${u} === undefined`;
    (a.useDefaults === "empty" && (c = (0, Koe._)`${c} || ${u} === null || ${u} === ""`),
      n.if(c, (0, Koe._)`${u} = ${(0, Koe.stringify)(r)}`));
  }
});