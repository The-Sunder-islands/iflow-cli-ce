/**
 * @module Ktr
 * @category unknown
 * @label unknown
 * @position 1384 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Ktr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Ktr = T((b9c, u$n) => {
  "use strict";
  u$n.exports = { CRC32Stream: o$n(), DeflateCRC32Stream: a$n() };
});
var m$n = T((E9c, l$n) => {
  var kzs = Ae("util").inherits,
    Ozs = Htr(),
    { CRC32Stream: Nzs } = Ktr(),
    { DeflateCRC32Stream: Pzs } = Ktr(),
    c$n = jtr(),
    A9c = Mtr(),
    y9c = Btr(),
    ea = Ltr(),
    _9c = Utr(),
    wo = Drt(),
    Kh = (l$n.exports = function (t) {
      if (!(this instanceof Kh)) return new Kh(t);
      ((t = this.options = this._defaults(t)),
        c$n.call(this, t),
        (this._entry = null),
        (this._entries = []),
        (this._archive = {
          centralLength: 0,
          centralOffset: 0,
          comment: "",
          finish: !1,
          finished: !1,
          processing: !1,
          forceZip64: t.forceZip64,
          forceLocalTime: t.forceLocalTime,
        }));
    });
  kzs(Kh, c$n);
  Kh.prototype._afterAppend = function (t) {
    (this._entries.push(t),
      t.getGeneralPurposeBit().usesDataDescriptor() && this._writeDataDescriptor(t),
      (this._archive.processing = !1),
      (this._entry = null),
      this._archive.finish && !this._archive.finished && this._finish());
  };
  Kh.prototype._appendBuffer = function (t, e, r) {
    e.length === 0 && t.setMethod(ea.METHOD_STORED);
    var n = t.getMethod();
    if (
      (n === ea.METHOD_STORED && (t.setSize(e.length), t.setCompressedSize(e.length), t.setCrc(Ozs.unsigned(e))),
      this._writeLocalFileHeader(t),
      n === ea.METHOD_STORED)
    ) {
      (this.write(e), this._afterAppend(t), r(null, t));
      return;
    } else if (n === ea.METHOD_DEFLATED) {
      this._smartStream(t, r).end(e);
      return;
    } else {
      r(new Error("compression method " + n + " not implemented"));
      return;
    }
  };
  Kh.prototype._appendStream = function (t, e, r) {
    (t.getGeneralPurposeBit().useDataDescriptor(!0),
      t.setVersionNeededToExtract(ea.MIN_VERSION_DATA_DESCRIPTOR),
      this._writeLocalFileHeader(t));
    var n = this._smartStream(t, r);
    (e.once("error", function (o) {
      (n.emit("error", o), n.end());
    }),
      e.pipe(n));
  };
  Kh.prototype._defaults = function (t) {
    return (
      typeof t != "object" && (t = {}),
      typeof t.zlib != "object" && (t.zlib = {}),
      typeof t.zlib.level != "number" && (t.zlib.level = ea.ZLIB_BEST_SPEED),
      (t.forceZip64 = !!t.forceZip64),
      (t.forceLocalTime = !!t.forceLocalTime),
      t
    );
  };
  Kh.prototype._finish = function () {
    ((this._archive.centralOffset = this.offset),
      this._entries.forEach(
        function (t) {
          this._writeCentralFileHeader(t);
        }.bind(this),
      ),
      (this._archive.centralLength = this.offset - this._archive.centralOffset),
      this.isZip64() && this._writeCentralDirectoryZip64(),
      this._writeCentralDirectoryEnd(),
      (this._archive.processing = !1),
      (this._archive.finish = !0),
      (this._archive.finished = !0),
      this.end());
  };
  Kh.prototype._normalizeEntry = function (t) {
    (t.getMethod() === -1 && t.setMethod(ea.METHOD_DEFLATED),
      t.getMethod() === ea.METHOD_DEFLATED &&
        (t.getGeneralPurposeBit().useDataDescriptor(!0), t.setVersionNeededToExtract(ea.MIN_VERSION_DATA_DESCRIPTOR)),
      t.getTime() === -1 && t.setTime(new Date(), this._archive.forceLocalTime),
      (t._offsets = { file: 0, data: 0, contents: 0 }));
  };
  Kh.prototype._smartStream = function (t, e) {
    var r = t.getMethod() === ea.METHOD_DEFLATED,
      n = r ? new Pzs(this.options.zlib) : new Nzs(),
      o = null;
    function s() {
      var a = n.digest().readUInt32BE(0);
      (t.setCrc(a), t.setSize(n.size()), t.setCompressedSize(n.size(!0)), this._afterAppend(t), e(o, t));
    }
    return (
      n.once("end", s.bind(this)),
      n.once("error", function (a) {
        o = a;
      }),
      n.pipe(this, { end: !1 }),
      n
    );
  };
  Kh.prototype._writeCentralDirectoryEnd = function () {
    var t = this._entries.length,
      e = this._archive.centralLength,
      r = this._archive.centralOffset;
    (this.isZip64() && ((t = ea.ZIP64_MAGIC_SHORT), (e = ea.ZIP64_MAGIC), (r = ea.ZIP64_MAGIC)),
      this.write(wo.getLongBytes(ea.SIG_EOCD)),
      this.write(ea.SHORT_ZERO),
      this.write(ea.SHORT_ZERO),
      this.write(wo.getShortBytes(t)),
      this.write(wo.getShortBytes(t)),
      this.write(wo.getLongBytes(e)),
      this.write(wo.getLongBytes(r)));
    var n = this.getComment(),
      o = Buffer.byteLength(n);
    (this.write(wo.getShortBytes(o)), this.write(n));
  };
  Kh.prototype._writeCentralDirectoryZip64 = function () {
    (this.write(wo.getLongBytes(ea.SIG_ZIP64_EOCD)),
      this.write(wo.getEightBytes(44)),
      this.write(wo.getShortBytes(ea.MIN_VERSION_ZIP64)),
      this.write(wo.getShortBytes(ea.MIN_VERSION_ZIP64)),
      this.write(ea.LONG_ZERO),
      this.write(ea.LONG_ZERO),
      this.write(wo.getEightBytes(this._entries.length)),
      this.write(wo.getEightBytes(this._entries.length)),
      this.write(wo.getEightBytes(this._archive.centralLength)),
      this.write(wo.getEightBytes(this._archive.centralOffset)),
      this.write(wo.getLongBytes(ea.SIG_ZIP64_EOCD_LOC)),
      this.write(ea.LONG_ZERO),
      this.write(wo.getEightBytes(this._archive.centralOffset + this._archive.centralLength)),
      this.write(wo.getLongBytes(1)));
  };
  Kh.prototype._writeCentralFileHeader = function (t) {
    var e = t.getGeneralPurposeBit(),
      r = t.getMethod(),
      n = t._offsets,
      o = t.getSize(),
      s = t.getCompressedSize();
    if (t.isZip64() || n.file > ea.ZIP64_MAGIC) {
      ((o = ea.ZIP64_MAGIC), (s = ea.ZIP64_MAGIC), t.setVersionNeededToExtract(ea.MIN_VERSION_ZIP64));
      var a = Buffer.concat(
        [
          wo.getShortBytes(ea.ZIP64_EXTRA_ID),
          wo.getShortBytes(24),
          wo.getEightBytes(t.getSize()),
          wo.getEightBytes(t.getCompressedSize()),
          wo.getEightBytes(n.file),
        ],
        28,
      );
      t.setExtra(a);
    }
    (this.write(wo.getLongBytes(ea.SIG_CFH)),
      this.write(wo.getShortBytes((t.getPlatform() << 8) | ea.VERSION_MADEBY)),
      this.write(wo.getShortBytes(t.getVersionNeededToExtract())),
      this.write(e.encode()),
      this.write(wo.getShortBytes(r)),
      this.write(wo.getLongBytes(t.getTimeDos())),
      this.write(wo.getLongBytes(t.getCrc())),
      this.write(wo.getLongBytes(s)),
      this.write(wo.getLongBytes(o)));
    var u = t.getName(),
      c = t.getComment(),
      m = t.getCentralDirectoryExtra();
    (e.usesUTF8ForNames() && ((u = Buffer.from(u)), (c = Buffer.from(c))),
      this.write(wo.getShortBytes(u.length)),
      this.write(wo.getShortBytes(m.length)),
      this.write(wo.getShortBytes(c.length)),
      this.write(ea.SHORT_ZERO),
      this.write(wo.getShortBytes(t.getInternalAttributes())),
      this.write(wo.getLongBytes(t.getExternalAttributes())),
      n.file > ea.ZIP64_MAGIC ? this.write(wo.getLongBytes(ea.ZIP64_MAGIC)) : this.write(wo.getLongBytes(n.file)),
      this.write(u),
      this.write(m),
      this.write(c));
  };
  Kh.prototype._writeDataDescriptor = function (t) {
    (this.write(wo.getLongBytes(ea.SIG_DD)),
      this.write(wo.getLongBytes(t.getCrc())),
      t.isZip64()
        ? (this.write(wo.getEightBytes(t.getCompressedSize())), this.write(wo.getEightBytes(t.getSize())))
        : (this.write(wo.getLongBytes(t.getCompressedSize())), this.write(wo.getLongBytes(t.getSize()))));
  };
  Kh.prototype._writeLocalFileHeader = function (t) {
    var e = t.getGeneralPurposeBit(),
      r = t.getMethod(),
      n = t.getName(),
      o = t.getLocalFileDataExtra();
    (t.isZip64() && (e.useDataDescriptor(!0), t.setVersionNeededToExtract(ea.MIN_VERSION_ZIP64)),
      e.usesUTF8ForNames() && (n = Buffer.from(n)),
      (t._offsets.file = this.offset),
      this.write(wo.getLongBytes(ea.SIG_LFH)),
      this.write(wo.getShortBytes(t.getVersionNeededToExtract())),
      this.write(e.encode()),
      this.write(wo.getShortBytes(r)),
      this.write(wo.getLongBytes(t.getTimeDos())),
      (t._offsets.data = this.offset),
      e.usesDataDescriptor()
        ? (this.write(ea.LONG_ZERO), this.write(ea.LONG_ZERO), this.write(ea.LONG_ZERO))
        : (this.write(wo.getLongBytes(t.getCrc())),
          this.write(wo.getLongBytes(t.getCompressedSize())),
          this.write(wo.getLongBytes(t.getSize()))),
      this.write(wo.getShortBytes(n.length)),
      this.write(wo.getShortBytes(o.length)),
      this.write(n),
      this.write(o),
      (t._offsets.contents = this.offset));
  };
  Kh.prototype.getComment = function (t) {
    return this._archive.comment !== null ? this._archive.comment : "";
  };
  Kh.prototype.isZip64 = function () {
    return (
      this._archive.forceZip64 ||
      this._entries.length > ea.ZIP64_MAGIC_SHORT ||
      this._archive.centralLength > ea.ZIP64_MAGIC ||
      this._archive.centralOffset > ea.ZIP64_MAGIC
    );
  };
  Kh.prototype.setComment = function (t) {
    this._archive.comment = t;
  };
});