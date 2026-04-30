/**
 * @module eCn
 * @category unknown
 * @label unknown
 * @position 1022 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (eCn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var eCn = T((k3c, Zvn) => {
  "use strict";
  var zvn = $k(),
    Rae = 15,
    Yvn = 852,
    Kvn = 592,
    Jvn = 0,
    PVt = 1,
    Xvn = 2,
    Wvs = [
      3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258,
      0, 0,
    ],
    zvs = [
      16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21,
      16, 72, 78,
    ],
    Yvs = [
      1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,
      8193, 12289, 16385, 24577, 0, 0,
    ],
    Kvs = [
      16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28,
      29, 29, 64, 64,
    ];
  Zvn.exports = function (e, r, n, o, s, a, u, c) {
    var m = c.bits,
      d = 0,
      f = 0,
      p = 0,
      h = 0,
      g = 0,
      b = 0,
      A = 0,
      y = 0,
      E = 0,
      v = 0,
      C,
      x,
      k,
      R,
      P,
      D = null,
      O = 0,
      N,
      F = new zvn.Buf16(Rae + 1),
      B = new zvn.Buf16(Rae + 1),
      L = null,
      G = 0,
      Q,
      K,
      H;
    for (d = 0; d <= Rae; d++) F[d] = 0;
    for (f = 0; f < o; f++) F[r[n + f]]++;
    for (g = m, h = Rae; h >= 1 && F[h] === 0; h--);
    if ((g > h && (g = h), h === 0))
      return ((s[a++] = (1 << 24) | (64 << 16) | 0), (s[a++] = (1 << 24) | (64 << 16) | 0), (c.bits = 1), 0);
    for (p = 1; p < h && F[p] === 0; p++);
    for (g < p && (g = p), y = 1, d = 1; d <= Rae; d++) if (((y <<= 1), (y -= F[d]), y < 0)) return -1;
    if (y > 0 && (e === Jvn || h !== 1)) return -1;
    for (B[1] = 0, d = 1; d < Rae; d++) B[d + 1] = B[d] + F[d];
    for (f = 0; f < o; f++) r[n + f] !== 0 && (u[B[r[n + f]]++] = f);
    if (
      (e === Jvn
        ? ((D = L = u), (N = 19))
        : e === PVt
          ? ((D = Wvs), (O -= 257), (L = zvs), (G -= 257), (N = 256))
          : ((D = Yvs), (L = Kvs), (N = -1)),
      (v = 0),
      (f = 0),
      (d = p),
      (P = a),
      (b = g),
      (A = 0),
      (k = -1),
      (E = 1 << g),
      (R = E - 1),
      (e === PVt && E > Yvn) || (e === Xvn && E > Kvn))
    )
      return 1;
    for (;;) {
      ((Q = d - A),
        u[f] < N ? ((K = 0), (H = u[f])) : u[f] > N ? ((K = L[G + u[f]]), (H = D[O + u[f]])) : ((K = 96), (H = 0)),
        (C = 1 << (d - A)),
        (x = 1 << b),
        (p = x));
      do ((x -= C), (s[P + (v >> A) + x] = (Q << 24) | (K << 16) | H | 0));
      while (x !== 0);
      for (C = 1 << (d - 1); v & C; ) C >>= 1;
      if ((C !== 0 ? ((v &= C - 1), (v += C)) : (v = 0), f++, --F[d] === 0)) {
        if (d === h) break;
        d = r[n + u[f]];
      }
      if (d > g && (v & R) !== k) {
        for (A === 0 && (A = g), P += p, b = d - A, y = 1 << b; b + A < h && ((y -= F[b + A]), !(y <= 0)); )
          (b++, (y <<= 1));
        if (((E += 1 << b), (e === PVt && E > Yvn) || (e === Xvn && E > Kvn))) return 1;
        ((k = v & R), (s[k] = (g << 24) | (b << 16) | (P - a) | 0));
      }
    }
    return (v !== 0 && (s[P + v] = ((d - A) << 24) | (64 << 16) | 0), (c.bits = g), 0);
  };
});