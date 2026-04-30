/**
 * @module Fni
 * @category network/http
 * @label undici
 * @position 1577 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Fni) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Fni = T((h4c, Mni) => {
  "use strict";
  var { createDeferredPromise: Qcr } = $ve(),
    { environmentSettingsObject: Pni } = z6(),
    { states: Fle, opcodes: hst, sentCloseFrameState: Ule } = TU(),
    { webidl: _1 } = jg(),
    { getURLRecord: fga, isValidSubprotocol: pga, isEstablished: hga, utf8Decode: gga } = aY(),
    { establishWebSocketConnection: bga, failWebsocketConnection: Gcr, closeWebSocketConnection: qcr } = cst(),
    { channels: Bni } = mU(),
    { WebsocketFrameSend: Aga } = Lle(),
    { ByteParser: yga } = Lcr(),
    { WebSocketError: _ga, createUnvalidatedWebSocketError: Ega } = jcr(),
    { kEnumerableProperty: gst } = ks(),
    { utf8DecodeBytes: vga } = Bve(),
    Lni = !1,
    bst = class {
      #e;
      #t;
      #r;
      #n;
      #i;
      #o;
      #u = !1;
      #a = {
        onConnectionEstablished: (e, r) => this.#c(e, r),
        onMessage: (e, r) => this.#p(e, r),
        onParserError: (e) => Gcr(this.#a, null, e.message),
        onParserDrain: () => this.#a.socket.resume(),
        onSocketData: (e) => {
          this.#s.write(e) || this.#a.socket.pause();
        },
        onSocketError: (e) => {
          ((this.#a.readyState = Fle.CLOSING),
            Bni.socketError.hasSubscribers && Bni.socketError.publish(e),
            this.#a.socket.destroy());
        },
        onSocketClose: () => this.#f(),
        onPing: () => {},
        onPong: () => {},
        readyState: Fle.CONNECTING,
        socket: null,
        closeState: new Set(),
        controller: null,
        wasEverConnected: !1,
      };
      #s;
      constructor(e, r = void 0) {
        (Lni ||
          (process.emitWarning("WebSocketStream is experimental! Expect it to change at any time.", {
            code: "UNDICI-WSS",
          }),
          (Lni = !0)),
          _1.argumentLengthCheck(arguments, 1, "WebSocket"),
          (e = _1.converters.USVString(e)),
          r !== null && (r = _1.converters.WebSocketStreamOptions(r)));
        let n = Pni.settingsObject.baseUrl,
          o = fga(e, n),
          s = r.protocols;
        if (s.length !== new Set(s.map((u) => u.toLowerCase())).size)
          throw new DOMException("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
        if (s.length > 0 && !s.every((u) => pga(u)))
          throw new DOMException("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
        if (((this.#e = o.toString()), (this.#t = Qcr()), (this.#r = Qcr()), r.signal != null)) {
          let u = r.signal;
          if (u.aborted) {
            (this.#t.reject(u.reason), this.#r.reject(u.reason));
            return;
          }
          u.addEventListener(
            "abort",
            () => {
              hga(this.#a.readyState) ||
                (Gcr(this.#a),
                (this.#a.readyState = Fle.CLOSING),
                this.#t.reject(u.reason),
                this.#r.reject(u.reason),
                (this.#u = !0));
            },
            { once: !0 },
          );
        }
        let a = Pni.settingsObject;
        this.#a.controller = bga(o, s, a, this.#a, r);
      }
      get url() {
        return this.#e.toString();
      }
      get opened() {
        return this.#t.promise;
      }
      get closed() {
        return this.#r.promise;
      }
      close(e = void 0) {
        e !== null && (e = _1.converters.WebSocketCloseInfo(e));
        let r = e.closeCode ?? null,
          n = e.reason;
        qcr(this.#a, r, n, !0);
      }
      #l(e) {
        e = _1.converters.WebSocketStreamWrite(e);
        let r = Qcr(),
          n = null,
          o = null;
        if (_1.is.BufferSource(e))
          ((n = new Uint8Array(
            ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e.slice(),
          )),
            (o = hst.BINARY));
        else {
          let s;
          try {
            s = _1.converters.DOMString(e);
          } catch (a) {
            return (r.reject(a), r.promise);
          }
          ((n = new TextEncoder().encode(s)), (o = hst.TEXT));
        }
        if (!this.#a.closeState.has(Ule.SENT) && !this.#a.closeState.has(Ule.RECEIVED)) {
          let s = new Aga(n);
          this.#a.socket.write(s.createFrame(o), () => {
            r.resolve(void 0);
          });
        }
        return r.promise;
      }
      #c(e, r) {
        this.#a.socket = e.socket;
        let n = new yga(this.#a, r);
        (n.on("drain", () => this.#a.onParserDrain()),
          n.on("error", (c) => this.#a.onParserError(c)),
          (this.#s = n),
          (this.#a.readyState = Fle.OPEN));
        let o = r ?? "",
          s = e.headersList.get("sec-websocket-protocol") ?? "",
          a = new ReadableStream({
            start: (c) => {
              this.#i = c;
            },
            pull(c) {
              let m;
              for (; c.desiredSize > 0 && (m = e.socket.read()) !== null; ) c.enqueue(m);
            },
            cancel: (c) => this.#g(c),
          }),
          u = new WritableStream({
            write: (c) => this.#l(c),
            close: () => qcr(this.#a, null, null),
            abort: (c) => this.#h(c),
          });
        ((this.#n = a), (this.#o = u), this.#t.resolve({ extensions: o, protocol: s, readable: a, writable: u }));
      }
      #p(e, r) {
        if (this.#a.readyState !== Fle.OPEN) return;
        let n;
        if (e === hst.TEXT)
          try {
            n = gga(r);
          } catch {
            Gcr(this.#a, "Received invalid UTF-8 in text frame.");
            return;
          }
        else e === hst.BINARY && (n = new Uint8Array(r.buffer, r.byteOffset, r.byteLength));
        this.#i.enqueue(n);
      }
      #f() {
        let e = this.#a.closeState.has(Ule.SENT) && this.#a.closeState.has(Ule.RECEIVED);
        if (((this.#a.readyState = Fle.CLOSED), this.#u)) return;
        this.#a.wasEverConnected || this.#t.reject(new _ga("Socket never opened"));
        let r = this.#s.closingInfo,
          n = r?.code ?? 1005;
        !this.#a.closeState.has(Ule.SENT) && !this.#a.closeState.has(Ule.RECEIVED) && (n = 1006);
        let o = r?.reason == null ? "" : vga(Buffer.from(r.reason));
        if (e)
          (this.#i.close(),
            this.#o.locked ||
              this.#o.abort(new DOMException("A closed WebSocketStream cannot be written to", "InvalidStateError")),
            this.#r.resolve({ closeCode: n, reason: o }));
        else {
          let s = Ega("unclean close", n, o);
          (this.#i.error(s), this.#o.abort(s), this.#r.reject(s));
        }
      }
      #h(e) {
        let r = null,
          n = "";
        (_1.is.WebSocketError(e) && ((r = e.closeCode), (n = e.reason)), qcr(this.#a, r, n));
      }
      #g(e) {
        this.#h(e);
      }
    };
  Object.defineProperties(bst.prototype, {
    url: gst,
    opened: gst,
    closed: gst,
    close: gst,
    [Symbol.toStringTag]: { value: "WebSocketStream", writable: !1, enumerable: !1, configurable: !0 },
  });
  _1.converters.WebSocketStreamOptions = _1.dictionaryConverter([
    { key: "protocols", converter: _1.sequenceConverter(_1.converters.USVString), defaultValue: () => [] },
    { key: "signal", converter: _1.nullableConverter(_1.converters.AbortSignal), defaultValue: () => null },
  ]);
  _1.converters.WebSocketCloseInfo = _1.dictionaryConverter([
    { key: "closeCode", converter: (t) => _1.converters["unsigned short"](t, _1.attributes.EnforceRange) },
    { key: "reason", converter: _1.converters.USVString, defaultValue: () => "" },
  ]);
  _1.converters.WebSocketStreamWrite = function (t) {
    return typeof t == "string" ? _1.converters.USVString(t) : _1.converters.BufferSource(t);
  };
  Mni.exports = { WebSocketStream: bst };
});
var $ni = T((g4c, Uni) => {
  "use strict";
  function Cga(t) {
    return t.indexOf("\0") === -1;
  }
  function Sga(t) {
    if (t.length === 0) return !1;
    for (let e = 0; e < t.length; e++) if (t.charCodeAt(e) < 48 || t.charCodeAt(e) > 57) return !1;
    return !0;
  }
  Uni.exports = { isValidLastEventId: Cga, isASCIINumber: Sga };
});