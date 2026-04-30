/**
 * @module u8n
 * @category utils/oop
 * @label oop
 * @position 903 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (u8n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var u8n = T((RQt) => {
  "use strict";
  Object.defineProperty(RQt, "__esModule", { value: !0 });
  var q9e = za(),
    w8s = {
      message({ keyword: t, schemaCode: e }) {
        let r = t === "maxProperties" ? "more" : "fewer";
        return (0, q9e.str)`must NOT have ${r} than ${e} properties`;
      },
      params: ({ schemaCode: t }) => (0, q9e._)`{limit: ${t}}`,
    },
    x8s = {
      keyword: ["maxProperties", "minProperties"],
      type: "object",
      schemaType: "number",
      $data: !0,
      error: w8s,
      code(t) {
        let { keyword: e, data: r, schemaCode: n } = t,
          o = e === "maxProperties" ? q9e.operators.GT : q9e.operators.LT;
        t.fail$data((0, q9e._)`Object.keys(${r}).length ${o} ${n}`);
      },
    };
  RQt.default = x8s;
});