/**
 * @module I8e
 * @category utils/validation
 * @label ajv
 * @position 801 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (I8e) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var I8e = T((Qb) => {
  "use strict";
  Object.defineProperty(Qb, "__esModule", { value: !0 });
  Qb.extendErrors =
    Qb.resetErrorsCount =
    Qb.reportExtraError =
    Qb.reportError =
    Qb.keyword$DataError =
    Qb.keywordError =
      void 0;
  var Qu = _a(),
    dYe = nc(),
    S2 = bk();
  Qb.keywordError = { message: ({ keyword: t }) => (0, Qu.str)`must pass "${t}" keyword validation` };
  Qb.keyword$DataError = {
    message: ({ keyword: t, schemaType: e }) =>
      e ? (0, Qu.str)`"${t}" keyword must be ${e} ($data)` : (0, Qu.str)`"${t}" keyword is invalid ($data)`,
  };
  function vfs(t, e = Qb.keywordError, r, n) {
    let { it: o } = t,
      { gen: s, compositeRule: a, allErrors: u } = o,
      c = $3n(t, e, r);
    (n ?? (a || u)) ? F3n(s, c) : U3n(o, (0, Qu._)`[${c}]`);
  }
  Qb.reportError = vfs;
  function Cfs(t, e = Qb.keywordError, r) {
    let { it: n } = t,
      { gen: o, compositeRule: s, allErrors: a } = n,
      u = $3n(t, e, r);
    (F3n(o, u), s || a || U3n(n, S2.default.vErrors));
  }
  Qb.reportExtraError = Cfs;
  function Sfs(t, e) {
    (t.assign(S2.default.errors, e),
      t.if((0, Qu._)`${S2.default.vErrors} !== null`, () =>
        t.if(
          e,
          () => t.assign((0, Qu._)`${S2.default.vErrors}.length`, e),
          () => t.assign(S2.default.vErrors, null),
        ),
      ));
  }
  Qb.resetErrorsCount = Sfs;
  function wfs({ gen: t, keyword: e, schemaValue: r, data: n, errsCount: o, it: s }) {
    if (o === void 0) throw new Error("ajv implementation error");
    let a = t.name("err");
    t.forRange("i", o, S2.default.errors, (u) => {
      (t.const(a, (0, Qu._)`${S2.default.vErrors}[${u}]`),
        t.if((0, Qu._)`${a}.instancePath === undefined`, () =>
          t.assign((0, Qu._)`${a}.instancePath`, (0, Qu.strConcat)(S2.default.instancePath, s.errorPath)),
        ),
        t.assign((0, Qu._)`${a}.schemaPath`, (0, Qu.str)`${s.errSchemaPath}/${e}`),
        s.opts.verbose && (t.assign((0, Qu._)`${a}.schema`, r), t.assign((0, Qu._)`${a}.data`, n)));
    });
  }
  Qb.extendErrors = wfs;
  function F3n(t, e) {
    let r = t.const("err", e);
    (t.if(
      (0, Qu._)`${S2.default.vErrors} === null`,
      () => t.assign(S2.default.vErrors, (0, Qu._)`[${r}]`),
      (0, Qu._)`${S2.default.vErrors}.push(${r})`,
    ),
      t.code((0, Qu._)`${S2.default.errors}++`));
  }
  function U3n(t, e) {
    let { gen: r, validateName: n, schemaEnv: o } = t;
    o.$async ? r.throw((0, Qu._)`new ${t.ValidationError}(${e})`) : (r.assign((0, Qu._)`${n}.errors`, e), r.return(!1));
  }
  var ZH = {
    keyword: new Qu.Name("keyword"),
    schemaPath: new Qu.Name("schemaPath"),
    params: new Qu.Name("params"),
    propertyName: new Qu.Name("propertyName"),
    message: new Qu.Name("message"),
    schema: new Qu.Name("schema"),
    parentSchema: new Qu.Name("parentSchema"),
  };
  function $3n(t, e, r) {
    let { createErrors: n } = t.it;
    return n === !1 ? (0, Qu._)`{}` : xfs(t, e, r);
  }
  function xfs(t, e, r = {}) {
    let { gen: n, it: o } = t,
      s = [Tfs(o, r), Dfs(t, r)];
    return (Ifs(t, e, s), n.object(...s));
  }
  function Tfs({ errorPath: t }, { instancePath: e }) {
    let r = e ? (0, Qu.str)`${t}${(0, dYe.getErrorPath)(e, dYe.Type.Str)}` : t;
    return [S2.default.instancePath, (0, Qu.strConcat)(S2.default.instancePath, r)];
  }
  function Dfs({ keyword: t, it: { errSchemaPath: e } }, { schemaPath: r, parentSchema: n }) {
    let o = n ? e : (0, Qu.str)`${e}/${t}`;
    return (r && (o = (0, Qu.str)`${o}${(0, dYe.getErrorPath)(r, dYe.Type.Str)}`), [ZH.schemaPath, o]);
  }
  function Ifs(t, { params: e, message: r }, n) {
    let { keyword: o, data: s, schemaValue: a, it: u } = t,
      { opts: c, propertyName: m, topSchemaRef: d, schemaPath: f } = u;
    (n.push([ZH.keyword, o], [ZH.params, typeof e == "function" ? e(t) : e || (0, Qu._)`{}`]),
      c.messages && n.push([ZH.message, typeof r == "function" ? r(t) : r]),
      c.verbose && n.push([ZH.schema, a], [ZH.parentSchema, (0, Qu._)`${d}${f}`], [S2.default.data, s]),
      m && n.push([ZH.propertyName, m]));
  }
});