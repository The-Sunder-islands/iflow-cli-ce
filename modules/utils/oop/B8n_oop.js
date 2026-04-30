/**
 * @module B8n
 * @category utils/oop
 * @label oop
 * @position 921 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (B8n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var B8n = T((ZQt) => {
  "use strict";
  Object.defineProperty(ZQt, "__esModule", { value: !0 });
  var x9s = sc(),
    T9s = {
      keyword: "not",
      schemaType: ["object", "boolean"],
      trackErrors: !0,
      code(t) {
        let { gen: e, schema: r, it: n } = t;
        if ((0, x9s.alwaysValidSchema)(n, r)) {
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
  ZQt.default = T9s;
});