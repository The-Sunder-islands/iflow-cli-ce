/**
 * @module PW
 * @category utils/events
 * @label events
 * @position 1336 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (PW) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var PW = T((f8c, FLn) => {
  "use strict";
  var BLn = Z1(),
    aQs =
      Object.keys ||
      function (t) {
        var e = [];
        for (var r in t) e.push(r);
        return e;
      };
  FLn.exports = sO;
  var LLn = Object.create(z0());
  LLn.inherits = qo();
  var MLn = fer(),
    der = ler();
  LLn.inherits(sO, MLn);
  for (mer = aQs(der.prototype), Wtt = 0; Wtt < mer.length; Wtt++)
    ((ztt = mer[Wtt]), sO.prototype[ztt] || (sO.prototype[ztt] = der.prototype[ztt]));
  var mer, ztt, Wtt;
  function sO(t) {
    if (!(this instanceof sO)) return new sO(t);
    (MLn.call(this, t),
      der.call(this, t),
      t && t.readable === !1 && (this.readable = !1),
      t && t.writable === !1 && (this.writable = !1),
      (this.allowHalfOpen = !0),
      t && t.allowHalfOpen === !1 && (this.allowHalfOpen = !1),
      this.once("end", uQs));
  }
  Object.defineProperty(sO.prototype, "writableHighWaterMark", {
    enumerable: !1,
    get: function () {
      return this._writableState.highWaterMark;
    },
  });
  function uQs() {
    this.allowHalfOpen || this._writableState.ended || BLn.nextTick(cQs, this);
  }
  function cQs(t) {
    t.end();
  }
  Object.defineProperty(sO.prototype, "destroyed", {
    get: function () {
      return this._readableState === void 0 || this._writableState === void 0
        ? !1
        : this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function (t) {
      this._readableState === void 0 ||
        this._writableState === void 0 ||
        ((this._readableState.destroyed = t), (this._writableState.destroyed = t));
    },
  });
  sO.prototype._destroy = function (t, e) {
    (this.push(null), this.end(), BLn.nextTick(e, t));
  };
});