/**
 * @module GB
 * @category utils/oop
 * @label oop
 * @position 468 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (GB) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var GB = T((iMu, kZr) => {
  "use strict";
  kZr.exports = tg;
  tg.className = "ReflectionObject";
  var YFo = bq(),
    gbe = Bh(),
    nUe,
    KFo = {
      enum_type: "OPEN",
      field_presence: "EXPLICIT",
      json_format: "ALLOW",
      message_encoding: "LENGTH_PREFIXED",
      repeated_field_encoding: "PACKED",
      utf8_validation: "VERIFY",
    },
    JFo = {
      enum_type: "CLOSED",
      field_presence: "EXPLICIT",
      json_format: "LEGACY_BEST_EFFORT",
      message_encoding: "LENGTH_PREFIXED",
      repeated_field_encoding: "EXPANDED",
      utf8_validation: "NONE",
    },
    XFo = {
      enum_type: "OPEN",
      field_presence: "IMPLICIT",
      json_format: "ALLOW",
      message_encoding: "LENGTH_PREFIXED",
      repeated_field_encoding: "PACKED",
      utf8_validation: "VERIFY",
    };
  function tg(t, e) {
    if (!gbe.isString(t)) throw TypeError("name must be a string");
    if (e && !gbe.isObject(e)) throw TypeError("options must be an object");
    ((this.options = e),
      (this.parsedOptions = null),
      (this.name = t),
      (this._edition = null),
      (this._defaultEdition = "proto2"),
      (this._features = {}),
      (this._featuresResolved = !1),
      (this.parent = null),
      (this.resolved = !1),
      (this.comment = null),
      (this.filename = null));
  }
  Object.defineProperties(tg.prototype, {
    root: {
      get: function () {
        for (var t = this; t.parent !== null; ) t = t.parent;
        return t;
      },
    },
    fullName: {
      get: function () {
        for (var t = [this.name], e = this.parent; e; ) (t.unshift(e.name), (e = e.parent));
        return t.join(".");
      },
    },
  });
  tg.prototype.toJSON = function () {
    throw Error();
  };
  tg.prototype.onAdd = function (e) {
    (this.parent && this.parent !== e && this.parent.remove(this), (this.parent = e), (this.resolved = !1));
    var r = e.root;
    r instanceof nUe && r._handleAdd(this);
  };
  tg.prototype.onRemove = function (e) {
    var r = e.root;
    (r instanceof nUe && r._handleRemove(this), (this.parent = null), (this.resolved = !1));
  };
  tg.prototype.resolve = function () {
    return this.resolved ? this : (this.root instanceof nUe && (this.resolved = !0), this);
  };
  tg.prototype._resolveFeaturesRecursive = function (e) {
    return this._resolveFeatures(this._edition || e);
  };
  tg.prototype._resolveFeatures = function (e) {
    if (!this._featuresResolved) {
      var r = {};
      if (!e) throw new Error("Unknown edition for " + this.fullName);
      var n = Object.assign(
        this.options ? Object.assign({}, this.options.features) : {},
        this._inferLegacyProtoFeatures(e),
      );
      if (this._edition) {
        if (e === "proto2") r = Object.assign({}, JFo);
        else if (e === "proto3") r = Object.assign({}, XFo);
        else if (e === "2023") r = Object.assign({}, KFo);
        else throw new Error("Unknown edition: " + e);
        ((this._features = Object.assign(r, n || {})), (this._featuresResolved = !0));
        return;
      }
      if (this.partOf instanceof YFo) {
        var o = Object.assign({}, this.partOf._features);
        this._features = Object.assign(o, n || {});
      } else if (!this.declaringField)
        if (this.parent) {
          var s = Object.assign({}, this.parent._features);
          this._features = Object.assign(s, n || {});
        } else throw new Error("Unable to find a parent for " + this.fullName);
      (this.extensionField && (this.extensionField._features = this._features), (this._featuresResolved = !0));
    }
  };
  tg.prototype._inferLegacyProtoFeatures = function () {
    return {};
  };
  tg.prototype.getOption = function (e) {
    if (this.options) return this.options[e];
  };
  tg.prototype.setOption = function (e, r, n) {
    return (
      this.options || (this.options = {}),
      /^features\./.test(e)
        ? gbe.setProperty(this.options, e, r, n)
        : (!n || this.options[e] === void 0) &&
          (this.getOption(e) !== r && (this.resolved = !1), (this.options[e] = r)),
      this
    );
  };
  tg.prototype.setParsedOption = function (e, r, n) {
    this.parsedOptions || (this.parsedOptions = []);
    var o = this.parsedOptions;
    if (n) {
      var s = o.find(function (c) {
        return Object.prototype.hasOwnProperty.call(c, e);
      });
      if (s) {
        var a = s[e];
        gbe.setProperty(a, n, r);
      } else ((s = {}), (s[e] = gbe.setProperty({}, n, r)), o.push(s));
    } else {
      var u = {};
      ((u[e] = r), o.push(u));
    }
    return this;
  };
  tg.prototype.setOptions = function (e, r) {
    if (e) for (var n = Object.keys(e), o = 0; o < n.length; ++o) this.setOption(n[o], e[n[o]], r);
    return this;
  };
  tg.prototype.toString = function () {
    var e = this.constructor.className,
      r = this.fullName;
    return r.length ? e + " " + r : e;
  };
  tg.prototype._editionToJSON = function () {
    if (!(!this._edition || this._edition === "proto3")) return this._edition;
  };
  tg._configure = function (t) {
    nUe = t;
  };
});