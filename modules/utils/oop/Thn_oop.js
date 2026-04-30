/**
 * @module Thn
 * @category utils/oop
 * @label oop
 * @position 764 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Thn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Thn = T((EFt) => {
  "use strict";
  Object.defineProperty(EFt, "__esModule", { value: !0 });
  var g8e = Ha(),
    Hms = {
      message({ keyword: t, schemaCode: e }) {
        let r = t === "maxItems" ? "more" : "fewer";
        return (0, g8e.str)`must NOT have ${r} than ${e} items`;
      },
      params: ({ schemaCode: t }) => (0, g8e._)`{limit: ${t}}`,
    },
    Vms = {
      keyword: ["maxItems", "minItems"],
      type: "array",
      schemaType: "number",
      $data: !0,
      error: Hms,
      code(t) {
        let { keyword: e, data: r, schemaCode: n } = t,
          o = e === "maxItems" ? g8e.operators.GT : g8e.operators.LT;
        t.fail$data((0, g8e._)`${r}.length ${o} ${n}`);
      },
    };
  EFt.default = Vms;
});