/**
 * @module lE
 * @category utils/validation
 * @label ajv
 * @position 738 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (lE) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var lE = T((Jl) => {
  "use strict";
  Object.defineProperty(Jl, "__esModule", { value: !0 });
  Jl.validateUnion =
    Jl.validateArray =
    Jl.usePattern =
    Jl.callValidateCode =
    Jl.schemaProperties =
    Jl.allSchemaProperties =
    Jl.noPropertyInData =
    Jl.propertyInData =
    Jl.isOwnProperty =
    Jl.hasPropFunc =
    Jl.reportMissingProp =
    Jl.checkMissingProp =
    Jl.checkReportMissingProp =
      void 0;
  var bm = Ha(),
    qMt = tc(),
    pM = dk(),
    hls = tc();
  function gls(t, e) {
    let { gen: r, data: n, it: o } = t;
    r.if(VMt(r, n, e, o.opts.ownProperties), () => {
      (t.setParams({ missingProperty: (0, bm._)`${e}` }, !0), t.error());
    });
  }
  Jl.checkReportMissingProp = gls;
  function bls({ gen: t, data: e, it: { opts: r } }, n, o) {
    return (0, bm.or)(...n.map((s) => (0, bm.and)(VMt(t, e, s, r.ownProperties), (0, bm._)`${o} = ${s}`)));
  }
  Jl.checkMissingProp = bls;
  function Als(t, e) {
    (t.setParams({ missingProperty: e }, !0), t.error());
  }
  Jl.reportMissingProp = Als;
  function gpn(t) {
    return t.scopeValue("func", {
      ref: Object.prototype.hasOwnProperty,
      code: (0, bm._)`Object.prototype.hasOwnProperty`,
    });
  }
  Jl.hasPropFunc = gpn;
  function HMt(t, e, r) {
    return (0, bm._)`${gpn(t)}.call(${e}, ${r})`;
  }
  Jl.isOwnProperty = HMt;
  function yls(t, e, r, n) {
    let o = (0, bm._)`${e}${(0, bm.getProperty)(r)} !== undefined`;
    return n ? (0, bm._)`${o} && ${HMt(t, e, r)}` : o;
  }
  Jl.propertyInData = yls;
  function VMt(t, e, r, n) {
    let o = (0, bm._)`${e}${(0, bm.getProperty)(r)} === undefined`;
    return n ? (0, bm.or)(o, (0, bm.not)(HMt(t, e, r))) : o;
  }
  Jl.noPropertyInData = VMt;
  function bpn(t) {
    return t ? Object.keys(t).filter((e) => e !== "__proto__") : [];
  }
  Jl.allSchemaProperties = bpn;
  function _ls(t, e) {
    return bpn(e).filter((r) => !(0, qMt.alwaysValidSchema)(t, e[r]));
  }
  Jl.schemaProperties = _ls;
  function Els(
    { schemaCode: t, data: e, it: { gen: r, topSchemaRef: n, schemaPath: o, errorPath: s }, it: a },
    u,
    c,
    m,
  ) {
    let d = m ? (0, bm._)`${t}, ${e}, ${n}${o}` : e,
      f = [
        [pM.default.instancePath, (0, bm.strConcat)(pM.default.instancePath, s)],
        [pM.default.parentData, a.parentData],
        [pM.default.parentDataProperty, a.parentDataProperty],
        [pM.default.rootData, pM.default.rootData],
      ];
    a.opts.dynamicRef && f.push([pM.default.dynamicAnchors, pM.default.dynamicAnchors]);
    let p = (0, bm._)`${d}, ${r.object(...f)}`;
    return c !== bm.nil ? (0, bm._)`${u}.call(${c}, ${p})` : (0, bm._)`${u}(${p})`;
  }
  Jl.callValidateCode = Els;
  var vls = (0, bm._)`new RegExp`;
  function Cls({ gen: t, it: { opts: e } }, r) {
    let n = e.unicodeRegExp ? "u" : "",
      { regExp: o } = e.code,
      s = o(r, n);
    return t.scopeValue("pattern", {
      key: s.toString(),
      ref: s,
      code: (0, bm._)`${o.code === "new RegExp" ? vls : (0, hls.useFunc)(t, o)}(${r}, ${n})`,
    });
  }
  Jl.usePattern = Cls;
  function Sls(t) {
    let { gen: e, data: r, keyword: n, it: o } = t,
      s = e.name("valid");
    if (o.allErrors) {
      let u = e.let("valid", !0);
      return (a(() => e.assign(u, !1)), u);
    }
    return (e.var(s, !0), a(() => e.break()), s);
    function a(u) {
      let c = e.const("len", (0, bm._)`${r}.length`);
      e.forRange("i", 0, c, (m) => {
        (t.subschema({ keyword: n, dataProp: m, dataPropType: qMt.Type.Num }, s), e.if((0, bm.not)(s), u));
      });
    }
  }
  Jl.validateArray = Sls;
  function wls(t) {
    let { gen: e, schema: r, keyword: n, it: o } = t;
    if (!Array.isArray(r)) throw new Error("ajv implementation error");
    if (r.some((c) => (0, qMt.alwaysValidSchema)(o, c)) && !o.opts.unevaluated) return;
    let a = e.let("valid", !1),
      u = e.name("_valid");
    (e.block(() =>
      r.forEach((c, m) => {
        let d = t.subschema({ keyword: n, schemaProp: m, compositeRule: !0 }, u);
        (e.assign(a, (0, bm._)`${a} || ${u}`), t.mergeValidEvaluated(d, u) || e.if((0, bm.not)(a)));
      }),
    ),
      t.result(
        a,
        () => t.reset(),
        () => t.error(!0),
      ));
  }
  Jl.validateUnion = wls;
});