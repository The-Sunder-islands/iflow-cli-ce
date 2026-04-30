/**
 * @module _Ct
 * @category utils/oop
 * @label oop
 * @position 214 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (_Ct) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var _Ct = T((Qte) => {
  "use strict";
  Object.defineProperty(Qte, "__esModule", { value: !0 });
  Qte.normalizeType = Qte.normalizeArch = void 0;
  var iDo = (t) => {
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
  Qte.normalizeArch = iDo;
  var oDo = (t) => {
    switch (t) {
      case "sunos":
        return "solaris";
      case "win32":
        return "windows";
      default:
        return t;
    }
  };
  Qte.normalizeType = oDo;
});