/**
 * @module lXe
 * @category utils/compression
 * @label compression
 * @position 1011 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (lXe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var lXe = T((y3c, XEn) => {
  "use strict";
  var KEn = bae(),
    JEn = rVt(),
    TEs = iVt(),
    aVt = YEn();
  function uVt(t, e, r, n, o) {
    ((this.compressedSize = t),
      (this.uncompressedSize = e),
      (this.crc32 = r),
      (this.compression = n),
      (this.compressedContent = o));
  }
  uVt.prototype = {
    getContentWorker: function () {
      var t = new JEn(KEn.Promise.resolve(this.compressedContent))
          .pipe(this.compression.uncompressWorker())
          .pipe(new aVt("data_length")),
        e = this;
      return (
        t.on("end", function () {
          if (this.streamInfo.data_length !== e.uncompressedSize)
            throw new Error("Bug : uncompressed data size mismatch");
        }),
        t
      );
    },
    getCompressedWorker: function () {
      return new JEn(KEn.Promise.resolve(this.compressedContent))
        .withStreamInfo("compressedSize", this.compressedSize)
        .withStreamInfo("uncompressedSize", this.uncompressedSize)
        .withStreamInfo("crc32", this.crc32)
        .withStreamInfo("compression", this.compression);
    },
  };
  uVt.createWorkerFrom = function (t, e, r) {
    return t
      .pipe(new TEs())
      .pipe(new aVt("uncompressedSize"))
      .pipe(e.compressWorker(r))
      .pipe(new aVt("compressedSize"))
      .withStreamInfo("compression", e);
  };
  XEn.exports = uVt;
});