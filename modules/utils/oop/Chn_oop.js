/**
 * @module Chn
 * @category utils/oop
 * @label oop
 * @position 760 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Chn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Chn = T((bFt) => {
  "use strict";
  Object.defineProperty(bFt, "__esModule", { value: !0 });
  var WH = Ha(),
    Nms = tc(),
    Pms = vhn(),
    Bms = {
      message({ keyword: t, schemaCode: e }) {
        let r = t === "maxLength" ? "more" : "fewer";
        return (0, WH.str)`must NOT have ${r} than ${e} characters`;
      },
      params: ({ schemaCode: t }) => (0, WH._)`{limit: ${t}}`,
    },
    Lms = {
      keyword: ["maxLength", "minLength"],
      type: "string",
      schemaType: "number",
      $data: !0,
      error: Bms,
      code(t) {
        let { keyword: e, data: r, schemaCode: n, it: o } = t,
          s = e === "maxLength" ? WH.operators.GT : WH.operators.LT,
          a = o.opts.unicode === !1 ? (0, WH._)`${r}.length` : (0, WH._)`${(0, Nms.useFunc)(t.gen, Pms.default)}(${r})`;
        t.fail$data((0, WH._)`${a} ${s} ${n}`);
      },
    };
  bFt.default = Lms;
});