/**
 * @module _yt
 * @category utils/oop
 * @label oop
 * @position 88 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (_yt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var _yt = T((K4u, JRr) => {
  var Uke = EG().Buffer,
    Eho = Ae("stream"),
    vho = Ae("util");
  function $ke(t) {
    if (((this.buffer = null), (this.writable = !0), (this.readable = !0), !t))
      return ((this.buffer = Uke.alloc(0)), this);
    if (typeof t.pipe == "function") return ((this.buffer = Uke.alloc(0)), t.pipe(this), this);
    if (t.length || typeof t == "object")
      return (
        (this.buffer = t),
        (this.writable = !1),
        process.nextTick(
          function () {
            (this.emit("end", t), (this.readable = !1), this.emit("close"));
          }.bind(this),
        ),
        this
      );
    throw new TypeError("Unexpected data type (" + typeof t + ")");
  }
  vho.inherits($ke, Eho);
  $ke.prototype.write = function (e) {
    ((this.buffer = Uke.concat([this.buffer, Uke.from(e)])), this.emit("data", e));
  };
  $ke.prototype.end = function (e) {
    (e && this.write(e), this.emit("end", e), this.emit("close"), (this.writable = !1), (this.readable = !1));
  };
  JRr.exports = $ke;
});