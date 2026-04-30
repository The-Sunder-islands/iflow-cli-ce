/**
 * @module QNe
 * @category utils/data
 * @label data
 * @position 163 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (QNe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var QNe = T((DRu, hHr) => {
  "use strict";
  hHr.exports = j1;
  var QC = _x(),
    Mvt,
    fHr = QC.LongBits,
    pxo = QC.utf8;
  function GC(t, e) {
    return RangeError("index out of range: " + t.pos + " + " + (e || 1) + " > " + t.len);
  }
  function j1(t) {
    ((this.buf = t), (this.pos = 0), (this.len = t.length));
  }
  var mHr =
      typeof Uint8Array < "u"
        ? function (e) {
            if (e instanceof Uint8Array || Array.isArray(e)) return new j1(e);
            throw Error("illegal buffer");
          }
        : function (e) {
            if (Array.isArray(e)) return new j1(e);
            throw Error("illegal buffer");
          },
    pHr = function () {
      return QC.Buffer
        ? function (r) {
            return (j1.create = function (o) {
              return QC.Buffer.isBuffer(o) ? new Mvt(o) : mHr(o);
            })(r);
          }
        : mHr;
    };
  j1.create = pHr();
  j1.prototype._slice = QC.Array.prototype.subarray || QC.Array.prototype.slice;
  j1.prototype.uint32 = (function () {
    var e = 4294967295;
    return function () {
      if (
        ((e = (this.buf[this.pos] & 127) >>> 0),
        this.buf[this.pos++] < 128 ||
          ((e = (e | ((this.buf[this.pos] & 127) << 7)) >>> 0), this.buf[this.pos++] < 128) ||
          ((e = (e | ((this.buf[this.pos] & 127) << 14)) >>> 0), this.buf[this.pos++] < 128) ||
          ((e = (e | ((this.buf[this.pos] & 127) << 21)) >>> 0), this.buf[this.pos++] < 128) ||
          ((e = (e | ((this.buf[this.pos] & 15) << 28)) >>> 0), this.buf[this.pos++] < 128))
      )
        return e;
      if ((this.pos += 5) > this.len) throw ((this.pos = this.len), GC(this, 10));
      return e;
    };
  })();
  j1.prototype.int32 = function () {
    return this.uint32() | 0;
  };
  j1.prototype.sint32 = function () {
    var e = this.uint32();
    return ((e >>> 1) ^ -(e & 1)) | 0;
  };
  function Lvt() {
    var t = new fHr(0, 0),
      e = 0;
    if (this.len - this.pos > 4) {
      for (; e < 4; ++e)
        if (((t.lo = (t.lo | ((this.buf[this.pos] & 127) << (e * 7))) >>> 0), this.buf[this.pos++] < 128)) return t;
      if (
        ((t.lo = (t.lo | ((this.buf[this.pos] & 127) << 28)) >>> 0),
        (t.hi = (t.hi | ((this.buf[this.pos] & 127) >> 4)) >>> 0),
        this.buf[this.pos++] < 128)
      )
        return t;
      e = 0;
    } else {
      for (; e < 3; ++e) {
        if (this.pos >= this.len) throw GC(this);
        if (((t.lo = (t.lo | ((this.buf[this.pos] & 127) << (e * 7))) >>> 0), this.buf[this.pos++] < 128)) return t;
      }
      return ((t.lo = (t.lo | ((this.buf[this.pos++] & 127) << (e * 7))) >>> 0), t);
    }
    if (this.len - this.pos > 4) {
      for (; e < 5; ++e)
        if (((t.hi = (t.hi | ((this.buf[this.pos] & 127) << (e * 7 + 3))) >>> 0), this.buf[this.pos++] < 128)) return t;
    } else
      for (; e < 5; ++e) {
        if (this.pos >= this.len) throw GC(this);
        if (((t.hi = (t.hi | ((this.buf[this.pos] & 127) << (e * 7 + 3))) >>> 0), this.buf[this.pos++] < 128)) return t;
      }
    throw Error("invalid varint encoding");
  }
  j1.prototype.bool = function () {
    return this.uint32() !== 0;
  };
  function jNe(t, e) {
    return (t[e - 4] | (t[e - 3] << 8) | (t[e - 2] << 16) | (t[e - 1] << 24)) >>> 0;
  }
  j1.prototype.fixed32 = function () {
    if (this.pos + 4 > this.len) throw GC(this, 4);
    return jNe(this.buf, (this.pos += 4));
  };
  j1.prototype.sfixed32 = function () {
    if (this.pos + 4 > this.len) throw GC(this, 4);
    return jNe(this.buf, (this.pos += 4)) | 0;
  };
  function dHr() {
    if (this.pos + 8 > this.len) throw GC(this, 8);
    return new fHr(jNe(this.buf, (this.pos += 4)), jNe(this.buf, (this.pos += 4)));
  }
  j1.prototype.float = function () {
    if (this.pos + 4 > this.len) throw GC(this, 4);
    var e = QC.float.readFloatLE(this.buf, this.pos);
    return ((this.pos += 4), e);
  };
  j1.prototype.double = function () {
    if (this.pos + 8 > this.len) throw GC(this, 4);
    var e = QC.float.readDoubleLE(this.buf, this.pos);
    return ((this.pos += 8), e);
  };
  j1.prototype.bytes = function () {
    var e = this.uint32(),
      r = this.pos,
      n = this.pos + e;
    if (n > this.len) throw GC(this, e);
    if (((this.pos += e), Array.isArray(this.buf))) return this.buf.slice(r, n);
    if (r === n) {
      var o = QC.Buffer;
      return o ? o.alloc(0) : new this.buf.constructor(0);
    }
    return this._slice.call(this.buf, r, n);
  };
  j1.prototype.string = function () {
    var e = this.bytes();
    return pxo.read(e, 0, e.length);
  };
  j1.prototype.skip = function (e) {
    if (typeof e == "number") {
      if (this.pos + e > this.len) throw GC(this, e);
      this.pos += e;
    } else
      do if (this.pos >= this.len) throw GC(this);
      while (this.buf[this.pos++] & 128);
    return this;
  };
  j1.prototype.skipType = function (t) {
    switch (t) {
      case 0:
        this.skip();
        break;
      case 1:
        this.skip(8);
        break;
      case 2:
        this.skip(this.uint32());
        break;
      case 3:
        for (; (t = this.uint32() & 7) !== 4; ) this.skipType(t);
        break;
      case 5:
        this.skip(4);
        break;
      default:
        throw Error("invalid wire type " + t + " at offset " + this.pos);
    }
    return this;
  };
  j1._configure = function (t) {
    ((Mvt = t), (j1.create = pHr()), Mvt._configure());
    var e = QC.Long ? "toLong" : "toNumber";
    QC.merge(j1.prototype, {
      int64: function () {
        return Lvt.call(this)[e](!1);
      },
      uint64: function () {
        return Lvt.call(this)[e](!0);
      },
      sint64: function () {
        return Lvt.call(this).zzDecode()[e](!1);
      },
      fixed64: function () {
        return dHr.call(this)[e](!0);
      },
      sfixed64: function () {
        return dHr.call(this)[e](!1);
      },
    });
  };
});