/**
 * @module Jqr
 * @category unknown
 * @label unknown
 * @position 158 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Jqr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Jqr = T((Kqr) => {
  "use strict";
  var Dvt = Kqr;
  Dvt.length = function (e) {
    for (var r = 0, n = 0, o = 0; o < e.length; ++o)
      ((n = e.charCodeAt(o)),
        n < 128
          ? (r += 1)
          : n < 2048
            ? (r += 2)
            : (n & 64512) === 55296 && (e.charCodeAt(o + 1) & 64512) === 56320
              ? (++o, (r += 4))
              : (r += 3));
    return r;
  };
  Dvt.read = function (e, r, n) {
    var o = n - r;
    if (o < 1) return "";
    for (var s = null, a = [], u = 0, c; r < n; )
      ((c = e[r++]),
        c < 128
          ? (a[u++] = c)
          : c > 191 && c < 224
            ? (a[u++] = ((c & 31) << 6) | (e[r++] & 63))
            : c > 239 && c < 365
              ? ((c = (((c & 7) << 18) | ((e[r++] & 63) << 12) | ((e[r++] & 63) << 6) | (e[r++] & 63)) - 65536),
                (a[u++] = 55296 + (c >> 10)),
                (a[u++] = 56320 + (c & 1023)))
              : (a[u++] = ((c & 15) << 12) | ((e[r++] & 63) << 6) | (e[r++] & 63)),
        u > 8191 && ((s || (s = [])).push(String.fromCharCode.apply(String, a)), (u = 0)));
    return s
      ? (u && s.push(String.fromCharCode.apply(String, a.slice(0, u))), s.join(""))
      : String.fromCharCode.apply(String, a.slice(0, u));
  };
  Dvt.write = function (e, r, n) {
    for (var o = n, s, a, u = 0; u < e.length; ++u)
      ((s = e.charCodeAt(u)),
        s < 128
          ? (r[n++] = s)
          : s < 2048
            ? ((r[n++] = (s >> 6) | 192), (r[n++] = (s & 63) | 128))
            : (s & 64512) === 55296 && ((a = e.charCodeAt(u + 1)) & 64512) === 56320
              ? ((s = 65536 + ((s & 1023) << 10) + (a & 1023)),
                ++u,
                (r[n++] = (s >> 18) | 240),
                (r[n++] = ((s >> 12) & 63) | 128),
                (r[n++] = ((s >> 6) & 63) | 128),
                (r[n++] = (s & 63) | 128))
              : ((r[n++] = (s >> 12) | 224), (r[n++] = ((s >> 6) & 63) | 128), (r[n++] = (s & 63) | 128)));
    return n - o;
  };
});