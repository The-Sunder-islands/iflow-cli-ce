/**
 * @module h3i
 * @category utils/oop
 * @label oop
 * @position 1692 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (h3i) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var h3i = T((uGc, p3i) => {
  "use strict";
  p3i.exports = function (t, e, r, n) {
    var o = Z0(),
      s = function (u) {
        return u.then(function (c) {
          return a(c, u);
        });
      };
    function a(u, c) {
      var m = r(u);
      if (m instanceof t) return s(m);
      if (((u = o.asArray(u)), u === null))
        return n("expecting an array or an iterable object but got " + o.classString(u));
      var d = new t(e);
      c !== void 0 && d._propagateFrom(c, 3);
      for (var f = d._fulfill, p = d._reject, h = 0, g = u.length; h < g; ++h) {
        var b = u[h];
        (b === void 0 && !(h in u)) || t.cast(b)._then(f, p, void 0, d, null);
      }
      return d;
    }
    ((t.race = function (u) {
      return a(u, void 0);
    }),
      (t.prototype.race = function () {
        return a(this, void 0);
      }));
  };
});