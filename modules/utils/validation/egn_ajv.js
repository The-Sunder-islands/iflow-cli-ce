/**
 * @module egn
 * @category utils/validation
 * @label ajv
 * @position 808 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (egn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var egn = T((NT) => {
  "use strict";
  Object.defineProperty(NT, "__esModule", { value: !0 });
  NT.validateKeywordUsage = NT.validSchemaType = NT.funcKeywordCode = NT.macroKeywordCode = void 0;
  var w2 = _a(),
    eV = bk(),
    lps = pE(),
    mps = I8e();
  function dps(t, e) {
    let { gen: r, keyword: n, schema: o, parentSchema: s, it: a } = t,
      u = e.macro.call(a.self, o, s, a),
      c = Z3n(r, n, u);
    a.opts.validateSchema !== !1 && a.self.validateSchema(u, !0);
    let m = r.name("valid");
    (t.subschema(
      { schema: u, schemaPath: w2.nil, errSchemaPath: `${a.errSchemaPath}/${n}`, topSchemaRef: c, compositeRule: !0 },
      m,
    ),
      t.pass(m, () => t.error(!0)));
  }
  NT.macroKeywordCode = dps;
  function fps(t, e) {
    var r;
    let { gen: n, keyword: o, schema: s, parentSchema: a, $data: u, it: c } = t;
    hps(c, e);
    let m = !u && e.compile ? e.compile.call(c.self, s, a, c) : e.validate,
      d = Z3n(n, o, m),
      f = n.let("valid");
    (t.block$data(f, p), t.ok((r = e.valid) !== null && r !== void 0 ? r : f));
    function p() {
      if (e.errors === !1) (b(), e.modifying && X3n(t), A(() => t.error()));
      else {
        let y = e.async ? h() : g();
        (e.modifying && X3n(t), A(() => pps(t, y)));
      }
    }
    function h() {
      let y = n.let("ruleErrs", null);
      return (
        n.try(
          () => b((0, w2._)`await `),
          (E) =>
            n.assign(f, !1).if(
              (0, w2._)`${E} instanceof ${c.ValidationError}`,
              () => n.assign(y, (0, w2._)`${E}.errors`),
              () => n.throw(E),
            ),
        ),
        y
      );
    }
    function g() {
      let y = (0, w2._)`${d}.errors`;
      return (n.assign(y, null), b(w2.nil), y);
    }
    function b(y = e.async ? (0, w2._)`await ` : w2.nil) {
      let E = c.opts.passContext ? eV.default.this : eV.default.self,
        v = !(("compile" in e && !u) || e.schema === !1);
      n.assign(f, (0, w2._)`${y}${(0, lps.callValidateCode)(t, d, E, v)}`, e.modifying);
    }
    function A(y) {
      var E;
      n.if((0, w2.not)((E = e.valid) !== null && E !== void 0 ? E : f), y);
    }
  }
  NT.funcKeywordCode = fps;
  function X3n(t) {
    let { gen: e, data: r, it: n } = t;
    e.if(n.parentData, () => e.assign(r, (0, w2._)`${n.parentData}[${n.parentDataProperty}]`));
  }
  function pps(t, e) {
    let { gen: r } = t;
    r.if(
      (0, w2._)`Array.isArray(${e})`,
      () => {
        (r
          .assign(
            eV.default.vErrors,
            (0, w2._)`${eV.default.vErrors} === null ? ${e} : ${eV.default.vErrors}.concat(${e})`,
          )
          .assign(eV.default.errors, (0, w2._)`${eV.default.vErrors}.length`),
          (0, mps.extendErrors)(t));
      },
      () => t.error(),
    );
  }
  function hps({ schemaEnv: t }, e) {
    if (e.async && !t.$async) throw new Error("async keyword in sync schema");
  }
  function Z3n(t, e, r) {
    if (r === void 0) throw new Error(`keyword "${e}" failed to compile`);
    return t.scopeValue("keyword", typeof r == "function" ? { ref: r } : { ref: r, code: (0, w2.stringify)(r) });
  }
  function gps(t, e, r = !1) {
    return (
      !e.length ||
      e.some((n) =>
        n === "array"
          ? Array.isArray(t)
          : n === "object"
            ? t && typeof t == "object" && !Array.isArray(t)
            : typeof t == n || (r && typeof t > "u"),
      )
    );
  }
  NT.validSchemaType = gps;
  function bps({ schema: t, opts: e, self: r, errSchemaPath: n }, o, s) {
    if (Array.isArray(o.keyword) ? !o.keyword.includes(s) : o.keyword !== s)
      throw new Error("ajv implementation error");
    let a = o.dependencies;
    if (a?.some((u) => !Object.prototype.hasOwnProperty.call(t, u)))
      throw new Error(`parent schema must have dependencies of ${s}: ${a.join(",")}`);
    if (o.validateSchema && !o.validateSchema(t[s])) {
      let c = `keyword "${s}" value is invalid at path "${n}": ` + r.errorsText(o.validateSchema.errors);
      if (e.validateSchema === "log") r.logger.error(c);
      else throw new Error(c);
    }
  }
  NT.validateKeywordUsage = bps;
});