/**
 * @module uDt
 * @category network/grpc
 * @label grpc
 * @position 497 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (uDt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var uDt = T((Tbe) => {
  "use strict";
  Object.defineProperty(Tbe, "__esModule", { value: !0 });
  Tbe.parseCIDR = Fen;
  Tbe.mapProxyName = fjo;
  Tbe.getProxiedConnection = pjo;
  var wbe = g0(),
    zre = La(),
    Men = Ae("net"),
    ijo = Ae("http"),
    ojo = g0(),
    Len = a8(),
    xbe = d2(),
    sjo = Ae("url"),
    ajo = aDt(),
    ujo = "proxy";
  function Yre(t) {
    ojo.trace(zre.LogVerbosity.DEBUG, ujo, t);
  }
  function cjo() {
    let t = "",
      e = "";
    if (process.env.grpc_proxy) ((e = "grpc_proxy"), (t = process.env.grpc_proxy));
    else if (process.env.https_proxy) ((e = "https_proxy"), (t = process.env.https_proxy));
    else if (process.env.http_proxy) ((e = "http_proxy"), (t = process.env.http_proxy));
    else return {};
    let r;
    try {
      r = new sjo.URL(t);
    } catch {
      return ((0, wbe.log)(zre.LogVerbosity.ERROR, `cannot parse value of "${e}" env var`), {});
    }
    if (r.protocol !== "http:")
      return ((0, wbe.log)(zre.LogVerbosity.ERROR, `"${r.protocol}" scheme not supported in proxy URI`), {});
    let n = null;
    r.username &&
      (r.password
        ? ((0, wbe.log)(zre.LogVerbosity.INFO, "userinfo found in proxy URI"),
          (n = decodeURIComponent(`${r.username}:${r.password}`)))
        : (n = r.username));
    let o = r.hostname,
      s = r.port;
    s === "" && (s = "80");
    let a = { address: `${o}:${s}` };
    return (n && (a.creds = n), Yre("Proxy server " + a.address + " set by environment variable " + e), a);
  }
  function ljo() {
    let t = process.env.no_grpc_proxy,
      e = "no_grpc_proxy";
    return (
      t || ((t = process.env.no_proxy), (e = "no_proxy")),
      t ? (Yre("No proxy server list set by environment variable " + e), t.split(",")) : []
    );
  }
  function Fen(t) {
    let e = t.split("/");
    if (e.length !== 2) return null;
    let r = parseInt(e[1], 10);
    return !(0, Men.isIPv4)(e[0]) || Number.isNaN(r) || r < 0 || r > 32 ? null : { ip: Uen(e[0]), prefixLength: r };
  }
  function Uen(t) {
    return t.split(".").reduce((e, r) => (e << 8) + parseInt(r, 10), 0);
  }
  function mjo(t, e) {
    let r = t.ip,
      n = -1 << (32 - t.prefixLength);
    return (Uen(e) & n) === (r & n);
  }
  function djo(t) {
    for (let e of ljo()) {
      let r = Fen(e);
      if ((0, Men.isIPv4)(t) && r && mjo(r, t)) return !0;
      if (t.endsWith(e)) return !0;
    }
    return !1;
  }
  function fjo(t, e) {
    var r;
    let n = { target: t, extraOptions: {} };
    if (((r = e["grpc.enable_http_proxy"]) !== null && r !== void 0 ? r : 1) === 0 || t.scheme === "unix") return n;
    let o = cjo();
    if (!o.address) return n;
    let s = (0, xbe.splitHostPort)(t.path);
    if (!s) return n;
    let a = s.host;
    if (djo(a)) return (Yre("Not using proxy for target in no_proxy list: " + (0, xbe.uriToString)(t)), n);
    let u = { "grpc.http_connect_target": (0, xbe.uriToString)(t) };
    return (
      o.creds && (u["grpc.http_connect_creds"] = o.creds),
      { target: { scheme: "dns", path: o.address }, extraOptions: u }
    );
  }
  function pjo(t, e) {
    var r;
    if (!("grpc.http_connect_target" in e)) return Promise.resolve(null);
    let n = e["grpc.http_connect_target"],
      o = (0, xbe.parseUri)(n);
    if (o === null) return Promise.resolve(null);
    let s = (0, xbe.splitHostPort)(o.path);
    if (s === null) return Promise.resolve(null);
    let a = `${s.host}:${(r = s.port) !== null && r !== void 0 ? r : ajo.DEFAULT_PORT}`,
      u = { method: "CONNECT", path: a },
      c = { Host: a };
    ((0, Len.isTcpSubchannelAddress)(t) ? ((u.host = t.host), (u.port = t.port)) : (u.socketPath = t.path),
      "grpc.http_connect_creds" in e &&
        (c["Proxy-Authorization"] = "Basic " + Buffer.from(e["grpc.http_connect_creds"]).toString("base64")),
      (u.headers = c));
    let m = (0, Len.subchannelAddressToString)(t);
    return (
      Yre("Using proxy " + m + " to connect to " + u.path),
      new Promise((d, f) => {
        let p = ijo.request(u);
        (p.once("connect", (h, g, b) => {
          (p.removeAllListeners(),
            g.removeAllListeners(),
            h.statusCode === 200
              ? (Yre("Successfully connected to " + u.path + " through proxy " + m),
                b.length > 0 && g.unshift(b),
                Yre("Successfully established a plaintext connection to " + u.path + " through proxy " + m),
                d(g))
              : ((0, wbe.log)(
                  zre.LogVerbosity.ERROR,
                  "Failed to connect to " + u.path + " through proxy " + m + " with status " + h.statusCode,
                ),
                f()));
        }),
          p.once("error", (h) => {
            (p.removeAllListeners(),
              (0, wbe.log)(zre.LogVerbosity.ERROR, "Failed to connect to proxy " + m + " with error " + h.message),
              f());
          }),
          p.end());
      })
    );
  }
});