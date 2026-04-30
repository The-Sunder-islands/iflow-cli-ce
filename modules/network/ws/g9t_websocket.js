/**
 * @module g9t
 * @category network/ws
 * @label websocket
 * @position 18 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (g9t) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var g9t = T((dyu, nxr) => {
  "use strict";
  var { Duplex: myu } = Ae("stream"),
    { randomFillSync: qlo } = Ae("crypto"),
    txr = Nhe(),
    { EMPTY_BUFFER: Hlo, kWebSocket: Vlo, NOOP: Wlo } = eR(),
    { isBlob: oee, isValidStatusCode: zlo } = iee(),
    { mask: rxr, toBuffer: iG } = khe(),
    l_ = Symbol("kByteLength"),
    Ylo = Buffer.alloc(4),
    mRe = 8 * 1024,
    oG,
    see = mRe,
    _C = 0,
    Klo = 1,
    Jlo = 2,
    p9t = class t {
      constructor(e, r, n) {
        ((this._extensions = r || {}),
          n && ((this._generateMask = n), (this._maskBuffer = Buffer.alloc(4))),
          (this._socket = e),
          (this._firstFragment = !0),
          (this._compress = !1),
          (this._bufferedBytes = 0),
          (this._queue = []),
          (this._state = _C),
          (this.onerror = Wlo),
          (this[Vlo] = void 0));
      }
      static frame(e, r) {
        let n,
          o = !1,
          s = 2,
          a = !1;
        r.mask &&
          ((n = r.maskBuffer || Ylo),
          r.generateMask
            ? r.generateMask(n)
            : (see === mRe && (oG === void 0 && (oG = Buffer.alloc(mRe)), qlo(oG, 0, mRe), (see = 0)),
              (n[0] = oG[see++]),
              (n[1] = oG[see++]),
              (n[2] = oG[see++]),
              (n[3] = oG[see++])),
          (a = (n[0] | n[1] | n[2] | n[3]) === 0),
          (s = 6));
        let u;
        typeof e == "string"
          ? (!r.mask || a) && r[l_] !== void 0
            ? (u = r[l_])
            : ((e = Buffer.from(e)), (u = e.length))
          : ((u = e.length), (o = r.mask && r.readOnly && !a));
        let c = u;
        u >= 65536 ? ((s += 8), (c = 127)) : u > 125 && ((s += 2), (c = 126));
        let m = Buffer.allocUnsafe(o ? u + s : s);
        return (
          (m[0] = r.fin ? r.opcode | 128 : r.opcode),
          r.rsv1 && (m[0] |= 64),
          (m[1] = c),
          c === 126 ? m.writeUInt16BE(u, 2) : c === 127 && ((m[2] = m[3] = 0), m.writeUIntBE(u, 4, 6)),
          r.mask
            ? ((m[1] |= 128),
              (m[s - 4] = n[0]),
              (m[s - 3] = n[1]),
              (m[s - 2] = n[2]),
              (m[s - 1] = n[3]),
              a ? [m, e] : o ? (rxr(e, n, m, s, u), [m]) : (rxr(e, n, e, 0, u), [m, e]))
            : [m, e]
        );
      }
      close(e, r, n, o) {
        let s;
        if (e === void 0) s = Hlo;
        else {
          if (typeof e != "number" || !zlo(e)) throw new TypeError("First argument must be a valid error code number");
          if (r === void 0 || !r.length) ((s = Buffer.allocUnsafe(2)), s.writeUInt16BE(e, 0));
          else {
            let u = Buffer.byteLength(r);
            if (u > 123) throw new RangeError("The message must not be greater than 123 bytes");
            ((s = Buffer.allocUnsafe(2 + u)),
              s.writeUInt16BE(e, 0),
              typeof r == "string" ? s.write(r, 2) : s.set(r, 2));
          }
        }
        let a = {
          [l_]: s.length,
          fin: !0,
          generateMask: this._generateMask,
          mask: n,
          maskBuffer: this._maskBuffer,
          opcode: 8,
          readOnly: !1,
          rsv1: !1,
        };
        this._state !== _C ? this.enqueue([this.dispatch, s, !1, a, o]) : this.sendFrame(t.frame(s, a), o);
      }
      ping(e, r, n) {
        let o, s;
        if (
          (typeof e == "string"
            ? ((o = Buffer.byteLength(e)), (s = !1))
            : oee(e)
              ? ((o = e.size), (s = !1))
              : ((e = iG(e)), (o = e.length), (s = iG.readOnly)),
          o > 125)
        )
          throw new RangeError("The data size must not be greater than 125 bytes");
        let a = {
          [l_]: o,
          fin: !0,
          generateMask: this._generateMask,
          mask: r,
          maskBuffer: this._maskBuffer,
          opcode: 9,
          readOnly: s,
          rsv1: !1,
        };
        oee(e)
          ? this._state !== _C
            ? this.enqueue([this.getBlobData, e, !1, a, n])
            : this.getBlobData(e, !1, a, n)
          : this._state !== _C
            ? this.enqueue([this.dispatch, e, !1, a, n])
            : this.sendFrame(t.frame(e, a), n);
      }
      pong(e, r, n) {
        let o, s;
        if (
          (typeof e == "string"
            ? ((o = Buffer.byteLength(e)), (s = !1))
            : oee(e)
              ? ((o = e.size), (s = !1))
              : ((e = iG(e)), (o = e.length), (s = iG.readOnly)),
          o > 125)
        )
          throw new RangeError("The data size must not be greater than 125 bytes");
        let a = {
          [l_]: o,
          fin: !0,
          generateMask: this._generateMask,
          mask: r,
          maskBuffer: this._maskBuffer,
          opcode: 10,
          readOnly: s,
          rsv1: !1,
        };
        oee(e)
          ? this._state !== _C
            ? this.enqueue([this.getBlobData, e, !1, a, n])
            : this.getBlobData(e, !1, a, n)
          : this._state !== _C
            ? this.enqueue([this.dispatch, e, !1, a, n])
            : this.sendFrame(t.frame(e, a), n);
      }
      send(e, r, n) {
        let o = this._extensions[txr.extensionName],
          s = r.binary ? 2 : 1,
          a = r.compress,
          u,
          c;
        (typeof e == "string"
          ? ((u = Buffer.byteLength(e)), (c = !1))
          : oee(e)
            ? ((u = e.size), (c = !1))
            : ((e = iG(e)), (u = e.length), (c = iG.readOnly)),
          this._firstFragment
            ? ((this._firstFragment = !1),
              a &&
                o &&
                o.params[o._isServer ? "server_no_context_takeover" : "client_no_context_takeover"] &&
                (a = u >= o._threshold),
              (this._compress = a))
            : ((a = !1), (s = 0)),
          r.fin && (this._firstFragment = !0));
        let m = {
          [l_]: u,
          fin: r.fin,
          generateMask: this._generateMask,
          mask: r.mask,
          maskBuffer: this._maskBuffer,
          opcode: s,
          readOnly: c,
          rsv1: a,
        };
        oee(e)
          ? this._state !== _C
            ? this.enqueue([this.getBlobData, e, this._compress, m, n])
            : this.getBlobData(e, this._compress, m, n)
          : this._state !== _C
            ? this.enqueue([this.dispatch, e, this._compress, m, n])
            : this.dispatch(e, this._compress, m, n);
      }
      getBlobData(e, r, n, o) {
        ((this._bufferedBytes += n[l_]),
          (this._state = Jlo),
          e
            .arrayBuffer()
            .then((s) => {
              if (this._socket.destroyed) {
                let u = new Error("The socket was closed while the blob was being read");
                process.nextTick(h9t, this, u, o);
                return;
              }
              this._bufferedBytes -= n[l_];
              let a = iG(s);
              r ? this.dispatch(a, r, n, o) : ((this._state = _C), this.sendFrame(t.frame(a, n), o), this.dequeue());
            })
            .catch((s) => {
              process.nextTick(Xlo, this, s, o);
            }));
      }
      dispatch(e, r, n, o) {
        if (!r) {
          this.sendFrame(t.frame(e, n), o);
          return;
        }
        let s = this._extensions[txr.extensionName];
        ((this._bufferedBytes += n[l_]),
          (this._state = Klo),
          s.compress(e, n.fin, (a, u) => {
            if (this._socket.destroyed) {
              let c = new Error("The socket was closed while data was being compressed");
              h9t(this, c, o);
              return;
            }
            ((this._bufferedBytes -= n[l_]),
              (this._state = _C),
              (n.readOnly = !1),
              this.sendFrame(t.frame(u, n), o),
              this.dequeue());
          }));
      }
      dequeue() {
        for (; this._state === _C && this._queue.length; ) {
          let e = this._queue.shift();
          ((this._bufferedBytes -= e[3][l_]), Reflect.apply(e[0], this, e.slice(1)));
        }
      }
      enqueue(e) {
        ((this._bufferedBytes += e[3][l_]), this._queue.push(e));
      }
      sendFrame(e, r) {
        e.length === 2
          ? (this._socket.cork(), this._socket.write(e[0]), this._socket.write(e[1], r), this._socket.uncork())
          : this._socket.write(e[0], r);
      }
    };
  nxr.exports = p9t;
  function h9t(t, e, r) {
    typeof r == "function" && r(e);
    for (let n = 0; n < t._queue.length; n++) {
      let o = t._queue[n],
        s = o[o.length - 1];
      typeof s == "function" && s(e);
    }
  }
  function Xlo(t, e, r) {
    (h9t(t, e, r), t.onerror(e));
  }
});