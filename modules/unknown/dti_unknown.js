/**
 * @module dti
 * @category unknown
 * @label unknown
 * @position 1550 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (dti) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var dti = T(($Cc, mti) => {
  "use strict";
  var L1a = Ae("node:assert"),
    tcr = class {
      #e = !1;
      #t;
      #r;
      #n;
      #i;
      constructor(e, r, n) {
        if (typeof e != "function") throw new TypeError("callback must be a function");
        ((this.#t = e), (this.#r = r), (this.#i = n));
      }
      onRequestStart(e, r) {
        ((this.#e = !1), (this.#n = r));
      }
      onRequestUpgrade(e, r, n, o) {
        this.#r.onRequestUpgrade?.(e, r, n, o);
      }
      onResponseStart(e, r, n, o) {
        if (
          (L1a(this.#t != null),
          (this.#e = r === 304 || (this.#i && r >= 500 && r <= 504)),
          this.#t(this.#e, this.#n),
          (this.#t = null),
          this.#e)
        )
          return !0;
        (this.#r.onRequestStart?.(e, this.#n), this.#r.onResponseStart?.(e, r, n, o));
      }
      onResponseData(e, r) {
        if (!this.#e) return this.#r.onResponseData?.(e, r);
      }
      onResponseEnd(e, r) {
        this.#e || this.#r.onResponseEnd?.(e, r);
      }
      onResponseError(e, r) {
        if (!this.#e)
          if ((this.#t && (this.#t(!1), (this.#t = null)), typeof this.#r.onResponseError == "function"))
            this.#r.onResponseError(e, r);
          else throw r;
      }
    };
  mti.exports = tcr;
});