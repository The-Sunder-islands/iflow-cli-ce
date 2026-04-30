/**
 * @module kRt
 * @category utils/oop
 * @label oop
 * @position 681 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (kRt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var kRt = T((wne) => {
  "use strict";
  Object.defineProperty(wne, "__esModule", { value: !0 });
  wne.normalizeType = wne.normalizeArch = void 0;
  var fXo = (t) => {
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
  wne.normalizeArch = fXo;
  var pXo = (t) => {
    switch (t) {
      case "sunos":
        return "solaris";
      case "win32":
        return "windows";
      default:
        return t;
    }
  };
  wne.normalizeType = pXo;
});