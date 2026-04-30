/**
 * @module rVt
 * @category utils/oop
 * @label oop
 * @position 1007 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (rVt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var rVt = T((h3c, GEn) => {
  "use strict";
  var aXe = Nd(),
    uXe = I6(),
    yEs = 16 * 1024;
  function Eae(t) {
    uXe.call(this, "DataWorker");
    var e = this;
    ((this.dataIsReady = !1),
      (this.index = 0),
      (this.max = 0),
      (this.data = null),
      (this.type = ""),
      (this._tickScheduled = !1),
      t.then(
        function (r) {
          ((e.dataIsReady = !0),
            (e.data = r),
            (e.max = (r && r.length) || 0),
            (e.type = aXe.getTypeOf(r)),
            e.isPaused || e._tickAndRepeat());
        },
        function (r) {
          e.error(r);
        },
      ));
  }
  aXe.inherits(Eae, uXe);
  Eae.prototype.cleanUp = function () {
    (uXe.prototype.cleanUp.call(this), (this.data = null));
  };
  Eae.prototype.resume = function () {
    return uXe.prototype.resume.call(this)
      ? (!this._tickScheduled &&
          this.dataIsReady &&
          ((this._tickScheduled = !0), aXe.delay(this._tickAndRepeat, [], this)),
        !0)
      : !1;
  };
  Eae.prototype._tickAndRepeat = function () {
    ((this._tickScheduled = !1),
      !(this.isPaused || this.isFinished) &&
        (this._tick(), this.isFinished || (aXe.delay(this._tickAndRepeat, [], this), (this._tickScheduled = !0))));
  };
  Eae.prototype._tick = function () {
    if (this.isPaused || this.isFinished) return !1;
    var t = yEs,
      e = null,
      r = Math.min(this.max, this.index + t);
    if (this.index >= this.max) return this.end();
    switch (this.type) {
      case "string":
        e = this.data.substring(this.index, r);
        break;
      case "uint8array":
        e = this.data.subarray(this.index, r);
        break;
      case "array":
      case "nodebuffer":
        e = this.data.slice(this.index, r);
        break;
    }
    return ((this.index = r), this.push({ data: e, meta: { percent: this.max ? (this.index / this.max) * 100 : 0 } }));
  };
  GEn.exports = Eae;
});