/**
 * @module bZe
 * @category utils/oop
 * @label oop
 * @position 1109 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (bZe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var bZe = T((ebc, dTn) => {
  dTn.exports = {
    failure: function (t, e) {
      if (t.length < 1) throw new Error("Failure must have errors");
      return new Xb({ status: "failure", remaining: e, errors: t });
    },
    error: function (t, e) {
      if (t.length < 1) throw new Error("Failure must have errors");
      return new Xb({ status: "error", remaining: e, errors: t });
    },
    success: function (t, e, r) {
      return new Xb({ status: "success", value: t, source: r, remaining: e, errors: [] });
    },
    cut: function (t) {
      return new Xb({ status: "cut", remaining: t, errors: [] });
    },
  };
  var Xb = function (t) {
    ((this._value = t.value),
      (this._status = t.status),
      (this._hasValue = t.value !== void 0),
      (this._remaining = t.remaining),
      (this._source = t.source),
      (this._errors = t.errors));
  };
  Xb.prototype.map = function (t) {
    return this._hasValue
      ? new Xb({
          value: t(this._value, this._source),
          status: this._status,
          remaining: this._remaining,
          source: this._source,
          errors: this._errors,
        })
      : this;
  };
  Xb.prototype.changeRemaining = function (t) {
    return new Xb({
      value: this._value,
      status: this._status,
      remaining: t,
      source: this._source,
      errors: this._errors,
    });
  };
  Xb.prototype.isSuccess = function () {
    return this._status === "success" || this._status === "cut";
  };
  Xb.prototype.isFailure = function () {
    return this._status === "failure";
  };
  Xb.prototype.isError = function () {
    return this._status === "error";
  };
  Xb.prototype.isCut = function () {
    return this._status === "cut";
  };
  Xb.prototype.value = function () {
    return this._value;
  };
  Xb.prototype.remaining = function () {
    return this._remaining;
  };
  Xb.prototype.source = function () {
    return this._source;
  };
  Xb.prototype.errors = function () {
    return this._errors;
  };
});