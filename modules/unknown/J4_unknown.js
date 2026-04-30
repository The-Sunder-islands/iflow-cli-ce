/**
 * @module J4
 * @category unknown
 * @label unknown
 * @position 1092 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (J4) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var J4 = T((Mgc, uZe) => {
  "use strict";
  function pxn(t) {
    return t.charAt(0) === "/";
  }
  function hxn(t) {
    var e = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/,
      r = e.exec(t),
      n = r[1] || "",
      o = !!(n && n.charAt(1) !== ":");
    return !!(r[2] || o);
  }
  uZe.exports = process.platform === "win32" ? hxn : pxn;
  uZe.exports.posix = pxn;
  uZe.exports.win32 = hxn;
});