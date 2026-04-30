/**
 * @module Fxr
 * @category ui/ink
 * @label ink
 * @position 24 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Fxr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Fxr = T((vyu, Mxr) => {
  "use strict";
  var B0o = Ae("events"),
    bRe = Ae("http"),
    { Duplex: Eyu } = Ae("stream"),
    { createHash: L0o } = Ae("crypto"),
    Oxr = A9t(),
    aG = Nhe(),
    M0o = kxr(),
    F0o = gRe(),
    { CLOSE_TIMEOUT: U0o, GUID: $0o, kWebSocket: j0o } = eR(),
    Q0o = /^[+/0-9A-Za-z]{22}==$/,
    Nxr = 0,
    Pxr = 1,
    Lxr = 2,
    C9t = class extends B0o {
      constructor(e, r) {
        if (
          (super(),
          (e = {
            allowSynchronousEvents: !0,
            autoPong: !0,
            maxPayload: 100 * 1024 * 1024,
            skipUTF8Validation: !1,
            perMessageDeflate: !1,
            handleProtocols: null,
            clientTracking: !0,
            closeTimeout: U0o,
            verifyClient: null,
            noServer: !1,
            backlog: null,
            server: null,
            host: null,
            path: null,
            port: null,
            WebSocket: F0o,
            ...e,
          }),
          (e.port == null && !e.server && !e.noServer) ||
            (e.port != null && (e.server || e.noServer)) ||
            (e.server && e.noServer))
        )
          throw new TypeError('One and only one of the "port", "server", or "noServer" options must be specified');
        if (
          (e.port != null
            ? ((this._server = bRe.createServer((n, o) => {
                let s = bRe.STATUS_CODES[426];
                (o.writeHead(426, { "Content-Length": s.length, "Content-Type": "text/plain" }), o.end(s));
              })),
              this._server.listen(e.port, e.host, e.backlog, r))
            : e.server && (this._server = e.server),
          this._server)
        ) {
          let n = this.emit.bind(this, "connection");
          this._removeListeners = G0o(this._server, {
            listening: this.emit.bind(this, "listening"),
            error: this.emit.bind(this, "error"),
            upgrade: (o, s, a) => {
              this.handleUpgrade(o, s, a, n);
            },
          });
        }
        (e.perMessageDeflate === !0 && (e.perMessageDeflate = {}),
          e.clientTracking && ((this.clients = new Set()), (this._shouldEmitClose = !1)),
          (this.options = e),
          (this._state = Nxr));
      }
      address() {
        if (this.options.noServer) throw new Error('The server is operating in "noServer" mode');
        return this._server ? this._server.address() : null;
      }
      close(e) {
        if (this._state === Lxr) {
          (e &&
            this.once("close", () => {
              e(new Error("The server is not running"));
            }),
            process.nextTick(Mhe, this));
          return;
        }
        if ((e && this.once("close", e), this._state !== Pxr))
          if (((this._state = Pxr), this.options.noServer || this.options.server))
            (this._server && (this._removeListeners(), (this._removeListeners = this._server = null)),
              this.clients
                ? this.clients.size
                  ? (this._shouldEmitClose = !0)
                  : process.nextTick(Mhe, this)
                : process.nextTick(Mhe, this));
          else {
            let r = this._server;
            (this._removeListeners(),
              (this._removeListeners = this._server = null),
              r.close(() => {
                Mhe(this);
              }));
          }
      }
      shouldHandle(e) {
        if (this.options.path) {
          let r = e.url.indexOf("?");
          if ((r !== -1 ? e.url.slice(0, r) : e.url) !== this.options.path) return !1;
        }
        return !0;
      }
      handleUpgrade(e, r, n, o) {
        r.on("error", Bxr);
        let s = e.headers["sec-websocket-key"],
          a = e.headers.upgrade,
          u = +e.headers["sec-websocket-version"];
        if (e.method !== "GET") {
          uG(this, e, r, 405, "Invalid HTTP method");
          return;
        }
        if (a === void 0 || a.toLowerCase() !== "websocket") {
          uG(this, e, r, 400, "Invalid Upgrade header");
          return;
        }
        if (s === void 0 || !Q0o.test(s)) {
          uG(this, e, r, 400, "Missing or invalid Sec-WebSocket-Key header");
          return;
        }
        if (u !== 13 && u !== 8) {
          uG(this, e, r, 400, "Missing or invalid Sec-WebSocket-Version header", { "Sec-WebSocket-Version": "13, 8" });
          return;
        }
        if (!this.shouldHandle(e)) {
          Fhe(r, 400);
          return;
        }
        let c = e.headers["sec-websocket-protocol"],
          m = new Set();
        if (c !== void 0)
          try {
            m = M0o.parse(c);
          } catch {
            uG(this, e, r, 400, "Invalid Sec-WebSocket-Protocol header");
            return;
          }
        let d = e.headers["sec-websocket-extensions"],
          f = {};
        if (this.options.perMessageDeflate && d !== void 0) {
          let p = new aG(this.options.perMessageDeflate, !0, this.options.maxPayload);
          try {
            let h = Oxr.parse(d);
            h[aG.extensionName] && (p.accept(h[aG.extensionName]), (f[aG.extensionName] = p));
          } catch {
            uG(this, e, r, 400, "Invalid or unacceptable Sec-WebSocket-Extensions header");
            return;
          }
        }
        if (this.options.verifyClient) {
          let p = {
            origin: e.headers[`${u === 8 ? "sec-websocket-origin" : "origin"}`],
            secure: !!(e.socket.authorized || e.socket.encrypted),
            req: e,
          };
          if (this.options.verifyClient.length === 2) {
            this.options.verifyClient(p, (h, g, b, A) => {
              if (!h) return Fhe(r, g || 401, b, A);
              this.completeUpgrade(f, s, m, e, r, n, o);
            });
            return;
          }
          if (!this.options.verifyClient(p)) return Fhe(r, 401);
        }
        this.completeUpgrade(f, s, m, e, r, n, o);
      }
      completeUpgrade(e, r, n, o, s, a, u) {
        if (!s.readable || !s.writable) return s.destroy();
        if (s[j0o])
          throw new Error(
            "server.handleUpgrade() was called more than once with the same socket, possibly due to a misconfiguration",
          );
        if (this._state > Nxr) return Fhe(s, 503);
        let m = [
            "HTTP/1.1 101 Switching Protocols",
            "Upgrade: websocket",
            "Connection: Upgrade",
            `Sec-WebSocket-Accept: ${L0o("sha1")
              .update(r + $0o)
              .digest("base64")}`,
          ],
          d = new this.options.WebSocket(null, void 0, this.options);
        if (n.size) {
          let f = this.options.handleProtocols ? this.options.handleProtocols(n, o) : n.values().next().value;
          f && (m.push(`Sec-WebSocket-Protocol: ${f}`), (d._protocol = f));
        }
        if (e[aG.extensionName]) {
          let f = e[aG.extensionName].params,
            p = Oxr.format({ [aG.extensionName]: [f] });
          (m.push(`Sec-WebSocket-Extensions: ${p}`), (d._extensions = e));
        }
        (this.emit("headers", m, o),
          s.write(
            m.concat(`\r
`).join(`\r
`),
          ),
          s.removeListener("error", Bxr),
          d.setSocket(s, a, {
            allowSynchronousEvents: this.options.allowSynchronousEvents,
            maxPayload: this.options.maxPayload,
            skipUTF8Validation: this.options.skipUTF8Validation,
          }),
          this.clients &&
            (this.clients.add(d),
            d.on("close", () => {
              (this.clients.delete(d), this._shouldEmitClose && !this.clients.size && process.nextTick(Mhe, this));
            })),
          u(d, o));
      }
    };
  Mxr.exports = C9t;
  function G0o(t, e) {
    for (let r of Object.keys(e)) t.on(r, e[r]);
    return function () {
      for (let n of Object.keys(e)) t.removeListener(n, e[n]);
    };
  }
  function Mhe(t) {
    ((t._state = Lxr), t.emit("close"));
  }
  function Bxr() {
    this.destroy();
  }
  function Fhe(t, e, r, n) {
    ((r = r || bRe.STATUS_CODES[e]),
      (n = { Connection: "close", "Content-Type": "text/html", "Content-Length": Buffer.byteLength(r), ...n }),
      t.once("finish", t.destroy),
      t.end(
        `HTTP/1.1 ${e} ${bRe.STATUS_CODES[e]}\r
` +
          Object.keys(n).map((o) => `${o}: ${n[o]}`).join(`\r
`) +
          `\r
\r
` +
          r,
      ));
  }
  function uG(t, e, r, n, o, s) {
    if (t.listenerCount("wsClientError")) {
      let a = new Error(o);
      (Error.captureStackTrace(a, uG), t.emit("wsClientError", a, r, e));
    } else Fhe(r, n, o, s);
  }
});
var q0o,
  H0o,
  V0o,
  cG,
  S9t,
  Uxr,
  Uhe = j(() => {
    ((q0o = Se(Ixr(), 1)),
      (H0o = Se(f9t(), 1)),
      (V0o = Se(g9t(), 1)),
      (cG = Se(gRe(), 1)),
      (S9t = Se(Fxr(), 1)),
      (Uxr = cG.default));
  });
var ARe,
  $xr = j(() => {
    Uhe();
    ARe = global;
    ARe.WebSocket ||= Uxr;
    ARe.window ||= global;
    ARe.self ||= global;
    ARe.window.__REACT_DEVTOOLS_COMPONENT_FILTERS__ = [
      { type: 1, value: 7, isEnabled: !0 },
      { type: 2, value: "InternalApp", isEnabled: !0, isValid: !0 },
      { type: 2, value: "InternalAppContext", isEnabled: !0, isValid: !0 },
      { type: 2, value: "InternalStdoutContext", isEnabled: !0, isValid: !0 },
      { type: 2, value: "InternalStderrContext", isEnabled: !0, isValid: !0 },
      { type: 2, value: "InternalStdinContext", isEnabled: !0, isValid: !0 },
      { type: 2, value: "InternalFocusContext", isEnabled: !0, isValid: !0 },
    ];
  });