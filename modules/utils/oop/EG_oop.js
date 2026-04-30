/**
 * @module EG
 * @category utils/oop
 * @label oop
 * @position 78 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (EG) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var EG = T((iyt, LRr) => {
  var Oke = Ae("buffer"),
    ox = Oke.Buffer;
  function BRr(t, e) {
    for (var r in t) e[r] = t[r];
  }
  ox.from && ox.alloc && ox.allocUnsafe && ox.allocUnsafeSlow
    ? (LRr.exports = Oke)
    : (BRr(Oke, iyt), (iyt.Buffer = _G));
  function _G(t, e, r) {
    return ox(t, e, r);
  }
  _G.prototype = Object.create(ox.prototype);
  BRr(ox, _G);
  _G.from = function (t, e, r) {
    if (typeof t == "number") throw new TypeError("Argument must not be a number");
    return ox(t, e, r);
  };
  _G.alloc = function (t, e, r) {
    if (typeof t != "number") throw new TypeError("Argument must be a number");
    var n = ox(t);
    return (e !== void 0 ? (typeof r == "string" ? n.fill(e, r) : n.fill(e)) : n.fill(0), n);
  };
  _G.allocUnsafe = function (t) {
    if (typeof t != "number") throw new TypeError("Argument must be a number");
    return ox(t);
  };
  _G.allocUnsafeSlow = function (t) {
    if (typeof t != "number") throw new TypeError("Argument must be a number");
    return Oke.SlowBuffer(t);
  };
});