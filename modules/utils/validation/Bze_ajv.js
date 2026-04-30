/**
 * @module Bze
 * @category utils/validation
 * @label ajv
 * @position 745 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Bze) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Bze = T((XMt) => {
  "use strict";
  Object.defineProperty(XMt, "__esModule", { value: !0 });
  var JMt = class extends Error {
    constructor(e) {
      (super("validation failed"), (this.errors = e), (this.ajv = this.validation = !0));
    }
  };
  XMt.default = JMt;
});