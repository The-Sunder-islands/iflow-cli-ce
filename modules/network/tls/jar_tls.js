/**
 * @module jar
 * @category network/tls
 * @label tls
 * @position 1513 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (jar) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var jar = T((tCc, jXn) => {
  "use strict";
  var { kProxy: Mar, kClose: LXn, kDestroy: MXn, kDispatch: RXn } = n0(),
    y0a = zz(),
    FXn = ple(),
    UXn = nle(),
    { InvalidArgumentError: hle, RequestAbortedError: _0a, SecureProxyConnectionError: E0a } = da(),
    kXn = ile(),
    $Xn = EU(),
    { channels: OXn } = mU(),
    dot = Symbol("proxy agent"),
    fot = Symbol("proxy client"),
    vU = Symbol("proxy headers"),
    Far = Symbol("request tls settings"),
    NXn = Symbol("proxy tls settings"),
    PXn = Symbol("connect endpoint function"),
    BXn = Symbol("tunnel proxy");
  function v0a(t) {
    return t === "https:" ? 443 : 80;
  }
  function C0a(t, e) {
    return new FXn(t, e);
  }
  var S0a = () => {};
  function w0a(t, e) {
    return e.connections === 1 ? new $Xn(t, e) : new FXn(t, e);
  }
  var Uar = class extends UXn {
      #e;
      constructor(e, { headers: r = {}, connect: n, factory: o }) {
        if (!e) throw new hle("Proxy URL is mandatory");
        (super(), (this[vU] = r), o ? (this.#e = o(e, { connect: n })) : (this.#e = new $Xn(e, { connect: n })));
      }
      [RXn](e, r) {
        let n = r.onHeaders;
        r.onHeaders = function (u, c, m) {
          if (u === 407) {
            typeof r.onError == "function" && r.onError(new hle("Proxy Authentication Required (407)"));
            return;
          }
          n && n.call(this, u, c, m);
        };
        let { origin: o, path: s = "/", headers: a = {} } = e;
        if (((e.path = o + s), !("host" in a) && !("Host" in a))) {
          let { host: u } = new URL(o);
          a.host = u;
        }
        return ((e.headers = { ...this[vU], ...a }), this.#e[RXn](e, r));
      }
      [LXn]() {
        return this.#e.close();
      }
      [MXn](e) {
        return this.#e.destroy(e);
      }
    },
    $ar = class extends UXn {
      constructor(e) {
        if (!e || (typeof e == "object" && !(e instanceof URL) && !e.uri)) throw new hle("Proxy uri is mandatory");
        let { clientFactory: r = C0a } = e;
        if (typeof r != "function") throw new hle("Proxy opts.clientFactory must be a function.");
        let { proxyTunnel: n = !0 } = e;
        super();
        let o = this.#e(e),
          { href: s, origin: a, port: u, protocol: c, username: m, password: d, hostname: f } = o;
        if (
          ((this[Mar] = { uri: s, protocol: c }),
          (this[Far] = e.requestTls),
          (this[NXn] = e.proxyTls),
          (this[vU] = e.headers || {}),
          (this[BXn] = n),
          e.auth && e.token)
        )
          throw new hle("opts.auth cannot be used in combination with opts.token");
        e.auth
          ? (this[vU]["proxy-authorization"] = `Basic ${e.auth}`)
          : e.token
            ? (this[vU]["proxy-authorization"] = e.token)
            : m &&
              d &&
              (this[vU]["proxy-authorization"] =
                `Basic ${Buffer.from(`${decodeURIComponent(m)}:${decodeURIComponent(d)}`).toString("base64")}`);
        let p = kXn({ ...e.proxyTls });
        this[PXn] = kXn({ ...e.requestTls });
        let h = e.factory || w0a,
          g = (b, A) => {
            let { protocol: y } = new URL(b);
            return !this[BXn] && y === "http:" && this[Mar].protocol === "http:"
              ? new Uar(this[Mar].uri, { headers: this[vU], connect: p, factory: h })
              : h(b, A);
          };
        ((this[fot] = r(o, { connect: p })),
          (this[dot] = new y0a({
            ...e,
            factory: g,
            connect: async (b, A) => {
              let y = b.host;
              b.port || (y += `:${v0a(b.protocol)}`);
              try {
                let E = {
                    origin: a,
                    port: u,
                    path: y,
                    signal: b.signal,
                    headers: {
                      ...this[vU],
                      host: b.host,
                      ...(b.connections == null || b.connections > 0 ? { "proxy-connection": "keep-alive" } : {}),
                    },
                    servername: this[NXn]?.servername || f,
                  },
                  { socket: v, statusCode: C } = await this[fot].connect(E);
                if (C !== 200) {
                  (v.on("error", S0a).destroy(), A(new _0a(`Proxy response (${C}) !== 200 when HTTP Tunneling`)));
                  return;
                }
                if (
                  (OXn.proxyConnected.hasSubscribers && OXn.proxyConnected.publish({ socket: v, connectParams: E }),
                  b.protocol !== "https:")
                ) {
                  A(null, v);
                  return;
                }
                let x;
                (this[Far] ? (x = this[Far].servername) : (x = b.servername),
                  this[PXn]({ ...b, servername: x, httpSocket: v }, A));
              } catch (E) {
                E.code === "ERR_TLS_CERT_ALTNAME_INVALID" ? A(new E0a(E)) : A(E);
              }
            },
          })));
      }
      dispatch(e, r) {
        let n = x0a(e.headers);
        if ((T0a(n), n && !("host" in n) && !("Host" in n))) {
          let { host: o } = new URL(e.origin);
          n.host = o;
        }
        return this[dot].dispatch({ ...e, headers: n }, r);
      }
      #e(e) {
        return typeof e == "string" ? new URL(e) : e instanceof URL ? e : new URL(e.uri);
      }
      [LXn]() {
        return Promise.all([this[dot].close(), this[fot].close()]);
      }
      [MXn]() {
        return Promise.all([this[dot].destroy(), this[fot].destroy()]);
      }
    };
  function x0a(t) {
    if (Array.isArray(t)) {
      let e = {};
      for (let r = 0; r < t.length; r += 2) e[t[r]] = t[r + 1];
      return e;
    }
    return t;
  }
  function T0a(t) {
    if (t && Object.keys(t).find((r) => r.toLowerCase() === "proxy-authorization"))
      throw new hle("Proxy-Authorization should be sent in ProxyAgent constructor");
  }
  jXn.exports = $ar;
});