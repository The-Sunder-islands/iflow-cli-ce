/**
 * @module N6e
 * @category unknown
 * @label unknown
 * @position 979 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (N6e) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var N6e = T((gHt, k_n) => {
  var HJe = Ae("buffer"),
    Bk = HJe.Buffer;
  function R_n(t, e) {
    for (var r in t) e[r] = t[r];
  }
  Bk.from && Bk.alloc && Bk.allocUnsafe && Bk.allocUnsafeSlow
    ? (k_n.exports = HJe)
    : (R_n(HJe, gHt), (gHt.Buffer = mae));
  function mae(t, e, r) {
    return Bk(t, e, r);
  }
  R_n(Bk, mae);
  mae.from = function (t, e, r) {
    if (typeof t == "number") throw new TypeError("Argument must not be a number");
    return Bk(t, e, r);
  };
  mae.alloc = function (t, e, r) {
    if (typeof t != "number") throw new TypeError("Argument must be a number");
    var n = Bk(t);
    return (e !== void 0 ? (typeof r == "string" ? n.fill(e, r) : n.fill(e)) : n.fill(0), n);
  };
  mae.allocUnsafe = function (t) {
    if (typeof t != "number") throw new TypeError("Argument must be a number");
    return Bk(t);
  };
  mae.allocUnsafeSlow = function (t) {
    if (typeof t != "number") throw new TypeError("Argument must be a number");
    return HJe.SlowBuffer(t);
  };
});