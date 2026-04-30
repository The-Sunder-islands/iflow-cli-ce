/**
 * @module t8e
 * @category utils/validation
 * @label ajv
 * @position 733 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (t8e) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var t8e = T((Ub) => {
  "use strict";
  Object.defineProperty(Ub, "__esModule", { value: !0 });
  Ub.extendErrors =
    Ub.resetErrorsCount =
    Ub.reportExtraError =
    Ub.reportError =
    Ub.keyword$DataError =
    Ub.keywordError =
      void 0;
  var ju = Ha(),
    Rze = tc(),
    v2 = dk();
  Ub.keywordError = { message: ({ keyword: t }) => (0, ju.str)`must pass "${t}" keyword validation` };
  Ub.keyword$DataError = {
    message: ({ keyword: t, schemaType: e }) =>
      e ? (0, ju.str)`"${t}" keyword must be ${e} ($data)` : (0, ju.str)`"${t}" keyword is invalid ($data)`,
  };
  function Fcs(t, e = Ub.keywordError, r, n) {
    let { it: o } = t,
      { gen: s, compositeRule: a, allErrors: u } = o,
      c = spn(t, e, r);
    (n ?? (a || u)) ? ipn(s, c) : opn(o, (0, ju._)`[${c}]`);
  }
  Ub.reportError = Fcs;
  function Ucs(t, e = Ub.keywordError, r) {
    let { it: n } = t,
      { gen: o, compositeRule: s, allErrors: a } = n,
      u = spn(t, e, r);
    (ipn(o, u), s || a || opn(n, v2.default.vErrors));
  }
  Ub.reportExtraError = Ucs;
  function $cs(t, e) {
    (t.assign(v2.default.errors, e),
      t.if((0, ju._)`${v2.default.vErrors} !== null`, () =>
        t.if(
          e,
          () => t.assign((0, ju._)`${v2.default.vErrors}.length`, e),
          () => t.assign(v2.default.vErrors, null),
        ),
      ));
  }
  Ub.resetErrorsCount = $cs;
  function jcs({ gen: t, keyword: e, schemaValue: r, data: n, errsCount: o, it: s }) {
    if (o === void 0) throw new Error("ajv implementation error");
    let a = t.name("err");
    t.forRange("i", o, v2.default.errors, (u) => {
      (t.const(a, (0, ju._)`${v2.default.vErrors}[${u}]`),
        t.if((0, ju._)`${a}.instancePath === undefined`, () =>
          t.assign((0, ju._)`${a}.instancePath`, (0, ju.strConcat)(v2.default.instancePath, s.errorPath)),
        ),
        t.assign((0, ju._)`${a}.schemaPath`, (0, ju.str)`${s.errSchemaPath}/${e}`),
        s.opts.verbose && (t.assign((0, ju._)`${a}.schema`, r), t.assign((0, ju._)`${a}.data`, n)));
    });
  }
  Ub.extendErrors = jcs;
  function ipn(t, e) {
    let r = t.const("err", e);
    (t.if(
      (0, ju._)`${v2.default.vErrors} === null`,
      () => t.assign(v2.default.vErrors, (0, ju._)`[${r}]`),
      (0, ju._)`${v2.default.vErrors}.push(${r})`,
    ),
      t.code((0, ju._)`${v2.default.errors}++`));
  }
  function opn(t, e) {
    let { gen: r, validateName: n, schemaEnv: o } = t;
    o.$async ? r.throw((0, ju._)`new ${t.ValidationError}(${e})`) : (r.assign((0, ju._)`${n}.errors`, e), r.return(!1));
  }
  var QH = {
    keyword: new ju.Name("keyword"),
    schemaPath: new ju.Name("schemaPath"),
    params: new ju.Name("params"),
    propertyName: new ju.Name("propertyName"),
    message: new ju.Name("message"),
    schema: new ju.Name("schema"),
    parentSchema: new ju.Name("parentSchema"),
  };
  function spn(t, e, r) {
    let { createErrors: n } = t.it;
    return n === !1 ? (0, ju._)`{}` : Qcs(t, e, r);
  }
  function Qcs(t, e, r = {}) {
    let { gen: n, it: o } = t,
      s = [Gcs(o, r), qcs(t, r)];
    return (Hcs(t, e, s), n.object(...s));
  }
  function Gcs({ errorPath: t }, { instancePath: e }) {
    let r = e ? (0, ju.str)`${t}${(0, Rze.getErrorPath)(e, Rze.Type.Str)}` : t;
    return [v2.default.instancePath, (0, ju.strConcat)(v2.default.instancePath, r)];
  }
  function qcs({ keyword: t, it: { errSchemaPath: e } }, { schemaPath: r, parentSchema: n }) {
    let o = n ? e : (0, ju.str)`${e}/${t}`;
    return (r && (o = (0, ju.str)`${o}${(0, Rze.getErrorPath)(r, Rze.Type.Str)}`), [QH.schemaPath, o]);
  }
  function Hcs(t, { params: e, message: r }, n) {
    let { keyword: o, data: s, schemaValue: a, it: u } = t,
      { opts: c, propertyName: m, topSchemaRef: d, schemaPath: f } = u;
    (n.push([QH.keyword, o], [QH.params, typeof e == "function" ? e(t) : e || (0, ju._)`{}`]),
      c.messages && n.push([QH.message, typeof r == "function" ? r(t) : r]),
      c.verbose && n.push([QH.schema, a], [QH.parentSchema, (0, ju._)`${d}${f}`], [v2.default.data, s]),
      m && n.push([QH.propertyName, m]));
  }
});