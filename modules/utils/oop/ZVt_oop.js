/**
 * @module ZVt
 * @category utils/oop
 * @label oop
 * @position 1037 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ZVt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ZVt = T((W3c, y4n) => {
  "use strict";
  var A4n = JVt(),
    qCs = Nd();
  function XVt(t) {
    A4n.call(this, t);
  }
  qCs.inherits(XVt, A4n);
  XVt.prototype.readData = function (t) {
    if ((this.checkOffset(t), t === 0)) return new Uint8Array(0);
    var e = this.data.subarray(this.zero + this.index, this.zero + this.index + t);
    return ((this.index += t), e);
  };
  y4n.exports = XVt;
});