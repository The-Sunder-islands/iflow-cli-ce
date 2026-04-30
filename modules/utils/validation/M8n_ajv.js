/**
 * @module M8n
 * @category utils/validation
 * @label ajv
 * @position 923 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (M8n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var M8n = T((tGt) => {
  "use strict";
  Object.defineProperty(tGt, "__esModule", { value: !0 });
  var PKe = za(),
    R9s = sc(),
    k9s = {
      message: "must match exactly one schema in oneOf",
      params: ({ params: t }) => (0, PKe._)`{passingSchemas: ${t.passing}}`,
    },
    O9s = {
      keyword: "oneOf",
      schemaType: "array",
      trackErrors: !0,
      error: k9s,
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
            ((0, R9s.alwaysValidSchema)(o, d)
              ? e.var(c, !0)
              : (p = t.subschema({ keyword: "oneOf", schemaProp: f, compositeRule: !0 }, c)),
              f > 0 &&
                e
                  .if((0, PKe._)`${c} && ${a}`)
                  .assign(a, !1)
                  .assign(u, (0, PKe._)`[${u}, ${f}]`)
                  .else(),
              e.if(c, () => {
                (e.assign(a, !0), e.assign(u, f), p && t.mergeEvaluated(p, PKe.Name));
              }));
          });
        }
      },
    };
  tGt.default = O9s;
});