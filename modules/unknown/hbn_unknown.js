/**
 * @module hbn
 * @category unknown
 * @label unknown
 * @position 839 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (hbn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var hbn = T((C$t) => {
  "use strict";
  Object.defineProperty(C$t, "__esModule", { value: !0 });
  var H3s = P8e(),
    fbn = pE(),
    v$t = nc(),
    pbn = E$t(),
    V3s = {
      keyword: "properties",
      type: "object",
      schemaType: "object",
      code(t) {
        let { gen: e, schema: r, parentSchema: n, data: o, it: s } = t;
        s.opts.removeAdditional === "all" &&
          n.additionalProperties === void 0 &&
          pbn.default.code(new H3s.KeywordCxt(s, pbn.default, "additionalProperties"));
        let a = (0, fbn.allSchemaProperties)(r);
        for (let f of a) s.definedProperties.add(f);
        s.opts.unevaluated &&
          a.length &&
          s.props !== !0 &&
          (s.props = v$t.mergeEvaluated.props(e, (0, v$t.toHash)(a), s.props));
        let u = a.filter((f) => !(0, v$t.alwaysValidSchema)(s, r[f]));
        if (u.length === 0) return;
        let c = e.name("valid");
        for (let f of u)
          (m(f)
            ? d(f)
            : (e.if((0, fbn.propertyInData)(e, o, f, s.opts.ownProperties)),
              d(f),
              s.allErrors || e.else().var(c, !0),
              e.endIf()),
            t.it.definedProperties.add(f),
            t.ok(c));
        function m(f) {
          return s.opts.useDefaults && !s.compositeRule && r[f].default !== void 0;
        }
        function d(f) {
          t.subschema({ keyword: "properties", schemaProp: f, dataProp: f }, c);
        }
      },
    };
  C$t.default = V3s;
});