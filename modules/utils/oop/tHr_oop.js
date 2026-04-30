/**
 * @module tHr
 * @category utils/oop
 * @label oop
 * @position 160 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (tHr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var tHr = T((SRu, eHr) => {
  "use strict";
  eHr.exports = Oh;
  var oge = _x();
  function Oh(t, e) {
    ((this.lo = t >>> 0), (this.hi = e >>> 0));
  }
  var UG = (Oh.zero = new Oh(0, 0));
  UG.toNumber = function () {
    return 0;
  };
  UG.zzEncode = UG.zzDecode = function () {
    return this;
  };
  UG.length = function () {
    return 1;
  };
  var cxo = (Oh.zeroHash = "\0\0\0\0\0\0\0\0");
  Oh.fromNumber = function (e) {
    if (e === 0) return UG;
    var r = e < 0;
    r && (e = -e);
    var n = e >>> 0,
      o = ((e - n) / 4294967296) >>> 0;
    return (
      r && ((o = ~o >>> 0), (n = ~n >>> 0), ++n > 4294967295 && ((n = 0), ++o > 4294967295 && (o = 0))),
      new Oh(n, o)
    );
  };
  Oh.from = function (e) {
    if (typeof e == "number") return Oh.fromNumber(e);
    if (oge.isString(e))
      if (oge.Long) e = oge.Long.fromString(e);
      else return Oh.fromNumber(parseInt(e, 10));
    return e.low || e.high ? new Oh(e.low >>> 0, e.high >>> 0) : UG;
  };
  Oh.prototype.toNumber = function (e) {
    if (!e && this.hi >>> 31) {
      var r = (~this.lo + 1) >>> 0,
        n = ~this.hi >>> 0;
      return (r || (n = (n + 1) >>> 0), -(r + n * 4294967296));
    }
    return this.lo + this.hi * 4294967296;
  };
  Oh.prototype.toLong = function (e) {
    return oge.Long
      ? new oge.Long(this.lo | 0, this.hi | 0, !!e)
      : { low: this.lo | 0, high: this.hi | 0, unsigned: !!e };
  };
  var IB = String.prototype.charCodeAt;
  Oh.fromHash = function (e) {
    return e === cxo
      ? UG
      : new Oh(
          (IB.call(e, 0) | (IB.call(e, 1) << 8) | (IB.call(e, 2) << 16) | (IB.call(e, 3) << 24)) >>> 0,
          (IB.call(e, 4) | (IB.call(e, 5) << 8) | (IB.call(e, 6) << 16) | (IB.call(e, 7) << 24)) >>> 0,
        );
  };
  Oh.prototype.toHash = function () {
    return String.fromCharCode(
      this.lo & 255,
      (this.lo >>> 8) & 255,
      (this.lo >>> 16) & 255,
      this.lo >>> 24,
      this.hi & 255,
      (this.hi >>> 8) & 255,
      (this.hi >>> 16) & 255,
      this.hi >>> 24,
    );
  };
  Oh.prototype.zzEncode = function () {
    var e = this.hi >> 31;
    return ((this.hi = (((this.hi << 1) | (this.lo >>> 31)) ^ e) >>> 0), (this.lo = ((this.lo << 1) ^ e) >>> 0), this);
  };
  Oh.prototype.zzDecode = function () {
    var e = -(this.lo & 1);
    return ((this.lo = (((this.lo >>> 1) | (this.hi << 31)) ^ e) >>> 0), (this.hi = ((this.hi >>> 1) ^ e) >>> 0), this);
  };
  Oh.prototype.length = function () {
    var e = this.lo,
      r = ((this.lo >>> 28) | (this.hi << 4)) >>> 0,
      n = this.hi >>> 24;
    return n === 0
      ? r === 0
        ? e < 16384
          ? e < 128
            ? 1
            : 2
          : e < 2097152
            ? 3
            : 4
        : r < 16384
          ? r < 128
            ? 5
            : 6
          : r < 2097152
            ? 7
            : 8
      : n < 128
        ? 9
        : 10;
  };
});