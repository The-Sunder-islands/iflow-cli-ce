/**
 * @module Eti
 * @category app/core
 * @label iflow-core
 * @position 1552 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Eti) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Eti = T((QCc, _ti) => {
  "use strict";
  var {
      createInflate: icr,
      createGunzip: bti,
      createBrotliDecompress: K1a,
      createZstdDecompress: J1a,
    } = Ae("node:zlib"),
    { pipeline: X1a } = Ae("node:stream"),
    Z1a = wle(),
    { runtimeFeatures: efa } = PO(),
    Ati = {
      gzip: bti,
      "x-gzip": bti,
      br: K1a,
      deflate: icr,
      compress: icr,
      "x-compress": icr,
      ...(efa.has("zstd") ? { zstd: J1a } : {}),
    },
    tfa = [204, 304],
    yti = !1,
    ocr = class extends Z1a {
      #e = [];
      #t;
      #r;
      #n;
      constructor(e, { skipStatusCodes: r = tfa, skipErrorResponses: n = !0 } = {}) {
        (super(e), (this.#r = r), (this.#n = n));
      }
      #i(e, r) {
        return !!(!e || r < 200 || this.#r.includes(r) || (this.#n && r >= 400));
      }
      #o(e) {
        let r = e.split(","),
          n = 5;
        if (r.length > n)
          throw new Error(`too many content-encodings in response: ${r.length}, maximum allowed is ${n}`);
        let o = [];
        for (let s = r.length - 1; s >= 0; s--) {
          let a = r[s].trim();
          if (a) {
            if (!Ati[a]) return ((o.length = 0), o);
            o.push(Ati[a]());
          }
        }
        return o;
      }
      #u(e, r) {
        (e.on("readable", () => {
          let n;
          for (; (n = e.read()) !== null && super.onResponseData(r, n) !== !1; );
        }),
          e.on("error", (n) => {
            super.onResponseError(r, n);
          }));
      }
      #a(e) {
        let r = this.#e[0];
        (this.#u(r, e),
          r.on("end", () => {
            super.onResponseEnd(e, {});
          }));
      }
      #s(e) {
        let r = this.#e[this.#e.length - 1];
        (this.#u(r, e),
          (this.#t = X1a(this.#e, (n) => {
            if (n) {
              super.onResponseError(e, n);
              return;
            }
            super.onResponseEnd(e, {});
          })));
      }
      #l() {
        ((this.#e.length = 0), (this.#t = null));
      }
      onResponseStart(e, r, n, o) {
        let s = n["content-encoding"];
        if (this.#i(s, r)) return super.onResponseStart(e, r, n, o);
        let a = this.#o(s.toLowerCase());
        if (a.length === 0) return (this.#l(), super.onResponseStart(e, r, n, o));
        this.#e = a;
        let { "content-encoding": u, "content-length": c, ...m } = n;
        (this.#e.length === 1 ? this.#a(e) : this.#s(e), super.onResponseStart(e, r, m, o));
      }
      onResponseData(e, r) {
        if (this.#e.length > 0) {
          this.#e[0].write(r);
          return;
        }
        super.onResponseData(e, r);
      }
      onResponseEnd(e, r) {
        if (this.#e.length > 0) {
          (this.#e[0].end(), this.#l());
          return;
        }
        super.onResponseEnd(e, r);
      }
      onResponseError(e, r) {
        if (this.#e.length > 0) {
          for (let n of this.#e) n.destroy(r);
          this.#l();
        }
        super.onResponseError(e, r);
      }
    };
  function rfa(t = {}) {
    return (
      yti ||
        (process.emitWarning("DecompressInterceptor is experimental and subject to change", "ExperimentalWarning"),
        (yti = !0)),
      (e) => (r, n) => {
        let o = new ocr(n, t);
        return e(r, o);
      }
    );
  }
  _ti.exports = rfa;
});