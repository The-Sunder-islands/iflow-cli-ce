/**
 * @module e3n
 * @category utils/validation
 * @label ajv
 * @position 782 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (e3n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var e3n = T((qFt) => {
  "use strict";
  Object.defineProperty(qFt, "__esModule", { value: !0 });
  var tYe = Ha(),
    Hds = tc(),
    Vds = {
      message: "must match exactly one schema in oneOf",
      params: ({ params: t }) => (0, tYe._)`{passingSchemas: ${t.passing}}`,
    },
    Wds = {
      keyword: "oneOf",
      schemaType: "array",
      trackErrors: !0,
      error: Vds,
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
            ((0, Hds.alwaysValidSchema)(o, d)
              ? e.var(c, !0)
              : (p = t.subschema({ keyword: "oneOf", schemaProp: f, compositeRule: !0 }, c)),
              f > 0 &&
                e
                  .if((0, tYe._)`${c} && ${a}`)
                  .assign(a, !1)
                  .assign(u, (0, tYe._)`[${u}, ${f}]`)
                  .else(),
              e.if(c, () => {
                (e.assign(a, !0), e.assign(u, f), p && t.mergeEvaluated(p, tYe.Name));
              }));
          });
        }
      },
    };
  qFt.default = Wds;
});