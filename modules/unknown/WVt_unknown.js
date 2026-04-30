/**
 * @module WVt
 * @category unknown
 * @label unknown
 * @position 1028 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (WVt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var WVt = T((VVt) => {
  "use strict";
  var VCn = I6();
  VVt.STORE = {
    magic: "\0\0",
    compressWorker: function () {
      return new VCn("STORE compression");
    },
    uncompressWorker: function () {
      return new VCn("STORE decompression");
    },
  };
  VVt.DEFLATE = HCn();
});