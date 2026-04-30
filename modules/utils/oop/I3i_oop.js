/**
 * @module I3i
 * @category utils/oop
 * @label oop
 * @position 1699 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (I3i) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var I3i = T((hGc, D3i) => {
  "use strict";
  D3i.exports = function (t, e) {
    var r = t.reduce,
      n = t.all;
    function o() {
      return n(this);
    }
    function s(a, u) {
      return r(a, u, e, e);
    }
    ((t.prototype.each = function (a) {
      return r(this, a, e, 0)._then(o, void 0, void 0, this, void 0);
    }),
      (t.prototype.mapSeries = function (a) {
        return r(this, a, e, e);
      }),
      (t.each = function (a, u) {
        return r(a, u, e, 0)._then(o, void 0, void 0, a, void 0);
      }),
      (t.mapSeries = s));
  };
});