/**
 * @module HWr
 * @category telemetry/otel
 * @label opentelemetry
 * @position 261 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (HWr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var HWr = T((yBe) => {
  "use strict";
  Object.defineProperty(yBe, "__esModule", { value: !0 });
  yBe.VERSION = void 0;
  yBe.VERSION = "0.206.0";
});
function VWr(t) {
  return () => {
    let e = {};
    return (
      Object.entries(t?.() ?? {}).forEach(([r, n]) => {
        typeof n < "u" ? (e[r] = String(n)) : n1.warn(`Header "${r}" has invalid value (${n}) and will be ignored`);
      }),
      e
    );
  };
}
var WWr = j(() => {
  Zt();
});
function u7o(t, e, r) {
  let n = { ...r() },
    o = {};
  return () => (e != null && Object.assign(o, e()), t != null && Object.assign(o, t()), Object.assign(o, n));
}
function c7o(t) {
  if (t != null)
    try {
      let e = globalThis.location?.href;
      return new URL(t, e).href;
    } catch {
      throw new Error(`Configuration: Could not parse user-provided export URL: '${t}'`);
    }
}
function zWr(t, e, r) {
  return { ...sNe(t, e, r), headers: u7o(VWr(t.headers), e.headers, r.headers), url: c7o(t.url) ?? e.url ?? r.url };
}
function YWr(t, e) {
  return { ...aNe(), headers: () => t, url: "http://localhost:4318/" + e };
}
var KWr = j(() => {
  ege();
  WWr();
});
function wge(t) {
  return async (e) => {
    let r = e === "http:" ? import("http") : import("https"),
      { Agent: n } = await r;
    return new n(t);
  };
}
function JWr(t, e, r) {
  return { ...zWr(t, e, r), agentFactory: t.agentFactory ?? e.agentFactory ?? r.agentFactory };
}
function XWr(t, e) {
  return { ...YWr(t, e), agentFactory: wge({ keepAlive: !0 }) };
}
var f4t = j(() => {
  KWr();
});
function ZWr(t) {
  return [429, 502, 503, 504].includes(t);
}
function ezr(t) {
  if (t == null) return;
  let e = Number.parseInt(t, 10);
  if (Number.isInteger(e)) return e > 0 ? e * 1e3 : -1;
  let r = new Date(t).getTime() - Date.now();
  return r >= 0 ? r : 0;
}
var tzr = j(() => {});
import * as rzr from "zlib";
import { Readable as l7o } from "stream";
function nzr(t, e, r, n, o, s) {
  let a = new URL(e.url),
    u = { hostname: a.hostname, port: a.port, path: a.pathname, method: "POST", headers: { ...e.headers() }, agent: r },
    c = t(u, (m) => {
      let d = [];
      (m.on("data", (f) => d.push(f)),
        m.on("end", () => {
          if (m.statusCode && m.statusCode < 299) o({ status: "success", data: Buffer.concat(d) });
          else if (m.statusCode && ZWr(m.statusCode))
            o({ status: "retryable", retryInMillis: ezr(m.headers["retry-after"]) });
          else {
            let f = new vR(m.statusMessage, m.statusCode, Buffer.concat(d).toString());
            o({ status: "failure", error: f });
          }
        }));
    });
  (c.setTimeout(s, () => {
    (c.destroy(), o({ status: "failure", error: new Error("Request Timeout") }));
  }),
    c.on("error", (m) => {
      o({ status: "failure", error: m });
    }),
    m7o(c, e.compression, n, (m) => {
      o({ status: "failure", error: m });
    }));
}
function m7o(t, e, r, n) {
  let o = d7o(r);
  (e === "gzip" &&
    (t.setHeader("Content-Encoding", "gzip"), (o = o.on("error", n).pipe(rzr.createGzip()).on("error", n))),
    o.pipe(t).on("error", n));
}
function d7o(t) {
  let e = new l7o();
  return (e.push(t), e.push(null), e);
}
var izr = j(() => {
  tzr();
  iNe();
});
async function f7o(t) {
  let e = t === "http:" ? import("http") : import("https"),
    { request: r } = await e;
  return r;
}
function ozr(t) {
  return new p4t(t);
}
var p4t,
  szr = j(() => {
    izr();
    p4t = class {
      _parameters;
      _utils = null;
      constructor(e) {
        this._parameters = e;
      }
      async send(e, r) {
        let { agent: n, request: o } = await this._loadUtils();
        return new Promise((s) => {
          nzr(
            o,
            this._parameters,
            n,
            e,
            (a) => {
              s(a);
            },
            r,
          );
        });
      }
      shutdown() {}
      async _loadUtils() {
        let e = this._utils;
        if (e === null) {
          let r = new URL(this._parameters.url).protocol,
            [n, o] = await Promise.all([this._parameters.agentFactory(r), f7o(r)]);
          e = this._utils = { agent: n, request: o };
        }
        return e;
      }
    };
  });
function p7o() {
  return Math.random() * (2 * 0.2) - 0.2;
}
function azr(t) {
  return new h4t(t.transport);
}
var h4t,
  uzr = j(() => {
    h4t = class {
      _transport;
      constructor(e) {
        this._transport = e;
      }
      retry(e, r, n) {
        return new Promise((o, s) => {
          setTimeout(() => {
            this._transport.send(e, r).then(o, s);
          }, n);
        });
      }
      async send(e, r) {
        let n = Date.now() + r,
          o = await this._transport.send(e, r),
          s = 5,
          a = 1e3;
        for (; o.status === "retryable" && s > 0; ) {
          s--;
          let u = Math.max(Math.min(a, 5e3) + p7o(), 0);
          a = a * 1.5;
          let c = o.retryInMillis ?? u,
            m = n - Date.now();
          if (c > m) return o;
          o = await this.retry(e, m, c);
        }
        return o;
      }
      shutdown() {
        return this._transport.shutdown();
      }
    };
  });
function czr(t, e) {
  return LNe(
    { transport: azr({ transport: ozr(t) }), serializer: e, promiseHandler: cNe(t) },
    { timeout: t.timeoutMillis },
  );
}
var lzr = j(() => {
  wvt();
  szr();
  XEt();
  uzr();
});
function mzr(t) {
  let e = (0, _Be.getNumberFromEnv)(t);
  if (e != null) {
    if (Number.isFinite(e) && e > 0) return e;
    n1.warn(`Configuration: ${t} is invalid, expected number greater than 0 (actual: ${e})`);
  }
}
function h7o(t) {
  let e = mzr(`OTEL_EXPORTER_OTLP_${t}_TIMEOUT`),
    r = mzr("OTEL_EXPORTER_OTLP_TIMEOUT");
  return e ?? r;
}
function dzr(t) {
  let e = (0, _Be.getStringFromEnv)(t)?.trim();
  if (e == null || e === "none" || e === "gzip") return e;
  n1.warn(`Configuration: ${t} is invalid, expected 'none' or 'gzip' (actual: '${e}')`);
}
function g7o(t) {
  let e = dzr(`OTEL_EXPORTER_OTLP_${t}_COMPRESSION`),
    r = dzr("OTEL_EXPORTER_OTLP_COMPRESSION");
  return e ?? r;
}
function EBe(t) {
  return { timeoutMillis: h7o(t), compression: g7o(t) };
}
var _Be,
  g4t = j(() => {
    _Be = Se(Ii());
    Zt();
  });
function b7o(t) {
  let e = (0, Ox.getStringFromEnv)(`OTEL_EXPORTER_OTLP_${t}_HEADERS`),
    r = (0, Ox.getStringFromEnv)("OTEL_EXPORTER_OTLP_HEADERS"),
    n = (0, Ox.parseKeyPairsIntoRecord)(e),
    o = (0, Ox.parseKeyPairsIntoRecord)(r);
  if (!(Object.keys(n).length === 0 && Object.keys(o).length === 0))
    return Object.assign({}, (0, Ox.parseKeyPairsIntoRecord)(r), (0, Ox.parseKeyPairsIntoRecord)(e));
}
function A7o(t) {
  try {
    return new URL(t).toString();
  } catch {
    n1.warn(`Configuration: Could not parse environment-provided export URL: '${t}', falling back to undefined`);
    return;
  }
}
function y7o(t, e) {
  try {
    new URL(t);
  } catch {
    n1.warn(`Configuration: Could not parse environment-provided export URL: '${t}', falling back to undefined`);
    return;
  }
  (t.endsWith("/") || (t = t + "/"), (t += e));
  try {
    new URL(t);
  } catch {
    n1.warn(`Configuration: Provided URL appended with '${e}' is not a valid URL, using 'undefined' instead of '${t}'`);
    return;
  }
  return t;
}
function _7o(t) {
  let e = (0, Ox.getStringFromEnv)("OTEL_EXPORTER_OTLP_ENDPOINT");
  if (e !== void 0) return y7o(e, t);
}
function E7o(t) {
  let e = (0, Ox.getStringFromEnv)(`OTEL_EXPORTER_OTLP_${t}_ENDPOINT`);
  if (e !== void 0) return A7o(e);
}
function fzr(t, e) {
  return { ...EBe(t), url: E7o(t) ?? _7o(e), headers: oNe(b7o(t)) };
}
var Ox,
  pzr = j(() => {
    Ox = Se(Ii());
    Zt();
    g4t();
    ege();
  });
function v7o(t) {
  if (typeof t.httpAgentOptions == "function") return t.httpAgentOptions;
  let e = t.httpAgentOptions;
  if ((t.keepAlive != null && (e = { keepAlive: t.keepAlive, ...e }), e != null)) return wge(e);
}
function hzr(t, e, r, n) {
  return (
    t.metadata && n1.warn("Metadata cannot be set when using http"),
    JWr(
      {
        url: t.url,
        headers: oNe(t.headers),
        concurrencyLimit: t.concurrencyLimit,
        timeoutMillis: t.timeoutMillis,
        compression: t.compression,
        agentFactory: v7o(t),
      },
      fzr(e, r),
      XWr(n, r),
    )
  );
}
var gzr = j(() => {
  Zt();
  ege();
  f4t();
  wR();
  pzr();
});
var PB = {};
Wi(PB, {
  convertLegacyHttpOptions: () => hzr,
  createOtlpHttpExportDelegate: () => czr,
  getSharedConfigurationFromEnvironment: () => EBe,
  httpAgentFactoryFromOptions: () => wge,
});
var wR = j(() => {
  f4t();
  lzr();
  g4t();
  gzr();
});