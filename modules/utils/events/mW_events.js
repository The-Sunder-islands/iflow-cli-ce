/**
 * @module mW
 * @category utils/events
 * @label events
 * @position 1148 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (mW) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var mW = T((Qbc, KDn) => {
  "use strict";
  var bDs =
    Object.keys ||
    function (t) {
      var e = [];
      for (var r in t) e.push(r);
      return e;
    };
  KDn.exports = tD;
  var YDn = Wzt(),
    Vzt = qzt();
  qo()(tD, YDn);
  for (Hzt = bDs(Vzt.prototype), jZe = 0; jZe < Hzt.length; jZe++)
    ((QZe = Hzt[jZe]), tD.prototype[QZe] || (tD.prototype[QZe] = Vzt.prototype[QZe]));
  var Hzt, QZe, jZe;
  function tD(t) {
    if (!(this instanceof tD)) return new tD(t);
    (YDn.call(this, t),
      Vzt.call(this, t),
      (this.allowHalfOpen = !0),
      t &&
        (t.readable === !1 && (this.readable = !1),
        t.writable === !1 && (this.writable = !1),
        t.allowHalfOpen === !1 && ((this.allowHalfOpen = !1), this.once("end", ADs))));
  }
  Object.defineProperty(tD.prototype, "writableHighWaterMark", {
    enumerable: !1,
    get: function () {
      return this._writableState.highWaterMark;
    },
  });
  Object.defineProperty(tD.prototype, "writableBuffer", {
    enumerable: !1,
    get: function () {
      return this._writableState && this._writableState.getBuffer();
    },
  });
  Object.defineProperty(tD.prototype, "writableLength", {
    enumerable: !1,
    get: function () {
      return this._writableState.length;
    },
  });
  function ADs() {
    this._writableState.ended || process.nextTick(yDs, this);
  }
  function yDs(t) {
    t.end();
  }
  Object.defineProperty(tD.prototype, "destroyed", {
    enumerable: !1,
    get: function () {
      return this._readableState === void 0 || this._writableState === void 0
        ? !1
        : this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function (e) {
      this._readableState === void 0 ||
        this._writableState === void 0 ||
        ((this._readableState.destroyed = e), (this._writableState.destroyed = e));
    },
  });
});