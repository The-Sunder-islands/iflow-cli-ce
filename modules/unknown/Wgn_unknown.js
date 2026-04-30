/**
 * @module Wgn
 * @category unknown
 * @label unknown
 * @position 826 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Wgn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Wgn = T((r$t) => {
  "use strict";
  Object.defineProperty(r$t, "__esModule", { value: !0 });
  var $8e = _a(),
    Whs = {
      message({ keyword: t, schemaCode: e }) {
        let r = t === "maxProperties" ? "more" : "fewer";
        return (0, $8e.str)`must NOT have ${r} than ${e} properties`;
      },
      params: ({ schemaCode: t }) => (0, $8e._)`{limit: ${t}}`,
    },
    zhs = {
      keyword: ["maxProperties", "minProperties"],
      type: "object",
      schemaType: "number",
      $data: !0,
      error: Whs,
      code(t) {
        let { keyword: e, data: r, schemaCode: n } = t,
          o = e === "maxProperties" ? $8e.operators.GT : $8e.operators.LT;
        t.fail$data((0, $8e._)`Object.keys(${r}).length ${o} ${n}`);
      },
    };
  r$t.default = zhs;
});