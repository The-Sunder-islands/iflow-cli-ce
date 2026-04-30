/**
 * @module vVt
 * @category unknown
 * @label unknown
 * @position 1014 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (vVt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var vVt = T((C3c, xvn) => {
  "use strict";
  function rvs(t, e, r, n) {
    for (var o = (t & 65535) | 0, s = ((t >>> 16) & 65535) | 0, a = 0; r !== 0; ) {
      ((a = r > 2e3 ? 2e3 : r), (r -= a));
      do ((o = (o + e[n++]) | 0), (s = (s + o) | 0));
      while (--a);
      ((o %= 65521), (s %= 65521));
    }
    return o | (s << 16) | 0;
  }
  xvn.exports = rvs;
});