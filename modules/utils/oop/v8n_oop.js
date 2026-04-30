/**
 * @module v8n
 * @category utils/oop
 * @label oop
 * @position 915 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (v8n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var v8n = T((HQt) => {
  "use strict";
  Object.defineProperty(HQt, "__esModule", { value: !0 });
  var EE = za(),
    RKe = sc(),
    d9s = {
      message: ({ params: { min: t, max: e } }) =>
        e === void 0
          ? (0, EE.str)`must contain at least ${t} valid item(s)`
          : (0, EE.str)`must contain at least ${t} and no more than ${e} valid item(s)`,
      params: ({ params: { min: t, max: e } }) =>
        e === void 0 ? (0, EE._)`{minContains: ${t}}` : (0, EE._)`{minContains: ${t}, maxContains: ${e}}`,
    },
    f9s = {
      keyword: "contains",
      type: "array",
      schemaType: ["object", "boolean"],
      before: "uniqueItems",
      trackErrors: !0,
      error: d9s,
      code(t) {
        let { gen: e, schema: r, parentSchema: n, data: o, it: s } = t,
          a,
          u,
          { minContains: c, maxContains: m } = n;
        s.opts.next ? ((a = c === void 0 ? 1 : c), (u = m)) : (a = 1);
        let d = e.const("len", (0, EE._)`${o}.length`);
        if ((t.setParams({ min: a, max: u }), u === void 0 && a === 0)) {
          (0, RKe.checkStrictMode)(s, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
          return;
        }
        if (u !== void 0 && a > u) {
          ((0, RKe.checkStrictMode)(s, '"minContains" > "maxContains" is always invalid'), t.fail());
          return;
        }
        if ((0, RKe.alwaysValidSchema)(s, r)) {
          let b = (0, EE._)`${d} >= ${a}`;
          (u !== void 0 && (b = (0, EE._)`${b} && ${d} <= ${u}`), t.pass(b));
          return;
        }
        s.items = !0;
        let f = e.name("valid");
        (u === void 0 && a === 1
          ? h(f, () => e.if(f, () => e.break()))
          : a === 0
            ? (e.let(f, !0), u !== void 0 && e.if((0, EE._)`${o}.length > 0`, p))
            : (e.let(f, !1), p()),
          t.result(f, () => t.reset()));
        function p() {
          let b = e.name("_valid"),
            A = e.let("count", 0);
          h(b, () => e.if(b, () => g(A)));
        }
        function h(b, A) {
          e.forRange("i", 0, d, (y) => {
            (t.subschema({ keyword: "contains", dataProp: y, dataPropType: RKe.Type.Num, compositeRule: !0 }, b), A());
          });
        }
        function g(b) {
          (e.code((0, EE._)`${b}++`),
            u === void 0
              ? e.if((0, EE._)`${b} >= ${a}`, () => e.assign(f, !0).break())
              : (e.if((0, EE._)`${b} > ${u}`, () => e.assign(f, !1).break()),
                a === 1 ? e.assign(f, !0) : e.if((0, EE._)`${b} >= ${a}`, () => e.assign(f, !0))));
        }
      },
    };
  HQt.default = f9s;
});