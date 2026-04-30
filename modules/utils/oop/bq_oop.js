/**
 * @module bq
 * @category utils/oop
 * @label oop
 * @position 467 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (bq) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var bq = T((nMu, RZr) => {
  "use strict";
  RZr.exports = m6;
  var rUe = GB();
  ((m6.prototype = Object.create(rUe.prototype)).constructor = m6).className = "OneOf";
  var DZr = QB(),
    tUe = Bh();
  function m6(t, e, r, n) {
    if ((Array.isArray(e) || ((r = e), (e = void 0)), rUe.call(this, t, r), !(e === void 0 || Array.isArray(e))))
      throw TypeError("fieldNames must be an Array");
    ((this.oneof = e || []), (this.fieldsArray = []), (this.comment = n));
  }
  m6.fromJSON = function (e, r) {
    return new m6(e, r.oneof, r.options, r.comment);
  };
  m6.prototype.toJSON = function (e) {
    var r = e ? !!e.keepComments : !1;
    return tUe.toObject(["options", this.options, "oneof", this.oneof, "comment", r ? this.comment : void 0]);
  };
  function IZr(t) {
    if (t.parent)
      for (var e = 0; e < t.fieldsArray.length; ++e) t.fieldsArray[e].parent || t.parent.add(t.fieldsArray[e]);
  }
  m6.prototype.add = function (e) {
    if (!(e instanceof DZr)) throw TypeError("field must be a Field");
    return (
      e.parent && e.parent !== this.parent && e.parent.remove(e),
      this.oneof.push(e.name),
      this.fieldsArray.push(e),
      (e.partOf = this),
      IZr(this),
      this
    );
  };
  m6.prototype.remove = function (e) {
    if (!(e instanceof DZr)) throw TypeError("field must be a Field");
    var r = this.fieldsArray.indexOf(e);
    if (r < 0) throw Error(e + " is not a member of " + this);
    return (
      this.fieldsArray.splice(r, 1),
      (r = this.oneof.indexOf(e.name)),
      r > -1 && this.oneof.splice(r, 1),
      (e.partOf = null),
      this
    );
  };
  m6.prototype.onAdd = function (e) {
    rUe.prototype.onAdd.call(this, e);
    for (var r = this, n = 0; n < this.oneof.length; ++n) {
      var o = e.get(this.oneof[n]);
      o && !o.partOf && ((o.partOf = r), r.fieldsArray.push(o));
    }
    IZr(this);
  };
  m6.prototype.onRemove = function (e) {
    for (var r = 0, n; r < this.fieldsArray.length; ++r) (n = this.fieldsArray[r]).parent && n.parent.remove(n);
    rUe.prototype.onRemove.call(this, e);
  };
  Object.defineProperty(m6.prototype, "isProto3Optional", {
    get: function () {
      if (this.fieldsArray == null || this.fieldsArray.length !== 1) return !1;
      var t = this.fieldsArray[0];
      return t.options != null && t.options.proto3_optional === !0;
    },
  });
  m6.d = function () {
    for (var e = new Array(arguments.length), r = 0; r < arguments.length; ) e[r] = arguments[r++];
    return function (o, s) {
      (tUe.decorateType(o.constructor).add(new m6(s, e)),
        Object.defineProperty(o, s, { get: tUe.oneOfGetter(e), set: tUe.oneOfSetter(e) }));
    };
  };
});