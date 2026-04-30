/**
 * @module j8n
 * @category utils/oop
 * @label oop
 * @position 925 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (j8n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var j8n = T((nGt) => {
  "use strict";
  Object.defineProperty(nGt, "__esModule", { value: !0 });
  var BKe = za(),
    $8n = sc(),
    B9s = {
      message: ({ params: t }) => (0, BKe.str)`must match "${t.ifClause}" schema`,
      params: ({ params: t }) => (0, BKe._)`{failingKeyword: ${t.ifClause}}`,
    },
    L9s = {
      keyword: "if",
      schemaType: ["object", "boolean"],
      trackErrors: !0,
      error: B9s,
      code(t) {
        let { gen: e, parentSchema: r, it: n } = t;
        r.then === void 0 &&
          r.else === void 0 &&
          (0, $8n.checkStrictMode)(n, '"if" without "then" and "else" is ignored');
        let o = U8n(n, "then"),
          s = U8n(n, "else");
        if (!o && !s) return;
        let a = e.let("valid", !0),
          u = e.name("_valid");
        if ((c(), t.reset(), o && s)) {
          let d = e.let("ifClause");
          (t.setParams({ ifClause: d }), e.if(u, m("then", d), m("else", d)));
        } else o ? e.if(u, m("then")) : e.if((0, BKe.not)(u), m("else"));
        t.pass(a, () => t.error(!0));
        function c() {
          let d = t.subschema({ keyword: "if", compositeRule: !0, createErrors: !1, allErrors: !1 }, u);
          t.mergeEvaluated(d);
        }
        function m(d, f) {
          return () => {
            let p = t.subschema({ keyword: d }, u);
            (e.assign(a, u),
              t.mergeValidEvaluated(p, a),
              f ? e.assign(f, (0, BKe._)`${d}`) : t.setParams({ ifClause: d }));
          };
        }
      },
    };
  function U8n(t, e) {
    let r = t.schema[e];
    return r !== void 0 && !(0, $8n.alwaysValidSchema)(t, r);
  }
  nGt.default = L9s;
});