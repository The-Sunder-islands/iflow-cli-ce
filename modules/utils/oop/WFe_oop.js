/**
 * @module WFe
 * @category utils/oop
 * @label oop
 * @position 457 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (WFe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var WFe = T((WLu, mZr) => {
  "use strict";
  mZr.exports = zx;
  var SFo = _x();
  function zx(t) {
    if (t) for (var e = Object.keys(t), r = 0; r < e.length; ++r) this[e[r]] = t[e[r]];
  }
  zx.create = function (e) {
    return this.$type.create(e);
  };
  zx.encode = function (e, r) {
    return this.$type.encode(e, r);
  };
  zx.encodeDelimited = function (e, r) {
    return this.$type.encodeDelimited(e, r);
  };
  zx.decode = function (e) {
    return this.$type.decode(e);
  };
  zx.decodeDelimited = function (e) {
    return this.$type.decodeDelimited(e);
  };
  zx.verify = function (e) {
    return this.$type.verify(e);
  };
  zx.fromObject = function (e) {
    return this.$type.fromObject(e);
  };
  zx.toObject = function (e, r) {
    return this.$type.toObject(e, r);
  };
  zx.prototype.toJSON = function () {
    return this.$type.toObject(this, SFo.toJSONOptions);
  };
});