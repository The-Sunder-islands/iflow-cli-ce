/**
 * @module XC
 * @category utils/oop
 * @label oop
 * @position 469 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (XC) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var XC = T((oMu, NZr) => {
  "use strict";
  NZr.exports = ZC;
  var yTt = GB();
  ((ZC.prototype = Object.create(yTt.prototype)).constructor = ZC).className = "Enum";
  var OZr = Mre(),
    iUe = Bh();
  function ZC(t, e, r, n, o, s) {
    if ((yTt.call(this, t, r), e && typeof e != "object")) throw TypeError("values must be an object");
    if (
      ((this.valuesById = {}),
      (this.values = Object.create(this.valuesById)),
      (this.comment = n),
      (this.comments = o || {}),
      (this.valuesOptions = s),
      (this._valuesFeatures = {}),
      (this.reserved = void 0),
      e)
    )
      for (var a = Object.keys(e), u = 0; u < a.length; ++u)
        typeof e[a[u]] == "number" && (this.valuesById[(this.values[a[u]] = e[a[u]])] = a[u]);
  }
  ZC.prototype._resolveFeatures = function (e) {
    return (
      (e = this._edition || e),
      yTt.prototype._resolveFeatures.call(this, e),
      Object.keys(this.values).forEach((r) => {
        var n = Object.assign({}, this._features);
        this._valuesFeatures[r] = Object.assign(
          n,
          this.valuesOptions && this.valuesOptions[r] && this.valuesOptions[r].features,
        );
      }),
      this
    );
  };
  ZC.fromJSON = function (e, r) {
    var n = new ZC(e, r.values, r.options, r.comment, r.comments);
    return ((n.reserved = r.reserved), r.edition && (n._edition = r.edition), (n._defaultEdition = "proto3"), n);
  };
  ZC.prototype.toJSON = function (e) {
    var r = e ? !!e.keepComments : !1;
    return iUe.toObject([
      "edition",
      this._editionToJSON(),
      "options",
      this.options,
      "valuesOptions",
      this.valuesOptions,
      "values",
      this.values,
      "reserved",
      this.reserved && this.reserved.length ? this.reserved : void 0,
      "comment",
      r ? this.comment : void 0,
      "comments",
      r ? this.comments : void 0,
    ]);
  };
  ZC.prototype.add = function (e, r, n, o) {
    if (!iUe.isString(e)) throw TypeError("name must be a string");
    if (!iUe.isInteger(r)) throw TypeError("id must be an integer");
    if (this.values[e] !== void 0) throw Error("duplicate name '" + e + "' in " + this);
    if (this.isReservedId(r)) throw Error("id " + r + " is reserved in " + this);
    if (this.isReservedName(e)) throw Error("name '" + e + "' is reserved in " + this);
    if (this.valuesById[r] !== void 0) {
      if (!(this.options && this.options.allow_alias)) throw Error("duplicate id " + r + " in " + this);
      this.values[e] = r;
    } else this.valuesById[(this.values[e] = r)] = e;
    return (
      o && (this.valuesOptions === void 0 && (this.valuesOptions = {}), (this.valuesOptions[e] = o || null)),
      (this.comments[e] = n || null),
      this
    );
  };
  ZC.prototype.remove = function (e) {
    if (!iUe.isString(e)) throw TypeError("name must be a string");
    var r = this.values[e];
    if (r == null) throw Error("name '" + e + "' does not exist in " + this);
    return (
      delete this.valuesById[r],
      delete this.values[e],
      delete this.comments[e],
      this.valuesOptions && delete this.valuesOptions[e],
      this
    );
  };
  ZC.prototype.isReservedId = function (e) {
    return OZr.isReservedId(this.reserved, e);
  };
  ZC.prototype.isReservedName = function (e) {
    return OZr.isReservedName(this.reserved, e);
  };
});