/**
 * @module xvt
 * @category unknown
 * @label unknown
 * @position 154 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (xvt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var xvt = T((ARu, Lqr) => {
  "use strict";
  Lqr.exports = axo;
  function axo(t, e) {
    for (var r = new Array(arguments.length - 1), n = 0, o = 2, s = !0; o < arguments.length; ) r[n++] = arguments[o++];
    return new Promise(function (u, c) {
      r[n] = function (d) {
        if (s)
          if (((s = !1), d)) c(d);
          else {
            for (var f = new Array(arguments.length - 1), p = 0; p < f.length; ) f[p++] = arguments[p];
            u.apply(null, f);
          }
      };
      try {
        t.apply(e || null, r);
      } catch (m) {
        s && ((s = !1), c(m));
      }
    });
  }
});
var $qr = T((Uqr) => {
  "use strict";
  var MNe = Uqr;
  MNe.length = function (e) {
    var r = e.length;
    if (!r) return 0;
    for (var n = 0; --r % 4 > 1 && e.charAt(r) === "="; ) ++n;
    return Math.ceil(e.length * 3) / 4 - n;
  };
  var Tte = new Array(64),
    Fqr = new Array(123);
  for (jC = 0; jC < 64; )
    Fqr[(Tte[jC] = jC < 26 ? jC + 65 : jC < 52 ? jC + 71 : jC < 62 ? jC - 4 : (jC - 59) | 43)] = jC++;
  var jC;
  MNe.encode = function (e, r, n) {
    for (var o = null, s = [], a = 0, u = 0, c; r < n; ) {
      var m = e[r++];
      switch (u) {
        case 0:
          ((s[a++] = Tte[m >> 2]), (c = (m & 3) << 4), (u = 1));
          break;
        case 1:
          ((s[a++] = Tte[c | (m >> 4)]), (c = (m & 15) << 2), (u = 2));
          break;
        case 2:
          ((s[a++] = Tte[c | (m >> 6)]), (s[a++] = Tte[m & 63]), (u = 0));
          break;
      }
      a > 8191 && ((o || (o = [])).push(String.fromCharCode.apply(String, s)), (a = 0));
    }
    return (
      u && ((s[a++] = Tte[c]), (s[a++] = 61), u === 1 && (s[a++] = 61)),
      o
        ? (a && o.push(String.fromCharCode.apply(String, s.slice(0, a))), o.join(""))
        : String.fromCharCode.apply(String, s.slice(0, a))
    );
  };
  var Mqr = "invalid encoding";
  MNe.decode = function (e, r, n) {
    for (var o = n, s = 0, a, u = 0; u < e.length; ) {
      var c = e.charCodeAt(u++);
      if (c === 61 && s > 1) break;
      if ((c = Fqr[c]) === void 0) throw Error(Mqr);
      switch (s) {
        case 0:
          ((a = c), (s = 1));
          break;
        case 1:
          ((r[n++] = (a << 2) | ((c & 48) >> 4)), (a = c), (s = 2));
          break;
        case 2:
          ((r[n++] = ((a & 15) << 4) | ((c & 60) >> 2)), (a = c), (s = 3));
          break;
        case 3:
          ((r[n++] = ((a & 3) << 6) | c), (s = 0));
          break;
      }
    }
    if (s === 1) throw Error(Mqr);
    return n - o;
  };
  MNe.test = function (e) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e);
  };
});