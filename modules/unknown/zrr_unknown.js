/**
 * @module zrr
 * @category unknown
 * @label unknown
 * @position 1419 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (zrr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var zrr = T((g6c, $Qn) => {
  "use strict";
  $Qn.exports = gO;
  var Vrt = XW(),
    UQn = Object.create(z0());
  UQn.inherits = qo();
  UQn.inherits(gO, Vrt);
  function GJs(t, e) {
    var r = this._transformState;
    r.transforming = !1;
    var n = r.writecb;
    if (!n) return this.emit("error", new Error("write callback called multiple times"));
    ((r.writechunk = null), (r.writecb = null), e != null && this.push(e), n(t));
    var o = this._readableState;
    ((o.reading = !1), (o.needReadable || o.length < o.highWaterMark) && this._read(o.highWaterMark));
  }
  function gO(t) {
    if (!(this instanceof gO)) return new gO(t);
    (Vrt.call(this, t),
      (this._transformState = {
        afterTransform: GJs.bind(this),
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
      this.on("prefinish", qJs));
  }
  function qJs() {
    var t = this;
    typeof this._flush == "function"
      ? this._flush(function (e, r) {
          FQn(t, e, r);
        })
      : FQn(this, null, null);
  }
  gO.prototype.push = function (t, e) {
    return ((this._transformState.needTransform = !1), Vrt.prototype.push.call(this, t, e));
  };
  gO.prototype._transform = function (t, e, r) {
    throw new Error("_transform() is not implemented");
  };
  gO.prototype._write = function (t, e, r) {
    var n = this._transformState;
    if (((n.writecb = r), (n.writechunk = t), (n.writeencoding = e), !n.transforming)) {
      var o = this._readableState;
      (n.needTransform || o.needReadable || o.length < o.highWaterMark) && this._read(o.highWaterMark);
    }
  };
  gO.prototype._read = function (t) {
    var e = this._transformState;
    e.writechunk !== null && e.writecb && !e.transforming
      ? ((e.transforming = !0), this._transform(e.writechunk, e.writeencoding, e.afterTransform))
      : (e.needTransform = !0);
  };
  gO.prototype._destroy = function (t, e) {
    var r = this;
    Vrt.prototype._destroy.call(this, t, function (n) {
      (e(n), r.emit("close"));
    });
  };
  function FQn(t, e, r) {
    if (e) return t.emit("error", e);
    if ((r != null && t.push(r), t._writableState.length))
      throw new Error("Calling transform done when ws.length != 0");
    if (t._transformState.transforming) throw new Error("Calling transform done when still transforming");
    return t.push(null);
  }
});