/**
 * @module yKn
 * @category app/core
 * @label iflow-core
 * @position 1486 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (yKn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 *
 * === Auto-analyzed semantic info ===
 * Classes: class bKn
 * Features: esbuild module exports: yKn
 * === End semantic info ===
 */


var yKn = T((wvc, AKn) => {
  "use strict";
  var { parseHeaders: _sr } = ks(),
    { InvalidArgumentError: ssa } = da(),
    Esr = Symbol("resume"),
    vsr = class {
      #e = !1;
      #t = null;
      #r = !1;
      #n;
      [Esr] = null;
      constructor(e) {
        this.#n = e;
      }
      pause() {
        this.#e = !0;
      }
      resume() {
        this.#e && ((this.#e = !1), this[Esr]?.());
      }
      abort(e) {
        this.#r || ((this.#r = !0), (this.#t = e), this.#n(e));
      }
      get aborted() {
        return this.#r;
      }
      get reason() {
        return this.#t;
      }
      get paused() {
        return this.#e;
      }
    };
  AKn.exports = class bKn {
    #e;
    #t;
    constructor(e) {
      this.#e = e;
    }
    static unwrap(e) {
      return e.onRequestStart ? new bKn(e) : e;
    }
    onConnect(e, r) {
      ((this.#t = new vsr(e)), this.#e.onRequestStart?.(this.#t, r));
    }
    onUpgrade(e, r, n) {
      this.#e.onRequestUpgrade?.(this.#t, e, _sr(r), n);
    }
    onHeaders(e, r, n, o) {
      return ((this.#t[Esr] = n), this.#e.onResponseStart?.(this.#t, e, _sr(r), o), !this.#t.paused);
    }
    onData(e) {
      return (this.#e.onResponseData?.(this.#t, e), !this.#t.paused);
    }
    onComplete(e) {
      this.#e.onResponseEnd?.(this.#t, _sr(e));
    }
    onError(e) {
      if (!this.#e.onResponseError) throw new ssa("invalid onError method");
      this.#e.onResponseError?.(this.#t, e);
    }
  };
});