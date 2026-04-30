/**
 * @module Btr
 * @category utils/oop
 * @label oop
 * @position 1376 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Btr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Btr = T((a9c, GUn) => {
  var FUn = Drt(),
    UUn = 8,
    $Un = 1,
    Azs = 4,
    yzs = 2,
    jUn = 64,
    QUn = 2048,
    Bg = (GUn.exports = function () {
      return this instanceof Bg
        ? ((this.descriptor = !1),
          (this.encryption = !1),
          (this.utf8 = !1),
          (this.numberOfShannonFanoTrees = 0),
          (this.strongEncryption = !1),
          (this.slidingDictionarySize = 0),
          this)
        : new Bg();
    });
  Bg.prototype.encode = function () {
    return FUn.getShortBytes(
      (this.descriptor ? UUn : 0) |
        (this.utf8 ? QUn : 0) |
        (this.encryption ? $Un : 0) |
        (this.strongEncryption ? jUn : 0),
    );
  };
  Bg.prototype.parse = function (t, e) {
    var r = FUn.getShortBytesValue(t, e),
      n = new Bg();
    return (
      n.useDataDescriptor((r & UUn) !== 0),
      n.useUTF8ForNames((r & QUn) !== 0),
      n.useStrongEncryption((r & jUn) !== 0),
      n.useEncryption((r & $Un) !== 0),
      n.setSlidingDictionarySize((r & yzs) !== 0 ? 8192 : 4096),
      n.setNumberOfShannonFanoTrees((r & Azs) !== 0 ? 3 : 2),
      n
    );
  };
  Bg.prototype.setNumberOfShannonFanoTrees = function (t) {
    this.numberOfShannonFanoTrees = t;
  };
  Bg.prototype.getNumberOfShannonFanoTrees = function () {
    return this.numberOfShannonFanoTrees;
  };
  Bg.prototype.setSlidingDictionarySize = function (t) {
    this.slidingDictionarySize = t;
  };
  Bg.prototype.getSlidingDictionarySize = function () {
    return this.slidingDictionarySize;
  };
  Bg.prototype.useDataDescriptor = function (t) {
    this.descriptor = t;
  };
  Bg.prototype.usesDataDescriptor = function () {
    return this.descriptor;
  };
  Bg.prototype.useEncryption = function (t) {
    this.encryption = t;
  };
  Bg.prototype.usesEncryption = function () {
    return this.encryption;
  };
  Bg.prototype.useStrongEncryption = function (t) {
    this.strongEncryption = t;
  };
  Bg.prototype.usesStrongEncryption = function () {
    return this.strongEncryption;
  };
  Bg.prototype.useUTF8ForNames = function (t) {
    this.utf8 = t;
  };
  Bg.prototype.usesUTF8ForNames = function () {
    return this.utf8;
  };
});