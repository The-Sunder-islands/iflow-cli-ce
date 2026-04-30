/**
 * @module gRe
 * @category network/ws
 * @label websocket
 * @position 21 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (gRe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var gRe = T((byu, wxr) => {
  "use strict";
  var r0o = Ae("events"),
    n0o = Ae("https"),
    i0o = Ae("http"),
    gxr = Ae("net"),
    o0o = Ae("tls"),
    { randomBytes: s0o, createHash: a0o } = Ae("crypto"),
    { Duplex: hyu, Readable: gyu } = Ae("stream"),
    { URL: y9t } = Ae("url"),
    tB = Nhe(),
    u0o = f9t(),
    c0o = g9t(),
    { isBlob: l0o } = iee(),
    {
      BINARY_TYPES: pxr,
      CLOSE_TIMEOUT: m0o,
      EMPTY_BUFFER: fRe,
      GUID: d0o,
      kForOnEventAttribute: _9t,
      kListener: f0o,
      kStatusCode: p0o,
      kWebSocket: Ch,
      NOOP: bxr,
    } = eR(),
    {
      EventTarget: { addEventListener: h0o, removeEventListener: g0o },
    } = dxr(),
    { format: b0o, parse: A0o } = A9t(),
    { toBuffer: y0o } = khe(),
    Axr = Symbol("kAborted"),
    E9t = [8, 13],
    nR = ["CONNECTING", "OPEN", "CLOSING", "CLOSED"],
    _0o = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/,
    Zm = class t extends r0o {
      constructor(e, r, n) {
        (super(),
          (this._binaryType = pxr[0]),
          (this._closeCode = 1006),
          (this._closeFrameReceived = !1),
          (this._closeFrameSent = !1),
          (this._closeMessage = fRe),
          (this._closeTimer = null),
          (this._errorEmitted = !1),
          (this._extensions = {}),
          (this._paused = !1),
          (this._protocol = ""),
          (this._readyState = t.CONNECTING),
          (this._receiver = null),
          (this._sender = null),
          (this._socket = null),
          e !== null
            ? ((this._bufferedAmount = 0),
              (this._isServer = !1),
              (this._redirects = 0),
              r === void 0
                ? (r = [])
                : Array.isArray(r) || (typeof r == "object" && r !== null ? ((n = r), (r = [])) : (r = [r])),
              yxr(this, e, r, n))
            : ((this._autoPong = n.autoPong), (this._closeTimeout = n.closeTimeout), (this._isServer = !0)));
      }
      get binaryType() {
        return this._binaryType;
      }
      set binaryType(e) {
        pxr.includes(e) && ((this._binaryType = e), this._receiver && (this._receiver._binaryType = e));
      }
      get bufferedAmount() {
        return this._socket ? this._socket._writableState.length + this._sender._bufferedBytes : this._bufferedAmount;
      }
      get extensions() {
        return Object.keys(this._extensions).join();
      }
      get isPaused() {
        return this._paused;
      }
      get onclose() {
        return null;
      }
      get onerror() {
        return null;
      }
      get onopen() {
        return null;
      }
      get onmessage() {
        return null;
      }
      get protocol() {
        return this._protocol;
      }
      get readyState() {
        return this._readyState;
      }
      get url() {
        return this._url;
      }
      setSocket(e, r, n) {
        let o = new u0o({
            allowSynchronousEvents: n.allowSynchronousEvents,
            binaryType: this.binaryType,
            extensions: this._extensions,
            isServer: this._isServer,
            maxPayload: n.maxPayload,
            skipUTF8Validation: n.skipUTF8Validation,
          }),
          s = new c0o(e, this._extensions, n.generateMask);
        ((this._receiver = o),
          (this._sender = s),
          (this._socket = e),
          (o[Ch] = this),
          (s[Ch] = this),
          (e[Ch] = this),
          o.on("conclude", C0o),
          o.on("drain", S0o),
          o.on("error", w0o),
          o.on("message", x0o),
          o.on("ping", T0o),
          o.on("pong", D0o),
          (s.onerror = I0o),
          e.setTimeout && e.setTimeout(0),
          e.setNoDelay && e.setNoDelay(),
          r.length > 0 && e.unshift(r),
          e.on("close", vxr),
          e.on("data", hRe),
          e.on("end", Cxr),
          e.on("error", Sxr),
          (this._readyState = t.OPEN),
          this.emit("open"));
      }
      emitClose() {
        if (!this._socket) {
          ((this._readyState = t.CLOSED), this.emit("close", this._closeCode, this._closeMessage));
          return;
        }
        (this._extensions[tB.extensionName] && this._extensions[tB.extensionName].cleanup(),
          this._receiver.removeAllListeners(),
          (this._readyState = t.CLOSED),
          this.emit("close", this._closeCode, this._closeMessage));
      }
      close(e, r) {
        if (this.readyState !== t.CLOSED) {
          if (this.readyState === t.CONNECTING) {
            Z9(this, this._req, "WebSocket was closed before the connection was established");
            return;
          }
          if (this.readyState === t.CLOSING) {
            this._closeFrameSent &&
              (this._closeFrameReceived || this._receiver._writableState.errorEmitted) &&
              this._socket.end();
            return;
          }
          ((this._readyState = t.CLOSING),
            this._sender.close(e, r, !this._isServer, (n) => {
              n ||
                ((this._closeFrameSent = !0),
                (this._closeFrameReceived || this._receiver._writableState.errorEmitted) && this._socket.end());
            }),
            Exr(this));
        }
      }
      pause() {
        this.readyState === t.CONNECTING || this.readyState === t.CLOSED || ((this._paused = !0), this._socket.pause());
      }
      ping(e, r, n) {
        if (this.readyState === t.CONNECTING) throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        if (
          (typeof e == "function" ? ((n = e), (e = r = void 0)) : typeof r == "function" && ((n = r), (r = void 0)),
          typeof e == "number" && (e = e.toString()),
          this.readyState !== t.OPEN)
        ) {
          v9t(this, e, n);
          return;
        }
        (r === void 0 && (r = !this._isServer), this._sender.ping(e || fRe, r, n));
      }
      pong(e, r, n) {
        if (this.readyState === t.CONNECTING) throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        if (
          (typeof e == "function" ? ((n = e), (e = r = void 0)) : typeof r == "function" && ((n = r), (r = void 0)),
          typeof e == "number" && (e = e.toString()),
          this.readyState !== t.OPEN)
        ) {
          v9t(this, e, n);
          return;
        }
        (r === void 0 && (r = !this._isServer), this._sender.pong(e || fRe, r, n));
      }
      resume() {
        this.readyState === t.CONNECTING ||
          this.readyState === t.CLOSED ||
          ((this._paused = !1), this._receiver._writableState.needDrain || this._socket.resume());
      }
      send(e, r, n) {
        if (this.readyState === t.CONNECTING) throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        if (
          (typeof r == "function" && ((n = r), (r = {})),
          typeof e == "number" && (e = e.toString()),
          this.readyState !== t.OPEN)
        ) {
          v9t(this, e, n);
          return;
        }
        let o = { binary: typeof e != "string", mask: !this._isServer, compress: !0, fin: !0, ...r };
        (this._extensions[tB.extensionName] || (o.compress = !1), this._sender.send(e || fRe, o, n));
      }
      terminate() {
        if (this.readyState !== t.CLOSED) {
          if (this.readyState === t.CONNECTING) {
            Z9(this, this._req, "WebSocket was closed before the connection was established");
            return;
          }
          this._socket && ((this._readyState = t.CLOSING), this._socket.destroy());
        }
      }
    };
  Object.defineProperty(Zm, "CONNECTING", { enumerable: !0, value: nR.indexOf("CONNECTING") });
  Object.defineProperty(Zm.prototype, "CONNECTING", { enumerable: !0, value: nR.indexOf("CONNECTING") });
  Object.defineProperty(Zm, "OPEN", { enumerable: !0, value: nR.indexOf("OPEN") });
  Object.defineProperty(Zm.prototype, "OPEN", { enumerable: !0, value: nR.indexOf("OPEN") });
  Object.defineProperty(Zm, "CLOSING", { enumerable: !0, value: nR.indexOf("CLOSING") });
  Object.defineProperty(Zm.prototype, "CLOSING", { enumerable: !0, value: nR.indexOf("CLOSING") });
  Object.defineProperty(Zm, "CLOSED", { enumerable: !0, value: nR.indexOf("CLOSED") });
  Object.defineProperty(Zm.prototype, "CLOSED", { enumerable: !0, value: nR.indexOf("CLOSED") });
  ["binaryType", "bufferedAmount", "extensions", "isPaused", "protocol", "readyState", "url"].forEach((t) => {
    Object.defineProperty(Zm.prototype, t, { enumerable: !0 });
  });
  ["open", "error", "close", "message"].forEach((t) => {
    Object.defineProperty(Zm.prototype, `on${t}`, {
      enumerable: !0,
      get() {
        for (let e of this.listeners(t)) if (e[_9t]) return e[f0o];
        return null;
      },
      set(e) {
        for (let r of this.listeners(t))
          if (r[_9t]) {
            this.removeListener(t, r);
            break;
          }
        typeof e == "function" && this.addEventListener(t, e, { [_9t]: !0 });
      },
    });
  });
  Zm.prototype.addEventListener = h0o;
  Zm.prototype.removeEventListener = g0o;
  wxr.exports = Zm;
  function yxr(t, e, r, n) {
    let o = {
      allowSynchronousEvents: !0,
      autoPong: !0,
      closeTimeout: m0o,
      protocolVersion: E9t[1],
      maxPayload: 104857600,
      skipUTF8Validation: !1,
      perMessageDeflate: !0,
      followRedirects: !1,
      maxRedirects: 10,
      ...n,
      socketPath: void 0,
      hostname: void 0,
      protocol: void 0,
      timeout: void 0,
      method: "GET",
      host: void 0,
      path: void 0,
      port: void 0,
    };
    if (((t._autoPong = o.autoPong), (t._closeTimeout = o.closeTimeout), !E9t.includes(o.protocolVersion)))
      throw new RangeError(
        `Unsupported protocol version: ${o.protocolVersion} (supported versions: ${E9t.join(", ")})`,
      );
    let s;
    if (e instanceof y9t) s = e;
    else
      try {
        s = new y9t(e);
      } catch {
        throw new SyntaxError(`Invalid URL: ${e}`);
      }
    (s.protocol === "http:" ? (s.protocol = "ws:") : s.protocol === "https:" && (s.protocol = "wss:"),
      (t._url = s.href));
    let a = s.protocol === "wss:",
      u = s.protocol === "ws+unix:",
      c;
    if (
      (s.protocol !== "ws:" && !a && !u
        ? (c = `The URL's protocol must be one of "ws:", "wss:", "http:", "https:", or "ws+unix:"`)
        : u && !s.pathname
          ? (c = "The URL's pathname is empty")
          : s.hash && (c = "The URL contains a fragment identifier"),
      c)
    ) {
      let b = new SyntaxError(c);
      if (t._redirects === 0) throw b;
      pRe(t, b);
      return;
    }
    let m = a ? 443 : 80,
      d = s0o(16).toString("base64"),
      f = a ? n0o.request : i0o.request,
      p = new Set(),
      h;
    if (
      ((o.createConnection = o.createConnection || (a ? v0o : E0o)),
      (o.defaultPort = o.defaultPort || m),
      (o.port = s.port || m),
      (o.host = s.hostname.startsWith("[") ? s.hostname.slice(1, -1) : s.hostname),
      (o.headers = {
        ...o.headers,
        "Sec-WebSocket-Version": o.protocolVersion,
        "Sec-WebSocket-Key": d,
        Connection: "Upgrade",
        Upgrade: "websocket",
      }),
      (o.path = s.pathname + s.search),
      (o.timeout = o.handshakeTimeout),
      o.perMessageDeflate &&
        ((h = new tB(o.perMessageDeflate !== !0 ? o.perMessageDeflate : {}, !1, o.maxPayload)),
        (o.headers["Sec-WebSocket-Extensions"] = b0o({ [tB.extensionName]: h.offer() }))),
      r.length)
    ) {
      for (let b of r) {
        if (typeof b != "string" || !_0o.test(b) || p.has(b))
          throw new SyntaxError("An invalid or duplicated subprotocol was specified");
        p.add(b);
      }
      o.headers["Sec-WebSocket-Protocol"] = r.join(",");
    }
    if (
      (o.origin &&
        (o.protocolVersion < 13 ? (o.headers["Sec-WebSocket-Origin"] = o.origin) : (o.headers.Origin = o.origin)),
      (s.username || s.password) && (o.auth = `${s.username}:${s.password}`),
      u)
    ) {
      let b = o.path.split(":");
      ((o.socketPath = b[0]), (o.path = b[1]));
    }
    let g;
    if (o.followRedirects) {
      if (t._redirects === 0) {
        ((t._originalIpc = u), (t._originalSecure = a), (t._originalHostOrSocketPath = u ? o.socketPath : s.host));
        let b = n && n.headers;
        if (((n = { ...n, headers: {} }), b)) for (let [A, y] of Object.entries(b)) n.headers[A.toLowerCase()] = y;
      } else if (t.listenerCount("redirect") === 0) {
        let b = u
          ? t._originalIpc
            ? o.socketPath === t._originalHostOrSocketPath
            : !1
          : t._originalIpc
            ? !1
            : s.host === t._originalHostOrSocketPath;
        (!b || (t._originalSecure && !a)) &&
          (delete o.headers.authorization, delete o.headers.cookie, b || delete o.headers.host, (o.auth = void 0));
      }
      (o.auth &&
        !n.headers.authorization &&
        (n.headers.authorization = "Basic " + Buffer.from(o.auth).toString("base64")),
        (g = t._req = f(o)),
        t._redirects && t.emit("redirect", t.url, g));
    } else g = t._req = f(o);
    (o.timeout &&
      g.on("timeout", () => {
        Z9(t, g, "Opening handshake has timed out");
      }),
      g.on("error", (b) => {
        g === null || g[Axr] || ((g = t._req = null), pRe(t, b));
      }),
      g.on("response", (b) => {
        let A = b.headers.location,
          y = b.statusCode;
        if (A && o.followRedirects && y >= 300 && y < 400) {
          if (++t._redirects > o.maxRedirects) {
            Z9(t, g, "Maximum redirects exceeded");
            return;
          }
          g.abort();
          let E;
          try {
            E = new y9t(A, e);
          } catch {
            let C = new SyntaxError(`Invalid URL: ${A}`);
            pRe(t, C);
            return;
          }
          yxr(t, E, r, n);
        } else t.emit("unexpected-response", g, b) || Z9(t, g, `Unexpected server response: ${b.statusCode}`);
      }),
      g.on("upgrade", (b, A, y) => {
        if ((t.emit("upgrade", b), t.readyState !== Zm.CONNECTING)) return;
        g = t._req = null;
        let E = b.headers.upgrade;
        if (E === void 0 || E.toLowerCase() !== "websocket") {
          Z9(t, A, "Invalid Upgrade header");
          return;
        }
        let v = a0o("sha1")
          .update(d + d0o)
          .digest("base64");
        if (b.headers["sec-websocket-accept"] !== v) {
          Z9(t, A, "Invalid Sec-WebSocket-Accept header");
          return;
        }
        let C = b.headers["sec-websocket-protocol"],
          x;
        if (
          (C !== void 0
            ? p.size
              ? p.has(C) || (x = "Server sent an invalid subprotocol")
              : (x = "Server sent a subprotocol but none was requested")
            : p.size && (x = "Server sent no subprotocol"),
          x)
        ) {
          Z9(t, A, x);
          return;
        }
        C && (t._protocol = C);
        let k = b.headers["sec-websocket-extensions"];
        if (k !== void 0) {
          if (!h) {
            Z9(t, A, "Server sent a Sec-WebSocket-Extensions header but no extension was requested");
            return;
          }
          let R;
          try {
            R = A0o(k);
          } catch {
            Z9(t, A, "Invalid Sec-WebSocket-Extensions header");
            return;
          }
          let P = Object.keys(R);
          if (P.length !== 1 || P[0] !== tB.extensionName) {
            Z9(t, A, "Server indicated an extension that was not requested");
            return;
          }
          try {
            h.accept(R[tB.extensionName]);
          } catch {
            Z9(t, A, "Invalid Sec-WebSocket-Extensions header");
            return;
          }
          t._extensions[tB.extensionName] = h;
        }
        t.setSocket(A, y, {
          allowSynchronousEvents: o.allowSynchronousEvents,
          generateMask: o.generateMask,
          maxPayload: o.maxPayload,
          skipUTF8Validation: o.skipUTF8Validation,
        });
      }),
      o.finishRequest ? o.finishRequest(g, t) : g.end());
  }
  function pRe(t, e) {
    ((t._readyState = Zm.CLOSING), (t._errorEmitted = !0), t.emit("error", e), t.emitClose());
  }
  function E0o(t) {
    return ((t.path = t.socketPath), gxr.connect(t));
  }
  function v0o(t) {
    return (
      (t.path = void 0),
      !t.servername && t.servername !== "" && (t.servername = gxr.isIP(t.host) ? "" : t.host),
      o0o.connect(t)
    );
  }
  function Z9(t, e, r) {
    t._readyState = Zm.CLOSING;
    let n = new Error(r);
    (Error.captureStackTrace(n, Z9),
      e.setHeader
        ? ((e[Axr] = !0), e.abort(), e.socket && !e.socket.destroyed && e.socket.destroy(), process.nextTick(pRe, t, n))
        : (e.destroy(n), e.once("error", t.emit.bind(t, "error")), e.once("close", t.emitClose.bind(t))));
  }
  function v9t(t, e, r) {
    if (e) {
      let n = l0o(e) ? e.size : y0o(e).length;
      t._socket ? (t._sender._bufferedBytes += n) : (t._bufferedAmount += n);
    }
    if (r) {
      let n = new Error(`WebSocket is not open: readyState ${t.readyState} (${nR[t.readyState]})`);
      process.nextTick(r, n);
    }
  }
  function C0o(t, e) {
    let r = this[Ch];
    ((r._closeFrameReceived = !0),
      (r._closeMessage = e),
      (r._closeCode = t),
      r._socket[Ch] !== void 0 &&
        (r._socket.removeListener("data", hRe),
        process.nextTick(_xr, r._socket),
        t === 1005 ? r.close() : r.close(t, e)));
  }
  function S0o() {
    let t = this[Ch];
    t.isPaused || t._socket.resume();
  }
  function w0o(t) {
    let e = this[Ch];
    (e._socket[Ch] !== void 0 &&
      (e._socket.removeListener("data", hRe), process.nextTick(_xr, e._socket), e.close(t[p0o])),
      e._errorEmitted || ((e._errorEmitted = !0), e.emit("error", t)));
  }
  function hxr() {
    this[Ch].emitClose();
  }
  function x0o(t, e) {
    this[Ch].emit("message", t, e);
  }
  function T0o(t) {
    let e = this[Ch];
    (e._autoPong && e.pong(t, !this._isServer, bxr), e.emit("ping", t));
  }
  function D0o(t) {
    this[Ch].emit("pong", t);
  }
  function _xr(t) {
    t.resume();
  }
  function I0o(t) {
    let e = this[Ch];
    e.readyState !== Zm.CLOSED &&
      (e.readyState === Zm.OPEN && ((e._readyState = Zm.CLOSING), Exr(e)),
      this._socket.end(),
      e._errorEmitted || ((e._errorEmitted = !0), e.emit("error", t)));
  }
  function Exr(t) {
    t._closeTimer = setTimeout(t._socket.destroy.bind(t._socket), t._closeTimeout);
  }
  function vxr() {
    let t = this[Ch];
    if (
      (this.removeListener("close", vxr),
      this.removeListener("data", hRe),
      this.removeListener("end", Cxr),
      (t._readyState = Zm.CLOSING),
      !this._readableState.endEmitted &&
        !t._closeFrameReceived &&
        !t._receiver._writableState.errorEmitted &&
        this._readableState.length !== 0)
    ) {
      let e = this.read(this._readableState.length);
      t._receiver.write(e);
    }
    (t._receiver.end(),
      (this[Ch] = void 0),
      clearTimeout(t._closeTimer),
      t._receiver._writableState.finished || t._receiver._writableState.errorEmitted
        ? t.emitClose()
        : (t._receiver.on("error", hxr), t._receiver.on("finish", hxr)));
  }
  function hRe(t) {
    this[Ch]._receiver.write(t) || this.pause();
  }
  function Cxr() {
    let t = this[Ch];
    ((t._readyState = Zm.CLOSING), t._receiver.end(), this.end());
  }
  function Sxr() {
    let t = this[Ch];
    (this.removeListener("error", Sxr), this.on("error", bxr), t && ((t._readyState = Zm.CLOSING), this.destroy()));
  }
});