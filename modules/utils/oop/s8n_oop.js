/**
 * @module s8n
 * @category utils/oop
 * @label oop
 * @position 901 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (s8n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var s8n = T((DQt) => {
  "use strict";
  Object.defineProperty(DQt, "__esModule", { value: !0 });
  var vV = za(),
    A8s = sc(),
    y8s = o8n(),
    _8s = {
      message({ keyword: t, schemaCode: e }) {
        let r = t === "maxLength" ? "more" : "fewer";
        return (0, vV.str)`must NOT have ${r} than ${e} characters`;
      },
      params: ({ schemaCode: t }) => (0, vV._)`{limit: ${t}}`,
    },
    E8s = {
      keyword: ["maxLength", "minLength"],
      type: "string",
      schemaType: "number",
      $data: !0,
      error: _8s,
      code(t) {
        let { keyword: e, data: r, schemaCode: n, it: o } = t,
          s = e === "maxLength" ? vV.operators.GT : vV.operators.LT,
          a = o.opts.unicode === !1 ? (0, vV._)`${r}.length` : (0, vV._)`${(0, A8s.useFunc)(t.gen, y8s.default)}(${r})`;
        t.fail$data((0, vV._)`${a} ${s} ${n}`);
      },
    };
  DQt.default = E8s;
});