/**
 * @module kFt
 * @category utils/oop
 * @label oop
 * @position 771 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (kFt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var kFt = T((y8e) => {
  "use strict";
  Object.defineProperty(y8e, "__esModule", { value: !0 });
  y8e.validateTuple = void 0;
  var Phn = Ha(),
    Kze = tc(),
    Ads = lE(),
    yds = {
      keyword: "items",
      type: "array",
      schemaType: ["object", "array", "boolean"],
      before: "uniqueItems",
      code(t) {
        let { schema: e, it: r } = t;
        if (Array.isArray(e)) return Bhn(t, "additionalItems", e);
        ((r.items = !0), !(0, Kze.alwaysValidSchema)(r, e) && t.ok((0, Ads.validateArray)(t)));
      },
    };
  function Bhn(t, e, r = t.schema) {
    let { gen: n, parentSchema: o, data: s, keyword: a, it: u } = t;
    (d(o),
      u.opts.unevaluated && r.length && u.items !== !0 && (u.items = Kze.mergeEvaluated.items(n, r.length, u.items)));
    let c = n.name("valid"),
      m = n.const("len", (0, Phn._)`${s}.length`);
    r.forEach((f, p) => {
      (0, Kze.alwaysValidSchema)(u, f) ||
        (n.if((0, Phn._)`${m} > ${p}`, () => t.subschema({ keyword: a, schemaProp: p, dataProp: p }, c)), t.ok(c));
    });
    function d(f) {
      let { opts: p, errSchemaPath: h } = u,
        g = r.length,
        b = g === f.minItems && (g === f.maxItems || f[e] === !1);
      if (p.strictTuples && !b) {
        let A = `"${a}" is ${g}-tuple, but minItems or maxItems/${e} are not specified or different at path "${h}"`;
        (0, Kze.checkStrictMode)(u, A, p.strictTuples);
      }
    }
  }
  y8e.validateTuple = Bhn;
  y8e.default = yds;
});