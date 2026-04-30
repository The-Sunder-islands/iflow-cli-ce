/**
 * @module Z1
 * @category unknown
 * @label unknown
 * @position 976 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Z1) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Z1 = T((Uhc, pHt) => {
  "use strict";
  typeof process > "u" ||
  !process.version ||
  process.version.indexOf("v0.") === 0 ||
  (process.version.indexOf("v1.") === 0 && process.version.indexOf("v1.8.") !== 0)
    ? (pHt.exports = { nextTick: Iys })
    : (pHt.exports = process);
  function Iys(t, e, r, n) {
    if (typeof t != "function") throw new TypeError('"callback" argument must be a function');
    var o = arguments.length,
      s,
      a;
    switch (o) {
      case 0:
      case 1:
        return process.nextTick(t);
      case 2:
        return process.nextTick(function () {
          t.call(null, e);
        });
      case 3:
        return process.nextTick(function () {
          t.call(null, e, r);
        });
      case 4:
        return process.nextTick(function () {
          t.call(null, e, r, n);
        });
      default:
        for (s = new Array(o - 1), a = 0; a < s.length; ) s[a++] = arguments[a];
        return process.nextTick(function () {
          t.apply(null, s);
        });
    }
  }
});