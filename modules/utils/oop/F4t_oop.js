/**
 * @module F4t
 * @category utils/oop
 * @label oop
 * @position 308 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (F4t) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var F4t = T((ere) => {
  "use strict";
  Object.defineProperty(ere, "__esModule", { value: !0 });
  ere.normalizeType = ere.normalizeArch = void 0;
  var XRo = (t) => {
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
  ere.normalizeArch = XRo;
  var ZRo = (t) => {
    switch (t) {
      case "sunos":
        return "solaris";
      case "win32":
        return "windows";
      default:
        return t;
    }
  };
  ere.normalizeType = ZRo;
});