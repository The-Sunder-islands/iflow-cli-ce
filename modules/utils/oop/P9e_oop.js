/**
 * @module P9e
 * @category utils/oop
 * @label oop
 * @position 881 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (P9e) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var P9e = T((Vb) => {
  "use strict";
  Object.defineProperty(Vb, "__esModule", { value: !0 });
  Vb.reportTypeError =
    Vb.checkDataTypes =
    Vb.checkDataType =
    Vb.coerceAndCheckDataType =
    Vb.getJSONTypes =
    Vb.getSchemaTypes =
    Vb.DataType =
      void 0;
  var y2s = tQt(),
    _2s = rQt(),
    E2s = N9e(),
    ca = za(),
    s5n = sc(),
    xse;
  (function (t) {
    ((t[(t.Correct = 0)] = "Correct"), (t[(t.Wrong = 1)] = "Wrong"));
  })(xse || (Vb.DataType = xse = {}));
  function v2s(t) {
    let e = a5n(t.type);
    if (e.includes("null")) {
      if (t.nullable === !1) throw new Error("type: null contradicts nullable: false");
    } else {
      if (!e.length && t.nullable !== void 0) throw new Error('"nullable" cannot be used without "type"');
      t.nullable === !0 && e.push("null");
    }
    return e;
  }
  Vb.getSchemaTypes = v2s;
  function a5n(t) {
    let e = Array.isArray(t) ? t : t ? [t] : [];
    if (e.every(y2s.isJSONType)) return e;
    throw new Error("type must be JSONType or JSONType[]: " + e.join(","));
  }
  Vb.getJSONTypes = a5n;
  function C2s(t, e) {
    let { gen: r, data: n, opts: o } = t,
      s = S2s(e, o.coerceTypes),
      a = e.length > 0 && !(s.length === 0 && e.length === 1 && (0, _2s.schemaHasRulesForType)(t, e[0]));
    if (a) {
      let u = iQt(e, n, o.strictNumbers, xse.Wrong);
      r.if(u, () => {
        s.length ? w2s(t, e, s) : oQt(t);
      });
    }
    return a;
  }
  Vb.coerceAndCheckDataType = C2s;
  var u5n = new Set(["string", "number", "integer", "boolean", "null"]);
  function S2s(t, e) {
    return e ? t.filter((r) => u5n.has(r) || (e === "array" && r === "array")) : [];
  }
  function w2s(t, e, r) {
    let { gen: n, data: o, opts: s } = t,
      a = n.let("dataType", (0, ca._)`typeof ${o}`),
      u = n.let("coerced", (0, ca._)`undefined`);
    (s.coerceTypes === "array" &&
      n.if((0, ca._)`${a} == 'object' && Array.isArray(${o}) && ${o}.length == 1`, () =>
        n
          .assign(o, (0, ca._)`${o}[0]`)
          .assign(a, (0, ca._)`typeof ${o}`)
          .if(iQt(e, o, s.strictNumbers), () => n.assign(u, o)),
      ),
      n.if((0, ca._)`${u} !== undefined`));
    for (let m of r) (u5n.has(m) || (m === "array" && s.coerceTypes === "array")) && c(m);
    (n.else(),
      oQt(t),
      n.endIf(),
      n.if((0, ca._)`${u} !== undefined`, () => {
        (n.assign(o, u), x2s(t, u));
      }));
    function c(m) {
      switch (m) {
        case "string":
          n.elseIf((0, ca._)`${a} == "number" || ${a} == "boolean"`)
            .assign(u, (0, ca._)`"" + ${o}`)
            .elseIf((0, ca._)`${o} === null`)
            .assign(u, (0, ca._)`""`);
          return;
        case "number":
          n.elseIf(
            (0, ca._)`${a} == "boolean" || ${o} === null
              || (${a} == "string" && ${o} && ${o} == +${o})`,
          ).assign(u, (0, ca._)`+${o}`);
          return;
        case "integer":
          n.elseIf(
            (0, ca._)`${a} === "boolean" || ${o} === null
              || (${a} === "string" && ${o} && ${o} == +${o} && !(${o} % 1))`,
          ).assign(u, (0, ca._)`+${o}`);
          return;
        case "boolean":
          n.elseIf((0, ca._)`${o} === "false" || ${o} === 0 || ${o} === null`)
            .assign(u, !1)
            .elseIf((0, ca._)`${o} === "true" || ${o} === 1`)
            .assign(u, !0);
          return;
        case "null":
          (n.elseIf((0, ca._)`${o} === "" || ${o} === 0 || ${o} === false`), n.assign(u, null));
          return;
        case "array":
          n.elseIf(
            (0, ca._)`${a} === "string" || ${a} === "number"
              || ${a} === "boolean" || ${o} === null`,
          ).assign(u, (0, ca._)`[${o}]`);
      }
    }
  }
  function x2s({ gen: t, parentData: e, parentDataProperty: r }, n) {
    t.if((0, ca._)`${e} !== undefined`, () => t.assign((0, ca._)`${e}[${r}]`, n));
  }
  function nQt(t, e, r, n = xse.Correct) {
    let o = n === xse.Correct ? ca.operators.EQ : ca.operators.NEQ,
      s;
    switch (t) {
      case "null":
        return (0, ca._)`${e} ${o} null`;
      case "array":
        s = (0, ca._)`Array.isArray(${e})`;
        break;
      case "object":
        s = (0, ca._)`${e} && typeof ${e} == "object" && !Array.isArray(${e})`;
        break;
      case "integer":
        s = a((0, ca._)`!(${e} % 1) && !isNaN(${e})`);
        break;
      case "number":
        s = a();
        break;
      default:
        return (0, ca._)`typeof ${e} ${o} ${t}`;
    }
    return n === xse.Correct ? s : (0, ca.not)(s);
    function a(u = ca.nil) {
      return (0, ca.and)((0, ca._)`typeof ${e} == "number"`, u, r ? (0, ca._)`isFinite(${e})` : ca.nil);
    }
  }
  Vb.checkDataType = nQt;
  function iQt(t, e, r, n) {
    if (t.length === 1) return nQt(t[0], e, r, n);
    let o,
      s = (0, s5n.toHash)(t);
    if (s.array && s.object) {
      let a = (0, ca._)`typeof ${e} != "object"`;
      ((o = s.null ? a : (0, ca._)`!${e} || ${a}`), delete s.null, delete s.array, delete s.object);
    } else o = ca.nil;
    s.number && delete s.integer;
    for (let a in s) o = (0, ca.and)(o, nQt(a, e, r, n));
    return o;
  }
  Vb.checkDataTypes = iQt;
  var T2s = {
    message: ({ schema: t }) => `must be ${t}`,
    params: ({ schema: t, schemaValue: e }) =>
      typeof t == "string" ? (0, ca._)`{type: ${t}}` : (0, ca._)`{type: ${e}}`,
  };
  function oQt(t) {
    let e = D2s(t);
    (0, E2s.reportError)(e, T2s);
  }
  Vb.reportTypeError = oQt;
  function D2s(t) {
    let { gen: e, data: r, schema: n } = t,
      o = (0, s5n.schemaRefOrVal)(t, n, "type");
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