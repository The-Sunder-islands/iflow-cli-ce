/**
 * @module pbi
 * @category utils/oop
 * @label oop
 * @position 1731 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (pbi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var pbi = T((Ihr) => {
  "use strict";
  Object.defineProperty(Ihr, "__esModule", { value: !0 });
  Ihr.splitStream = $Da;
  async function $Da(t) {
    return (typeof t.stream == "function" && (t = t.stream()), t.tee());
  }
});