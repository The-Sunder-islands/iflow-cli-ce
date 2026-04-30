/**
 * @module xle
 * @category unknown
 * @label unknown
 * @position 1546 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (xle) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var xle = T((LCc, tti) => {
  "use strict";
  var { safeHTTPMethods: eti, pathHasQueryOrFragment: i1a } = ks(),
    { serializePathWithQuery: o1a } = ks();
  function s1a(t) {
    if (!t.origin) throw new Error("opts.origin is undefined");
    let e = t.path || "/";
    return (
      t.query && !i1a(t.path) && (e = o1a(e, t.query)),
      { origin: t.origin.toString(), method: t.method, path: e, headers: t.headers }
    );
  }
  function a1a(t) {
    let e;
    if (t.headers == null) e = {};
    else if (typeof t.headers[Symbol.iterator] == "function") {
      e = {};
      for (let r of t.headers) {
        if (!Array.isArray(r)) throw new Error("opts.headers is not a valid header map");
        let [n, o] = r;
        if (typeof n != "string" || typeof o != "string") throw new Error("opts.headers is not a valid header map");
        e[n.toLowerCase()] = o;
      }
    } else if (typeof t.headers == "object") {
      e = {};
      for (let r of Object.keys(t.headers)) e[r.toLowerCase()] = t.headers[r];
    } else throw new Error("opts.headers is not an object");
    return e;
  }
  function u1a(t) {
    if (typeof t != "object") throw new TypeError(`expected key to be object, got ${typeof t}`);
    for (let e of ["origin", "method", "path"])
      if (typeof t[e] != "string") throw new TypeError(`expected key.${e} to be string, got ${typeof t[e]}`);
    if (t.headers !== void 0 && typeof t.headers != "object")
      throw new TypeError(`expected headers to be object, got ${typeof t}`);
  }
  function c1a(t) {
    if (typeof t != "object") throw new TypeError(`expected value to be object, got ${typeof t}`);
    for (let e of ["statusCode", "cachedAt", "staleAt", "deleteAt"])
      if (typeof t[e] != "number") throw new TypeError(`expected value.${e} to be number, got ${typeof t[e]}`);
    if (typeof t.statusMessage != "string")
      throw new TypeError(`expected value.statusMessage to be string, got ${typeof t.statusMessage}`);
    if (t.headers != null && typeof t.headers != "object")
      throw new TypeError(`expected value.rawHeaders to be object, got ${typeof t.headers}`);
    if (t.vary !== void 0 && typeof t.vary != "object")
      throw new TypeError(`expected value.vary to be object, got ${typeof t.vary}`);
    if (t.etag !== void 0 && typeof t.etag != "string")
      throw new TypeError(`expected value.etag to be string, got ${typeof t.etag}`);
  }
  function l1a(t) {
    let e = {},
      r;
    if (Array.isArray(t)) {
      r = [];
      for (let n of t) r.push(...n.split(","));
    } else r = t.split(",");
    for (let n = 0; n < r.length; n++) {
      let o = r[n].toLowerCase(),
        s = o.indexOf("="),
        a,
        u;
      switch ((s !== -1 ? ((a = o.substring(0, s).trimStart()), (u = o.substring(s + 1))) : (a = o.trim()), a)) {
        case "min-fresh":
        case "max-stale":
        case "max-age":
        case "s-maxage":
        case "stale-while-revalidate":
        case "stale-if-error": {
          if (u === void 0 || u[0] === " ") continue;
          u.length >= 2 && u[0] === '"' && u[u.length - 1] === '"' && (u = u.substring(1, u.length - 1));
          let c = parseInt(u, 10);
          if (c !== c || (a === "max-age" && a in e && e[a] >= c)) continue;
          e[a] = c;
          break;
        }
        case "private":
        case "no-cache":
          if (u) {
            if (u[0] === '"') {
              let c = [u.substring(1)],
                m = u[u.length - 1] === '"';
              if (!m)
                for (let d = n + 1; d < r.length; d++) {
                  let f = r[d],
                    p = f.length;
                  if ((c.push(f.trim()), p !== 0 && f[p - 1] === '"')) {
                    m = !0;
                    break;
                  }
                }
              if (m) {
                let d = c[c.length - 1];
                (d[d.length - 1] === '"' && ((d = d.substring(0, d.length - 1)), (c[c.length - 1] = d)),
                  a in e ? (e[a] = e[a].concat(c)) : (e[a] = c));
              }
            } else a in e ? (e[a] = e[a].concat(u)) : (e[a] = [u]);
            break;
          }
        case "public":
        case "no-store":
        case "must-revalidate":
        case "proxy-revalidate":
        case "immutable":
        case "no-transform":
        case "must-understand":
        case "only-if-cached":
          if (u) continue;
          e[a] = !0;
          break;
        default:
          continue;
      }
    }
    return e;
  }
  function m1a(t, e) {
    if (typeof t == "string" && t.includes("*")) return e;
    let r = {},
      n = typeof t == "string" ? t.split(",") : t;
    for (let o of n) {
      let s = o.trim().toLowerCase();
      r[s] = e[s] ?? null;
    }
    return r;
  }
  function d1a(t) {
    return t.length <= 2
      ? !1
      : t[0] === '"' && t[t.length - 1] === '"'
        ? !(t[1] === '"' || t.startsWith('"W/'))
        : t.startsWith('W/"') && t[t.length - 1] === '"'
          ? t.length !== 4
          : !1;
  }
  function f1a(t, e = "CacheStore") {
    if (typeof t != "object" || t === null)
      throw new TypeError(`expected type of ${e} to be a CacheStore, got ${t === null ? "null" : typeof t}`);
    for (let r of ["get", "createWriteStream", "delete"])
      if (typeof t[r] != "function") throw new TypeError(`${e} needs to have a \`${r}()\` function`);
  }
  function p1a(t, e = "CacheMethods") {
    if (!Array.isArray(t))
      throw new TypeError(`expected type of ${e} needs to be an array, got ${t === null ? "null" : typeof t}`);
    if (t.length === 0) throw new TypeError(`${e} needs to have at least one method`);
    for (let r of t)
      if (!eti.includes(r))
        throw new TypeError(`element of ${e}-array needs to be one of following values: ${eti.join(", ")}, got ${r}`);
  }
  function h1a(t, e) {
    let r = `${t.origin}:${t.method}:${t.path}`;
    if (t.headers) {
      let n = Object.keys(t.headers).sort();
      for (let o of n) {
        if (e?.has(o.toLowerCase())) continue;
        let s = t.headers[o];
        r += `:${o}=${Array.isArray(s) ? s.join(",") : s}`;
      }
    }
    return r;
  }
  tti.exports = {
    makeCacheKey: s1a,
    normalizeHeaders: a1a,
    assertCacheKey: u1a,
    assertCacheValue: c1a,
    parseCacheControlHeader: l1a,
    parseVaryHeader: m1a,
    isEtagUsable: d1a,
    assertCacheMethods: p1a,
    assertCacheStore: f1a,
    makeDeduplicationKey: h1a,
  };
});