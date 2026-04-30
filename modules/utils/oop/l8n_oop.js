/**
 * @module l8n
 * @category utils/oop
 * @label oop
 * @position 905 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (l8n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var l8n = T((OQt) => {
  "use strict";
  Object.defineProperty(OQt, "__esModule", { value: !0 });
  var W9e = za(),
    R8s = {
      message({ keyword: t, schemaCode: e }) {
        let r = t === "maxItems" ? "more" : "fewer";
        return (0, W9e.str)`must NOT have ${r} than ${e} items`;
      },
      params: ({ schemaCode: t }) => (0, W9e._)`{limit: ${t}}`,
    },
    k8s = {
      keyword: ["maxItems", "minItems"],
      type: "array",
      schemaType: "number",
      $data: !0,
      error: R8s,
      code(t) {
        let { keyword: e, data: r, schemaCode: n } = t,
          o = e === "maxItems" ? W9e.operators.GT : W9e.operators.LT;
        t.fail$data((0, W9e._)`${r}.length ${o} ${n}`);
      },
    };
  OQt.default = k8s;
});