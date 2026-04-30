/**
 * @module Wvn
 * @category unknown
 * @label unknown
 * @position 1021 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Wvn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Wvn = T((R3c, Vvn) => {
  "use strict";
  var vXe = 30,
    Vvs = 12;
  Vvn.exports = function (e, r) {
    var n, o, s, a, u, c, m, d, f, p, h, g, b, A, y, E, v, C, x, k, R, P, D, O, N;
    ((n = e.state),
      (o = e.next_in),
      (O = e.input),
      (s = o + (e.avail_in - 5)),
      (a = e.next_out),
      (N = e.output),
      (u = a - (r - e.avail_out)),
      (c = a + (e.avail_out - 257)),
      (m = n.dmax),
      (d = n.wsize),
      (f = n.whave),
      (p = n.wnext),
      (h = n.window),
      (g = n.hold),
      (b = n.bits),
      (A = n.lencode),
      (y = n.distcode),
      (E = (1 << n.lenbits) - 1),
      (v = (1 << n.distbits) - 1));
    e: do {
      (b < 15 && ((g += O[o++] << b), (b += 8), (g += O[o++] << b), (b += 8)), (C = A[g & E]));
      t: for (;;) {
        if (((x = C >>> 24), (g >>>= x), (b -= x), (x = (C >>> 16) & 255), x === 0)) N[a++] = C & 65535;
        else if (x & 16) {
          ((k = C & 65535),
            (x &= 15),
            x && (b < x && ((g += O[o++] << b), (b += 8)), (k += g & ((1 << x) - 1)), (g >>>= x), (b -= x)),
            b < 15 && ((g += O[o++] << b), (b += 8), (g += O[o++] << b), (b += 8)),
            (C = y[g & v]));
          r: for (;;) {
            if (((x = C >>> 24), (g >>>= x), (b -= x), (x = (C >>> 16) & 255), x & 16)) {
              if (
                ((R = C & 65535),
                (x &= 15),
                b < x && ((g += O[o++] << b), (b += 8), b < x && ((g += O[o++] << b), (b += 8))),
                (R += g & ((1 << x) - 1)),
                R > m)
              ) {
                ((e.msg = "invalid distance too far back"), (n.mode = vXe));
                break e;
              }
              if (((g >>>= x), (b -= x), (x = a - u), R > x)) {
                if (((x = R - x), x > f && n.sane)) {
                  ((e.msg = "invalid distance too far back"), (n.mode = vXe));
                  break e;
                }
                if (((P = 0), (D = h), p === 0)) {
                  if (((P += d - x), x < k)) {
                    k -= x;
                    do N[a++] = h[P++];
                    while (--x);
                    ((P = a - R), (D = N));
                  }
                } else if (p < x) {
                  if (((P += d + p - x), (x -= p), x < k)) {
                    k -= x;
                    do N[a++] = h[P++];
                    while (--x);
                    if (((P = 0), p < k)) {
                      ((x = p), (k -= x));
                      do N[a++] = h[P++];
                      while (--x);
                      ((P = a - R), (D = N));
                    }
                  }
                } else if (((P += p - x), x < k)) {
                  k -= x;
                  do N[a++] = h[P++];
                  while (--x);
                  ((P = a - R), (D = N));
                }
                for (; k > 2; ) ((N[a++] = D[P++]), (N[a++] = D[P++]), (N[a++] = D[P++]), (k -= 3));
                k && ((N[a++] = D[P++]), k > 1 && (N[a++] = D[P++]));
              } else {
                P = a - R;
                do ((N[a++] = N[P++]), (N[a++] = N[P++]), (N[a++] = N[P++]), (k -= 3));
                while (k > 2);
                k && ((N[a++] = N[P++]), k > 1 && (N[a++] = N[P++]));
              }
            } else if ((x & 64) === 0) {
              C = y[(C & 65535) + (g & ((1 << x) - 1))];
              continue r;
            } else {
              ((e.msg = "invalid distance code"), (n.mode = vXe));
              break e;
            }
            break;
          }
        } else if ((x & 64) === 0) {
          C = A[(C & 65535) + (g & ((1 << x) - 1))];
          continue t;
        } else if (x & 32) {
          n.mode = Vvs;
          break e;
        } else {
          ((e.msg = "invalid literal/length code"), (n.mode = vXe));
          break e;
        }
        break;
      }
    } while (o < s && a < c);
    ((k = b >> 3),
      (o -= k),
      (b -= k << 3),
      (g &= (1 << b) - 1),
      (e.next_in = o),
      (e.next_out = a),
      (e.avail_in = o < s ? 5 + (s - o) : 5 - (o - s)),
      (e.avail_out = a < c ? 257 + (c - a) : 257 - (a - c)),
      (n.hold = g),
      (n.bits = b));
  };
});