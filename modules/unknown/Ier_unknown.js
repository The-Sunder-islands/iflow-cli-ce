/**
 * @module Ier
 * @category unknown
 * @label unknown
 * @position 1347 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Ier) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Ier = T((S8c, vMn) => {
  vMn.exports = Ae("stream");
});
var $_e = T((Rer, SMn) => {
  var rrt = Ae("buffer"),
    uO = rrt.Buffer;
  function CMn(t, e) {
    for (var r in t) e[r] = t[r];
  }
  uO.from && uO.alloc && uO.allocUnsafe && uO.allocUnsafeSlow
    ? (SMn.exports = rrt)
    : (CMn(rrt, Rer), (Rer.Buffer = Hue));
  function Hue(t, e, r) {
    return uO(t, e, r);
  }
  CMn(uO, Hue);
  Hue.from = function (t, e, r) {
    if (typeof t == "number") throw new TypeError("Argument must not be a number");
    return uO(t, e, r);
  };
  Hue.alloc = function (t, e, r) {
    if (typeof t != "number") throw new TypeError("Argument must be a number");
    var n = uO(t);
    return (e !== void 0 ? (typeof r == "string" ? n.fill(e, r) : n.fill(e)) : n.fill(0), n);
  };
  Hue.allocUnsafe = function (t) {
    if (typeof t != "number") throw new TypeError("Argument must be a number");
    return uO(t);
  };
  Hue.allocUnsafeSlow = function (t) {
    if (typeof t != "number") throw new TypeError("Argument must be a number");
    return rrt.SlowBuffer(t);
  };
});