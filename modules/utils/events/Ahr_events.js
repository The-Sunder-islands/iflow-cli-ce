/**
 * @module Ahr
 * @category utils/events
 * @label events
 * @position 1726 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Ahr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Ahr = T((Ygi) => {
  "use strict";
  var bhr = ghr();
  function lDa(t) {
    let e = [];
    for (let r of Object.keys(t).sort()) {
      let n = t[r];
      if (((r = bhr.escapeUri(r)), Array.isArray(n)))
        for (let o = 0, s = n.length; o < s; o++) e.push(`${r}=${bhr.escapeUri(n[o])}`);
      else {
        let o = r;
        ((n || typeof n == "string") && (o += `=${bhr.escapeUri(n)}`), e.push(o));
      }
    }
    return e.join("&");
  }
  Ygi.buildQueryString = lDa;
});
var E$ = T((jSe) => {
  "use strict";
  var Zgi = Tc(),
    ebi = Ahr(),
    jlt = Ae("http"),
    Qlt = Ae("https"),
    tbi = Ae("stream"),
    yhr = Ae("http2"),
    mDa = ["ECONNRESET", "EPIPE", "ETIMEDOUT"],
    rbi = (t) => {
      let e = {};
      for (let r of Object.keys(t)) {
        let n = t[r];
        e[r] = Array.isArray(n) ? n.join(",") : n;
      }
      return e;
    },
    n5 = { setTimeout: (t, e) => setTimeout(t, e), clearTimeout: (t) => clearTimeout(t) },
    Kgi = 1e3,
    dDa = (t, e, r = 0) => {
      if (!r) return -1;
      let n = (o) => {
        let s = n5.setTimeout(() => {
            (t.destroy(),
              e(
                Object.assign(
                  new Error(
                    `@smithy/node-http-handler - the request socket did not establish a connection with the server within the configured timeout of ${r} ms.`,
                  ),
                  { name: "TimeoutError" },
                ),
              ));
          }, r - o),
          a = (u) => {
            u?.connecting
              ? u.on("connect", () => {
                  n5.clearTimeout(s);
                })
              : n5.clearTimeout(s);
          };
        t.socket ? a(t.socket) : t.on("socket", a);
      };
      return r < 2e3 ? (n(0), 0) : n5.setTimeout(n.bind(null, Kgi), Kgi);
    },
    fDa = (t, e, r = 0, n, o) =>
      r
        ? n5.setTimeout(() => {
            let s = `@smithy/node-http-handler - [${n ? "ERROR" : "WARN"}] a request has exceeded the configured ${r} ms requestTimeout.`;
            if (n) {
              let a = Object.assign(new Error(s), { name: "TimeoutError", code: "ETIMEDOUT" });
              (t.destroy(a), e(a));
            } else
              ((s += " Init client requestHandler with throwOnRequestTimeout=true to turn this into an error."),
                o?.warn?.(s));
          }, r)
        : -1,
    pDa = 3e3,
    hDa = (t, { keepAlive: e, keepAliveMsecs: r }, n = pDa) => {
      if (e !== !0) return -1;
      let o = () => {
        t.socket
          ? t.socket.setKeepAlive(e, r || 0)
          : t.on("socket", (s) => {
              s.setKeepAlive(e, r || 0);
            });
      };
      return n === 0 ? (o(), 0) : n5.setTimeout(o, n);
    },
    Jgi = 3e3,
    gDa = (t, e, r = 0) => {
      let n = (o) => {
        let s = r - o,
          a = () => {
            (t.destroy(),
              e(
                Object.assign(
                  new Error(
                    `@smithy/node-http-handler - the request socket timed out after ${r} ms of inactivity (configured by client requestHandler).`,
                  ),
                  { name: "TimeoutError" },
                ),
              ));
          };
        t.socket
          ? (t.socket.setTimeout(s, a), t.on("close", () => t.socket?.removeListener("timeout", a)))
          : t.setTimeout(s, a);
      };
      return 0 < r && r < 6e3 ? (n(0), 0) : n5.setTimeout(n.bind(null, r === 0 ? 0 : Jgi), Jgi);
    },
    Xgi = 6e3;
  async function nbi(t, e, r = Xgi, n = !1) {
    let o = e.headers ?? {},
      s = o.Expect || o.expect,
      a = -1,
      u = !0;
    (!n &&
      s === "100-continue" &&
      (u = await Promise.race([
        new Promise((c) => {
          a = Number(n5.setTimeout(() => c(!0), Math.max(Xgi, r)));
        }),
        new Promise((c) => {
          (t.on("continue", () => {
            (n5.clearTimeout(a), c(!0));
          }),
            t.on("response", () => {
              (n5.clearTimeout(a), c(!1));
            }),
            t.on("error", () => {
              (n5.clearTimeout(a), c(!1));
            }));
        }),
      ])),
      u && bDa(t, e.body));
  }
  function bDa(t, e) {
    if (e instanceof tbi.Readable) {
      e.pipe(t);
      return;
    }
    if (e) {
      if (Buffer.isBuffer(e) || typeof e == "string") {
        t.end(e);
        return;
      }
      let r = e;
      if (typeof r == "object" && r.buffer && typeof r.byteOffset == "number" && typeof r.byteLength == "number") {
        t.end(Buffer.from(r.buffer, r.byteOffset, r.byteLength));
        return;
      }
      t.end(Buffer.from(e));
      return;
    }
    t.end();
  }
  var ADa = 0,
    _hr = class t {
      config;
      configProvider;
      socketWarningTimestamp = 0;
      externalAgent = !1;
      metadata = { handlerProtocol: "http/1.1" };
      static create(e) {
        return typeof e?.handle == "function" ? e : new t(e);
      }
      static checkSocketUsage(e, r, n = console) {
        let { sockets: o, requests: s, maxSockets: a } = e;
        if (typeof a != "number" || a === 1 / 0 || Date.now() - 15e3 < r) return r;
        if (o && s)
          for (let c in o) {
            let m = o[c]?.length ?? 0,
              d = s[c]?.length ?? 0;
            if (m >= a && d >= 2 * a)
              return (
                n?.warn?.(`@smithy/node-http-handler:WARN - socket usage at capacity=${m} and ${d} additional requests are enqueued.
See https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/node-configuring-maxsockets.html
or increase socketAcquisitionWarningTimeout=(millis) in the NodeHttpHandler config.`),
                Date.now()
              );
          }
        return r;
      }
      constructor(e) {
        this.configProvider = new Promise((r, n) => {
          typeof e == "function"
            ? e()
                .then((o) => {
                  r(this.resolveDefaultConfig(o));
                })
                .catch(n)
            : r(this.resolveDefaultConfig(e));
        });
      }
      resolveDefaultConfig(e) {
        let {
            requestTimeout: r,
            connectionTimeout: n,
            socketTimeout: o,
            socketAcquisitionWarningTimeout: s,
            httpAgent: a,
            httpsAgent: u,
            throwOnRequestTimeout: c,
          } = e || {},
          m = !0,
          d = 50;
        return {
          connectionTimeout: n,
          requestTimeout: r,
          socketTimeout: o,
          socketAcquisitionWarningTimeout: s,
          throwOnRequestTimeout: c,
          httpAgent:
            a instanceof jlt.Agent || typeof a?.destroy == "function"
              ? ((this.externalAgent = !0), a)
              : new jlt.Agent({ keepAlive: m, maxSockets: d, ...a }),
          httpsAgent:
            u instanceof Qlt.Agent || typeof u?.destroy == "function"
              ? ((this.externalAgent = !0), u)
              : new Qlt.Agent({ keepAlive: m, maxSockets: d, ...u }),
          logger: console,
        };
      }
      destroy() {
        (this.config?.httpAgent?.destroy(), this.config?.httpsAgent?.destroy());
      }
      async handle(e, { abortSignal: r, requestTimeout: n } = {}) {
        return (
          this.config || (this.config = await this.configProvider),
          new Promise((o, s) => {
            let a = this.config,
              u,
              c = [],
              m = async (P) => {
                (await u, c.forEach(n5.clearTimeout), o(P));
              },
              d = async (P) => {
                (await u, c.forEach(n5.clearTimeout), s(P));
              };
            if (r?.aborted) {
              let P = new Error("Request aborted");
              ((P.name = "AbortError"), d(P));
              return;
            }
            let f = e.protocol === "https:",
              p = e.headers ?? {},
              h = (p.Expect ?? p.expect) === "100-continue",
              g = f ? a.httpsAgent : a.httpAgent;
            (h && !this.externalAgent && (g = new (f ? Qlt.Agent : jlt.Agent)({ keepAlive: !1, maxSockets: 1 / 0 })),
              c.push(
                n5.setTimeout(
                  () => {
                    this.socketWarningTimestamp = t.checkSocketUsage(g, this.socketWarningTimestamp, a.logger);
                  },
                  a.socketAcquisitionWarningTimeout ?? (a.requestTimeout ?? 2e3) + (a.connectionTimeout ?? 1e3),
                ),
              ));
            let b = ebi.buildQueryString(e.query || {}),
              A;
            if (e.username != null || e.password != null) {
              let P = e.username ?? "",
                D = e.password ?? "";
              A = `${P}:${D}`;
            }
            let y = e.path;
            (b && (y += `?${b}`), e.fragment && (y += `#${e.fragment}`));
            let E = e.hostname ?? "";
            E[0] === "[" && E.endsWith("]") ? (E = e.hostname.slice(1, -1)) : (E = e.hostname);
            let v = { headers: e.headers, host: E, method: e.method, path: y, port: e.port, agent: g, auth: A },
              x = (f ? Qlt.request : jlt.request)(v, (P) => {
                let D = new Zgi.HttpResponse({
                  statusCode: P.statusCode || -1,
                  reason: P.statusMessage,
                  headers: rbi(P.headers),
                  body: P,
                });
                m({ response: D });
              });
            if (
              (x.on("error", (P) => {
                mDa.includes(P.code) ? d(Object.assign(P, { name: "TimeoutError" })) : d(P);
              }),
              r)
            ) {
              let P = () => {
                x.destroy();
                let D = new Error("Request aborted");
                ((D.name = "AbortError"), d(D));
              };
              if (typeof r.addEventListener == "function") {
                let D = r;
                (D.addEventListener("abort", P, { once: !0 }),
                  x.once("close", () => D.removeEventListener("abort", P)));
              } else r.onabort = P;
            }
            let k = n ?? a.requestTimeout;
            (c.push(dDa(x, d, a.connectionTimeout)),
              c.push(fDa(x, d, k, a.throwOnRequestTimeout, a.logger ?? console)),
              c.push(gDa(x, d, a.socketTimeout)));
            let R = v.agent;
            (typeof R == "object" &&
              "keepAlive" in R &&
              c.push(hDa(x, { keepAlive: R.keepAlive, keepAliveMsecs: R.keepAliveMsecs })),
              (u = nbi(x, e, k, this.externalAgent).catch((P) => (c.forEach(n5.clearTimeout), s(P)))));
          })
        );
      }
      updateHttpClientConfig(e, r) {
        ((this.config = void 0), (this.configProvider = this.configProvider.then((n) => ({ ...n, [e]: r }))));
      }
      httpHandlerConfigs() {
        return this.config ?? {};
      }
    },
    Ehr = class {
      sessions = [];
      constructor(e) {
        this.sessions = e ?? [];
      }
      poll() {
        if (this.sessions.length > 0) return this.sessions.shift();
      }
      offerLast(e) {
        this.sessions.push(e);
      }
      contains(e) {
        return this.sessions.includes(e);
      }
      remove(e) {
        this.sessions = this.sessions.filter((r) => r !== e);
      }
      [Symbol.iterator]() {
        return this.sessions[Symbol.iterator]();
      }
      destroy(e) {
        for (let r of this.sessions) r === e && (r.destroyed || r.destroy());
      }
    },
    vhr = class {
      constructor(e) {
        if (((this.config = e), this.config.maxConcurrency && this.config.maxConcurrency <= 0))
          throw new RangeError("maxConcurrency must be greater than zero.");
      }
      config;
      sessionCache = new Map();
      lease(e, r) {
        let n = this.getUrlString(e),
          o = this.sessionCache.get(n);
        if (o) {
          let c = o.poll();
          if (c && !this.config.disableConcurrency) return c;
        }
        let s = yhr.connect(n);
        (this.config.maxConcurrency &&
          s.settings({ maxConcurrentStreams: this.config.maxConcurrency }, (c) => {
            if (c)
              throw new Error(
                "Fail to set maxConcurrentStreams to " +
                  this.config.maxConcurrency +
                  "when creating new session for " +
                  e.destination.toString(),
              );
          }),
          s.unref());
        let a = () => {
          (s.destroy(), this.deleteSession(n, s));
        };
        (s.on("goaway", a),
          s.on("error", a),
          s.on("frameError", a),
          s.on("close", () => this.deleteSession(n, s)),
          r.requestTimeout && s.setTimeout(r.requestTimeout, a));
        let u = this.sessionCache.get(n) || new Ehr();
        return (u.offerLast(s), this.sessionCache.set(n, u), s);
      }
      deleteSession(e, r) {
        let n = this.sessionCache.get(e);
        n && n.contains(r) && (n.remove(r), this.sessionCache.set(e, n));
      }
      release(e, r) {
        let n = this.getUrlString(e);
        this.sessionCache.get(n)?.offerLast(r);
      }
      destroy() {
        for (let [e, r] of this.sessionCache) {
          for (let n of r) (n.destroyed || n.destroy(), r.remove(n));
          this.sessionCache.delete(e);
        }
      }
      setMaxConcurrentStreams(e) {
        if (e && e <= 0) throw new RangeError("maxConcurrentStreams must be greater than zero.");
        this.config.maxConcurrency = e;
      }
      setDisableConcurrentStreams(e) {
        this.config.disableConcurrency = e;
      }
      getUrlString(e) {
        return e.destination.toString();
      }
    },
    Chr = class t {
      config;
      configProvider;
      metadata = { handlerProtocol: "h2" };
      connectionManager = new vhr({});
      static create(e) {
        return typeof e?.handle == "function" ? e : new t(e);
      }
      constructor(e) {
        this.configProvider = new Promise((r, n) => {
          typeof e == "function"
            ? e()
                .then((o) => {
                  r(o || {});
                })
                .catch(n)
            : r(e || {});
        });
      }
      destroy() {
        this.connectionManager.destroy();
      }
      async handle(e, { abortSignal: r, requestTimeout: n } = {}) {
        this.config ||
          ((this.config = await this.configProvider),
          this.connectionManager.setDisableConcurrentStreams(this.config.disableConcurrentStreams || !1),
          this.config.maxConcurrentStreams &&
            this.connectionManager.setMaxConcurrentStreams(this.config.maxConcurrentStreams));
        let { requestTimeout: o, disableConcurrentStreams: s } = this.config,
          a = n ?? o;
        return new Promise((u, c) => {
          let m = !1,
            d,
            f = async (O) => {
              (await d, u(O));
            },
            p = async (O) => {
              (await d, c(O));
            };
          if (r?.aborted) {
            m = !0;
            let O = new Error("Request aborted");
            ((O.name = "AbortError"), p(O));
            return;
          }
          let { hostname: h, method: g, port: b, protocol: A, query: y } = e,
            E = "";
          if (e.username != null || e.password != null) {
            let O = e.username ?? "",
              N = e.password ?? "";
            E = `${O}:${N}@`;
          }
          let v = `${A}//${E}${h}${b ? `:${b}` : ""}`,
            C = { destination: new URL(v) },
            x = this.connectionManager.lease(C, {
              requestTimeout: this.config?.sessionTimeout,
              disableConcurrentStreams: s || !1,
            }),
            k = (O) => {
              (s && this.destroySession(x), (m = !0), p(O));
            },
            R = ebi.buildQueryString(y || {}),
            P = e.path;
          (R && (P += `?${R}`), e.fragment && (P += `#${e.fragment}`));
          let D = x.request({
            ...e.headers,
            [yhr.constants.HTTP2_HEADER_PATH]: P,
            [yhr.constants.HTTP2_HEADER_METHOD]: g,
          });
          if (
            (x.ref(),
            D.on("response", (O) => {
              let N = new Zgi.HttpResponse({ statusCode: O[":status"] || -1, headers: rbi(O), body: D });
              ((m = !0), f({ response: N }), s && (x.close(), this.connectionManager.deleteSession(v, x)));
            }),
            a &&
              D.setTimeout(a, () => {
                D.close();
                let O = new Error(`Stream timed out because of no activity for ${a} ms`);
                ((O.name = "TimeoutError"), k(O));
              }),
            r)
          ) {
            let O = () => {
              D.close();
              let N = new Error("Request aborted");
              ((N.name = "AbortError"), k(N));
            };
            if (typeof r.addEventListener == "function") {
              let N = r;
              (N.addEventListener("abort", O, { once: !0 }), D.once("close", () => N.removeEventListener("abort", O)));
            } else r.onabort = O;
          }
          (D.on("frameError", (O, N, F) => {
            k(new Error(`Frame type id ${O} in stream id ${F} has failed with code ${N}.`));
          }),
            D.on("error", k),
            D.on("aborted", () => {
              k(new Error(`HTTP/2 stream is abnormally aborted in mid-communication with result code ${D.rstCode}.`));
            }),
            D.on("close", () => {
              (x.unref(),
                s && x.destroy(),
                m || k(new Error("Unexpected error: http2 request did not get a response")));
            }),
            (d = nbi(D, e, a)));
        });
      }
      updateHttpClientConfig(e, r) {
        ((this.config = void 0), (this.configProvider = this.configProvider.then((n) => ({ ...n, [e]: r }))));
      }
      httpHandlerConfigs() {
        return this.config ?? {};
      }
      destroySession(e) {
        e.destroyed || e.destroy();
      }
    },
    Shr = class extends tbi.Writable {
      bufferedBytes = [];
      _write(e, r, n) {
        (this.bufferedBytes.push(e), n());
      }
    },
    yDa = (t) =>
      _Da(t)
        ? EDa(t)
        : new Promise((e, r) => {
            let n = new Shr();
            (t.pipe(n),
              t.on("error", (o) => {
                (n.end(), r(o));
              }),
              n.on("error", r),
              n.on("finish", function () {
                let o = new Uint8Array(Buffer.concat(this.bufferedBytes));
                e(o);
              }));
          }),
    _Da = (t) => typeof ReadableStream == "function" && t instanceof ReadableStream;
  async function EDa(t) {
    let e = [],
      r = t.getReader(),
      n = !1,
      o = 0;
    for (; !n; ) {
      let { done: u, value: c } = await r.read();
      (c && (e.push(c), (o += c.length)), (n = u));
    }
    let s = new Uint8Array(o),
      a = 0;
    for (let u of e) (s.set(u, a), (a += u.length));
    return s;
  }
  jSe.DEFAULT_REQUEST_TIMEOUT = ADa;
  jSe.NodeHttp2Handler = Chr;
  jSe.NodeHttpHandler = _hr;
  jSe.streamCollector = yDa;
});