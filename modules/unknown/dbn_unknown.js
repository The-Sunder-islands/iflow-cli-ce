/**
 * @module dbn
 * @category unknown
 * @label unknown
 * @position 838 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (dbn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var dbn = T((y$t) => {
  "use strict";
  Object.defineProperty(y$t, "__esModule", { value: !0 });
  var mbn = _a(),
    U3s = nc(),
    $3s = {
      message: "property name must be valid",
      params: ({ params: t }) => (0, mbn._)`{propertyName: ${t.propertyName}}`,
    },
    j3s = {
      keyword: "propertyNames",
      type: "object",
      schemaType: ["object", "boolean"],
      error: $3s,
      code(t) {
        let { gen: e, schema: r, data: n, it: o } = t;
        if ((0, U3s.alwaysValidSchema)(o, r)) return;
        let s = e.name("valid");
        (e.forIn("key", n, (a) => {
          (t.setParams({ propertyName: a }),
            t.subschema(
              { keyword: "propertyNames", data: a, dataTypes: ["string"], propertyName: a, compositeRule: !0 },
              s,
            ),
            e.if((0, mbn.not)(s), () => {
              (t.error(!0), o.allErrors || e.break());
            }));
        }),
          t.ok(s));
      },
    };
  y$t.default = j3s;
});
var E$t = T((_$t) => {
  "use strict";
  Object.defineProperty(_$t, "__esModule", { value: !0 });
  var IYe = pE(),
    B4 = _a(),
    Q3s = bk(),
    RYe = nc(),
    G3s = {
      message: "must NOT have additional properties",
      params: ({ params: t }) => (0, B4._)`{additionalProperty: ${t.additionalProperty}}`,
    },
    q3s = {
      keyword: "additionalProperties",
      type: ["object"],
      schemaType: ["boolean", "object"],
      allowUndefined: !0,
      trackErrors: !0,
      error: G3s,
      code(t) {
        let { gen: e, schema: r, parentSchema: n, data: o, errsCount: s, it: a } = t;
        if (!s) throw new Error("ajv implementation error");
        let { allErrors: u, opts: c } = a;
        if (((a.props = !0), c.removeAdditional !== "all" && (0, RYe.alwaysValidSchema)(a, r))) return;
        let m = (0, IYe.allSchemaProperties)(n.properties),
          d = (0, IYe.allSchemaProperties)(n.patternProperties);
        (f(), t.ok((0, B4._)`${s} === ${Q3s.default.errors}`));
        function f() {
          e.forIn("key", o, (A) => {
            !m.length && !d.length ? g(A) : e.if(p(A), () => g(A));
          });
        }
        function p(A) {
          let y;
          if (m.length > 8) {
            let E = (0, RYe.schemaRefOrVal)(a, n.properties, "properties");
            y = (0, IYe.isOwnProperty)(e, E, A);
          } else m.length ? (y = (0, B4.or)(...m.map((E) => (0, B4._)`${A} === ${E}`))) : (y = B4.nil);
          return (
            d.length && (y = (0, B4.or)(y, ...d.map((E) => (0, B4._)`${(0, IYe.usePattern)(t, E)}.test(${A})`))),
            (0, B4.not)(y)
          );
        }
        function h(A) {
          e.code((0, B4._)`delete ${o}[${A}]`);
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
          if (typeof r == "object" && !(0, RYe.alwaysValidSchema)(a, r)) {
            let y = e.name("valid");
            c.removeAdditional === "failing"
              ? (b(A, y, !1),
                e.if((0, B4.not)(y), () => {
                  (t.reset(), h(A));
                }))
              : (b(A, y), u || e.if((0, B4.not)(y), () => e.break()));
          }
        }
        function b(A, y, E) {
          let v = { keyword: "additionalProperties", dataProp: A, dataPropType: RYe.Type.Str };
          (E === !1 && Object.assign(v, { compositeRule: !0, createErrors: !1, allErrors: !1 }), t.subschema(v, y));
        }
      },
    };
  _$t.default = q3s;
});