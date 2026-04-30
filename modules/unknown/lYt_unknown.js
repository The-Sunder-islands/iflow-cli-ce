/**
 * @module lYt
 * @category unknown
 * @label unknown
 * @position 1159 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (lYt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var lYt = T((Zbc, kIn) => {
  var cYt = class {
    constructor(e) {
      ((this._buf = Buffer.alloc((e && e.size) || 16384)),
        (this._encoding = (e && e.encoding) || "utf8"),
        (this._inPos = 0),
        (this._buffer = void 0));
    }
    get length() {
      return this._inPos;
    }
    get capacity() {
      return this._buf.length;
    }
    get buffer() {
      return this._buf;
    }
    toBuffer() {
      return (
        this._buffer || ((this._buffer = Buffer.alloc(this.length)), this._buf.copy(this._buffer, 0, 0, this.length)),
        this._buffer
      );
    }
    reset(e) {
      ((e = e || 0), (this._buffer = void 0), (this._inPos = e));
    }
    _grow(e) {
      let r = this._buf.length * 2;
      for (; r < e; ) r *= 2;
      let n = Buffer.alloc(r);
      (this._buf.copy(n, 0), (this._buf = n));
    }
    addText(e) {
      this._buffer = void 0;
      let r = this._inPos + this._buf.write(e, this._inPos, this._encoding);
      for (; r >= this._buf.length - 4; )
        (this._grow(this._inPos + e.length), (r = this._inPos + this._buf.write(e, this._inPos, this._encoding)));
      this._inPos = r;
    }
    addStringBuf(e) {
      e.length &&
        ((this._buffer = void 0),
        this.length + e.length > this.capacity && this._grow(this.length + e.length),
        e._buf.copy(this._buf, this._inPos, 0, e.length),
        (this._inPos += e.length));
    }
  };
  kIn.exports = cYt;
});