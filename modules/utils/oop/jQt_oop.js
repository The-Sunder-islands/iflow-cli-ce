/**
 * @module jQt
 * @category utils/oop
 * @label oop
 * @position 911 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (jQt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var jQt = T((Y9e) => {
  "use strict";
  Object.defineProperty(Y9e, "__esModule", { value: !0 });
  Y9e.validateAdditionalItems = void 0;
  var CV = za(),
    $Qt = sc(),
    t9s = {
      message: ({ params: { len: t } }) => (0, CV.str)`must NOT have more than ${t} items`,
      params: ({ params: { len: t } }) => (0, CV._)`{limit: ${t}}`,
    },
    r9s = {
      keyword: "additionalItems",
      type: "array",
      schemaType: ["boolean", "object"],
      before: "uniqueItems",
      error: t9s,
      code(t) {
        let { parentSchema: e, it: r } = t,
          { items: n } = e;
        if (!Array.isArray(n)) {
          (0, $Qt.checkStrictMode)(r, '"additionalItems" is ignored when "items" is not an array of schemas');
          return;
        }
        g8n(t, n);
      },
    };
  function g8n(t, e) {
    let { gen: r, schema: n, data: o, keyword: s, it: a } = t;
    a.items = !0;
    let u = r.const("len", (0, CV._)`${o}.length`);
    if (n === !1) (t.setParams({ len: e.length }), t.pass((0, CV._)`${u} <= ${e.length}`));
    else if (typeof n == "object" && !(0, $Qt.alwaysValidSchema)(a, n)) {
      let m = r.var("valid", (0, CV._)`${u} <= ${e.length}`);
      (r.if((0, CV.not)(m), () => c(m)), t.ok(m));
    }
    function c(m) {
      r.forRange("i", e.length, u, (d) => {
        (t.subschema({ keyword: s, dataProp: d, dataPropType: $Qt.Type.Num }, m),
          a.allErrors || r.if((0, CV.not)(m), () => r.break()));
      });
    }
  }
  Y9e.validateAdditionalItems = g8n;
  Y9e.default = r9s;
});