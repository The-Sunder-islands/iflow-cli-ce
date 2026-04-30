/**
 * @module P8e
 * @category utils/validation
 * @label ajv
 * @position 812 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (P8e) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var P8e = T((SM) => {
  "use strict";
  Object.defineProperty(SM, "__esModule", { value: !0 });
  SM.getData = SM.KeywordCxt = SM.validateFunctionCode = void 0;
  var dgn = Q3n(),
    ugn = R8e(),
    MUt = DUt(),
    hYe = R8e(),
    Ops = Y3n(),
    N8e = egn(),
    LUt = rgn(),
    Zi = _a(),
    ps = bk(),
    Nps = k8e(),
    Ak = nc(),
    O8e = I8e();
  function Pps(t) {
    if (hgn(t) && (ggn(t), pgn(t))) {
      Mps(t);
      return;
    }
    fgn(t, () => (0, dgn.topBoolOrEmptySchema)(t));
  }
  SM.validateFunctionCode = Pps;
  function fgn({ gen: t, validateName: e, schema: r, schemaEnv: n, opts: o }, s) {
    o.code.es5
      ? t.func(e, (0, Zi._)`${ps.default.data}, ${ps.default.valCxt}`, n.$async, () => {
          (t.code((0, Zi._)`"use strict"; ${cgn(r, o)}`), Lps(t, o), t.code(s));
        })
      : t.func(e, (0, Zi._)`${ps.default.data}, ${Bps(o)}`, n.$async, () => t.code(cgn(r, o)).code(s));
  }
  function Bps(t) {
    return (0,
    Zi._)`{${ps.default.instancePath}="", ${ps.default.parentData}, ${ps.default.parentDataProperty}, ${ps.default.rootData}=${ps.default.data}${t.dynamicRef ? (0, Zi._)`, ${ps.default.dynamicAnchors}={}` : Zi.nil}}={}`;
  }
  function Lps(t, e) {
    t.if(
      ps.default.valCxt,
      () => {
        (t.var(ps.default.instancePath, (0, Zi._)`${ps.default.valCxt}.${ps.default.instancePath}`),
          t.var(ps.default.parentData, (0, Zi._)`${ps.default.valCxt}.${ps.default.parentData}`),
          t.var(ps.default.parentDataProperty, (0, Zi._)`${ps.default.valCxt}.${ps.default.parentDataProperty}`),
          t.var(ps.default.rootData, (0, Zi._)`${ps.default.valCxt}.${ps.default.rootData}`),
          e.dynamicRef &&
            t.var(ps.default.dynamicAnchors, (0, Zi._)`${ps.default.valCxt}.${ps.default.dynamicAnchors}`));
      },
      () => {
        (t.var(ps.default.instancePath, (0, Zi._)`""`),
          t.var(ps.default.parentData, (0, Zi._)`undefined`),
          t.var(ps.default.parentDataProperty, (0, Zi._)`undefined`),
          t.var(ps.default.rootData, ps.default.data),
          e.dynamicRef && t.var(ps.default.dynamicAnchors, (0, Zi._)`{}`));
      },
    );
  }
  function Mps(t) {
    let { schema: e, opts: r, gen: n } = t;
    fgn(t, () => {
      (r.$comment && e.$comment && Agn(t),
        Qps(t),
        n.let(ps.default.vErrors, null),
        n.let(ps.default.errors, 0),
        r.unevaluated && Fps(t),
        bgn(t),
        Hps(t));
    });
  }
  function Fps(t) {
    let { gen: e, validateName: r } = t;
    ((t.evaluated = e.const("evaluated", (0, Zi._)`${r}.evaluated`)),
      e.if((0, Zi._)`${t.evaluated}.dynamicProps`, () =>
        e.assign((0, Zi._)`${t.evaluated}.props`, (0, Zi._)`undefined`),
      ),
      e.if((0, Zi._)`${t.evaluated}.dynamicItems`, () =>
        e.assign((0, Zi._)`${t.evaluated}.items`, (0, Zi._)`undefined`),
      ));
  }
  function cgn(t, e) {
    let r = typeof t == "object" && t[e.schemaId];
    return r && (e.code.source || e.code.process) ? (0, Zi._)`/*# sourceURL=${r} */` : Zi.nil;
  }
  function Ups(t, e) {
    if (hgn(t) && (ggn(t), pgn(t))) {
      $ps(t, e);
      return;
    }
    (0, dgn.boolOrEmptySchema)(t, e);
  }
  function pgn({ schema: t, self: e }) {
    if (typeof t == "boolean") return !t;
    for (let r in t) if (e.RULES.all[r]) return !0;
    return !1;
  }
  function hgn(t) {
    return typeof t.schema != "boolean";
  }
  function $ps(t, e) {
    let { schema: r, gen: n, opts: o } = t;
    (o.$comment && r.$comment && Agn(t), Gps(t), qps(t));
    let s = n.const("_errs", ps.default.errors);
    (bgn(t, s), n.var(e, (0, Zi._)`${s} === ${ps.default.errors}`));
  }
  function ggn(t) {
    ((0, Ak.checkUnknownRules)(t), jps(t));
  }
  function bgn(t, e) {
    if (t.opts.jtd) return lgn(t, [], !1, e);
    let r = (0, ugn.getSchemaTypes)(t.schema),
      n = (0, ugn.coerceAndCheckDataType)(t, r);
    lgn(t, r, !n, e);
  }
  function jps(t) {
    let { schema: e, errSchemaPath: r, opts: n, self: o } = t;
    e.$ref &&
      n.ignoreKeywordsWithRef &&
      (0, Ak.schemaHasRulesButRef)(e, o.RULES) &&
      o.logger.warn(`$ref: keywords ignored in schema at path "${r}"`);
  }
  function Qps(t) {
    let { schema: e, opts: r } = t;
    e.default !== void 0 &&
      r.useDefaults &&
      r.strictSchema &&
      (0, Ak.checkStrictMode)(t, "default is ignored in the schema root");
  }
  function Gps(t) {
    let e = t.schema[t.opts.schemaId];
    e && (t.baseId = (0, Nps.resolveUrl)(t.opts.uriResolver, t.baseId, e));
  }
  function qps(t) {
    if (t.schema.$async && !t.schemaEnv.$async) throw new Error("async schema in sync schema");
  }
  function Agn({ gen: t, schemaEnv: e, schema: r, errSchemaPath: n, opts: o }) {
    let s = r.$comment;
    if (o.$comment === !0) t.code((0, Zi._)`${ps.default.self}.logger.log(${s})`);
    else if (typeof o.$comment == "function") {
      let a = (0, Zi.str)`${n}/$comment`,
        u = t.scopeValue("root", { ref: e.root });
      t.code((0, Zi._)`${ps.default.self}.opts.$comment(${s}, ${a}, ${u}.schema)`);
    }
  }
  function Hps(t) {
    let { gen: e, schemaEnv: r, validateName: n, ValidationError: o, opts: s } = t;
    r.$async
      ? e.if(
          (0, Zi._)`${ps.default.errors} === 0`,
          () => e.return(ps.default.data),
          () => e.throw((0, Zi._)`new ${o}(${ps.default.vErrors})`),
        )
      : (e.assign((0, Zi._)`${n}.errors`, ps.default.vErrors),
        s.unevaluated && Vps(t),
        e.return((0, Zi._)`${ps.default.errors} === 0`));
  }
  function Vps({ gen: t, evaluated: e, props: r, items: n }) {
    (r instanceof Zi.Name && t.assign((0, Zi._)`${e}.props`, r),
      n instanceof Zi.Name && t.assign((0, Zi._)`${e}.items`, n));
  }
  function lgn(t, e, r, n) {
    let { gen: o, schema: s, data: a, allErrors: u, opts: c, self: m } = t,
      { RULES: d } = m;
    if (s.$ref && (c.ignoreKeywordsWithRef || !(0, Ak.schemaHasRulesButRef)(s, d))) {
      o.block(() => _gn(t, "$ref", d.all.$ref.definition));
      return;
    }
    (c.jtd || Wps(t, e),
      o.block(() => {
        for (let p of d.rules) f(p);
        f(d.post);
      }));
    function f(p) {
      (0, MUt.shouldUseGroup)(s, p) &&
        (p.type
          ? (o.if((0, hYe.checkDataType)(p.type, a, c.strictNumbers)),
            mgn(t, p),
            e.length === 1 && e[0] === p.type && r && (o.else(), (0, hYe.reportTypeError)(t)),
            o.endIf())
          : mgn(t, p),
        u || o.if((0, Zi._)`${ps.default.errors} === ${n || 0}`));
    }
  }
  function mgn(t, e) {
    let {
      gen: r,
      schema: n,
      opts: { useDefaults: o },
    } = t;
    (o && (0, Ops.assignDefaults)(t, e.type),
      r.block(() => {
        for (let s of e.rules) (0, MUt.shouldUseRule)(n, s) && _gn(t, s.keyword, s.definition, e.type);
      }));
  }
  function Wps(t, e) {
    t.schemaEnv.meta || !t.opts.strictTypes || (zps(t, e), t.opts.allowUnionTypes || Yps(t, e), Kps(t, t.dataTypes));
  }
  function zps(t, e) {
    if (e.length) {
      if (!t.dataTypes.length) {
        t.dataTypes = e;
        return;
      }
      (e.forEach((r) => {
        ygn(t.dataTypes, r) || FUt(t, `type "${r}" not allowed by context "${t.dataTypes.join(",")}"`);
      }),
        Xps(t, e));
    }
  }
  function Yps(t, e) {
    e.length > 1 &&
      !(e.length === 2 && e.includes("null")) &&
      FUt(t, "use allowUnionTypes to allow union type keyword");
  }
  function Kps(t, e) {
    let r = t.self.RULES.all;
    for (let n in r) {
      let o = r[n];
      if (typeof o == "object" && (0, MUt.shouldUseRule)(t.schema, o)) {
        let { type: s } = o.definition;
        s.length && !s.some((a) => Jps(e, a)) && FUt(t, `missing type "${s.join(",")}" for keyword "${n}"`);
      }
    }
  }
  function Jps(t, e) {
    return t.includes(e) || (e === "number" && t.includes("integer"));
  }
  function ygn(t, e) {
    return t.includes(e) || (e === "integer" && t.includes("number"));
  }
  function Xps(t, e) {
    let r = [];
    for (let n of t.dataTypes) ygn(e, n) ? r.push(n) : e.includes("integer") && n === "number" && r.push("integer");
    t.dataTypes = r;
  }
  function FUt(t, e) {
    let r = t.schemaEnv.baseId + t.errSchemaPath;
    ((e += ` at "${r}" (strictTypes)`), (0, Ak.checkStrictMode)(t, e, t.opts.strictTypes));
  }
  var gYe = class {
    constructor(e, r, n) {
      if (
        ((0, N8e.validateKeywordUsage)(e, r, n),
        (this.gen = e.gen),
        (this.allErrors = e.allErrors),
        (this.keyword = n),
        (this.data = e.data),
        (this.schema = e.schema[n]),
        (this.$data = r.$data && e.opts.$data && this.schema && this.schema.$data),
        (this.schemaValue = (0, Ak.schemaRefOrVal)(e, this.schema, n, this.$data)),
        (this.schemaType = r.schemaType),
        (this.parentSchema = e.schema),
        (this.params = {}),
        (this.it = e),
        (this.def = r),
        this.$data)
      )
        this.schemaCode = e.gen.const("vSchema", Egn(this.$data, e));
      else if (
        ((this.schemaCode = this.schemaValue), !(0, N8e.validSchemaType)(this.schema, r.schemaType, r.allowUndefined))
      )
        throw new Error(`${n} value must be ${JSON.stringify(r.schemaType)}`);
      ("code" in r ? r.trackErrors : r.errors !== !1) && (this.errsCount = e.gen.const("_errs", ps.default.errors));
    }
    result(e, r, n) {
      this.failResult((0, Zi.not)(e), r, n);
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
      this.failResult((0, Zi.not)(e), void 0, r);
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
      this.fail((0, Zi._)`${r} !== undefined && (${(0, Zi.or)(this.invalid$data(), e)})`);
    }
    error(e, r, n) {
      if (r) {
        (this.setParams(r), this._error(e, n), this.setParams({}));
        return;
      }
      this._error(e, n);
    }
    _error(e, r) {
      (e ? O8e.reportExtraError : O8e.reportError)(this, this.def.error, r);
    }
    $dataError() {
      (0, O8e.reportError)(this, this.def.$dataError || O8e.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0) throw new Error('add "trackErrors" to keyword definition');
      (0, O8e.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(e) {
      this.allErrors || this.gen.if(e);
    }
    setParams(e, r) {
      r ? Object.assign(this.params, e) : (this.params = e);
    }
    block$data(e, r, n = Zi.nil) {
      this.gen.block(() => {
        (this.check$data(e, n), r());
      });
    }
    check$data(e = Zi.nil, r = Zi.nil) {
      if (!this.$data) return;
      let { gen: n, schemaCode: o, schemaType: s, def: a } = this;
      (n.if((0, Zi.or)((0, Zi._)`${o} === undefined`, r)),
        e !== Zi.nil && n.assign(e, !0),
        (s.length || a.validateSchema) &&
          (n.elseIf(this.invalid$data()), this.$dataError(), e !== Zi.nil && n.assign(e, !1)),
        n.else());
    }
    invalid$data() {
      let { gen: e, schemaCode: r, schemaType: n, def: o, it: s } = this;
      return (0, Zi.or)(a(), u());
      function a() {
        if (n.length) {
          if (!(r instanceof Zi.Name)) throw new Error("ajv implementation error");
          let c = Array.isArray(n) ? n : [n];
          return (0, Zi._)`${(0, hYe.checkDataTypes)(c, r, s.opts.strictNumbers, hYe.DataType.Wrong)}`;
        }
        return Zi.nil;
      }
      function u() {
        if (o.validateSchema) {
          let c = e.scopeValue("validate$data", { ref: o.validateSchema });
          return (0, Zi._)`!${c}(${r})`;
        }
        return Zi.nil;
      }
    }
    subschema(e, r) {
      let n = (0, LUt.getSubschema)(this.it, e);
      ((0, LUt.extendSubschemaData)(n, this.it, e), (0, LUt.extendSubschemaMode)(n, e));
      let o = { ...this.it, ...n, items: void 0, props: void 0 };
      return (Ups(o, r), o);
    }
    mergeEvaluated(e, r) {
      let { it: n, gen: o } = this;
      n.opts.unevaluated &&
        (n.props !== !0 && e.props !== void 0 && (n.props = Ak.mergeEvaluated.props(o, e.props, n.props, r)),
        n.items !== !0 && e.items !== void 0 && (n.items = Ak.mergeEvaluated.items(o, e.items, n.items, r)));
    }
    mergeValidEvaluated(e, r) {
      let { it: n, gen: o } = this;
      if (n.opts.unevaluated && (n.props !== !0 || n.items !== !0))
        return (o.if(r, () => this.mergeEvaluated(e, Zi.Name)), !0);
    }
  };
  SM.KeywordCxt = gYe;
  function _gn(t, e, r, n) {
    let o = new gYe(t, r, e);
    "code" in r
      ? r.code(o, n)
      : o.$data && r.validate
        ? (0, N8e.funcKeywordCode)(o, r)
        : "macro" in r
          ? (0, N8e.macroKeywordCode)(o, r)
          : (r.compile || r.validate) && (0, N8e.funcKeywordCode)(o, r);
  }
  var Zps = /^\/(?:[^~]|~0|~1)*$/,
    ehs = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function Egn(t, { dataLevel: e, dataNames: r, dataPathArr: n }) {
    let o, s;
    if (t === "") return ps.default.rootData;
    if (t[0] === "/") {
      if (!Zps.test(t)) throw new Error(`Invalid JSON-pointer: ${t}`);
      ((o = t), (s = ps.default.rootData));
    } else {
      let m = ehs.exec(t);
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
      m && ((s = (0, Zi._)`${s}${(0, Zi.getProperty)((0, Ak.unescapeJsonPointer)(m))}`), (a = (0, Zi._)`${a} && ${s}`));
    return a;
    function c(m, d) {
      return `Cannot access ${m} ${d} levels up, current level is ${e}`;
    }
  }
  SM.getData = Egn;
});