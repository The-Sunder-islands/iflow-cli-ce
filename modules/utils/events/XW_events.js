/**
 * @module XW
 * @category utils/events
 * @label events
 * @position 1416 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (XW) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var XW = T((d6c, CQn) => {
  "use strict";
  var _Qn = Z1(),
    uJs =
      Object.keys ||
      function (t) {
        var e = [];
        for (var r in t) e.push(r);
        return e;
      };
  CQn.exports = hO;
  var EQn = Object.create(z0());
  EQn.inherits = qo();
  var vQn = Frr(),
    Mrr = Brr();
  EQn.inherits(hO, vQn);
  for (Lrr = uJs(Mrr.prototype), Grt = 0; Grt < Lrr.length; Grt++)
    ((qrt = Lrr[Grt]), hO.prototype[qrt] || (hO.prototype[qrt] = Mrr.prototype[qrt]));
  var Lrr, qrt, Grt;
  function hO(t) {
    if (!(this instanceof hO)) return new hO(t);
    (vQn.call(this, t),
      Mrr.call(this, t),
      t && t.readable === !1 && (this.readable = !1),
      t && t.writable === !1 && (this.writable = !1),
      (this.allowHalfOpen = !0),
      t && t.allowHalfOpen === !1 && (this.allowHalfOpen = !1),
      this.once("end", cJs));
  }
  Object.defineProperty(hO.prototype, "writableHighWaterMark", {
    enumerable: !1,
    get: function () {
      return this._writableState.highWaterMark;
    },
  });
  function cJs() {
    this.allowHalfOpen || this._writableState.ended || _Qn.nextTick(lJs, this);
  }
  function lJs(t) {
    t.end();
  }
  Object.defineProperty(hO.prototype, "destroyed", {
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
  hO.prototype._destroy = function (t, e) {
    (this.push(null), this.end(), _Qn.nextTick(e, t));
  };
});