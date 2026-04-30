/**
 * @module Qgn
 * @category utils/oop
 * @label oop
 * @position 822 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Qgn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Qgn = T((XUt) => {
  "use strict";
  Object.defineProperty(XUt, "__esModule", { value: !0 });
  var U8e = _a(),
    Fhs = {
      message: ({ schemaCode: t }) => (0, U8e.str)`must be multiple of ${t}`,
      params: ({ schemaCode: t }) => (0, U8e._)`{multipleOf: ${t}}`,
    },
    Uhs = {
      keyword: "multipleOf",
      type: "number",
      schemaType: "number",
      $data: !0,
      error: Fhs,
      code(t) {
        let { gen: e, data: r, schemaCode: n, it: o } = t,
          s = o.opts.multipleOfPrecision,
          a = e.let("res"),
          u = s ? (0, U8e._)`Math.abs(Math.round(${a}) - ${a}) > 1e-${s}` : (0, U8e._)`${a} !== parseInt(${a})`;
        t.fail$data((0, U8e._)`(${n} === 0 || (${a} = ${r}/${n}, ${u}))`);
      },
    };
  XUt.default = Uhs;
});