/**
 * @module D4n
 * @category utils/compression
 * @label compression
 * @position 1040 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (D4n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var D4n = T((K3c, T4n) => {
  "use strict";
  var rWt = tWt(),
    cF = Nd(),
    KCs = lXe(),
    w4n = cXe(),
    NXe = _ae(),
    PXe = WVt(),
    JCs = Fk(),
    XCs = 0,
    ZCs = 3,
    e4s = function (t) {
      for (var e in PXe) if (Object.prototype.hasOwnProperty.call(PXe, e) && PXe[e].magic === t) return PXe[e];
      return null;
    };
  function x4n(t, e) {
    ((this.options = t), (this.loadOptions = e));
  }
  x4n.prototype = {
    isEncrypted: function () {
      return (this.bitFlag & 1) === 1;
    },
    useUTF8: function () {
      return (this.bitFlag & 2048) === 2048;
    },
    readLocalPart: function (t) {
      var e, r;
      if (
        (t.skip(22),
        (this.fileNameLength = t.readInt(2)),
        (r = t.readInt(2)),
        (this.fileName = t.readData(this.fileNameLength)),
        t.skip(r),
        this.compressedSize === -1 || this.uncompressedSize === -1)
      )
        throw new Error(
          "Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)",
        );
      if (((e = e4s(this.compressionMethod)), e === null))
        throw new Error(
          "Corrupted zip : compression " +
            cF.pretty(this.compressionMethod) +
            " unknown (inner file : " +
            cF.transformTo("string", this.fileName) +
            ")",
        );
      this.decompressed = new KCs(
        this.compressedSize,
        this.uncompressedSize,
        this.crc32,
        e,
        t.readData(this.compressedSize),
      );
    },
    readCentralPart: function (t) {
      ((this.versionMadeBy = t.readInt(2)),
        t.skip(2),
        (this.bitFlag = t.readInt(2)),
        (this.compressionMethod = t.readString(2)),
        (this.date = t.readDate()),
        (this.crc32 = t.readInt(4)),
        (this.compressedSize = t.readInt(4)),
        (this.uncompressedSize = t.readInt(4)));
      var e = t.readInt(2);
      if (
        ((this.extraFieldsLength = t.readInt(2)),
        (this.fileCommentLength = t.readInt(2)),
        (this.diskNumberStart = t.readInt(2)),
        (this.internalFileAttributes = t.readInt(2)),
        (this.externalFileAttributes = t.readInt(4)),
        (this.localHeaderOffset = t.readInt(4)),
        this.isEncrypted())
      )
        throw new Error("Encrypted zip are not supported");
      (t.skip(e),
        this.readExtraFields(t),
        this.parseZIP64ExtraField(t),
        (this.fileComment = t.readData(this.fileCommentLength)));
    },
    processAttributes: function () {
      ((this.unixPermissions = null), (this.dosPermissions = null));
      var t = this.versionMadeBy >> 8;
      ((this.dir = !!(this.externalFileAttributes & 16)),
        t === XCs && (this.dosPermissions = this.externalFileAttributes & 63),
        t === ZCs && (this.unixPermissions = (this.externalFileAttributes >> 16) & 65535),
        !this.dir && this.fileNameStr.slice(-1) === "/" && (this.dir = !0));
    },
    parseZIP64ExtraField: function () {
      if (this.extraFields[1]) {
        var t = rWt(this.extraFields[1].value);
        (this.uncompressedSize === cF.MAX_VALUE_32BITS && (this.uncompressedSize = t.readInt(8)),
          this.compressedSize === cF.MAX_VALUE_32BITS && (this.compressedSize = t.readInt(8)),
          this.localHeaderOffset === cF.MAX_VALUE_32BITS && (this.localHeaderOffset = t.readInt(8)),
          this.diskNumberStart === cF.MAX_VALUE_32BITS && (this.diskNumberStart = t.readInt(4)));
      }
    },
    readExtraFields: function (t) {
      var e = t.index + this.extraFieldsLength,
        r,
        n,
        o;
      for (this.extraFields || (this.extraFields = {}); t.index + 4 < e; )
        ((r = t.readInt(2)),
          (n = t.readInt(2)),
          (o = t.readData(n)),
          (this.extraFields[r] = { id: r, length: n, value: o }));
      t.setIndex(e);
    },
    handleUTF8: function () {
      var t = JCs.uint8array ? "uint8array" : "array";
      if (this.useUTF8())
        ((this.fileNameStr = NXe.utf8decode(this.fileName)), (this.fileCommentStr = NXe.utf8decode(this.fileComment)));
      else {
        var e = this.findExtraFieldUnicodePath();
        if (e !== null) this.fileNameStr = e;
        else {
          var r = cF.transformTo(t, this.fileName);
          this.fileNameStr = this.loadOptions.decodeFileName(r);
        }
        var n = this.findExtraFieldUnicodeComment();
        if (n !== null) this.fileCommentStr = n;
        else {
          var o = cF.transformTo(t, this.fileComment);
          this.fileCommentStr = this.loadOptions.decodeFileName(o);
        }
      }
    },
    findExtraFieldUnicodePath: function () {
      var t = this.extraFields[28789];
      if (t) {
        var e = rWt(t.value);
        return e.readInt(1) !== 1 || w4n(this.fileName) !== e.readInt(4)
          ? null
          : NXe.utf8decode(e.readData(t.length - 5));
      }
      return null;
    },
    findExtraFieldUnicodeComment: function () {
      var t = this.extraFields[25461];
      if (t) {
        var e = rWt(t.value);
        return e.readInt(1) !== 1 || w4n(this.fileComment) !== e.readInt(4)
          ? null
          : NXe.utf8decode(e.readData(t.length - 5));
      }
      return null;
    },
  };
  T4n.exports = x4n;
});