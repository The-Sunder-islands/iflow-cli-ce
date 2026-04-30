/**
 * @module Xhn
 * @category utils/oop
 * @label oop
 * @position 780 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Xhn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Xhn = T((QFt) => {
  "use strict";
  Object.defineProperty(QFt, "__esModule", { value: !0 });
  var jds = tc(),
    Qds = {
      keyword: "not",
      schemaType: ["object", "boolean"],
      trackErrors: !0,
      code(t) {
        let { gen: e, schema: r, it: n } = t;
        if ((0, jds.alwaysValidSchema)(n, r)) {
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
  QFt.default = Qds;
});