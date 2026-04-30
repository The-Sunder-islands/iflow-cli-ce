/**
 * @module aY
 * @category network/ws
 * @label websocket
 * @position 1569 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (aY) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var aY = T((a4c, oni) => {
  "use strict";
  var { states: ast, opcodes: Ple } = TU(),
    { isUtf8: Kha } = Ae("node:buffer"),
    { removeHTTPWhitespace: tni } = HE(),
    { collectASequenceOfCodePointsFast: Jha } = NO();
  function Xha(t) {
    return t === ast.CONNECTING;
  }
  function Zha(t) {
    return t === ast.OPEN;
  }
  function e3a(t) {
    return t === ast.CLOSING;
  }
  function t3a(t) {
    return t === ast.CLOSED;
  }
  function r3a(t, e, r = (o, s) => new Event(o, s), n = {}) {
    let o = r(t, n);
    e.dispatchEvent(o);
  }
  function n3a(t, e, r) {
    t.onMessage(e, r);
  }
  function i3a(t) {
    return t.byteLength === t.buffer.byteLength ? t.buffer : new Uint8Array(t).buffer;
  }
  function o3a(t) {
    if (t.length === 0) return !1;
    for (let e = 0; e < t.length; ++e) {
      let r = t.charCodeAt(e);
      if (
        r < 33 ||
        r > 126 ||
        r === 34 ||
        r === 40 ||
        r === 41 ||
        r === 44 ||
        r === 47 ||
        r === 58 ||
        r === 59 ||
        r === 60 ||
        r === 61 ||
        r === 62 ||
        r === 63 ||
        r === 64 ||
        r === 91 ||
        r === 92 ||
        r === 93 ||
        r === 123 ||
        r === 125
      )
        return !1;
    }
    return !0;
  }
  function s3a(t) {
    return t >= 1e3 && t < 1015 ? t !== 1004 && t !== 1005 && t !== 1006 : t >= 3e3 && t <= 4999;
  }
  function rni(t) {
    return t === Ple.CLOSE || t === Ple.PING || t === Ple.PONG;
  }
  function nni(t) {
    return t === Ple.CONTINUATION;
  }
  function ini(t) {
    return t === Ple.TEXT || t === Ple.BINARY;
  }
  function a3a(t) {
    return ini(t) || nni(t) || rni(t);
  }
  function u3a(t) {
    let e = { position: 0 },
      r = new Map();
    for (; e.position < t.length; ) {
      let n = Jha(";", t, e),
        [o, s = ""] = n.split("=", 2);
      (r.set(tni(o, !0, !1), tni(s, !1, !0)), e.position++);
    }
    return r;
  }
  function c3a(t) {
    for (let e = 0; e < t.length; e++) {
      let r = t.charCodeAt(e);
      if (r < 48 || r > 57) return !1;
    }
    return !0;
  }
  function l3a(t, e) {
    let r;
    try {
      r = new URL(t, e);
    } catch (n) {
      throw new DOMException(n, "SyntaxError");
    }
    if (
      (r.protocol === "http:" ? (r.protocol = "ws:") : r.protocol === "https:" && (r.protocol = "wss:"),
      r.protocol !== "ws:" && r.protocol !== "wss:")
    )
      throw new DOMException("expected a ws: or wss: url", "SyntaxError");
    if (r.hash.length || r.href.endsWith("#")) throw new DOMException("hash", "SyntaxError");
    return r;
  }
  function m3a(t, e) {
    if (t !== null && t !== 1e3 && (t < 3e3 || t > 4999)) throw new DOMException("invalid code", "InvalidAccessError");
    if (e !== null) {
      let r = Buffer.byteLength(e);
      if (r > 123) throw new DOMException(`Reason must be less than 123 bytes; received ${r}`, "SyntaxError");
    }
  }
  var d3a = (() => {
    if (typeof process.versions.icu == "string") {
      let t = new TextDecoder("utf-8", { fatal: !0 });
      return t.decode.bind(t);
    }
    return function (t) {
      if (Kha(t)) return t.toString("utf-8");
      throw new TypeError("Invalid utf-8 received.");
    };
  })();
  oni.exports = {
    isConnecting: Xha,
    isEstablished: Zha,
    isClosing: e3a,
    isClosed: t3a,
    fireEvent: r3a,
    isValidSubprotocol: o3a,
    isValidStatusCode: s3a,
    websocketMessageReceived: n3a,
    utf8Decode: d3a,
    isControlFrame: rni,
    isContinuationFrame: nni,
    isTextBinaryFrame: ini,
    isValidOpcode: a3a,
    parseExtensions: u3a,
    isValidClientWindowBits: c3a,
    toArrayBuffer: i3a,
    getURLRecord: l3a,
    validateCloseCodeAndReason: m3a,
  };
});