/**
 * @module Aar
 * @category unknown
 * @label unknown
 * @position 1507 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Aar) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Aar = T((Yvc, tXn) => {
  "use strict";
  var tot = class {
    bottom = 0;
    top = 0;
    list = new Array(2048).fill(void 0);
    next = null;
    isEmpty() {
      return this.top === this.bottom;
    }
    isFull() {
      return ((this.top + 1) & 2047) === this.bottom;
    }
    push(e) {
      ((this.list[this.top] = e), (this.top = (this.top + 1) & 2047));
    }
    shift() {
      let e = this.list[this.bottom];
      return e === void 0 ? null : ((this.list[this.bottom] = void 0), (this.bottom = (this.bottom + 1) & 2047), e);
    }
  };
  tXn.exports = class {
    constructor() {
      this.head = this.tail = new tot();
    }
    isEmpty() {
      return this.head.isEmpty();
    }
    push(e) {
      (this.head.isFull() && (this.head = this.head.next = new tot()), this.head.push(e));
    }
    shift() {
      let e = this.tail,
        r = e.shift();
      return (e.isEmpty() && e.next !== null && ((this.tail = e.next), (e.next = null)), r);
    }
  };
});