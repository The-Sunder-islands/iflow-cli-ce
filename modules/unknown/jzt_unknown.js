/**
 * @module jzt
 * @category unknown
 * @label unknown
 * @position 1146 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (jzt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var jzt = T(($bc, QDn) => {
  "use strict";
  var jTs = gF().codes.ERR_INVALID_OPT_VALUE;
  function QTs(t, e, r) {
    return t.highWaterMark != null ? t.highWaterMark : e ? t[r] : null;
  }
  function GTs(t, e, r, n) {
    var o = QTs(e, n, r);
    if (o != null) {
      if (!(isFinite(o) && Math.floor(o) === o) || o < 0) {
        var s = n ? r : "highWaterMark";
        throw new jTs(s, o);
      }
      return Math.floor(o);
    }
    return t.objectMode ? 16 : 16 * 1024;
  }
  QDn.exports = { getHighWaterMark: GTs };
});