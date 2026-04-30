/**
 * @module Mtr
 * @category utils/compression
 * @label compression
 * @position 1379 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Mtr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Mtr = T((l9c, JUn) => {
  var _zs = Ae("util").inherits,
    Ezs = trt(),
    zUn = Trt(),
    YUn = Btr(),
    WUn = HUn(),
    M2 = Ltr(),
    KUn = Drt(),
    Ja = (JUn.exports = function (t) {
      if (!(this instanceof Ja)) return new Ja(t);
      (zUn.call(this),
        (this.platform = M2.PLATFORM_FAT),
        (this.method = -1),
        (this.name = null),
        (this.size = 0),
        (this.csize = 0),
        (this.gpb = new YUn()),
        (this.crc = 0),
        (this.time = -1),
        (this.minver = M2.MIN_VERSION_INITIAL),
        (this.mode = -1),
        (this.extra = null),
        (this.exattr = 0),
        (this.inattr = 0),
        (this.comment = null),
        t && this.setName(t));
    });
  _zs(Ja, zUn);
  Ja.prototype.getCentralDirectoryExtra = function () {
    return this.getExtra();
  };
  Ja.prototype.getComment = function () {
    return this.comment !== null ? this.comment : "";
  };
  Ja.prototype.getCompressedSize = function () {
    return this.csize;
  };
  Ja.prototype.getCrc = function () {
    return this.crc;
  };
  Ja.prototype.getExternalAttributes = function () {
    return this.exattr;
  };
  Ja.prototype.getExtra = function () {
    return this.extra !== null ? this.extra : M2.EMPTY;
  };
  Ja.prototype.getGeneralPurposeBit = function () {
    return this.gpb;
  };
  Ja.prototype.getInternalAttributes = function () {
    return this.inattr;
  };
  Ja.prototype.getLastModifiedDate = function () {
    return this.getTime();
  };
  Ja.prototype.getLocalFileDataExtra = function () {
    return this.getExtra();
  };
  Ja.prototype.getMethod = function () {
    return this.method;
  };
  Ja.prototype.getName = function () {
    return this.name;
  };
  Ja.prototype.getPlatform = function () {
    return this.platform;
  };
  Ja.prototype.getSize = function () {
    return this.size;
  };
  Ja.prototype.getTime = function () {
    return this.time !== -1 ? KUn.dosToDate(this.time) : -1;
  };
  Ja.prototype.getTimeDos = function () {
    return this.time !== -1 ? this.time : 0;
  };
  Ja.prototype.getUnixMode = function () {
    return this.platform !== M2.PLATFORM_UNIX ? 0 : (this.getExternalAttributes() >> M2.SHORT_SHIFT) & M2.SHORT_MASK;
  };
  Ja.prototype.getVersionNeededToExtract = function () {
    return this.minver;
  };
  Ja.prototype.setComment = function (t) {
    (Buffer.byteLength(t) !== t.length && this.getGeneralPurposeBit().useUTF8ForNames(!0), (this.comment = t));
  };
  Ja.prototype.setCompressedSize = function (t) {
    if (t < 0) throw new Error("invalid entry compressed size");
    this.csize = t;
  };
  Ja.prototype.setCrc = function (t) {
    if (t < 0) throw new Error("invalid entry crc32");
    this.crc = t;
  };
  Ja.prototype.setExternalAttributes = function (t) {
    this.exattr = t >>> 0;
  };
  Ja.prototype.setExtra = function (t) {
    this.extra = t;
  };
  Ja.prototype.setGeneralPurposeBit = function (t) {
    if (!(t instanceof YUn)) throw new Error("invalid entry GeneralPurposeBit");
    this.gpb = t;
  };
  Ja.prototype.setInternalAttributes = function (t) {
    this.inattr = t;
  };
  Ja.prototype.setMethod = function (t) {
    if (t < 0) throw new Error("invalid entry compression method");
    this.method = t;
  };
  Ja.prototype.setName = function (t, e = !1) {
    ((t = Ezs(t, !1)
      .replace(/^\w+:/, "")
      .replace(/^(\.\.\/|\/)+/, "")),
      e && (t = `/${t}`),
      Buffer.byteLength(t) !== t.length && this.getGeneralPurposeBit().useUTF8ForNames(!0),
      (this.name = t));
  };
  Ja.prototype.setPlatform = function (t) {
    this.platform = t;
  };
  Ja.prototype.setSize = function (t) {
    if (t < 0) throw new Error("invalid entry size");
    this.size = t;
  };
  Ja.prototype.setTime = function (t, e) {
    if (!(t instanceof Date)) throw new Error("invalid entry time");
    this.time = KUn.dateToDos(t, e);
  };
  Ja.prototype.setUnixMode = function (t) {
    t |= this.isDirectory() ? M2.S_IFDIR : M2.S_IFREG;
    var e = 0;
    ((e |= (t << M2.SHORT_SHIFT) | (this.isDirectory() ? M2.S_DOS_D : M2.S_DOS_A)),
      this.setExternalAttributes(e),
      (this.mode = t & M2.MODE_MASK),
      (this.platform = M2.PLATFORM_UNIX));
  };
  Ja.prototype.setVersionNeededToExtract = function (t) {
    this.minver = t;
  };
  Ja.prototype.isDirectory = function () {
    return this.getName().slice(-1) === "/";
  };
  Ja.prototype.isUnixSymlink = function () {
    return (this.getUnixMode() & WUn.FILE_TYPE_FLAG) === WUn.LINK_FLAG;
  };
  Ja.prototype.isZip64 = function () {
    return this.csize > M2.ZIP64_MAGIC || this.size > M2.ZIP64_MAGIC;
  };
});