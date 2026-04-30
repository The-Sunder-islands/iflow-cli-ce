/**
 * @module n8n
 * @category utils/oop
 * @label oop
 * @position 899 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (n8n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var n8n = T((xQt) => {
  "use strict";
  Object.defineProperty(xQt, "__esModule", { value: !0 });
  var G9e = za(),
    g8s = {
      message: ({ schemaCode: t }) => (0, G9e.str)`must be multiple of ${t}`,
      params: ({ schemaCode: t }) => (0, G9e._)`{multipleOf: ${t}}`,
    },
    b8s = {
      keyword: "multipleOf",
      type: "number",
      schemaType: "number",
      $data: !0,
      error: g8s,
      code(t) {
        let { gen: e, data: r, schemaCode: n, it: o } = t,
          s = o.opts.multipleOfPrecision,
          a = e.let("res"),
          u = s ? (0, G9e._)`Math.abs(Math.round(${a}) - ${a}) > 1e-${s}` : (0, G9e._)`${a} !== parseInt(${a})`;
        t.fail$data((0, G9e._)`(${n} === 0 || (${a} = ${r}/${n}, ${u}))`);
      },
    };
  xQt.default = b8s;
});