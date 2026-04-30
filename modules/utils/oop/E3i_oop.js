/**
 * @module E3i
 * @category utils/oop
 * @label oop
 * @position 1695 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (E3i) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var E3i = T((mGc, _3i) => {
  "use strict";
  _3i.exports = function (t, e, r) {
    var n = Z0(),
      o = AN().RangeError,
      s = AN().AggregateError,
      a = n.isArray,
      u = {};
    function c(d) {
      (this.constructor$(d), (this._howMany = 0), (this._unwrap = !1), (this._initialized = !1));
    }
    (n.inherits(c, e),
      (c.prototype._init = function () {
        if (this._initialized) {
          if (this._howMany === 0) {
            this._resolve([]);
            return;
          }
          this._init$(void 0, -5);
          var d = a(this._values);
          !this._isResolved() &&
            d &&
            this._howMany > this._canPossiblyFulfill() &&
            this._reject(this._getRangeError(this.length()));
        }
      }),
      (c.prototype.init = function () {
        ((this._initialized = !0), this._init());
      }),
      (c.prototype.setUnwrap = function () {
        this._unwrap = !0;
      }),
      (c.prototype.howMany = function () {
        return this._howMany;
      }),
      (c.prototype.setHowMany = function (d) {
        this._howMany = d;
      }),
      (c.prototype._promiseFulfilled = function (d) {
        return (
          this._addFulfilled(d),
          this._fulfilled() === this.howMany()
            ? ((this._values.length = this.howMany()),
              this.howMany() === 1 && this._unwrap ? this._resolve(this._values[0]) : this._resolve(this._values),
              !0)
            : !1
        );
      }),
      (c.prototype._promiseRejected = function (d) {
        return (this._addRejected(d), this._checkOutcome());
      }),
      (c.prototype._promiseCancelled = function () {
        return this._values instanceof t || this._values == null
          ? this._cancel()
          : (this._addRejected(u), this._checkOutcome());
      }),
      (c.prototype._checkOutcome = function () {
        if (this.howMany() > this._canPossiblyFulfill()) {
          for (var d = new s(), f = this.length(); f < this._values.length; ++f)
            this._values[f] !== u && d.push(this._values[f]);
          return (d.length > 0 ? this._reject(d) : this._cancel(), !0);
        }
        return !1;
      }),
      (c.prototype._fulfilled = function () {
        return this._totalResolved;
      }),
      (c.prototype._rejected = function () {
        return this._values.length - this.length();
      }),
      (c.prototype._addRejected = function (d) {
        this._values.push(d);
      }),
      (c.prototype._addFulfilled = function (d) {
        this._values[this._totalResolved++] = d;
      }),
      (c.prototype._canPossiblyFulfill = function () {
        return this.length() - this._rejected();
      }),
      (c.prototype._getRangeError = function (d) {
        var f = "Input array must contain at least " + this._howMany + " items but contains only " + d + " items";
        return new o(f);
      }),
      (c.prototype._resolveEmptyArray = function () {
        this._reject(this._getRangeError(0));
      }));
    function m(d, f) {
      if ((f | 0) !== f || f < 0)
        return r(`expecting a positive integer

    See http://goo.gl/MqrFmX
`);
      var p = new c(d),
        h = p.promise();
      return (p.setHowMany(f), p.init(), h);
    }
    ((t.some = function (d, f) {
      return m(d, f);
    }),
      (t.prototype.some = function (d) {
        return m(this, d);
      }),
      (t._SomePromiseArray = c));
  };
});