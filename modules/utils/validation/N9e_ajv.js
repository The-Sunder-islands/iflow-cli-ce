/**
 * @module N9e
 * @category utils/validation
 * @label ajv
 * @position 877 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (N9e) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var N9e = T((Hb) => {
  "use strict";
  Object.defineProperty(Hb, "__esModule", { value: !0 });
  Hb.extendErrors =
    Hb.resetErrorsCount =
    Hb.reportExtraError =
    Hb.reportError =
    Hb.keyword$DataError =
    Hb.keywordError =
      void 0;
  var Gu = za(),
    pKe = sc(),
    D2 = wk();
  Hb.keywordError = { message: ({ keyword: t }) => (0, Gu.str)`must pass "${t}" keyword validation` };
  Hb.keyword$DataError = {
    message: ({ keyword: t, schemaType: e }) =>
      e ? (0, Gu.str)`"${t}" keyword must be ${e} ($data)` : (0, Gu.str)`"${t}" keyword is invalid ($data)`,
  };
  function e2s(t, e = Hb.keywordError, r, n) {
    let { it: o } = t,
      { gen: s, compositeRule: a, allErrors: u } = o,
      c = t5n(t, e, r);
    (n ?? (a || u)) ? Z2n(s, c) : e5n(o, (0, Gu._)`[${c}]`);
  }
  Hb.reportError = e2s;
  function t2s(t, e = Hb.keywordError, r) {
    let { it: n } = t,
      { gen: o, compositeRule: s, allErrors: a } = n,
      u = t5n(t, e, r);
    (Z2n(o, u), s || a || e5n(n, D2.default.vErrors));
  }
  Hb.reportExtraError = t2s;
  function r2s(t, e) {
    (t.assign(D2.default.errors, e),
      t.if((0, Gu._)`${D2.default.vErrors} !== null`, () =>
        t.if(
          e,
          () => t.assign((0, Gu._)`${D2.default.vErrors}.length`, e),
          () => t.assign(D2.default.vErrors, null),
        ),
      ));
  }
  Hb.resetErrorsCount = r2s;
  function n2s({ gen: t, keyword: e, schemaValue: r, data: n, errsCount: o, it: s }) {
    if (o === void 0) throw new Error("ajv implementation error");
    let a = t.name("err");
    t.forRange("i", o, D2.default.errors, (u) => {
      (t.const(a, (0, Gu._)`${D2.default.vErrors}[${u}]`),
        t.if((0, Gu._)`${a}.instancePath === undefined`, () =>
          t.assign((0, Gu._)`${a}.instancePath`, (0, Gu.strConcat)(D2.default.instancePath, s.errorPath)),
        ),
        t.assign((0, Gu._)`${a}.schemaPath`, (0, Gu.str)`${s.errSchemaPath}/${e}`),
        s.opts.verbose && (t.assign((0, Gu._)`${a}.schema`, r), t.assign((0, Gu._)`${a}.data`, n)));
    });
  }
  Hb.extendErrors = n2s;
  function Z2n(t, e) {
    let r = t.const("err", e);
    (t.if(
      (0, Gu._)`${D2.default.vErrors} === null`,
      () => t.assign(D2.default.vErrors, (0, Gu._)`[${r}]`),
      (0, Gu._)`${D2.default.vErrors}.push(${r})`,
    ),
      t.code((0, Gu._)`${D2.default.errors}++`));
  }
  function e5n(t, e) {
    let { gen: r, validateName: n, schemaEnv: o } = t;
    o.$async ? r.throw((0, Gu._)`new ${t.ValidationError}(${e})`) : (r.assign((0, Gu._)`${n}.errors`, e), r.return(!1));
  }
  var AV = {
    keyword: new Gu.Name("keyword"),
    schemaPath: new Gu.Name("schemaPath"),
    params: new Gu.Name("params"),
    propertyName: new Gu.Name("propertyName"),
    message: new Gu.Name("message"),
    schema: new Gu.Name("schema"),
    parentSchema: new Gu.Name("parentSchema"),
  };
  function t5n(t, e, r) {
    let { createErrors: n } = t.it;
    return n === !1 ? (0, Gu._)`{}` : i2s(t, e, r);
  }
  function i2s(t, e, r = {}) {
    let { gen: n, it: o } = t,
      s = [o2s(o, r), s2s(t, r)];
    return (a2s(t, e, s), n.object(...s));
  }
  function o2s({ errorPath: t }, { instancePath: e }) {
    let r = e ? (0, Gu.str)`${t}${(0, pKe.getErrorPath)(e, pKe.Type.Str)}` : t;
    return [D2.default.instancePath, (0, Gu.strConcat)(D2.default.instancePath, r)];
  }
  function s2s({ keyword: t, it: { errSchemaPath: e } }, { schemaPath: r, parentSchema: n }) {
    let o = n ? e : (0, Gu.str)`${e}/${t}`;
    return (r && (o = (0, Gu.str)`${o}${(0, pKe.getErrorPath)(r, pKe.Type.Str)}`), [AV.schemaPath, o]);
  }
  function a2s(t, { params: e, message: r }, n) {
    let { keyword: o, data: s, schemaValue: a, it: u } = t,
      { opts: c, propertyName: m, topSchemaRef: d, schemaPath: f } = u;
    (n.push([AV.keyword, o], [AV.params, typeof e == "function" ? e(t) : e || (0, Gu._)`{}`]),
      c.messages && n.push([AV.message, typeof r == "function" ? r(t) : r]),
      c.verbose && n.push([AV.schema, a], [AV.parentSchema, (0, Gu._)`${d}${f}`], [D2.default.data, s]),
      m && n.push([AV.propertyName, m]));
  }
});