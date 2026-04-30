/**
 * @module Lcr
 * @category network/ws
 * @label websocket
 * @position 1573 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Lcr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Lcr = T((m4c, _ni) => {
  "use strict";
  var { Writable: L3a } = Ae("node:stream"),
    M3a = Ae("node:assert"),
    { parserStates: o9, opcodes: Mle, states: F3a, emptyBuffer: gni, sentCloseFrameState: RCe } = TU(),
    {
      isValidStatusCode: U3a,
      isValidOpcode: $3a,
      websocketMessageReceived: bni,
      utf8Decode: j3a,
      isControlFrame: Ani,
      isTextBinaryFrame: Pcr,
      isContinuationFrame: Q3a,
    } = aY(),
    { failWebsocketConnection: ey } = cst(),
    { WebsocketFrameSend: yni } = Lle(),
    { PerMessageDeflate: G3a } = hni(),
    Bcr = class extends L3a {
      #e = [];
      #t = 0;
      #r = 0;
      #n = !1;
      #i = o9.INFO;
      #o = {};
      #u = [];
      #a;
      #s;
      constructor(e, r) {
        (super(),
          (this.#s = e),
          (this.#a = r ?? new Map()),
          this.#a.has("permessage-deflate") && this.#a.set("permessage-deflate", new G3a(r)));
      }
      _write(e, r, n) {
        (this.#e.push(e), (this.#r += e.length), (this.#n = !0), this.run(n));
      }
      run(e) {
        for (; this.#n; )
          if (this.#i === o9.INFO) {
            if (this.#r < 2) return e();
            let r = this.consume(2),
              n = (r[0] & 128) !== 0,
              o = r[0] & 15,
              s = (r[1] & 128) === 128,
              a = !n && o !== Mle.CONTINUATION,
              u = r[1] & 127,
              c = r[0] & 64,
              m = r[0] & 32,
              d = r[0] & 16;
            if (!$3a(o)) return (ey(this.#s, 1002, "Invalid opcode received"), e());
            if (s) return (ey(this.#s, 1002, "Frame cannot be masked"), e());
            if (c !== 0 && !this.#a.has("permessage-deflate")) {
              ey(this.#s, 1002, "Expected RSV1 to be clear.");
              return;
            }
            if (m !== 0 || d !== 0) {
              ey(this.#s, 1002, "RSV1, RSV2, RSV3 must be clear");
              return;
            }
            if (a && !Pcr(o)) {
              ey(this.#s, 1002, "Invalid frame type was fragmented.");
              return;
            }
            if (Pcr(o) && this.#u.length > 0) {
              ey(this.#s, 1002, "Expected continuation frame");
              return;
            }
            if (this.#o.fragmented && a) {
              ey(this.#s, 1002, "Fragmented frame exceeded 125 bytes.");
              return;
            }
            if ((u > 125 || a) && Ani(o)) {
              ey(this.#s, 1002, "Control frame either too large or fragmented");
              return;
            }
            if (Q3a(o) && this.#u.length === 0 && !this.#o.compressed) {
              ey(this.#s, 1002, "Unexpected continuation frame");
              return;
            }
            (u <= 125
              ? ((this.#o.payloadLength = u), (this.#i = o9.READ_DATA))
              : u === 126
                ? (this.#i = o9.PAYLOADLENGTH_16)
                : u === 127 && (this.#i = o9.PAYLOADLENGTH_64),
              Pcr(o) && ((this.#o.binaryType = o), (this.#o.compressed = c !== 0)),
              (this.#o.opcode = o),
              (this.#o.masked = s),
              (this.#o.fin = n),
              (this.#o.fragmented = a));
          } else if (this.#i === o9.PAYLOADLENGTH_16) {
            if (this.#r < 2) return e();
            let r = this.consume(2);
            ((this.#o.payloadLength = r.readUInt16BE(0)), (this.#i = o9.READ_DATA));
          } else if (this.#i === o9.PAYLOADLENGTH_64) {
            if (this.#r < 8) return e();
            let r = this.consume(8),
              n = r.readUInt32BE(0);
            if (n > 2 ** 31 - 1) {
              ey(this.#s, 1009, "Received payload length > 2^31 bytes.");
              return;
            }
            let o = r.readUInt32BE(4);
            ((this.#o.payloadLength = (n << 8) + o), (this.#i = o9.READ_DATA));
          } else if (this.#i === o9.READ_DATA) {
            if (this.#r < this.#o.payloadLength) return e();
            let r = this.consume(this.#o.payloadLength);
            if (Ani(this.#o.opcode)) ((this.#n = this.parseControlFrame(r)), (this.#i = o9.INFO));
            else if (!this.#o.compressed)
              (this.writeFragments(r),
                !this.#o.fragmented && this.#o.fin && bni(this.#s, this.#o.binaryType, this.consumeFragments()),
                (this.#i = o9.INFO));
            else {
              (this.#a.get("permessage-deflate").decompress(r, this.#o.fin, (n, o) => {
                if (n) {
                  ey(this.#s, 1007, n.message);
                  return;
                }
                if ((this.writeFragments(o), !this.#o.fin)) {
                  ((this.#i = o9.INFO), (this.#n = !0), this.run(e));
                  return;
                }
                (bni(this.#s, this.#o.binaryType, this.consumeFragments()),
                  (this.#n = !0),
                  (this.#i = o9.INFO),
                  this.run(e));
              }),
                (this.#n = !1));
              break;
            }
          }
      }
      consume(e) {
        if (e > this.#r) throw new Error("Called consume() before buffers satiated.");
        if (e === 0) return gni;
        this.#r -= e;
        let r = this.#e[0];
        if (r.length > e) return ((this.#e[0] = r.subarray(e, r.length)), r.subarray(0, e));
        if (r.length === e) return this.#e.shift();
        {
          let n = 0,
            o = Buffer.allocUnsafeSlow(e);
          for (; n !== e; ) {
            let s = this.#e[0],
              a = s.length;
            if (a + n === e) {
              o.set(this.#e.shift(), n);
              break;
            } else if (a + n > e) {
              (o.set(s.subarray(0, e - n), n), (this.#e[0] = s.subarray(e - n)));
              break;
            } else (o.set(this.#e.shift(), n), (n += a));
          }
          return o;
        }
      }
      writeFragments(e) {
        ((this.#t += e.length), this.#u.push(e));
      }
      consumeFragments() {
        let e = this.#u;
        if (e.length === 1) return ((this.#t = 0), e.shift());
        let r = 0,
          n = Buffer.allocUnsafeSlow(this.#t);
        for (let o = 0; o < e.length; ++o) {
          let s = e[o];
          (n.set(s, r), (r += s.length));
        }
        return ((this.#u = []), (this.#t = 0), n);
      }
      parseCloseBody(e) {
        M3a(e.length !== 1);
        let r;
        if ((e.length >= 2 && (r = e.readUInt16BE(0)), r !== void 0 && !U3a(r)))
          return { code: 1002, reason: "Invalid status code", error: !0 };
        let n = e.subarray(2);
        n[0] === 239 && n[1] === 187 && n[2] === 191 && (n = n.subarray(3));
        try {
          n = j3a(n);
        } catch {
          return { code: 1007, reason: "Invalid UTF-8", error: !0 };
        }
        return { code: r, reason: n, error: !1 };
      }
      parseControlFrame(e) {
        let { opcode: r, payloadLength: n } = this.#o;
        if (r === Mle.CLOSE) {
          if (n === 1) return (ey(this.#s, 1002, "Received close frame with a 1-byte body."), !1);
          if (((this.#o.closeInfo = this.parseCloseBody(e)), this.#o.closeInfo.error)) {
            let { code: o, reason: s } = this.#o.closeInfo;
            return (ey(this.#s, o, s), !1);
          }
          if (!this.#s.closeState.has(RCe.SENT) && !this.#s.closeState.has(RCe.RECEIVED)) {
            let o = gni;
            this.#o.closeInfo.code && ((o = Buffer.allocUnsafe(2)), o.writeUInt16BE(this.#o.closeInfo.code, 0));
            let s = new yni(o);
            (this.#s.socket.write(s.createFrame(Mle.CLOSE)), this.#s.closeState.add(RCe.SENT));
          }
          return ((this.#s.readyState = F3a.CLOSING), this.#s.closeState.add(RCe.RECEIVED), !1);
        } else if (r === Mle.PING) {
          if (!this.#s.closeState.has(RCe.RECEIVED)) {
            let o = new yni(e);
            (this.#s.socket.write(o.createFrame(Mle.PONG)), this.#s.onPing(e));
          }
        } else r === Mle.PONG && this.#s.onPong(e);
        return !0;
      }
      get closingInfo() {
        return this.#o.closeInfo;
      }
    };
  _ni.exports = { ByteParser: Bcr };
});