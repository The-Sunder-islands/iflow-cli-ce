/**
 * @module ule
 * @category network/http
 * @label undici
 * @position 1503 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ule) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ule = T((qvc, xJn) => {
  "use strict";
  var Git = ks(),
    { ReadableStreamFrom: Tua, readableStreamClose: Dua, fullyReadBody: Iua, extractMimeType: Rua } = z6(),
    { FormData: EJn, setFormDataState: kua } = jit(),
    { webidl: _D } = jg(),
    Xsr = Ae("node:assert"),
    { isErrored: CJn, isDisturbed: Oua } = Ae("node:stream"),
    { isArrayBuffer: Nua } = Ae("node:util/types"),
    { serializeAMimeType: Pua } = HE(),
    { multipartFormDataParser: Bua } = yJn(),
    { createDeferredPromise: Lua } = $ve(),
    { parseJSONFromBytes: Mua } = NO(),
    { utf8DecodeBytes: Fua } = Bve(),
    { runtimeFeatures: Uua } = PO(),
    $ua = Uua.has("crypto") ? Ae("node:crypto").randomInt : (t) => Math.floor(Math.random() * t),
    Qit = new TextEncoder();
  function jua() {}
  var Qua = new FinalizationRegistry((t) => {
    let e = t.deref();
    e && !e.locked && !Oua(e) && !CJn(e) && e.cancel("Response object has been garbage collected").catch(jua);
  });
  function SJn(t, e = !1) {
    let r = null;
    (_D.is.ReadableStream(t)
      ? (r = t)
      : _D.is.Blob(t)
        ? (r = t.stream())
        : (r = new ReadableStream({
            pull(c) {
              let m = typeof o == "string" ? Qit.encode(o) : o;
              (m.byteLength && c.enqueue(m), queueMicrotask(() => Dua(c)));
            },
            start() {},
            type: "bytes",
          })),
      Xsr(_D.is.ReadableStream(r)));
    let n = null,
      o = null,
      s = null,
      a = null;
    if (typeof t == "string") ((o = t), (a = "text/plain;charset=UTF-8"));
    else if (_D.is.URLSearchParams(t)) ((o = t.toString()), (a = "application/x-www-form-urlencoded;charset=UTF-8"));
    else if (_D.is.BufferSource(t))
      o = Nua(t)
        ? new Uint8Array(t.slice())
        : new Uint8Array(t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength));
    else if (_D.is.FormData(t)) {
      let c = `----formdata-undici-0${`${$ua(1e11)}`.padStart(11, "0")}`,
        m = `--${c}\r
Content-Disposition: form-data`;
      let d = (A) => A.replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22"),
        f = (A) =>
          A.replace(
            /\r?\n|\r/g,
            `\r
`,
          ),
        p = [],
        h = new Uint8Array([13, 10]);
      s = 0;
      let g = !1;
      for (let [A, y] of t)
        if (typeof y == "string") {
          let E = Qit.encode(
            m +
              `; name="${d(f(A))}"\r
\r
${f(y)}\r
`,
          );
          (p.push(E), (s += E.byteLength));
        } else {
          let E = Qit.encode(
            `${m}; name="${d(f(A))}"` +
              (y.name ? `; filename="${d(y.name)}"` : "") +
              `\r
Content-Type: ${y.type || "application/octet-stream"}\r
\r
`,
          );
          (p.push(E, y, h), typeof y.size == "number" ? (s += E.byteLength + y.size + h.byteLength) : (g = !0));
        }
      let b = Qit.encode(`--${c}--\r
`);
      (p.push(b),
        (s += b.byteLength),
        g && (s = null),
        (o = t),
        (n = async function* () {
          for (let A of p) A.stream ? yield* A.stream() : yield A;
        }),
        (a = `multipart/form-data; boundary=${c}`));
    } else if (_D.is.Blob(t)) ((o = t), (s = t.size), t.type && (a = t.type));
    else if (typeof t[Symbol.asyncIterator] == "function") {
      if (e) throw new TypeError("keepalive");
      if (Git.isDisturbed(t) || t.locked) throw new TypeError("Response body object should not be disturbed or locked");
      r = _D.is.ReadableStream(t) ? t : Tua(t);
    }
    if (((typeof o == "string" || Git.isBuffer(o)) && (s = Buffer.byteLength(o)), n != null)) {
      let c;
      r = new ReadableStream({
        start() {
          c = n(t)[Symbol.asyncIterator]();
        },
        pull(m) {
          return c.next().then(({ value: d, done: f }) => {
            if (f)
              queueMicrotask(() => {
                (m.close(), m.byobRequest?.respond(0));
              });
            else if (!CJn(r)) {
              let p = new Uint8Array(d);
              p.byteLength && m.enqueue(p);
            }
            return m.desiredSize > 0;
          });
        },
        cancel(m) {
          return c.return();
        },
        type: "bytes",
      });
    }
    return [{ stream: r, source: o, length: s }, a];
  }
  function Gua(t, e = !1) {
    return (
      _D.is.ReadableStream(t) &&
        (Xsr(!Git.isDisturbed(t), "The body has already been consumed."), Xsr(!t.locked, "The stream is locked.")),
      SJn(t, e)
    );
  }
  function qua(t) {
    let { 0: e, 1: r } = t.stream.tee();
    return ((t.stream = e), { stream: r, length: t.length, source: t.source });
  }
  function Hua(t, e) {
    return {
      blob() {
        return ale(
          this,
          (n) => {
            let o = vJn(e(this));
            return (o === null ? (o = "") : o && (o = Pua(o)), new Blob([n], { type: o }));
          },
          t,
          e,
        );
      },
      arrayBuffer() {
        return ale(this, (n) => new Uint8Array(n).buffer, t, e);
      },
      text() {
        return ale(this, Fua, t, e);
      },
      json() {
        return ale(this, Mua, t, e);
      },
      formData() {
        return ale(
          this,
          (n) => {
            let o = vJn(e(this));
            if (o !== null)
              switch (o.essence) {
                case "multipart/form-data": {
                  let s = Bua(n, o),
                    a = new EJn();
                  return (kua(a, s), a);
                }
                case "application/x-www-form-urlencoded": {
                  let s = new URLSearchParams(n.toString()),
                    a = new EJn();
                  for (let [u, c] of s) a.append(u, c);
                  return a;
                }
              }
            throw new TypeError(
              'Content-Type was not one of "multipart/form-data" or "application/x-www-form-urlencoded".',
            );
          },
          t,
          e,
        );
      },
      bytes() {
        return ale(this, (n) => new Uint8Array(n), t, e);
      },
    };
  }
  function Vua(t, e) {
    Object.assign(t.prototype, Hua(t, e));
  }
  function ale(t, e, r, n) {
    try {
      _D.brandCheck(t, r);
    } catch (c) {
      return Promise.reject(c);
    }
    let o = n(t);
    if (wJn(o)) return Promise.reject(new TypeError("Body is unusable: Body has already been read"));
    if (o.aborted) return Promise.reject(new DOMException("The operation was aborted.", "AbortError"));
    let s = Lua(),
      a = s.reject,
      u = (c) => {
        try {
          s.resolve(e(c));
        } catch (m) {
          a(m);
        }
      };
    return o.body == null ? (u(Buffer.allocUnsafe(0)), s.promise) : (Iua(o.body, u, a), s.promise);
  }
  function wJn(t) {
    let e = t.body;
    return e != null && (e.stream.locked || Git.isDisturbed(e.stream));
  }
  function vJn(t) {
    let e = t.headersList,
      r = Rua(e);
    return r === "failure" ? null : r;
  }
  xJn.exports = {
    extractBody: SJn,
    safelyExtractBody: Gua,
    cloneBody: qua,
    mixinBody: Vua,
    streamRegistry: Qua,
    bodyUnusable: wJn,
  };
});