/**
 * @module h5n
 * @category utils/validation
 * @label ajv
 * @position 884 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (h5n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var h5n = T((LT) => {
  "use strict";
  Object.defineProperty(LT, "__esModule", { value: !0 });
  LT.validateKeywordUsage = LT.validSchemaType = LT.funcKeywordCode = LT.macroKeywordCode = void 0;
  var I2 = za(),
    yV = wk(),
    Q2s = yE(),
    G2s = N9e();
  function q2s(t, e) {
    let { gen: r, keyword: n, schema: o, parentSchema: s, it: a } = t,
      u = e.macro.call(a.self, o, s, a),
      c = p5n(r, n, u);
    a.opts.validateSchema !== !1 && a.self.validateSchema(u, !0);
    let m = r.name("valid");
    (t.subschema(
      { schema: u, schemaPath: I2.nil, errSchemaPath: `${a.errSchemaPath}/${n}`, topSchemaRef: c, compositeRule: !0 },
      m,
    ),
      t.pass(m, () => t.error(!0)));
  }
  LT.macroKeywordCode = q2s;
  function H2s(t, e) {
    var r;
    let { gen: n, keyword: o, schema: s, parentSchema: a, $data: u, it: c } = t;
    W2s(c, e);
    let m = !u && e.compile ? e.compile.call(c.self, s, a, c) : e.validate,
      d = p5n(n, o, m),
      f = n.let("valid");
    (t.block$data(f, p), t.ok((r = e.valid) !== null && r !== void 0 ? r : f));
    function p() {
      if (e.errors === !1) (b(), e.modifying && f5n(t), A(() => t.error()));
      else {
        let y = e.async ? h() : g();
        (e.modifying && f5n(t), A(() => V2s(t, y)));
      }
    }
    function h() {
      let y = n.let("ruleErrs", null);
      return (
        n.try(
          () => b((0, I2._)`await `),
          (E) =>
            n.assign(f, !1).if(
              (0, I2._)`${E} instanceof ${c.ValidationError}`,
              () => n.assign(y, (0, I2._)`${E}.errors`),
              () => n.throw(E),
            ),
        ),
        y
      );
    }
    function g() {
      let y = (0, I2._)`${d}.errors`;
      return (n.assign(y, null), b(I2.nil), y);
    }
    function b(y = e.async ? (0, I2._)`await ` : I2.nil) {
      let E = c.opts.passContext ? yV.default.this : yV.default.self,
        v = !(("compile" in e && !u) || e.schema === !1);
      n.assign(f, (0, I2._)`${y}${(0, Q2s.callValidateCode)(t, d, E, v)}`, e.modifying);
    }
    function A(y) {
      var E;
      n.if((0, I2.not)((E = e.valid) !== null && E !== void 0 ? E : f), y);
    }
  }
  LT.funcKeywordCode = H2s;
  function f5n(t) {
    let { gen: e, data: r, it: n } = t;
    e.if(n.parentData, () => e.assign(r, (0, I2._)`${n.parentData}[${n.parentDataProperty}]`));
  }
  function V2s(t, e) {
    let { gen: r } = t;
    r.if(
      (0, I2._)`Array.isArray(${e})`,
      () => {
        (r
          .assign(
            yV.default.vErrors,
            (0, I2._)`${yV.default.vErrors} === null ? ${e} : ${yV.default.vErrors}.concat(${e})`,
          )
          .assign(yV.default.errors, (0, I2._)`${yV.default.vErrors}.length`),
          (0, G2s.extendErrors)(t));
      },
      () => t.error(),
    );
  }
  function W2s({ schemaEnv: t }, e) {
    if (e.async && !t.$async) throw new Error("async keyword in sync schema");
  }
  function p5n(t, e, r) {
    if (r === void 0) throw new Error(`keyword "${e}" failed to compile`);
    return t.scopeValue("keyword", typeof r == "function" ? { ref: r } : { ref: r, code: (0, I2.stringify)(r) });
  }
  function z2s(t, e, r = !1) {
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
  LT.validSchemaType = z2s;
  function Y2s({ schema: t, opts: e, self: r, errSchemaPath: n }, o, s) {
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
  LT.validateKeywordUsage = Y2s;
});