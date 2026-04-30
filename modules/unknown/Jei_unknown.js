/**
 * @module Jei
 * @category unknown
 * @label unknown
 * @position 1544 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Jei) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Jei = T((PCc, Kei) => {
  "use strict";
  var { InvalidArgumentError: Kda, RequestAbortedError: Jda } = da(),
    Xda = wle(),
    Wur = class extends Xda {
      #e = 1024 * 1024;
      #t = !1;
      #r = 0;
      #n = null;
      aborted = !1;
      reason = !1;
      constructor({ maxSize: e, signal: r }, n) {
        if (e != null && (!Number.isFinite(e) || e < 1)) throw new Kda("maxSize must be a number greater than 0");
        (super(n), (this.#e = e ?? this.#e));
      }
      #i(e) {
        ((this.aborted = !0), (this.reason = e));
      }
      onRequestStart(e, r) {
        return ((e.abort = this.#i.bind(this)), (this.#n = e), super.onRequestStart(e, r));
      }
      onResponseStart(e, r, n, o) {
        let s = n["content-length"];
        if (s != null && s > this.#e) throw new Jda(`Response size (${s}) larger than maxSize (${this.#e})`);
        return this.aborted === !0 ? !0 : super.onResponseStart(e, r, n, o);
      }
      onResponseError(e, r) {
        this.#t || ((r = this.#n?.reason ?? r), super.onResponseError(e, r));
      }
      onResponseData(e, r) {
        return (
          (this.#r = this.#r + r.length),
          this.#r >= this.#e &&
            ((this.#t = !0), this.aborted === !0 ? super.onResponseError(e, this.reason) : super.onResponseEnd(e, {})),
          !0
        );
      }
      onResponseEnd(e, r) {
        if (!this.#t) {
          if (this.#n.aborted === !0) {
            super.onResponseError(e, this.reason);
            return;
          }
          super.onResponseEnd(e, r);
        }
      }
    };
  function Zda({ maxSize: t } = { maxSize: 1024 * 1024 }) {
    return (e) =>
      function (n, o) {
        let { dumpMaxSize: s = t } = n,
          a = new Wur({ maxSize: s, signal: n.signal }, o);
        return e(n, a);
      };
  }
  Kei.exports = Zda;
});