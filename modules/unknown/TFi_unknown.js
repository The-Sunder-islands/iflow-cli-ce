/**
 * @module TFi
 * @category unknown
 * @label unknown
 * @position 1849 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (TFi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var TFi = T((Xil, xFi) => {
  var { dirname: SFi, resolve: wFi } = Ae("path"),
    { readdirSync: znu, statSync: Ynu } = Ae("fs");
  xFi.exports = function (t, e) {
    let r = wFi(".", t),
      n;
    for (Ynu(r).isDirectory() || (r = SFi(r)); ; ) {
      if (((n = e(r, znu(r))), n)) return wFi(r, n);
      if (((r = SFi((n = r))), n === r)) break;
    }
  };
});