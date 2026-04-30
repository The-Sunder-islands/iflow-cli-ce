/**
 * @module F8n
 * @category utils/validation
 * @label ajv
 * @position 924 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (F8n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var F8n = T((rGt) => {
  "use strict";
  Object.defineProperty(rGt, "__esModule", { value: !0 });
  var N9s = sc(),
    P9s = {
      keyword: "allOf",
      schemaType: "array",
      code(t) {
        let { gen: e, schema: r, it: n } = t;
        if (!Array.isArray(r)) throw new Error("ajv implementation error");
        let o = e.name("valid");
        r.forEach((s, a) => {
          if ((0, N9s.alwaysValidSchema)(n, s)) return;
          let u = t.subschema({ keyword: "allOf", schemaProp: a }, o);
          (t.ok(o), t.mergeEvaluated(u));
        });
      },
    };
  rGt.default = P9s;
});