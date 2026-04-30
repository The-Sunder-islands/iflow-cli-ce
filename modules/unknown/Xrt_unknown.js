/**
 * @module Xrt
 * @category unknown
 * @label unknown
 * @position 1425 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Xrt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Xrt = T((E6c, YQn) => {
  var KJs = lEe();
  YQn.exports = function (t, e) {
    for (var r; !r && t && t.length; ) {
      var n = KJs.parse(t)
        .word16lu("signature")
        .word16lu("partsize")
        .word64lu("uncompressedSize")
        .word64lu("compressedSize")
        .word64lu("offset")
        .word64lu("disknum").vars;
      n.signature === 1 ? (r = n) : (t = t.slice(n.partsize + 4));
    }
    return (
      (r = r || {}),
      e.compressedSize === 4294967295 && (e.compressedSize = r.compressedSize),
      e.uncompressedSize === 4294967295 && (e.uncompressedSize = r.uncompressedSize),
      e.offsetToLocalFileHeader === 4294967295 && (e.offsetToLocalFileHeader = r.offset),
      r
    );
  };
});