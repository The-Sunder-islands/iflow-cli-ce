/**
 * @module Wtr
 * @category utils/compression
 * @label compression
 * @position 1383 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Wtr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Wtr = T((Vtr) => {
  var n$n;
  (function (t) {
    typeof DO_NOT_EXPORT_CRC > "u"
      ? typeof Vtr == "object"
        ? t(Vtr)
        : typeof define == "function" && define.amd
          ? define(function () {
              var e = {};
              return (t(e), e);
            })
          : t((n$n = {}))
      : t((n$n = {}));
  })(function (t) {
    t.version = "1.2.2";
    function e() {
      for (var R = 0, P = new Array(256), D = 0; D != 256; ++D)
        ((R = D),
          (R = R & 1 ? -306674912 ^ (R >>> 1) : R >>> 1),
          (R = R & 1 ? -306674912 ^ (R >>> 1) : R >>> 1),
          (R = R & 1 ? -306674912 ^ (R >>> 1) : R >>> 1),
          (R = R & 1 ? -306674912 ^ (R >>> 1) : R >>> 1),
          (R = R & 1 ? -306674912 ^ (R >>> 1) : R >>> 1),
          (R = R & 1 ? -306674912 ^ (R >>> 1) : R >>> 1),
          (R = R & 1 ? -306674912 ^ (R >>> 1) : R >>> 1),
          (R = R & 1 ? -306674912 ^ (R >>> 1) : R >>> 1),
          (P[D] = R));
      return typeof Int32Array < "u" ? new Int32Array(P) : P;
    }
    var r = e();
    function n(R) {
      var P = 0,
        D = 0,
        O = 0,
        N = typeof Int32Array < "u" ? new Int32Array(4096) : new Array(4096);
      for (O = 0; O != 256; ++O) N[O] = R[O];
      for (O = 0; O != 256; ++O) for (D = R[O], P = 256 + O; P < 4096; P += 256) D = N[P] = (D >>> 8) ^ R[D & 255];
      var F = [];
      for (O = 1; O != 16; ++O)
        F[O - 1] = typeof Int32Array < "u" ? N.subarray(O * 256, O * 256 + 256) : N.slice(O * 256, O * 256 + 256);
      return F;
    }
    var o = n(r),
      s = o[0],
      a = o[1],
      u = o[2],
      c = o[3],
      m = o[4],
      d = o[5],
      f = o[6],
      p = o[7],
      h = o[8],
      g = o[9],
      b = o[10],
      A = o[11],
      y = o[12],
      E = o[13],
      v = o[14];
    function C(R, P) {
      for (var D = P ^ -1, O = 0, N = R.length; O < N; ) D = (D >>> 8) ^ r[(D ^ R.charCodeAt(O++)) & 255];
      return ~D;
    }
    function x(R, P) {
      for (var D = P ^ -1, O = R.length - 15, N = 0; N < O; )
        D =
          v[R[N++] ^ (D & 255)] ^
          E[R[N++] ^ ((D >> 8) & 255)] ^
          y[R[N++] ^ ((D >> 16) & 255)] ^
          A[R[N++] ^ (D >>> 24)] ^
          b[R[N++]] ^
          g[R[N++]] ^
          h[R[N++]] ^
          p[R[N++]] ^
          f[R[N++]] ^
          d[R[N++]] ^
          m[R[N++]] ^
          c[R[N++]] ^
          u[R[N++]] ^
          a[R[N++]] ^
          s[R[N++]] ^
          r[R[N++]];
      for (O += 15; N < O; ) D = (D >>> 8) ^ r[(D ^ R[N++]) & 255];
      return ~D;
    }
    function k(R, P) {
      for (var D = P ^ -1, O = 0, N = R.length, F = 0, B = 0; O < N; )
        ((F = R.charCodeAt(O++)),
          F < 128
            ? (D = (D >>> 8) ^ r[(D ^ F) & 255])
            : F < 2048
              ? ((D = (D >>> 8) ^ r[(D ^ (192 | ((F >> 6) & 31))) & 255]),
                (D = (D >>> 8) ^ r[(D ^ (128 | (F & 63))) & 255]))
              : F >= 55296 && F < 57344
                ? ((F = (F & 1023) + 64),
                  (B = R.charCodeAt(O++) & 1023),
                  (D = (D >>> 8) ^ r[(D ^ (240 | ((F >> 8) & 7))) & 255]),
                  (D = (D >>> 8) ^ r[(D ^ (128 | ((F >> 2) & 63))) & 255]),
                  (D = (D >>> 8) ^ r[(D ^ (128 | ((B >> 6) & 15) | ((F & 3) << 4))) & 255]),
                  (D = (D >>> 8) ^ r[(D ^ (128 | (B & 63))) & 255]))
                : ((D = (D >>> 8) ^ r[(D ^ (224 | ((F >> 12) & 15))) & 255]),
                  (D = (D >>> 8) ^ r[(D ^ (128 | ((F >> 6) & 63))) & 255]),
                  (D = (D >>> 8) ^ r[(D ^ (128 | (F & 63))) & 255])));
      return ~D;
    }
    ((t.table = r), (t.bstr = C), (t.buf = x), (t.str = k));
  });
});
var o$n = T((h9c, i$n) => {
  "use strict";
  var { Transform: Tzs } = Dg(),
    Dzs = Wtr(),
    ztr = class extends Tzs {
      constructor(e) {
        (super(e), (this.checksum = Buffer.allocUnsafe(4)), this.checksum.writeInt32BE(0, 0), (this.rawSize = 0));
      }
      _transform(e, r, n) {
        (e && ((this.checksum = Dzs.buf(e, this.checksum) >>> 0), (this.rawSize += e.length)), n(null, e));
      }
      digest(e) {
        let r = Buffer.allocUnsafe(4);
        return (r.writeUInt32BE(this.checksum >>> 0, 0), e ? r.toString(e) : r);
      }
      hex() {
        return this.digest("hex").toUpperCase();
      }
      size() {
        return this.rawSize;
      }
    };
  i$n.exports = ztr;
});
var a$n = T((g9c, s$n) => {
  "use strict";
  var { DeflateRaw: Izs } = Ae("zlib"),
    Rzs = Wtr(),
    Ytr = class extends Izs {
      constructor(e) {
        (super(e),
          (this.checksum = Buffer.allocUnsafe(4)),
          this.checksum.writeInt32BE(0, 0),
          (this.rawSize = 0),
          (this.compressedSize = 0));
      }
      push(e, r) {
        return (e && (this.compressedSize += e.length), super.push(e, r));
      }
      _transform(e, r, n) {
        (e && ((this.checksum = Rzs.buf(e, this.checksum) >>> 0), (this.rawSize += e.length)),
          super._transform(e, r, n));
      }
      digest(e) {
        let r = Buffer.allocUnsafe(4);
        return (r.writeUInt32BE(this.checksum >>> 0, 0), e ? r.toString(e) : r);
      }
      hex() {
        return this.digest("hex").toUpperCase();
      }
      size(e = !1) {
        return e ? this.compressedSize : this.rawSize;
      }
    };
  s$n.exports = Ytr;
});