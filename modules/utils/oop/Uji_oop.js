/**
 * @module Uji
 * @category utils/oop
 * @label oop
 * @position 1881 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Uji) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Uji = T((nul, Fji) => {
  var Mji = Ae("util"),
    h6r = Lji();
  Fji.exports = function () {
    var t = Array.prototype.slice.call(arguments, 0),
      e = t.shift();
    if (e === "typo") return eau.apply(null, t);
    var r = h6r[e] ? h6r[e] : e + ": '%s'";
    return (t.unshift(r), Mji.format.apply(null, t));
  };
  function eau(t, e, r) {
    return (r && ((t = r + "['" + t + "']"), (e = r + "['" + e + "']")), Mji.format(h6r.typo, t, e));
  }
});