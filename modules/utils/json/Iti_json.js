/**
 * @module Iti
 * @category utils/json
 * @label json
 * @position 1555 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Iti) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Iti = T((VCc, Dti) => {
  "use strict";
  var { Writable: ufa } = Ae("node:stream"),
    { assertCacheKey: acr, assertCacheValue: cfa } = xle(),
    ucr,
    J6 = 3,
    Tti = 2 * 1e3 * 1e3 * 1e3;
  Dti.exports = class {
    #e = Tti;
    #t = 1 / 0;
    #r;
    #n;
    #i;
    #o;
    #u;
    #a;
    #s;
    #l;
    constructor(e) {
      if (e) {
        if (typeof e != "object") throw new TypeError("SqliteCacheStore options must be an object");
        if (e.maxEntrySize !== void 0) {
          if (typeof e.maxEntrySize != "number" || !Number.isInteger(e.maxEntrySize) || e.maxEntrySize < 0)
            throw new TypeError("SqliteCacheStore options.maxEntrySize must be a non-negative integer");
          if (e.maxEntrySize > Tti) throw new TypeError("SqliteCacheStore options.maxEntrySize must be less than 2gb");
          this.#e = e.maxEntrySize;
        }
        if (e.maxCount !== void 0) {
          if (typeof e.maxCount != "number" || !Number.isInteger(e.maxCount) || e.maxCount < 0)
            throw new TypeError("SqliteCacheStore options.maxCount must be a non-negative integer");
          this.#t = e.maxCount;
        }
      }
      (ucr || (ucr = Ae("node:sqlite").DatabaseSync),
        (this.#r = new ucr(e?.location ?? ":memory:")),
        this.#r.exec(`
      PRAGMA journal_mode = WAL;
      PRAGMA synchronous = NORMAL;
      PRAGMA temp_store = memory;
      PRAGMA optimize;

      CREATE TABLE IF NOT EXISTS cacheInterceptorV${J6} (
        -- Data specific to us
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        url TEXT NOT NULL,
        method TEXT NOT NULL,

        -- Data returned to the interceptor
        body BUF NULL,
        deleteAt INTEGER NOT NULL,
        statusCode INTEGER NOT NULL,
        statusMessage TEXT NOT NULL,
        headers TEXT NULL,
        cacheControlDirectives TEXT NULL,
        etag TEXT NULL,
        vary TEXT NULL,
        cachedAt INTEGER NOT NULL,
        staleAt INTEGER NOT NULL
      );

      CREATE INDEX IF NOT EXISTS idx_cacheInterceptorV${J6}_getValuesQuery ON cacheInterceptorV${J6}(url, method, deleteAt);
      CREATE INDEX IF NOT EXISTS idx_cacheInterceptorV${J6}_deleteByUrlQuery ON cacheInterceptorV${J6}(deleteAt);
    `),
        (this.#n = this.#r.prepare(`
      SELECT
        id,
        body,
        deleteAt,
        statusCode,
        statusMessage,
        headers,
        etag,
        cacheControlDirectives,
        vary,
        cachedAt,
        staleAt
      FROM cacheInterceptorV${J6}
      WHERE
        url = ?
        AND method = ?
      ORDER BY
        deleteAt ASC
    `)),
        (this.#i = this.#r.prepare(`
      UPDATE cacheInterceptorV${J6} SET
        body = ?,
        deleteAt = ?,
        statusCode = ?,
        statusMessage = ?,
        headers = ?,
        etag = ?,
        cacheControlDirectives = ?,
        cachedAt = ?,
        staleAt = ?
      WHERE
        id = ?
    `)),
        (this.#o = this.#r.prepare(`
      INSERT INTO cacheInterceptorV${J6} (
        url,
        method,
        body,
        deleteAt,
        statusCode,
        statusMessage,
        headers,
        etag,
        cacheControlDirectives,
        vary,
        cachedAt,
        staleAt
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `)),
        (this.#a = this.#r.prepare(`DELETE FROM cacheInterceptorV${J6} WHERE url = ?`)),
        (this.#s = this.#r.prepare(`SELECT COUNT(*) AS total FROM cacheInterceptorV${J6}`)),
        (this.#u = this.#r.prepare(`DELETE FROM cacheInterceptorV${J6} WHERE deleteAt <= ?`)),
        (this.#l =
          this.#t === 1 / 0
            ? null
            : this.#r.prepare(`
        DELETE FROM cacheInterceptorV${J6}
        WHERE id IN (
          SELECT
            id
          FROM cacheInterceptorV${J6}
          ORDER BY cachedAt DESC
          LIMIT ?
        )
      `)));
    }
    close() {
      this.#r.close();
    }
    get(e) {
      acr(e);
      let r = this.#f(e);
      return r
        ? {
            body: r.body ? Buffer.from(r.body.buffer, r.body.byteOffset, r.body.byteLength) : void 0,
            statusCode: r.statusCode,
            statusMessage: r.statusMessage,
            headers: r.headers ? JSON.parse(r.headers) : void 0,
            etag: r.etag ? r.etag : void 0,
            vary: r.vary ? JSON.parse(r.vary) : void 0,
            cacheControlDirectives: r.cacheControlDirectives ? JSON.parse(r.cacheControlDirectives) : void 0,
            cachedAt: r.cachedAt,
            staleAt: r.staleAt,
            deleteAt: r.deleteAt,
          }
        : void 0;
    }
    set(e, r) {
      acr(e);
      let n = this.#p(e),
        o = Array.isArray(r.body) ? Buffer.concat(r.body) : r.body,
        s = o?.byteLength;
      if (s && s > this.#e) return;
      let a = this.#f(e, !0);
      a
        ? this.#i.run(
            o,
            r.deleteAt,
            r.statusCode,
            r.statusMessage,
            r.headers ? JSON.stringify(r.headers) : null,
            r.etag ? r.etag : null,
            r.cacheControlDirectives ? JSON.stringify(r.cacheControlDirectives) : null,
            r.cachedAt,
            r.staleAt,
            a.id,
          )
        : (this.#c(),
          this.#o.run(
            n,
            e.method,
            o,
            r.deleteAt,
            r.statusCode,
            r.statusMessage,
            r.headers ? JSON.stringify(r.headers) : null,
            r.etag ? r.etag : null,
            r.cacheControlDirectives ? JSON.stringify(r.cacheControlDirectives) : null,
            r.vary ? JSON.stringify(r.vary) : null,
            r.cachedAt,
            r.staleAt,
          ));
    }
    createWriteStream(e, r) {
      (acr(e), cfa(r));
      let n = 0,
        o = [],
        s = this;
      return new ufa({
        decodeStrings: !0,
        write(a, u, c) {
          ((n += a.byteLength), n < s.#e ? o.push(a) : this.destroy(), c());
        },
        final(a) {
          (s.set(e, { ...r, body: o }), a());
        },
      });
    }
    delete(e) {
      if (typeof e != "object") throw new TypeError(`expected key to be object, got ${typeof e}`);
      this.#a.run(this.#p(e));
    }
    #c() {
      if (Number.isFinite(this.#t) && this.size <= this.#t) return 0;
      {
        let e = this.#u.run(Date.now()).changes;
        if (e) return e;
      }
      {
        let e = this.#l?.run(Math.max(Math.floor(this.#t * 0.1), 1)).changes;
        if (e) return e;
      }
      return 0;
    }
    get size() {
      let { total: e } = this.#s.get();
      return e;
    }
    #p(e) {
      return `${e.origin}/${e.path}`;
    }
    #f(e, r = !1) {
      let n = this.#p(e),
        { headers: o, method: s } = e,
        a = this.#n.all(n, s);
      if (a.length === 0) return;
      let u = Date.now();
      for (let c of a) {
        if (u >= c.deleteAt && !r) return;
        let m = !0;
        if (c.vary) {
          let d = JSON.parse(c.vary);
          for (let f in d)
            if (!lfa(o[f], d[f])) {
              m = !1;
              break;
            }
        }
        if (m) return c;
      }
    }
  };
  function lfa(t, e) {
    return t == null && e == null
      ? !0
      : (t == null && e != null) || (t != null && e == null)
        ? !1
        : Array.isArray(t) && Array.isArray(e)
          ? t.length !== e.length
            ? !1
            : t.every((r, n) => r === e[n])
          : t === e;
  }
});