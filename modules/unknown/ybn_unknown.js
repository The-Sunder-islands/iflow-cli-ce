/**
 * @module ybn
 * @category unknown
 * @label unknown
 * @position 840 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ybn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ybn = T((S$t) => {
  "use strict";
  Object.defineProperty(S$t, "__esModule", { value: !0 });
  var gbn = pE(),
    kYe = _a(),
    bbn = nc(),
    Abn = nc(),
    W3s = {
      keyword: "patternProperties",
      type: "object",
      schemaType: "object",
      code(t) {
        let { gen: e, schema: r, data: n, parentSchema: o, it: s } = t,
          { opts: a } = s,
          u = (0, gbn.allSchemaProperties)(r),
          c = u.filter((b) => (0, bbn.alwaysValidSchema)(s, r[b]));
        if (u.length === 0 || (c.length === u.length && (!s.opts.unevaluated || s.props === !0))) return;
        let m = a.strictSchema && !a.allowMatchingProperties && o.properties,
          d = e.name("valid");
        s.props !== !0 && !(s.props instanceof kYe.Name) && (s.props = (0, Abn.evaluatedPropsToName)(e, s.props));
        let { props: f } = s;
        p();
        function p() {
          for (let b of u) (m && h(b), s.allErrors ? g(b) : (e.var(d, !0), g(b), e.if(d)));
        }
        function h(b) {
          for (let A in m)
            new RegExp(b).test(A) &&
              (0, bbn.checkStrictMode)(s, `property ${A} matches pattern ${b} (use allowMatchingProperties)`);
        }
        function g(b) {
          e.forIn("key", n, (A) => {
            e.if((0, kYe._)`${(0, gbn.usePattern)(t, b)}.test(${A})`, () => {
              let y = c.includes(b);
              (y ||
                t.subschema(
                  { keyword: "patternProperties", schemaProp: b, dataProp: A, dataPropType: Abn.Type.Str },
                  d,
                ),
                s.opts.unevaluated && f !== !0
                  ? e.assign((0, kYe._)`${f}[${A}]`, !0)
                  : !y && !s.allErrors && e.if((0, kYe.not)(d), () => e.break()));
            });
          });
        }
      },
    };
  S$t.default = W3s;
});