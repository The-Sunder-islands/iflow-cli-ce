/**
 * @module ytn
 * @category utils/oop
 * @label oop
 * @position 513 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ytn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ytn = T((YUe) => {
  "use strict";
  Object.defineProperty(YUe, "__esModule", { value: !0 });
  YUe.StatusBuilder = void 0;
  var uIt = class {
    constructor() {
      ((this.code = null), (this.details = null), (this.metadata = null));
    }
    withCode(e) {
      return ((this.code = e), this);
    }
    withDetails(e) {
      return ((this.details = e), this);
    }
    withMetadata(e) {
      return ((this.metadata = e), this);
    }
    build() {
      let e = {};
      return (
        this.code !== null && (e.code = this.code),
        this.details !== null && (e.details = this.details),
        this.metadata !== null && (e.metadata = this.metadata),
        e
      );
    }
  };
  YUe.StatusBuilder = uIt;
});