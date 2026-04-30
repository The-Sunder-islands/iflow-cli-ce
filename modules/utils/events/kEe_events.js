/**
 * @module kEe
 * @category utils/events
 * @label events
 * @position 1440 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (kEe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var kEe = T((B6c, bnr) => {
  "use strict";
  var gnr = QGn();
  function vce(t, e, r) {
    (typeof r > "u" && ((r = e), (e = t), (t = null)),
      gnr.Duplex.call(this, t),
      typeof r.read != "function" && (r = new gnr.Readable(t).wrap(r)),
      (this._writable = e),
      (this._readable = r),
      (this._waiting = !1));
    var n = this;
    (e.once("finish", function () {
      n.end();
    }),
      this.once("finish", function () {
        e.end();
      }),
      r.on("readable", function () {
        n._waiting && ((n._waiting = !1), n._read());
      }),
      r.once("end", function () {
        n.push(null);
      }),
      (!t || typeof t.bubbleErrors > "u" || t.bubbleErrors) &&
        (e.on("error", function (o) {
          n.emit("error", o);
        }),
        r.on("error", function (o) {
          n.emit("error", o);
        })));
  }
  vce.prototype = Object.create(gnr.Duplex.prototype, { constructor: { value: vce } });
  vce.prototype._write = function (e, r, n) {
    this._writable.write(e, r, n);
  };
  vce.prototype._read = function () {
    for (var e, r = 0; (e = this._readable.read()) !== null; ) (this.push(e), r++);
    r === 0 && (this._waiting = !0);
  };
  bnr.exports = function (e, r, n) {
    return new vce(e, r, n);
  };
  bnr.exports.DuplexWrapper = vce;
});