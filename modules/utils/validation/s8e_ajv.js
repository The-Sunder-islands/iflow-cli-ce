/**
 * @module s8e
 * @category utils/validation
 * @label ajv
 * @position 744 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (s8e) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var s8e = T((bM) => {
  "use strict";
  Object.defineProperty(bM, "__esModule", { value: !0 });
  bM.getData = bM.KeywordCxt = bM.validateFunctionCode = void 0;
  var Npn = upn(),
    Ipn = r8e(),
    YMt = $Mt(),
    Nze = r8e(),
    zls = hpn(),
    o8e = _pn(),
    zMt = vpn(),
    Xi = Ha(),
    ds = dk(),
    Yls = n8e(),
    fk = tc(),
    i8e = t8e();
  function Kls(t) {
    if (Lpn(t) && (Mpn(t), Bpn(t))) {
      Zls(t);
      return;
    }
    Ppn(t, () => (0, Npn.topBoolOrEmptySchema)(t));
  }
  bM.validateFunctionCode = Kls;
  function Ppn({ gen: t, validateName: e, schema: r, schemaEnv: n, opts: o }, s) {
    o.code.es5
      ? t.func(e, (0, Xi._)`${ds.default.data}, ${ds.default.valCxt}`, n.$async, () => {
          (t.code((0, Xi._)`"use strict"; ${Rpn(r, o)}`), Xls(t, o), t.code(s));
        })
      : t.func(e, (0, Xi._)`${ds.default.data}, ${Jls(o)}`, n.$async, () => t.code(Rpn(r, o)).code(s));
  }
  function Jls(t) {
    return (0,
    Xi._)`{${ds.default.instancePath}="", ${ds.default.parentData}, ${ds.default.parentDataProperty}, ${ds.default.rootData}=${ds.default.data}${t.dynamicRef ? (0, Xi._)`, ${ds.default.dynamicAnchors}={}` : Xi.nil}}={}`;
  }
  function Xls(t, e) {
    t.if(
      ds.default.valCxt,
      () => {
        (t.var(ds.default.instancePath, (0, Xi._)`${ds.default.valCxt}.${ds.default.instancePath}`),
          t.var(ds.default.parentData, (0, Xi._)`${ds.default.valCxt}.${ds.default.parentData}`),
          t.var(ds.default.parentDataProperty, (0, Xi._)`${ds.default.valCxt}.${ds.default.parentDataProperty}`),
          t.var(ds.default.rootData, (0, Xi._)`${ds.default.valCxt}.${ds.default.rootData}`),
          e.dynamicRef &&
            t.var(ds.default.dynamicAnchors, (0, Xi._)`${ds.default.valCxt}.${ds.default.dynamicAnchors}`));
      },
      () => {
        (t.var(ds.default.instancePath, (0, Xi._)`""`),
          t.var(ds.default.parentData, (0, Xi._)`undefined`),
          t.var(ds.default.parentDataProperty, (0, Xi._)`undefined`),
          t.var(ds.default.rootData, ds.default.data),
          e.dynamicRef && t.var(ds.default.dynamicAnchors, (0, Xi._)`{}`));
      },
    );
  }
  function Zls(t) {
    let { schema: e, opts: r, gen: n } = t;
    Ppn(t, () => {
      (r.$comment && e.$comment && Upn(t),
        i0s(t),
        n.let(ds.default.vErrors, null),
        n.let(ds.default.errors, 0),
        r.unevaluated && e0s(t),
        Fpn(t),
        a0s(t));
    });
  }
  function e0s(t) {
    let { gen: e, validateName: r } = t;
    ((t.evaluated = e.const("evaluated", (0, Xi._)`${r}.evaluated`)),
      e.if((0, Xi._)`${t.evaluated}.dynamicProps`, () =>
        e.assign((0, Xi._)`${t.evaluated}.props`, (0, Xi._)`undefined`),
      ),
      e.if((0, Xi._)`${t.evaluated}.dynamicItems`, () =>
        e.assign((0, Xi._)`${t.evaluated}.items`, (0, Xi._)`undefined`),
      ));
  }
  function Rpn(t, e) {
    let r = typeof t == "object" && t[e.schemaId];
    return r && (e.code.source || e.code.process) ? (0, Xi._)`/*# sourceURL=${r} */` : Xi.nil;
  }
  function t0s(t, e) {
    if (Lpn(t) && (Mpn(t), Bpn(t))) {
      r0s(t, e);
      return;
    }
    (0, Npn.boolOrEmptySchema)(t, e);
  }
  function Bpn({ schema: t, self: e }) {
    if (typeof t == "boolean") return !t;
    for (let r in t) if (e.RULES.all[r]) return !0;
    return !1;
  }
  function Lpn(t) {
    return typeof t.schema != "boolean";
  }
  function r0s(t, e) {
    let { schema: r, gen: n, opts: o } = t;
    (o.$comment && r.$comment && Upn(t), o0s(t), s0s(t));
    let s = n.const("_errs", ds.default.errors);
    (Fpn(t, s), n.var(e, (0, Xi._)`${s} === ${ds.default.errors}`));
  }
  function Mpn(t) {
    ((0, fk.checkUnknownRules)(t), n0s(t));
  }
  function Fpn(t, e) {
    if (t.opts.jtd) return kpn(t, [], !1, e);
    let r = (0, Ipn.getSchemaTypes)(t.schema),
      n = (0, Ipn.coerceAndCheckDataType)(t, r);
    kpn(t, r, !n, e);
  }
  function n0s(t) {
    let { schema: e, errSchemaPath: r, opts: n, self: o } = t;
    e.$ref &&
      n.ignoreKeywordsWithRef &&
      (0, fk.schemaHasRulesButRef)(e, o.RULES) &&
      o.logger.warn(`$ref: keywords ignored in schema at path "${r}"`);
  }
  function i0s(t) {
    let { schema: e, opts: r } = t;
    e.default !== void 0 &&
      r.useDefaults &&
      r.strictSchema &&
      (0, fk.checkStrictMode)(t, "default is ignored in the schema root");
  }
  function o0s(t) {
    let e = t.schema[t.opts.schemaId];
    e && (t.baseId = (0, Yls.resolveUrl)(t.opts.uriResolver, t.baseId, e));
  }
  function s0s(t) {
    if (t.schema.$async && !t.schemaEnv.$async) throw new Error("async schema in sync schema");
  }
  function Upn({ gen: t, schemaEnv: e, schema: r, errSchemaPath: n, opts: o }) {
    let s = r.$comment;
    if (o.$comment === !0) t.code((0, Xi._)`${ds.default.self}.logger.log(${s})`);
    else if (typeof o.$comment == "function") {
      let a = (0, Xi.str)`${n}/$comment`,
        u = t.scopeValue("root", { ref: e.root });
      t.code((0, Xi._)`${ds.default.self}.opts.$comment(${s}, ${a}, ${u}.schema)`);
    }
  }
  function a0s(t) {
    let { gen: e, schemaEnv: r, validateName: n, ValidationError: o, opts: s } = t;
    r.$async
      ? e.if(
          (0, Xi._)`${ds.default.errors} === 0`,
          () => e.return(ds.default.data),
          () => e.throw((0, Xi._)`new ${o}(${ds.default.vErrors})`),
        )
      : (e.assign((0, Xi._)`${n}.errors`, ds.default.vErrors),
        s.unevaluated && u0s(t),
        e.return((0, Xi._)`${ds.default.errors} === 0`));
  }
  function u0s({ gen: t, evaluated: e, props: r, items: n }) {
    (r instanceof Xi.Name && t.assign((0, Xi._)`${e}.props`, r),
      n instanceof Xi.Name && t.assign((0, Xi._)`${e}.items`, n));
  }
  function kpn(t, e, r, n) {
    let { gen: o, schema: s, data: a, allErrors: u, opts: c, self: m } = t,
      { RULES: d } = m;
    if (s.$ref && (c.ignoreKeywordsWithRef || !(0, fk.schemaHasRulesButRef)(s, d))) {
      o.block(() => jpn(t, "$ref", d.all.$ref.definition));
      return;
    }
    (c.jtd || c0s(t, e),
      o.block(() => {
        for (let p of d.rules) f(p);
        f(d.post);
      }));
    function f(p) {
      (0, YMt.shouldUseGroup)(s, p) &&
        (p.type
          ? (o.if((0, Nze.checkDataType)(p.type, a, c.strictNumbers)),
            Opn(t, p),
            e.length === 1 && e[0] === p.type && r && (o.else(), (0, Nze.reportTypeError)(t)),
            o.endIf())
          : Opn(t, p),
        u || o.if((0, Xi._)`${ds.default.errors} === ${n || 0}`));
    }
  }
  function Opn(t, e) {
    let {
      gen: r,
      schema: n,
      opts: { useDefaults: o },
    } = t;
    (o && (0, zls.assignDefaults)(t, e.type),
      r.block(() => {
        for (let s of e.rules) (0, YMt.shouldUseRule)(n, s) && jpn(t, s.keyword, s.definition, e.type);
      }));
  }
  function c0s(t, e) {
    t.schemaEnv.meta || !t.opts.strictTypes || (l0s(t, e), t.opts.allowUnionTypes || m0s(t, e), d0s(t, t.dataTypes));
  }
  function l0s(t, e) {
    if (e.length) {
      if (!t.dataTypes.length) {
        t.dataTypes = e;
        return;
      }
      (e.forEach((r) => {
        $pn(t.dataTypes, r) || KMt(t, `type "${r}" not allowed by context "${t.dataTypes.join(",")}"`);
      }),
        p0s(t, e));
    }
  }
  function m0s(t, e) {
    e.length > 1 &&
      !(e.length === 2 && e.includes("null")) &&
      KMt(t, "use allowUnionTypes to allow union type keyword");
  }
  function d0s(t, e) {
    let r = t.self.RULES.all;
    for (let n in r) {
      let o = r[n];
      if (typeof o == "object" && (0, YMt.shouldUseRule)(t.schema, o)) {
        let { type: s } = o.definition;
        s.length && !s.some((a) => f0s(e, a)) && KMt(t, `missing type "${s.join(",")}" for keyword "${n}"`);
      }
    }
  }
  function f0s(t, e) {
    return t.includes(e) || (e === "number" && t.includes("integer"));
  }
  function $pn(t, e) {
    return t.includes(e) || (e === "integer" && t.includes("number"));
  }
  function p0s(t, e) {
    let r = [];
    for (let n of t.dataTypes) $pn(e, n) ? r.push(n) : e.includes("integer") && n === "number" && r.push("integer");
    t.dataTypes = r;
  }
  function KMt(t, e) {
    let r = t.schemaEnv.baseId + t.errSchemaPath;
    ((e += ` at "${r}" (strictTypes)`), (0, fk.checkStrictMode)(t, e, t.opts.strictTypes));
  }
  var Pze = class {
    constructor(e, r, n) {
      if (
        ((0, o8e.validateKeywordUsage)(e, r, n),
        (this.gen = e.gen),
        (this.allErrors = e.allErrors),
        (this.keyword = n),
        (this.data = e.data),
        (this.schema = e.schema[n]),
        (this.$data = r.$data && e.opts.$data && this.schema && this.schema.$data),
        (this.schemaValue = (0, fk.schemaRefOrVal)(e, this.schema, n, this.$data)),
        (this.schemaType = r.schemaType),
        (this.parentSchema = e.schema),
        (this.params = {}),
        (this.it = e),
        (this.def = r),
        this.$data)
      )
        this.schemaCode = e.gen.const("vSchema", Qpn(this.$data, e));
      else if (
        ((this.schemaCode = this.schemaValue), !(0, o8e.validSchemaType)(this.schema, r.schemaType, r.allowUndefined))
      )
        throw new Error(`${n} value must be ${JSON.stringify(r.schemaType)}`);
      ("code" in r ? r.trackErrors : r.errors !== !1) && (this.errsCount = e.gen.const("_errs", ds.default.errors));
    }
    result(e, r, n) {
      this.failResult((0, Xi.not)(e), r, n);
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
      this.failResult((0, Xi.not)(e), void 0, r);
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
      this.fail((0, Xi._)`${r} !== undefined && (${(0, Xi.or)(this.invalid$data(), e)})`);
    }
    error(e, r, n) {
      if (r) {
        (this.setParams(r), this._error(e, n), this.setParams({}));
        return;
      }
      this._error(e, n);
    }
    _error(e, r) {
      (e ? i8e.reportExtraError : i8e.reportError)(this, this.def.error, r);
    }
    $dataError() {
      (0, i8e.reportError)(this, this.def.$dataError || i8e.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0) throw new Error('add "trackErrors" to keyword definition');
      (0, i8e.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(e) {
      this.allErrors || this.gen.if(e);
    }
    setParams(e, r) {
      r ? Object.assign(this.params, e) : (this.params = e);
    }
    block$data(e, r, n = Xi.nil) {
      this.gen.block(() => {
        (this.check$data(e, n), r());
      });
    }
    check$data(e = Xi.nil, r = Xi.nil) {
      if (!this.$data) return;
      let { gen: n, schemaCode: o, schemaType: s, def: a } = this;
      (n.if((0, Xi.or)((0, Xi._)`${o} === undefined`, r)),
        e !== Xi.nil && n.assign(e, !0),
        (s.length || a.validateSchema) &&
          (n.elseIf(this.invalid$data()), this.$dataError(), e !== Xi.nil && n.assign(e, !1)),
        n.else());
    }
    invalid$data() {
      let { gen: e, schemaCode: r, schemaType: n, def: o, it: s } = this;
      return (0, Xi.or)(a(), u());
      function a() {
        if (n.length) {
          if (!(r instanceof Xi.Name)) throw new Error("ajv implementation error");
          let c = Array.isArray(n) ? n : [n];
          return (0, Xi._)`${(0, Nze.checkDataTypes)(c, r, s.opts.strictNumbers, Nze.DataType.Wrong)}`;
        }
        return Xi.nil;
      }
      function u() {
        if (o.validateSchema) {
          let c = e.scopeValue("validate$data", { ref: o.validateSchema });
          return (0, Xi._)`!${c}(${r})`;
        }
        return Xi.nil;
      }
    }
    subschema(e, r) {
      let n = (0, zMt.getSubschema)(this.it, e);
      ((0, zMt.extendSubschemaData)(n, this.it, e), (0, zMt.extendSubschemaMode)(n, e));
      let o = { ...this.it, ...n, items: void 0, props: void 0 };
      return (t0s(o, r), o);
    }
    mergeEvaluated(e, r) {
      let { it: n, gen: o } = this;
      n.opts.unevaluated &&
        (n.props !== !0 && e.props !== void 0 && (n.props = fk.mergeEvaluated.props(o, e.props, n.props, r)),
        n.items !== !0 && e.items !== void 0 && (n.items = fk.mergeEvaluated.items(o, e.items, n.items, r)));
    }
    mergeValidEvaluated(e, r) {
      let { it: n, gen: o } = this;
      if (n.opts.unevaluated && (n.props !== !0 || n.items !== !0))
        return (o.if(r, () => this.mergeEvaluated(e, Xi.Name)), !0);
    }
  };
  bM.KeywordCxt = Pze;
  function jpn(t, e, r, n) {
    let o = new Pze(t, r, e);
    "code" in r
      ? r.code(o, n)
      : o.$data && r.validate
        ? (0, o8e.funcKeywordCode)(o, r)
        : "macro" in r
          ? (0, o8e.macroKeywordCode)(o, r)
          : (r.compile || r.validate) && (0, o8e.funcKeywordCode)(o, r);
  }
  var h0s = /^\/(?:[^~]|~0|~1)*$/,
    g0s = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function Qpn(t, { dataLevel: e, dataNames: r, dataPathArr: n }) {
    let o, s;
    if (t === "") return ds.default.rootData;
    if (t[0] === "/") {
      if (!h0s.test(t)) throw new Error(`Invalid JSON-pointer: ${t}`);
      ((o = t), (s = ds.default.rootData));
    } else {
      let m = g0s.exec(t);
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
      m && ((s = (0, Xi._)`${s}${(0, Xi.getProperty)((0, fk.unescapeJsonPointer)(m))}`), (a = (0, Xi._)`${a} && ${s}`));
    return a;
    function c(m, d) {
      return `Cannot access ${m} ${d} levels up, current level is ${e}`;
    }
  }
  bM.getData = Qpn;
});