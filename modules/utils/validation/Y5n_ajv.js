/**
 * @module Y5n
 * @category utils/validation
 * @label ajv
 * @position 894 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Y5n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Y5n = T((yg) => {
  "use strict";
  Object.defineProperty(yg, "__esModule", { value: !0 });
  yg.CodeGen = yg.Name = yg.nil = yg.stringify = yg.str = yg._ = yg.KeywordCxt = void 0;
  var j5s = F9e();
  Object.defineProperty(yg, "KeywordCxt", {
    enumerable: !0,
    get: function () {
      return j5s.KeywordCxt;
    },
  });
  var Rse = za();
  Object.defineProperty(yg, "_", {
    enumerable: !0,
    get: function () {
      return Rse._;
    },
  });
  Object.defineProperty(yg, "str", {
    enumerable: !0,
    get: function () {
      return Rse.str;
    },
  });
  Object.defineProperty(yg, "stringify", {
    enumerable: !0,
    get: function () {
      return Rse.stringify;
    },
  });
  Object.defineProperty(yg, "nil", {
    enumerable: !0,
    get: function () {
      return Rse.nil;
    },
  });
  Object.defineProperty(yg, "Name", {
    enumerable: !0,
    get: function () {
      return Rse.Name;
    },
  });
  Object.defineProperty(yg, "CodeGen", {
    enumerable: !0,
    get: function () {
      return Rse.CodeGen;
    },
  });
  var Q5s = yKe(),
    V5n = U9e(),
    G5s = tQt(),
    $9e = EKe(),
    q5s = za(),
    j9e = B9e(),
    vKe = P9e(),
    vQt = sc(),
    Q5n = U5n(),
    H5s = j5n(),
    W5n = (t, e) => new RegExp(t, e);
  W5n.code = "new RegExp";
  var V5s = ["removeAdditional", "useDefaults", "coerceTypes"],
    W5s = new Set([
      "validate",
      "serialize",
      "parse",
      "wrapper",
      "root",
      "schema",
      "keyword",
      "pattern",
      "formats",
      "validate$data",
      "func",
      "obj",
      "Error",
    ]),
    z5s = {
      errorDataPath: "",
      format: "`validateFormats: false` can be used instead.",
      nullable: '"nullable" keyword is supported by default.',
      jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
      extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
      missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.",
      processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`",
      sourceCode: "Use option `code: {source: true}`",
      strictDefaults: "It is default now, see option `strict`.",
      strictKeywords: "It is default now, see option `strict`.",
      uniqueItems: '"uniqueItems" keyword is always validated.',
      unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
      cache: "Map is used as cache, schema object as key.",
      serialize: "Map is used as cache, schema object as key.",
      ajvErrors: "It is default now.",
    },
    Y5s = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.',
    },
    G5n = 200;
  function K5s(t) {
    var e, r, n, o, s, a, u, c, m, d, f, p, h, g, b, A, y, E, v, C, x, k, R, P, D;
    let O = t.strict,
      N = (e = t.code) === null || e === void 0 ? void 0 : e.optimize,
      F = N === !0 || N === void 0 ? 1 : N || 0,
      B = (n = (r = t.code) === null || r === void 0 ? void 0 : r.regExp) !== null && n !== void 0 ? n : W5n,
      L = (o = t.uriResolver) !== null && o !== void 0 ? o : H5s.default;
    return {
      strictSchema: (a = (s = t.strictSchema) !== null && s !== void 0 ? s : O) !== null && a !== void 0 ? a : !0,
      strictNumbers: (c = (u = t.strictNumbers) !== null && u !== void 0 ? u : O) !== null && c !== void 0 ? c : !0,
      strictTypes: (d = (m = t.strictTypes) !== null && m !== void 0 ? m : O) !== null && d !== void 0 ? d : "log",
      strictTuples: (p = (f = t.strictTuples) !== null && f !== void 0 ? f : O) !== null && p !== void 0 ? p : "log",
      strictRequired: (g = (h = t.strictRequired) !== null && h !== void 0 ? h : O) !== null && g !== void 0 ? g : !1,
      code: t.code ? { ...t.code, optimize: F, regExp: B } : { optimize: F, regExp: B },
      loopRequired: (b = t.loopRequired) !== null && b !== void 0 ? b : G5n,
      loopEnum: (A = t.loopEnum) !== null && A !== void 0 ? A : G5n,
      meta: (y = t.meta) !== null && y !== void 0 ? y : !0,
      messages: (E = t.messages) !== null && E !== void 0 ? E : !0,
      inlineRefs: (v = t.inlineRefs) !== null && v !== void 0 ? v : !0,
      schemaId: (C = t.schemaId) !== null && C !== void 0 ? C : "$id",
      addUsedSchema: (x = t.addUsedSchema) !== null && x !== void 0 ? x : !0,
      validateSchema: (k = t.validateSchema) !== null && k !== void 0 ? k : !0,
      validateFormats: (R = t.validateFormats) !== null && R !== void 0 ? R : !0,
      unicodeRegExp: (P = t.unicodeRegExp) !== null && P !== void 0 ? P : !0,
      int32range: (D = t.int32range) !== null && D !== void 0 ? D : !0,
      uriResolver: L,
    };
  }
  var Q9e = class {
    constructor(e = {}) {
      ((this.schemas = {}),
        (this.refs = {}),
        (this.formats = {}),
        (this._compilations = new Set()),
        (this._loading = {}),
        (this._cache = new Map()),
        (e = this.opts = { ...e, ...K5s(e) }));
      let { es5: r, lines: n } = this.opts.code;
      ((this.scope = new q5s.ValueScope({ scope: {}, prefixes: W5s, es5: r, lines: n })),
        (this.logger = r8s(e.logger)));
      let o = e.validateFormats;
      ((e.validateFormats = !1),
        (this.RULES = (0, G5s.getRules)()),
        q5n.call(this, z5s, e, "NOT SUPPORTED"),
        q5n.call(this, Y5s, e, "DEPRECATED", "warn"),
        (this._metaOpts = e8s.call(this)),
        e.formats && X5s.call(this),
        this._addVocabularies(),
        this._addDefaultMetaSchema(),
        e.keywords && Z5s.call(this, e.keywords),
        typeof e.meta == "object" && this.addMetaSchema(e.meta),
        J5s.call(this),
        (e.validateFormats = o));
    }
    _addVocabularies() {
      this.addKeyword("$async");
    }
    _addDefaultMetaSchema() {
      let { $data: e, meta: r, schemaId: n } = this.opts,
        o = Q5n;
      (n === "id" && ((o = { ...Q5n }), (o.id = o.$id), delete o.$id), r && e && this.addMetaSchema(o, o[n], !1));
    }
    defaultMeta() {
      let { meta: e, schemaId: r } = this.opts;
      return (this.opts.defaultMeta = typeof e == "object" ? e[r] || e : void 0);
    }
    validate(e, r) {
      let n;
      if (typeof e == "string") {
        if (((n = this.getSchema(e)), !n)) throw new Error(`no schema with key or ref "${e}"`);
      } else n = this.compile(e);
      let o = n(r);
      return ("$async" in n || (this.errors = n.errors), o);
    }
    compile(e, r) {
      let n = this._addSchema(e, r);
      return n.validate || this._compileSchemaEnv(n);
    }
    compileAsync(e, r) {
      if (typeof this.opts.loadSchema != "function") throw new Error("options.loadSchema should be a function");
      let { loadSchema: n } = this.opts;
      return o.call(this, e, r);
      async function o(d, f) {
        await s.call(this, d.$schema);
        let p = this._addSchema(d, f);
        return p.validate || a.call(this, p);
      }
      async function s(d) {
        d && !this.getSchema(d) && (await o.call(this, { $ref: d }, !0));
      }
      async function a(d) {
        try {
          return this._compileSchemaEnv(d);
        } catch (f) {
          if (!(f instanceof V5n.default)) throw f;
          return (u.call(this, f), await c.call(this, f.missingSchema), a.call(this, d));
        }
      }
      function u({ missingSchema: d, missingRef: f }) {
        if (this.refs[d]) throw new Error(`AnySchema ${d} is loaded but ${f} cannot be resolved`);
      }
      async function c(d) {
        let f = await m.call(this, d);
        (this.refs[d] || (await s.call(this, f.$schema)), this.refs[d] || this.addSchema(f, d, r));
      }
      async function m(d) {
        let f = this._loading[d];
        if (f) return f;
        try {
          return await (this._loading[d] = n(d));
        } finally {
          delete this._loading[d];
        }
      }
    }
    addSchema(e, r, n, o = this.opts.validateSchema) {
      if (Array.isArray(e)) {
        for (let a of e) this.addSchema(a, void 0, n, o);
        return this;
      }
      let s;
      if (typeof e == "object") {
        let { schemaId: a } = this.opts;
        if (((s = e[a]), s !== void 0 && typeof s != "string")) throw new Error(`schema ${a} must be string`);
      }
      return (
        (r = (0, j9e.normalizeId)(r || s)),
        this._checkUnique(r),
        (this.schemas[r] = this._addSchema(e, n, r, o, !0)),
        this
      );
    }
    addMetaSchema(e, r, n = this.opts.validateSchema) {
      return (this.addSchema(e, r, !0, n), this);
    }
    validateSchema(e, r) {
      if (typeof e == "boolean") return !0;
      let n;
      if (((n = e.$schema), n !== void 0 && typeof n != "string")) throw new Error("$schema must be a string");
      if (((n = n || this.opts.defaultMeta || this.defaultMeta()), !n))
        return (this.logger.warn("meta-schema not available"), (this.errors = null), !0);
      let o = this.validate(n, e);
      if (!o && r) {
        let s = "schema is invalid: " + this.errorsText();
        if (this.opts.validateSchema === "log") this.logger.error(s);
        else throw new Error(s);
      }
      return o;
    }
    getSchema(e) {
      let r;
      for (; typeof (r = H5n.call(this, e)) == "string"; ) e = r;
      if (r === void 0) {
        let { schemaId: n } = this.opts,
          o = new $9e.SchemaEnv({ schema: {}, schemaId: n });
        if (((r = $9e.resolveSchema.call(this, o, e)), !r)) return;
        this.refs[e] = r;
      }
      return r.validate || this._compileSchemaEnv(r);
    }
    removeSchema(e) {
      if (e instanceof RegExp)
        return (this._removeAllSchemas(this.schemas, e), this._removeAllSchemas(this.refs, e), this);
      switch (typeof e) {
        case "undefined":
          return (this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this);
        case "string": {
          let r = H5n.call(this, e);
          return (
            typeof r == "object" && this._cache.delete(r.schema),
            delete this.schemas[e],
            delete this.refs[e],
            this
          );
        }
        case "object": {
          let r = e;
          this._cache.delete(r);
          let n = e[this.opts.schemaId];
          return (n && ((n = (0, j9e.normalizeId)(n)), delete this.schemas[n], delete this.refs[n]), this);
        }
        default:
          throw new Error("ajv.removeSchema: invalid parameter");
      }
    }
    addVocabulary(e) {
      for (let r of e) this.addKeyword(r);
      return this;
    }
    addKeyword(e, r) {
      let n;
      if (typeof e == "string")
        ((n = e),
          typeof r == "object" &&
            (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), (r.keyword = n)));
      else if (typeof e == "object" && r === void 0) {
        if (((r = e), (n = r.keyword), Array.isArray(n) && !n.length))
          throw new Error("addKeywords: keyword must be string or non-empty array");
      } else throw new Error("invalid addKeywords parameters");
      if ((i8s.call(this, n, r), !r)) return ((0, vQt.eachItem)(n, (s) => EQt.call(this, s)), this);
      s8s.call(this, r);
      let o = { ...r, type: (0, vKe.getJSONTypes)(r.type), schemaType: (0, vKe.getJSONTypes)(r.schemaType) };
      return (
        (0, vQt.eachItem)(
          n,
          o.type.length === 0 ? (s) => EQt.call(this, s, o) : (s) => o.type.forEach((a) => EQt.call(this, s, o, a)),
        ),
        this
      );
    }
    getKeyword(e) {
      let r = this.RULES.all[e];
      return typeof r == "object" ? r.definition : !!r;
    }
    removeKeyword(e) {
      let { RULES: r } = this;
      (delete r.keywords[e], delete r.all[e]);
      for (let n of r.rules) {
        let o = n.rules.findIndex((s) => s.keyword === e);
        o >= 0 && n.rules.splice(o, 1);
      }
      return this;
    }
    addFormat(e, r) {
      return (typeof r == "string" && (r = new RegExp(r)), (this.formats[e] = r), this);
    }
    errorsText(e = this.errors, { separator: r = ", ", dataVar: n = "data" } = {}) {
      return !e || e.length === 0
        ? "No errors"
        : e.map((o) => `${n}${o.instancePath} ${o.message}`).reduce((o, s) => o + r + s);
    }
    $dataMetaSchema(e, r) {
      let n = this.RULES.all;
      e = JSON.parse(JSON.stringify(e));
      for (let o of r) {
        let s = o.split("/").slice(1),
          a = e;
        for (let u of s) a = a[u];
        for (let u in n) {
          let c = n[u];
          if (typeof c != "object") continue;
          let { $data: m } = c.definition,
            d = a[u];
          m && d && (a[u] = z5n(d));
        }
      }
      return e;
    }
    _removeAllSchemas(e, r) {
      for (let n in e) {
        let o = e[n];
        (!r || r.test(n)) &&
          (typeof o == "string" ? delete e[n] : o && !o.meta && (this._cache.delete(o.schema), delete e[n]));
      }
    }
    _addSchema(e, r, n, o = this.opts.validateSchema, s = this.opts.addUsedSchema) {
      let a,
        { schemaId: u } = this.opts;
      if (typeof e == "object") a = e[u];
      else {
        if (this.opts.jtd) throw new Error("schema must be object");
        if (typeof e != "boolean") throw new Error("schema must be object or boolean");
      }
      let c = this._cache.get(e);
      if (c !== void 0) return c;
      n = (0, j9e.normalizeId)(a || n);
      let m = j9e.getSchemaRefs.call(this, e, n);
      return (
        (c = new $9e.SchemaEnv({ schema: e, schemaId: u, meta: r, baseId: n, localRefs: m })),
        this._cache.set(c.schema, c),
        s && !n.startsWith("#") && (n && this._checkUnique(n), (this.refs[n] = c)),
        o && this.validateSchema(e, !0),
        c
      );
    }
    _checkUnique(e) {
      if (this.schemas[e] || this.refs[e]) throw new Error(`schema with key or id "${e}" already exists`);
    }
    _compileSchemaEnv(e) {
      if ((e.meta ? this._compileMetaSchema(e) : $9e.compileSchema.call(this, e), !e.validate))
        throw new Error("ajv implementation error");
      return e.validate;
    }
    _compileMetaSchema(e) {
      let r = this.opts;
      this.opts = this._metaOpts;
      try {
        $9e.compileSchema.call(this, e);
      } finally {
        this.opts = r;
      }
    }
  };
  Q9e.ValidationError = Q5s.default;
  Q9e.MissingRefError = V5n.default;
  yg.default = Q9e;
  function q5n(t, e, r, n = "error") {
    for (let o in t) {
      let s = o;
      s in e && this.logger[n](`${r}: option ${o}. ${t[s]}`);
    }
  }
  function H5n(t) {
    return ((t = (0, j9e.normalizeId)(t)), this.schemas[t] || this.refs[t]);
  }
  function J5s() {
    let t = this.opts.schemas;
    if (t)
      if (Array.isArray(t)) this.addSchema(t);
      else for (let e in t) this.addSchema(t[e], e);
  }
  function X5s() {
    for (let t in this.opts.formats) {
      let e = this.opts.formats[t];
      e && this.addFormat(t, e);
    }
  }
  function Z5s(t) {
    if (Array.isArray(t)) {
      this.addVocabulary(t);
      return;
    }
    this.logger.warn("keywords option as map is deprecated, pass array");
    for (let e in t) {
      let r = t[e];
      (r.keyword || (r.keyword = e), this.addKeyword(r));
    }
  }
  function e8s() {
    let t = { ...this.opts };
    for (let e of V5s) delete t[e];
    return t;
  }
  var t8s = { log() {}, warn() {}, error() {} };
  function r8s(t) {
    if (t === !1) return t8s;
    if (t === void 0) return console;
    if (t.log && t.warn && t.error) return t;
    throw new Error("logger must implement log, warn and error methods");
  }
  var n8s = /^[a-z_$][a-z0-9_$:-]*$/i;
  function i8s(t, e) {
    let { RULES: r } = this;
    if (
      ((0, vQt.eachItem)(t, (n) => {
        if (r.keywords[n]) throw new Error(`Keyword ${n} is already defined`);
        if (!n8s.test(n)) throw new Error(`Keyword ${n} has invalid name`);
      }),
      !!e && e.$data && !("code" in e || "validate" in e))
    )
      throw new Error('$data keyword must have "code" or "validate" function');
  }
  function EQt(t, e, r) {
    var n;
    let o = e?.post;
    if (r && o) throw new Error('keyword with "post" flag cannot have "type"');
    let { RULES: s } = this,
      a = o ? s.post : s.rules.find(({ type: c }) => c === r);
    if ((a || ((a = { type: r, rules: [] }), s.rules.push(a)), (s.keywords[t] = !0), !e)) return;
    let u = {
      keyword: t,
      definition: { ...e, type: (0, vKe.getJSONTypes)(e.type), schemaType: (0, vKe.getJSONTypes)(e.schemaType) },
    };
    (e.before ? o8s.call(this, a, u, e.before) : a.rules.push(u),
      (s.all[t] = u),
      (n = e.implements) === null || n === void 0 || n.forEach((c) => this.addKeyword(c)));
  }
  function o8s(t, e, r) {
    let n = t.rules.findIndex((o) => o.keyword === r);
    n >= 0 ? t.rules.splice(n, 0, e) : (t.rules.push(e), this.logger.warn(`rule ${r} is not defined`));
  }
  function s8s(t) {
    let { metaSchema: e } = t;
    e !== void 0 && (t.$data && this.opts.$data && (e = z5n(e)), (t.validateSchema = this.compile(e, !0)));
  }
  var a8s = { $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#" };
  function z5n(t) {
    return { anyOf: [t, a8s] };
  }
});