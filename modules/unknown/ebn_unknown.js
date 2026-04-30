/**
 * @module ebn
 * @category unknown
 * @label unknown
 * @position 833 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ebn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ebn = T((m$t) => {
  "use strict";
  Object.defineProperty(m$t, "__esModule", { value: !0 });
  var d3s = jgn(),
    f3s = Qgn(),
    p3s = Hgn(),
    h3s = Vgn(),
    g3s = Wgn(),
    b3s = zgn(),
    A3s = Ygn(),
    y3s = Jgn(),
    _3s = Xgn(),
    E3s = Zgn(),
    v3s = [
      d3s.default,
      f3s.default,
      p3s.default,
      h3s.default,
      g3s.default,
      b3s.default,
      A3s.default,
      y3s.default,
      { keyword: "type", schemaType: ["string", "array"] },
      { keyword: "nullable", schemaType: "boolean" },
      _3s.default,
      E3s.default,
    ];
  m$t.default = v3s;
});
var f$t = T((H8e) => {
  "use strict";
  Object.defineProperty(H8e, "__esModule", { value: !0 });
  H8e.validateAdditionalItems = void 0;
  var iV = _a(),
    d$t = nc(),
    C3s = {
      message: ({ params: { len: t } }) => (0, iV.str)`must NOT have more than ${t} items`,
      params: ({ params: { len: t } }) => (0, iV._)`{limit: ${t}}`,
    },
    S3s = {
      keyword: "additionalItems",
      type: "array",
      schemaType: ["boolean", "object"],
      before: "uniqueItems",
      error: C3s,
      code(t) {
        let { parentSchema: e, it: r } = t,
          { items: n } = e;
        if (!Array.isArray(n)) {
          (0, d$t.checkStrictMode)(r, '"additionalItems" is ignored when "items" is not an array of schemas');
          return;
        }
        tbn(t, n);
      },
    };
  function tbn(t, e) {
    let { gen: r, schema: n, data: o, keyword: s, it: a } = t;
    a.items = !0;
    let u = r.const("len", (0, iV._)`${o}.length`);
    if (n === !1) (t.setParams({ len: e.length }), t.pass((0, iV._)`${u} <= ${e.length}`));
    else if (typeof n == "object" && !(0, d$t.alwaysValidSchema)(a, n)) {
      let m = r.var("valid", (0, iV._)`${u} <= ${e.length}`);
      (r.if((0, iV.not)(m), () => c(m)), t.ok(m));
    }
    function c(m) {
      r.forRange("i", e.length, u, (d) => {
        (t.subschema({ keyword: s, dataProp: d, dataPropType: d$t.Type.Num }, m),
          a.allErrors || r.if((0, iV.not)(m), () => r.break()));
      });
    }
  }
  H8e.validateAdditionalItems = tbn;
  H8e.default = S3s;
});
var p$t = T((V8e) => {
  "use strict";
  Object.defineProperty(V8e, "__esModule", { value: !0 });
  V8e.validateTuple = void 0;
  var rbn = _a(),
    TYe = nc(),
    w3s = pE(),
    x3s = {
      keyword: "items",
      type: "array",
      schemaType: ["object", "array", "boolean"],
      before: "uniqueItems",
      code(t) {
        let { schema: e, it: r } = t;
        if (Array.isArray(e)) return nbn(t, "additionalItems", e);
        ((r.items = !0), !(0, TYe.alwaysValidSchema)(r, e) && t.ok((0, w3s.validateArray)(t)));
      },
    };
  function nbn(t, e, r = t.schema) {
    let { gen: n, parentSchema: o, data: s, keyword: a, it: u } = t;
    (d(o),
      u.opts.unevaluated && r.length && u.items !== !0 && (u.items = TYe.mergeEvaluated.items(n, r.length, u.items)));
    let c = n.name("valid"),
      m = n.const("len", (0, rbn._)`${s}.length`);
    r.forEach((f, p) => {
      (0, TYe.alwaysValidSchema)(u, f) ||
        (n.if((0, rbn._)`${m} > ${p}`, () => t.subschema({ keyword: a, schemaProp: p, dataProp: p }, c)), t.ok(c));
    });
    function d(f) {
      let { opts: p, errSchemaPath: h } = u,
        g = r.length,
        b = g === f.minItems && (g === f.maxItems || f[e] === !1);
      if (p.strictTuples && !b) {
        let A = `"${a}" is ${g}-tuple, but minItems or maxItems/${e} are not specified or different at path "${h}"`;
        (0, TYe.checkStrictMode)(u, A, p.strictTuples);
      }
    }
  }
  V8e.validateTuple = nbn;
  V8e.default = x3s;
});