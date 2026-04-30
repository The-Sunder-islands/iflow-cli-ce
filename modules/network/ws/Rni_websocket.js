/**
 * @module Rni
 * @category network/ws
 * @label websocket
 * @position 1575 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Rni) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Rni = T((f4c, Ini) => {
  "use strict";
  var { isArrayBuffer: V3a } = Ae("node:util/types"),
    { webidl: co } = jg(),
    { URLSerializer: W3a } = HE(),
    { environmentSettingsObject: wni } = z6(),
    { staticPropertyDescriptors: DU, states: $O, sentCloseFrameState: Ucr, sendHints: dst, opcodes: $cr } = TU(),
    {
      isConnecting: z3a,
      isEstablished: xni,
      isClosing: Tni,
      isClosed: Y3a,
      isValidSubprotocol: K3a,
      fireEvent: fst,
      utf8Decode: J3a,
      toArrayBuffer: X3a,
      getURLRecord: Z3a,
    } = aY(),
    { establishWebSocketConnection: ega, closeWebSocketConnection: tga, failWebsocketConnection: Dni } = cst(),
    { ByteParser: rga } = Lcr(),
    { kEnumerableProperty: ev } = ks(),
    { getGlobalDispatcher: nga } = Rot(),
    { ErrorEvent: iga, CloseEvent: oga, createFastMessageEvent: sga } = sst(),
    { SendQueue: aga } = Sni(),
    { WebsocketFrameSend: uga } = Lle(),
    { channels: BD } = mU(),
    q2 = class t extends EventTarget {
      #e = { open: null, error: null, close: null, message: null };
      #t = 0;
      #r = "";
      #n = "";
      #i;
      #o = {
        onConnectionEstablished: (e, r) => this.#l(e, r),
        onMessage: (e, r) => this.#c(e, r),
        onParserError: (e) => Dni(this.#o, null, e.message),
        onParserDrain: () => this.#p(),
        onSocketData: (e) => {
          this.#s.write(e) || this.#o.socket.pause();
        },
        onSocketError: (e) => {
          ((this.#o.readyState = $O.CLOSING),
            BD.socketError.hasSubscribers && BD.socketError.publish(e),
            this.#o.socket.destroy());
        },
        onSocketClose: () => this.#f(),
        onPing: (e) => {
          BD.ping.hasSubscribers && BD.ping.publish({ payload: e, websocket: this });
        },
        onPong: (e) => {
          BD.pong.hasSubscribers && BD.pong.publish({ payload: e, websocket: this });
        },
        readyState: $O.CONNECTING,
        socket: null,
        closeState: new Set(),
        controller: null,
        wasEverConnected: !1,
      };
      #u;
      #a;
      #s;
      constructor(e, r = []) {
        (super(), co.util.markAsUncloneable(this));
        let n = "WebSocket constructor";
        co.argumentLengthCheck(arguments, 1, n);
        let o = co.converters["DOMString or sequence<DOMString> or WebSocketInit"](r, n, "options");
        ((e = co.converters.USVString(e)), (r = o.protocols));
        let s = wni.settingsObject.baseUrl,
          a = Z3a(e, s);
        if ((typeof r == "string" && (r = [r]), r.length !== new Set(r.map((c) => c.toLowerCase())).size))
          throw new DOMException("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
        if (r.length > 0 && !r.every((c) => K3a(c)))
          throw new DOMException("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
        this.#u = new URL(a.href);
        let u = wni.settingsObject;
        ((this.#o.controller = ega(a, r, u, this.#o, o)), (this.#o.readyState = t.CONNECTING), (this.#a = "blob"));
      }
      close(e = void 0, r = void 0) {
        (co.brandCheck(this, t),
          e !== void 0 && (e = co.converters["unsigned short"](e, "WebSocket.close", "code", co.attributes.Clamp)),
          r !== void 0 && (r = co.converters.USVString(r)),
          (e ??= null),
          (r ??= ""),
          tga(this.#o, e, r, !0));
      }
      send(e) {
        co.brandCheck(this, t);
        let r = "WebSocket.send";
        if (
          (co.argumentLengthCheck(arguments, 1, r),
          (e = co.converters.WebSocketSendData(e, r, "data")),
          z3a(this.#o.readyState))
        )
          throw new DOMException("Sent before connected.", "InvalidStateError");
        if (!(!xni(this.#o.readyState) || Tni(this.#o.readyState)))
          if (typeof e == "string") {
            let n = Buffer.from(e);
            ((this.#t += n.byteLength),
              this.#i.add(
                n,
                () => {
                  this.#t -= n.byteLength;
                },
                dst.text,
              ));
          } else
            V3a(e)
              ? ((this.#t += e.byteLength),
                this.#i.add(
                  e,
                  () => {
                    this.#t -= e.byteLength;
                  },
                  dst.arrayBuffer,
                ))
              : ArrayBuffer.isView(e)
                ? ((this.#t += e.byteLength),
                  this.#i.add(
                    e,
                    () => {
                      this.#t -= e.byteLength;
                    },
                    dst.typedArray,
                  ))
                : co.is.Blob(e) &&
                  ((this.#t += e.size),
                  this.#i.add(
                    e,
                    () => {
                      this.#t -= e.size;
                    },
                    dst.blob,
                  ));
      }
      get readyState() {
        return (co.brandCheck(this, t), this.#o.readyState);
      }
      get bufferedAmount() {
        return (co.brandCheck(this, t), this.#t);
      }
      get url() {
        return (co.brandCheck(this, t), W3a(this.#u));
      }
      get extensions() {
        return (co.brandCheck(this, t), this.#n);
      }
      get protocol() {
        return (co.brandCheck(this, t), this.#r);
      }
      get onopen() {
        return (co.brandCheck(this, t), this.#e.open);
      }
      set onopen(e) {
        (co.brandCheck(this, t), this.#e.open && this.removeEventListener("open", this.#e.open));
        let r = co.converters.EventHandlerNonNull(e);
        r !== null ? (this.addEventListener("open", r), (this.#e.open = e)) : (this.#e.open = null);
      }
      get onerror() {
        return (co.brandCheck(this, t), this.#e.error);
      }
      set onerror(e) {
        (co.brandCheck(this, t), this.#e.error && this.removeEventListener("error", this.#e.error));
        let r = co.converters.EventHandlerNonNull(e);
        r !== null ? (this.addEventListener("error", r), (this.#e.error = e)) : (this.#e.error = null);
      }
      get onclose() {
        return (co.brandCheck(this, t), this.#e.close);
      }
      set onclose(e) {
        (co.brandCheck(this, t), this.#e.close && this.removeEventListener("close", this.#e.close));
        let r = co.converters.EventHandlerNonNull(e);
        r !== null ? (this.addEventListener("close", r), (this.#e.close = e)) : (this.#e.close = null);
      }
      get onmessage() {
        return (co.brandCheck(this, t), this.#e.message);
      }
      set onmessage(e) {
        (co.brandCheck(this, t), this.#e.message && this.removeEventListener("message", this.#e.message));
        let r = co.converters.EventHandlerNonNull(e);
        r !== null ? (this.addEventListener("message", r), (this.#e.message = e)) : (this.#e.message = null);
      }
      get binaryType() {
        return (co.brandCheck(this, t), this.#a);
      }
      set binaryType(e) {
        (co.brandCheck(this, t), e !== "blob" && e !== "arraybuffer" ? (this.#a = "blob") : (this.#a = e));
      }
      #l(e, r) {
        this.#o.socket = e.socket;
        let n = new rga(this.#o, r);
        (n.on("drain", () => this.#o.onParserDrain()),
          n.on("error", (a) => this.#o.onParserError(a)),
          (this.#s = n),
          (this.#i = new aga(e.socket)),
          (this.#o.readyState = $O.OPEN));
        let o = e.headersList.get("sec-websocket-extensions");
        o !== null && (this.#n = o);
        let s = e.headersList.get("sec-websocket-protocol");
        if ((s !== null && (this.#r = s), fst("open", this), BD.open.hasSubscribers)) {
          let a = e.headersList.entries;
          BD.open.publish({
            address: e.socket.address(),
            protocol: this.#r,
            extensions: this.#n,
            websocket: this,
            handshakeResponse: { status: e.status, statusText: e.statusText, headers: a },
          });
        }
      }
      #c(e, r) {
        if (this.#o.readyState !== $O.OPEN) return;
        let n;
        if (e === $cr.TEXT)
          try {
            n = J3a(r);
          } catch {
            Dni(this.#o, 1007, "Received invalid UTF-8 in text frame.");
            return;
          }
        else e === $cr.BINARY && (this.#a === "blob" ? (n = new Blob([r])) : (n = X3a(r)));
        fst("message", this, sga, { origin: this.#u.origin, data: n });
      }
      #p() {
        this.#o.socket.resume();
      }
      #f() {
        let e = this.#o.closeState.has(Ucr.SENT) && this.#o.closeState.has(Ucr.RECEIVED),
          r = 1005,
          n = "",
          o = this.#s?.closingInfo;
        (o && !o.error && ((r = o.code ?? 1005), (n = o.reason)),
          (this.#o.readyState = $O.CLOSED),
          this.#o.closeState.has(Ucr.RECEIVED) ||
            ((r = 1006), fst("error", this, (s, a) => new iga(s, a), { error: new TypeError(n) })),
          fst("close", this, (s, a) => new oga(s, a), { wasClean: e, code: r, reason: n }),
          BD.close.hasSubscribers && BD.close.publish({ websocket: this, code: r, reason: n }));
      }
      static ping(e, r) {
        if (Buffer.isBuffer(r)) {
          if (r.length > 125) throw new TypeError("A PING frame cannot have a body larger than 125 bytes.");
        } else if (r !== void 0) throw new TypeError("Expected buffer payload");
        let n = e.#o.readyState;
        if (xni(n) && !Tni(n) && !Y3a(n)) {
          let o = new uga(r);
          e.#o.socket.write(o.createFrame($cr.PING));
        }
      }
    },
    { ping: cga } = q2;
  Reflect.deleteProperty(q2, "ping");
  q2.CONNECTING = q2.prototype.CONNECTING = $O.CONNECTING;
  q2.OPEN = q2.prototype.OPEN = $O.OPEN;
  q2.CLOSING = q2.prototype.CLOSING = $O.CLOSING;
  q2.CLOSED = q2.prototype.CLOSED = $O.CLOSED;
  Object.defineProperties(q2.prototype, {
    CONNECTING: DU,
    OPEN: DU,
    CLOSING: DU,
    CLOSED: DU,
    url: ev,
    readyState: ev,
    bufferedAmount: ev,
    onopen: ev,
    onerror: ev,
    onclose: ev,
    close: ev,
    onmessage: ev,
    binaryType: ev,
    send: ev,
    extensions: ev,
    protocol: ev,
    [Symbol.toStringTag]: { value: "WebSocket", writable: !1, enumerable: !1, configurable: !0 },
  });
  Object.defineProperties(q2, { CONNECTING: DU, OPEN: DU, CLOSING: DU, CLOSED: DU });
  co.converters["sequence<DOMString>"] = co.sequenceConverter(co.converters.DOMString);
  co.converters["DOMString or sequence<DOMString>"] = function (t, e, r) {
    return co.util.Type(t) === co.util.Types.OBJECT && Symbol.iterator in t
      ? co.converters["sequence<DOMString>"](t)
      : co.converters.DOMString(t, e, r);
  };
  co.converters.WebSocketInit = co.dictionaryConverter([
    { key: "protocols", converter: co.converters["DOMString or sequence<DOMString>"], defaultValue: () => [] },
    { key: "dispatcher", converter: co.converters.any, defaultValue: () => nga() },
    { key: "headers", converter: co.nullableConverter(co.converters.HeadersInit) },
  ]);
  co.converters["DOMString or sequence<DOMString> or WebSocketInit"] = function (t) {
    return co.util.Type(t) === co.util.Types.OBJECT && !(Symbol.iterator in t)
      ? co.converters.WebSocketInit(t)
      : { protocols: co.converters["DOMString or sequence<DOMString>"](t) };
  };
  co.converters.WebSocketSendData = function (t) {
    return co.util.Type(t) === co.util.Types.OBJECT && (co.is.Blob(t) || co.is.BufferSource(t))
      ? t
      : co.converters.USVString(t);
  };
  Ini.exports = { WebSocket: q2, ping: cga };
});