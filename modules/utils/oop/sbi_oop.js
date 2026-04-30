/**
 * @module sbi
 * @category utils/oop
 * @label oop
 * @position 1727 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (sbi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var sbi = T((qlt) => {
  "use strict";
  var ibi = Tc(),
    vDa = Ahr(),
    CDa = p3();
  function obi(t, e) {
    return new Request(t, e);
  }
  function SDa(t = 0) {
    return new Promise((e, r) => {
      t &&
        setTimeout(() => {
          let n = new Error(`Request did not complete within ${t} ms`);
          ((n.name = "TimeoutError"), r(n));
        }, t);
    });
  }
  var Glt = { supported: void 0 },
    whr = class t {
      config;
      configProvider;
      static create(e) {
        return typeof e?.handle == "function" ? e : new t(e);
      }
      constructor(e) {
        (typeof e == "function"
          ? (this.configProvider = e().then((r) => r || {}))
          : ((this.config = e ?? {}), (this.configProvider = Promise.resolve(this.config))),
          Glt.supported === void 0 && (Glt.supported = typeof Request < "u" && "keepalive" in obi("https://[::1]")));
      }
      destroy() {}
      async handle(e, { abortSignal: r, requestTimeout: n } = {}) {
        this.config || (this.config = await this.configProvider);
        let o = n ?? this.config.requestTimeout,
          s = this.config.keepAlive === !0,
          a = this.config.credentials;
        if (r?.aborted) {
          let E = new Error("Request aborted");
          return ((E.name = "AbortError"), Promise.reject(E));
        }
        let u = e.path,
          c = vDa.buildQueryString(e.query || {});
        (c && (u += `?${c}`), e.fragment && (u += `#${e.fragment}`));
        let m = "";
        if (e.username != null || e.password != null) {
          let E = e.username ?? "",
            v = e.password ?? "";
          m = `${E}:${v}@`;
        }
        let { port: d, method: f } = e,
          p = `${e.protocol}//${m}${e.hostname}${d ? `:${d}` : ""}${u}`,
          h = f === "GET" || f === "HEAD" ? void 0 : e.body,
          g = { body: h, headers: new Headers(e.headers), method: f, credentials: a };
        (this.config?.cache && (g.cache = this.config.cache),
          h && (g.duplex = "half"),
          typeof AbortController < "u" && (g.signal = r),
          Glt.supported && (g.keepalive = s),
          typeof this.config.requestInit == "function" && Object.assign(g, this.config.requestInit(e)));
        let b = () => {},
          A = obi(p, g),
          y = [
            fetch(A).then((E) => {
              let v = E.headers,
                C = {};
              for (let k of v.entries()) C[k[0]] = k[1];
              return E.body != null
                ? {
                    response: new ibi.HttpResponse({
                      headers: C,
                      reason: E.statusText,
                      statusCode: E.status,
                      body: E.body,
                    }),
                  }
                : E.blob().then((k) => ({
                    response: new ibi.HttpResponse({ headers: C, reason: E.statusText, statusCode: E.status, body: k }),
                  }));
            }),
            SDa(o),
          ];
        return (
          r &&
            y.push(
              new Promise((E, v) => {
                let C = () => {
                  let x = new Error("Request aborted");
                  ((x.name = "AbortError"), v(x));
                };
                if (typeof r.addEventListener == "function") {
                  let x = r;
                  (x.addEventListener("abort", C, { once: !0 }), (b = () => x.removeEventListener("abort", C)));
                } else r.onabort = C;
              }),
            ),
          Promise.race(y).finally(b)
        );
      }
      updateHttpClientConfig(e, r) {
        ((this.config = void 0), (this.configProvider = this.configProvider.then((n) => ((n[e] = r), n))));
      }
      httpHandlerConfigs() {
        return this.config ?? {};
      }
    },
    wDa = async (t) =>
      (typeof Blob == "function" && t instanceof Blob) || t.constructor?.name === "Blob"
        ? Blob.prototype.arrayBuffer !== void 0
          ? new Uint8Array(await t.arrayBuffer())
          : xDa(t)
        : TDa(t);
  async function xDa(t) {
    let e = await DDa(t),
      r = CDa.fromBase64(e);
    return new Uint8Array(r);
  }
  async function TDa(t) {
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
  function DDa(t) {
    return new Promise((e, r) => {
      let n = new FileReader();
      ((n.onloadend = () => {
        if (n.readyState !== 2) return r(new Error("Reader aborted too early"));
        let o = n.result ?? "",
          s = o.indexOf(","),
          a = s > -1 ? s + 1 : o.length;
        e(o.substring(a));
      }),
        (n.onabort = () => r(new Error("Read aborted"))),
        (n.onerror = () => r(n.error)),
        n.readAsDataURL(t));
    });
  }
  qlt.FetchHttpHandler = whr;
  qlt.keepAliveSupport = Glt;
  qlt.streamCollector = wDa;
});