/**
 * @module DVt
 * @category unknown
 * @label unknown
 * @position 1018 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (DVt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var DVt = T((Dae) => {
  "use strict";
  var EXe = $k(),
    Fvn = !0,
    Uvn = !0;
  try {
    String.fromCharCode.apply(null, [0]);
  } catch {
    Fvn = !1;
  }
  try {
    String.fromCharCode.apply(null, new Uint8Array(1));
  } catch {
    Uvn = !1;
  }
  var iye = new EXe.Buf8(256);
  for (Qk = 0; Qk < 256; Qk++)
    iye[Qk] = Qk >= 252 ? 6 : Qk >= 248 ? 5 : Qk >= 240 ? 4 : Qk >= 224 ? 3 : Qk >= 192 ? 2 : 1;
  var Qk;
  iye[254] = iye[254] = 1;
  Dae.string2buf = function (t) {
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
          ((n = t.charCodeAt(o + 1)), (n & 64512) === 56320 && ((r = 65536 + ((r - 55296) << 10) + (n - 56320)), o++)),
        (u += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4));
    for (e = new EXe.Buf8(u), s = 0, o = 0; s < u; o++)
      ((r = t.charCodeAt(o)),
        (r & 64512) === 55296 &&
          o + 1 < a &&
          ((n = t.charCodeAt(o + 1)), (n & 64512) === 56320 && ((r = 65536 + ((r - 55296) << 10) + (n - 56320)), o++)),
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
  };
  function $vn(t, e) {
    if (e < 65534 && ((t.subarray && Uvn) || (!t.subarray && Fvn)))
      return String.fromCharCode.apply(null, EXe.shrinkBuf(t, e));
    for (var r = "", n = 0; n < e; n++) r += String.fromCharCode(t[n]);
    return r;
  }
  Dae.buf2binstring = function (t) {
    return $vn(t, t.length);
  };
  Dae.binstring2buf = function (t) {
    for (var e = new EXe.Buf8(t.length), r = 0, n = e.length; r < n; r++) e[r] = t.charCodeAt(r);
    return e;
  };
  Dae.buf2string = function (t, e) {
    var r,
      n,
      o,
      s,
      a = e || t.length,
      u = new Array(a * 2);
    for (n = 0, r = 0; r < a; ) {
      if (((o = t[r++]), o < 128)) {
        u[n++] = o;
        continue;
      }
      if (((s = iye[o]), s > 4)) {
        ((u[n++] = 65533), (r += s - 1));
        continue;
      }
      for (o &= s === 2 ? 31 : s === 3 ? 15 : 7; s > 1 && r < a; ) ((o = (o << 6) | (t[r++] & 63)), s--);
      if (s > 1) {
        u[n++] = 65533;
        continue;
      }
      o < 65536 ? (u[n++] = o) : ((o -= 65536), (u[n++] = 55296 | ((o >> 10) & 1023)), (u[n++] = 56320 | (o & 1023)));
    }
    return $vn(u, n);
  };
  Dae.utf8border = function (t, e) {
    var r;
    for (e = e || t.length, e > t.length && (e = t.length), r = e - 1; r >= 0 && (t[r] & 192) === 128; ) r--;
    return r < 0 || r === 0 ? e : r + iye[t[r]] > e ? r : e;
  };
});