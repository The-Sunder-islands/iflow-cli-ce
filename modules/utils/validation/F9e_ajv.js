/**
 * @module F9e
 * @category utils/validation
 * @label ajv
 * @position 888 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (F9e) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var F9e = T((FM) => {
  "use strict";
  Object.defineProperty(FM, "__esModule", { value: !0 });
  FM.getData = FM.KeywordCxt = FM.validateFunctionCode = void 0;
  var T5n = n5n(),
    C5n = P9e(),
    mQt = rQt(),
    bKe = P9e(),
    l5s = l5n(),
    M9e = h5n(),
    lQt = b5n(),
    eo = za(),
    hs = wk(),
    m5s = B9e(),
    xk = sc(),
    L9e = N9e();
  function d5s(t) {
    if (R5n(t) && (k5n(t), I5n(t))) {
      h5s(t);
      return;
    }
    D5n(t, () => (0, T5n.topBoolOrEmptySchema)(t));
  }
  FM.validateFunctionCode = d5s;
  function D5n({ gen: t, validateName: e, schema: r, schemaEnv: n, opts: o }, s) {
    o.code.es5
      ? t.func(e, (0, eo._)`${hs.default.data}, ${hs.default.valCxt}`, n.$async, () => {
          (t.code((0, eo._)`"use strict"; ${S5n(r, o)}`), p5s(t, o), t.code(s));
        })
      : t.func(e, (0, eo._)`${hs.default.data}, ${f5s(o)}`, n.$async, () => t.code(S5n(r, o)).code(s));
  }
  function f5s(t) {
    return (0,
    eo._)`{${hs.default.instancePath}="", ${hs.default.parentData}, ${hs.default.parentDataProperty}, ${hs.default.rootData}=${hs.default.data}${t.dynamicRef ? (0, eo._)`, ${hs.default.dynamicAnchors}={}` : eo.nil}}={}`;
  }
  function p5s(t, e) {
    t.if(
      hs.default.valCxt,
      () => {
        (t.var(hs.default.instancePath, (0, eo._)`${hs.default.valCxt}.${hs.default.instancePath}`),
          t.var(hs.default.parentData, (0, eo._)`${hs.default.valCxt}.${hs.default.parentData}`),
          t.var(hs.default.parentDataProperty, (0, eo._)`${hs.default.valCxt}.${hs.default.parentDataProperty}`),
          t.var(hs.default.rootData, (0, eo._)`${hs.default.valCxt}.${hs.default.rootData}`),
          e.dynamicRef &&
            t.var(hs.default.dynamicAnchors, (0, eo._)`${hs.default.valCxt}.${hs.default.dynamicAnchors}`));
      },
      () => {
        (t.var(hs.default.instancePath, (0, eo._)`""`),
          t.var(hs.default.parentData, (0, eo._)`undefined`),
          t.var(hs.default.parentDataProperty, (0, eo._)`undefined`),
          t.var(hs.default.rootData, hs.default.data),
          e.dynamicRef && t.var(hs.default.dynamicAnchors, (0, eo._)`{}`));
      },
    );
  }
  function h5s(t) {
    let { schema: e, opts: r, gen: n } = t;
    D5n(t, () => {
      (r.$comment && e.$comment && N5n(t),
        _5s(t),
        n.let(hs.default.vErrors, null),
        n.let(hs.default.errors, 0),
        r.unevaluated && g5s(t),
        O5n(t),
        C5s(t));
    });
  }
  function g5s(t) {
    let { gen: e, validateName: r } = t;
    ((t.evaluated = e.const("evaluated", (0, eo._)`${r}.evaluated`)),
      e.if((0, eo._)`${t.evaluated}.dynamicProps`, () =>
        e.assign((0, eo._)`${t.evaluated}.props`, (0, eo._)`undefined`),
      ),
      e.if((0, eo._)`${t.evaluated}.dynamicItems`, () =>
        e.assign((0, eo._)`${t.evaluated}.items`, (0, eo._)`undefined`),
      ));
  }
  function S5n(t, e) {
    let r = typeof t == "object" && t[e.schemaId];
    return r && (e.code.source || e.code.process) ? (0, eo._)`/*# sourceURL=${r} */` : eo.nil;
  }
  function b5s(t, e) {
    if (R5n(t) && (k5n(t), I5n(t))) {
      A5s(t, e);
      return;
    }
    (0, T5n.boolOrEmptySchema)(t, e);
  }
  function I5n({ schema: t, self: e }) {
    if (typeof t == "boolean") return !t;
    for (let r in t) if (e.RULES.all[r]) return !0;
    return !1;
  }
  function R5n(t) {
    return typeof t.schema != "boolean";
  }
  function A5s(t, e) {
    let { schema: r, gen: n, opts: o } = t;
    (o.$comment && r.$comment && N5n(t), E5s(t), v5s(t));
    let s = n.const("_errs", hs.default.errors);
    (O5n(t, s), n.var(e, (0, eo._)`${s} === ${hs.default.errors}`));
  }
  function k5n(t) {
    ((0, xk.checkUnknownRules)(t), y5s(t));
  }
  function O5n(t, e) {
    if (t.opts.jtd) return w5n(t, [], !1, e);
    let r = (0, C5n.getSchemaTypes)(t.schema),
      n = (0, C5n.coerceAndCheckDataType)(t, r);
    w5n(t, r, !n, e);
  }
  function y5s(t) {
    let { schema: e, errSchemaPath: r, opts: n, self: o } = t;
    e.$ref &&
      n.ignoreKeywordsWithRef &&
      (0, xk.schemaHasRulesButRef)(e, o.RULES) &&
      o.logger.warn(`$ref: keywords ignored in schema at path "${r}"`);
  }
  function _5s(t) {
    let { schema: e, opts: r } = t;
    e.default !== void 0 &&
      r.useDefaults &&
      r.strictSchema &&
      (0, xk.checkStrictMode)(t, "default is ignored in the schema root");
  }
  function E5s(t) {
    let e = t.schema[t.opts.schemaId];
    e && (t.baseId = (0, m5s.resolveUrl)(t.opts.uriResolver, t.baseId, e));
  }
  function v5s(t) {
    if (t.schema.$async && !t.schemaEnv.$async) throw new Error("async schema in sync schema");
  }
  function N5n({ gen: t, schemaEnv: e, schema: r, errSchemaPath: n, opts: o }) {
    let s = r.$comment;
    if (o.$comment === !0) t.code((0, eo._)`${hs.default.self}.logger.log(${s})`);
    else if (typeof o.$comment == "function") {
      let a = (0, eo.str)`${n}/$comment`,
        u = t.scopeValue("root", { ref: e.root });
      t.code((0, eo._)`${hs.default.self}.opts.$comment(${s}, ${a}, ${u}.schema)`);
    }
  }
  function C5s(t) {
    let { gen: e, schemaEnv: r, validateName: n, ValidationError: o, opts: s } = t;
    r.$async
      ? e.if(
          (0, eo._)`${hs.default.errors} === 0`,
          () => e.return(hs.default.data),
          () => e.throw((0, eo._)`new ${o}(${hs.default.vErrors})`),
        )
      : (e.assign((0, eo._)`${n}.errors`, hs.default.vErrors),
        s.unevaluated && S5s(t),
        e.return((0, eo._)`${hs.default.errors} === 0`));
  }
  function S5s({ gen: t, evaluated: e, props: r, items: n }) {
    (r instanceof eo.Name && t.assign((0, eo._)`${e}.props`, r),
      n instanceof eo.Name && t.assign((0, eo._)`${e}.items`, n));
  }
  function w5n(t, e, r, n) {
    let { gen: o, schema: s, data: a, allErrors: u, opts: c, self: m } = t,
      { RULES: d } = m;
    if (s.$ref && (c.ignoreKeywordsWithRef || !(0, xk.schemaHasRulesButRef)(s, d))) {
      o.block(() => B5n(t, "$ref", d.all.$ref.definition));
      return;
    }
    (c.jtd || w5s(t, e),
      o.block(() => {
        for (let p of d.rules) f(p);
        f(d.post);
      }));
    function f(p) {
      (0, mQt.shouldUseGroup)(s, p) &&
        (p.type
          ? (o.if((0, bKe.checkDataType)(p.type, a, c.strictNumbers)),
            x5n(t, p),
            e.length === 1 && e[0] === p.type && r && (o.else(), (0, bKe.reportTypeError)(t)),
            o.endIf())
          : x5n(t, p),
        u || o.if((0, eo._)`${hs.default.errors} === ${n || 0}`));
    }
  }
  function x5n(t, e) {
    let {
      gen: r,
      schema: n,
      opts: { useDefaults: o },
    } = t;
    (o && (0, l5s.assignDefaults)(t, e.type),
      r.block(() => {
        for (let s of e.rules) (0, mQt.shouldUseRule)(n, s) && B5n(t, s.keyword, s.definition, e.type);
      }));
  }
  function w5s(t, e) {
    t.schemaEnv.meta || !t.opts.strictTypes || (x5s(t, e), t.opts.allowUnionTypes || T5s(t, e), D5s(t, t.dataTypes));
  }
  function x5s(t, e) {
    if (e.length) {
      if (!t.dataTypes.length) {
        t.dataTypes = e;
        return;
      }
      (e.forEach((r) => {
        P5n(t.dataTypes, r) || dQt(t, `type "${r}" not allowed by context "${t.dataTypes.join(",")}"`);
      }),
        R5s(t, e));
    }
  }
  function T5s(t, e) {
    e.length > 1 &&
      !(e.length === 2 && e.includes("null")) &&
      dQt(t, "use allowUnionTypes to allow union type keyword");
  }
  function D5s(t, e) {
    let r = t.self.RULES.all;
    for (let n in r) {
      let o = r[n];
      if (typeof o == "object" && (0, mQt.shouldUseRule)(t.schema, o)) {
        let { type: s } = o.definition;
        s.length && !s.some((a) => I5s(e, a)) && dQt(t, `missing type "${s.join(",")}" for keyword "${n}"`);
      }
    }
  }
  function I5s(t, e) {
    return t.includes(e) || (e === "number" && t.includes("integer"));
  }
  function P5n(t, e) {
    return t.includes(e) || (e === "integer" && t.includes("number"));
  }
  function R5s(t, e) {
    let r = [];
    for (let n of t.dataTypes) P5n(e, n) ? r.push(n) : e.includes("integer") && n === "number" && r.push("integer");
    t.dataTypes = r;
  }
  function dQt(t, e) {
    let r = t.schemaEnv.baseId + t.errSchemaPath;
    ((e += ` at "${r}" (strictTypes)`), (0, xk.checkStrictMode)(t, e, t.opts.strictTypes));
  }
  var AKe = class {
    constructor(e, r, n) {
      if (
        ((0, M9e.validateKeywordUsage)(e, r, n),
        (this.gen = e.gen),
        (this.allErrors = e.allErrors),
        (this.keyword = n),
        (this.data = e.data),
        (this.schema = e.schema[n]),
        (this.$data = r.$data && e.opts.$data && this.schema && this.schema.$data),
        (this.schemaValue = (0, xk.schemaRefOrVal)(e, this.schema, n, this.$data)),
        (this.schemaType = r.schemaType),
        (this.parentSchema = e.schema),
        (this.params = {}),
        (this.it = e),
        (this.def = r),
        this.$data)
      )
        this.schemaCode = e.gen.const("vSchema", L5n(this.$data, e));
      else if (
        ((this.schemaCode = this.schemaValue), !(0, M9e.validSchemaType)(this.schema, r.schemaType, r.allowUndefined))
      )
        throw new Error(`${n} value must be ${JSON.stringify(r.schemaType)}`);
      ("code" in r ? r.trackErrors : r.errors !== !1) && (this.errsCount = e.gen.const("_errs", hs.default.errors));
    }
    result(e, r, n) {
      this.failResult((0, eo.not)(e), r, n);
    }
    failResult(e, r, n) {
      (this.gen.if(e),
        n ? n() : this.error(),
        r
          ? (this.gen.else(), r(), this.allErrors && this.gen.endIf())
          : this.allErrors
            ? this.gen.endIf()
            : this.gen.else());
    }
    pass(e, r) {
      this.failResult((0, eo.not)(e), void 0, r);
    }
    fail(e) {
      if (e === void 0) {
        (this.error(), this.allErrors || this.gen.if(!1));
        return;
      }
      (this.gen.if(e), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else());
    }
    fail$data(e) {
      if (!this.$data) return this.fail(e);
      let { schemaCode: r } = this;
      this.fail((0, eo._)`${r} !== undefined && (${(0, eo.or)(this.invalid$data(), e)})`);
    }
    error(e, r, n) {
      if (r) {
        (this.setParams(r), this._error(e, n), this.setParams({}));
        return;
      }
      this._error(e, n);
    }
    _error(e, r) {
      (e ? L9e.reportExtraError : L9e.reportError)(this, this.def.error, r);
    }
    $dataError() {
      (0, L9e.reportError)(this, this.def.$dataError || L9e.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0) throw new Error('add "trackErrors" to keyword definition');
      (0, L9e.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(e) {
      this.allErrors || this.gen.if(e);
    }
    setParams(e, r) {
      r ? Object.assign(this.params, e) : (this.params = e);
    }
    block$data(e, r, n = eo.nil) {
      this.gen.block(() => {
        (this.check$data(e, n), r());
      });
    }
    check$data(e = eo.nil, r = eo.nil) {
      if (!this.$data) return;
      let { gen: n, schemaCode: o, schemaType: s, def: a } = this;
      (n.if((0, eo.or)((0, eo._)`${o} === undefined`, r)),
        e !== eo.nil && n.assign(e, !0),
        (s.length || a.validateSchema) &&
          (n.elseIf(this.invalid$data()), this.$dataError(), e !== eo.nil && n.assign(e, !1)),
        n.else());
    }
    invalid$data() {
      let { gen: e, schemaCode: r, schemaType: n, def: o, it: s } = this;
      return (0, eo.or)(a(), u());
      function a() {
        if (n.length) {
          if (!(r instanceof eo.Name)) throw new Error("ajv implementation error");
          let c = Array.isArray(n) ? n : [n];
          return (0, eo._)`${(0, bKe.checkDataTypes)(c, r, s.opts.strictNumbers, bKe.DataType.Wrong)}`;
        }
        return eo.nil;
      }
      function u() {
        if (o.validateSchema) {
          let c = e.scopeValue("validate$data", { ref: o.validateSchema });
          return (0, eo._)`!${c}(${r})`;
        }
        return eo.nil;
      }
    }
    subschema(e, r) {
      let n = (0, lQt.getSubschema)(this.it, e);
      ((0, lQt.extendSubschemaData)(n, this.it, e), (0, lQt.extendSubschemaMode)(n, e));
      let o = { ...this.it, ...n, items: void 0, props: void 0 };
      return (b5s(o, r), o);
    }
    mergeEvaluated(e, r) {
      let { it: n, gen: o } = this;
      n.opts.unevaluated &&
        (n.props !== !0 && e.props !== void 0 && (n.props = xk.mergeEvaluated.props(o, e.props, n.props, r)),
        n.items !== !0 && e.items !== void 0 && (n.items = xk.mergeEvaluated.items(o, e.items, n.items, r)));
    }
    mergeValidEvaluated(e, r) {
      let { it: n, gen: o } = this;
      if (n.opts.unevaluated && (n.props !== !0 || n.items !== !0))
        return (o.if(r, () => this.mergeEvaluated(e, eo.Name)), !0);
    }
  };
  FM.KeywordCxt = AKe;
  function B5n(t, e, r, n) {
    let o = new AKe(t, r, e);
    "code" in r
      ? r.code(o, n)
      : o.$data && r.validate
        ? (0, M9e.funcKeywordCode)(o, r)
        : "macro" in r
          ? (0, M9e.macroKeywordCode)(o, r)
          : (r.compile || r.validate) && (0, M9e.funcKeywordCode)(o, r);
  }
  var k5s = /^\/(?:[^~]|~0|~1)*$/,
    O5s = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function L5n(t, { dataLevel: e, dataNames: r, dataPathArr: n }) {
    let o, s;
    if (t === "") return hs.default.rootData;
    if (t[0] === "/") {
      if (!k5s.test(t)) throw new Error(`Invalid JSON-pointer: ${t}`);
      ((o = t), (s = hs.default.rootData));
    } else {
      let m = O5s.exec(t);
      if (!m) throw new Error(`Invalid JSON-pointer: ${t}`);
      let d = +m[1];
      if (((o = m[2]), o === "#")) {
        if (d >= e) throw new Error(c("property/index", d));
        return n[e - d];
      }
      if (d > e) throw new Error(c("data", d));
      if (((s = r[e - d]), !o)) return s;
    }
    let a = s,
      u = o.split("/");
    for (let m of u)
      m && ((s = (0, eo._)`${s}${(0, eo.getProperty)((0, xk.unescapeJsonPointer)(m))}`), (a = (0, eo._)`${a} && ${s}`));
    return a;
    function c(m, d) {
      return `Cannot access ${m} ${d} levels up, current level is ${e}`;
    }
  }
  FM.getData = L5n;
});