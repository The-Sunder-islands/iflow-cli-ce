/**
 * @module Wqi
 * @category unknown
 * @label unknown
 * @position 1894 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Wqi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Wqi = T((Qfl, Vqi) => {
  var mgt = oyr();
  function Ycu() {
    let t = {},
      e = Object.keys(mgt);
    for (let r = e.length, n = 0; n < r; n++) t[e[n]] = { distance: -1, parent: null };
    return t;
  }
  function Kcu(t) {
    let e = Ycu(),
      r = [t];
    for (e[t].distance = 0; r.length; ) {
      let n = r.pop(),
        o = Object.keys(mgt[n]);
      for (let s = o.length, a = 0; a < s; a++) {
        let u = o[a],
          c = e[u];
        c.distance === -1 && ((c.distance = e[n].distance + 1), (c.parent = n), r.unshift(u));
      }
    }
    return e;
  }
  function Jcu(t, e) {
    return function (r) {
      return e(t(r));
    };
  }
  function Xcu(t, e) {
    let r = [e[t].parent, t],
      n = mgt[e[t].parent][t],
      o = e[t].parent;
    for (; e[o].parent; ) (r.unshift(e[o].parent), (n = Jcu(mgt[e[o].parent][o], n)), (o = e[o].parent));
    return ((n.conversion = r), n);
  }
  Vqi.exports = function (t) {
    let e = Kcu(t),
      r = {},
      n = Object.keys(e);
    for (let o = n.length, s = 0; s < o; s++) {
      let a = n[s];
      e[a].parent !== null && (r[a] = Xcu(a, e));
    }
    return r;
  };
});