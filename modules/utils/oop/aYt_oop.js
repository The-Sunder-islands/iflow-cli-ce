/**
 * @module aYt
 * @category utils/oop
 * @label oop
 * @position 1154 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (aYt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var aYt = T((Ybc, yIn) => {
  "use strict";
  yIn.exports = Xk;
  var YZe = gF().codes,
    AIs = YZe.ERR_METHOD_NOT_IMPLEMENTED,
    yIs = YZe.ERR_MULTIPLE_CALLBACK,
    _Is = YZe.ERR_TRANSFORM_ALREADY_TRANSFORMING,
    EIs = YZe.ERR_TRANSFORM_WITH_LENGTH_0,
    KZe = mW();
  qo()(Xk, KZe);
  function vIs(t, e) {
    var r = this._transformState;
    r.transforming = !1;
    var n = r.writecb;
    if (n === null) return this.emit("error", new yIs());
    ((r.writechunk = null), (r.writecb = null), e != null && this.push(e), n(t));
    var o = this._readableState;
    ((o.reading = !1), (o.needReadable || o.length < o.highWaterMark) && this._read(o.highWaterMark));
  }
  function Xk(t) {
    if (!(this instanceof Xk)) return new Xk(t);
    (KZe.call(this, t),
      (this._transformState = {
        afterTransform: vIs.bind(this),
        needTransform: !1,
        transforming: !1,
        writecb: null,
        writechunk: null,
        writeencoding: null,
      }),
      (this._readableState.needReadable = !0),
      (this._readableState.sync = !1),
      t &&
        (typeof t.transform == "function" && (this._transform = t.transform),
        typeof t.flush == "function" && (this._flush = t.flush)),
      this.on("prefinish", CIs));
  }
  function CIs() {
    var t = this;
    typeof this._flush == "function" && !this._readableState.destroyed
      ? this._flush(function (e, r) {
          AIn(t, e, r);
        })
      : AIn(this, null, null);
  }
  Xk.prototype.push = function (t, e) {
    return ((this._transformState.needTransform = !1), KZe.prototype.push.call(this, t, e));
  };
  Xk.prototype._transform = function (t, e, r) {
    r(new AIs("_transform()"));
  };
  Xk.prototype._write = function (t, e, r) {
    var n = this._transformState;
    if (((n.writecb = r), (n.writechunk = t), (n.writeencoding = e), !n.transforming)) {
      var o = this._readableState;
      (n.needTransform || o.needReadable || o.length < o.highWaterMark) && this._read(o.highWaterMark);
    }
  };
  Xk.prototype._read = function (t) {
    var e = this._transformState;
    e.writechunk !== null && !e.transforming
      ? ((e.transforming = !0), this._transform(e.writechunk, e.writeencoding, e.afterTransform))
      : (e.needTransform = !0);
  };
  Xk.prototype._destroy = function (t, e) {
    KZe.prototype._destroy.call(this, t, function (r) {
      e(r);
    });
  };
  function AIn(t, e, r) {
    if (e) return t.emit("error", e);
    if ((r != null && t.push(r), t._writableState.length)) throw new EIs();
    if (t._transformState.transforming) throw new _Is();
    return t.push(null);
  }
});