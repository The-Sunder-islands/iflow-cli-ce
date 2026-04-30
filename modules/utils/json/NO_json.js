/**
 * @module NO
 * @category utils/json
 * @label json
 * @position 1496 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (NO) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var NO = T((Lvc, QKn) => {
  "use strict";
  var UKn = Ae("node:assert"),
    { utf8DecodeBytes: Qsa } = Bve();
  function Gsa(t, e, r) {
    let n = "";
    for (; r.position < e.length && t(e[r.position]); ) ((n += e[r.position]), r.position++);
    return n;
  }
  function qsa(t, e, r) {
    let n = e.indexOf(t, r.position),
      o = r.position;
    return n === -1 ? ((r.position = e.length), e.slice(o)) : ((r.position = n), e.slice(o, r.position));
  }
  var Hsa = /[\u0009\u000A\u000C\u000D\u0020]/g;
  function Vsa(t) {
    t = t.replace(Hsa, "");
    let e = t.length;
    if (
      (e % 4 === 0 && t.charCodeAt(e - 1) === 61 && (--e, t.charCodeAt(e - 1) === 61 && --e),
      e % 4 === 1 || /[^+/0-9A-Za-z]/.test(t.length === e ? t : t.substring(0, e)))
    )
      return "failure";
    let r = Buffer.from(t, "base64");
    return new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
  }
  function $Kn(t) {
    return t === 9 || t === 10 || t === 12 || t === 13 || t === 32;
  }
  function Wsa(t) {
    let e = t.length;
    if (65535 > e) return String.fromCharCode.apply(null, t);
    let r = "",
      n = 0,
      o = 65535;
    for (; n < e; ) (n + o > e && (o = e - n), (r += String.fromCharCode.apply(null, t.subarray(n, (n += o)))));
    return r;
  }
  var zsa = /[^\x00-\xFF]/;
  function Ysa(t) {
    return (UKn(!zsa.test(t)), t);
  }
  function Ksa(t) {
    return JSON.parse(Qsa(t));
  }
  function Jsa(t, e = !0, r = !0) {
    return jKn(t, e, r, $Kn);
  }
  function jKn(t, e, r, n) {
    let o = 0,
      s = t.length - 1;
    if (e) for (; o < t.length && n(t.charCodeAt(o)); ) o++;
    if (r) for (; s > 0 && n(t.charCodeAt(s)); ) s--;
    return o === 0 && s === t.length - 1 ? t : t.slice(o, s + 1);
  }
  function Xsa(t) {
    let e = JSON.stringify(t);
    if (e === void 0) throw new TypeError("Value is not JSON serializable");
    return (UKn(typeof e == "string"), e);
  }
  QKn.exports = {
    collectASequenceOfCodePoints: Gsa,
    collectASequenceOfCodePointsFast: qsa,
    forgivingBase64: Vsa,
    isASCIIWhitespace: $Kn,
    isomorphicDecode: Wsa,
    isomorphicEncode: Ysa,
    parseJSONFromBytes: Ksa,
    removeASCIIWhitespace: Jsa,
    removeChars: jKn,
    serializeJavascriptValueToJSONString: Xsa,
  };
});