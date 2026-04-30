/**
 * @module Zhi
 * @category utils/oop
 * @label oop
 * @position 1684 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Zhi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Zhi = T((eGc, Xhi) => {
  "use strict";
  Xhi.exports = function (t) {
    function e(c) {
      c !== void 0
        ? ((c = c._target()),
          (this._bitField = c._bitField),
          (this._settledValueField = c._isFateSealed() ? c._settledValue() : void 0))
        : ((this._bitField = 0), (this._settledValueField = void 0));
    }
    e.prototype._settledValue = function () {
      return this._settledValueField;
    };
    var r = (e.prototype.value = function () {
        if (!this.isFulfilled())
          throw new TypeError(`cannot get fulfillment value of a non-fulfilled promise

    See http://goo.gl/MqrFmX
`);
        return this._settledValue();
      }),
      n =
        (e.prototype.error =
        e.prototype.reason =
          function () {
            if (!this.isRejected())
              throw new TypeError(`cannot get rejection reason of a non-rejected promise

    See http://goo.gl/MqrFmX
`);
            return this._settledValue();
          }),
      o = (e.prototype.isFulfilled = function () {
        return (this._bitField & 33554432) !== 0;
      }),
      s = (e.prototype.isRejected = function () {
        return (this._bitField & 16777216) !== 0;
      }),
      a = (e.prototype.isPending = function () {
        return (this._bitField & 50397184) === 0;
      }),
      u = (e.prototype.isResolved = function () {
        return (this._bitField & 50331648) !== 0;
      });
    ((e.prototype.isCancelled = function () {
      return (this._bitField & 8454144) !== 0;
    }),
      (t.prototype.__isCancelled = function () {
        return (this._bitField & 65536) === 65536;
      }),
      (t.prototype._isCancelled = function () {
        return this._target().__isCancelled();
      }),
      (t.prototype.isCancelled = function () {
        return (this._target()._bitField & 8454144) !== 0;
      }),
      (t.prototype.isPending = function () {
        return a.call(this._target());
      }),
      (t.prototype.isRejected = function () {
        return s.call(this._target());
      }),
      (t.prototype.isFulfilled = function () {
        return o.call(this._target());
      }),
      (t.prototype.isResolved = function () {
        return u.call(this._target());
      }),
      (t.prototype.value = function () {
        return r.call(this._target());
      }),
      (t.prototype.reason = function () {
        var c = this._target();
        return (c._unsetRejectionIsUnhandled(), n.call(c));
      }),
      (t.prototype._value = function () {
        return this._settledValue();
      }),
      (t.prototype._reason = function () {
        return (this._unsetRejectionIsUnhandled(), this._settledValue());
      }),
      (t.PromiseInspection = e));
  };
});