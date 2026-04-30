/**
 * @module S_n
 * @category utils/oop
 * @label oop
 * @position 971 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (S_n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var S_n = T((Phc, C_n) => {
  "use strict";
  C_n.exports = function (t) {
    var e = t._SomePromiseArray;
    function r(n) {
      var o = new e(n),
        s = o.promise();
      return (o.setHowMany(1), o.setUnwrap(), o.init(), s);
    }
    ((t.any = function (n) {
      return r(n);
    }),
      (t.prototype.any = function () {
        return r(this);
      }));
  };
});