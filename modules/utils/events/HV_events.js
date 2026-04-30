/**
 * @module HV
 * @category utils/events
 * @label events
 * @position 987 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (HV) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var HV = T((Yhc, z_n) => {
  "use strict";
  var H_n = Z1(),
    f_s =
      Object.keys ||
      function (t) {
        var e = [];
        for (var r in t) e.push(r);
        return e;
      };
  z_n.exports = Lk;
  var V_n = Object.create(z0());
  V_n.inherits = qo();
  var W_n = xHt(),
    wHt = CHt();
  V_n.inherits(Lk, W_n);
  for (SHt = f_s(wHt.prototype), JJe = 0; JJe < SHt.length; JJe++)
    ((XJe = SHt[JJe]), Lk.prototype[XJe] || (Lk.prototype[XJe] = wHt.prototype[XJe]));
  var SHt, XJe, JJe;
  function Lk(t) {
    if (!(this instanceof Lk)) return new Lk(t);
    (W_n.call(this, t),
      wHt.call(this, t),
      t && t.readable === !1 && (this.readable = !1),
      t && t.writable === !1 && (this.writable = !1),
      (this.allowHalfOpen = !0),
      t && t.allowHalfOpen === !1 && (this.allowHalfOpen = !1),
      this.once("end", p_s));
  }
  Object.defineProperty(Lk.prototype, "writableHighWaterMark", {
    enumerable: !1,
    get: function () {
      return this._writableState.highWaterMark;
    },
  });
  function p_s() {
    this.allowHalfOpen || this._writableState.ended || H_n.nextTick(h_s, this);
  }
  function h_s(t) {
    t.end();
  }
  Object.defineProperty(Lk.prototype, "destroyed", {
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
  Lk.prototype._destroy = function (t, e) {
    (this.push(null), this.end(), H_n.nextTick(e, t));
  };
});