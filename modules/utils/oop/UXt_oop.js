/**
 * @module UXt
 * @category utils/oop
 * @label oop
 * @position 1286 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (UXt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var UXt = T((E5c, uPn) => {
  function WLs(t) {
    return t == null;
  }
  uPn.exports = WLs;
});
var $Xt = T((v5c, fPn) => {
  var zLs = 1 / 0,
    YLs = "[object Symbol]",
    dPn = /[\\^$.*+?()[\]{}|]/g,
    KLs = RegExp(dPn.source),
    JLs = typeof global == "object" && global && global.Object === Object && global,
    XLs = typeof self == "object" && self && self.Object === Object && self,
    ZLs = JLs || XLs || Function("return this")(),
    eMs = Object.prototype,
    tMs = eMs.toString,
    cPn = ZLs.Symbol,
    lPn = cPn ? cPn.prototype : void 0,
    mPn = lPn ? lPn.toString : void 0;
  function rMs(t) {
    if (typeof t == "string") return t;
    if (iMs(t)) return mPn ? mPn.call(t) : "";
    var e = t + "";
    return e == "0" && 1 / t == -zLs ? "-0" : e;
  }
  function nMs(t) {
    return !!t && typeof t == "object";
  }
  function iMs(t) {
    return typeof t == "symbol" || (nMs(t) && tMs.call(t) == YLs);
  }
  function oMs(t) {
    return t == null ? "" : rMs(t);
  }
  function sMs(t) {
    return ((t = oMs(t)), t && KLs.test(t) ? t.replace(dPn, "\\$&") : t);
  }
  fPn.exports = sMs;
});