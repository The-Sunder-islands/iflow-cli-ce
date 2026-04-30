/**
 * @module Ptt
 * @category unknown
 * @label unknown
 * @position 1321 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Ptt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Ptt = T((Z5c, jBn) => {
  "use strict";
  jBn.exports = UBn;
  function UBn(t, e, r) {
    (t instanceof RegExp && (t = FBn(t, r)), e instanceof RegExp && (e = FBn(e, r)));
    var n = $Bn(t, e, r);
    return (
      n && {
        start: n[0],
        end: n[1],
        pre: r.slice(0, n[0]),
        body: r.slice(n[0] + t.length, n[1]),
        post: r.slice(n[1] + e.length),
      }
    );
  }
  function FBn(t, e) {
    var r = e.match(t);
    return r ? r[0] : null;
  }
  UBn.range = $Bn;
  function $Bn(t, e, r) {
    var n,
      o,
      s,
      a,
      u,
      c = r.indexOf(t),
      m = r.indexOf(e, c + 1),
      d = c;
    if (c >= 0 && m > 0) {
      if (t === e) return [c, m];
      for (n = [], s = r.length; d >= 0 && !u; )
        (d == c
          ? (n.push(d), (c = r.indexOf(t, d + 1)))
          : n.length == 1
            ? (u = [n.pop(), m])
            : ((o = n.pop()), o < s && ((s = o), (a = m)), (m = r.indexOf(e, d + 1))),
          (d = c < m && c >= 0 ? c : m));
      n.length && (u = [s, a]);
    }
    return u;
  }
});