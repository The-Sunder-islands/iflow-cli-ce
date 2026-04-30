/**
 * @module w8n
 * @category utils/oop
 * @label oop
 * @position 916 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (w8n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var w8n = T((FT) => {
  "use strict";
  Object.defineProperty(FT, "__esModule", { value: !0 });
  FT.validateSchemaDeps = FT.validatePropertyDeps = FT.error = void 0;
  var VQt = za(),
    p9s = sc(),
    J9e = yE();
  FT.error = {
    message: ({ params: { property: t, depsCount: e, deps: r } }) => {
      let n = e === 1 ? "property" : "properties";
      return (0, VQt.str)`must have ${n} ${r} when property ${t} is present`;
    },
    params: ({ params: { property: t, depsCount: e, deps: r, missingProperty: n } }) => (0, VQt._)`{property: ${t},
    missingProperty: ${n},
    depsCount: ${e},
    deps: ${r}}`,
  };
  var h9s = {
    keyword: "dependencies",
    type: "object",
    schemaType: "object",
    error: FT.error,
    code(t) {
      let [e, r] = g9s(t);
      (C8n(t, e), S8n(t, r));
    },
  };
  function g9s({ schema: t }) {
    let e = {},
      r = {};
    for (let n in t) {
      if (n === "__proto__") continue;
      let o = Array.isArray(t[n]) ? e : r;
      o[n] = t[n];
    }
    return [e, r];
  }
  function C8n(t, e = t.schema) {
    let { gen: r, data: n, it: o } = t;
    if (Object.keys(e).length === 0) return;
    let s = r.let("missing");
    for (let a in e) {
      let u = e[a];
      if (u.length === 0) continue;
      let c = (0, J9e.propertyInData)(r, n, a, o.opts.ownProperties);
      (t.setParams({ property: a, depsCount: u.length, deps: u.join(", ") }),
        o.allErrors
          ? r.if(c, () => {
              for (let m of u) (0, J9e.checkReportMissingProp)(t, m);
            })
          : (r.if((0, VQt._)`${c} && (${(0, J9e.checkMissingProp)(t, u, s)})`),
            (0, J9e.reportMissingProp)(t, s),
            r.else()));
    }
  }
  FT.validatePropertyDeps = C8n;
  function S8n(t, e = t.schema) {
    let { gen: r, data: n, keyword: o, it: s } = t,
      a = r.name("valid");
    for (let u in e)
      (0, p9s.alwaysValidSchema)(s, e[u]) ||
        (r.if(
          (0, J9e.propertyInData)(r, n, u, s.opts.ownProperties),
          () => {
            let c = t.subschema({ keyword: o, schemaProp: u }, a);
            t.mergeValidEvaluated(c, a);
          },
          () => r.var(a, !0),
        ),
        t.ok(a));
  }
  FT.validateSchemaDeps = S8n;
  FT.default = h9s;
});