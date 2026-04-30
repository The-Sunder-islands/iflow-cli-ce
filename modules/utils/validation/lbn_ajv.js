/**
 * @module lbn
 * @category utils/validation
 * @label ajv
 * @position 837 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (lbn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var lbn = T((BT) => {
  "use strict";
  Object.defineProperty(BT, "__esModule", { value: !0 });
  BT.validateSchemaDeps = BT.validatePropertyDeps = BT.error = void 0;
  var A$t = _a(),
    L3s = nc(),
    W8e = pE();
  BT.error = {
    message: ({ params: { property: t, depsCount: e, deps: r } }) => {
      let n = e === 1 ? "property" : "properties";
      return (0, A$t.str)`must have ${n} ${r} when property ${t} is present`;
    },
    params: ({ params: { property: t, depsCount: e, deps: r, missingProperty: n } }) => (0, A$t._)`{property: ${t},
    missingProperty: ${n},
    depsCount: ${e},
    deps: ${r}}`,
  };
  var M3s = {
    keyword: "dependencies",
    type: "object",
    schemaType: "object",
    error: BT.error,
    code(t) {
      let [e, r] = F3s(t);
      (ubn(t, e), cbn(t, r));
    },
  };
  function F3s({ schema: t }) {
    let e = {},
      r = {};
    for (let n in t) {
      if (n === "__proto__") continue;
      let o = Array.isArray(t[n]) ? e : r;
      o[n] = t[n];
    }
    return [e, r];
  }
  function ubn(t, e = t.schema) {
    let { gen: r, data: n, it: o } = t;
    if (Object.keys(e).length === 0) return;
    let s = r.let("missing");
    for (let a in e) {
      let u = e[a];
      if (u.length === 0) continue;
      let c = (0, W8e.propertyInData)(r, n, a, o.opts.ownProperties);
      (t.setParams({ property: a, depsCount: u.length, deps: u.join(", ") }),
        o.allErrors
          ? r.if(c, () => {
              for (let m of u) (0, W8e.checkReportMissingProp)(t, m);
            })
          : (r.if((0, A$t._)`${c} && (${(0, W8e.checkMissingProp)(t, u, s)})`),
            (0, W8e.reportMissingProp)(t, s),
            r.else()));
    }
  }
  BT.validatePropertyDeps = ubn;
  function cbn(t, e = t.schema) {
    let { gen: r, data: n, keyword: o, it: s } = t,
      a = r.name("valid");
    for (let u in e)
      (0, L3s.alwaysValidSchema)(s, e[u]) ||
        (r.if(
          (0, W8e.propertyInData)(r, n, u, s.opts.ownProperties),
          () => {
            let c = t.subschema({ keyword: o, schemaProp: u }, a);
            t.mergeValidEvaluated(c, a);
          },
          () => r.var(a, !0),
        ),
        t.ok(a));
  }
  BT.validateSchemaDeps = cbn;
  BT.default = M3s;
});