/**
 * @module k4n
 * @category utils/oop
 * @label oop
 * @position 1041 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (k4n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var k4n = T((J3c, R4n) => {
  "use strict";
  var t4s = tWt(),
    qk = Nd(),
    K4 = zVt(),
    r4s = D4n(),
    n4s = Fk();
  function I4n(t) {
    ((this.files = []), (this.loadOptions = t));
  }
  I4n.prototype = {
    checkSignature: function (t) {
      if (!this.reader.readAndCheckSignature(t)) {
        this.reader.index -= 4;
        var e = this.reader.readString(4);
        throw new Error(
          "Corrupted zip or bug: unexpected signature (" + qk.pretty(e) + ", expected " + qk.pretty(t) + ")",
        );
      }
    },
    isSignature: function (t, e) {
      var r = this.reader.index;
      this.reader.setIndex(t);
      var n = this.reader.readString(4),
        o = n === e;
      return (this.reader.setIndex(r), o);
    },
    readBlockEndOfCentral: function () {
      ((this.diskNumber = this.reader.readInt(2)),
        (this.diskWithCentralDirStart = this.reader.readInt(2)),
        (this.centralDirRecordsOnThisDisk = this.reader.readInt(2)),
        (this.centralDirRecords = this.reader.readInt(2)),
        (this.centralDirSize = this.reader.readInt(4)),
        (this.centralDirOffset = this.reader.readInt(4)),
        (this.zipCommentLength = this.reader.readInt(2)));
      var t = this.reader.readData(this.zipCommentLength),
        e = n4s.uint8array ? "uint8array" : "array",
        r = qk.transformTo(e, t);
      this.zipComment = this.loadOptions.decodeFileName(r);
    },
    readBlockZip64EndOfCentral: function () {
      ((this.zip64EndOfCentralSize = this.reader.readInt(8)),
        this.reader.skip(4),
        (this.diskNumber = this.reader.readInt(4)),
        (this.diskWithCentralDirStart = this.reader.readInt(4)),
        (this.centralDirRecordsOnThisDisk = this.reader.readInt(8)),
        (this.centralDirRecords = this.reader.readInt(8)),
        (this.centralDirSize = this.reader.readInt(8)),
        (this.centralDirOffset = this.reader.readInt(8)),
        (this.zip64ExtensibleData = {}));
      for (var t = this.zip64EndOfCentralSize - 44, e = 0, r, n, o; e < t; )
        ((r = this.reader.readInt(2)),
          (n = this.reader.readInt(4)),
          (o = this.reader.readData(n)),
          (this.zip64ExtensibleData[r] = { id: r, length: n, value: o }));
    },
    readBlockZip64EndOfCentralLocator: function () {
      if (
        ((this.diskWithZip64CentralDirStart = this.reader.readInt(4)),
        (this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8)),
        (this.disksCount = this.reader.readInt(4)),
        this.disksCount > 1)
      )
        throw new Error("Multi-volumes zip are not supported");
    },
    readLocalFiles: function () {
      var t, e;
      for (t = 0; t < this.files.length; t++)
        ((e = this.files[t]),
          this.reader.setIndex(e.localHeaderOffset),
          this.checkSignature(K4.LOCAL_FILE_HEADER),
          e.readLocalPart(this.reader),
          e.handleUTF8(),
          e.processAttributes());
    },
    readCentralDir: function () {
      var t;
      for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(K4.CENTRAL_FILE_HEADER); )
        ((t = new r4s({ zip64: this.zip64 }, this.loadOptions)), t.readCentralPart(this.reader), this.files.push(t));
      if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0)
        throw new Error(
          "Corrupted zip or bug: expected " +
            this.centralDirRecords +
            " records in central dir, got " +
            this.files.length,
        );
    },
    readEndOfCentral: function () {
      var t = this.reader.lastIndexOfSignature(K4.CENTRAL_DIRECTORY_END);
      if (t < 0) {
        var e = !this.isSignature(0, K4.LOCAL_FILE_HEADER);
        throw e
          ? new Error(
              "Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html",
            )
          : new Error("Corrupted zip: can't find end of central directory");
      }
      this.reader.setIndex(t);
      var r = t;
      if (
        (this.checkSignature(K4.CENTRAL_DIRECTORY_END),
        this.readBlockEndOfCentral(),
        this.diskNumber === qk.MAX_VALUE_16BITS ||
          this.diskWithCentralDirStart === qk.MAX_VALUE_16BITS ||
          this.centralDirRecordsOnThisDisk === qk.MAX_VALUE_16BITS ||
          this.centralDirRecords === qk.MAX_VALUE_16BITS ||
          this.centralDirSize === qk.MAX_VALUE_32BITS ||
          this.centralDirOffset === qk.MAX_VALUE_32BITS)
      ) {
        if (((this.zip64 = !0), (t = this.reader.lastIndexOfSignature(K4.ZIP64_CENTRAL_DIRECTORY_LOCATOR)), t < 0))
          throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
        if (
          (this.reader.setIndex(t),
          this.checkSignature(K4.ZIP64_CENTRAL_DIRECTORY_LOCATOR),
          this.readBlockZip64EndOfCentralLocator(),
          !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, K4.ZIP64_CENTRAL_DIRECTORY_END) &&
            ((this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(
              K4.ZIP64_CENTRAL_DIRECTORY_END,
            )),
            this.relativeOffsetEndOfZip64CentralDir < 0))
        )
          throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
        (this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),
          this.checkSignature(K4.ZIP64_CENTRAL_DIRECTORY_END),
          this.readBlockZip64EndOfCentral());
      }
      var n = this.centralDirOffset + this.centralDirSize;
      this.zip64 && ((n += 20), (n += 12 + this.zip64EndOfCentralSize));
      var o = r - n;
      if (o > 0) this.isSignature(r, K4.CENTRAL_FILE_HEADER) || (this.reader.zero = o);
      else if (o < 0) throw new Error("Corrupted zip: missing " + Math.abs(o) + " bytes.");
    },
    prepareReader: function (t) {
      this.reader = t4s(t);
    },
    load: function (t) {
      (this.prepareReader(t), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles());
    },
  };
  R4n.exports = I4n;
});