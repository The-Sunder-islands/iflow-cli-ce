/**
 * @module CEe
 * @category unknown
 * @label unknown
 * @position 1430 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (CEe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var CEe = T((Xrr, oGn) => {
  var tnt = Ae("buffer"),
    AO = tnt.Buffer;
  function iGn(t, e) {
    for (var r in t) e[r] = t[r];
  }
  AO.from && AO.alloc && AO.allocUnsafe && AO.allocUnsafeSlow
    ? (oGn.exports = tnt)
    : (iGn(tnt, Xrr), (Xrr.Buffer = Ace));
  function Ace(t, e, r) {
    return AO(t, e, r);
  }
  iGn(AO, Ace);
  Ace.from = function (t, e, r) {
    if (typeof t == "number") throw new TypeError("Argument must not be a number");
    return AO(t, e, r);
  };
  Ace.alloc = function (t, e, r) {
    if (typeof t != "number") throw new TypeError("Argument must be a number");
    var n = AO(t);
    return (e !== void 0 ? (typeof r == "string" ? n.fill(e, r) : n.fill(e)) : n.fill(0), n);
  };
  Ace.allocUnsafe = function (t) {
    if (typeof t != "number") throw new TypeError("Argument must be a number");
    return AO(t);
  };
  Ace.allocUnsafeSlow = function (t) {
    if (typeof t != "number") throw new TypeError("Argument must be a number");
    return tnt.SlowBuffer(t);
  };
});