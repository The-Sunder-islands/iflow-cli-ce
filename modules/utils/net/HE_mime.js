/**
 * @module HE
 * @category utils/net
 * @label mime
 * @position 1497 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (HE) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var HE = T((Mvc, zKn) => {
  "use strict";
  var Mit = Ae("node:assert"),
    {
      forgivingBase64: Zsa,
      collectASequenceOfCodePoints: Osr,
      collectASequenceOfCodePointsFast: Lve,
      isomorphicDecode: eaa,
      removeASCIIWhitespace: taa,
      removeChars: raa,
    } = NO(),
    naa = new TextEncoder(),
    Mve = /^[-!#$%&'*+.^_|~A-Za-z0-9]+$/u,
    iaa = /[\u000A\u000D\u0009\u0020]/u,
    oaa = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/u;
  function saa(t) {
    Mit(t.protocol === "data:");
    let e = HKn(t, !0);
    e = e.slice(5);
    let r = { position: 0 },
      n = Lve(",", e, r),
      o = n.length;
    if (((n = taa(n, !0, !0)), r.position >= e.length)) return "failure";
    r.position++;
    let s = e.slice(o + 1),
      a = VKn(s);
    if (/;(?:\u0020*)base64$/iu.test(n)) {
      let c = eaa(a);
      if (((a = Zsa(c)), a === "failure")) return "failure";
      ((n = n.slice(0, -6)), (n = n.replace(/(\u0020+)$/u, "")), (n = n.slice(0, -1)));
    }
    n.startsWith(";") && (n = "text/plain" + n);
    let u = Nsr(n);
    return (u === "failure" && (u = Nsr("text/plain;charset=US-ASCII")), { mimeType: u, body: a });
  }
  function HKn(t, e = !1) {
    if (!e) return t.href;
    let r = t.href,
      n = t.hash.length,
      o = n === 0 ? r : r.substring(0, r.length - n);
    return !n && r.endsWith("#") ? o.slice(0, -1) : o;
  }
  function VKn(t) {
    let e = naa.encode(t);
    return aaa(e);
  }
  function GKn(t) {
    return (t >= 48 && t <= 57) || (t >= 65 && t <= 70) || (t >= 97 && t <= 102);
  }
  function qKn(t) {
    return t >= 48 && t <= 57 ? t - 48 : (t & 223) - 55;
  }
  function aaa(t) {
    let e = t.length,
      r = new Uint8Array(e),
      n = 0,
      o = 0;
    for (; o < e; ) {
      let s = t[o];
      (s !== 37
        ? (r[n++] = s)
        : s === 37 && !(GKn(t[o + 1]) && GKn(t[o + 2]))
          ? (r[n++] = 37)
          : ((r[n++] = (qKn(t[o + 1]) << 4) | qKn(t[o + 2])), (o += 2)),
        ++o);
    }
    return e === n ? r : r.subarray(0, n);
  }
  function Nsr(t) {
    t = Lit(t, !0, !0);
    let e = { position: 0 },
      r = Lve("/", t, e);
    if (r.length === 0 || !Mve.test(r) || e.position >= t.length) return "failure";
    e.position++;
    let n = Lve(";", t, e);
    if (((n = Lit(n, !1, !0)), n.length === 0 || !Mve.test(n))) return "failure";
    let o = r.toLowerCase(),
      s = n.toLowerCase(),
      a = { type: o, subtype: s, parameters: new Map(), essence: `${o}/${s}` };
    for (; e.position < t.length; ) {
      (e.position++, Osr((m) => iaa.test(m), t, e));
      let u = Osr((m) => m !== ";" && m !== "=", t, e);
      if (((u = u.toLowerCase()), e.position < t.length)) {
        if (t[e.position] === ";") continue;
        e.position++;
      }
      if (e.position >= t.length) break;
      let c = null;
      if (t[e.position] === '"') ((c = WKn(t, e, !0)), Lve(";", t, e));
      else if (((c = Lve(";", t, e)), (c = Lit(c, !1, !0)), c.length === 0)) continue;
      u.length !== 0 &&
        Mve.test(u) &&
        (c.length === 0 || oaa.test(c)) &&
        !a.parameters.has(u) &&
        a.parameters.set(u, c);
    }
    return a;
  }
  function WKn(t, e, r = !1) {
    let n = e.position,
      o = "";
    for (
      Mit(t[e.position] === '"'), e.position++;
      (o += Osr((a) => a !== '"' && a !== "\\", t, e)), !(e.position >= t.length);
    ) {
      let s = t[e.position];
      if ((e.position++, s === "\\")) {
        if (e.position >= t.length) {
          o += "\\";
          break;
        }
        ((o += t[e.position]), e.position++);
      } else {
        Mit(s === '"');
        break;
      }
    }
    return r ? o : t.slice(n, e.position);
  }
  function uaa(t) {
    Mit(t !== "failure");
    let { parameters: e, essence: r } = t,
      n = r;
    for (let [o, s] of e.entries())
      ((n += ";"),
        (n += o),
        (n += "="),
        Mve.test(s) || ((s = s.replace(/[\\"]/gu, "\\$&")), (s = '"' + s), (s += '"')),
        (n += s));
    return n;
  }
  function caa(t) {
    return t === 13 || t === 10 || t === 9 || t === 32;
  }
  function Lit(t, e = !0, r = !0) {
    return raa(t, e, r, caa);
  }
  function laa(t) {
    switch (t.essence) {
      case "application/ecmascript":
      case "application/javascript":
      case "application/x-ecmascript":
      case "application/x-javascript":
      case "text/ecmascript":
      case "text/javascript":
      case "text/javascript1.0":
      case "text/javascript1.1":
      case "text/javascript1.2":
      case "text/javascript1.3":
      case "text/javascript1.4":
      case "text/javascript1.5":
      case "text/jscript":
      case "text/livescript":
      case "text/x-ecmascript":
      case "text/x-javascript":
        return "text/javascript";
      case "application/json":
      case "text/json":
        return "application/json";
      case "image/svg+xml":
        return "image/svg+xml";
      case "text/xml":
      case "application/xml":
        return "application/xml";
    }
    return t.subtype.endsWith("+json") ? "application/json" : t.subtype.endsWith("+xml") ? "application/xml" : "";
  }
  zKn.exports = {
    dataURLProcessor: saa,
    URLSerializer: HKn,
    stringPercentDecode: VKn,
    parseMIMEType: Nsr,
    collectAnHTTPQuotedString: WKn,
    serializeAMimeType: uaa,
    removeHTTPWhitespace: Lit,
    minimizeSupportedMimeType: laa,
    HTTP_TOKEN_CODEPOINTS: Mve,
  };
});