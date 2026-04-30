/**
 * @module jHt
 * @category unknown
 * @label unknown
 * @position 994 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (jHt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var jHt = T(($Ht) => {
  "use strict";
  var K_s = Nd(),
    J_s = Fk(),
    GT = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  $Ht.encode = function (t) {
    for (var e = [], r, n, o, s, a, u, c, m = 0, d = t.length, f = d, p = K_s.getTypeOf(t) !== "string"; m < t.length; )
      ((f = d - m),
        p
          ? ((r = t[m++]), (n = m < d ? t[m++] : 0), (o = m < d ? t[m++] : 0))
          : ((r = t.charCodeAt(m++)), (n = m < d ? t.charCodeAt(m++) : 0), (o = m < d ? t.charCodeAt(m++) : 0)),
        (s = r >> 2),
        (a = ((r & 3) << 4) | (n >> 4)),
        (u = f > 1 ? ((n & 15) << 2) | (o >> 6) : 64),
        (c = f > 2 ? o & 63 : 64),
        e.push(GT.charAt(s) + GT.charAt(a) + GT.charAt(u) + GT.charAt(c)));
    return e.join("");
  };
  $Ht.decode = function (t) {
    var e,
      r,
      n,
      o,
      s,
      a,
      u,
      c = 0,
      m = 0,
      d = "data:";
    if (t.substr(0, d.length) === d) throw new Error("Invalid base64 input, it looks like a data url.");
    t = t.replace(/[^A-Za-z0-9+/=]/g, "");
    var f = (t.length * 3) / 4;
    if ((t.charAt(t.length - 1) === GT.charAt(64) && f--, t.charAt(t.length - 2) === GT.charAt(64) && f--, f % 1 !== 0))
      throw new Error("Invalid base64 input, bad content length.");
    var p;
    for (J_s.uint8array ? (p = new Uint8Array(f | 0)) : (p = new Array(f | 0)); c < t.length; )
      ((o = GT.indexOf(t.charAt(c++))),
        (s = GT.indexOf(t.charAt(c++))),
        (a = GT.indexOf(t.charAt(c++))),
        (u = GT.indexOf(t.charAt(c++))),
        (e = (o << 2) | (s >> 4)),
        (r = ((s & 15) << 4) | (a >> 2)),
        (n = ((a & 3) << 6) | u),
        (p[m++] = e),
        a !== 64 && (p[m++] = r),
        u !== 64 && (p[m++] = n));
    return p;
  };
});