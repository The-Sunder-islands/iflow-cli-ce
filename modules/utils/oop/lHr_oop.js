/**
 * @module lHr
 * @category utils/oop
 * @label oop
 * @position 162 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (lHr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var lHr = T((TRu, cHr) => {
  "use strict";
  cHr.exports = Ex;
  var uHr = $Ne();
  (Ex.prototype = Object.create(uHr.prototype)).constructor = Ex;
  var RB = _x();
  function Ex() {
    uHr.call(this);
  }
  Ex._configure = function () {
    ((Ex.alloc = RB._Buffer_allocUnsafe),
      (Ex.writeBytesBuffer =
        RB.Buffer && RB.Buffer.prototype instanceof Uint8Array && RB.Buffer.prototype.set.name === "set"
          ? function (e, r, n) {
              r.set(e, n);
            }
          : function (e, r, n) {
              if (e.copy) e.copy(r, n, 0, e.length);
              else for (var o = 0; o < e.length; ) r[n++] = e[o++];
            }));
  };
  Ex.prototype.bytes = function (e) {
    RB.isString(e) && (e = RB._Buffer_from(e, "base64"));
    var r = e.length >>> 0;
    return (this.uint32(r), r && this._push(Ex.writeBytesBuffer, r, e), this);
  };
  function fxo(t, e, r) {
    t.length < 40 ? RB.utf8.write(t, e, r) : e.utf8Write ? e.utf8Write(t, r) : e.write(t, r);
  }
  Ex.prototype.string = function (e) {
    var r = RB.Buffer.byteLength(e);
    return (this.uint32(r), r && this._push(fxo, r, e), this);
  };
  Ex._configure();
});