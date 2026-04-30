/**
 * @module Cer
 * @category utils/oop
 * @label oop
 * @position 1339 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Cer) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Cer = T((b8c, tMn) => {
  "use strict";
  tMn.exports = aO;
  var Ktt = PW(),
    eMn = Object.create(z0());
  eMn.inherits = qo();
  eMn.inherits(aO, Ktt);
  function QQs(t, e) {
    var r = this._transformState;
    r.transforming = !1;
    var n = r.writecb;
    if (!n) return this.emit("error", new Error("write callback called multiple times"));
    ((r.writechunk = null), (r.writecb = null), e != null && this.push(e), n(t));
    var o = this._readableState;
    ((o.reading = !1), (o.needReadable || o.length < o.highWaterMark) && this._read(o.highWaterMark));
  }
  function aO(t) {
    if (!(this instanceof aO)) return new aO(t);
    (Ktt.call(this, t),
      (this._transformState = {
        afterTransform: QQs.bind(this),
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
      this.on("prefinish", GQs));
  }
  function GQs() {
    var t = this;
    typeof this._flush == "function"
      ? this._flush(function (e, r) {
          ZLn(t, e, r);
        })
      : ZLn(this, null, null);
  }
  aO.prototype.push = function (t, e) {
    return ((this._transformState.needTransform = !1), Ktt.prototype.push.call(this, t, e));
  };
  aO.prototype._transform = function (t, e, r) {
    throw new Error("_transform() is not implemented");
  };
  aO.prototype._write = function (t, e, r) {
    var n = this._transformState;
    if (((n.writecb = r), (n.writechunk = t), (n.writeencoding = e), !n.transforming)) {
      var o = this._readableState;
      (n.needTransform || o.needReadable || o.length < o.highWaterMark) && this._read(o.highWaterMark);
    }
  };
  aO.prototype._read = function (t) {
    var e = this._transformState;
    e.writechunk !== null && e.writecb && !e.transforming
      ? ((e.transforming = !0), this._transform(e.writechunk, e.writeencoding, e.afterTransform))
      : (e.needTransform = !0);
  };
  aO.prototype._destroy = function (t, e) {
    var r = this;
    Ktt.prototype._destroy.call(this, t, function (n) {
      (e(n), r.emit("close"));
    });
  };
  function ZLn(t, e, r) {
    if (e) return t.emit("error", e);
    if ((r != null && t.push(r), t._writableState.length))
      throw new Error("Calling transform done when ws.length != 0");
    if (t._transformState.transforming) throw new Error("Calling transform done when still transforming");
    return t.push(null);
  }
});