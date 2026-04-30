/**
 * @module yHr
 * @category utils/oop
 * @label oop
 * @position 164 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (yHr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var yHr = T((IRu, AHr) => {
  "use strict";
  AHr.exports = $G;
  var bHr = QNe();
  ($G.prototype = Object.create(bHr.prototype)).constructor = $G;
  var gHr = _x();
  function $G(t) {
    bHr.call(this, t);
  }
  $G._configure = function () {
    gHr.Buffer && ($G.prototype._slice = gHr.Buffer.prototype.slice);
  };
  $G.prototype.string = function () {
    var e = this.uint32();
    return this.buf.utf8Slice
      ? this.buf.utf8Slice(this.pos, (this.pos = Math.min(this.pos + e, this.len)))
      : this.buf.toString("utf-8", this.pos, (this.pos = Math.min(this.pos + e, this.len)));
  };
  $G._configure();
});