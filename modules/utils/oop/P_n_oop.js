/**
 * @module P_n
 * @category utils/oop
 * @label oop
 * @position 983 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (P_n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var P_n = T((Hhc, _Ht) => {
  "use strict";
  function Hys(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }
  var N_n = N6e().Buffer,
    P6e = Ae("util");
  function Vys(t, e, r) {
    t.copy(e, r);
  }
  _Ht.exports = (function () {
    function t() {
      (Hys(this, t), (this.head = null), (this.tail = null), (this.length = 0));
    }
    return (
      (t.prototype.push = function (r) {
        var n = { data: r, next: null };
        (this.length > 0 ? (this.tail.next = n) : (this.head = n), (this.tail = n), ++this.length);
      }),
      (t.prototype.unshift = function (r) {
        var n = { data: r, next: this.head };
        (this.length === 0 && (this.tail = n), (this.head = n), ++this.length);
      }),
      (t.prototype.shift = function () {
        if (this.length !== 0) {
          var r = this.head.data;
          return (this.length === 1 ? (this.head = this.tail = null) : (this.head = this.head.next), --this.length, r);
        }
      }),
      (t.prototype.clear = function () {
        ((this.head = this.tail = null), (this.length = 0));
      }),
      (t.prototype.join = function (r) {
        if (this.length === 0) return "";
        for (var n = this.head, o = "" + n.data; (n = n.next); ) o += r + n.data;
        return o;
      }),
      (t.prototype.concat = function (r) {
        if (this.length === 0) return N_n.alloc(0);
        for (var n = N_n.allocUnsafe(r >>> 0), o = this.head, s = 0; o; )
          (Vys(o.data, n, s), (s += o.data.length), (o = o.next));
        return n;
      }),
      t
    );
  })();
  P6e &&
    P6e.inspect &&
    P6e.inspect.custom &&
    (_Ht.exports.prototype[P6e.inspect.custom] = function () {
      var t = P6e.inspect({ length: this.length });
      return this.constructor.name + " " + t;
    });
});