/**
 * @module mTn
 * @category utils/oop
 * @label oop
 * @position 1108 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (mTn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var mTn = T((X4) => {
  X4.none = Object.create({
    value: function () {
      throw new Error("Called value on none");
    },
    isNone: function () {
      return !0;
    },
    isSome: function () {
      return !1;
    },
    map: function () {
      return X4.none;
    },
    flatMap: function () {
      return X4.none;
    },
    filter: function () {
      return X4.none;
    },
    toArray: function () {
      return [];
    },
    orElse: lTn,
    valueOrElse: lTn,
  });
  function lTn(t) {
    return typeof t == "function" ? t() : t;
  }
  X4.some = function (t) {
    return new O6(t);
  };
  var O6 = function (t) {
    this._value = t;
  };
  O6.prototype.value = function () {
    return this._value;
  };
  O6.prototype.isNone = function () {
    return !1;
  };
  O6.prototype.isSome = function () {
    return !0;
  };
  O6.prototype.map = function (t) {
    return new O6(t(this._value));
  };
  O6.prototype.flatMap = function (t) {
    return t(this._value);
  };
  O6.prototype.filter = function (t) {
    return t(this._value) ? this : X4.none;
  };
  O6.prototype.toArray = function () {
    return [this._value];
  };
  O6.prototype.orElse = function (t) {
    return this;
  };
  O6.prototype.valueOrElse = function (t) {
    return this._value;
  };
  X4.isOption = function (t) {
    return t === X4.none || t instanceof O6;
  };
  X4.fromNullable = function (t) {
    return t == null ? X4.none : new O6(t);
  };
});