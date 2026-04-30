/**
 * @module RFt
 * @category utils/oop
 * @label oop
 * @position 770 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (RFt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var RFt = T((A8e) => {
  "use strict";
  Object.defineProperty(A8e, "__esModule", { value: !0 });
  A8e.validateAdditionalItems = void 0;
  var zH = Ha(),
    IFt = tc(),
    gds = {
      message: ({ params: { len: t } }) => (0, zH.str)`must NOT have more than ${t} items`,
      params: ({ params: { len: t } }) => (0, zH._)`{limit: ${t}}`,
    },
    bds = {
      keyword: "additionalItems",
      type: "array",
      schemaType: ["boolean", "object"],
      before: "uniqueItems",
      error: gds,
      code(t) {
        let { parentSchema: e, it: r } = t,
          { items: n } = e;
        if (!Array.isArray(n)) {
          (0, IFt.checkStrictMode)(r, '"additionalItems" is ignored when "items" is not an array of schemas');
          return;
        }
        Nhn(t, n);
      },
    };
  function Nhn(t, e) {
    let { gen: r, schema: n, data: o, keyword: s, it: a } = t;
    a.items = !0;
    let u = r.const("len", (0, zH._)`${o}.length`);
    if (n === !1) (t.setParams({ len: e.length }), t.pass((0, zH._)`${u} <= ${e.length}`));
    else if (typeof n == "object" && !(0, IFt.alwaysValidSchema)(a, n)) {
      let m = r.var("valid", (0, zH._)`${u} <= ${e.length}`);
      (r.if((0, zH.not)(m), () => c(m)), t.ok(m));
    }
    function c(m) {
      r.forRange("i", e.length, u, (d) => {
        (t.subschema({ keyword: s, dataProp: d, dataPropType: IFt.Type.Num }, m),
          a.allErrors || r.if((0, zH.not)(m), () => r.break()));
      });
    }
  }
  A8e.validateAdditionalItems = Nhn;
  A8e.default = bds;
});