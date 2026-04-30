/**
 * @module Mze
 * @category utils/validation
 * @label ajv
 * @position 747 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Mze) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Mze = T((mE) => {
  "use strict";
  Object.defineProperty(mE, "__esModule", { value: !0 });
  mE.resolveSchema = mE.getCompilingSchema = mE.resolveRef = mE.compileSchema = mE.SchemaEnv = void 0;
  var I4 = Ha(),
    b0s = Bze(),
    HH = dk(),
    R4 = n8e(),
    Gpn = tc(),
    A0s = s8e(),
    Foe = class {
      constructor(e) {
        var r;
        ((this.refs = {}), (this.dynamicAnchors = {}));
        let n;
        (typeof e.schema == "object" && (n = e.schema),
          (this.schema = e.schema),
          (this.schemaId = e.schemaId),
          (this.root = e.root || this),
          (this.baseId = (r = e.baseId) !== null && r !== void 0 ? r : (0, R4.normalizeId)(n?.[e.schemaId || "$id"])),
          (this.schemaPath = e.schemaPath),
          (this.localRefs = e.localRefs),
          (this.meta = e.meta),
          (this.$async = n?.$async),
          (this.refs = {}));
      }
    };
  mE.SchemaEnv = Foe;
  function nFt(t) {
    let e = qpn.call(this, t);
    if (e) return e;
    let r = (0, R4.getFullPath)(this.opts.uriResolver, t.root.baseId),
      { es5: n, lines: o } = this.opts.code,
      { ownProperties: s } = this.opts,
      a = new I4.CodeGen(this.scope, { es5: n, lines: o, ownProperties: s }),
      u;
    t.$async &&
      (u = a.scopeValue("Error", {
        ref: b0s.default,
        code: (0, I4._)`require("ajv/dist/runtime/validation_error").default`,
      }));
    let c = a.scopeName("validate");
    t.validateName = c;
    let m = {
        gen: a,
        allErrors: this.opts.allErrors,
        data: HH.default.data,
        parentData: HH.default.parentData,
        parentDataProperty: HH.default.parentDataProperty,
        dataNames: [HH.default.data],
        dataPathArr: [I4.nil],
        dataLevel: 0,
        dataTypes: [],
        definedProperties: new Set(),
        topSchemaRef: a.scopeValue(
          "schema",
          this.opts.code.source === !0 ? { ref: t.schema, code: (0, I4.stringify)(t.schema) } : { ref: t.schema },
        ),
        validateName: c,
        ValidationError: u,
        schema: t.schema,
        schemaEnv: t,
        rootId: r,
        baseId: t.baseId || r,
        schemaPath: I4.nil,
        errSchemaPath: t.schemaPath || (this.opts.jtd ? "" : "#"),
        errorPath: (0, I4._)`""`,
        opts: this.opts,
        self: this,
      },
      d;
    try {
      (this._compilations.add(t), (0, A0s.validateFunctionCode)(m), a.optimize(this.opts.code.optimize));
      let f = a.toString();
      ((d = `${a.scopeRefs(HH.default.scope)}return ${f}`),
        this.opts.code.process && (d = this.opts.code.process(d, t)));
      let h = new Function(`${HH.default.self}`, `${HH.default.scope}`, d)(this, this.scope.get());
      if (
        (this.scope.value(c, { ref: h }),
        (h.errors = null),
        (h.schema = t.schema),
        (h.schemaEnv = t),
        t.$async && (h.$async = !0),
        this.opts.code.source === !0 && (h.source = { validateName: c, validateCode: f, scopeValues: a._values }),
        this.opts.unevaluated)
      ) {
        let { props: g, items: b } = m;
        ((h.evaluated = {
          props: g instanceof I4.Name ? void 0 : g,
          items: b instanceof I4.Name ? void 0 : b,
          dynamicProps: g instanceof I4.Name,
          dynamicItems: b instanceof I4.Name,
        }),
          h.source && (h.source.evaluated = (0, I4.stringify)(h.evaluated)));
      }
      return ((t.validate = h), t);
    } catch (f) {
      throw (
        delete t.validate,
        delete t.validateName,
        d && this.logger.error("Error compiling schema, function code:", d),
        f
      );
    } finally {
      this._compilations.delete(t);
    }
  }
  mE.compileSchema = nFt;
  function y0s(t, e, r) {
    var n;
    r = (0, R4.resolveUrl)(this.opts.uriResolver, e, r);
    let o = t.refs[r];
    if (o) return o;
    let s = v0s.call(this, t, r);
    if (s === void 0) {
      let a = (n = t.localRefs) === null || n === void 0 ? void 0 : n[r],
        { schemaId: u } = this.opts;
      a && (s = new Foe({ schema: a, schemaId: u, root: t, baseId: e }));
    }
    if (s !== void 0) return (t.refs[r] = _0s.call(this, s));
  }
  mE.resolveRef = y0s;
  function _0s(t) {
    return (0, R4.inlineRef)(t.schema, this.opts.inlineRefs) ? t.schema : t.validate ? t : nFt.call(this, t);
  }
  function qpn(t) {
    for (let e of this._compilations) if (E0s(e, t)) return e;
  }
  mE.getCompilingSchema = qpn;
  function E0s(t, e) {
    return t.schema === e.schema && t.root === e.root && t.baseId === e.baseId;
  }
  function v0s(t, e) {
    let r;
    for (; typeof (r = this.refs[e]) == "string"; ) e = r;
    return r || this.schemas[e] || Lze.call(this, t, e);
  }
  function Lze(t, e) {
    let r = this.opts.uriResolver.parse(e),
      n = (0, R4._getFullPath)(this.opts.uriResolver, r),
      o = (0, R4.getFullPath)(this.opts.uriResolver, t.baseId, void 0);
    if (Object.keys(t.schema).length > 0 && n === o) return rFt.call(this, r, t);
    let s = (0, R4.normalizeId)(n),
      a = this.refs[s] || this.schemas[s];
    if (typeof a == "string") {
      let u = Lze.call(this, t, a);
      return typeof u?.schema != "object" ? void 0 : rFt.call(this, r, u);
    }
    if (typeof a?.schema == "object") {
      if ((a.validate || nFt.call(this, a), s === (0, R4.normalizeId)(e))) {
        let { schema: u } = a,
          { schemaId: c } = this.opts,
          m = u[c];
        return (
          m && (o = (0, R4.resolveUrl)(this.opts.uriResolver, o, m)),
          new Foe({ schema: u, schemaId: c, root: t, baseId: o })
        );
      }
      return rFt.call(this, r, a);
    }
  }
  mE.resolveSchema = Lze;
  var C0s = new Set(["properties", "patternProperties", "enum", "dependencies", "definitions"]);
  function rFt(t, { baseId: e, schema: r, root: n }) {
    var o;
    if (((o = t.fragment) === null || o === void 0 ? void 0 : o[0]) !== "/") return;
    for (let u of t.fragment.slice(1).split("/")) {
      if (typeof r == "boolean") return;
      let c = r[(0, Gpn.unescapeFragment)(u)];
      if (c === void 0) return;
      r = c;
      let m = typeof r == "object" && r[this.opts.schemaId];
      !C0s.has(u) && m && (e = (0, R4.resolveUrl)(this.opts.uriResolver, e, m));
    }
    let s;
    if (typeof r != "boolean" && r.$ref && !(0, Gpn.schemaHasRulesButRef)(r, this.RULES)) {
      let u = (0, R4.resolveUrl)(this.opts.uriResolver, e, r.$ref);
      s = Lze.call(this, n, u);
    }
    let { schemaId: a } = this.opts;
    if (((s = s || new Foe({ schema: r, schemaId: a, root: n, baseId: e })), s.schema !== s.root.schema)) return s;
  }
});