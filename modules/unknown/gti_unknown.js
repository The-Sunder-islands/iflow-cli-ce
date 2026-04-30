/**
 * @module gti
 * @category unknown
 * @label unknown
 * @position 1551 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (gti) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var gti = T((jCc, hti) => {
  "use strict";
  var fti = Ae("node:assert"),
    { Readable: M1a } = Ae("node:stream"),
    Tle = ks(),
    _Ce = ati(),
    F1a = ecr(),
    U1a = dti(),
    {
      assertCacheStore: $1a,
      assertCacheMethods: j1a,
      makeCacheKey: Q1a,
      normalizeHeaders: G1a,
      parseCacheControlHeader: q1a,
    } = xle(),
    { AbortError: H1a } = da(),
    ncr = () => {};
  function V1a(t, e, { headers: r = {} }) {
    return !!(
      e?.["no-cache"] ||
      (t.cacheControlDirectives?.["no-cache"] && !Array.isArray(t.cacheControlDirectives["no-cache"])) ||
      r["if-modified-since"] ||
      r["if-none-match"]
    );
  }
  function W1a(t, e) {
    let r = Date.now();
    if (r > t.staleAt) {
      if (e?.["max-stale"]) {
        let n = t.staleAt + e["max-stale"] * 1e3;
        return r > n;
      }
      return !0;
    }
    if (e?.["min-fresh"]) {
      let n = t.staleAt - r,
        o = e["min-fresh"] * 1e3;
      return n <= o;
    }
    return !1;
  }
  function z1a(t) {
    let e = t.cacheControlDirectives?.["stale-while-revalidate"];
    if (!e) return !1;
    let r = Date.now(),
      n = t.staleAt + e * 1e3;
    return r <= n;
  }
  function Y1a(t, e, r, n, o, s) {
    if (s?.["only-if-cached"]) {
      let a = !1;
      try {
        if (
          (typeof n.onConnect == "function" &&
            (n.onConnect(() => {
              a = !0;
            }),
            a)) ||
          (typeof n.onHeaders == "function" && (n.onHeaders(504, [], ncr, "Gateway Timeout"), a))
        )
          return;
        typeof n.onComplete == "function" && n.onComplete([]);
      } catch (u) {
        typeof n.onError == "function" && n.onError(u);
      }
      return !0;
    }
    return t(o, new _Ce(e, r, n));
  }
  function rcr(t, e, r, n, o, s) {
    let a = Tle.isStream(r.body) ? r.body : M1a.from(r.body ?? []);
    (fti(!a.destroyed, "stream should not be destroyed"),
      fti(!a.readableDidRead, "stream should not be readableDidRead"));
    let u = {
      resume() {
        a.resume();
      },
      pause() {
        a.pause();
      },
      get paused() {
        return a.isPaused();
      },
      get aborted() {
        return a.destroyed;
      },
      get reason() {
        return a.errored;
      },
      abort(m) {
        a.destroy(m ?? new H1a());
      },
    };
    if (
      (a
        .on("error", function (m) {
          if (!this.readableEnded)
            if (typeof t.onResponseError == "function") t.onResponseError(u, m);
            else throw m;
        })
        .on("close", function () {
          this.errored || t.onResponseEnd?.(u, {});
        }),
      t.onRequestStart?.(u, o),
      a.destroyed)
    )
      return;
    let c = { ...r.headers, age: String(n) };
    (s && (c.warning = '110 - "response is stale"'),
      t.onResponseStart?.(u, r.statusCode, c, r.statusMessage),
      e.method === "HEAD"
        ? a.destroy()
        : a.on("data", function (m) {
            t.onResponseData?.(u, m);
          }));
  }
  function pti(t, e, r, n, o, s, a) {
    if (!a) return Y1a(t, e, r, n, o, s);
    let u = Date.now();
    if (u > a.deleteAt) return t(o, new _Ce(e, r, n));
    let c = Math.round((u - a.cachedAt) / 1e3);
    if (s?.["max-age"] && c >= s["max-age"]) return t(o, n);
    let m = W1a(a, s),
      d = V1a(a, s, o);
    if (m || d) {
      if (Tle.isStream(o.body) && Tle.bodyLength(o.body) !== 0) return t(o, new _Ce(e, r, n));
      if (!d && z1a(a))
        return (
          rcr(n, o, a, c, null, !0),
          queueMicrotask(() => {
            let g = { ...o.headers, "if-modified-since": new Date(a.cachedAt).toUTCString() };
            (a.etag && (g["if-none-match"] = a.etag),
              a.vary && (g = { ...g, ...a.vary }),
              t(
                { ...o, headers: g },
                new _Ce(e, r, {
                  onRequestStart() {},
                  onRequestUpgrade() {},
                  onResponseStart() {},
                  onResponseData() {},
                  onResponseEnd() {},
                  onResponseError() {},
                }),
              ));
          }),
          !0
        );
      let f = !1,
        p = a.cacheControlDirectives["stale-if-error"] ?? s?.["stale-if-error"];
      p && (f = u < a.staleAt + p * 1e3);
      let h = { ...o.headers, "if-modified-since": new Date(a.cachedAt).toUTCString() };
      return (
        a.etag && (h["if-none-match"] = a.etag),
        a.vary && (h = { ...h, ...a.vary }),
        t(
          { ...o, headers: h },
          new U1a(
            (g, b) => {
              g ? rcr(n, o, a, c, b, m) : Tle.isStream(a.body) && a.body.on("error", ncr).destroy();
            },
            new _Ce(e, r, n),
            f,
          ),
        )
      );
    }
    (Tle.isStream(o.body) && o.body.on("error", ncr).destroy(), rcr(n, o, a, c, null, !1));
  }
  hti.exports = (t = {}) => {
    let { store: e = new F1a(), methods: r = ["GET"], cacheByDefault: n = void 0, type: o = "shared" } = t;
    if (typeof t != "object" || t === null)
      throw new TypeError(`expected type of opts to be an Object, got ${t === null ? "null" : typeof t}`);
    if (($1a(e, "opts.store"), j1a(r, "opts.methods"), typeof n < "u" && typeof n != "number"))
      throw new TypeError(`expected opts.cacheByDefault to be number or undefined, got ${typeof n}`);
    if (typeof o < "u" && o !== "shared" && o !== "private")
      throw new TypeError(`expected opts.type to be shared, private, or undefined, got ${typeof o}`);
    let s = { store: e, methods: r, cacheByDefault: n, type: o },
      a = Tle.safeHTTPMethods.filter((u) => r.includes(u) === !1);
    return (u) => (c, m) => {
      if (!c.origin || a.includes(c.method)) return u(c, m);
      c = { ...c, headers: G1a(c) };
      let d = c.headers?.["cache-control"] ? q1a(c.headers["cache-control"]) : void 0;
      if (d?.["no-store"]) return u(c, m);
      let f = Q1a(c),
        p = e.get(f);
      return p && typeof p.then == "function" ? p.then((h) => pti(u, s, f, m, c, d, h)) : pti(u, s, f, m, c, d, p);
    };
  };
});