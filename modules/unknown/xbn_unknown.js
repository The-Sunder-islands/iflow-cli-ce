/**
 * @module xbn
 * @category unknown
 * @label unknown
 * @position 845 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (xbn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var xbn = T((I$t) => {
  "use strict";
  Object.defineProperty(I$t, "__esModule", { value: !0 });
  var NYe = _a(),
    wbn = nc(),
    ngs = {
      message: ({ params: t }) => (0, NYe.str)`must match "${t.ifClause}" schema`,
      params: ({ params: t }) => (0, NYe._)`{failingKeyword: ${t.ifClause}}`,
    },
    igs = {
      keyword: "if",
      schemaType: ["object", "boolean"],
      trackErrors: !0,
      error: ngs,
      code(t) {
        let { gen: e, parentSchema: r, it: n } = t;
        r.then === void 0 &&
          r.else === void 0 &&
          (0, wbn.checkStrictMode)(n, '"if" without "then" and "else" is ignored');
        let o = Sbn(n, "then"),
          s = Sbn(n, "else");
        if (!o && !s) return;
        let a = e.let("valid", !0),
          u = e.name("_valid");
        if ((c(), t.reset(), o && s)) {
          let d = e.let("ifClause");
          (t.setParams({ ifClause: d }), e.if(u, m("then", d), m("else", d)));
        } else o ? e.if(u, m("then")) : e.if((0, NYe.not)(u), m("else"));
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
              f ? e.assign(f, (0, NYe._)`${d}`) : t.setParams({ ifClause: d }));
          };
        }
      },
    };
  function Sbn(t, e) {
    let r = t.schema[e];
    return r !== void 0 && !(0, wbn.alwaysValidSchema)(t, r);
  }
  I$t.default = igs;
});