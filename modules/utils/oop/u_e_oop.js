/**
 * @module u_e
 * @category utils/oop
 * @label oop
 * @position 1160 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (u_e) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var u_e = T((eAc, PIn) => {
  var PIs = Dg(),
    OIn = eA(),
    BIs = lYt(),
    mYt = class {
      constructor(e, r) {
        ((this._data = e), (this._encoding = r));
      }
      get length() {
        return this.toBuffer().length;
      }
      copy(e, r, n, o) {
        return this.toBuffer().copy(e, r, n, o);
      }
      toBuffer() {
        return (this._buffer || (this._buffer = Buffer.from(this._data, this._encoding)), this._buffer);
      }
    },
    dYt = class {
      constructor(e) {
        this._data = e;
      }
      get length() {
        return this._data.length;
      }
      copy(e, r, n, o) {
        return this._data._buf.copy(e, r, n, o);
      }
      toBuffer() {
        return this._data.toBuffer();
      }
    },
    fYt = class {
      constructor(e) {
        this._data = e;
      }
      get length() {
        return this._data.length;
      }
      copy(e, r, n, o) {
        this._data.copy(e, r, n, o);
      }
      toBuffer() {
        return this._data;
      }
    },
    pYt = class {
      constructor(e) {
        ((this.size = e), (this.buffer = Buffer.alloc(e)), (this.iRead = 0), (this.iWrite = 0));
      }
      toBuffer() {
        if (this.iRead === 0 && this.iWrite === this.size) return this.buffer;
        let e = Buffer.alloc(this.iWrite - this.iRead);
        return (this.buffer.copy(e, 0, this.iRead, this.iWrite), e);
      }
      get length() {
        return this.iWrite - this.iRead;
      }
      get eod() {
        return this.iRead === this.iWrite;
      }
      get full() {
        return this.iWrite === this.size;
      }
      read(e) {
        let r;
        return e === 0
          ? null
          : e === void 0 || e >= this.length
            ? ((r = this.toBuffer()), (this.iRead = this.iWrite), r)
            : ((r = Buffer.alloc(e)), this.buffer.copy(r, 0, this.iRead, e), (this.iRead += e), r);
      }
      write(e, r, n) {
        let o = Math.min(n, this.size - this.iWrite);
        return (e.copy(this.buffer, this.iWrite, r, r + o), (this.iWrite += o), o);
      }
    },
    NIn = function (t) {
      ((t = t || {}),
        (this.bufSize = t.bufSize || 1024 * 1024),
        (this.buffers = []),
        (this.batch = t.batch || !1),
        (this.corked = !1),
        (this.inPos = 0),
        (this.outPos = 0),
        (this.pipes = []),
        (this.paused = !1),
        (this.encoding = null));
    };
  OIn.inherits(NIn, PIs.Duplex, {
    toBuffer() {
      switch (this.buffers.length) {
        case 0:
          return null;
        case 1:
          return this.buffers[0].toBuffer();
        default:
          return Buffer.concat(this.buffers.map((t) => t.toBuffer()));
      }
    },
    _getWritableBuffer() {
      if (this.buffers.length) {
        let e = this.buffers[this.buffers.length - 1];
        if (!e.full) return e;
      }
      let t = new pYt(this.bufSize);
      return (this.buffers.push(t), t);
    },
    async _pipe(t) {
      let e = function (r) {
        return new Promise((n) => {
          r.write(t.toBuffer(), () => {
            n();
          });
        });
      };
      await Promise.all(this.pipes.map(e));
    },
    _writeToBuffers(t) {
      let e = 0,
        r = t.length;
      for (; e < r; ) {
        let n = this._getWritableBuffer();
        e += n.write(t, e, r - e);
      }
    },
    async write(t, e, r) {
      (e instanceof Function && ((r = e), (e = "utf8")), (r = r || OIn.nop));
      let n;
      if (t instanceof BIs) n = new dYt(t);
      else if (t instanceof Buffer) n = new fYt(t);
      else if (typeof t == "string" || t instanceof String || t instanceof ArrayBuffer) n = new mYt(t, e);
      else throw new Error("Chunk must be one of type String, Buffer or StringBuf.");
      if (this.pipes.length)
        if (this.batch)
          for (this._writeToBuffers(n); !this.corked && this.buffers.length > 1; ) this._pipe(this.buffers.shift());
        else this.corked ? (this._writeToBuffers(n), process.nextTick(r)) : (await this._pipe(n), r());
      else (this.paused || this.emit("data", n.toBuffer()), this._writeToBuffers(n), this.emit("readable"));
      return !0;
    },
    cork() {
      this.corked = !0;
    },
    _flush() {
      if (this.pipes.length) for (; this.buffers.length; ) this._pipe(this.buffers.shift());
    },
    uncork() {
      ((this.corked = !1), this._flush());
    },
    end(t, e, r) {
      let n = (o) => {
        o
          ? r(o)
          : (this._flush(),
            this.pipes.forEach((s) => {
              s.end();
            }),
            this.emit("finish"));
      };
      t ? this.write(t, e, n) : n();
    },
    read(t) {
      let e;
      if (t) {
        for (e = []; t && this.buffers.length && !this.buffers[0].eod; ) {
          let r = this.buffers[0],
            n = r.read(t);
          ((t -= n.length), e.push(n), r.eod && r.full && this.buffers.shift());
        }
        return Buffer.concat(e);
      }
      return ((e = this.buffers.map((r) => r.toBuffer()).filter(Boolean)), (this.buffers = []), Buffer.concat(e));
    },
    setEncoding(t) {
      this.encoding = t;
    },
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    },
    isPaused() {
      return !!this.paused;
    },
    pipe(t) {
      (this.pipes.push(t), !this.paused && this.buffers.length && this.end());
    },
    unpipe(t) {
      this.pipes = this.pipes.filter((e) => e !== t);
    },
    unshift() {
      throw new Error("Not Implemented");
    },
    wrap() {
      throw new Error("Not Implemented");
    },
  });
  PIn.exports = NIn;
});