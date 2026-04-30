/**
 * @module e4n
 * @category utils/oop
 * @label oop
 * @position 1032 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (e4n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var e4n = T((Q3c, ZCn) => {
  "use strict";
  var NCs = Nd(),
    kXe = I6();
  function mye(t, e) {
    (kXe.call(this, "Nodejs stream input adapter for " + t), (this._upstreamEnded = !1), this._bindStream(e));
  }
  NCs.inherits(mye, kXe);
  mye.prototype._bindStream = function (t) {
    var e = this;
    ((this._stream = t),
      t.pause(),
      t
        .on("data", function (r) {
          e.push({ data: r, meta: { percent: 0 } });
        })
        .on("error", function (r) {
          e.isPaused ? (this.generatedError = r) : e.error(r);
        })
        .on("end", function () {
          e.isPaused ? (e._upstreamEnded = !0) : e.end();
        }));
  };
  mye.prototype.pause = function () {
    return kXe.prototype.pause.call(this) ? (this._stream.pause(), !0) : !1;
  };
  mye.prototype.resume = function () {
    return kXe.prototype.resume.call(this) ? (this._upstreamEnded ? this.end() : this._stream.resume(), !0) : !1;
  };
  ZCn.exports = mye;
});