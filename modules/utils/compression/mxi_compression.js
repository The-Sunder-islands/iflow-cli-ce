/**
 * @module mxi
 * @category utils/compression
 * @label compression
 * @position 1821 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (mxi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var mxi = T((sj) => {
  "use strict";
  var cxi = smt(),
    UK = Hlt(),
    xde = class t {
      bytes;
      constructor(e) {
        if (((this.bytes = e), e.byteLength !== 8)) throw new Error("Int64 buffers must be exactly 8 bytes");
      }
      static fromNumber(e) {
        if (e > 9223372036854776e3 || e < -9223372036854776e3)
          throw new Error(`${e} is too large (or, if negative, too small) to represent as an Int64`);
        let r = new Uint8Array(8);
        for (let n = 7, o = Math.abs(Math.round(e)); n > -1 && o > 0; n--, o /= 256) r[n] = o;
        return (e < 0 && axi(r), new t(r));
      }
      valueOf() {
        let e = this.bytes.slice(0),
          r = e[0] & 128;
        return (r && axi(e), parseInt(UK.toHex(e), 16) * (r ? -1 : 1));
      }
      toString() {
        return String(this.valueOf());
      }
    };
  function axi(t) {
    for (let e = 0; e < 8; e++) t[e] ^= 255;
    for (let e = 7; e > -1 && (t[e]++, t[e] === 0); e--);
  }
  var T1t = class {
      toUtf8;
      fromUtf8;
      constructor(e, r) {
        ((this.toUtf8 = e), (this.fromUtf8 = r));
      }
      format(e) {
        let r = [];
        for (let s of Object.keys(e)) {
          let a = this.fromUtf8(s);
          r.push(Uint8Array.from([a.byteLength]), a, this.formatHeaderValue(e[s]));
        }
        let n = new Uint8Array(r.reduce((s, a) => s + a.byteLength, 0)),
          o = 0;
        for (let s of r) (n.set(s, o), (o += s.byteLength));
        return n;
      }
      formatHeaderValue(e) {
        switch (e.type) {
          case "boolean":
            return Uint8Array.from([e.value ? 0 : 1]);
          case "byte":
            return Uint8Array.from([2, e.value]);
          case "short":
            let r = new DataView(new ArrayBuffer(3));
            return (r.setUint8(0, 3), r.setInt16(1, e.value, !1), new Uint8Array(r.buffer));
          case "integer":
            let n = new DataView(new ArrayBuffer(5));
            return (n.setUint8(0, 4), n.setInt32(1, e.value, !1), new Uint8Array(n.buffer));
          case "long":
            let o = new Uint8Array(9);
            return ((o[0] = 5), o.set(e.value.bytes, 1), o);
          case "binary":
            let s = new DataView(new ArrayBuffer(3 + e.value.byteLength));
            (s.setUint8(0, 6), s.setUint16(1, e.value.byteLength, !1));
            let a = new Uint8Array(s.buffer);
            return (a.set(e.value, 3), a);
          case "string":
            let u = this.fromUtf8(e.value),
              c = new DataView(new ArrayBuffer(3 + u.byteLength));
            (c.setUint8(0, 7), c.setUint16(1, u.byteLength, !1));
            let m = new Uint8Array(c.buffer);
            return (m.set(u, 3), m);
          case "timestamp":
            let d = new Uint8Array(9);
            return ((d[0] = 8), d.set(xde.fromNumber(e.value.valueOf()).bytes, 1), d);
          case "uuid":
            if (!jja.test(e.value)) throw new Error(`Invalid UUID received: ${e.value}`);
            let f = new Uint8Array(17);
            return ((f[0] = 9), f.set(UK.fromHex(e.value.replace(/\-/g, "")), 1), f);
        }
      }
      parse(e) {
        let r = {},
          n = 0;
        for (; n < e.byteLength; ) {
          let o = e.getUint8(n++),
            s = this.toUtf8(new Uint8Array(e.buffer, e.byteOffset + n, o));
          switch (((n += o), e.getUint8(n++))) {
            case 0:
              r[s] = { type: uxi, value: !0 };
              break;
            case 1:
              r[s] = { type: uxi, value: !1 };
              break;
            case 2:
              r[s] = { type: Nja, value: e.getInt8(n++) };
              break;
            case 3:
              ((r[s] = { type: Pja, value: e.getInt16(n, !1) }), (n += 2));
              break;
            case 4:
              ((r[s] = { type: Bja, value: e.getInt32(n, !1) }), (n += 4));
              break;
            case 5:
              ((r[s] = { type: Lja, value: new xde(new Uint8Array(e.buffer, e.byteOffset + n, 8)) }), (n += 8));
              break;
            case 6:
              let a = e.getUint16(n, !1);
              ((n += 2), (r[s] = { type: Mja, value: new Uint8Array(e.buffer, e.byteOffset + n, a) }), (n += a));
              break;
            case 7:
              let u = e.getUint16(n, !1);
              ((n += 2),
                (r[s] = { type: Fja, value: this.toUtf8(new Uint8Array(e.buffer, e.byteOffset + n, u)) }),
                (n += u));
              break;
            case 8:
              ((r[s] = {
                type: Uja,
                value: new Date(new xde(new Uint8Array(e.buffer, e.byteOffset + n, 8)).valueOf()),
              }),
                (n += 8));
              break;
            case 9:
              let c = new Uint8Array(e.buffer, e.byteOffset + n, 16);
              ((n += 16),
                (r[s] = {
                  type: $ja,
                  value: `${UK.toHex(c.subarray(0, 4))}-${UK.toHex(c.subarray(4, 6))}-${UK.toHex(c.subarray(6, 8))}-${UK.toHex(c.subarray(8, 10))}-${UK.toHex(c.subarray(10))}`,
                }));
              break;
            default:
              throw new Error("Unrecognized header type tag");
          }
        }
        return r;
      }
    },
    uxi = "boolean",
    Nja = "byte",
    Pja = "short",
    Bja = "integer",
    Lja = "long",
    Mja = "binary",
    Fja = "string",
    Uja = "timestamp",
    $ja = "uuid",
    jja = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/,
    lxi = 4,
    oj = lxi * 2,
    $K = 4,
    Qja = oj + $K * 2;
  function Gja({ byteLength: t, byteOffset: e, buffer: r }) {
    if (t < Qja) throw new Error("Provided message too short to accommodate event stream message overhead");
    let n = new DataView(r, e, t),
      o = n.getUint32(0, !1);
    if (t !== o) throw new Error("Reported message length does not match received message length");
    let s = n.getUint32(lxi, !1),
      a = n.getUint32(oj, !1),
      u = n.getUint32(t - $K, !1),
      c = new cxi.Crc32().update(new Uint8Array(r, e, oj));
    if (a !== c.digest())
      throw new Error(
        `The prelude checksum specified in the message (${a}) does not match the calculated CRC32 checksum (${c.digest()})`,
      );
    if ((c.update(new Uint8Array(r, e + oj, t - (oj + $K))), u !== c.digest()))
      throw new Error(`The message checksum (${c.digest()}) did not match the expected value of ${u}`);
    return {
      headers: new DataView(r, e + oj + $K, s),
      body: new Uint8Array(r, e + oj + $K + s, o - s - (oj + $K + $K)),
    };
  }
  var B2r = class {
      headerMarshaller;
      messageBuffer;
      isEndOfStream;
      constructor(e, r) {
        ((this.headerMarshaller = new T1t(e, r)), (this.messageBuffer = []), (this.isEndOfStream = !1));
      }
      feed(e) {
        this.messageBuffer.push(this.decode(e));
      }
      endOfStream() {
        this.isEndOfStream = !0;
      }
      getMessage() {
        let e = this.messageBuffer.pop(),
          r = this.isEndOfStream;
        return {
          getMessage() {
            return e;
          },
          isEndOfStream() {
            return r;
          },
        };
      }
      getAvailableMessages() {
        let e = this.messageBuffer;
        this.messageBuffer = [];
        let r = this.isEndOfStream;
        return {
          getMessages() {
            return e;
          },
          isEndOfStream() {
            return r;
          },
        };
      }
      encode({ headers: e, body: r }) {
        let n = this.headerMarshaller.format(e),
          o = n.byteLength + r.byteLength + 16,
          s = new Uint8Array(o),
          a = new DataView(s.buffer, s.byteOffset, s.byteLength),
          u = new cxi.Crc32();
        return (
          a.setUint32(0, o, !1),
          a.setUint32(4, n.byteLength, !1),
          a.setUint32(8, u.update(s.subarray(0, 8)).digest(), !1),
          s.set(n, 12),
          s.set(r, n.byteLength + 12),
          a.setUint32(o - 4, u.update(s.subarray(8, o - 4)).digest(), !1),
          s
        );
      }
      decode(e) {
        let { headers: r, body: n } = Gja(e);
        return { headers: this.headerMarshaller.parse(r), body: n };
      }
      formatHeaders(e) {
        return this.headerMarshaller.format(e);
      }
    },
    L2r = class {
      options;
      constructor(e) {
        this.options = e;
      }
      [Symbol.asyncIterator]() {
        return this.asyncIterator();
      }
      async *asyncIterator() {
        for await (let e of this.options.inputStream) yield this.options.decoder.decode(e);
      }
    },
    M2r = class {
      options;
      constructor(e) {
        this.options = e;
      }
      [Symbol.asyncIterator]() {
        return this.asyncIterator();
      }
      async *asyncIterator() {
        for await (let e of this.options.messageStream) yield this.options.encoder.encode(e);
        this.options.includeEndFrame && (yield new Uint8Array(0));
      }
    },
    F2r = class {
      options;
      constructor(e) {
        this.options = e;
      }
      [Symbol.asyncIterator]() {
        return this.asyncIterator();
      }
      async *asyncIterator() {
        for await (let e of this.options.messageStream) {
          let r = await this.options.deserializer(e);
          r !== void 0 && (yield r);
        }
      }
    },
    U2r = class {
      options;
      constructor(e) {
        this.options = e;
      }
      [Symbol.asyncIterator]() {
        return this.asyncIterator();
      }
      async *asyncIterator() {
        for await (let e of this.options.inputStream) yield this.options.serializer(e);
      }
    };
  sj.EventStreamCodec = B2r;
  sj.HeaderMarshaller = T1t;
  sj.Int64 = xde;
  sj.MessageDecoderStream = L2r;
  sj.MessageEncoderStream = M2r;
  sj.SmithyMessageDecoderStream = F2r;
  sj.SmithyMessageEncoderStream = U2r;
});