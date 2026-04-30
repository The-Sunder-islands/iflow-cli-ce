/**
 * @module Ygn
 * @category unknown
 * @label unknown
 * @position 828 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Ygn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Ygn = T((i$t) => {
  "use strict";
  Object.defineProperty(i$t, "__esModule", { value: !0 });
  var G8e = _a(),
    Xhs = {
      message({ keyword: t, schemaCode: e }) {
        let r = t === "maxItems" ? "more" : "fewer";
        return (0, G8e.str)`must NOT have ${r} than ${e} items`;
      },
      params: ({ schemaCode: t }) => (0, G8e._)`{limit: ${t}}`,
    },
    Zhs = {
      keyword: ["maxItems", "minItems"],
      type: "array",
      schemaType: "number",
      $data: !0,
      error: Xhs,
      code(t) {
        let { keyword: e, data: r, schemaCode: n } = t,
          o = e === "maxItems" ? G8e.operators.GT : G8e.operators.LT;
        t.fail$data((0, G8e._)`${r}.length ${o} ${n}`);
      },
    };
  i$t.default = Zhs;
});