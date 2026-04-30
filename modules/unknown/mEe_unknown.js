/**
 * @module mEe
 * @category unknown
 * @label unknown
 * @position 1412 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (mEe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var mEe = T((krr, uQn) => {
  var Frt = Ae("buffer"),
    pO = Frt.Buffer;
  function aQn(t, e) {
    for (var r in t) e[r] = t[r];
  }
  pO.from && pO.alloc && pO.allocUnsafe && pO.allocUnsafeSlow
    ? (uQn.exports = Frt)
    : (aQn(Frt, krr), (krr.Buffer = pce));
  function pce(t, e, r) {
    return pO(t, e, r);
  }
  aQn(pO, pce);
  pce.from = function (t, e, r) {
    if (typeof t == "number") throw new TypeError("Argument must not be a number");
    return pO(t, e, r);
  };
  pce.alloc = function (t, e, r) {
    if (typeof t != "number") throw new TypeError("Argument must be a number");
    var n = pO(t);
    return (e !== void 0 ? (typeof r == "string" ? n.fill(e, r) : n.fill(e)) : n.fill(0), n);
  };
  pce.allocUnsafe = function (t) {
    if (typeof t != "number") throw new TypeError("Argument must be a number");
    return pO(t);
  };
  pce.allocUnsafeSlow = function (t) {
    if (typeof t != "number") throw new TypeError("Argument must be a number");
    return Frt.SlowBuffer(t);
  };
});