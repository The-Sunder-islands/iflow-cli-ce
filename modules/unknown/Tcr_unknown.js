/**
 * @module Tcr
 * @category unknown
 * @label unknown
 * @position 1564 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Tcr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Tcr = T((r4c, Hri) => {
  "use strict";
  function vha(t) {
    for (let e = 0; e < t.length; ++e) {
      let r = t.charCodeAt(e);
      if ((r >= 0 && r <= 8) || (r >= 10 && r <= 31) || r === 127) return !0;
    }
    return !1;
  }
  function jri(t) {
    for (let e = 0; e < t.length; ++e) {
      let r = t.charCodeAt(e);
      if (
        r < 33 ||
        r > 126 ||
        r === 34 ||
        r === 40 ||
        r === 41 ||
        r === 60 ||
        r === 62 ||
        r === 64 ||
        r === 44 ||
        r === 59 ||
        r === 58 ||
        r === 92 ||
        r === 47 ||
        r === 91 ||
        r === 93 ||
        r === 63 ||
        r === 61 ||
        r === 123 ||
        r === 125
      )
        throw new Error("Invalid cookie name");
    }
  }
  function Qri(t) {
    let e = t.length,
      r = 0;
    if (t[0] === '"') {
      if (e === 1 || t[e - 1] !== '"') throw new Error("Invalid cookie value");
      (--e, ++r);
    }
    for (; r < e; ) {
      let n = t.charCodeAt(r++);
      if (n < 33 || n > 126 || n === 34 || n === 44 || n === 59 || n === 92) throw new Error("Invalid cookie value");
    }
  }
  function Gri(t) {
    for (let e = 0; e < t.length; ++e) {
      let r = t.charCodeAt(e);
      if (r < 32 || r === 127 || r === 59) throw new Error("Invalid cookie path");
    }
  }
  function Cha(t) {
    if (t.startsWith("-") || t.endsWith(".") || t.endsWith("-")) throw new Error("Invalid cookie domain");
  }
  var Sha = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wha = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    tst = Array(61)
      .fill(0)
      .map((t, e) => e.toString().padStart(2, "0"));
  function qri(t) {
    return (
      typeof t == "number" && (t = new Date(t)),
      `${Sha[t.getUTCDay()]}, ${tst[t.getUTCDate()]} ${wha[t.getUTCMonth()]} ${t.getUTCFullYear()} ${tst[t.getUTCHours()]}:${tst[t.getUTCMinutes()]}:${tst[t.getUTCSeconds()]} GMT`
    );
  }
  function xha(t) {
    if (t < 0) throw new Error("Invalid cookie max-age");
  }
  function Tha(t) {
    if (t.name.length === 0) return null;
    (jri(t.name), Qri(t.value));
    let e = [`${t.name}=${t.value}`];
    (t.name.startsWith("__Secure-") && (t.secure = !0),
      t.name.startsWith("__Host-") && ((t.secure = !0), (t.domain = null), (t.path = "/")),
      t.secure && e.push("Secure"),
      t.httpOnly && e.push("HttpOnly"),
      typeof t.maxAge == "number" && (xha(t.maxAge), e.push(`Max-Age=${t.maxAge}`)),
      t.domain && (Cha(t.domain), e.push(`Domain=${t.domain}`)),
      t.path && (Gri(t.path), e.push(`Path=${t.path}`)),
      t.expires && t.expires.toString() !== "Invalid Date" && e.push(`Expires=${qri(t.expires)}`),
      t.sameSite && e.push(`SameSite=${t.sameSite}`));
    for (let r of t.unparsed) {
      if (!r.includes("=")) throw new Error("Invalid unparsed");
      let [n, ...o] = r.split("=");
      e.push(`${n.trim()}=${o.join("=")}`);
    }
    return e.join("; ");
  }
  Hri.exports = {
    isCTLExcludingHtab: vha,
    validateCookieName: jri,
    validateCookiePath: Gri,
    validateCookieValue: Qri,
    toIMFDate: qri,
    stringify: Tha,
  };
});