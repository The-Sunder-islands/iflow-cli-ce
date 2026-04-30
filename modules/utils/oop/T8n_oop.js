/**
 * @module T8n
 * @category utils/oop
 * @label oop
 * @position 917 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (T8n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var T8n = T((WQt) => {
  "use strict";
  Object.defineProperty(WQt, "__esModule", { value: !0 });
  var x8n = za(),
    b9s = sc(),
    A9s = {
      message: "property name must be valid",
      params: ({ params: t }) => (0, x8n._)`{propertyName: ${t.propertyName}}`,
    },
    y9s = {
      keyword: "propertyNames",
      type: "object",
      schemaType: ["object", "boolean"],
      error: A9s,
      code(t) {
        let { gen: e, schema: r, data: n, it: o } = t;
        if ((0, b9s.alwaysValidSchema)(o, r)) return;
        let s = e.name("valid");
        (e.forIn("key", n, (a) => {
          (t.setParams({ propertyName: a }),
            t.subschema(
              { keyword: "propertyNames", data: a, dataTypes: ["string"], propertyName: a, compositeRule: !0 },
              s,
            ),
            e.if((0, x8n.not)(s), () => {
              (t.error(!0), o.allErrors || e.break());
            }));
        }),
          t.ok(s));
      },
    };
  WQt.default = y9s;
});