/**
 * @module GHr
 * @category utils/oop
 * @label oop
 * @position 181 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (GHr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var GHr = T((ZNe) => {
  "use strict";
  Object.defineProperty(ZNe, "__esModule", { value: !0 });
  ZNe.Buckets = void 0;
  var Kvt = class t {
    backing;
    indexBase;
    indexStart;
    indexEnd;
    constructor(e = new Jvt(), r = 0, n = 0, o = 0) {
      ((this.backing = e), (this.indexBase = r), (this.indexStart = n), (this.indexEnd = o));
    }
    get offset() {
      return this.indexStart;
    }
    get length() {
      return this.backing.length === 0 || (this.indexEnd === this.indexStart && this.at(0) === 0)
        ? 0
        : this.indexEnd - this.indexStart + 1;
    }
    counts() {
      return Array.from({ length: this.length }, (e, r) => this.at(r));
    }
    at(e) {
      let r = this.indexBase - this.indexStart;
      return (e < r && (e += this.backing.length), (e -= r), this.backing.countAt(e));
    }
    incrementBucket(e, r) {
      this.backing.increment(e, r);
    }
    decrementBucket(e, r) {
      this.backing.decrement(e, r);
    }
    trim() {
      for (let e = 0; e < this.length; e++)
        if (this.at(e) !== 0) {
          this.indexStart += e;
          break;
        } else if (e === this.length - 1) {
          this.indexStart = this.indexEnd = this.indexBase = 0;
          return;
        }
      for (let e = this.length - 1; e >= 0; e--)
        if (this.at(e) !== 0) {
          this.indexEnd -= this.length - e - 1;
          break;
        }
      this._rotate();
    }
    downscale(e) {
      this._rotate();
      let r = 1 + this.indexEnd - this.indexStart,
        n = 1 << e,
        o = 0,
        s = 0;
      for (let a = this.indexStart; a <= this.indexEnd; ) {
        let u = a % n;
        u < 0 && (u += n);
        for (let c = u; c < n && o < r; c++) (this._relocateBucket(s, o), o++, a++);
        s++;
      }
      ((this.indexStart >>= e), (this.indexEnd >>= e), (this.indexBase = this.indexStart));
    }
    clone() {
      return new t(this.backing.clone(), this.indexBase, this.indexStart, this.indexEnd);
    }
    _rotate() {
      let e = this.indexBase - this.indexStart;
      e !== 0 &&
        (e > 0
          ? (this.backing.reverse(0, this.backing.length),
            this.backing.reverse(0, e),
            this.backing.reverse(e, this.backing.length))
          : (this.backing.reverse(0, this.backing.length), this.backing.reverse(0, this.backing.length + e)),
        (this.indexBase = this.indexStart));
    }
    _relocateBucket(e, r) {
      e !== r && this.incrementBucket(e, this.backing.emptyBucket(r));
    }
  };
  ZNe.Buckets = Kvt;
  var Jvt = class t {
    _counts;
    constructor(e = [0]) {
      this._counts = e;
    }
    get length() {
      return this._counts.length;
    }
    countAt(e) {
      return this._counts[e];
    }
    growTo(e, r, n) {
      let o = new Array(e).fill(0);
      (o.splice(n, this._counts.length - r, ...this._counts.slice(r)),
        o.splice(0, r, ...this._counts.slice(0, r)),
        (this._counts = o));
    }
    reverse(e, r) {
      let n = Math.floor((e + r) / 2) - e;
      for (let o = 0; o < n; o++) {
        let s = this._counts[e + o];
        ((this._counts[e + o] = this._counts[r - o - 1]), (this._counts[r - o - 1] = s));
      }
    }
    emptyBucket(e) {
      let r = this._counts[e];
      return ((this._counts[e] = 0), r);
    }
    increment(e, r) {
      this._counts[e] += r;
    }
    decrement(e, r) {
      this._counts[e] >= r ? (this._counts[e] -= r) : (this._counts[e] = 0);
    }
    clone() {
      return new t([...this._counts]);
    }
  };
});