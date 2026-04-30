/**
 * @module ZRr
 * @category utils/oop
 * @label oop
 * @position 89 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ZRr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ZRr = T((J4u, XRr) => {
  "use strict";
  var g3e = Ae("buffer").Buffer,
    Eyt = Ae("buffer").SlowBuffer;
  XRr.exports = jke;
  function jke(t, e) {
    if (!g3e.isBuffer(t) || !g3e.isBuffer(e) || t.length !== e.length) return !1;
    for (var r = 0, n = 0; n < t.length; n++) r |= t[n] ^ e[n];
    return r === 0;
  }
  jke.install = function () {
    g3e.prototype.equal = Eyt.prototype.equal = function (e) {
      return jke(this, e);
    };
  };
  var Cho = g3e.prototype.equal,
    Sho = Eyt.prototype.equal;
  jke.restore = function () {
    ((g3e.prototype.equal = Cho), (Eyt.prototype.equal = Sho));
  };
});