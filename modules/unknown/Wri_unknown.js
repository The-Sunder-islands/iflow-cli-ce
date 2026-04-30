/**
 * @module Wri
 * @category unknown
 * @label unknown
 * @position 1565 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Wri) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Wri = T((n4c, Vri) => {
  "use strict";
  var { collectASequenceOfCodePointsFast: rst } = NO(),
    { maxNameValuePairSize: Dha, maxAttributeValueSize: Iha } = $ri(),
    { isCTLExcludingHtab: Rha } = Tcr(),
    kha = Ae("node:assert"),
    { unescape: Oha } = Ae("node:querystring");
  function Nha(t) {
    if (Rha(t)) return null;
    let e = "",
      r = "",
      n = "",
      o = "";
    if (t.includes(";")) {
      let s = { position: 0 };
      ((e = rst(";", t, s)), (r = t.slice(s.position)));
    } else e = t;
    if (!e.includes("=")) o = e;
    else {
      let s = { position: 0 };
      ((n = rst("=", e, s)), (o = e.slice(s.position + 1)));
    }
    return ((n = n.trim()), (o = o.trim()), n.length + o.length > Dha ? null : { name: n, value: Oha(o), ...Ole(r) });
  }
  function Ole(t, e = {}) {
    if (t.length === 0) return e;
    (kha(t[0] === ";"), (t = t.slice(1)));
    let r = "";
    t.includes(";") ? ((r = rst(";", t, { position: 0 })), (t = t.slice(r.length))) : ((r = t), (t = ""));
    let n = "",
      o = "";
    if (r.includes("=")) {
      let a = { position: 0 };
      ((n = rst("=", r, a)), (o = r.slice(a.position + 1)));
    } else n = r;
    if (((n = n.trim()), (o = o.trim()), o.length > Iha)) return Ole(t, e);
    let s = n.toLowerCase();
    if (s === "expires") {
      let a = new Date(o);
      e.expires = a;
    } else if (s === "max-age") {
      let a = o.charCodeAt(0);
      if (((a < 48 || a > 57) && o[0] !== "-") || !/^\d+$/.test(o)) return Ole(t, e);
      let u = Number(o);
      e.maxAge = u;
    } else if (s === "domain") {
      let a = o;
      (a[0] === "." && (a = a.slice(1)), (a = a.toLowerCase()), (e.domain = a));
    } else if (s === "path") {
      let a = "";
      (o.length === 0 || o[0] !== "/" ? (a = "/") : (a = o), (e.path = a));
    } else if (s === "secure") e.secure = !0;
    else if (s === "httponly") e.httpOnly = !0;
    else if (s === "samesite") {
      let a = "Default",
        u = o.toLowerCase();
      (u.includes("none") && (a = "None"),
        u.includes("strict") && (a = "Strict"),
        u.includes("lax") && (a = "Lax"),
        (e.sameSite = a));
    } else ((e.unparsed ??= []), e.unparsed.push(`${n}=${o}`));
    return Ole(t, e);
  }
  Vri.exports = { parseSetCookie: Nha, parseUnparsedAttributes: Ole };
});