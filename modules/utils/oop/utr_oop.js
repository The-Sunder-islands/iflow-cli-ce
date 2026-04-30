/**
 * @module utr
 * @category utils/oop
 * @label oop
 * @position 1359 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (utr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var utr = T((M8c, FFn) => {
  var YVs = "[object Object]";
  function KVs(t) {
    var e = !1;
    if (t != null && typeof t.toString != "function")
      try {
        e = !!(t + "");
      } catch {}
    return e;
  }
  function JVs(t, e) {
    return function (r) {
      return t(e(r));
    };
  }
  var XVs = Function.prototype,
    LFn = Object.prototype,
    MFn = XVs.toString,
    ZVs = LFn.hasOwnProperty,
    eWs = MFn.call(Object),
    tWs = LFn.toString,
    rWs = JVs(Object.getPrototypeOf, Object);
  function nWs(t) {
    return !!t && typeof t == "object";
  }
  function iWs(t) {
    if (!nWs(t) || tWs.call(t) != YVs || KVs(t)) return !1;
    var e = rWs(t);
    if (e === null) return !0;
    var r = ZVs.call(e, "constructor") && e.constructor;
    return typeof r == "function" && r instanceof r && MFn.call(r) == eWs;
  }
  FFn.exports = iWs;
});