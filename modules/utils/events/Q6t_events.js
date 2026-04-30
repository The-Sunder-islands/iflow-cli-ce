/**
 * @module Q6t
 * @category utils/events
 * @label events
 * @position 59 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Q6t) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Q6t = T((g_) => {
  "use strict";
  var Ifo =
      (g_ && g_.__createBinding) ||
      (Object.create
        ? function (t, e, r, n) {
            n === void 0 && (n = r);
            var o = Object.getOwnPropertyDescriptor(e, r);
            ((!o || ("get" in o ? !e.__esModule : o.writable || o.configurable)) &&
              (o = {
                enumerable: !0,
                get: function () {
                  return e[r];
                },
              }),
              Object.defineProperty(t, n, o));
          }
        : function (t, e, r, n) {
            (n === void 0 && (n = r), (t[n] = e[r]));
          }),
    Rfo =
      (g_ && g_.__setModuleDefault) ||
      (Object.create
        ? function (t, e) {
            Object.defineProperty(t, "default", { enumerable: !0, value: e });
          }
        : function (t, e) {
            t.default = e;
          }),
    G7r =
      (g_ && g_.__importStar) ||
      function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (t != null) for (var r in t) r !== "default" && Object.prototype.hasOwnProperty.call(t, r) && Ifo(e, t, r);
        return (Rfo(e, t), e);
      },
    q7r =
      (g_ && g_.__importDefault) ||
      function (t) {
        return t && t.__esModule ? t : { default: t };
      };
  Object.defineProperty(g_, "__esModule", { value: !0 });
  g_.HttpsProxyAgent = void 0;
  var hke = G7r(Ae("net")),
    $7r = G7r(Ae("tls")),
    kfo = q7r(Ae("assert")),
    Ofo = q7r(Iee()),
    Nfo = F7r(),
    Pfo = Ae("url"),
    Bfo = U7r(),
    a3e = (0, Ofo.default)("https-proxy-agent"),
    j7r = (t) => (t.servername === void 0 && t.host && !hke.isIP(t.host) ? { ...t, servername: t.host } : t),
    gke = class extends Nfo.Agent {
      constructor(e, r) {
        (super(r),
          (this.options = { path: void 0 }),
          (this.proxy = typeof e == "string" ? new Pfo.URL(e) : e),
          (this.proxyHeaders = r?.headers ?? {}),
          a3e("Creating new HttpsProxyAgent instance: %o", this.proxy.href));
        let n = (this.proxy.hostname || this.proxy.host).replace(/^\[|\]$/g, ""),
          o = this.proxy.port ? parseInt(this.proxy.port, 10) : this.proxy.protocol === "https:" ? 443 : 80;
        this.connectOpts = { ALPNProtocols: ["http/1.1"], ...(r ? Q7r(r, "headers") : null), host: n, port: o };
      }
      async connect(e, r) {
        let { proxy: n } = this;
        if (!r.host) throw new TypeError('No "host" provided');
        let o;
        n.protocol === "https:"
          ? (a3e("Creating `tls.Socket`: %o", this.connectOpts), (o = $7r.connect(j7r(this.connectOpts))))
          : (a3e("Creating `net.Socket`: %o", this.connectOpts), (o = hke.connect(this.connectOpts)));
        let s = typeof this.proxyHeaders == "function" ? this.proxyHeaders() : { ...this.proxyHeaders },
          a = hke.isIPv6(r.host) ? `[${r.host}]` : r.host,
          u = `CONNECT ${a}:${r.port} HTTP/1.1\r
`;
        if (n.username || n.password) {
          let p = `${decodeURIComponent(n.username)}:${decodeURIComponent(n.password)}`;
          s["Proxy-Authorization"] = `Basic ${Buffer.from(p).toString("base64")}`;
        }
        ((s.Host = `${a}:${r.port}`),
          s["Proxy-Connection"] || (s["Proxy-Connection"] = this.keepAlive ? "Keep-Alive" : "close"));
        for (let p of Object.keys(s))
          u += `${p}: ${s[p]}\r
`;
        let c = (0, Bfo.parseProxyResponse)(o);
        o.write(`${u}\r
`);
        let { connect: m, buffered: d } = await c;
        if ((e.emit("proxyConnect", m), this.emit("proxyConnect", m, e), m.statusCode === 200))
          return (
            e.once("socket", Lfo),
            r.secureEndpoint
              ? (a3e("Upgrading socket connection to TLS"),
                $7r.connect({ ...Q7r(j7r(r), "host", "path", "port"), socket: o }))
              : o
          );
        o.destroy();
        let f = new hke.Socket({ writable: !1 });
        return (
          (f.readable = !0),
          e.once("socket", (p) => {
            (a3e("Replaying proxy buffer for failed request"),
              (0, kfo.default)(p.listenerCount("data") > 0),
              p.push(d),
              p.push(null));
          }),
          f
        );
      }
    };
  gke.protocols = ["http", "https"];
  g_.HttpsProxyAgent = gke;
  function Lfo(t) {
    t.resume();
  }
  function Q7r(t, ...e) {
    let r = {},
      n;
    for (n in t) e.includes(n) || (r[n] = t[n]);
    return r;
  }
});