/**
 * @module jtr
 * @category unknown
 * @label unknown
 * @position 1381 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (jtr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var jtr = T((d9c, e$n) => {
  var Szs = Ae("util").inherits,
    $tr = Dg().Transform,
    wzs = Trt(),
    ZUn = Utr(),
    L6 = (e$n.exports = function (t) {
      if (!(this instanceof L6)) return new L6(t);
      ($tr.call(this, t), (this.offset = 0), (this._archive = { finish: !1, finished: !1, processing: !1 }));
    });
  Szs(L6, $tr);
  L6.prototype._appendBuffer = function (t, e, r) {};
  L6.prototype._appendStream = function (t, e, r) {};
  L6.prototype._emitErrorCallback = function (t) {
    t && this.emit("error", t);
  };
  L6.prototype._finish = function (t) {};
  L6.prototype._normalizeEntry = function (t) {};
  L6.prototype._transform = function (t, e, r) {
    r(null, t);
  };
  L6.prototype.entry = function (t, e, r) {
    if (((e = e || null), typeof r != "function" && (r = this._emitErrorCallback.bind(this)), !(t instanceof wzs))) {
      r(new Error("not a valid instance of ArchiveEntry"));
      return;
    }
    if (this._archive.finish || this._archive.finished) {
      r(new Error("unacceptable entry after finish"));
      return;
    }
    if (this._archive.processing) {
      r(new Error("already processing an entry"));
      return;
    }
    if (
      ((this._archive.processing = !0),
      this._normalizeEntry(t),
      (this._entry = t),
      (e = ZUn.normalizeInputSource(e)),
      Buffer.isBuffer(e))
    )
      this._appendBuffer(t, e, r);
    else if (ZUn.isStream(e)) this._appendStream(t, e, r);
    else {
      ((this._archive.processing = !1), r(new Error("input source must be valid Stream or Buffer instance")));
      return;
    }
    return this;
  };
  L6.prototype.finish = function () {
    if (this._archive.processing) {
      this._archive.finish = !0;
      return;
    }
    this._finish();
  };
  L6.prototype.getBytesWritten = function () {
    return this.offset;
  };
  L6.prototype.write = function (t, e) {
    return (t && (this.offset += t.length), $tr.prototype.write.call(this, t, e));
  };
});