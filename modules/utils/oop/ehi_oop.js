/**
 * @module ehi
 * @category utils/oop
 * @label oop
 * @position 1666 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ehi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ehi = T((BQc, Zpi) => {
  var Cpr = 4294967296,
    Xpi = [];
  for (hme = 0; hme < 256; hme++) Xpi[hme] = (hme > 15 ? "" : "0") + hme.toString(16);
  var hme,
    OSe = (Zpi.exports = function (t, e) {
      t instanceof Buffer
        ? ((this.buffer = t), (this.offset = e || 0))
        : Object.prototype.toString.call(t) == "[object Uint8Array]"
          ? ((this.buffer = new Buffer(t)), (this.offset = e || 0))
          : ((this.buffer = this.buffer || new Buffer(8)), (this.offset = 0), this.setValue.apply(this, arguments));
    });
  OSe.MAX_INT = Math.pow(2, 53);
  OSe.MIN_INT = -Math.pow(2, 53);
  OSe.prototype = {
    constructor: OSe,
    _2scomp: function () {
      for (var t = this.buffer, e = this.offset, r = 1, n = e + 7; n >= e; n--) {
        var o = (t[n] ^ 255) + r;
        ((t[n] = o & 255), (r = o >> 8));
      }
    },
    setValue: function (t, e) {
      var r = !1;
      if (arguments.length == 1)
        if (typeof t == "number") {
          if (((r = t < 0), (t = Math.abs(t)), (e = t % Cpr), (t = t / Cpr), t > Cpr))
            throw new RangeError(t + " is outside Int64 range");
          t = t | 0;
        } else if (typeof t == "string")
          ((t = (t + "").replace(/^0x/, "")),
            (e = t.substr(-8)),
            (t = t.length > 8 ? t.substr(0, t.length - 8) : ""),
            (t = parseInt(t, 16)),
            (e = parseInt(e, 16)));
        else throw new Error(t + " must be a Number or String");
      for (var n = this.buffer, o = this.offset, s = 7; s >= 0; s--) ((n[o + s] = e & 255), (e = s == 4 ? t : e >>> 8));
      r && this._2scomp();
    },
    toNumber: function (t) {
      for (var e = this.buffer, r = this.offset, n = e[r] & 128, o = 0, s = 1, a = 7, u = 1; a >= 0; a--, u *= 256) {
        var c = e[r + a];
        (n && ((c = (c ^ 255) + s), (s = c >> 8), (c = c & 255)), (o += c * u));
      }
      return !t && o >= OSe.MAX_INT ? (n ? -1 / 0 : 1 / 0) : n ? -o : o;
    },
    valueOf: function () {
      return this.toNumber(!1);
    },
    toString: function (t) {
      return this.valueOf().toString(t || 10);
    },
    toOctetString: function (t) {
      for (var e = new Array(8), r = this.buffer, n = this.offset, o = 0; o < 8; o++) e[o] = Xpi[r[n + o]];
      return e.join(t || "");
    },
    toBuffer: function (t) {
      if (t && this.offset === 0) return this.buffer;
      var e = new Buffer(8);
      return (this.buffer.copy(e, 0, this.offset, this.offset + 8), e);
    },
    copy: function (t, e) {
      this.buffer.copy(t, e || 0, this.offset, this.offset + 8);
    },
    compare: function (t) {
      if ((this.buffer[this.offset] & 128) != (t.buffer[t.offset] & 128))
        return t.buffer[t.offset] - this.buffer[this.offset];
      for (var e = 0; e < 8; e++)
        if (this.buffer[this.offset + e] !== t.buffer[t.offset + e])
          return this.buffer[this.offset + e] - t.buffer[t.offset + e];
      return 0;
    },
    equals: function (t) {
      return this.compare(t) === 0;
    },
    inspect: function () {
      return "[Int64 value:" + this + " octets:" + this.toOctetString(" ") + "]";
    },
  };
});