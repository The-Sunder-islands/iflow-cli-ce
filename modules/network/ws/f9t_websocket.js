/**
 * @module f9t
 * @category network/ws
 * @label websocket
 * @position 17 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (f9t) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var f9t = T((lyu, exr) => {
  "use strict";
  var { Writable: Mlo } = Ae("stream"),
    zwr = Nhe(),
    { BINARY_TYPES: Flo, EMPTY_BUFFER: Ywr, kStatusCode: Ulo, kWebSocket: $lo } = eR(),
    { concat: c9t, toArrayBuffer: jlo, unmask: Qlo } = khe(),
    { isValidStatusCode: Glo, isValidUTF8: Kwr } = iee(),
    cRe = Buffer[Symbol.species],
    c_ = 0,
    Jwr = 1,
    Xwr = 2,
    Zwr = 3,
    l9t = 4,
    m9t = 5,
    lRe = 6,
    d9t = class extends Mlo {
      constructor(e = {}) {
        (super(),
          (this._allowSynchronousEvents = e.allowSynchronousEvents !== void 0 ? e.allowSynchronousEvents : !0),
          (this._binaryType = e.binaryType || Flo[0]),
          (this._extensions = e.extensions || {}),
          (this._isServer = !!e.isServer),
          (this._maxPayload = e.maxPayload | 0),
          (this._skipUTF8Validation = !!e.skipUTF8Validation),
          (this[$lo] = void 0),
          (this._bufferedBytes = 0),
          (this._buffers = []),
          (this._compressed = !1),
          (this._payloadLength = 0),
          (this._mask = void 0),
          (this._fragmented = 0),
          (this._masked = !1),
          (this._fin = !1),
          (this._opcode = 0),
          (this._totalPayloadLength = 0),
          (this._messageLength = 0),
          (this._fragments = []),
          (this._errored = !1),
          (this._loop = !1),
          (this._state = c_));
      }
      _write(e, r, n) {
        if (this._opcode === 8 && this._state == c_) return n();
        ((this._bufferedBytes += e.length), this._buffers.push(e), this.startLoop(n));
      }
      consume(e) {
        if (((this._bufferedBytes -= e), e === this._buffers[0].length)) return this._buffers.shift();
        if (e < this._buffers[0].length) {
          let n = this._buffers[0];
          return (
            (this._buffers[0] = new cRe(n.buffer, n.byteOffset + e, n.length - e)),
            new cRe(n.buffer, n.byteOffset, e)
          );
        }
        let r = Buffer.allocUnsafe(e);
        do {
          let n = this._buffers[0],
            o = r.length - e;
          (e >= n.length
            ? r.set(this._buffers.shift(), o)
            : (r.set(new Uint8Array(n.buffer, n.byteOffset, e), o),
              (this._buffers[0] = new cRe(n.buffer, n.byteOffset + e, n.length - e))),
            (e -= n.length));
        } while (e > 0);
        return r;
      }
      startLoop(e) {
        this._loop = !0;
        do
          switch (this._state) {
            case c_:
              this.getInfo(e);
              break;
            case Jwr:
              this.getPayloadLength16(e);
              break;
            case Xwr:
              this.getPayloadLength64(e);
              break;
            case Zwr:
              this.getMask();
              break;
            case l9t:
              this.getData(e);
              break;
            case m9t:
            case lRe:
              this._loop = !1;
              return;
          }
        while (this._loop);
        this._errored || e();
      }
      getInfo(e) {
        if (this._bufferedBytes < 2) {
          this._loop = !1;
          return;
        }
        let r = this.consume(2);
        if ((r[0] & 48) !== 0) {
          let o = this.createError(RangeError, "RSV2 and RSV3 must be clear", !0, 1002, "WS_ERR_UNEXPECTED_RSV_2_3");
          e(o);
          return;
        }
        let n = (r[0] & 64) === 64;
        if (n && !this._extensions[zwr.extensionName]) {
          let o = this.createError(RangeError, "RSV1 must be clear", !0, 1002, "WS_ERR_UNEXPECTED_RSV_1");
          e(o);
          return;
        }
        if (
          ((this._fin = (r[0] & 128) === 128),
          (this._opcode = r[0] & 15),
          (this._payloadLength = r[1] & 127),
          this._opcode === 0)
        ) {
          if (n) {
            let o = this.createError(RangeError, "RSV1 must be clear", !0, 1002, "WS_ERR_UNEXPECTED_RSV_1");
            e(o);
            return;
          }
          if (!this._fragmented) {
            let o = this.createError(RangeError, "invalid opcode 0", !0, 1002, "WS_ERR_INVALID_OPCODE");
            e(o);
            return;
          }
          this._opcode = this._fragmented;
        } else if (this._opcode === 1 || this._opcode === 2) {
          if (this._fragmented) {
            let o = this.createError(RangeError, `invalid opcode ${this._opcode}`, !0, 1002, "WS_ERR_INVALID_OPCODE");
            e(o);
            return;
          }
          this._compressed = n;
        } else if (this._opcode > 7 && this._opcode < 11) {
          if (!this._fin) {
            let o = this.createError(RangeError, "FIN must be set", !0, 1002, "WS_ERR_EXPECTED_FIN");
            e(o);
            return;
          }
          if (n) {
            let o = this.createError(RangeError, "RSV1 must be clear", !0, 1002, "WS_ERR_UNEXPECTED_RSV_1");
            e(o);
            return;
          }
          if (this._payloadLength > 125 || (this._opcode === 8 && this._payloadLength === 1)) {
            let o = this.createError(
              RangeError,
              `invalid payload length ${this._payloadLength}`,
              !0,
              1002,
              "WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH",
            );
            e(o);
            return;
          }
        } else {
          let o = this.createError(RangeError, `invalid opcode ${this._opcode}`, !0, 1002, "WS_ERR_INVALID_OPCODE");
          e(o);
          return;
        }
        if (
          (!this._fin && !this._fragmented && (this._fragmented = this._opcode),
          (this._masked = (r[1] & 128) === 128),
          this._isServer)
        ) {
          if (!this._masked) {
            let o = this.createError(RangeError, "MASK must be set", !0, 1002, "WS_ERR_EXPECTED_MASK");
            e(o);
            return;
          }
        } else if (this._masked) {
          let o = this.createError(RangeError, "MASK must be clear", !0, 1002, "WS_ERR_UNEXPECTED_MASK");
          e(o);
          return;
        }
        this._payloadLength === 126
          ? (this._state = Jwr)
          : this._payloadLength === 127
            ? (this._state = Xwr)
            : this.haveLength(e);
      }
      getPayloadLength16(e) {
        if (this._bufferedBytes < 2) {
          this._loop = !1;
          return;
        }
        ((this._payloadLength = this.consume(2).readUInt16BE(0)), this.haveLength(e));
      }
      getPayloadLength64(e) {
        if (this._bufferedBytes < 8) {
          this._loop = !1;
          return;
        }
        let r = this.consume(8),
          n = r.readUInt32BE(0);
        if (n > Math.pow(2, 21) - 1) {
          let o = this.createError(
            RangeError,
            "Unsupported WebSocket frame: payload length > 2^53 - 1",
            !1,
            1009,
            "WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH",
          );
          e(o);
          return;
        }
        ((this._payloadLength = n * Math.pow(2, 32) + r.readUInt32BE(4)), this.haveLength(e));
      }
      haveLength(e) {
        if (
          this._payloadLength &&
          this._opcode < 8 &&
          ((this._totalPayloadLength += this._payloadLength),
          this._totalPayloadLength > this._maxPayload && this._maxPayload > 0)
        ) {
          let r = this.createError(
            RangeError,
            "Max payload size exceeded",
            !1,
            1009,
            "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH",
          );
          e(r);
          return;
        }
        this._masked ? (this._state = Zwr) : (this._state = l9t);
      }
      getMask() {
        if (this._bufferedBytes < 4) {
          this._loop = !1;
          return;
        }
        ((this._mask = this.consume(4)), (this._state = l9t));
      }
      getData(e) {
        let r = Ywr;
        if (this._payloadLength) {
          if (this._bufferedBytes < this._payloadLength) {
            this._loop = !1;
            return;
          }
          ((r = this.consume(this._payloadLength)),
            this._masked &&
              (this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3]) !== 0 &&
              Qlo(r, this._mask));
        }
        if (this._opcode > 7) {
          this.controlMessage(r, e);
          return;
        }
        if (this._compressed) {
          ((this._state = m9t), this.decompress(r, e));
          return;
        }
        (r.length && ((this._messageLength = this._totalPayloadLength), this._fragments.push(r)), this.dataMessage(e));
      }
      decompress(e, r) {
        this._extensions[zwr.extensionName].decompress(e, this._fin, (o, s) => {
          if (o) return r(o);
          if (s.length) {
            if (((this._messageLength += s.length), this._messageLength > this._maxPayload && this._maxPayload > 0)) {
              let a = this.createError(
                RangeError,
                "Max payload size exceeded",
                !1,
                1009,
                "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH",
              );
              r(a);
              return;
            }
            this._fragments.push(s);
          }
          (this.dataMessage(r), this._state === c_ && this.startLoop(r));
        });
      }
      dataMessage(e) {
        if (!this._fin) {
          this._state = c_;
          return;
        }
        let r = this._messageLength,
          n = this._fragments;
        if (
          ((this._totalPayloadLength = 0),
          (this._messageLength = 0),
          (this._fragmented = 0),
          (this._fragments = []),
          this._opcode === 2)
        ) {
          let o;
          (this._binaryType === "nodebuffer"
            ? (o = c9t(n, r))
            : this._binaryType === "arraybuffer"
              ? (o = jlo(c9t(n, r)))
              : this._binaryType === "blob"
                ? (o = new Blob(n))
                : (o = n),
            this._allowSynchronousEvents
              ? (this.emit("message", o, !0), (this._state = c_))
              : ((this._state = lRe),
                setImmediate(() => {
                  (this.emit("message", o, !0), (this._state = c_), this.startLoop(e));
                })));
        } else {
          let o = c9t(n, r);
          if (!this._skipUTF8Validation && !Kwr(o)) {
            let s = this.createError(Error, "invalid UTF-8 sequence", !0, 1007, "WS_ERR_INVALID_UTF8");
            e(s);
            return;
          }
          this._state === m9t || this._allowSynchronousEvents
            ? (this.emit("message", o, !1), (this._state = c_))
            : ((this._state = lRe),
              setImmediate(() => {
                (this.emit("message", o, !1), (this._state = c_), this.startLoop(e));
              }));
        }
      }
      controlMessage(e, r) {
        if (this._opcode === 8) {
          if (e.length === 0) ((this._loop = !1), this.emit("conclude", 1005, Ywr), this.end());
          else {
            let n = e.readUInt16BE(0);
            if (!Glo(n)) {
              let s = this.createError(RangeError, `invalid status code ${n}`, !0, 1002, "WS_ERR_INVALID_CLOSE_CODE");
              r(s);
              return;
            }
            let o = new cRe(e.buffer, e.byteOffset + 2, e.length - 2);
            if (!this._skipUTF8Validation && !Kwr(o)) {
              let s = this.createError(Error, "invalid UTF-8 sequence", !0, 1007, "WS_ERR_INVALID_UTF8");
              r(s);
              return;
            }
            ((this._loop = !1), this.emit("conclude", n, o), this.end());
          }
          this._state = c_;
          return;
        }
        this._allowSynchronousEvents
          ? (this.emit(this._opcode === 9 ? "ping" : "pong", e), (this._state = c_))
          : ((this._state = lRe),
            setImmediate(() => {
              (this.emit(this._opcode === 9 ? "ping" : "pong", e), (this._state = c_), this.startLoop(r));
            }));
      }
      createError(e, r, n, o, s) {
        ((this._loop = !1), (this._errored = !0));
        let a = new e(n ? `Invalid WebSocket frame: ${r}` : r);
        return (Error.captureStackTrace(a, this.createError), (a.code = s), (a[Ulo] = o), a);
      }
    };
  exr.exports = d9t;
});