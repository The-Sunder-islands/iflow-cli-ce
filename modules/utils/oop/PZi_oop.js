/**
 * @module PZi
 * @category utils/oop
 * @label oop
 * @position 1922 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (PZi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var PZi = T((oxl, NZi) => {
  NZi.exports = OZi;
  function zJ(t, e) {
    if (typeof Object.setPrototypeOf == "function") return Object.setPrototypeOf(t, e);
    t.__proto__ = e;
  }
  function OZi() {
    this.list = [];
    var t = null;
    Object.defineProperty(this, "root", {
      get: function () {
        return t;
      },
      set: function (e) {
        ((t = e), this.list.length && zJ(this.list[this.list.length - 1], e));
      },
      enumerable: !0,
      configurable: !0,
    });
  }
  OZi.prototype = {
    get length() {
      return this.list.length;
    },
    get keys() {
      var t = [];
      for (var e in this.list[0]) t.push(e);
      return t;
    },
    get snapshot() {
      var t = {};
      return (
        this.keys.forEach(function (e) {
          t[e] = this.get(e);
        }, this),
        t
      );
    },
    get store() {
      return this.list[0];
    },
    push: function (t) {
      return (
        typeof t != "object" && (t = { valueOf: t }),
        this.list.length >= 1 && zJ(this.list[this.list.length - 1], t),
        zJ(t, this.root),
        this.list.push(t)
      );
    },
    pop: function () {
      return (this.list.length >= 2 && zJ(this.list[this.list.length - 2], this.root), this.list.pop());
    },
    unshift: function (t) {
      return (zJ(t, this.list[0] || this.root), this.list.unshift(t));
    },
    shift: function () {
      return (this.list.length === 1 && zJ(this.list[0], this.root), this.list.shift());
    },
    get: function (t) {
      return this.list[0][t];
    },
    set: function (t, e, r) {
      return (
        this.length || this.push({}),
        r && this.list[0].hasOwnProperty(t) && this.push({}),
        (this.list[0][t] = e)
      );
    },
    forEach: function (t, e) {
      for (var r in this.list[0]) t.call(e, r, this.list[0][r]);
    },
    slice: function () {
      return this.list.slice.apply(this.list, arguments);
    },
    splice: function () {
      for (var t = this.list.splice.apply(this.list, arguments), e = 0, r = this.list.length; e < r; e++)
        zJ(this.list[e], this.list[e + 1] || this.root);
      return t;
    },
  };
});