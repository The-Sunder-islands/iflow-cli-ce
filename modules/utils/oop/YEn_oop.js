/**
 * @module YEn
 * @category utils/oop
 * @label oop
 * @position 1010 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (YEn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var YEn = T((A3c, zEn) => {
  "use strict";
  var xEs = Nd(),
    oVt = I6();
  function sVt(t) {
    (oVt.call(this, "DataLengthProbe for " + t), (this.propName = t), this.withStreamInfo(t, 0));
  }
  xEs.inherits(sVt, oVt);
  sVt.prototype.processChunk = function (t) {
    if (t) {
      var e = this.streamInfo[this.propName] || 0;
      this.streamInfo[this.propName] = e + t.data.length;
    }
    oVt.prototype.processChunk.call(this, t);
  };
  zEn.exports = sVt;
});