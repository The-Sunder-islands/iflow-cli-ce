/**
 * @module r8e
 * @category unknown
 * @label unknown
 * @position 736 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (r8e) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var r8e = T(($b) => {
  "use strict";
  Object.defineProperty($b, "__esModule", { value: !0 });
  $b.reportTypeError =
    $b.checkDataTypes =
    $b.checkDataType =
    $b.coerceAndCheckDataType =
    $b.getJSONTypes =
    $b.getSchemaTypes =
    $b.DataType =
      void 0;
  var nls = UMt(),
    ils = $Mt(),
    ols = t8e(),
    aa = Ha(),
    mpn = tc(),
    Boe;
  (function (t) {
    ((t[(t.Correct = 0)] = "Correct"), (t[(t.Wrong = 1)] = "Wrong"));
  })(Boe || ($b.DataType = Boe = {}));
  function sls(t) {
    let e = dpn(t.type);
    if (e.includes("null")) {
      if (t.nullable === !1) throw new Error("type: null contradicts nullable: false");
    } else {
      if (!e.length && t.nullable !== void 0) throw new Error('"nullable" cannot be used without "type"');
      t.nullable === !0 && e.push("null");
    }
    return e;
  }
  $b.getSchemaTypes = sls;
  function dpn(t) {
    let e = Array.isArray(t) ? t : t ? [t] : [];
    if (e.every(nls.isJSONType)) return e;
    throw new Error("type must be JSONType or JSONType[]: " + e.join(","));
  }
  $b.getJSONTypes = dpn;
  function als(t, e) {
    let { gen: r, data: n, opts: o } = t,
      s = uls(e, o.coerceTypes),
      a = e.length > 0 && !(s.length === 0 && e.length === 1 && (0, ils.schemaHasRulesForType)(t, e[0]));
    if (a) {
      let u = QMt(e, n, o.strictNumbers, Boe.Wrong);
      r.if(u, () => {
        s.length ? cls(t, e, s) : GMt(t);
      });
    }
    return a;
  }
  $b.coerceAndCheckDataType = als;
  var fpn = new Set(["string", "number", "integer", "boolean", "null"]);
  function uls(t, e) {
    return e ? t.filter((r) => fpn.has(r) || (e === "array" && r === "array")) : [];
  }
  function cls(t, e, r) {
    let { gen: n, data: o, opts: s } = t,
      a = n.let("dataType", (0, aa._)`typeof ${o}`),
      u = n.let("coerced", (0, aa._)`undefined`);
    (s.coerceTypes === "array" &&
      n.if((0, aa._)`${a} == 'object' && Array.isArray(${o}) && ${o}.length == 1`, () =>
        n
          .assign(o, (0, aa._)`${o}[0]`)
          .assign(a, (0, aa._)`typeof ${o}`)
          .if(QMt(e, o, s.strictNumbers), () => n.assign(u, o)),
      ),
      n.if((0, aa._)`${u} !== undefined`));
    for (let m of r) (fpn.has(m) || (m === "array" && s.coerceTypes === "array")) && c(m);
    (n.else(),
      GMt(t),
      n.endIf(),
      n.if((0, aa._)`${u} !== undefined`, () => {
        (n.assign(o, u), lls(t, u));
      }));
    function c(m) {
      switch (m) {
        case "string":
          n.elseIf((0, aa._)`${a} == "number" || ${a} == "boolean"`)
            .assign(u, (0, aa._)`"" + ${o}`)
            .elseIf((0, aa._)`${o} === null`)
            .assign(u, (0, aa._)`""`);
          return;
        case "number":
          n.elseIf(
            (0, aa._)`${a} == "boolean" || ${o} === null
              || (${a} == "string" && ${o} && ${o} == +${o})`,
          ).assign(u, (0, aa._)`+${o}`);
          return;
        case "integer":
          n.elseIf(
            (0, aa._)`${a} === "boolean" || ${o} === null
              || (${a} === "string" && ${o} && ${o} == +${o} && !(${o} % 1))`,
          ).assign(u, (0, aa._)`+${o}`);
          return;
        case "boolean":
          n.elseIf((0, aa._)`${o} === "false" || ${o} === 0 || ${o} === null`)
            .assign(u, !1)
            .elseIf((0, aa._)`${o} === "true" || ${o} === 1`)
            .assign(u, !0);
          return;
        case "null":
          (n.elseIf((0, aa._)`${o} === "" || ${o} === 0 || ${o} === false`), n.assign(u, null));
          return;
        case "array":
          n.elseIf(
            (0, aa._)`${a} === "string" || ${a} === "number"
              || ${a} === "boolean" || ${o} === null`,
          ).assign(u, (0, aa._)`[${o}]`);
      }
    }
  }
  function lls({ gen: t, parentData: e, parentDataProperty: r }, n) {
    t.if((0, aa._)`${e} !== undefined`, () => t.assign((0, aa._)`${e}[${r}]`, n));
  }
  function jMt(t, e, r, n = Boe.Correct) {
    let o = n === Boe.Correct ? aa.operators.EQ : aa.operators.NEQ,
      s;
    switch (t) {
      case "null":
        return (0, aa._)`${e} ${o} null`;
      case "array":
        s = (0, aa._)`Array.isArray(${e})`;
        break;
      case "object":
        s = (0, aa._)`${e} && typeof ${e} == "object" && !Array.isArray(${e})`;
        break;
      case "integer":
        s = a((0, aa._)`!(${e} % 1) && !isNaN(${e})`);
        break;
      case "number":
        s = a();
        break;
      default:
        return (0, aa._)`typeof ${e} ${o} ${t}`;
    }
    return n === Boe.Correct ? s : (0, aa.not)(s);
    function a(u = aa.nil) {
      return (0, aa.and)((0, aa._)`typeof ${e} == "number"`, u, r ? (0, aa._)`isFinite(${e})` : aa.nil);
    }
  }
  $b.checkDataType = jMt;
  function QMt(t, e, r, n) {
    if (t.length === 1) return jMt(t[0], e, r, n);
    let o,
      s = (0, mpn.toHash)(t);
    if (s.array && s.object) {
      let a = (0, aa._)`typeof ${e} != "object"`;
      ((o = s.null ? a : (0, aa._)`!${e} || ${a}`), delete s.null, delete s.array, delete s.object);
    } else o = aa.nil;
    s.number && delete s.integer;
    for (let a in s) o = (0, aa.and)(o, jMt(a, e, r, n));
    return o;
  }
  $b.checkDataTypes = QMt;
  var mls = {
    message: ({ schema: t }) => `must be ${t}`,
    params: ({ schema: t, schemaValue: e }) =>
      typeof t == "string" ? (0, aa._)`{type: ${t}}` : (0, aa._)`{type: ${e}}`,
  };
  function GMt(t) {
    let e = dls(t);
    (0, ols.reportError)(e, mls);
  }
  $b.reportTypeError = GMt;
  function dls(t) {
    let { gen: e, data: r, schema: n } = t,
      o = (0, mpn.schemaRefOrVal)(t, n, "type");
    return {
      gen: e,
      keyword: "type",
      data: r,
      schema: n.type,
      schemaCode: o,
      schemaValue: o,
      parentSchema: n,
      params: {},
      it: t,
    };
  }
});