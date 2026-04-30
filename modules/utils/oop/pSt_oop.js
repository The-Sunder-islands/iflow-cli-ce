/**
 * @module pSt
 * @category utils/oop
 * @label oop
 * @position 351 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (pSt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var pSt = T((ure) => {
  "use strict";
  Object.defineProperty(ure, "__esModule", { value: !0 });
  ure.normalizeType = ure.normalizeArch = void 0;
  var SOo = (t) => {
    switch (t) {
      case "arm":
        return "arm32";
      case "ppc":
        return "ppc32";
      case "x64":
        return "amd64";
      default:
        return t;
    }
  };
  ure.normalizeArch = SOo;
  var wOo = (t) => {
    switch (t) {
      case "sunos":
        return "solaris";
      case "win32":
        return "windows";
      default:
        return t;
    }
  };
  ure.normalizeType = wOo;
});