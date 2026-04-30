/**
 * @module KVt
 * @category utils/oop
 * @label oop
 * @position 1034 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (KVt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var KVt = T((q3c, d4n) => {
  "use strict";
  var jCs = Nd();
  function m4n(t) {
    ((this.data = t), (this.length = t.length), (this.index = 0), (this.zero = 0));
  }
  m4n.prototype = {
    checkOffset: function (t) {
      this.checkIndex(this.index + t);
    },
    checkIndex: function (t) {
      if (this.length < this.zero + t || t < 0)
        throw new Error(
          "End of data reached (data length = " + this.length + ", asked index = " + t + "). Corrupted zip ?",
        );
    },
    setIndex: function (t) {
      (this.checkIndex(t), (this.index = t));
    },
    skip: function (t) {
      this.setIndex(this.index + t);
    },
    byteAt: function () {},
    readInt: function (t) {
      var e = 0,
        r;
      for (this.checkOffset(t), r = this.index + t - 1; r >= this.index; r--) e = (e << 8) + this.byteAt(r);
      return ((this.index += t), e);
    },
    readString: function (t) {
      return jCs.transformTo("string", this.readData(t));
    },
    readData: function () {},
    lastIndexOfSignature: function () {},
    readAndCheckSignature: function () {},
    readDate: function () {
      var t = this.readInt(4);
      return new Date(
        Date.UTC(
          ((t >> 25) & 127) + 1980,
          ((t >> 21) & 15) - 1,
          (t >> 16) & 31,
          (t >> 11) & 31,
          (t >> 5) & 63,
          (t & 31) << 1,
        ),
      );
    },
  };
  d4n.exports = m4n;
});