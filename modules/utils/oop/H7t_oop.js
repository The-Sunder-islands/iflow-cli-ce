/**
 * @module H7t
 * @category utils/oop
 * @label oop
 * @position 613 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (H7t) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var H7t = T((gne) => {
  "use strict";
  Object.defineProperty(gne, "__esModule", { value: !0 });
  gne.normalizeType = gne.normalizeArch = void 0;
  var EYo = (t) => {
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
  gne.normalizeArch = EYo;
  var vYo = (t) => {
    switch (t) {
      case "sunos":
        return "solaris";
      case "win32":
        return "windows";
      default:
        return t;
    }
  };
  gne.normalizeType = vYo;
});