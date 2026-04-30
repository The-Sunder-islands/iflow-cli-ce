/**
 * @module Yqi
 * @category utils/oop
 * @label oop
 * @position 1895 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Yqi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Yqi = T((Gfl, zqi) => {
  var syr = oyr(),
    Zcu = Wqi(),
    Q1e = {},
    elu = Object.keys(syr);
  function tlu(t) {
    let e = function (...r) {
      let n = r[0];
      return n == null ? n : (n.length > 1 && (r = n), t(r));
    };
    return ("conversion" in t && (e.conversion = t.conversion), e);
  }
  function rlu(t) {
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
  elu.forEach((t) => {
    ((Q1e[t] = {}),
      Object.defineProperty(Q1e[t], "channels", { value: syr[t].channels }),
      Object.defineProperty(Q1e[t], "labels", { value: syr[t].labels }));
    let e = Zcu(t);
    Object.keys(e).forEach((n) => {
      let o = e[n];
      ((Q1e[t][n] = rlu(o)), (Q1e[t][n].raw = tlu(o)));
    });
  });
  zqi.exports = Q1e;
});