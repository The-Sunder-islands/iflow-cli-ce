/**
 * @module R8e
 * @category utils/oop
 * @label oop
 * @position 805 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (R8e) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var R8e = T((Gb) => {
  "use strict";
  Object.defineProperty(Gb, "__esModule", { value: !0 });
  Gb.reportTypeError =
    Gb.checkDataTypes =
    Gb.checkDataType =
    Gb.coerceAndCheckDataType =
    Gb.getJSONTypes =
    Gb.getSchemaTypes =
    Gb.DataType =
      void 0;
  var jfs = TUt(),
    Qfs = DUt(),
    Gfs = I8e(),
    ua = _a(),
    H3n = nc(),
    Yoe;
  (function (t) {
    ((t[(t.Correct = 0)] = "Correct"), (t[(t.Wrong = 1)] = "Wrong"));
  })(Yoe || (Gb.DataType = Yoe = {}));
  function qfs(t) {
    let e = V3n(t.type);
    if (e.includes("null")) {
      if (t.nullable === !1) throw new Error("type: null contradicts nullable: false");
    } else {
      if (!e.length && t.nullable !== void 0) throw new Error('"nullable" cannot be used without "type"');
      t.nullable === !0 && e.push("null");
    }
    return e;
  }
  Gb.getSchemaTypes = qfs;
  function V3n(t) {
    let e = Array.isArray(t) ? t : t ? [t] : [];
    if (e.every(jfs.isJSONType)) return e;
    throw new Error("type must be JSONType or JSONType[]: " + e.join(","));
  }
  Gb.getJSONTypes = V3n;
  function Hfs(t, e) {
    let { gen: r, data: n, opts: o } = t,
      s = Vfs(e, o.coerceTypes),
      a = e.length > 0 && !(s.length === 0 && e.length === 1 && (0, Qfs.schemaHasRulesForType)(t, e[0]));
    if (a) {
      let u = RUt(e, n, o.strictNumbers, Yoe.Wrong);
      r.if(u, () => {
        s.length ? Wfs(t, e, s) : kUt(t);
      });
    }
    return a;
  }
  Gb.coerceAndCheckDataType = Hfs;
  var W3n = new Set(["string", "number", "integer", "boolean", "null"]);
  function Vfs(t, e) {
    return e ? t.filter((r) => W3n.has(r) || (e === "array" && r === "array")) : [];
  }
  function Wfs(t, e, r) {
    let { gen: n, data: o, opts: s } = t,
      a = n.let("dataType", (0, ua._)`typeof ${o}`),
      u = n.let("coerced", (0, ua._)`undefined`);
    (s.coerceTypes === "array" &&
      n.if((0, ua._)`${a} == 'object' && Array.isArray(${o}) && ${o}.length == 1`, () =>
        n
          .assign(o, (0, ua._)`${o}[0]`)
          .assign(a, (0, ua._)`typeof ${o}`)
          .if(RUt(e, o, s.strictNumbers), () => n.assign(u, o)),
      ),
      n.if((0, ua._)`${u} !== undefined`));
    for (let m of r) (W3n.has(m) || (m === "array" && s.coerceTypes === "array")) && c(m);
    (n.else(),
      kUt(t),
      n.endIf(),
      n.if((0, ua._)`${u} !== undefined`, () => {
        (n.assign(o, u), zfs(t, u));
      }));
    function c(m) {
      switch (m) {
        case "string":
          n.elseIf((0, ua._)`${a} == "number" || ${a} == "boolean"`)
            .assign(u, (0, ua._)`"" + ${o}`)
            .elseIf((0, ua._)`${o} === null`)
            .assign(u, (0, ua._)`""`);
          return;
        case "number":
          n.elseIf(
            (0, ua._)`${a} == "boolean" || ${o} === null
              || (${a} == "string" && ${o} && ${o} == +${o})`,
          ).assign(u, (0, ua._)`+${o}`);
          return;
        case "integer":
          n.elseIf(
            (0, ua._)`${a} === "boolean" || ${o} === null
              || (${a} === "string" && ${o} && ${o} == +${o} && !(${o} % 1))`,
          ).assign(u, (0, ua._)`+${o}`);
          return;
        case "boolean":
          n.elseIf((0, ua._)`${o} === "false" || ${o} === 0 || ${o} === null`)
            .assign(u, !1)
            .elseIf((0, ua._)`${o} === "true" || ${o} === 1`)
            .assign(u, !0);
          return;
        case "null":
          (n.elseIf((0, ua._)`${o} === "" || ${o} === 0 || ${o} === false`), n.assign(u, null));
          return;
        case "array":
          n.elseIf(
            (0, ua._)`${a} === "string" || ${a} === "number"
              || ${a} === "boolean" || ${o} === null`,
          ).assign(u, (0, ua._)`[${o}]`);
      }
    }
  }
  function zfs({ gen: t, parentData: e, parentDataProperty: r }, n) {
    t.if((0, ua._)`${e} !== undefined`, () => t.assign((0, ua._)`${e}[${r}]`, n));
  }
  function IUt(t, e, r, n = Yoe.Correct) {
    let o = n === Yoe.Correct ? ua.operators.EQ : ua.operators.NEQ,
      s;
    switch (t) {
      case "null":
        return (0, ua._)`${e} ${o} null`;
      case "array":
        s = (0, ua._)`Array.isArray(${e})`;
        break;
      case "object":
        s = (0, ua._)`${e} && typeof ${e} == "object" && !Array.isArray(${e})`;
        break;
      case "integer":
        s = a((0, ua._)`!(${e} % 1) && !isNaN(${e})`);
        break;
      case "number":
        s = a();
        break;
      default:
        return (0, ua._)`typeof ${e} ${o} ${t}`;
    }
    return n === Yoe.Correct ? s : (0, ua.not)(s);
    function a(u = ua.nil) {
      return (0, ua.and)((0, ua._)`typeof ${e} == "number"`, u, r ? (0, ua._)`isFinite(${e})` : ua.nil);
    }
  }
  Gb.checkDataType = IUt;
  function RUt(t, e, r, n) {
    if (t.length === 1) return IUt(t[0], e, r, n);
    let o,
      s = (0, H3n.toHash)(t);
    if (s.array && s.object) {
      let a = (0, ua._)`typeof ${e} != "object"`;
      ((o = s.null ? a : (0, ua._)`!${e} || ${a}`), delete s.null, delete s.array, delete s.object);
    } else o = ua.nil;
    s.number && delete s.integer;
    for (let a in s) o = (0, ua.and)(o, IUt(a, e, r, n));
    return o;
  }
  Gb.checkDataTypes = RUt;
  var Yfs = {
    message: ({ schema: t }) => `must be ${t}`,
    params: ({ schema: t, schemaValue: e }) =>
      typeof t == "string" ? (0, ua._)`{type: ${t}}` : (0, ua._)`{type: ${e}}`,
  };
  function kUt(t) {
    let e = Kfs(t);
    (0, Gfs.reportError)(e, Yfs);
  }
  Gb.reportTypeError = kUt;
  function Kfs(t) {
    let { gen: e, data: r, schema: n } = t,
      o = (0, H3n.schemaRefOrVal)(t, n, "type");
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