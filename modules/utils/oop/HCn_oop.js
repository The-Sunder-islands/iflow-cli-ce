/**
 * @module HCn
 * @category utils/oop
 * @label oop
 * @position 1027 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (HCn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var HCn = T((IXe) => {
  "use strict";
  var CCs = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u",
    SCs = GCn(),
    qCn = Nd(),
    DXe = I6(),
    wCs = CCs ? "uint8array" : "array";
  IXe.magic = "\b\0";
  function rW(t, e) {
    (DXe.call(this, "FlateWorker/" + t),
      (this._pako = null),
      (this._pakoAction = t),
      (this._pakoOptions = e),
      (this.meta = {}));
  }
  qCn.inherits(rW, DXe);
  rW.prototype.processChunk = function (t) {
    ((this.meta = t.meta),
      this._pako === null && this._createPako(),
      this._pako.push(qCn.transformTo(wCs, t.data), !1));
  };
  rW.prototype.flush = function () {
    (DXe.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0));
  };
  rW.prototype.cleanUp = function () {
    (DXe.prototype.cleanUp.call(this), (this._pako = null));
  };
  rW.prototype._createPako = function () {
    this._pako = new SCs[this._pakoAction]({ raw: !0, level: this._pakoOptions.level || -1 });
    var t = this;
    this._pako.onData = function (e) {
      t.push({ data: e, meta: t.meta });
    };
  };
  IXe.compressWorker = function (t) {
    return new rW("Deflate", t);
  };
  IXe.uncompressWorker = function () {
    return new rW("Inflate", {});
  };
});