/**
 * @module iVt
 * @category utils/compression
 * @label compression
 * @position 1009 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (iVt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var iVt = T((b3c, WEn) => {
  "use strict";
  var VEn = I6(),
    SEs = cXe(),
    wEs = Nd();
  function nVt() {
    (VEn.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0));
  }
  wEs.inherits(nVt, VEn);
  nVt.prototype.processChunk = function (t) {
    ((this.streamInfo.crc32 = SEs(t.data, this.streamInfo.crc32 || 0)), this.push(t));
  };
  WEn.exports = nVt;
});