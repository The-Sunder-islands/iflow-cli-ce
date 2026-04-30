/**
 * @module wle
 * @category unknown
 * @label unknown
 * @position 1539 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (wle) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var wle = T((ICc, Uei) => {
  "use strict";
  var UO = Ae("node:assert"),
    jda = kve();
  Uei.exports = class {
    #e;
    #t = !1;
    #r = !1;
    #n = !1;
    constructor(e) {
      if (typeof e != "object" || e === null) throw new TypeError("handler must be an object");
      this.#e = jda.wrap(e);
    }
    onRequestStart(...e) {
      this.#e.onRequestStart?.(...e);
    }
    onRequestUpgrade(...e) {
      return (UO(!this.#t), UO(!this.#r), this.#e.onRequestUpgrade?.(...e));
    }
    onResponseStart(...e) {
      return (UO(!this.#t), UO(!this.#r), UO(!this.#n), (this.#n = !0), this.#e.onResponseStart?.(...e));
    }
    onResponseData(...e) {
      return (UO(!this.#t), UO(!this.#r), this.#e.onResponseData?.(...e));
    }
    onResponseEnd(...e) {
      return (UO(!this.#t), UO(!this.#r), (this.#t = !0), this.#e.onResponseEnd?.(...e));
    }
    onResponseError(...e) {
      return ((this.#r = !0), this.#e.onResponseError?.(...e));
    }
    onBodySent() {}
  };
});