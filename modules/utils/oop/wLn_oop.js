/**
 * @module wLn
 * @category utils/oop
 * @label oop
 * @position 1333 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (wLn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var wLn = T((l8c, aer) => {
  "use strict";
  function Ujs(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }
  var SLn = R_e().Buffer,
    k_e = Ae("util");
  function $js(t, e, r) {
    t.copy(e, r);
  }
  aer.exports = (function () {
    function t() {
      (Ujs(this, t), (this.head = null), (this.tail = null), (this.length = 0));
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
        if (this.length === 0) return SLn.alloc(0);
        for (var n = SLn.allocUnsafe(r >>> 0), o = this.head, s = 0; o; )
          ($js(o.data, n, s), (s += o.data.length), (o = o.next));
        return n;
      }),
      t
    );
  })();
  k_e &&
    k_e.inspect &&
    k_e.inspect.custom &&
    (aer.exports.prototype[k_e.inspect.custom] = function () {
      var t = k_e.inspect({ length: this.length });
      return this.constructor.name + " " + t;
    });
});