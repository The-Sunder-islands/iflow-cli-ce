/**
 * @module QB
 * @category utils/oop
 * @label oop
 * @position 466 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (QB) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var QB = T((rMu, TZr) => {
  "use strict";
  TZr.exports = Lh;
  var hbe = GB();
  ((Lh.prototype = Object.create(hbe.prototype)).constructor = Lh).className = "Field";
  var xZr = XC(),
    ATt = Aq(),
    Bf = Bh(),
    pbe,
    zFo = /^required|optional|repeated$/;
  Lh.fromJSON = function (e, r) {
    var n = new Lh(e, r.id, r.type, r.rule, r.extend, r.options, r.comment);
    return (r.edition && (n._edition = r.edition), (n._defaultEdition = "proto3"), n);
  };
  function Lh(t, e, r, n, o, s, a) {
    if (
      (Bf.isObject(n) ? ((a = o), (s = n), (n = o = void 0)) : Bf.isObject(o) && ((a = s), (s = o), (o = void 0)),
      hbe.call(this, t, s),
      !Bf.isInteger(e) || e < 0)
    )
      throw TypeError("id must be a non-negative integer");
    if (!Bf.isString(r)) throw TypeError("type must be a string");
    if (n !== void 0 && !zFo.test((n = n.toString().toLowerCase()))) throw TypeError("rule must be a string rule");
    if (o !== void 0 && !Bf.isString(o)) throw TypeError("extend must be a string");
    (n === "proto3_optional" && (n = "optional"),
      (this.rule = n && n !== "optional" ? n : void 0),
      (this.type = r),
      (this.id = e),
      (this.extend = o || void 0),
      (this.repeated = n === "repeated"),
      (this.map = !1),
      (this.message = null),
      (this.partOf = null),
      (this.typeDefault = null),
      (this.defaultValue = null),
      (this.long = Bf.Long ? ATt.long[r] !== void 0 : !1),
      (this.bytes = r === "bytes"),
      (this.resolvedType = null),
      (this.extensionField = null),
      (this.declaringField = null),
      (this.comment = a));
  }
  Object.defineProperty(Lh.prototype, "required", {
    get: function () {
      return this._features.field_presence === "LEGACY_REQUIRED";
    },
  });
  Object.defineProperty(Lh.prototype, "optional", {
    get: function () {
      return !this.required;
    },
  });
  Object.defineProperty(Lh.prototype, "delimited", {
    get: function () {
      return this.resolvedType instanceof pbe && this._features.message_encoding === "DELIMITED";
    },
  });
  Object.defineProperty(Lh.prototype, "packed", {
    get: function () {
      return this._features.repeated_field_encoding === "PACKED";
    },
  });
  Object.defineProperty(Lh.prototype, "hasPresence", {
    get: function () {
      return this.repeated || this.map
        ? !1
        : this.partOf || this.declaringField || this.extensionField || this._features.field_presence !== "IMPLICIT";
    },
  });
  Lh.prototype.setOption = function (e, r, n) {
    return hbe.prototype.setOption.call(this, e, r, n);
  };
  Lh.prototype.toJSON = function (e) {
    var r = e ? !!e.keepComments : !1;
    return Bf.toObject([
      "edition",
      this._editionToJSON(),
      "rule",
      (this.rule !== "optional" && this.rule) || void 0,
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
  Lh.prototype.resolve = function () {
    if (this.resolved) return this;
    if (
      ((this.typeDefault = ATt.defaults[this.type]) === void 0
        ? ((this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(
            this.type,
          )),
          this.resolvedType instanceof pbe
            ? (this.typeDefault = null)
            : (this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]))
        : this.options && this.options.proto3_optional && (this.typeDefault = null),
      this.options &&
        this.options.default != null &&
        ((this.typeDefault = this.options.default),
        this.resolvedType instanceof xZr &&
          typeof this.typeDefault == "string" &&
          (this.typeDefault = this.resolvedType.values[this.typeDefault])),
      this.options &&
        (this.options.packed !== void 0 &&
          this.resolvedType &&
          !(this.resolvedType instanceof xZr) &&
          delete this.options.packed,
        Object.keys(this.options).length || (this.options = void 0)),
      this.long)
    )
      ((this.typeDefault = Bf.Long.fromNumber(this.typeDefault, this.type.charAt(0) === "u")),
        Object.freeze && Object.freeze(this.typeDefault));
    else if (this.bytes && typeof this.typeDefault == "string") {
      var e;
      (Bf.base64.test(this.typeDefault)
        ? Bf.base64.decode(this.typeDefault, (e = Bf.newBuffer(Bf.base64.length(this.typeDefault))), 0)
        : Bf.utf8.write(this.typeDefault, (e = Bf.newBuffer(Bf.utf8.length(this.typeDefault))), 0),
        (this.typeDefault = e));
    }
    return (
      this.map
        ? (this.defaultValue = Bf.emptyObject)
        : this.repeated
          ? (this.defaultValue = Bf.emptyArray)
          : (this.defaultValue = this.typeDefault),
      this.parent instanceof pbe && (this.parent.ctor.prototype[this.name] = this.defaultValue),
      hbe.prototype.resolve.call(this)
    );
  };
  Lh.prototype._inferLegacyProtoFeatures = function (e) {
    if (e !== "proto2" && e !== "proto3") return {};
    var r = {};
    if (
      (this.rule === "required" && (r.field_presence = "LEGACY_REQUIRED"),
      this.parent && ATt.defaults[this.type] === void 0)
    ) {
      var n = this.parent.get(this.type.split(".").pop());
      n && n instanceof pbe && n.group && (r.message_encoding = "DELIMITED");
    }
    return (
      this.getOption("packed") === !0
        ? (r.repeated_field_encoding = "PACKED")
        : this.getOption("packed") === !1 && (r.repeated_field_encoding = "EXPANDED"),
      r
    );
  };
  Lh.prototype._resolveFeatures = function (e) {
    return hbe.prototype._resolveFeatures.call(this, this._edition || e);
  };
  Lh.d = function (e, r, n, o) {
    return (
      typeof r == "function"
        ? (r = Bf.decorateType(r).name)
        : r && typeof r == "object" && (r = Bf.decorateEnum(r).name),
      function (a, u) {
        Bf.decorateType(a.constructor).add(new Lh(u, e, r, n, { default: o }));
      }
    );
  };
  Lh._configure = function (e) {
    pbe = e;
  };
});