/**
 * @module kve
 * @category app/core
 * @label iflow-core
 * @position 1484 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (kve) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var kve = T((Cvc, hKn) => {
  "use strict";
  var { InvalidArgumentError: rsa } = da();
  hKn.exports = class pKn {
    #e;
    constructor(e) {
      this.#e = e;
    }
    static wrap(e) {
      return e.onRequestStart ? e : new pKn(e);
    }
    onConnect(e, r) {
      return this.#e.onConnect?.(e, r);
    }
    onHeaders(e, r, n, o) {
      return this.#e.onHeaders?.(e, r, n, o);
    }
    onUpgrade(e, r, n) {
      return this.#e.onUpgrade?.(e, r, n);
    }
    onData(e) {
      return this.#e.onData?.(e);
    }
    onComplete(e) {
      return this.#e.onComplete?.(e);
    }
    onError(e) {
      if (!this.#e.onError) throw e;
      return this.#e.onError?.(e);
    }
    onRequestStart(e, r) {
      this.#e.onConnect?.((n) => e.abort(n), r);
    }
    onRequestUpgrade(e, r, n, o) {
      let s = [];
      for (let [a, u] of Object.entries(n))
        s.push(Buffer.from(a), Array.isArray(u) ? u.map((c) => Buffer.from(c)) : Buffer.from(u));
      this.#e.onUpgrade?.(r, s, o);
    }
    onResponseStart(e, r, n, o) {
      let s = [];
      for (let [a, u] of Object.entries(n))
        s.push(Buffer.from(a), Array.isArray(u) ? u.map((c) => Buffer.from(c)) : Buffer.from(u));
      this.#e.onHeaders?.(r, s, () => e.resume(), o) === !1 && e.pause();
    }
    onResponseData(e, r) {
      this.#e.onData?.(r) === !1 && e.pause();
    }
    onResponseEnd(e, r) {
      let n = [];
      for (let [o, s] of Object.entries(r))
        n.push(Buffer.from(o), Array.isArray(s) ? s.map((a) => Buffer.from(a)) : Buffer.from(s));
      this.#e.onComplete?.(n);
    }
    onResponseError(e, r) {
      if (!this.#e.onError) throw new rsa("invalid onError method");
      this.#e.onError?.(r);
    }
  };
});