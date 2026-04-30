/**
 * @module Rji
 * @category unknown
 * @label unknown
 * @position 1877 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Rji) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Rji = T((Zal, Iji) => {
  Iji.exports = Lsu;
  function Lsu(t) {
    if (!t || t === "ERROR: No README data found!") return;
    t = t.trim().split(`
`);
    let e = 0;
    for (; t[e] && t[e].trim().match(/^(#|$)/); ) e++;
    let r = t.length,
      n = e + 1;
    for (; n < r && t[n].trim(); ) n++;
    return t.slice(e, n).join(" ").trim();
  }
});