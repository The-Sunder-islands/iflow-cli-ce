/**
 * @module CZi
 * @category unknown
 * @label unknown
 * @position 1917 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (CZi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var CZi = T((exl, vZi) => {
  var EZi = Ae("stream").Stream;
  vZi.exports = Kfu;
  function Kfu(t) {
    return { ReadStream: e, WriteStream: r };
    function e(n, o) {
      if (!(this instanceof e)) return new e(n, o);
      EZi.call(this);
      var s = this;
      ((this.path = n),
        (this.fd = null),
        (this.readable = !0),
        (this.paused = !1),
        (this.flags = "r"),
        (this.mode = 438),
        (this.bufferSize = 64 * 1024),
        (o = o || {}));
      for (var a = Object.keys(o), u = 0, c = a.length; u < c; u++) {
        var m = a[u];
        this[m] = o[m];
      }
      if ((this.encoding && this.setEncoding(this.encoding), this.start !== void 0)) {
        if (typeof this.start != "number") throw TypeError("start must be a Number");
        if (this.end === void 0) this.end = 1 / 0;
        else if (typeof this.end != "number") throw TypeError("end must be a Number");
        if (this.start > this.end) throw new Error("start must be <= end");
        this.pos = this.start;
      }
      if (this.fd !== null) {
        process.nextTick(function () {
          s._read();
        });
        return;
      }
      t.open(this.path, this.flags, this.mode, function (d, f) {
        if (d) {
          (s.emit("error", d), (s.readable = !1));
          return;
        }
        ((s.fd = f), s.emit("open", f), s._read());
      });
    }
    function r(n, o) {
      if (!(this instanceof r)) return new r(n, o);
      (EZi.call(this),
        (this.path = n),
        (this.fd = null),
        (this.writable = !0),
        (this.flags = "w"),
        (this.encoding = "binary"),
        (this.mode = 438),
        (this.bytesWritten = 0),
        (o = o || {}));
      for (var s = Object.keys(o), a = 0, u = s.length; a < u; a++) {
        var c = s[a];
        this[c] = o[c];
      }
      if (this.start !== void 0) {
        if (typeof this.start != "number") throw TypeError("start must be a Number");
        if (this.start < 0) throw new Error("start must be >= zero");
        this.pos = this.start;
      }
      ((this.busy = !1),
        (this._queue = []),
        this.fd === null &&
          ((this._open = t.open),
          this._queue.push([this._open, this.path, this.flags, this.mode, void 0]),
          this.flush()));
    }
  }
});