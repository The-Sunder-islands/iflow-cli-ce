/**
 * @module tc
 * @category utils/oop
 * @label oop
 * @position 731 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (tc) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var tc = T((Va) => {
  "use strict";
  Object.defineProperty(Va, "__esModule", { value: !0 });
  Va.checkStrictMode =
    Va.getErrorPath =
    Va.Type =
    Va.useFunc =
    Va.setEvaluated =
    Va.evaluatedPropsToName =
    Va.mergeEvaluated =
    Va.eachItem =
    Va.unescapeJsonPointer =
    Va.escapeJsonPointer =
    Va.escapeFragment =
    Va.unescapeFragment =
    Va.schemaRefOrVal =
    Va.schemaHasRulesButRef =
    Va.schemaHasRules =
    Va.checkUnknownRules =
    Va.alwaysValidSchema =
    Va.toHash =
      void 0;
  var y0 = Ha(),
    Tcs = Y5e();
  function Dcs(t) {
    let e = {};
    for (let r of t) e[r] = !0;
    return e;
  }
  Va.toHash = Dcs;
  function Ics(t, e) {
    return typeof e == "boolean" ? e : Object.keys(e).length === 0 ? !0 : (Zfn(t, e), !epn(e, t.self.RULES.all));
  }
  Va.alwaysValidSchema = Ics;
  function Zfn(t, e = t.schema) {
    let { opts: r, self: n } = t;
    if (!r.strictSchema || typeof e == "boolean") return;
    let o = n.RULES.keywords;
    for (let s in e) o[s] || npn(t, `unknown keyword: "${s}"`);
  }
  Va.checkUnknownRules = Zfn;
  function epn(t, e) {
    if (typeof t == "boolean") return !t;
    for (let r in t) if (e[r]) return !0;
    return !1;
  }
  Va.schemaHasRules = epn;
  function Rcs(t, e) {
    if (typeof t == "boolean") return !t;
    for (let r in t) if (r !== "$ref" && e.all[r]) return !0;
    return !1;
  }
  Va.schemaHasRulesButRef = Rcs;
  function kcs({ topSchemaRef: t, schemaPath: e }, r, n, o) {
    if (!o) {
      if (typeof r == "number" || typeof r == "boolean") return r;
      if (typeof r == "string") return (0, y0._)`${r}`;
    }
    return (0, y0._)`${t}${e}${(0, y0.getProperty)(n)}`;
  }
  Va.schemaRefOrVal = kcs;
  function Ocs(t) {
    return tpn(decodeURIComponent(t));
  }
  Va.unescapeFragment = Ocs;
  function Ncs(t) {
    return encodeURIComponent(LMt(t));
  }
  Va.escapeFragment = Ncs;
  function LMt(t) {
    return typeof t == "number" ? `${t}` : t.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  Va.escapeJsonPointer = LMt;
  function tpn(t) {
    return t.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  Va.unescapeJsonPointer = tpn;
  function Pcs(t, e) {
    if (Array.isArray(t)) for (let r of t) e(r);
    else e(t);
  }
  Va.eachItem = Pcs;
  function Jfn({ mergeNames: t, mergeToName: e, mergeValues: r, resultToName: n }) {
    return (o, s, a, u) => {
      let c =
        a === void 0
          ? s
          : a instanceof y0.Name
            ? (s instanceof y0.Name ? t(o, s, a) : e(o, s, a), a)
            : s instanceof y0.Name
              ? (e(o, a, s), s)
              : r(s, a);
      return u === y0.Name && !(c instanceof y0.Name) ? n(o, c) : c;
    };
  }
  Va.mergeEvaluated = {
    props: Jfn({
      mergeNames: (t, e, r) =>
        t.if((0, y0._)`${r} !== true && ${e} !== undefined`, () => {
          t.if(
            (0, y0._)`${e} === true`,
            () => t.assign(r, !0),
            () => t.assign(r, (0, y0._)`${r} || {}`).code((0, y0._)`Object.assign(${r}, ${e})`),
          );
        }),
      mergeToName: (t, e, r) =>
        t.if((0, y0._)`${r} !== true`, () => {
          e === !0 ? t.assign(r, !0) : (t.assign(r, (0, y0._)`${r} || {}`), MMt(t, r, e));
        }),
      mergeValues: (t, e) => (t === !0 ? !0 : { ...t, ...e }),
      resultToName: rpn,
    }),
    items: Jfn({
      mergeNames: (t, e, r) =>
        t.if((0, y0._)`${r} !== true && ${e} !== undefined`, () =>
          t.assign(r, (0, y0._)`${e} === true ? true : ${r} > ${e} ? ${r} : ${e}`),
        ),
      mergeToName: (t, e, r) =>
        t.if((0, y0._)`${r} !== true`, () => t.assign(r, e === !0 ? !0 : (0, y0._)`${r} > ${e} ? ${r} : ${e}`)),
      mergeValues: (t, e) => (t === !0 ? !0 : Math.max(t, e)),
      resultToName: (t, e) => t.var("items", e),
    }),
  };
  function rpn(t, e) {
    if (e === !0) return t.var("props", !0);
    let r = t.var("props", (0, y0._)`{}`);
    return (e !== void 0 && MMt(t, r, e), r);
  }
  Va.evaluatedPropsToName = rpn;
  function MMt(t, e, r) {
    Object.keys(r).forEach((n) => t.assign((0, y0._)`${e}${(0, y0.getProperty)(n)}`, !0));
  }
  Va.setEvaluated = MMt;
  var Xfn = {};
  function Bcs(t, e) {
    return t.scopeValue("func", { ref: e, code: Xfn[e.code] || (Xfn[e.code] = new Tcs._Code(e.code)) });
  }
  Va.useFunc = Bcs;
  var BMt;
  (function (t) {
    ((t[(t.Num = 0)] = "Num"), (t[(t.Str = 1)] = "Str"));
  })(BMt || (Va.Type = BMt = {}));
  function Lcs(t, e, r) {
    if (t instanceof y0.Name) {
      let n = e === BMt.Num;
      return r
        ? n
          ? (0, y0._)`"[" + ${t} + "]"`
          : (0, y0._)`"['" + ${t} + "']"`
        : n
          ? (0, y0._)`"/" + ${t}`
          : (0, y0._)`"/" + ${t}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return r ? (0, y0.getProperty)(t).toString() : "/" + LMt(t);
  }
  Va.getErrorPath = Lcs;
  function npn(t, e, r = t.opts.strictSchema) {
    if (r) {
      if (((e = `strict mode: ${e}`), r === !0)) throw new Error(e);
      t.self.logger.warn(e);
    }
  }
  Va.checkStrictMode = npn;
});