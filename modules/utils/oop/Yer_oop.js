/**
 * @module Yer
 * @category utils/oop
 * @label oop
 * @position 1356 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Yer) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Yer = T((P8c, dFn) => {
  var _qs = 9007199254740991,
    Eqs = "[object Arguments]",
    vqs = "[object Function]",
    Cqs = "[object GeneratorFunction]",
    Sqs = typeof global == "object" && global && global.Object === Object && global,
    wqs = typeof self == "object" && self && self.Object === Object && self,
    xqs = Sqs || wqs || Function("return this")();
  function Tqs(t, e) {
    for (var r = -1, n = e.length, o = t.length; ++r < n; ) t[o + r] = e[r];
    return t;
  }
  var zer = Object.prototype,
    Dqs = zer.hasOwnProperty,
    lFn = zer.toString,
    uFn = xqs.Symbol,
    Iqs = zer.propertyIsEnumerable,
    cFn = uFn ? uFn.isConcatSpreadable : void 0;
  function mFn(t, e, r, n, o) {
    var s = -1,
      a = t.length;
    for (r || (r = Rqs), o || (o = []); ++s < a; ) {
      var u = t[s];
      e > 0 && r(u) ? (e > 1 ? mFn(u, e - 1, r, n, o) : Tqs(o, u)) : n || (o[o.length] = u);
    }
    return o;
  }
  function Rqs(t) {
    return Nqs(t) || Oqs(t) || !!(cFn && t && t[cFn]);
  }
  function kqs(t) {
    var e = t ? t.length : 0;
    return e ? mFn(t, 1) : [];
  }
  function Oqs(t) {
    return Bqs(t) && Dqs.call(t, "callee") && (!Iqs.call(t, "callee") || lFn.call(t) == Eqs);
  }
  var Nqs = Array.isArray;
  function Pqs(t) {
    return t != null && Mqs(t.length) && !Lqs(t);
  }
  function Bqs(t) {
    return Uqs(t) && Pqs(t);
  }
  function Lqs(t) {
    var e = Fqs(t) ? lFn.call(t) : "";
    return e == vqs || e == Cqs;
  }
  function Mqs(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= _qs;
  }
  function Fqs(t) {
    var e = typeof t;
    return !!t && (e == "object" || e == "function");
  }
  function Uqs(t) {
    return !!t && typeof t == "object";
  }
  dFn.exports = kqs;
});