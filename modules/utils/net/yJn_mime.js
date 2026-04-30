/**
 * @module yJn
 * @category utils/net
 * @label mime
 * @position 1502 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (yJn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var yJn = T((Qvc, AJn) => {
  "use strict";
  var { bufferToLowerCasedHeaderName: fua } = ks(),
    { HTTP_TOKEN_CODEPOINTS: pua } = HE(),
    { makeEntry: hua } = jit(),
    { webidl: Wsr } = jg(),
    zsr = Ae("node:assert"),
    { isomorphicDecode: bJn } = NO(),
    { utf8DecodeBytes: gua } = Bve(),
    bua = Buffer.from("--"),
    Ysr = new TextDecoder();
  function Aua(t) {
    for (let e = 0; e < t.length; ++e) if ((t.charCodeAt(e) & -128) !== 0) return !1;
    return !0;
  }
  function yua(t) {
    let e = t.length;
    if (e < 27 || e > 70) return !1;
    for (let r = 0; r < e; ++r) {
      let n = t.charCodeAt(r);
      if (!((n >= 48 && n <= 57) || (n >= 65 && n <= 90) || (n >= 97 && n <= 122) || n === 39 || n === 45 || n === 95))
        return !1;
    }
    return !0;
  }
  function _ua(t, e) {
    zsr(e !== "failure" && e.essence === "multipart/form-data");
    let r = e.parameters.get("boundary");
    if (r === void 0) throw Z8("missing boundary in content-type header");
    let n = Buffer.from(`--${r}`, "utf8"),
      o = [],
      s = { position: 0 },
      a = t.indexOf(n);
    if (a === -1) throw Z8("no boundary found in multipart body");
    for (s.position = a; ; ) {
      if (t.subarray(s.position, s.position + n.length).equals(n)) s.position += n.length;
      else throw Z8("expected a value starting with -- and the boundary");
      if (Cua(t, bua, s)) return o;
      if (t[s.position] !== 13 || t[s.position + 1] !== 10) throw Z8("expected CRLF");
      s.position += 2;
      let u = vua(t, s),
        { name: c, filename: m, contentType: d, encoding: f } = u;
      s.position += 2;
      let p;
      {
        let g = t.indexOf(n.subarray(2), s.position);
        if (g === -1) throw Z8("expected boundary after body");
        ((p = t.subarray(s.position, g - 4)),
          (s.position += p.length),
          f === "base64" && (p = Buffer.from(p.toString(), "base64")));
      }
      if (t[s.position] !== 13 || t[s.position + 1] !== 10) throw Z8("expected CRLF");
      s.position += 2;
      let h;
      (m !== null
        ? ((d ??= "text/plain"), Aua(d) || (d = ""), (h = new File([p], m, { type: d })))
        : (h = gua(Buffer.from(p))),
        zsr(Wsr.is.USVString(c)),
        zsr((typeof h == "string" && Wsr.is.USVString(h)) || Wsr.is.File(h)),
        o.push(hua(c, h, m)));
    }
  }
  function Eua(t, e) {
    (t[e.position] === 59 && e.position++, VE((a) => a === 32 || a === 9, t, e));
    let r = VE((a) => Jsr(a) && a !== 61 && a !== 42, t, e);
    if (r.length === 0) return null;
    let n = r.toString("ascii").toLowerCase(),
      o = t[e.position] === 42;
    if ((o && e.position++, t[e.position] !== 61)) return null;
    (e.position++, VE((a) => a === 32 || a === 9, t, e));
    let s;
    if (o) {
      let a = VE((u) => u !== 32 && u !== 13 && u !== 10 && u !== 59, t, e);
      if (
        (a[0] !== 117 && a[0] !== 85) ||
        (a[1] !== 116 && a[1] !== 84) ||
        (a[2] !== 102 && a[2] !== 70) ||
        a[3] !== 45 ||
        a[4] !== 56
      )
        throw Z8("unknown encoding, expected utf-8''");
      s = decodeURIComponent(Ysr.decode(a.subarray(7)));
    } else if (t[e.position] === 34) {
      e.position++;
      let a = VE((u) => u !== 10 && u !== 13 && u !== 34, t, e);
      if (t[e.position] !== 34) throw Z8("Closing quote not found");
      (e.position++,
        (s = Ysr.decode(a)
          .replace(
            /%0A/gi,
            `
`,
          )
          .replace(/%0D/gi, "\r")
          .replace(/%22/g, '"')));
    } else {
      let a = VE((u) => Jsr(u) && u !== 59, t, e);
      s = Ysr.decode(a);
    }
    return { name: n, value: s };
  }
  function vua(t, e) {
    let r = null,
      n = null,
      o = null,
      s = null;
    for (;;) {
      if (t[e.position] === 13 && t[e.position + 1] === 10) {
        if (r === null) throw Z8("header name is null");
        return { name: r, filename: n, contentType: o, encoding: s };
      }
      let a = VE((u) => u !== 10 && u !== 13 && u !== 58, t, e);
      if (((a = Ksr(a, !0, !0, (u) => u === 9 || u === 32)), !pua.test(a.toString())))
        throw Z8("header name does not match the field-name token production");
      if (t[e.position] !== 58) throw Z8("expected :");
      switch ((e.position++, VE((u) => u === 32 || u === 9, t, e), fua(a))) {
        case "content-disposition": {
          if (
            ((r = n = null),
            VE((c) => Jsr(c), t, e)
              .toString("ascii")
              .toLowerCase() !== "form-data")
          )
            throw Z8("expected form-data for content-disposition header");
          for (; e.position < t.length && t[e.position] !== 13 && t[e.position + 1] !== 10; ) {
            let c = Eua(t, e);
            if (!c) break;
            c.name === "name" ? (r = c.value) : c.name === "filename" && (n = c.value);
          }
          if (r === null) throw Z8("name attribute is required in content-disposition header");
          break;
        }
        case "content-type": {
          let u = VE((c) => c !== 10 && c !== 13, t, e);
          ((u = Ksr(u, !1, !0, (c) => c === 9 || c === 32)), (o = bJn(u)));
          break;
        }
        case "content-transfer-encoding": {
          let u = VE((c) => c !== 10 && c !== 13, t, e);
          ((u = Ksr(u, !1, !0, (c) => c === 9 || c === 32)), (s = bJn(u)));
          break;
        }
        default:
          VE((u) => u !== 10 && u !== 13, t, e);
      }
      if (t[e.position] !== 13 && t[e.position + 1] !== 10) throw Z8("expected CRLF");
      e.position += 2;
    }
  }
  function VE(t, e, r) {
    let n = r.position;
    for (; n < e.length && t(e[n]); ) ++n;
    return e.subarray(r.position, (r.position = n));
  }
  function Ksr(t, e, r, n) {
    let o = 0,
      s = t.length - 1;
    if (e) for (; o < t.length && n(t[o]); ) o++;
    if (r) for (; s > 0 && n(t[s]); ) s--;
    return o === 0 && s === t.length - 1 ? t : t.subarray(o, s + 1);
  }
  function Cua(t, e, r) {
    if (t.length < e.length) return !1;
    for (let n = 0; n < e.length; n++) if (e[n] !== t[r.position + n]) return !1;
    return !0;
  }
  function Z8(t) {
    return new TypeError("Failed to parse body as FormData.", { cause: new TypeError(t) });
  }
  function Sua(t) {
    return t <= 31 || t === 127;
  }
  function wua(t) {
    return (
      t === 40 ||
      t === 41 ||
      t === 60 ||
      t === 62 ||
      t === 64 ||
      t === 44 ||
      t === 59 ||
      t === 58 ||
      t === 92 ||
      t === 34 ||
      t === 47 ||
      t === 91 ||
      t === 93 ||
      t === 63 ||
      t === 61
    );
  }
  function Jsr(t) {
    return t <= 127 && t !== 32 && t !== 9 && !Sua(t) && !wua(t);
  }
  AJn.exports = { multipartFormDataParser: _ua, validateBoundary: yua };
});
var $ve = T((Gvc, _Jn) => {
  "use strict";
  function xua() {
    let t, e;
    return {
      promise: new Promise((n, o) => {
        ((t = n), (e = o));
      }),
      resolve: t,
      reject: e,
    };
  }
  _Jn.exports = { createDeferredPromise: xua };
});