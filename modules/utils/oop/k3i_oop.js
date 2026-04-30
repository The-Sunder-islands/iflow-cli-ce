/**
 * @module k3i
 * @category utils/oop
 * @label oop
 * @position 1700 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (k3i) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var k3i = T((gGc, R3i) => {
  "use strict";
  R3i.exports = function (t, e) {
    var r = t.map;
    ((t.prototype.filter = function (n, o) {
      return r(this, n, o, e);
    }),
      (t.filter = function (n, o, s) {
        return r(n, o, s, e);
      }));
  };
});