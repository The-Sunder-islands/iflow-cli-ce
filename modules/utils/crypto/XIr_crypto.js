/**
 * @module XIr
 * @category utils/crypto
 * @label crypto
 * @position 47 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (XIr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var XIr = T((D6t) => {
  "use strict";
  Object.defineProperty(D6t, "__esModule", { value: !0 });
  D6t.getRetryConfig = I1o;
  async function I1o(t) {
    let e = JIr(t);
    if (!t || !t.config || (!e && !t.config.retry)) return { shouldRetry: !1 };
    ((e = e || {}),
      (e.currentRetryAttempt = e.currentRetryAttempt || 0),
      (e.retry = e.retry === void 0 || e.retry === null ? 3 : e.retry),
      (e.httpMethodsToRetry = e.httpMethodsToRetry || ["GET", "HEAD", "PUT", "OPTIONS", "DELETE"]),
      (e.noResponseRetries = e.noResponseRetries === void 0 || e.noResponseRetries === null ? 2 : e.noResponseRetries),
      (e.retryDelayMultiplier = e.retryDelayMultiplier ? e.retryDelayMultiplier : 2),
      (e.timeOfFirstRequest = e.timeOfFirstRequest ? e.timeOfFirstRequest : Date.now()),
      (e.totalTimeout = e.totalTimeout ? e.totalTimeout : Number.MAX_SAFE_INTEGER),
      (e.maxRetryDelay = e.maxRetryDelay ? e.maxRetryDelay : Number.MAX_SAFE_INTEGER));
    let r = [
      [100, 199],
      [408, 408],
      [429, 429],
      [500, 599],
    ];
    if (
      ((e.statusCodesToRetry = e.statusCodesToRetry || r),
      (t.config.retryConfig = e),
      !(await (e.shouldRetry || R1o)(t)))
    )
      return { shouldRetry: !1, config: t.config };
    let o = k1o(e);
    t.config.retryConfig.currentRetryAttempt += 1;
    let s = e.retryBackoff
      ? e.retryBackoff(t, o)
      : new Promise((a) => {
          setTimeout(a, o);
        });
    return (e.onRetryAttempt && e.onRetryAttempt(t), await s, { shouldRetry: !0, config: t.config });
  }
  function R1o(t) {
    var e;
    let r = JIr(t);
    if (
      t.name === "AbortError" ||
      ((e = t.error) === null || e === void 0 ? void 0 : e.name) === "AbortError" ||
      !r ||
      r.retry === 0 ||
      (!t.response && (r.currentRetryAttempt || 0) >= r.noResponseRetries) ||
      !t.config.method ||
      r.httpMethodsToRetry.indexOf(t.config.method.toUpperCase()) < 0
    )
      return !1;
    if (t.response && t.response.status) {
      let n = !1;
      for (let [o, s] of r.statusCodesToRetry) {
        let a = t.response.status;
        if (a >= o && a <= s) {
          n = !0;
          break;
        }
      }
      if (!n) return !1;
    }
    return ((r.currentRetryAttempt = r.currentRetryAttempt || 0), !(r.currentRetryAttempt >= r.retry));
  }
  function JIr(t) {
    if (t && t.config && t.config.retryConfig) return t.config.retryConfig;
  }
  function k1o(t) {
    var e;
    let n =
        (t.currentRetryAttempt ? 0 : (e = t.retryDelay) !== null && e !== void 0 ? e : 100) +
        ((Math.pow(t.retryDelayMultiplier, t.currentRetryAttempt) - 1) / 2) * 1e3,
      o = t.totalTimeout - (Date.now() - t.timeOfFirstRequest);
    return Math.min(n, o, t.maxRetryDelay);
  }
});
import O1o from "crypto";
function n3e() {
  return (ske > ake.length - 16 && (O1o.randomFillSync(ake), (ske = 0)), ake.slice(ske, (ske += 16)));
}
var ake,
  ske,
  I6t = j(() => {
    ((ake = new Uint8Array(256)), (ske = ake.length));
  });
var ZIr,
  e7r = j(() => {
    ZIr =
      /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  });
function N1o(t) {
  return typeof t == "string" && ZIr.test(t);
}
var cB,
  i3e = j(() => {
    e7r();
    cB = N1o;
  });
function pG(t, e = 0) {
  return (
    z3[t[e + 0]] +
    z3[t[e + 1]] +
    z3[t[e + 2]] +
    z3[t[e + 3]] +
    "-" +
    z3[t[e + 4]] +
    z3[t[e + 5]] +
    "-" +
    z3[t[e + 6]] +
    z3[t[e + 7]] +
    "-" +
    z3[t[e + 8]] +
    z3[t[e + 9]] +
    "-" +
    z3[t[e + 10]] +
    z3[t[e + 11]] +
    z3[t[e + 12]] +
    z3[t[e + 13]] +
    z3[t[e + 14]] +
    z3[t[e + 15]]
  );
}
function P1o(t, e = 0) {
  let r = pG(t, e);
  if (!cB(r)) throw TypeError("Stringified UUID is invalid");
  return r;
}
var z3,
  t7r,
  o3e = j(() => {
    i3e();
    z3 = [];
    for (let t = 0; t < 256; ++t) z3.push((t + 256).toString(16).slice(1));
    t7r = P1o;
  });
function B1o(t, e, r) {
  let n = (e && r) || 0,
    o = e || new Array(16);
  t = t || {};
  let s = t.node || r7r,
    a = t.clockseq !== void 0 ? t.clockseq : R6t;
  if (s == null || a == null) {
    let p = t.random || (t.rng || n3e)();
    (s == null && (s = r7r = [p[0] | 1, p[1], p[2], p[3], p[4], p[5]]),
      a == null && (a = R6t = ((p[6] << 8) | p[7]) & 16383));
  }
  let u = t.msecs !== void 0 ? t.msecs : Date.now(),
    c = t.nsecs !== void 0 ? t.nsecs : O6t + 1,
    m = u - k6t + (c - O6t) / 1e4;
  if (
    (m < 0 && t.clockseq === void 0 && (a = (a + 1) & 16383),
    (m < 0 || u > k6t) && t.nsecs === void 0 && (c = 0),
    c >= 1e4)
  )
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  ((k6t = u), (O6t = c), (R6t = a), (u += 122192928e5));
  let d = ((u & 268435455) * 1e4 + c) % 4294967296;
  ((o[n++] = (d >>> 24) & 255), (o[n++] = (d >>> 16) & 255), (o[n++] = (d >>> 8) & 255), (o[n++] = d & 255));
  let f = ((u / 4294967296) * 1e4) & 268435455;
  ((o[n++] = (f >>> 8) & 255),
    (o[n++] = f & 255),
    (o[n++] = ((f >>> 24) & 15) | 16),
    (o[n++] = (f >>> 16) & 255),
    (o[n++] = (a >>> 8) | 128),
    (o[n++] = a & 255));
  for (let p = 0; p < 6; ++p) o[n + p] = s[p];
  return e || pG(o);
}
var r7r,
  R6t,
  k6t,
  O6t,
  n7r,
  i7r = j(() => {
    I6t();
    o3e();
    ((k6t = 0), (O6t = 0));
    n7r = B1o;
  });
function L1o(t) {
  if (!cB(t)) throw TypeError("Invalid UUID");
  let e,
    r = new Uint8Array(16);
  return (
    (r[0] = (e = parseInt(t.slice(0, 8), 16)) >>> 24),
    (r[1] = (e >>> 16) & 255),
    (r[2] = (e >>> 8) & 255),
    (r[3] = e & 255),
    (r[4] = (e = parseInt(t.slice(9, 13), 16)) >>> 8),
    (r[5] = e & 255),
    (r[6] = (e = parseInt(t.slice(14, 18), 16)) >>> 8),
    (r[7] = e & 255),
    (r[8] = (e = parseInt(t.slice(19, 23), 16)) >>> 8),
    (r[9] = e & 255),
    (r[10] = ((e = parseInt(t.slice(24, 36), 16)) / 1099511627776) & 255),
    (r[11] = (e / 4294967296) & 255),
    (r[12] = (e >>> 24) & 255),
    (r[13] = (e >>> 16) & 255),
    (r[14] = (e >>> 8) & 255),
    (r[15] = e & 255),
    r
  );
}
var uke,
  N6t = j(() => {
    i3e();
    uke = L1o;
  });
function M1o(t) {
  t = unescape(encodeURIComponent(t));
  let e = [];
  for (let r = 0; r < t.length; ++r) e.push(t.charCodeAt(r));
  return e;
}
function s3e(t, e, r) {
  function n(o, s, a, u) {
    var c;
    if (
      (typeof o == "string" && (o = M1o(o)),
      typeof s == "string" && (s = uke(s)),
      ((c = s) === null || c === void 0 ? void 0 : c.length) !== 16)
    )
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    let m = new Uint8Array(16 + o.length);
    if ((m.set(s), m.set(o, s.length), (m = r(m)), (m[6] = (m[6] & 15) | e), (m[8] = (m[8] & 63) | 128), a)) {
      u = u || 0;
      for (let d = 0; d < 16; ++d) a[u + d] = m[d];
      return a;
    }
    return pG(m);
  }
  try {
    n.name = t;
  } catch {}
  return ((n.DNS = F1o), (n.URL = U1o), n);
}
var F1o,
  U1o,
  P6t = j(() => {
    o3e();
    N6t();
    ((F1o = "6ba7b810-9dad-11d1-80b4-00c04fd430c8"), (U1o = "6ba7b811-9dad-11d1-80b4-00c04fd430c8"));
  });
import $1o from "crypto";
function j1o(t) {
  return (
    Array.isArray(t) ? (t = Buffer.from(t)) : typeof t == "string" && (t = Buffer.from(t, "utf8")),
    $1o.createHash("md5").update(t).digest()
  );
}
var o7r,
  s7r = j(() => {
    o7r = j1o;
  });
var Q1o,
  a7r,
  u7r = j(() => {
    P6t();
    s7r();
    ((Q1o = s3e("v3", 48, o7r)), (a7r = Q1o));
  });
import G1o from "crypto";
var B6t,
  c7r = j(() => {
    B6t = { randomUUID: G1o.randomUUID };
  });
function q1o(t, e, r) {
  if (B6t.randomUUID && !e && !t) return B6t.randomUUID();
  t = t || {};
  let n = t.random || (t.rng || n3e)();
  if (((n[6] = (n[6] & 15) | 64), (n[8] = (n[8] & 63) | 128), e)) {
    r = r || 0;
    for (let o = 0; o < 16; ++o) e[r + o] = n[o];
    return e;
  }
  return pG(n);
}
var l7r,
  m7r = j(() => {
    c7r();
    I6t();
    o3e();
    l7r = q1o;
  });
import H1o from "crypto";
function V1o(t) {
  return (
    Array.isArray(t) ? (t = Buffer.from(t)) : typeof t == "string" && (t = Buffer.from(t, "utf8")),
    H1o.createHash("sha1").update(t).digest()
  );
}
var d7r,
  f7r = j(() => {
    d7r = V1o;
  });
var W1o,
  p7r,
  h7r = j(() => {
    P6t();
    f7r();
    ((W1o = s3e("v5", 80, d7r)), (p7r = W1o));
  });
var g7r,
  b7r = j(() => {
    g7r = "00000000-0000-0000-0000-000000000000";
  });
function z1o(t) {
  if (!cB(t)) throw TypeError("Invalid UUID");
  return parseInt(t.slice(14, 15), 16);
}
var A7r,
  y7r = j(() => {
    i3e();
    A7r = z1o;
  });
var _7r = {};
Wi(_7r, {
  NIL: () => g7r,
  parse: () => uke,
  stringify: () => t7r,
  v1: () => n7r,
  v3: () => a7r,
  v4: () => l7r,
  v5: () => p7r,
  validate: () => cB,
  version: () => A7r,
});
var E7r = j(() => {
  i7r();
  u7r();
  m7r();
  h7r();
  b7r();
  y7r();
  i3e();
  o3e();
  N6t();
});