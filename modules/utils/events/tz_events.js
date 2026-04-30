/**
 * @module tz
 * @category utils/events
 * @label events
 * @position 1434 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (tz) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var tz = T((I6c, _Gn) => {
  "use strict";
  var bGn = Z1(),
    xXs =
      Object.keys ||
      function (t) {
        var e = [];
        for (var r in t) e.push(r);
        return e;
      };
  _Gn.exports = yO;
  var AGn = Object.create(z0());
  AGn.inherits = qo();
  var yGn = onr(),
    inr = rnr();
  AGn.inherits(yO, yGn);
  for (nnr = xXs(inr.prototype), snt = 0; snt < nnr.length; snt++)
    ((ant = nnr[snt]), yO.prototype[ant] || (yO.prototype[ant] = inr.prototype[ant]));
  var nnr, ant, snt;
  function yO(t) {
    if (!(this instanceof yO)) return new yO(t);
    (yGn.call(this, t),
      inr.call(this, t),
      t && t.readable === !1 && (this.readable = !1),
      t && t.writable === !1 && (this.writable = !1),
      (this.allowHalfOpen = !0),
      t && t.allowHalfOpen === !1 && (this.allowHalfOpen = !1),
      this.once("end", TXs));
  }
  Object.defineProperty(yO.prototype, "writableHighWaterMark", {
    enumerable: !1,
    get: function () {
      return this._writableState.highWaterMark;
    },
  });
  function TXs() {
    this.allowHalfOpen || this._writableState.ended || bGn.nextTick(DXs, this);
  }
  function DXs(t) {
    t.end();
  }
  Object.defineProperty(yO.prototype, "destroyed", {
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
  yO.prototype._destroy = function (t, e) {
    (this.push(null), this.end(), bGn.nextTick(e, t));
  };
});