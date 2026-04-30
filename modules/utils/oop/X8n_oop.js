/**
 * @module X8n
 * @category utils/oop
 * @label oop
 * @position 933 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (X8n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var X8n = T((lGt) => {
  "use strict";
  Object.defineProperty(lGt, "__esModule", { value: !0 });
  var Nse = za(),
    cGt = K8n(),
    J8n = EKe(),
    m6s = U9e(),
    d6s = sc(),
    f6s = {
      message: ({ params: { discrError: t, tagName: e } }) =>
        t === cGt.DiscrError.Tag ? `tag "${e}" must be string` : `value of tag "${e}" must be in oneOf`,
      params: ({ params: { discrError: t, tag: e, tagName: r } }) =>
        (0, Nse._)`{error: ${t}, tag: ${r}, tagValue: ${e}}`,
    },
    p6s = {
      keyword: "discriminator",
      type: "object",
      schemaType: "object",
      error: f6s,
      code(t) {
        let { gen: e, data: r, schema: n, parentSchema: o, it: s } = t,
          { oneOf: a } = o;
        if (!s.opts.discriminator) throw new Error("discriminator: requires discriminator option");
        let u = n.propertyName;
        if (typeof u != "string") throw new Error("discriminator: requires propertyName");
        if (n.mapping) throw new Error("discriminator: mapping is not supported");
        if (!a) throw new Error("discriminator: requires oneOf keyword");
        let c = e.let("valid", !1),
          m = e.const("tag", (0, Nse._)`${r}${(0, Nse.getProperty)(u)}`);
        (e.if(
          (0, Nse._)`typeof ${m} == "string"`,
          () => d(),
          () => t.error(!1, { discrError: cGt.DiscrError.Tag, tag: m, tagName: u }),
        ),
          t.ok(c));
        function d() {
          let h = p();
          e.if(!1);
          for (let g in h) (e.elseIf((0, Nse._)`${m} === ${g}`), e.assign(c, f(h[g])));
          (e.else(), t.error(!1, { discrError: cGt.DiscrError.Mapping, tag: m, tagName: u }), e.endIf());
        }
        function f(h) {
          let g = e.name("valid"),
            b = t.subschema({ keyword: "oneOf", schemaProp: h }, g);
          return (t.mergeEvaluated(b, Nse.Name), g);
        }
        function p() {
          var h;
          let g = {},
            b = y(o),
            A = !0;
          for (let C = 0; C < a.length; C++) {
            let x = a[C];
            if (x?.$ref && !(0, d6s.schemaHasRulesButRef)(x, s.self.RULES)) {
              let R = x.$ref;
              if (
                ((x = J8n.resolveRef.call(s.self, s.schemaEnv.root, s.baseId, R)),
                x instanceof J8n.SchemaEnv && (x = x.schema),
                x === void 0)
              )
                throw new m6s.default(s.opts.uriResolver, s.baseId, R);
            }
            let k = (h = x?.properties) === null || h === void 0 ? void 0 : h[u];
            if (typeof k != "object")
              throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${u}"`);
            ((A = A && (b || y(x))), E(k, C));
          }
          if (!A) throw new Error(`discriminator: "${u}" must be required`);
          return g;
          function y({ required: C }) {
            return Array.isArray(C) && C.includes(u);
          }
          function E(C, x) {
            if (C.const) v(C.const, x);
            else if (C.enum) for (let k of C.enum) v(k, x);
            else throw new Error(`discriminator: "properties/${u}" must have "const" or "enum"`);
          }
          function v(C, x) {
            if (typeof C != "string" || C in g) throw new Error(`discriminator: "${u}" values must be unique strings`);
            g[C] = x;
          }
        }
      },
    };
  lGt.default = p6s;
});