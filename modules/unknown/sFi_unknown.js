/**
 * @module sFi
 * @category unknown
 * @label unknown
 * @position 1844 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (sFi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var sFi = T((Wil, oFi) => {
  var Vht = Q8r();
  function _nu() {
    let t = {},
      e = Object.keys(Vht);
    for (let r = e.length, n = 0; n < r; n++) t[e[n]] = { distance: -1, parent: null };
    return t;
  }
  function Enu(t) {
    let e = _nu(),
      r = [t];
    for (e[t].distance = 0; r.length; ) {
      let n = r.pop(),
        o = Object.keys(Vht[n]);
      for (let s = o.length, a = 0; a < s; a++) {
        let u = o[a],
          c = e[u];
        c.distance === -1 && ((c.distance = e[n].distance + 1), (c.parent = n), r.unshift(u));
      }
    }
    return e;
  }
  function vnu(t, e) {
    return function (r) {
      return e(t(r));
    };
  }
  function Cnu(t, e) {
    let r = [e[t].parent, t],
      n = Vht[e[t].parent][t],
      o = e[t].parent;
    for (; e[o].parent; ) (r.unshift(e[o].parent), (n = vnu(Vht[e[o].parent][o], n)), (o = e[o].parent));
    return ((n.conversion = r), n);
  }
  oFi.exports = function (t) {
    let e = Enu(t),
      r = {},
      n = Object.keys(e);
    for (let o = n.length, s = 0; s < o; s++) {
      let a = n[s];
      e[a].parent !== null && (r[a] = Cnu(a, e));
    }
    return r;
  };
});