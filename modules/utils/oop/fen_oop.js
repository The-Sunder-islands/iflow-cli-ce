/**
 * @module fen
 * @category utils/oop
 * @label oop
 * @position 483 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (fen) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var fen = T((ybe, TTt) => {
  (function (t, e) {
    function r(n) {
      return n.default || n;
    }
    typeof define == "function" && define.amd
      ? define([], function () {
          var n = {};
          return (e(n), r(n));
        })
      : typeof ybe == "object"
        ? (e(ybe), typeof TTt == "object" && (TTt.exports = r(ybe)))
        : (function () {
            var n = {};
            (e(n), (t.Long = r(n)));
          })();
  })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : ybe, function (t) {
    "use strict";
    (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0));
    var e = null;
    try {
      e = new WebAssembly.Instance(
        new WebAssembly.Module(
          new Uint8Array([
            0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1,
            1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5,
            100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101,
            116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173,
            66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167,
            11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127,
            34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32,
            2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126,
            32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135,
            167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173,
            66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11,
          ]),
        ),
        {},
      ).exports;
    } catch {}
    function r(B, L, G) {
      ((this.low = B | 0), (this.high = L | 0), (this.unsigned = !!G));
    }
    (r.prototype.__isLong__, Object.defineProperty(r.prototype, "__isLong__", { value: !0 }));
    function n(B) {
      return (B && B.__isLong__) === !0;
    }
    function o(B) {
      var L = Math.clz32(B & -B);
      return B ? 31 - L : L;
    }
    r.isLong = n;
    var s = {},
      a = {};
    function u(B, L) {
      var G, Q, K;
      return L
        ? ((B >>>= 0), (K = 0 <= B && B < 256) && ((Q = a[B]), Q) ? Q : ((G = m(B, 0, !0)), K && (a[B] = G), G))
        : ((B |= 0),
          (K = -128 <= B && B < 128) && ((Q = s[B]), Q) ? Q : ((G = m(B, B < 0 ? -1 : 0, !1)), K && (s[B] = G), G));
    }
    r.fromInt = u;
    function c(B, L) {
      if (isNaN(B)) return L ? C : v;
      if (L) {
        if (B < 0) return C;
        if (B >= A) return D;
      } else {
        if (B <= -y) return O;
        if (B + 1 >= y) return P;
      }
      return B < 0 ? c(-B, L).neg() : m((B % b) | 0, (B / b) | 0, L);
    }
    r.fromNumber = c;
    function m(B, L, G) {
      return new r(B, L, G);
    }
    r.fromBits = m;
    var d = Math.pow;
    function f(B, L, G) {
      if (B.length === 0) throw Error("empty string");
      if (
        (typeof L == "number" ? ((G = L), (L = !1)) : (L = !!L),
        B === "NaN" || B === "Infinity" || B === "+Infinity" || B === "-Infinity")
      )
        return L ? C : v;
      if (((G = G || 10), G < 2 || 36 < G)) throw RangeError("radix");
      var Q;
      if ((Q = B.indexOf("-")) > 0) throw Error("interior hyphen");
      if (Q === 0) return f(B.substring(1), L, G).neg();
      for (var K = c(d(G, 8)), H = v, U = 0; U < B.length; U += 8) {
        var Y = Math.min(8, B.length - U),
          X = parseInt(B.substring(U, U + Y), G);
        if (Y < 8) {
          var J = c(d(G, Y));
          H = H.mul(J).add(c(X));
        } else ((H = H.mul(K)), (H = H.add(c(X))));
      }
      return ((H.unsigned = L), H);
    }
    r.fromString = f;
    function p(B, L) {
      return typeof B == "number"
        ? c(B, L)
        : typeof B == "string"
          ? f(B, L)
          : m(B.low, B.high, typeof L == "boolean" ? L : B.unsigned);
    }
    r.fromValue = p;
    var h = 65536,
      g = 1 << 24,
      b = h * h,
      A = b * b,
      y = A / 2,
      E = u(g),
      v = u(0);
    r.ZERO = v;
    var C = u(0, !0);
    r.UZERO = C;
    var x = u(1);
    r.ONE = x;
    var k = u(1, !0);
    r.UONE = k;
    var R = u(-1);
    r.NEG_ONE = R;
    var P = m(-1, 2147483647, !1);
    r.MAX_VALUE = P;
    var D = m(-1, -1, !0);
    r.MAX_UNSIGNED_VALUE = D;
    var O = m(0, -2147483648, !1);
    r.MIN_VALUE = O;
    var N = r.prototype;
    ((N.toInt = function () {
      return this.unsigned ? this.low >>> 0 : this.low;
    }),
      (N.toNumber = function () {
        return this.unsigned ? (this.high >>> 0) * b + (this.low >>> 0) : this.high * b + (this.low >>> 0);
      }),
      (N.toString = function (L) {
        if (((L = L || 10), L < 2 || 36 < L)) throw RangeError("radix");
        if (this.isZero()) return "0";
        if (this.isNegative())
          if (this.eq(O)) {
            var G = c(L),
              Q = this.div(G),
              K = Q.mul(G).sub(this);
            return Q.toString(L) + K.toInt().toString(L);
          } else return "-" + this.neg().toString(L);
        for (var H = c(d(L, 6), this.unsigned), U = this, Y = ""; ; ) {
          var X = U.div(H),
            J = U.sub(X.mul(H)).toInt() >>> 0,
            q = J.toString(L);
          if (((U = X), U.isZero())) return q + Y;
          for (; q.length < 6; ) q = "0" + q;
          Y = "" + q + Y;
        }
      }),
      (N.getHighBits = function () {
        return this.high;
      }),
      (N.getHighBitsUnsigned = function () {
        return this.high >>> 0;
      }),
      (N.getLowBits = function () {
        return this.low;
      }),
      (N.getLowBitsUnsigned = function () {
        return this.low >>> 0;
      }),
      (N.getNumBitsAbs = function () {
        if (this.isNegative()) return this.eq(O) ? 64 : this.neg().getNumBitsAbs();
        for (var L = this.high != 0 ? this.high : this.low, G = 31; G > 0 && (L & (1 << G)) == 0; G--);
        return this.high != 0 ? G + 33 : G + 1;
      }),
      (N.isSafeInteger = function () {
        var L = this.high >> 21;
        return L ? (this.unsigned ? !1 : L === -1 && !(this.low === 0 && this.high === -2097152)) : !0;
      }),
      (N.isZero = function () {
        return this.high === 0 && this.low === 0;
      }),
      (N.eqz = N.isZero),
      (N.isNegative = function () {
        return !this.unsigned && this.high < 0;
      }),
      (N.isPositive = function () {
        return this.unsigned || this.high >= 0;
      }),
      (N.isOdd = function () {
        return (this.low & 1) === 1;
      }),
      (N.isEven = function () {
        return (this.low & 1) === 0;
      }),
      (N.equals = function (L) {
        return (
          n(L) || (L = p(L)),
          this.unsigned !== L.unsigned && this.high >>> 31 === 1 && L.high >>> 31 === 1
            ? !1
            : this.high === L.high && this.low === L.low
        );
      }),
      (N.eq = N.equals),
      (N.notEquals = function (L) {
        return !this.eq(L);
      }),
      (N.neq = N.notEquals),
      (N.ne = N.notEquals),
      (N.lessThan = function (L) {
        return this.comp(L) < 0;
      }),
      (N.lt = N.lessThan),
      (N.lessThanOrEqual = function (L) {
        return this.comp(L) <= 0;
      }),
      (N.lte = N.lessThanOrEqual),
      (N.le = N.lessThanOrEqual),
      (N.greaterThan = function (L) {
        return this.comp(L) > 0;
      }),
      (N.gt = N.greaterThan),
      (N.greaterThanOrEqual = function (L) {
        return this.comp(L) >= 0;
      }),
      (N.gte = N.greaterThanOrEqual),
      (N.ge = N.greaterThanOrEqual),
      (N.compare = function (L) {
        if ((n(L) || (L = p(L)), this.eq(L))) return 0;
        var G = this.isNegative(),
          Q = L.isNegative();
        return G && !Q
          ? -1
          : !G && Q
            ? 1
            : this.unsigned
              ? L.high >>> 0 > this.high >>> 0 || (L.high === this.high && L.low >>> 0 > this.low >>> 0)
                ? -1
                : 1
              : this.sub(L).isNegative()
                ? -1
                : 1;
      }),
      (N.comp = N.compare),
      (N.negate = function () {
        return !this.unsigned && this.eq(O) ? O : this.not().add(x);
      }),
      (N.neg = N.negate),
      (N.add = function (L) {
        n(L) || (L = p(L));
        var G = this.high >>> 16,
          Q = this.high & 65535,
          K = this.low >>> 16,
          H = this.low & 65535,
          U = L.high >>> 16,
          Y = L.high & 65535,
          X = L.low >>> 16,
          J = L.low & 65535,
          q = 0,
          ne = 0,
          de = 0,
          ce = 0;
        return (
          (ce += H + J),
          (de += ce >>> 16),
          (ce &= 65535),
          (de += K + X),
          (ne += de >>> 16),
          (de &= 65535),
          (ne += Q + Y),
          (q += ne >>> 16),
          (ne &= 65535),
          (q += G + U),
          (q &= 65535),
          m((de << 16) | ce, (q << 16) | ne, this.unsigned)
        );
      }),
      (N.subtract = function (L) {
        return (n(L) || (L = p(L)), this.add(L.neg()));
      }),
      (N.sub = N.subtract),
      (N.multiply = function (L) {
        if (this.isZero()) return this;
        if ((n(L) || (L = p(L)), e)) {
          var G = e.mul(this.low, this.high, L.low, L.high);
          return m(G, e.get_high(), this.unsigned);
        }
        if (L.isZero()) return this.unsigned ? C : v;
        if (this.eq(O)) return L.isOdd() ? O : v;
        if (L.eq(O)) return this.isOdd() ? O : v;
        if (this.isNegative()) return L.isNegative() ? this.neg().mul(L.neg()) : this.neg().mul(L).neg();
        if (L.isNegative()) return this.mul(L.neg()).neg();
        if (this.lt(E) && L.lt(E)) return c(this.toNumber() * L.toNumber(), this.unsigned);
        var Q = this.high >>> 16,
          K = this.high & 65535,
          H = this.low >>> 16,
          U = this.low & 65535,
          Y = L.high >>> 16,
          X = L.high & 65535,
          J = L.low >>> 16,
          q = L.low & 65535,
          ne = 0,
          de = 0,
          ce = 0,
          ye = 0;
        return (
          (ye += U * q),
          (ce += ye >>> 16),
          (ye &= 65535),
          (ce += H * q),
          (de += ce >>> 16),
          (ce &= 65535),
          (ce += U * J),
          (de += ce >>> 16),
          (ce &= 65535),
          (de += K * q),
          (ne += de >>> 16),
          (de &= 65535),
          (de += H * J),
          (ne += de >>> 16),
          (de &= 65535),
          (de += U * X),
          (ne += de >>> 16),
          (de &= 65535),
          (ne += Q * q + K * J + H * X + U * Y),
          (ne &= 65535),
          m((ce << 16) | ye, (ne << 16) | de, this.unsigned)
        );
      }),
      (N.mul = N.multiply),
      (N.divide = function (L) {
        if ((n(L) || (L = p(L)), L.isZero())) throw Error("division by zero");
        if (e) {
          if (!this.unsigned && this.high === -2147483648 && L.low === -1 && L.high === -1) return this;
          var G = (this.unsigned ? e.div_u : e.div_s)(this.low, this.high, L.low, L.high);
          return m(G, e.get_high(), this.unsigned);
        }
        if (this.isZero()) return this.unsigned ? C : v;
        var Q, K, H;
        if (this.unsigned) {
          if ((L.unsigned || (L = L.toUnsigned()), L.gt(this))) return C;
          if (L.gt(this.shru(1))) return k;
          H = C;
        } else {
          if (this.eq(O)) {
            if (L.eq(x) || L.eq(R)) return O;
            if (L.eq(O)) return x;
            var U = this.shr(1);
            return (
              (Q = U.div(L).shl(1)),
              Q.eq(v) ? (L.isNegative() ? x : R) : ((K = this.sub(L.mul(Q))), (H = Q.add(K.div(L))), H)
            );
          } else if (L.eq(O)) return this.unsigned ? C : v;
          if (this.isNegative()) return L.isNegative() ? this.neg().div(L.neg()) : this.neg().div(L).neg();
          if (L.isNegative()) return this.div(L.neg()).neg();
          H = v;
        }
        for (K = this; K.gte(L); ) {
          Q = Math.max(1, Math.floor(K.toNumber() / L.toNumber()));
          for (
            var Y = Math.ceil(Math.log(Q) / Math.LN2), X = Y <= 48 ? 1 : d(2, Y - 48), J = c(Q), q = J.mul(L);
            q.isNegative() || q.gt(K);
          )
            ((Q -= X), (J = c(Q, this.unsigned)), (q = J.mul(L)));
          (J.isZero() && (J = x), (H = H.add(J)), (K = K.sub(q)));
        }
        return H;
      }),
      (N.div = N.divide),
      (N.modulo = function (L) {
        if ((n(L) || (L = p(L)), e)) {
          var G = (this.unsigned ? e.rem_u : e.rem_s)(this.low, this.high, L.low, L.high);
          return m(G, e.get_high(), this.unsigned);
        }
        return this.sub(this.div(L).mul(L));
      }),
      (N.mod = N.modulo),
      (N.rem = N.modulo),
      (N.not = function () {
        return m(~this.low, ~this.high, this.unsigned);
      }),
      (N.countLeadingZeros = function () {
        return this.high ? Math.clz32(this.high) : Math.clz32(this.low) + 32;
      }),
      (N.clz = N.countLeadingZeros),
      (N.countTrailingZeros = function () {
        return this.low ? o(this.low) : o(this.high) + 32;
      }),
      (N.ctz = N.countTrailingZeros),
      (N.and = function (L) {
        return (n(L) || (L = p(L)), m(this.low & L.low, this.high & L.high, this.unsigned));
      }),
      (N.or = function (L) {
        return (n(L) || (L = p(L)), m(this.low | L.low, this.high | L.high, this.unsigned));
      }),
      (N.xor = function (L) {
        return (n(L) || (L = p(L)), m(this.low ^ L.low, this.high ^ L.high, this.unsigned));
      }),
      (N.shiftLeft = function (L) {
        return (
          n(L) && (L = L.toInt()),
          (L &= 63) === 0
            ? this
            : L < 32
              ? m(this.low << L, (this.high << L) | (this.low >>> (32 - L)), this.unsigned)
              : m(0, this.low << (L - 32), this.unsigned)
        );
      }),
      (N.shl = N.shiftLeft),
      (N.shiftRight = function (L) {
        return (
          n(L) && (L = L.toInt()),
          (L &= 63) === 0
            ? this
            : L < 32
              ? m((this.low >>> L) | (this.high << (32 - L)), this.high >> L, this.unsigned)
              : m(this.high >> (L - 32), this.high >= 0 ? 0 : -1, this.unsigned)
        );
      }),
      (N.shr = N.shiftRight),
      (N.shiftRightUnsigned = function (L) {
        return (
          n(L) && (L = L.toInt()),
          (L &= 63) === 0
            ? this
            : L < 32
              ? m((this.low >>> L) | (this.high << (32 - L)), this.high >>> L, this.unsigned)
              : L === 32
                ? m(this.high, 0, this.unsigned)
                : m(this.high >>> (L - 32), 0, this.unsigned)
        );
      }),
      (N.shru = N.shiftRightUnsigned),
      (N.shr_u = N.shiftRightUnsigned),
      (N.rotateLeft = function (L) {
        var G;
        return (
          n(L) && (L = L.toInt()),
          (L &= 63) === 0
            ? this
            : L === 32
              ? m(this.high, this.low, this.unsigned)
              : L < 32
                ? ((G = 32 - L),
                  m((this.low << L) | (this.high >>> G), (this.high << L) | (this.low >>> G), this.unsigned))
                : ((L -= 32),
                  (G = 32 - L),
                  m((this.high << L) | (this.low >>> G), (this.low << L) | (this.high >>> G), this.unsigned))
        );
      }),
      (N.rotl = N.rotateLeft),
      (N.rotateRight = function (L) {
        var G;
        return (
          n(L) && (L = L.toInt()),
          (L &= 63) === 0
            ? this
            : L === 32
              ? m(this.high, this.low, this.unsigned)
              : L < 32
                ? ((G = 32 - L),
                  m((this.high << G) | (this.low >>> L), (this.low << G) | (this.high >>> L), this.unsigned))
                : ((L -= 32),
                  (G = 32 - L),
                  m((this.low << G) | (this.high >>> L), (this.high << G) | (this.low >>> L), this.unsigned))
        );
      }),
      (N.rotr = N.rotateRight),
      (N.toSigned = function () {
        return this.unsigned ? m(this.low, this.high, !1) : this;
      }),
      (N.toUnsigned = function () {
        return this.unsigned ? this : m(this.low, this.high, !0);
      }),
      (N.toBytes = function (L) {
        return L ? this.toBytesLE() : this.toBytesBE();
      }),
      (N.toBytesLE = function () {
        var L = this.high,
          G = this.low;
        return [
          G & 255,
          (G >>> 8) & 255,
          (G >>> 16) & 255,
          G >>> 24,
          L & 255,
          (L >>> 8) & 255,
          (L >>> 16) & 255,
          L >>> 24,
        ];
      }),
      (N.toBytesBE = function () {
        var L = this.high,
          G = this.low;
        return [
          L >>> 24,
          (L >>> 16) & 255,
          (L >>> 8) & 255,
          L & 255,
          G >>> 24,
          (G >>> 16) & 255,
          (G >>> 8) & 255,
          G & 255,
        ];
      }),
      (r.fromBytes = function (L, G, Q) {
        return Q ? r.fromBytesLE(L, G) : r.fromBytesBE(L, G);
      }),
      (r.fromBytesLE = function (L, G) {
        return new r(
          L[0] | (L[1] << 8) | (L[2] << 16) | (L[3] << 24),
          L[4] | (L[5] << 8) | (L[6] << 16) | (L[7] << 24),
          G,
        );
      }),
      (r.fromBytesBE = function (L, G) {
        return new r(
          (L[4] << 24) | (L[5] << 16) | (L[6] << 8) | L[7],
          (L[0] << 24) | (L[1] << 16) | (L[2] << 8) | L[3],
          G,
        );
      }),
      typeof BigInt == "function" &&
        ((r.fromBigInt = function (L, G) {
          var Q = Number(BigInt.asIntN(32, L)),
            K = Number(BigInt.asIntN(32, L >> BigInt(32)));
          return m(Q, K, G);
        }),
        (r.fromValue = function (L, G) {
          return typeof L == "bigint" ? r.fromBigInt(L, G) : p(L, G);
        }),
        (N.toBigInt = function () {
          var L = BigInt(this.low >>> 0),
            G = BigInt(this.unsigned ? this.high >>> 0 : this.high);
          return (G << BigInt(32)) | L;
        })));
    var F = (t.default = r);
  });
});