/**
 * @module Get
 * @category utils/oop
 * @label oop
 * @position 1283 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Get) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Get = T((y5c, SNn) => {
  var JPs = "[object AsyncFunction]",
    XPs = "[object Function]",
    ZPs = "[object GeneratorFunction]",
    eBs = "[object Null]",
    tBs = "[object Proxy]",
    rBs = "[object Undefined]",
    nBs = typeof global == "object" && global && global.Object === Object && global,
    iBs = typeof self == "object" && self && self.Object === Object && self,
    oBs = nBs || iBs || Function("return this")(),
    vNn = Object.prototype,
    sBs = vNn.hasOwnProperty,
    CNn = vNn.toString,
    ENn = oBs.Symbol,
    SW = ENn ? ENn.toStringTag : void 0;
  function aBs(t) {
    return t == null ? (t === void 0 ? rBs : eBs) : SW && SW in Object(t) ? uBs(t) : cBs(t);
  }
  function uBs(t) {
    var e = sBs.call(t, SW),
      r = t[SW];
    try {
      t[SW] = void 0;
      var n = !0;
    } catch {}
    var o = CNn.call(t);
    return (n && (e ? (t[SW] = r) : delete t[SW]), o);
  }
  function cBs(t) {
    return CNn.call(t);
  }
  function lBs(t) {
    if (!mBs(t)) return !1;
    var e = aBs(t);
    return e == XPs || e == ZPs || e == JPs || e == tBs;
  }
  function mBs(t) {
    var e = typeof t;
    return t != null && (e == "object" || e == "function");
  }
  SNn.exports = lBs;
});