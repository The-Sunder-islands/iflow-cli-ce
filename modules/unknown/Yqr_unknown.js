/**
 * @module Yqr
 * @category unknown
 * @label unknown
 * @position 156 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Yqr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Yqr = T((ERu, zqr) => {
  "use strict";
  zqr.exports = Gqr(Gqr);
  function Gqr(t) {
    return (
      typeof Float32Array < "u"
        ? (function () {
            var e = new Float32Array([-0]),
              r = new Uint8Array(e.buffer),
              n = r[3] === 128;
            function o(c, m, d) {
              ((e[0] = c), (m[d] = r[0]), (m[d + 1] = r[1]), (m[d + 2] = r[2]), (m[d + 3] = r[3]));
            }
            function s(c, m, d) {
              ((e[0] = c), (m[d] = r[3]), (m[d + 1] = r[2]), (m[d + 2] = r[1]), (m[d + 3] = r[0]));
            }
            ((t.writeFloatLE = n ? o : s), (t.writeFloatBE = n ? s : o));
            function a(c, m) {
              return ((r[0] = c[m]), (r[1] = c[m + 1]), (r[2] = c[m + 2]), (r[3] = c[m + 3]), e[0]);
            }
            function u(c, m) {
              return ((r[3] = c[m]), (r[2] = c[m + 1]), (r[1] = c[m + 2]), (r[0] = c[m + 3]), e[0]);
            }
            ((t.readFloatLE = n ? a : u), (t.readFloatBE = n ? u : a));
          })()
        : (function () {
            function e(n, o, s, a) {
              var u = o < 0 ? 1 : 0;
              if ((u && (o = -o), o === 0)) n(1 / o > 0 ? 0 : 2147483648, s, a);
              else if (isNaN(o)) n(2143289344, s, a);
              else if (o > 34028234663852886e22) n(((u << 31) | 2139095040) >>> 0, s, a);
              else if (o < 11754943508222875e-54) n(((u << 31) | Math.round(o / 1401298464324817e-60)) >>> 0, s, a);
              else {
                var c = Math.floor(Math.log(o) / Math.LN2),
                  m = Math.round(o * Math.pow(2, -c) * 8388608) & 8388607;
                n(((u << 31) | ((c + 127) << 23) | m) >>> 0, s, a);
              }
            }
            ((t.writeFloatLE = e.bind(null, qqr)), (t.writeFloatBE = e.bind(null, Hqr)));
            function r(n, o, s) {
              var a = n(o, s),
                u = (a >> 31) * 2 + 1,
                c = (a >>> 23) & 255,
                m = a & 8388607;
              return c === 255
                ? m
                  ? NaN
                  : u * (1 / 0)
                : c === 0
                  ? u * 1401298464324817e-60 * m
                  : u * Math.pow(2, c - 150) * (m + 8388608);
            }
            ((t.readFloatLE = r.bind(null, Vqr)), (t.readFloatBE = r.bind(null, Wqr)));
          })(),
      typeof Float64Array < "u"
        ? (function () {
            var e = new Float64Array([-0]),
              r = new Uint8Array(e.buffer),
              n = r[7] === 128;
            function o(c, m, d) {
              ((e[0] = c),
                (m[d] = r[0]),
                (m[d + 1] = r[1]),
                (m[d + 2] = r[2]),
                (m[d + 3] = r[3]),
                (m[d + 4] = r[4]),
                (m[d + 5] = r[5]),
                (m[d + 6] = r[6]),
                (m[d + 7] = r[7]));
            }
            function s(c, m, d) {
              ((e[0] = c),
                (m[d] = r[7]),
                (m[d + 1] = r[6]),
                (m[d + 2] = r[5]),
                (m[d + 3] = r[4]),
                (m[d + 4] = r[3]),
                (m[d + 5] = r[2]),
                (m[d + 6] = r[1]),
                (m[d + 7] = r[0]));
            }
            ((t.writeDoubleLE = n ? o : s), (t.writeDoubleBE = n ? s : o));
            function a(c, m) {
              return (
                (r[0] = c[m]),
                (r[1] = c[m + 1]),
                (r[2] = c[m + 2]),
                (r[3] = c[m + 3]),
                (r[4] = c[m + 4]),
                (r[5] = c[m + 5]),
                (r[6] = c[m + 6]),
                (r[7] = c[m + 7]),
                e[0]
              );
            }
            function u(c, m) {
              return (
                (r[7] = c[m]),
                (r[6] = c[m + 1]),
                (r[5] = c[m + 2]),
                (r[4] = c[m + 3]),
                (r[3] = c[m + 4]),
                (r[2] = c[m + 5]),
                (r[1] = c[m + 6]),
                (r[0] = c[m + 7]),
                e[0]
              );
            }
            ((t.readDoubleLE = n ? a : u), (t.readDoubleBE = n ? u : a));
          })()
        : (function () {
            function e(n, o, s, a, u, c) {
              var m = a < 0 ? 1 : 0;
              if ((m && (a = -a), a === 0)) (n(0, u, c + o), n(1 / a > 0 ? 0 : 2147483648, u, c + s));
              else if (isNaN(a)) (n(0, u, c + o), n(2146959360, u, c + s));
              else if (a > 17976931348623157e292) (n(0, u, c + o), n(((m << 31) | 2146435072) >>> 0, u, c + s));
              else {
                var d;
                if (a < 22250738585072014e-324)
                  ((d = a / 5e-324), n(d >>> 0, u, c + o), n(((m << 31) | (d / 4294967296)) >>> 0, u, c + s));
                else {
                  var f = Math.floor(Math.log(a) / Math.LN2);
                  (f === 1024 && (f = 1023),
                    (d = a * Math.pow(2, -f)),
                    n((d * 4503599627370496) >>> 0, u, c + o),
                    n(((m << 31) | ((f + 1023) << 20) | ((d * 1048576) & 1048575)) >>> 0, u, c + s));
                }
              }
            }
            ((t.writeDoubleLE = e.bind(null, qqr, 0, 4)), (t.writeDoubleBE = e.bind(null, Hqr, 4, 0)));
            function r(n, o, s, a, u) {
              var c = n(a, u + o),
                m = n(a, u + s),
                d = (m >> 31) * 2 + 1,
                f = (m >>> 20) & 2047,
                p = 4294967296 * (m & 1048575) + c;
              return f === 2047
                ? p
                  ? NaN
                  : d * (1 / 0)
                : f === 0
                  ? d * 5e-324 * p
                  : d * Math.pow(2, f - 1075) * (p + 4503599627370496);
            }
            ((t.readDoubleLE = r.bind(null, Vqr, 0, 4)), (t.readDoubleBE = r.bind(null, Wqr, 4, 0)));
          })(),
      t
    );
  }
  function qqr(t, e, r) {
    ((e[r] = t & 255), (e[r + 1] = (t >>> 8) & 255), (e[r + 2] = (t >>> 16) & 255), (e[r + 3] = t >>> 24));
  }
  function Hqr(t, e, r) {
    ((e[r] = t >>> 24), (e[r + 1] = (t >>> 16) & 255), (e[r + 2] = (t >>> 8) & 255), (e[r + 3] = t & 255));
  }
  function Vqr(t, e) {
    return (t[e] | (t[e + 1] << 8) | (t[e + 2] << 16) | (t[e + 3] << 24)) >>> 0;
  }
  function Wqr(t, e) {
    return ((t[e] << 24) | (t[e + 1] << 16) | (t[e + 2] << 8) | t[e + 3]) >>> 0;
  }
});