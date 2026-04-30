/**
 * @module qhn
 * @category utils/oop
 * @label oop
 * @position 776 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (qhn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var qhn = T((LFt) => {
  "use strict";
  Object.defineProperty(LFt, "__esModule", { value: !0 });
  var Ghn = Ha(),
    Ods = tc(),
    Nds = {
      message: "property name must be valid",
      params: ({ params: t }) => (0, Ghn._)`{propertyName: ${t.propertyName}}`,
    },
    Pds = {
      keyword: "propertyNames",
      type: "object",
      schemaType: ["object", "boolean"],
      error: Nds,
      code(t) {
        let { gen: e, schema: r, data: n, it: o } = t;
        if ((0, Ods.alwaysValidSchema)(o, r)) return;
        let s = e.name("valid");
        (e.forIn("key", n, (a) => {
          (t.setParams({ propertyName: a }),
            t.subschema(
              { keyword: "propertyNames", data: a, dataTypes: ["string"], propertyName: a, compositeRule: !0 },
              s,
            ),
            e.if((0, Ghn.not)(s), () => {
              (t.error(!0), o.allErrors || e.break());
            }));
        }),
          t.ok(s));
      },
    };
  LFt.default = Pds;
});