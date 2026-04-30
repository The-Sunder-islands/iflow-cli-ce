/**
 * @module P8n
 * @category utils/oop
 * @label oop
 * @position 920 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (P8n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var P8n = T((XQt) => {
  "use strict";
  Object.defineProperty(XQt, "__esModule", { value: !0 });
  var k8n = yE(),
    NKe = za(),
    O8n = sc(),
    N8n = sc(),
    w9s = {
      keyword: "patternProperties",
      type: "object",
      schemaType: "object",
      code(t) {
        let { gen: e, schema: r, data: n, parentSchema: o, it: s } = t,
          { opts: a } = s,
          u = (0, k8n.allSchemaProperties)(r),
          c = u.filter((b) => (0, O8n.alwaysValidSchema)(s, r[b]));
        if (u.length === 0 || (c.length === u.length && (!s.opts.unevaluated || s.props === !0))) return;
        let m = a.strictSchema && !a.allowMatchingProperties && o.properties,
          d = e.name("valid");
        s.props !== !0 && !(s.props instanceof NKe.Name) && (s.props = (0, N8n.evaluatedPropsToName)(e, s.props));
        let { props: f } = s;
        p();
        function p() {
          for (let b of u) (m && h(b), s.allErrors ? g(b) : (e.var(d, !0), g(b), e.if(d)));
        }
        function h(b) {
          for (let A in m)
            new RegExp(b).test(A) &&
              (0, O8n.checkStrictMode)(s, `property ${A} matches pattern ${b} (use allowMatchingProperties)`);
        }
        function g(b) {
          e.forIn("key", n, (A) => {
            e.if((0, NKe._)`${(0, k8n.usePattern)(t, b)}.test(${A})`, () => {
              let y = c.includes(b);
              (y ||
                t.subschema(
                  { keyword: "patternProperties", schemaProp: b, dataProp: A, dataPropType: N8n.Type.Str },
                  d,
                ),
                s.opts.unevaluated && f !== !0
                  ? e.assign((0, NKe._)`${f}[${A}]`, !0)
                  : !y && !s.allErrors && e.if((0, NKe.not)(d), () => e.break()));
            });
          });
        }
      },
    };
  XQt.default = w9s;
});