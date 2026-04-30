/**
 * @module R8n
 * @category utils/oop
 * @label oop
 * @position 919 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (R8n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var R8n = T((JQt) => {
  "use strict";
  Object.defineProperty(JQt, "__esModule", { value: !0 });
  var C9s = F9e(),
    D8n = yE(),
    KQt = sc(),
    I8n = YQt(),
    S9s = {
      keyword: "properties",
      type: "object",
      schemaType: "object",
      code(t) {
        let { gen: e, schema: r, parentSchema: n, data: o, it: s } = t;
        s.opts.removeAdditional === "all" &&
          n.additionalProperties === void 0 &&
          I8n.default.code(new C9s.KeywordCxt(s, I8n.default, "additionalProperties"));
        let a = (0, D8n.allSchemaProperties)(r);
        for (let f of a) s.definedProperties.add(f);
        s.opts.unevaluated &&
          a.length &&
          s.props !== !0 &&
          (s.props = KQt.mergeEvaluated.props(e, (0, KQt.toHash)(a), s.props));
        let u = a.filter((f) => !(0, KQt.alwaysValidSchema)(s, r[f]));
        if (u.length === 0) return;
        let c = e.name("valid");
        for (let f of u)
          (m(f)
            ? d(f)
            : (e.if((0, D8n.propertyInData)(e, o, f, s.opts.ownProperties)),
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
  JQt.default = S9s;
});