/**
 * @module Zrt
 * @category unknown
 * @label unknown
 * @position 1426 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Zrt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Zrt = T((v6c, KQn) => {
  KQn.exports = function (e, r) {
    let n = e & 31,
      o = (e >> 5) & 15,
      s = ((e >> 9) & 127) + 1980,
      a = r ? (r & 31) * 2 : 0,
      u = r ? (r >> 5) & 63 : 0,
      c = r ? r >> 11 : 0;
    return new Date(Date.UTC(s, o - 1, n, c, u, a));
  };
});