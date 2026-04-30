/**
 * @module QQt
 * @category utils/oop
 * @label oop
 * @position 912 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (QQt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var QQt = T((K9e) => {
  "use strict";
  Object.defineProperty(K9e, "__esModule", { value: !0 });
  K9e.validateTuple = void 0;
  var b8n = za(),
    IKe = sc(),
    n9s = yE(),
    i9s = {
      keyword: "items",
      type: "array",
      schemaType: ["object", "array", "boolean"],
      before: "uniqueItems",
      code(t) {
        let { schema: e, it: r } = t;
        if (Array.isArray(e)) return A8n(t, "additionalItems", e);
        ((r.items = !0), !(0, IKe.alwaysValidSchema)(r, e) && t.ok((0, n9s.validateArray)(t)));
      },
    };
  function A8n(t, e, r = t.schema) {
    let { gen: n, parentSchema: o, data: s, keyword: a, it: u } = t;
    (d(o),
      u.opts.unevaluated && r.length && u.items !== !0 && (u.items = IKe.mergeEvaluated.items(n, r.length, u.items)));
    let c = n.name("valid"),
      m = n.const("len", (0, b8n._)`${s}.length`);
    r.forEach((f, p) => {
      (0, IKe.alwaysValidSchema)(u, f) ||
        (n.if((0, b8n._)`${m} > ${p}`, () => t.subschema({ keyword: a, schemaProp: p, dataProp: p }, c)), t.ok(c));
    });
    function d(f) {
      let { opts: p, errSchemaPath: h } = u,
        g = r.length,
        b = g === f.minItems && (g === f.maxItems || f[e] === !1);
      if (p.strictTuples && !b) {
        let A = `"${a}" is ${g}-tuple, but minItems or maxItems/${e} are not specified or different at path "${h}"`;
        (0, IKe.checkStrictMode)(u, A, p.strictTuples);
      }
    }
  }
  K9e.validateTuple = A8n;
  K9e.default = i9s;
});