/**
 * @module HFn
 * @category utils/oop
 * @label oop
 * @position 1361 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (HFn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var HFn = T((j8c, qFn) => {
  qFn.exports = function (t, e) {
    for (var r = [], n = 0; n < t.length; n++) {
      var o = e(t[n], n);
      mWs(o) ? r.push.apply(r, o) : r.push(o);
    }
    return r;
  };
  var mWs =
    Array.isArray ||
    function (t) {
      return Object.prototype.toString.call(t) === "[object Array]";
    };
});