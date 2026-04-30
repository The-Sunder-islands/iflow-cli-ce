/**
 * @module lZn
 * @category utils/net
 * @label mime
 * @position 1518 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (lZn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var lZn = T((sCc, cZn) => {
  "use strict";
  var oZn = Ae("node:assert"),
    { Readable: $0a } = Ae("node:stream"),
    { RequestAbortedError: sZn, NotSupportedError: j0a, InvalidArgumentError: Q0a, AbortError: hot } = da(),
    aZn = ks(),
    { ReadableStreamFrom: G0a } = ks(),
    Y6 = Symbol("kConsume"),
    got = Symbol("kReading"),
    Kz = Symbol("kBody"),
    rZn = Symbol("kAbort"),
    uZn = Symbol("kContentType"),
    Var = Symbol("kContentLength"),
    War = Symbol("kUsed"),
    bot = Symbol("kBytesRead"),
    q0a = () => {},
    zar = class extends $0a {
      constructor({ resume: e, abort: r, contentType: n = "", contentLength: o, highWaterMark: s = 64 * 1024 }) {
        (super({ autoDestroy: !0, read: e, highWaterMark: s }),
          (this._readableState.dataEmitted = !1),
          (this[rZn] = r),
          (this[Y6] = null),
          (this[bot] = 0),
          (this[Kz] = null),
          (this[War] = !1),
          (this[uZn] = n),
          (this[Var] = Number.isFinite(o) ? o : null),
          (this[got] = !1));
      }
      _destroy(e, r) {
        (!e && !this._readableState.endEmitted && (e = new sZn()),
          e && this[rZn](),
          this[War] ? r(e) : setImmediate(r, e));
      }
      on(e, r) {
        return ((e === "data" || e === "readable") && ((this[got] = !0), (this[War] = !0)), super.on(e, r));
      }
      addListener(e, r) {
        return this.on(e, r);
      }
      off(e, r) {
        let n = super.off(e, r);
        return (
          (e === "data" || e === "readable") &&
            (this[got] = this.listenerCount("data") > 0 || this.listenerCount("readable") > 0),
          n
        );
      }
      removeListener(e, r) {
        return this.off(e, r);
      }
      push(e) {
        return e && ((this[bot] += e.length), this[Y6])
          ? (Kar(this[Y6], e), this[got] ? super.push(e) : !0)
          : super.push(e);
      }
      text() {
        return lCe(this, "text");
      }
      json() {
        return lCe(this, "json");
      }
      blob() {
        return lCe(this, "blob");
      }
      bytes() {
        return lCe(this, "bytes");
      }
      arrayBuffer() {
        return lCe(this, "arrayBuffer");
      }
      async formData() {
        throw new j0a();
      }
      get bodyUsed() {
        return aZn.isDisturbed(this);
      }
      get body() {
        return (
          this[Kz] || ((this[Kz] = G0a(this)), this[Y6] && (this[Kz].getReader(), oZn(this[Kz].locked))),
          this[Kz]
        );
      }
      dump(e) {
        let r = e?.signal;
        if (r != null && (typeof r != "object" || !("aborted" in r)))
          return Promise.reject(new Q0a("signal must be an AbortSignal"));
        let n = e?.limit && Number.isFinite(e.limit) ? e.limit : 128 * 1024;
        return r?.aborted
          ? Promise.reject(r.reason ?? new hot())
          : this._readableState.closeEmitted
            ? Promise.resolve(null)
            : new Promise((o, s) => {
                if ((((this[Var] && this[Var] > n) || this[bot] > n) && this.destroy(new hot()), r)) {
                  let a = () => {
                    this.destroy(r.reason ?? new hot());
                  };
                  (r.addEventListener("abort", a),
                    this.on("close", function () {
                      (r.removeEventListener("abort", a), r.aborted ? s(r.reason ?? new hot()) : o(null));
                    }));
                } else this.on("close", o);
                this.on("error", q0a)
                  .on("data", () => {
                    this[bot] > n && this.destroy();
                  })
                  .resume();
              });
      }
      setEncoding(e) {
        return (Buffer.isEncoding(e) && (this._readableState.encoding = e), this);
      }
    };
  function H0a(t) {
    return t[Kz]?.locked === !0 || t[Y6] !== null;
  }
  function V0a(t) {
    return aZn.isDisturbed(t) || H0a(t);
  }
  function lCe(t, e) {
    return (
      oZn(!t[Y6]),
      new Promise((r, n) => {
        if (V0a(t)) {
          let o = t._readableState;
          o.destroyed && o.closeEmitted === !1
            ? t.on("error", n).on("close", () => {
                n(new TypeError("unusable"));
              })
            : n(o.errored ?? new TypeError("unusable"));
        } else
          queueMicrotask(() => {
            ((t[Y6] = { type: e, stream: t, resolve: r, reject: n, length: 0, body: [] }),
              t
                .on("error", function (o) {
                  Jar(this[Y6], o);
                })
                .on("close", function () {
                  this[Y6].body !== null && Jar(this[Y6], new sZn());
                }),
              W0a(t[Y6]));
          });
      })
    );
  }
  function W0a(t) {
    if (t.body === null) return;
    let { _readableState: e } = t.stream;
    if (e.bufferIndex) {
      let r = e.bufferIndex,
        n = e.buffer.length;
      for (let o = r; o < n; o++) Kar(t, e.buffer[o]);
    } else for (let r of e.buffer) Kar(t, r);
    for (
      e.endEmitted
        ? iZn(this[Y6], this._readableState.encoding)
        : t.stream.on("end", function () {
            iZn(this[Y6], this._readableState.encoding);
          }),
        t.stream.resume();
      t.stream.read() != null;
    );
  }
  function Yar(t, e, r) {
    if (t.length === 0 || e === 0) return "";
    let n = t.length === 1 ? t[0] : Buffer.concat(t, e),
      o = n.length,
      s = o > 2 && n[0] === 239 && n[1] === 187 && n[2] === 191 ? 3 : 0;
    return !r || r === "utf8" || r === "utf-8" ? n.utf8Slice(s, o) : n.subarray(s, o).toString(r);
  }
  function nZn(t, e) {
    if (t.length === 0 || e === 0) return new Uint8Array(0);
    if (t.length === 1) return new Uint8Array(t[0]);
    let r = new Uint8Array(Buffer.allocUnsafeSlow(e).buffer),
      n = 0;
    for (let o = 0; o < t.length; ++o) {
      let s = t[o];
      (r.set(s, n), (n += s.length));
    }
    return r;
  }
  function iZn(t, e) {
    let { type: r, body: n, resolve: o, stream: s, length: a } = t;
    try {
      (r === "text"
        ? o(Yar(n, a, e))
        : r === "json"
          ? o(JSON.parse(Yar(n, a, e)))
          : r === "arrayBuffer"
            ? o(nZn(n, a).buffer)
            : r === "blob"
              ? o(new Blob(n, { type: s[uZn] }))
              : r === "bytes" && o(nZn(n, a)),
        Jar(t));
    } catch (u) {
      s.destroy(u);
    }
  }
  function Kar(t, e) {
    ((t.length += e.length), t.body.push(e));
  }
  function Jar(t, e) {
    t.body !== null &&
      (e ? t.reject(e) : t.resolve(),
      (t.type = null),
      (t.stream = null),
      (t.resolve = null),
      (t.reject = null),
      (t.length = 0),
      (t.body = null));
  }
  cZn.exports = { Readable: zar, chunksDecode: Yar };
});