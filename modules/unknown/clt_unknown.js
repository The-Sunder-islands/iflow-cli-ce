/**
 * @module clt
 * @category unknown
 * @label unknown
 * @position 1631 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (clt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var clt = T((Zjc, ifi) => {
  var nfi = CSe();
  ifi.exports = function (t, e) {
    let r;
    for (; !r && t && t.length; ) {
      let n = nfi.parse(t, [
        ["signature", 2],
        ["partSize", 2],
      ]);
      if (n.signature === 1) {
        let o = [];
        (e.uncompressedSize === 4294967295 && o.push(["uncompressedSize", 8]),
          e.compressedSize === 4294967295 && o.push(["compressedSize", 8]),
          e.offsetToLocalFileHeader === 4294967295 && o.push(["offsetToLocalFileHeader", 8]),
          (r = nfi.parse(t.slice(4), o)));
      } else t = t.slice(n.partSize + 4);
    }
    return (
      (r = r || {}),
      e.compressedSize === 4294967295 && (e.compressedSize = r.compressedSize),
      e.uncompressedSize === 4294967295 && (e.uncompressedSize = r.uncompressedSize),
      e.offsetToLocalFileHeader === 4294967295 && (e.offsetToLocalFileHeader = r.offsetToLocalFileHeader),
      r
    );
  };
});