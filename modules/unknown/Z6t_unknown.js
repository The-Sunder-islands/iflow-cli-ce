/**
 * @module Z6t
 * @category unknown
 * @label unknown
 * @position 71 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Z6t) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Z6t = T((Tke) => {
  "use strict";
  Tke.byteLength = Rpo;
  Tke.toByteArray = Opo;
  Tke.fromByteArray = Bpo;
  var ix = [],
    A_ = [],
    Ipo = typeof Uint8Array < "u" ? Uint8Array : Array,
    X6t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (yG = 0, DRr = X6t.length; yG < DRr; ++yG) ((ix[yG] = X6t[yG]), (A_[X6t.charCodeAt(yG)] = yG));
  var yG, DRr;
  A_[45] = 62;
  A_[95] = 63;
  function IRr(t) {
    var e = t.length;
    if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    var r = t.indexOf("=");
    r === -1 && (r = e);
    var n = r === e ? 0 : 4 - (r % 4);
    return [r, n];
  }
  function Rpo(t) {
    var e = IRr(t),
      r = e[0],
      n = e[1];
    return ((r + n) * 3) / 4 - n;
  }
  function kpo(t, e, r) {
    return ((e + r) * 3) / 4 - r;
  }
  function Opo(t) {
    var e,
      r = IRr(t),
      n = r[0],
      o = r[1],
      s = new Ipo(kpo(t, n, o)),
      a = 0,
      u = o > 0 ? n - 4 : n,
      c;
    for (c = 0; c < u; c += 4)
      ((e =
        (A_[t.charCodeAt(c)] << 18) |
        (A_[t.charCodeAt(c + 1)] << 12) |
        (A_[t.charCodeAt(c + 2)] << 6) |
        A_[t.charCodeAt(c + 3)]),
        (s[a++] = (e >> 16) & 255),
        (s[a++] = (e >> 8) & 255),
        (s[a++] = e & 255));
    return (
      o === 2 && ((e = (A_[t.charCodeAt(c)] << 2) | (A_[t.charCodeAt(c + 1)] >> 4)), (s[a++] = e & 255)),
      o === 1 &&
        ((e = (A_[t.charCodeAt(c)] << 10) | (A_[t.charCodeAt(c + 1)] << 4) | (A_[t.charCodeAt(c + 2)] >> 2)),
        (s[a++] = (e >> 8) & 255),
        (s[a++] = e & 255)),
      s
    );
  }
  function Npo(t) {
    return ix[(t >> 18) & 63] + ix[(t >> 12) & 63] + ix[(t >> 6) & 63] + ix[t & 63];
  }
  function Ppo(t, e, r) {
    for (var n, o = [], s = e; s < r; s += 3)
      ((n = ((t[s] << 16) & 16711680) + ((t[s + 1] << 8) & 65280) + (t[s + 2] & 255)), o.push(Npo(n)));
    return o.join("");
  }
  function Bpo(t) {
    for (var e, r = t.length, n = r % 3, o = [], s = 16383, a = 0, u = r - n; a < u; a += s)
      o.push(Ppo(t, a, a + s > u ? u : a + s));
    return (
      n === 1
        ? ((e = t[r - 1]), o.push(ix[e >> 2] + ix[(e << 4) & 63] + "=="))
        : n === 2 &&
          ((e = (t[r - 2] << 8) + t[r - 1]), o.push(ix[e >> 10] + ix[(e >> 4) & 63] + ix[(e << 2) & 63] + "=")),
      o.join("")
    );
  }
});