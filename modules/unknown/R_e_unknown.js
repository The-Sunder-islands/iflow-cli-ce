/**
 * @module R_e
 * @category unknown
 * @label unknown
 * @position 1332 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (R_e) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var R_e = T((ser, CLn) => {
  var Qtt = Ae("buffer"),
    oO = Qtt.Buffer;
  function vLn(t, e) {
    for (var r in t) e[r] = t[r];
  }
  oO.from && oO.alloc && oO.allocUnsafe && oO.allocUnsafeSlow
    ? (CLn.exports = Qtt)
    : (vLn(Qtt, ser), (ser.Buffer = jue));
  function jue(t, e, r) {
    return oO(t, e, r);
  }
  vLn(oO, jue);
  jue.from = function (t, e, r) {
    if (typeof t == "number") throw new TypeError("Argument must not be a number");
    return oO(t, e, r);
  };
  jue.alloc = function (t, e, r) {
    if (typeof t != "number") throw new TypeError("Argument must be a number");
    var n = oO(t);
    return (e !== void 0 ? (typeof r == "string" ? n.fill(e, r) : n.fill(e)) : n.fill(0), n);
  };
  jue.allocUnsafe = function (t) {
    if (typeof t != "number") throw new TypeError("Argument must be a number");
    return oO(t);
  };
  jue.allocUnsafeSlow = function (t) {
    if (typeof t != "number") throw new TypeError("Argument must be a number");
    return Qtt.SlowBuffer(t);
  };
});