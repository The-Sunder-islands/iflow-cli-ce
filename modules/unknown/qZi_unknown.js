/**
 * @module qZi
 * @category unknown
 * @label unknown
 * @position 1925 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (qZi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var qZi = T((cxl, GZi) => {
  GZi.exports = function (t) {
    let e = t.indexOf(":");
    if (e === -1) return REr(t);
    let r = t.substr(0, e),
      n = t.substr(e + 1);
    return `${REr(r)}:${REr(n)}`;
  };
  function REr(t) {
    if (((t = t.toLowerCase()), t === "_authtoken")) return "_authToken";
    let e = t[0];
    for (let r = 1; r < t.length; r++) e += t[r] === "_" ? "-" : t[r];
    return e;
  }
});