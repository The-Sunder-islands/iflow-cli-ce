/**
 * @module l5n
 * @category utils/oop
 * @label oop
 * @position 882 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (l5n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var l5n = T((hKe) => {
  "use strict";
  Object.defineProperty(hKe, "__esModule", { value: !0 });
  hKe.assignDefaults = void 0;
  var Tse = za(),
    I2s = sc();
  function R2s(t, e) {
    let { properties: r, items: n } = t.schema;
    if (e === "object" && r) for (let o in r) c5n(t, o, r[o].default);
    else e === "array" && Array.isArray(n) && n.forEach((o, s) => c5n(t, s, o.default));
  }
  hKe.assignDefaults = R2s;
  function c5n(t, e, r) {
    let { gen: n, compositeRule: o, data: s, opts: a } = t;
    if (r === void 0) return;
    let u = (0, Tse._)`${s}${(0, Tse.getProperty)(e)}`;
    if (o) {
      (0, I2s.checkStrictMode)(t, `default is ignored for: ${u}`);
      return;
    }
    let c = (0, Tse._)`${u} === undefined`;
    (a.useDefaults === "empty" && (c = (0, Tse._)`${c} || ${u} === null || ${u} === ""`),
      n.if(c, (0, Tse._)`${u} = ${(0, Tse.stringify)(r)}`));
  }
});