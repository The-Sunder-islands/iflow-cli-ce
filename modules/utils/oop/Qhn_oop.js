/**
 * @module Qhn
 * @category utils/oop
 * @label oop
 * @position 775 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Qhn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Qhn = T((RT) => {
  "use strict";
  Object.defineProperty(RT, "__esModule", { value: !0 });
  RT.validateSchemaDeps = RT.validatePropertyDeps = RT.error = void 0;
  var BFt = Ha(),
    Ids = tc(),
    _8e = lE();
  RT.error = {
    message: ({ params: { property: t, depsCount: e, deps: r } }) => {
      let n = e === 1 ? "property" : "properties";
      return (0, BFt.str)`must have ${n} ${r} when property ${t} is present`;
    },
    params: ({ params: { property: t, depsCount: e, deps: r, missingProperty: n } }) => (0, BFt._)`{property: ${t},
    missingProperty: ${n},
    depsCount: ${e},
    deps: ${r}}`,
  };
  var Rds = {
    keyword: "dependencies",
    type: "object",
    schemaType: "object",
    error: RT.error,
    code(t) {
      let [e, r] = kds(t);
      ($hn(t, e), jhn(t, r));
    },
  };
  function kds({ schema: t }) {
    let e = {},
      r = {};
    for (let n in t) {
      if (n === "__proto__") continue;
      let o = Array.isArray(t[n]) ? e : r;
      o[n] = t[n];
    }
    return [e, r];
  }
  function $hn(t, e = t.schema) {
    let { gen: r, data: n, it: o } = t;
    if (Object.keys(e).length === 0) return;
    let s = r.let("missing");
    for (let a in e) {
      let u = e[a];
      if (u.length === 0) continue;
      let c = (0, _8e.propertyInData)(r, n, a, o.opts.ownProperties);
      (t.setParams({ property: a, depsCount: u.length, deps: u.join(", ") }),
        o.allErrors
          ? r.if(c, () => {
              for (let m of u) (0, _8e.checkReportMissingProp)(t, m);
            })
          : (r.if((0, BFt._)`${c} && (${(0, _8e.checkMissingProp)(t, u, s)})`),
            (0, _8e.reportMissingProp)(t, s),
            r.else()));
    }
  }
  RT.validatePropertyDeps = $hn;
  function jhn(t, e = t.schema) {
    let { gen: r, data: n, keyword: o, it: s } = t,
      a = r.name("valid");
    for (let u in e)
      (0, Ids.alwaysValidSchema)(s, e[u]) ||
        (r.if(
          (0, _8e.propertyInData)(r, n, u, s.opts.ownProperties),
          () => {
            let c = t.subschema({ keyword: o, schemaProp: u }, a);
            t.mergeValidEvaluated(c, a);
          },
          () => r.var(a, !0),
        ),
        t.ok(a));
  }
  RT.validateSchemaDeps = jhn;
  RT.default = Rds;
});