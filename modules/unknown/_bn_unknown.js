/**
 * @module _bn
 * @category unknown
 * @label unknown
 * @position 841 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (_bn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var _bn = T((w$t) => {
  "use strict";
  Object.defineProperty(w$t, "__esModule", { value: !0 });
  var z3s = nc(),
    Y3s = {
      keyword: "not",
      schemaType: ["object", "boolean"],
      trackErrors: !0,
      code(t) {
        let { gen: e, schema: r, it: n } = t;
        if ((0, z3s.alwaysValidSchema)(n, r)) {
          t.fail();
          return;
        }
        let o = e.name("valid");
        (t.subschema({ keyword: "not", compositeRule: !0, createErrors: !1, allErrors: !1 }, o),
          t.failResult(
            o,
            () => t.reset(),
            () => t.error(),
          ));
      },
      error: { message: "must NOT be valid" },
    };
  w$t.default = Y3s;
});