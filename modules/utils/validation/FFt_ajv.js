/**
 * @module FFt
 * @category utils/validation
 * @label ajv
 * @position 777 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (FFt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var FFt = T((MFt) => {
  "use strict";
  Object.defineProperty(MFt, "__esModule", { value: !0 });
  var Xze = lE(),
    k4 = Ha(),
    Bds = dk(),
    Zze = tc(),
    Lds = {
      message: "must NOT have additional properties",
      params: ({ params: t }) => (0, k4._)`{additionalProperty: ${t.additionalProperty}}`,
    },
    Mds = {
      keyword: "additionalProperties",
      type: ["object"],
      schemaType: ["boolean", "object"],
      allowUndefined: !0,
      trackErrors: !0,
      error: Lds,
      code(t) {
        let { gen: e, schema: r, parentSchema: n, data: o, errsCount: s, it: a } = t;
        if (!s) throw new Error("ajv implementation error");
        let { allErrors: u, opts: c } = a;
        if (((a.props = !0), c.removeAdditional !== "all" && (0, Zze.alwaysValidSchema)(a, r))) return;
        let m = (0, Xze.allSchemaProperties)(n.properties),
          d = (0, Xze.allSchemaProperties)(n.patternProperties);
        (f(), t.ok((0, k4._)`${s} === ${Bds.default.errors}`));
        function f() {
          e.forIn("key", o, (A) => {
            !m.length && !d.length ? g(A) : e.if(p(A), () => g(A));
          });
        }
        function p(A) {
          let y;
          if (m.length > 8) {
            let E = (0, Zze.schemaRefOrVal)(a, n.properties, "properties");
            y = (0, Xze.isOwnProperty)(e, E, A);
          } else m.length ? (y = (0, k4.or)(...m.map((E) => (0, k4._)`${A} === ${E}`))) : (y = k4.nil);
          return (
            d.length && (y = (0, k4.or)(y, ...d.map((E) => (0, k4._)`${(0, Xze.usePattern)(t, E)}.test(${A})`))),
            (0, k4.not)(y)
          );
        }
        function h(A) {
          e.code((0, k4._)`delete ${o}[${A}]`);
        }
        function g(A) {
          if (c.removeAdditional === "all" || (c.removeAdditional && r === !1)) {
            h(A);
            return;
          }
          if (r === !1) {
            (t.setParams({ additionalProperty: A }), t.error(), u || e.break());
            return;
          }
          if (typeof r == "object" && !(0, Zze.alwaysValidSchema)(a, r)) {
            let y = e.name("valid");
            c.removeAdditional === "failing"
              ? (b(A, y, !1),
                e.if((0, k4.not)(y), () => {
                  (t.reset(), h(A));
                }))
              : (b(A, y), u || e.if((0, k4.not)(y), () => e.break()));
          }
        }
        function b(A, y, E) {
          let v = { keyword: "additionalProperties", dataProp: A, dataPropType: Zze.Type.Str };
          (E === !1 && Object.assign(v, { compositeRule: !0, createErrors: !1, allErrors: !1 }), t.subschema(v, y));
        }
      },
    };
  MFt.default = Mds;
});