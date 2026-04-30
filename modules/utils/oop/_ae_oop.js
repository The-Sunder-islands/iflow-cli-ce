/**
 * @module _ae
 * @category utils/oop
 * @label oop
 * @position 1002 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (_ae) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var _ae = T((rF) => {
  "use strict";
  var yae = Nd(),
    VV = Fk(),
    sEs = j6e(),
    oXe = I6(),
    z6e = new Array(256);
  for (Uk = 0; Uk < 256; Uk++)
    z6e[Uk] = Uk >= 252 ? 6 : Uk >= 248 ? 5 : Uk >= 240 ? 4 : Uk >= 224 ? 3 : Uk >= 192 ? 2 : 1;
  var Uk;
  z6e[254] = z6e[254] = 1;
  var aEs = function (t) {
      var e,
        r,
        n,
        o,
        s,
        a = t.length,
        u = 0;
      for (o = 0; o < a; o++)
        ((r = t.charCodeAt(o)),
          (r & 64512) === 55296 &&
            o + 1 < a &&
            ((n = t.charCodeAt(o + 1)),
            (n & 64512) === 56320 && ((r = 65536 + ((r - 55296) << 10) + (n - 56320)), o++)),
          (u += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4));
      for (VV.uint8array ? (e = new Uint8Array(u)) : (e = new Array(u)), s = 0, o = 0; s < u; o++)
        ((r = t.charCodeAt(o)),
          (r & 64512) === 55296 &&
            o + 1 < a &&
            ((n = t.charCodeAt(o + 1)),
            (n & 64512) === 56320 && ((r = 65536 + ((r - 55296) << 10) + (n - 56320)), o++)),
          r < 128
            ? (e[s++] = r)
            : r < 2048
              ? ((e[s++] = 192 | (r >>> 6)), (e[s++] = 128 | (r & 63)))
              : r < 65536
                ? ((e[s++] = 224 | (r >>> 12)), (e[s++] = 128 | ((r >>> 6) & 63)), (e[s++] = 128 | (r & 63)))
                : ((e[s++] = 240 | (r >>> 18)),
                  (e[s++] = 128 | ((r >>> 12) & 63)),
                  (e[s++] = 128 | ((r >>> 6) & 63)),
                  (e[s++] = 128 | (r & 63))));
      return e;
    },
    uEs = function (t, e) {
      var r;
      for (e = e || t.length, e > t.length && (e = t.length), r = e - 1; r >= 0 && (t[r] & 192) === 128; ) r--;
      return r < 0 || r === 0 ? e : r + z6e[t[r]] > e ? r : e;
    },
    cEs = function (t) {
      var e,
        r,
        n,
        o,
        s = t.length,
        a = new Array(s * 2);
      for (r = 0, e = 0; e < s; ) {
        if (((n = t[e++]), n < 128)) {
          a[r++] = n;
          continue;
        }
        if (((o = z6e[n]), o > 4)) {
          ((a[r++] = 65533), (e += o - 1));
          continue;
        }
        for (n &= o === 2 ? 31 : o === 3 ? 15 : 7; o > 1 && e < s; ) ((n = (n << 6) | (t[e++] & 63)), o--);
        if (o > 1) {
          a[r++] = 65533;
          continue;
        }
        n < 65536 ? (a[r++] = n) : ((n -= 65536), (a[r++] = 55296 | ((n >> 10) & 1023)), (a[r++] = 56320 | (n & 1023)));
      }
      return (a.length !== r && (a.subarray ? (a = a.subarray(0, r)) : (a.length = r)), yae.applyFromCharCode(a));
    };
  rF.utf8encode = function (e) {
    return VV.nodebuffer ? sEs.newBufferFrom(e, "utf-8") : aEs(e);
  };
  rF.utf8decode = function (e) {
    return VV.nodebuffer
      ? yae.transformTo("nodebuffer", e).toString("utf-8")
      : ((e = yae.transformTo(VV.uint8array ? "uint8array" : "array", e)), cEs(e));
  };
  function sXe() {
    (oXe.call(this, "utf-8 decode"), (this.leftOver = null));
  }
  yae.inherits(sXe, oXe);
  sXe.prototype.processChunk = function (t) {
    var e = yae.transformTo(VV.uint8array ? "uint8array" : "array", t.data);
    if (this.leftOver && this.leftOver.length) {
      if (VV.uint8array) {
        var r = e;
        ((e = new Uint8Array(r.length + this.leftOver.length)),
          e.set(this.leftOver, 0),
          e.set(r, this.leftOver.length));
      } else e = this.leftOver.concat(e);
      this.leftOver = null;
    }
    var n = uEs(e),
      o = e;
    (n !== e.length &&
      (VV.uint8array
        ? ((o = e.subarray(0, n)), (this.leftOver = e.subarray(n, e.length)))
        : ((o = e.slice(0, n)), (this.leftOver = e.slice(n, e.length)))),
      this.push({ data: rF.utf8decode(o), meta: t.meta }));
  };
  sXe.prototype.flush = function () {
    this.leftOver &&
      this.leftOver.length &&
      (this.push({ data: rF.utf8decode(this.leftOver), meta: {} }), (this.leftOver = null));
  };
  rF.Utf8DecodeWorker = sXe;
  function JHt() {
    oXe.call(this, "utf-8 encode");
  }
  yae.inherits(JHt, oXe);
  JHt.prototype.processChunk = function (t) {
    this.push({ data: rF.utf8encode(t.data), meta: t.meta });
  };
  rF.Utf8EncodeWorker = JHt;
});