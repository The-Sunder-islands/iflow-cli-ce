/**
 * @module ecr
 * @category utils/events
 * @label events
 * @position 1549 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ecr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ecr = T((UCc, lti) => {
  "use strict";
  var { Writable: N1a } = Ae("node:stream"),
    { EventEmitter: P1a } = Ae("node:events"),
    { assertCacheKey: uti, assertCacheValue: B1a } = xle(),
    Zur = class extends P1a {
      #e = 1024;
      #t = 104857600;
      #r = 5242880;
      #n = 0;
      #i = 0;
      #o = new Map();
      #u = !1;
      constructor(e) {
        if ((super(), e)) {
          if (typeof e != "object") throw new TypeError("MemoryCacheStore options must be an object");
          if (e.maxCount !== void 0) {
            if (typeof e.maxCount != "number" || !Number.isInteger(e.maxCount) || e.maxCount < 0)
              throw new TypeError("MemoryCacheStore options.maxCount must be a non-negative integer");
            this.#e = e.maxCount;
          }
          if (e.maxSize !== void 0) {
            if (typeof e.maxSize != "number" || !Number.isInteger(e.maxSize) || e.maxSize < 0)
              throw new TypeError("MemoryCacheStore options.maxSize must be a non-negative integer");
            this.#t = e.maxSize;
          }
          if (e.maxEntrySize !== void 0) {
            if (typeof e.maxEntrySize != "number" || !Number.isInteger(e.maxEntrySize) || e.maxEntrySize < 0)
              throw new TypeError("MemoryCacheStore options.maxEntrySize must be a non-negative integer");
            this.#r = e.maxEntrySize;
          }
        }
      }
      get size() {
        return this.#n;
      }
      isFull() {
        return this.#n >= this.#t || this.#i >= this.#e;
      }
      get(e) {
        uti(e);
        let r = `${e.origin}:${e.path}`,
          n = Date.now(),
          o = this.#o.get(r),
          s = o ? cti(e, o, n) : null;
        return s == null
          ? void 0
          : {
              statusMessage: s.statusMessage,
              statusCode: s.statusCode,
              headers: s.headers,
              body: s.body,
              vary: s.vary ? s.vary : void 0,
              etag: s.etag,
              cacheControlDirectives: s.cacheControlDirectives,
              cachedAt: s.cachedAt,
              staleAt: s.staleAt,
              deleteAt: s.deleteAt,
            };
      }
      createWriteStream(e, r) {
        (uti(e), B1a(r));
        let n = `${e.origin}:${e.path}`,
          o = this,
          s = { ...e, ...r, body: [], size: 0 };
        return new N1a({
          write(a, u, c) {
            (typeof a == "string" && (a = Buffer.from(a, u)),
              (s.size += a.byteLength),
              s.size >= o.#r ? this.destroy() : s.body.push(a),
              c(null));
          },
          final(a) {
            let u = o.#o.get(n);
            u || ((u = []), o.#o.set(n, u));
            let c = cti(e, u, Date.now());
            if (c) {
              let m = u.indexOf(c);
              (u.splice(m, 1, s), (o.#n -= c.size));
            } else (u.push(s), (o.#i += 1));
            if (((o.#n += s.size), o.#n > o.#t || o.#i > o.#e)) {
              o.#u ||
                (o.emit("maxSizeExceeded", { size: o.#n, maxSize: o.#t, count: o.#i, maxCount: o.#e }), (o.#u = !0));
              for (let [m, d] of o.#o) {
                for (let f of d.splice(0, d.length / 2)) ((o.#n -= f.size), (o.#i -= 1));
                d.length === 0 && o.#o.delete(m);
              }
              o.#n < o.#t && o.#i < o.#e && (o.#u = !1);
            }
            a(null);
          },
        });
      }
      delete(e) {
        if (typeof e != "object") throw new TypeError(`expected key to be object, got ${typeof e}`);
        let r = `${e.origin}:${e.path}`;
        for (let n of this.#o.get(r) ?? []) ((this.#n -= n.size), (this.#i -= 1));
        this.#o.delete(r);
      }
    };
  function cti(t, e, r) {
    return e.find(
      (n) =>
        n.deleteAt > r &&
        n.method === t.method &&
        (n.vary == null ||
          Object.keys(n.vary).every((o) =>
            n.vary[o] === null ? t.headers[o] === void 0 : n.vary[o] === t.headers[o],
          )),
    );
  }
  lti.exports = Zur;
});