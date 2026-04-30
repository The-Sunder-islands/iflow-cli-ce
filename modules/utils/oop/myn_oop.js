/**
 * @module myn
 * @category utils/oop
 * @label oop
 * @position 942 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (myn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var myn = T((ihc, lyn) => {
  "use strict";
  function V6s(t, e, r, n, o) {
    for (var s = 0; s < o; ++s) ((r[s + n] = t[s + e]), (t[s + e] = void 0));
  }
  function JM(t) {
    ((this._capacity = t), (this._length = 0), (this._front = 0));
  }
  JM.prototype._willBeOverCapacity = function (t) {
    return this._capacity < t;
  };
  JM.prototype._pushOne = function (t) {
    var e = this.length();
    this._checkCapacity(e + 1);
    var r = (this._front + e) & (this._capacity - 1);
    ((this[r] = t), (this._length = e + 1));
  };
  JM.prototype.push = function (t, e, r) {
    var n = this.length() + 3;
    if (this._willBeOverCapacity(n)) {
      (this._pushOne(t), this._pushOne(e), this._pushOne(r));
      return;
    }
    var o = this._front + n - 3;
    this._checkCapacity(n);
    var s = this._capacity - 1;
    ((this[(o + 0) & s] = t), (this[(o + 1) & s] = e), (this[(o + 2) & s] = r), (this._length = n));
  };
  JM.prototype.shift = function () {
    var t = this._front,
      e = this[t];
    return ((this[t] = void 0), (this._front = (t + 1) & (this._capacity - 1)), this._length--, e);
  };
  JM.prototype.length = function () {
    return this._length;
  };
  JM.prototype._checkCapacity = function (t) {
    this._capacity < t && this._resizeTo(this._capacity << 1);
  };
  JM.prototype._resizeTo = function (t) {
    var e = this._capacity;
    this._capacity = t;
    var r = this._front,
      n = this._length,
      o = (r + n) & (e - 1);
    V6s(this, 0, this, e, o);
  };
  lyn.exports = JM;
});