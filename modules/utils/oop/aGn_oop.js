/**
 * @module aGn
 * @category utils/oop
 * @label oop
 * @position 1431 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (aGn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var aGn = T((x6c, Zrr) => {
  "use strict";
  function iXs(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }
  var sGn = CEe().Buffer,
    SEe = Ae("util");
  function oXs(t, e, r) {
    t.copy(e, r);
  }
  Zrr.exports = (function () {
    function t() {
      (iXs(this, t), (this.head = null), (this.tail = null), (this.length = 0));
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
        if (this.length === 0) return sGn.alloc(0);
        for (var n = sGn.allocUnsafe(r >>> 0), o = this.head, s = 0; o; )
          (oXs(o.data, n, s), (s += o.data.length), (o = o.next));
        return n;
      }),
      t
    );
  })();
  SEe &&
    SEe.inspect &&
    SEe.inspect.custom &&
    (Zrr.exports.prototype[SEe.inspect.custom] = function () {
      var t = SEe.inspect({ length: this.length });
      return this.constructor.name + " " + t;
    });
});