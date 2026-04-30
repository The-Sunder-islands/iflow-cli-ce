/**
 * @module whn
 * @category utils/oop
 * @label oop
 * @position 762 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (whn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var whn = T((yFt) => {
  "use strict";
  Object.defineProperty(yFt, "__esModule", { value: !0 });
  var f8e = Ha(),
    $ms = {
      message({ keyword: t, schemaCode: e }) {
        let r = t === "maxProperties" ? "more" : "fewer";
        return (0, f8e.str)`must NOT have ${r} than ${e} properties`;
      },
      params: ({ schemaCode: t }) => (0, f8e._)`{limit: ${t}}`,
    },
    jms = {
      keyword: ["maxProperties", "minProperties"],
      type: "object",
      schemaType: "number",
      $data: !0,
      error: $ms,
      code(t) {
        let { keyword: e, data: r, schemaCode: n } = t,
          o = e === "maxProperties" ? f8e.operators.GT : f8e.operators.LT;
        t.fail$data((0, f8e._)`Object.keys(${r}).length ${o} ${n}`);
      },
    };
  yFt.default = jms;
});