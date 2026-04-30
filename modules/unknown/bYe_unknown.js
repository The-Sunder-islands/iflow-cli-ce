/**
 * @module bYe
 * @category unknown
 * @label unknown
 * @position 813 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (bYe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var bYe = T(($Ut) => {
  "use strict";
  Object.defineProperty($Ut, "__esModule", { value: !0 });
  var UUt = class extends Error {
    constructor(e) {
      (super("validation failed"), (this.errors = e), (this.ajv = this.validation = !0));
    }
  };
  $Ut.default = UUt;
});