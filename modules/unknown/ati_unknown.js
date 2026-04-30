/**
 * @module ati
 * @category unknown
 * @label unknown
 * @position 1548 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ati) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ati = T((FCc, sti) => {
  "use strict";
  var _1a = ks(),
    { parseCacheControlHeader: E1a, parseVaryHeader: v1a, isEtagUsable: C1a } = xle(),
    { parseHttpDate: iti } = nti();
  function S1a() {}
  var oti = [200, 203, 204, 206, 300, 301, 308, 404, 405, 410, 414, 501],
    w1a = [206],
    x1a = 2147483647e3,
    Xur = class {
      #e;
      #t;
      #r;
      #n;
      #i;
      #o;
      constructor({ store: e, type: r, cacheByDefault: n }, o, s) {
        ((this.#n = e), (this.#t = r), (this.#r = n), (this.#e = o), (this.#i = s));
      }
      onRequestStart(e, r) {
        (this.#o?.destroy(), (this.#o = void 0), this.#i.onRequestStart?.(e, r));
      }
      onRequestUpgrade(e, r, n, o) {
        this.#i.onRequestUpgrade?.(e, r, n, o);
      }
      onResponseStart(e, r, n, o) {
        let s = () => this.#i.onResponseStart?.(e, r, n, o),
          a = this;
        if (!_1a.safeHTTPMethods.includes(this.#e.method) && r >= 200 && r <= 399) {
          try {
            this.#n.delete(this.#e)?.catch?.(S1a);
          } catch {}
          return s();
        }
        let u = n["cache-control"],
          c = n["last-modified"] && oti.includes(r);
        if (!u && !n.expires && !c && !this.#r) return s();
        let m = u ? E1a(u) : {};
        if (!T1a(this.#t, r, n, m)) return s();
        let d = Date.now(),
          f = n.age ? D1a(n.age) : void 0;
        if (f && f >= x1a) return s();
        let p = typeof n.date == "string" ? iti(n.date) : void 0,
          h = I1a(this.#t, d, f, n, p, m) ?? this.#r;
        if (h === void 0 || (f && f > h)) return s();
        let g = p ? p.getTime() : d,
          b = h + g;
        if (d >= b) return s();
        let A;
        if (this.#e.headers && n.vary && ((A = v1a(n.vary, this.#e.headers)), !A)) return s();
        let y = R1a(g, m, b),
          E = k1a(n, m),
          v = {
            statusCode: r,
            statusMessage: o,
            headers: E,
            vary: A,
            cacheControlDirectives: m,
            cachedAt: f ? d - f : d,
            staleAt: b,
            deleteAt: y,
          };
        if (r === 304) {
          let C = this.#n.get(this.#e);
          if (!C) return s();
          if (
            ((v.statusCode = C.statusCode),
            (v.statusMessage = C.statusMessage),
            (v.etag = C.etag),
            (v.headers = { ...C.headers, ...E }),
            s(),
            (this.#o = this.#n.createWriteStream(this.#e, v)),
            !this.#o || !C?.body)
          )
            return;
          let x = C.body.values(),
            k = () => {
              for (let R of x) {
                let P = this.#o.write(R) === !1;
                if ((this.#i.onResponseData?.(e, R), P)) break;
              }
            };
          (this.#o
            .on("error", function () {
              ((a.#o = void 0), a.#n.delete(a.#e));
            })
            .on("drain", () => {
              k();
            })
            .on("close", function () {
              a.#o === this && (a.#o = void 0);
            }),
            k());
        } else {
          if (
            (typeof n.etag == "string" && C1a(n.etag) && (v.etag = n.etag),
            (this.#o = this.#n.createWriteStream(this.#e, v)),
            !this.#o)
          )
            return s();
          (this.#o
            .on("drain", () => e.resume())
            .on("error", function () {
              ((a.#o = void 0), a.#n.delete(a.#e));
            })
            .on("close", function () {
              (a.#o === this && (a.#o = void 0), e.resume());
            }),
            s());
        }
      }
      onResponseData(e, r) {
        (this.#o?.write(r) === !1 && e.pause(), this.#i.onResponseData?.(e, r));
      }
      onResponseEnd(e, r) {
        (this.#o?.end(), this.#i.onResponseEnd?.(e, r));
      }
      onResponseError(e, r) {
        (this.#o?.destroy(r), (this.#o = void 0), this.#i.onResponseError?.(e, r));
      }
    };
  function T1a(t, e, r, n) {
    return !(
      e < 200 ||
      w1a.includes(e) ||
      (!oti.includes(e) &&
        !r.expires &&
        !n.public &&
        n["max-age"] === void 0 &&
        !(n.private && t === "private") &&
        !(n["s-maxage"] !== void 0 && t === "shared")) ||
      n["no-store"] ||
      (t === "shared" && n.private === !0) ||
      r.vary?.includes("*") ||
      (r.authorization &&
        (!n.public ||
          typeof r.authorization != "string" ||
          (Array.isArray(n["no-cache"]) && n["no-cache"].includes("authorization")) ||
          (Array.isArray(n.private) && n.private.includes("authorization"))))
    );
  }
  function D1a(t) {
    let e = parseInt(Array.isArray(t) ? t[0] : t);
    return isNaN(e) ? void 0 : e * 1e3;
  }
  function I1a(t, e, r, n, o, s) {
    if (t === "shared") {
      let u = s["s-maxage"];
      if (u !== void 0) return u > 0 ? u * 1e3 : void 0;
    }
    let a = s["max-age"];
    if (a !== void 0) return a > 0 ? a * 1e3 : void 0;
    if (typeof n.expires == "string") {
      let u = iti(n.expires);
      if (u) return e >= u.getTime() || (o && (o >= u || (r !== void 0 && r > u - o))) ? void 0 : u.getTime() - e;
    }
    if (typeof n["last-modified"] == "string") {
      let u = new Date(n["last-modified"]);
      if (O1a(u)) return u.getTime() >= e ? void 0 : (e - u.getTime()) * 0.1;
    }
    if (s.immutable) return 31536e3;
  }
  function R1a(t, e, r) {
    let n = -1 / 0,
      o = -1 / 0,
      s = -1 / 0;
    return (
      e["stale-while-revalidate"] && (n = r + e["stale-while-revalidate"] * 1e3),
      e["stale-if-error"] && (o = r + e["stale-if-error"] * 1e3),
      n === -1 / 0 && o === -1 / 0 && (s = t + 31536e6),
      Math.max(r, n, o, s)
    );
  }
  function k1a(t, e) {
    let r = [
      "connection",
      "proxy-authenticate",
      "proxy-authentication-info",
      "proxy-authorization",
      "proxy-connection",
      "te",
      "transfer-encoding",
      "upgrade",
      "age",
    ];
    (t.connection &&
      (Array.isArray(t.connection)
        ? r.push(...t.connection.map((o) => o.trim()))
        : r.push(...t.connection.split(",").map((o) => o.trim()))),
      Array.isArray(e["no-cache"]) && r.push(...e["no-cache"]),
      Array.isArray(e.private) && r.push(...e.private));
    let n;
    for (let o of r) t[o] && ((n ??= { ...t }), delete n[o]);
    return n ?? t;
  }
  function O1a(t) {
    return t instanceof Date && Number.isFinite(t.valueOf());
  }
  sti.exports = Xur;
});