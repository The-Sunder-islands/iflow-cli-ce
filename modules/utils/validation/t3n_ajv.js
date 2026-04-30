/**
 * @module t3n
 * @category utils/validation
 * @label ajv
 * @position 783 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (t3n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var t3n = T((HFt) => {
  "use strict";
  Object.defineProperty(HFt, "__esModule", { value: !0 });
  var zds = tc(),
    Yds = {
      keyword: "allOf",
      schemaType: "array",
      code(t) {
        let { gen: e, schema: r, it: n } = t;
        if (!Array.isArray(r)) throw new Error("ajv implementation error");
        let o = e.name("valid");
        r.forEach((s, a) => {
          if ((0, zds.alwaysValidSchema)(n, s)) return;
          let u = t.subschema({ keyword: "allOf", schemaProp: a }, o);
          (t.ok(o), t.mergeEvaluated(u));
        });
      },
    };
  HFt.default = Yds;
});