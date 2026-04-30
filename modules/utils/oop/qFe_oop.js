/**
 * @module qFe
 * @category utils/oop
 * @label oop
 * @position 454 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (qFe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var qFe = T((qLu, aZr) => {
  "use strict";
  aZr.exports = kR;
  var Xxt = QB();
  ((kR.prototype = Object.create(Xxt.prototype)).constructor = kR).className = "MapField";
  var vFo = Aq(),
    ube = Bh();
  function kR(t, e, r, n, o, s) {
    if ((Xxt.call(this, t, e, n, void 0, void 0, o, s), !ube.isString(r))) throw TypeError("keyType must be a string");
    ((this.keyType = r), (this.resolvedKeyType = null), (this.map = !0));
  }
  kR.fromJSON = function (e, r) {
    return new kR(e, r.id, r.keyType, r.type, r.options, r.comment);
  };
  kR.prototype.toJSON = function (e) {
    var r = e ? !!e.keepComments : !1;
    return ube.toObject([
      "keyType",
      this.keyType,
      "type",
      this.type,
      "id",
      this.id,
      "extend",
      this.extend,
      "options",
      this.options,
      "comment",
      r ? this.comment : void 0,
    ]);
  };
  kR.prototype.resolve = function () {
    if (this.resolved) return this;
    if (vFo.mapKey[this.keyType] === void 0) throw Error("invalid key type: " + this.keyType);
    return Xxt.prototype.resolve.call(this);
  };
  kR.d = function (e, r, n) {
    return (
      typeof n == "function"
        ? (n = ube.decorateType(n).name)
        : n && typeof n == "object" && (n = ube.decorateEnum(n).name),
      function (s, a) {
        ube.decorateType(s.constructor).add(new kR(a, e, r, n));
      }
    );
  };
});