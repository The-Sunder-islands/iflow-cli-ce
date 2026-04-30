/**
 * @module Mno
 * @category utils/oop
 * @label oop
 * @position 1987 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Mno) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Mno = T((YIl, wvr) => {
  "use strict";
  wvr.exports = Bbu;
  wvr.exports.value = Svr;
  function Bbu(t) {
    if (t === null) throw oX("null");
    if (t === void 0) throw oX("undefined");
    if (typeof t != "object") throw oX(typeof t);
    if ((typeof t.toJSON == "function" && (t = t.toJSON()), t == null)) return null;
    let e = k9(t);
    if (e !== "table") throw oX(e);
    return Cvr("", "", t);
  }
  function oX(t) {
    return new Error("Can only stringify objects, not " + t);
  }
  function Lbu() {
    return new Error("Array values can't have mixed types");
  }
  function Rno(t) {
    return Object.keys(t).filter((e) => kno(t[e]));
  }
  function Mbu(t) {
    return Object.keys(t).filter((e) => !kno(t[e]));
  }
  function RAt(t) {
    let e = Array.isArray(t)
      ? []
      : Object.prototype.hasOwnProperty.call(t, "__proto__")
        ? { ["__proto__"]: void 0 }
        : {};
    for (let r of Object.keys(t))
      t[r] && typeof t[r].toJSON == "function" && !("toISOString" in t[r]) ? (e[r] = t[r].toJSON()) : (e[r] = t[r]);
    return e;
  }
  function Cvr(t, e, r) {
    r = RAt(r);
    var n, o;
    ((n = Rno(r)), (o = Mbu(r)));
    var s = [],
      a = e || "";
    (n.forEach((c) => {
      var m = k9(r[c]);
      m !== "undefined" && m !== "null" && s.push(a + kAt(c) + " = " + Pno(r[c], !0));
    }),
      s.length > 0 && s.push(""));
    var u = t && n.length > 0 ? e + "  " : "";
    return (
      o.forEach((c) => {
        s.push(zbu(t, u, c, r[c]));
      }),
      s.join(`
`)
    );
  }
  function kno(t) {
    switch (k9(t)) {
      case "undefined":
      case "null":
      case "integer":
      case "nan":
      case "float":
      case "boolean":
      case "string":
      case "datetime":
        return !0;
      case "array":
        return t.length === 0 || k9(t[0]) !== "table";
      case "table":
        return Object.keys(t).length === 0;
      default:
        return !1;
    }
  }
  function k9(t) {
    return t === void 0
      ? "undefined"
      : t === null
        ? "null"
        : typeof t == "bigint" || (Number.isInteger(t) && !Object.is(t, -0))
          ? "integer"
          : typeof t == "number"
            ? "float"
            : typeof t == "boolean"
              ? "boolean"
              : typeof t == "string"
                ? "string"
                : "toISOString" in t
                  ? isNaN(t)
                    ? "undefined"
                    : "datetime"
                  : Array.isArray(t)
                    ? "array"
                    : "table";
  }
  function kAt(t) {
    var e = String(t);
    return /^[-A-Za-z0-9_]+$/.test(e) ? e : Ono(e);
  }
  function Ono(t) {
    return '"' + Nno(t).replace(/"/g, '\\"') + '"';
  }
  function Fbu(t) {
    return "'" + t + "'";
  }
  function Ubu(t, e) {
    for (; e.length < t; ) e = "0" + e;
    return e;
  }
  function Nno(t) {
    return t
      .replace(/\\/g, "\\\\")
      .replace(/[\b]/g, "\\b")
      .replace(/\t/g, "\\t")
      .replace(/\n/g, "\\n")
      .replace(/\f/g, "\\f")
      .replace(/\r/g, "\\r")
      .replace(/([\u0000-\u001f\u007f])/, (e) => "\\u" + Ubu(4, e.codePointAt(0).toString(16)));
  }
  function $bu(t) {
    let e = t.split(/\n/).map((r) => Nno(r).replace(/"(?="")/g, '\\"')).join(`
`);
    return (
      e.slice(-1) === '"' &&
        (e += `\\
`),
      `"""
` +
        e +
        '"""'
    );
  }
  function Pno(t, e) {
    let r = k9(t);
    return (
      r === "string" &&
        (e && /\n/.test(t)
          ? (r = "string-multiline")
          : !/[\b\t\n\f\r']/.test(t) && /"/.test(t) && (r = "string-literal")),
      Svr(t, r)
    );
  }
  function Svr(t, e) {
    switch ((e || (e = k9(t)), e)) {
      case "string-multiline":
        return $bu(t);
      case "string":
        return Ono(t);
      case "string-literal":
        return Fbu(t);
      case "integer":
        return Bno(t);
      case "float":
        return jbu(t);
      case "boolean":
        return Qbu(t);
      case "datetime":
        return Gbu(t);
      case "array":
        return Vbu(t.filter((r) => k9(r) !== "null" && k9(r) !== "undefined" && k9(r) !== "nan"));
      case "table":
        return Wbu(t);
      default:
        throw oX(e);
    }
  }
  function Bno(t) {
    return String(t).replace(/\B(?=(\d{3})+(?!\d))/g, "_");
  }
  function jbu(t) {
    if (t === 1 / 0) return "inf";
    if (t === -1 / 0) return "-inf";
    if (Object.is(t, NaN)) return "nan";
    if (Object.is(t, -0)) return "-0.0";
    var e = String(t).split("."),
      r = e[0],
      n = e[1] || 0;
    return Bno(r) + "." + n;
  }
  function Qbu(t) {
    return String(t);
  }
  function Gbu(t) {
    return t.toISOString();
  }
  function qbu(t) {
    return t === "float" || t === "integer";
  }
  function Hbu(t) {
    var e = k9(t[0]);
    return t.every((r) => k9(r) === e) ? e : t.every((r) => qbu(k9(r))) ? "float" : "mixed";
  }
  function Lno(t) {
    let e = Hbu(t);
    if (e === "mixed") throw Lbu();
    return e;
  }
  function Vbu(t) {
    t = RAt(t);
    let e = Lno(t);
    var r = "[",
      n = t.map((o) => Svr(o, e));
    return (
      n.join(", ").length > 60 || /\n/.test(n)
        ? (r +=
            `
  ` +
            n.join(`,
  `) +
            `
`)
        : (r += " " + n.join(", ") + (n.length > 0 ? " " : "")),
      r + "]"
    );
  }
  function Wbu(t) {
    t = RAt(t);
    var e = [];
    return (
      Object.keys(t).forEach((r) => {
        e.push(kAt(r) + " = " + Pno(t[r], !1));
      }),
      "{ " + e.join(", ") + (e.length > 0 ? " " : "") + "}"
    );
  }
  function zbu(t, e, r, n) {
    var o = k9(n);
    if (o === "array") return Ybu(t, e, r, n);
    if (o === "table") return Kbu(t, e, r, n);
    throw oX(o);
  }
  function Ybu(t, e, r, n) {
    ((n = RAt(n)), Lno(n));
    var o = k9(n[0]);
    if (o !== "table") throw oX(o);
    var s = t + kAt(r),
      a = "";
    return (
      n.forEach((u) => {
        (a.length > 0 &&
          (a += `
`),
          (a +=
            e +
            "[[" +
            s +
            `]]
`),
          (a += Cvr(s + ".", e, u)));
      }),
      a
    );
  }
  function Kbu(t, e, r, n) {
    var o = t + kAt(r),
      s = "";
    return (
      Rno(n).length > 0 &&
        (s +=
          e +
          "[" +
          o +
          `]
`),
      s + Cvr(o + ".", e, n)
    );
  }
});