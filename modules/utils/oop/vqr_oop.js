/**
 * @module vqr
 * @category utils/oop
 * @label oop
 * @position 149 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (vqr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var vqr = T((RNe) => {
  "use strict";
  Object.defineProperty(RNe, "__esModule", { value: !0 });
  RNe.Deferred = void 0;
  var Evt = class {
    _promise;
    _resolve;
    _reject;
    constructor() {
      this._promise = new Promise((e, r) => {
        ((this._resolve = e), (this._reject = r));
      });
    }
    get promise() {
      return this._promise;
    }
    resolve(e) {
      this._resolve(e);
    }
    reject(e) {
      this._reject(e);
    }
  };
  RNe.Deferred = Evt;
});