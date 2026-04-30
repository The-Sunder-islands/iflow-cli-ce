/**
 * @module Yjn
 * @category unknown
 * @label unknown
 * @position 1406 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Yjn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Yjn = T((i6c, zjn) => {
  zjn.exports = function (t) {
    function e(n, o) {
      var s = r.store,
        a = n.split(".");
      a.slice(0, -1).forEach(function (c) {
        (s[c] === void 0 && (s[c] = {}), (s = s[c]));
      });
      var u = a[a.length - 1];
      return arguments.length == 1 ? s[u] : (s[u] = o);
    }
    var r = {
      get: function (n) {
        return e(n);
      },
      set: function (n, o) {
        return e(n, o);
      },
      store: t || {},
    };
    return r;
  };
});