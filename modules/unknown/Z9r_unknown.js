/**
 * @module Z9r
 * @category unknown
 * @label unknown
 * @position 1862 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Z9r) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Z9r = T((Oal, Q$i) => {
  "use strict";
  var $$i = /^[0-9]+$/,
    j$i = (t, e) => {
      if (typeof t == "number" && typeof e == "number") return t === e ? 0 : t < e ? -1 : 1;
      let r = $$i.test(t),
        n = $$i.test(e);
      return (r && n && ((t = +t), (e = +e)), t === e ? 0 : r && !n ? -1 : n && !r ? 1 : t < e ? -1 : 1);
    },
    esu = (t, e) => j$i(e, t);
  Q$i.exports = { compareIdentifiers: j$i, rcompareIdentifiers: esu };
});