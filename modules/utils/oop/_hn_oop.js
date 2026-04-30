/**
 * @module _hn
 * @category utils/oop
 * @label oop
 * @position 758 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (_hn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var _hn = T((hFt) => {
  "use strict";
  Object.defineProperty(hFt, "__esModule", { value: !0 });
  var d8e = Ha(),
    kms = {
      message: ({ schemaCode: t }) => (0, d8e.str)`must be multiple of ${t}`,
      params: ({ schemaCode: t }) => (0, d8e._)`{multipleOf: ${t}}`,
    },
    Oms = {
      keyword: "multipleOf",
      type: "number",
      schemaType: "number",
      $data: !0,
      error: kms,
      code(t) {
        let { gen: e, data: r, schemaCode: n, it: o } = t,
          s = o.opts.multipleOfPrecision,
          a = e.let("res"),
          u = s ? (0, d8e._)`Math.abs(Math.round(${a}) - ${a}) > 1e-${s}` : (0, d8e._)`${a} !== parseInt(${a})`;
        t.fail$data((0, d8e._)`(${n} === 0 || (${a} = ${r}/${n}, ${u}))`);
      },
    };
  hFt.default = Oms;
});