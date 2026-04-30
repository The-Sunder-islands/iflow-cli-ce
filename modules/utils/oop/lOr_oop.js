/**
 * @module lOr
 * @category utils/oop
 * @label oop
 * @position 114 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (lOr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var lOr = T((mOe) => {
  "use strict";
  Object.defineProperty(mOe, "__esModule", { value: !0 });
  mOe.IAMAuth = void 0;
  var w_t = class {
    constructor(e, r) {
      ((this.selector = e), (this.token = r), (this.selector = e), (this.token = r));
    }
    getRequestHeaders() {
      return { "x-goog-iam-authority-selector": this.selector, "x-goog-iam-authorization-token": this.token };
    }
  };
  mOe.IAMAuth = w_t;
});