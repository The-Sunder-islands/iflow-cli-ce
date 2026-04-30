/**
 * @module XXn
 * @category unknown
 * @label unknown
 * @position 1516 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (XXn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var XXn = T((iCc, JXn) => {
  "use strict";
  var M0a = Ove(),
    F0a = pot(),
    qar = class extends M0a {
      #e = null;
      #t = null;
      constructor(e, r = {}) {
        (super(r), (this.#e = e), (this.#t = r));
      }
      dispatch(e, r) {
        let n = new F0a({ ...e, retryOptions: this.#t }, { dispatch: this.#e.dispatch.bind(this.#e), handler: r });
        return this.#e.dispatch(e, n);
      }
      close() {
        return this.#e.close();
      }
      destroy() {
        return this.#e.destroy();
      }
    };
  JXn.exports = qar;
});