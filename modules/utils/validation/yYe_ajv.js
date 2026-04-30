/**
 * @module yYe
 * @category utils/validation
 * @label ajv
 * @position 815 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (yYe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var yYe = T((hE) => {
  "use strict";
  Object.defineProperty(hE, "__esModule", { value: !0 });
  hE.resolveSchema = hE.getCompilingSchema = hE.resolveRef = hE.compileSchema = hE.SchemaEnv = void 0;
  var N4 = _a(),
    ths = bYe(),
    tV = bk(),
    P4 = k8e(),
    vgn = nc(),
    rhs = P8e(),
    Xoe = class {
      constructor(e) {
        var r;
        ((this.refs = {}), (this.dynamicAnchors = {}));
        let n;
        (typeof e.schema == "object" && (n = e.schema),
          (this.schema = e.schema),
          (this.schemaId = e.schemaId),
          (this.root = e.root || this),
          (this.baseId = (r = e.baseId) !== null && r !== void 0 ? r : (0, P4.normalizeId)(n?.[e.schemaId || "$id"])),
          (this.schemaPath = e.schemaPath),
          (this.localRefs = e.localRefs),
          (this.meta = e.meta),
          (this.$async = n?.$async),
          (this.refs = {}));
      }
    };
  hE.SchemaEnv = Xoe;
  function HUt(t) {
    let e = Cgn.call(this, t);
    if (e) return e;
    let r = (0, P4.getFullPath)(this.opts.uriResolver, t.root.baseId),
      { es5: n, lines: o } = this.opts.code,
      { ownProperties: s } = this.opts,
      a = new N4.CodeGen(this.scope, { es5: n, lines: o, ownProperties: s }),
      u;
    t.$async &&
      (u = a.scopeValue("Error", {
        ref: ths.default,
        code: (0, N4._)`require("ajv/dist/runtime/validation_error").default`,
      }));
    let c = a.scopeName("validate");
    t.validateName = c;
    let m = {
        gen: a,
        allErrors: this.opts.allErrors,
        data: tV.default.data,
        parentData: tV.default.parentData,
        parentDataProperty: tV.default.parentDataProperty,
        dataNames: [tV.default.data],
        dataPathArr: [N4.nil],
        dataLevel: 0,
        dataTypes: [],
        definedProperties: new Set(),
        topSchemaRef: a.scopeValue(
          "schema",
          this.opts.code.source === !0 ? { ref: t.schema, code: (0, N4.stringify)(t.schema) } : { ref: t.schema },
        ),
        validateName: c,
        ValidationError: u,
        schema: t.schema,
        schemaEnv: t,
        rootId: r,
        baseId: t.baseId || r,
        schemaPath: N4.nil,
        errSchemaPath: t.schemaPath || (this.opts.jtd ? "" : "#"),
        errorPath: (0, N4._)`""`,
        opts: this.opts,
        self: this,
      },
      d;
    try {
      (this._compilations.add(t), (0, rhs.validateFunctionCode)(m), a.optimize(this.opts.code.optimize));
      let f = a.toString();
      ((d = `${a.scopeRefs(tV.default.scope)}return ${f}`),
        this.opts.code.process && (d = this.opts.code.process(d, t)));
      let h = new Function(`${tV.default.self}`, `${tV.default.scope}`, d)(this, this.scope.get());
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
          props: g instanceof N4.Name ? void 0 : g,
          items: b instanceof N4.Name ? void 0 : b,
          dynamicProps: g instanceof N4.Name,
          dynamicItems: b instanceof N4.Name,
        }),
          h.source && (h.source.evaluated = (0, N4.stringify)(h.evaluated)));
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
  hE.compileSchema = HUt;
  function nhs(t, e, r) {
    var n;
    r = (0, P4.resolveUrl)(this.opts.uriResolver, e, r);
    let o = t.refs[r];
    if (o) return o;
    let s = shs.call(this, t, r);
    if (s === void 0) {
      let a = (n = t.localRefs) === null || n === void 0 ? void 0 : n[r],
        { schemaId: u } = this.opts;
      a && (s = new Xoe({ schema: a, schemaId: u, root: t, baseId: e }));
    }
    if (s !== void 0) return (t.refs[r] = ihs.call(this, s));
  }
  hE.resolveRef = nhs;
  function ihs(t) {
    return (0, P4.inlineRef)(t.schema, this.opts.inlineRefs) ? t.schema : t.validate ? t : HUt.call(this, t);
  }
  function Cgn(t) {
    for (let e of this._compilations) if (ohs(e, t)) return e;
  }
  hE.getCompilingSchema = Cgn;
  function ohs(t, e) {
    return t.schema === e.schema && t.root === e.root && t.baseId === e.baseId;
  }
  function shs(t, e) {
    let r;
    for (; typeof (r = this.refs[e]) == "string"; ) e = r;
    return r || this.schemas[e] || AYe.call(this, t, e);
  }
  function AYe(t, e) {
    let r = this.opts.uriResolver.parse(e),
      n = (0, P4._getFullPath)(this.opts.uriResolver, r),
      o = (0, P4.getFullPath)(this.opts.uriResolver, t.baseId, void 0);
    if (Object.keys(t.schema).length > 0 && n === o) return qUt.call(this, r, t);
    let s = (0, P4.normalizeId)(n),
      a = this.refs[s] || this.schemas[s];
    if (typeof a == "string") {
      let u = AYe.call(this, t, a);
      return typeof u?.schema != "object" ? void 0 : qUt.call(this, r, u);
    }
    if (typeof a?.schema == "object") {
      if ((a.validate || HUt.call(this, a), s === (0, P4.normalizeId)(e))) {
        let { schema: u } = a,
          { schemaId: c } = this.opts,
          m = u[c];
        return (
          m && (o = (0, P4.resolveUrl)(this.opts.uriResolver, o, m)),
          new Xoe({ schema: u, schemaId: c, root: t, baseId: o })
        );
      }
      return qUt.call(this, r, a);
    }
  }
  hE.resolveSchema = AYe;
  var ahs = new Set(["properties", "patternProperties", "enum", "dependencies", "definitions"]);
  function qUt(t, { baseId: e, schema: r, root: n }) {
    var o;
    if (((o = t.fragment) === null || o === void 0 ? void 0 : o[0]) !== "/") return;
    for (let u of t.fragment.slice(1).split("/")) {
      if (typeof r == "boolean") return;
      let c = r[(0, vgn.unescapeFragment)(u)];
      if (c === void 0) return;
      r = c;
      let m = typeof r == "object" && r[this.opts.schemaId];
      !ahs.has(u) && m && (e = (0, P4.resolveUrl)(this.opts.uriResolver, e, m));
    }
    let s;
    if (typeof r != "boolean" && r.$ref && !(0, vgn.schemaHasRulesButRef)(r, this.RULES)) {
      let u = (0, P4.resolveUrl)(this.opts.uriResolver, e, r.$ref);
      s = AYe.call(this, n, u);
    }
    let { schemaId: a } = this.opts;
    if (((s = s || new Xoe({ schema: r, schemaId: a, root: n, baseId: e })), s.schema !== s.root.schema)) return s;
  }
});