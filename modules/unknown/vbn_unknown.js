/**
 * @module vbn
 * @category unknown
 * @label unknown
 * @position 843 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (vbn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var vbn = T((T$t) => {
  "use strict";
  Object.defineProperty(T$t, "__esModule", { value: !0 });
  var OYe = _a(),
    X3s = nc(),
    Z3s = {
      message: "must match exactly one schema in oneOf",
      params: ({ params: t }) => (0, OYe._)`{passingSchemas: ${t.passing}}`,
    },
    egs = {
      keyword: "oneOf",
      schemaType: "array",
      trackErrors: !0,
      error: Z3s,
      code(t) {
        let { gen: e, schema: r, parentSchema: n, it: o } = t;
        if (!Array.isArray(r)) throw new Error("ajv implementation error");
        if (o.opts.discriminator && n.discriminator) return;
        let s = r,
          a = e.let("valid", !1),
          u = e.let("passing", null),
          c = e.name("_valid");
        (t.setParams({ passing: u }),
          e.block(m),
          t.result(
            a,
            () => t.reset(),
            () => t.error(!0),
          ));
        function m() {
          s.forEach((d, f) => {
            let p;
            ((0, X3s.alwaysValidSchema)(o, d)
              ? e.var(c, !0)
              : (p = t.subschema({ keyword: "oneOf", schemaProp: f, compositeRule: !0 }, c)),
              f > 0 &&
                e
                  .if((0, OYe._)`${c} && ${a}`)
                  .assign(a, !1)
                  .assign(u, (0, OYe._)`[${u}, ${f}]`)
                  .else(),
              e.if(c, () => {
                (e.assign(a, !0), e.assign(u, f), p && t.mergeEvaluated(p, OYe.Name));
              }));
          });
        }
      },
    };
  T$t.default = egs;
});