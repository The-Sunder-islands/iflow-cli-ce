/**
 * @module Xon
 * @category utils/oop
 * @label oop
 * @position 661 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Xon) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Xon = T((vQe) => {
  "use strict";
  Object.defineProperty(vQe, "__esModule", { value: !0 });
  vQe.Deferred = void 0;
  var vRt = class {
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
  vQe.Deferred = vRt;
});