/**
 * @module nc
 * @category utils/oop
 * @label oop
 * @position 799 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (nc) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var nc = T((Wa) => {
  "use strict";
  Object.defineProperty(Wa, "__esModule", { value: !0 });
  Wa.checkStrictMode =
    Wa.getErrorPath =
    Wa.Type =
    Wa.useFunc =
    Wa.setEvaluated =
    Wa.evaluatedPropsToName =
    Wa.mergeEvaluated =
    Wa.eachItem =
    Wa.unescapeJsonPointer =
    Wa.escapeJsonPointer =
    Wa.escapeFragment =
    Wa.unescapeFragment =
    Wa.schemaRefOrVal =
    Wa.schemaHasRulesButRef =
    Wa.schemaHasRules =
    Wa.checkUnknownRules =
    Wa.alwaysValidSchema =
    Wa.toHash =
      void 0;
  var _0 = _a(),
    mfs = C8e();
  function dfs(t) {
    let e = {};
    for (let r of t) e[r] = !0;
    return e;
  }
  Wa.toHash = dfs;
  function ffs(t, e) {
    return typeof e == "boolean" ? e : Object.keys(e).length === 0 ? !0 : (N3n(t, e), !P3n(e, t.self.RULES.all));
  }
  Wa.alwaysValidSchema = ffs;
  function N3n(t, e = t.schema) {
    let { opts: r, self: n } = t;
    if (!r.strictSchema || typeof e == "boolean") return;
    let o = n.RULES.keywords;
    for (let s in e) o[s] || M3n(t, `unknown keyword: "${s}"`);
  }
  Wa.checkUnknownRules = N3n;
  function P3n(t, e) {
    if (typeof t == "boolean") return !t;
    for (let r in t) if (e[r]) return !0;
    return !1;
  }
  Wa.schemaHasRules = P3n;
  function pfs(t, e) {
    if (typeof t == "boolean") return !t;
    for (let r in t) if (r !== "$ref" && e.all[r]) return !0;
    return !1;
  }
  Wa.schemaHasRulesButRef = pfs;
  function hfs({ topSchemaRef: t, schemaPath: e }, r, n, o) {
    if (!o) {
      if (typeof r == "number" || typeof r == "boolean") return r;
      if (typeof r == "string") return (0, _0._)`${r}`;
    }
    return (0, _0._)`${t}${e}${(0, _0.getProperty)(n)}`;
  }
  Wa.schemaRefOrVal = hfs;
  function gfs(t) {
    return B3n(decodeURIComponent(t));
  }
  Wa.unescapeFragment = gfs;
  function bfs(t) {
    return encodeURIComponent(SUt(t));
  }
  Wa.escapeFragment = bfs;
  function SUt(t) {
    return typeof t == "number" ? `${t}` : t.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  Wa.escapeJsonPointer = SUt;
  function B3n(t) {
    return t.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  Wa.unescapeJsonPointer = B3n;
  function Afs(t, e) {
    if (Array.isArray(t)) for (let r of t) e(r);
    else e(t);
  }
  Wa.eachItem = Afs;
  function k3n({ mergeNames: t, mergeToName: e, mergeValues: r, resultToName: n }) {
    return (o, s, a, u) => {
      let c =
        a === void 0
          ? s
          : a instanceof _0.Name
            ? (s instanceof _0.Name ? t(o, s, a) : e(o, s, a), a)
            : s instanceof _0.Name
              ? (e(o, a, s), s)
              : r(s, a);
      return u === _0.Name && !(c instanceof _0.Name) ? n(o, c) : c;
    };
  }
  Wa.mergeEvaluated = {
    props: k3n({
      mergeNames: (t, e, r) =>
        t.if((0, _0._)`${r} !== true && ${e} !== undefined`, () => {
          t.if(
            (0, _0._)`${e} === true`,
            () => t.assign(r, !0),
            () => t.assign(r, (0, _0._)`${r} || {}`).code((0, _0._)`Object.assign(${r}, ${e})`),
          );
        }),
      mergeToName: (t, e, r) =>
        t.if((0, _0._)`${r} !== true`, () => {
          e === !0 ? t.assign(r, !0) : (t.assign(r, (0, _0._)`${r} || {}`), wUt(t, r, e));
        }),
      mergeValues: (t, e) => (t === !0 ? !0 : { ...t, ...e }),
      resultToName: L3n,
    }),
    items: k3n({
      mergeNames: (t, e, r) =>
        t.if((0, _0._)`${r} !== true && ${e} !== undefined`, () =>
          t.assign(r, (0, _0._)`${e} === true ? true : ${r} > ${e} ? ${r} : ${e}`),
        ),
      mergeToName: (t, e, r) =>
        t.if((0, _0._)`${r} !== true`, () => t.assign(r, e === !0 ? !0 : (0, _0._)`${r} > ${e} ? ${r} : ${e}`)),
      mergeValues: (t, e) => (t === !0 ? !0 : Math.max(t, e)),
      resultToName: (t, e) => t.var("items", e),
    }),
  };
  function L3n(t, e) {
    if (e === !0) return t.var("props", !0);
    let r = t.var("props", (0, _0._)`{}`);
    return (e !== void 0 && wUt(t, r, e), r);
  }
  Wa.evaluatedPropsToName = L3n;
  function wUt(t, e, r) {
    Object.keys(r).forEach((n) => t.assign((0, _0._)`${e}${(0, _0.getProperty)(n)}`, !0));
  }
  Wa.setEvaluated = wUt;
  var O3n = {};
  function yfs(t, e) {
    return t.scopeValue("func", { ref: e, code: O3n[e.code] || (O3n[e.code] = new mfs._Code(e.code)) });
  }
  Wa.useFunc = yfs;
  var CUt;
  (function (t) {
    ((t[(t.Num = 0)] = "Num"), (t[(t.Str = 1)] = "Str"));
  })(CUt || (Wa.Type = CUt = {}));
  function _fs(t, e, r) {
    if (t instanceof _0.Name) {
      let n = e === CUt.Num;
      return r
        ? n
          ? (0, _0._)`"[" + ${t} + "]"`
          : (0, _0._)`"['" + ${t} + "']"`
        : n
          ? (0, _0._)`"/" + ${t}`
          : (0, _0._)`"/" + ${t}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return r ? (0, _0.getProperty)(t).toString() : "/" + SUt(t);
  }
  Wa.getErrorPath = _fs;
  function M3n(t, e, r = t.opts.strictSchema) {
    if (r) {
      if (((e = `strict mode: ${e}`), r === !0)) throw new Error(e);
      t.self.logger.warn(e);
    }
  }
  Wa.checkStrictMode = M3n;
});