/**
 * @module g_n
 * @category utils/oop
 * @label oop
 * @position 967 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (g_n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var g_n = T((Rhc, h_n) => {
  "use strict";
  h_n.exports = function (t, e, r) {
    var n = t.PromiseInspection,
      o = C0();
    function s(a) {
      this.constructor$(a);
    }
    (o.inherits(s, e),
      (s.prototype._promiseResolved = function (a, u) {
        this._values[a] = u;
        var c = ++this._totalResolved;
        return c >= this._length ? (this._resolve(this._values), !0) : !1;
      }),
      (s.prototype._promiseFulfilled = function (a, u) {
        var c = new n();
        return ((c._bitField = 33554432), (c._settledValueField = a), this._promiseResolved(u, c));
      }),
      (s.prototype._promiseRejected = function (a, u) {
        var c = new n();
        return ((c._bitField = 16777216), (c._settledValueField = a), this._promiseResolved(u, c));
      }),
      (t.settle = function (a) {
        return (r.deprecated(".settle()", ".reflect()"), new s(a).promise());
      }),
      (t.prototype.settle = function () {
        return t.settle(this);
      }));
  };
});