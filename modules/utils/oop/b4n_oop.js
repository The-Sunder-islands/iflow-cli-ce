/**
 * @module b4n
 * @category utils/oop
 * @label oop
 * @position 1036 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (b4n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var b4n = T((V3c, g4n) => {
  "use strict";
  var h4n = KVt(),
    GCs = Nd();
  function Bae(t) {
    h4n.call(this, t);
  }
  GCs.inherits(Bae, h4n);
  Bae.prototype.byteAt = function (t) {
    return this.data.charCodeAt(this.zero + t);
  };
  Bae.prototype.lastIndexOfSignature = function (t) {
    return this.data.lastIndexOf(t) - this.zero;
  };
  Bae.prototype.readAndCheckSignature = function (t) {
    var e = this.readData(4);
    return t === e;
  };
  Bae.prototype.readData = function (t) {
    this.checkOffset(t);
    var e = this.data.slice(this.zero + this.index, this.zero + this.index + t);
    return ((this.index += t), e);
  };
  g4n.exports = Bae;
});