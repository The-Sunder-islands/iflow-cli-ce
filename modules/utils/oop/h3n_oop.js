/**
 * @module h3n
 * @category utils/oop
 * @label oop
 * @position 792 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (h3n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var h3n = T((ZFt) => {
  "use strict";
  Object.defineProperty(ZFt, "__esModule", { value: !0 });
  var Qoe = Ha(),
    XFt = f3n(),
    p3n = Mze(),
    x1s = a8e(),
    T1s = tc(),
    D1s = {
      message: ({ params: { discrError: t, tagName: e } }) =>
        t === XFt.DiscrError.Tag ? `tag "${e}" must be string` : `value of tag "${e}" must be in oneOf`,
      params: ({ params: { discrError: t, tag: e, tagName: r } }) =>
        (0, Qoe._)`{error: ${t}, tag: ${r}, tagValue: ${e}}`,
    },
    I1s = {
      keyword: "discriminator",
      type: "object",
      schemaType: "object",
      error: D1s,
      code(t) {
        let { gen: e, data: r, schema: n, parentSchema: o, it: s } = t,
          { oneOf: a } = o;
        if (!s.opts.discriminator) throw new Error("discriminator: requires discriminator option");
        let u = n.propertyName;
        if (typeof u != "string") throw new Error("discriminator: requires propertyName");
        if (n.mapping) throw new Error("discriminator: mapping is not supported");
        if (!a) throw new Error("discriminator: requires oneOf keyword");
        let c = e.let("valid", !1),
          m = e.const("tag", (0, Qoe._)`${r}${(0, Qoe.getProperty)(u)}`);
        (e.if(
          (0, Qoe._)`typeof ${m} == "string"`,
          () => d(),
          () => t.error(!1, { discrError: XFt.DiscrError.Tag, tag: m, tagName: u }),
        ),
          t.ok(c));
        function d() {
          let h = p();
          e.if(!1);
          for (let g in h) (e.elseIf((0, Qoe._)`${m} === ${g}`), e.assign(c, f(h[g])));
          (e.else(), t.error(!1, { discrError: XFt.DiscrError.Mapping, tag: m, tagName: u }), e.endIf());
        }
        function f(h) {
          let g = e.name("valid"),
            b = t.subschema({ keyword: "oneOf", schemaProp: h }, g);
          return (t.mergeEvaluated(b, Qoe.Name), g);
        }
        function p() {
          var h;
          let g = {},
            b = y(o),
            A = !0;
          for (let C = 0; C < a.length; C++) {
            let x = a[C];
            if (x?.$ref && !(0, T1s.schemaHasRulesButRef)(x, s.self.RULES)) {
              let R = x.$ref;
              if (
                ((x = p3n.resolveRef.call(s.self, s.schemaEnv.root, s.baseId, R)),
                x instanceof p3n.SchemaEnv && (x = x.schema),
                x === void 0)
              )
                throw new x1s.default(s.opts.uriResolver, s.baseId, R);
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
  ZFt.default = I1s;
});