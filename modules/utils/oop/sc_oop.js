/**
 * @module sc
 * @category utils/oop
 * @label oop
 * @position 875 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (sc) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var sc = T((Ya) => {
  "use strict";
  Object.defineProperty(Ya, "__esModule", { value: !0 });
  Ya.checkStrictMode =
    Ya.getErrorPath =
    Ya.Type =
    Ya.useFunc =
    Ya.setEvaluated =
    Ya.evaluatedPropsToName =
    Ya.mergeEvaluated =
    Ya.eachItem =
    Ya.unescapeJsonPointer =
    Ya.escapeJsonPointer =
    Ya.escapeFragment =
    Ya.unescapeFragment =
    Ya.schemaRefOrVal =
    Ya.schemaHasRulesButRef =
    Ya.schemaHasRules =
    Ya.checkUnknownRules =
    Ya.alwaysValidSchema =
    Ya.toHash =
      void 0;
  var v0 = za(),
    GAs = T9e();
  function qAs(t) {
    let e = {};
    for (let r of t) e[r] = !0;
    return e;
  }
  Ya.toHash = qAs;
  function HAs(t, e) {
    return typeof e == "boolean" ? e : Object.keys(e).length === 0 ? !0 : (z2n(t, e), !Y2n(e, t.self.RULES.all));
  }
  Ya.alwaysValidSchema = HAs;
  function z2n(t, e = t.schema) {
    let { opts: r, self: n } = t;
    if (!r.strictSchema || typeof e == "boolean") return;
    let o = n.RULES.keywords;
    for (let s in e) o[s] || X2n(t, `unknown keyword: "${s}"`);
  }
  Ya.checkUnknownRules = z2n;
  function Y2n(t, e) {
    if (typeof t == "boolean") return !t;
    for (let r in t) if (e[r]) return !0;
    return !1;
  }
  Ya.schemaHasRules = Y2n;
  function VAs(t, e) {
    if (typeof t == "boolean") return !t;
    for (let r in t) if (r !== "$ref" && e.all[r]) return !0;
    return !1;
  }
  Ya.schemaHasRulesButRef = VAs;
  function WAs({ topSchemaRef: t, schemaPath: e }, r, n, o) {
    if (!o) {
      if (typeof r == "number" || typeof r == "boolean") return r;
      if (typeof r == "string") return (0, v0._)`${r}`;
    }
    return (0, v0._)`${t}${e}${(0, v0.getProperty)(n)}`;
  }
  Ya.schemaRefOrVal = WAs;
  function zAs(t) {
    return K2n(decodeURIComponent(t));
  }
  Ya.unescapeFragment = zAs;
  function YAs(t) {
    return encodeURIComponent(Xjt(t));
  }
  Ya.escapeFragment = YAs;
  function Xjt(t) {
    return typeof t == "number" ? `${t}` : t.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  Ya.escapeJsonPointer = Xjt;
  function K2n(t) {
    return t.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  Ya.unescapeJsonPointer = K2n;
  function KAs(t, e) {
    if (Array.isArray(t)) for (let r of t) e(r);
    else e(t);
  }
  Ya.eachItem = KAs;
  function V2n({ mergeNames: t, mergeToName: e, mergeValues: r, resultToName: n }) {
    return (o, s, a, u) => {
      let c =
        a === void 0
          ? s
          : a instanceof v0.Name
            ? (s instanceof v0.Name ? t(o, s, a) : e(o, s, a), a)
            : s instanceof v0.Name
              ? (e(o, a, s), s)
              : r(s, a);
      return u === v0.Name && !(c instanceof v0.Name) ? n(o, c) : c;
    };
  }
  Ya.mergeEvaluated = {
    props: V2n({
      mergeNames: (t, e, r) =>
        t.if((0, v0._)`${r} !== true && ${e} !== undefined`, () => {
          t.if(
            (0, v0._)`${e} === true`,
            () => t.assign(r, !0),
            () => t.assign(r, (0, v0._)`${r} || {}`).code((0, v0._)`Object.assign(${r}, ${e})`),
          );
        }),
      mergeToName: (t, e, r) =>
        t.if((0, v0._)`${r} !== true`, () => {
          e === !0 ? t.assign(r, !0) : (t.assign(r, (0, v0._)`${r} || {}`), Zjt(t, r, e));
        }),
      mergeValues: (t, e) => (t === !0 ? !0 : { ...t, ...e }),
      resultToName: J2n,
    }),
    items: V2n({
      mergeNames: (t, e, r) =>
        t.if((0, v0._)`${r} !== true && ${e} !== undefined`, () =>
          t.assign(r, (0, v0._)`${e} === true ? true : ${r} > ${e} ? ${r} : ${e}`),
        ),
      mergeToName: (t, e, r) =>
        t.if((0, v0._)`${r} !== true`, () => t.assign(r, e === !0 ? !0 : (0, v0._)`${r} > ${e} ? ${r} : ${e}`)),
      mergeValues: (t, e) => (t === !0 ? !0 : Math.max(t, e)),
      resultToName: (t, e) => t.var("items", e),
    }),
  };
  function J2n(t, e) {
    if (e === !0) return t.var("props", !0);
    let r = t.var("props", (0, v0._)`{}`);
    return (e !== void 0 && Zjt(t, r, e), r);
  }
  Ya.evaluatedPropsToName = J2n;
  function Zjt(t, e, r) {
    Object.keys(r).forEach((n) => t.assign((0, v0._)`${e}${(0, v0.getProperty)(n)}`, !0));
  }
  Ya.setEvaluated = Zjt;
  var W2n = {};
  function JAs(t, e) {
    return t.scopeValue("func", { ref: e, code: W2n[e.code] || (W2n[e.code] = new GAs._Code(e.code)) });
  }
  Ya.useFunc = JAs;
  var Jjt;
  (function (t) {
    ((t[(t.Num = 0)] = "Num"), (t[(t.Str = 1)] = "Str"));
  })(Jjt || (Ya.Type = Jjt = {}));
  function XAs(t, e, r) {
    if (t instanceof v0.Name) {
      let n = e === Jjt.Num;
      return r
        ? n
          ? (0, v0._)`"[" + ${t} + "]"`
          : (0, v0._)`"['" + ${t} + "']"`
        : n
          ? (0, v0._)`"/" + ${t}`
          : (0, v0._)`"/" + ${t}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return r ? (0, v0.getProperty)(t).toString() : "/" + Xjt(t);
  }
  Ya.getErrorPath = XAs;
  function X2n(t, e, r = t.opts.strictSchema) {
    if (r) {
      if (((e = `strict mode: ${e}`), r === !0)) throw new Error(e);
      t.self.logger.warn(e);
    }
  }
  Ya.checkStrictMode = X2n;
});