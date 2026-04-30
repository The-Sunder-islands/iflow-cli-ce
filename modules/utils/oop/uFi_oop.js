/**
 * @module uFi
 * @category utils/oop
 * @label oop
 * @position 1845 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (uFi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var uFi = T((zil, aFi) => {
  var G8r = Q8r(),
    Snu = sFi(),
    m1e = {},
    wnu = Object.keys(G8r);
  function xnu(t) {
    let e = function (...r) {
      let n = r[0];
      return n == null ? n : (n.length > 1 && (r = n), t(r));
    };
    return ("conversion" in t && (e.conversion = t.conversion), e);
  }
  function Tnu(t) {
    let e = function (...r) {
      let n = r[0];
      if (n == null) return n;
      n.length > 1 && (r = n);
      let o = t(r);
      if (typeof o == "object") for (let s = o.length, a = 0; a < s; a++) o[a] = Math.round(o[a]);
      return o;
    };
    return ("conversion" in t && (e.conversion = t.conversion), e);
  }
  wnu.forEach((t) => {
    ((m1e[t] = {}),
      Object.defineProperty(m1e[t], "channels", { value: G8r[t].channels }),
      Object.defineProperty(m1e[t], "labels", { value: G8r[t].labels }));
    let e = Snu(t);
    Object.keys(e).forEach((n) => {
      let o = e[n];
      ((m1e[t][n] = Tnu(o)), (m1e[t][n].raw = xnu(o)));
    });
  });
  aFi.exports = m1e;
});