/**
 * @module pE
 * @category utils/validation
 * @label ajv
 * @position 807 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (pE) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var pE = T((Xl) => {
  "use strict";
  Object.defineProperty(Xl, "__esModule", { value: !0 });
  Xl.validateUnion =
    Xl.validateArray =
    Xl.usePattern =
    Xl.callValidateCode =
    Xl.schemaProperties =
    Xl.allSchemaProperties =
    Xl.noPropertyInData =
    Xl.propertyInData =
    Xl.isOwnProperty =
    Xl.hasPropFunc =
    Xl.reportMissingProp =
    Xl.checkMissingProp =
    Xl.checkReportMissingProp =
      void 0;
  var ym = _a(),
    OUt = nc(),
    EM = bk(),
    Zfs = nc();
  function eps(t, e) {
    let { gen: r, data: n, it: o } = t;
    r.if(PUt(r, n, e, o.opts.ownProperties), () => {
      (t.setParams({ missingProperty: (0, ym._)`${e}` }, !0), t.error());
    });
  }
  Xl.checkReportMissingProp = eps;
  function tps({ gen: t, data: e, it: { opts: r } }, n, o) {
    return (0, ym.or)(...n.map((s) => (0, ym.and)(PUt(t, e, s, r.ownProperties), (0, ym._)`${o} = ${s}`)));
  }
  Xl.checkMissingProp = tps;
  function rps(t, e) {
    (t.setParams({ missingProperty: e }, !0), t.error());
  }
  Xl.reportMissingProp = rps;
  function K3n(t) {
    return t.scopeValue("func", {
      ref: Object.prototype.hasOwnProperty,
      code: (0, ym._)`Object.prototype.hasOwnProperty`,
    });
  }
  Xl.hasPropFunc = K3n;
  function NUt(t, e, r) {
    return (0, ym._)`${K3n(t)}.call(${e}, ${r})`;
  }
  Xl.isOwnProperty = NUt;
  function nps(t, e, r, n) {
    let o = (0, ym._)`${e}${(0, ym.getProperty)(r)} !== undefined`;
    return n ? (0, ym._)`${o} && ${NUt(t, e, r)}` : o;
  }
  Xl.propertyInData = nps;
  function PUt(t, e, r, n) {
    let o = (0, ym._)`${e}${(0, ym.getProperty)(r)} === undefined`;
    return n ? (0, ym.or)(o, (0, ym.not)(NUt(t, e, r))) : o;
  }
  Xl.noPropertyInData = PUt;
  function J3n(t) {
    return t ? Object.keys(t).filter((e) => e !== "__proto__") : [];
  }
  Xl.allSchemaProperties = J3n;
  function ips(t, e) {
    return J3n(e).filter((r) => !(0, OUt.alwaysValidSchema)(t, e[r]));
  }
  Xl.schemaProperties = ips;
  function ops(
    { schemaCode: t, data: e, it: { gen: r, topSchemaRef: n, schemaPath: o, errorPath: s }, it: a },
    u,
    c,
    m,
  ) {
    let d = m ? (0, ym._)`${t}, ${e}, ${n}${o}` : e,
      f = [
        [EM.default.instancePath, (0, ym.strConcat)(EM.default.instancePath, s)],
        [EM.default.parentData, a.parentData],
        [EM.default.parentDataProperty, a.parentDataProperty],
        [EM.default.rootData, EM.default.rootData],
      ];
    a.opts.dynamicRef && f.push([EM.default.dynamicAnchors, EM.default.dynamicAnchors]);
    let p = (0, ym._)`${d}, ${r.object(...f)}`;
    return c !== ym.nil ? (0, ym._)`${u}.call(${c}, ${p})` : (0, ym._)`${u}(${p})`;
  }
  Xl.callValidateCode = ops;
  var sps = (0, ym._)`new RegExp`;
  function aps({ gen: t, it: { opts: e } }, r) {
    let n = e.unicodeRegExp ? "u" : "",
      { regExp: o } = e.code,
      s = o(r, n);
    return t.scopeValue("pattern", {
      key: s.toString(),
      ref: s,
      code: (0, ym._)`${o.code === "new RegExp" ? sps : (0, Zfs.useFunc)(t, o)}(${r}, ${n})`,
    });
  }
  Xl.usePattern = aps;
  function ups(t) {
    let { gen: e, data: r, keyword: n, it: o } = t,
      s = e.name("valid");
    if (o.allErrors) {
      let u = e.let("valid", !0);
      return (a(() => e.assign(u, !1)), u);
    }
    return (e.var(s, !0), a(() => e.break()), s);
    function a(u) {
      let c = e.const("len", (0, ym._)`${r}.length`);
      e.forRange("i", 0, c, (m) => {
        (t.subschema({ keyword: n, dataProp: m, dataPropType: OUt.Type.Num }, s), e.if((0, ym.not)(s), u));
      });
    }
  }
  Xl.validateArray = ups;
  function cps(t) {
    let { gen: e, schema: r, keyword: n, it: o } = t;
    if (!Array.isArray(r)) throw new Error("ajv implementation error");
    if (r.some((c) => (0, OUt.alwaysValidSchema)(o, c)) && !o.opts.unevaluated) return;
    let a = e.let("valid", !1),
      u = e.name("_valid");
    (e.block(() =>
      r.forEach((c, m) => {
        let d = t.subschema({ keyword: n, schemaProp: m, compositeRule: !0 }, u);
        (e.assign(a, (0, ym._)`${a} || ${u}`), t.mergeValidEvaluated(d, u) || e.if((0, ym.not)(a)));
      }),
    ),
      t.result(
        a,
        () => t.reset(),
        () => t.error(!0),
      ));
  }
  Xl.validateUnion = cps;
});