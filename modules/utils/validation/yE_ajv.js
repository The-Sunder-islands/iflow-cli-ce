/**
 * @module yE
 * @category utils/validation
 * @label ajv
 * @position 883 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (yE) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var yE = T((Zl) => {
  "use strict";
  Object.defineProperty(Zl, "__esModule", { value: !0 });
  Zl.validateUnion =
    Zl.validateArray =
    Zl.usePattern =
    Zl.callValidateCode =
    Zl.schemaProperties =
    Zl.allSchemaProperties =
    Zl.noPropertyInData =
    Zl.propertyInData =
    Zl.isOwnProperty =
    Zl.hasPropFunc =
    Zl.reportMissingProp =
    Zl.checkMissingProp =
    Zl.checkReportMissingProp =
      void 0;
  var Em = za(),
    sQt = sc(),
    BM = wk(),
    k2s = sc();
  function O2s(t, e) {
    let { gen: r, data: n, it: o } = t;
    r.if(uQt(r, n, e, o.opts.ownProperties), () => {
      (t.setParams({ missingProperty: (0, Em._)`${e}` }, !0), t.error());
    });
  }
  Zl.checkReportMissingProp = O2s;
  function N2s({ gen: t, data: e, it: { opts: r } }, n, o) {
    return (0, Em.or)(...n.map((s) => (0, Em.and)(uQt(t, e, s, r.ownProperties), (0, Em._)`${o} = ${s}`)));
  }
  Zl.checkMissingProp = N2s;
  function P2s(t, e) {
    (t.setParams({ missingProperty: e }, !0), t.error());
  }
  Zl.reportMissingProp = P2s;
  function m5n(t) {
    return t.scopeValue("func", {
      ref: Object.prototype.hasOwnProperty,
      code: (0, Em._)`Object.prototype.hasOwnProperty`,
    });
  }
  Zl.hasPropFunc = m5n;
  function aQt(t, e, r) {
    return (0, Em._)`${m5n(t)}.call(${e}, ${r})`;
  }
  Zl.isOwnProperty = aQt;
  function B2s(t, e, r, n) {
    let o = (0, Em._)`${e}${(0, Em.getProperty)(r)} !== undefined`;
    return n ? (0, Em._)`${o} && ${aQt(t, e, r)}` : o;
  }
  Zl.propertyInData = B2s;
  function uQt(t, e, r, n) {
    let o = (0, Em._)`${e}${(0, Em.getProperty)(r)} === undefined`;
    return n ? (0, Em.or)(o, (0, Em.not)(aQt(t, e, r))) : o;
  }
  Zl.noPropertyInData = uQt;
  function d5n(t) {
    return t ? Object.keys(t).filter((e) => e !== "__proto__") : [];
  }
  Zl.allSchemaProperties = d5n;
  function L2s(t, e) {
    return d5n(e).filter((r) => !(0, sQt.alwaysValidSchema)(t, e[r]));
  }
  Zl.schemaProperties = L2s;
  function M2s(
    { schemaCode: t, data: e, it: { gen: r, topSchemaRef: n, schemaPath: o, errorPath: s }, it: a },
    u,
    c,
    m,
  ) {
    let d = m ? (0, Em._)`${t}, ${e}, ${n}${o}` : e,
      f = [
        [BM.default.instancePath, (0, Em.strConcat)(BM.default.instancePath, s)],
        [BM.default.parentData, a.parentData],
        [BM.default.parentDataProperty, a.parentDataProperty],
        [BM.default.rootData, BM.default.rootData],
      ];
    a.opts.dynamicRef && f.push([BM.default.dynamicAnchors, BM.default.dynamicAnchors]);
    let p = (0, Em._)`${d}, ${r.object(...f)}`;
    return c !== Em.nil ? (0, Em._)`${u}.call(${c}, ${p})` : (0, Em._)`${u}(${p})`;
  }
  Zl.callValidateCode = M2s;
  var F2s = (0, Em._)`new RegExp`;
  function U2s({ gen: t, it: { opts: e } }, r) {
    let n = e.unicodeRegExp ? "u" : "",
      { regExp: o } = e.code,
      s = o(r, n);
    return t.scopeValue("pattern", {
      key: s.toString(),
      ref: s,
      code: (0, Em._)`${o.code === "new RegExp" ? F2s : (0, k2s.useFunc)(t, o)}(${r}, ${n})`,
    });
  }
  Zl.usePattern = U2s;
  function $2s(t) {
    let { gen: e, data: r, keyword: n, it: o } = t,
      s = e.name("valid");
    if (o.allErrors) {
      let u = e.let("valid", !0);
      return (a(() => e.assign(u, !1)), u);
    }
    return (e.var(s, !0), a(() => e.break()), s);
    function a(u) {
      let c = e.const("len", (0, Em._)`${r}.length`);
      e.forRange("i", 0, c, (m) => {
        (t.subschema({ keyword: n, dataProp: m, dataPropType: sQt.Type.Num }, s), e.if((0, Em.not)(s), u));
      });
    }
  }
  Zl.validateArray = $2s;
  function j2s(t) {
    let { gen: e, schema: r, keyword: n, it: o } = t;
    if (!Array.isArray(r)) throw new Error("ajv implementation error");
    if (r.some((c) => (0, sQt.alwaysValidSchema)(o, c)) && !o.opts.unevaluated) return;
    let a = e.let("valid", !1),
      u = e.name("_valid");
    (e.block(() =>
      r.forEach((c, m) => {
        let d = t.subschema({ keyword: n, schemaProp: m, compositeRule: !0 }, u);
        (e.assign(a, (0, Em._)`${a} || ${u}`), t.mergeValidEvaluated(d, u) || e.if((0, Em.not)(a)));
      }),
    ),
      t.result(
        a,
        () => t.reset(),
        () => t.error(!0),
      ));
  }
  Zl.validateUnion = j2s;
});