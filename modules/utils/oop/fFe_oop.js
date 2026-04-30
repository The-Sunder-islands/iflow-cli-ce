/**
 * @module fFe
 * @category utils/oop
 * @label oop
 * @position 427 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (fFe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var fFe = T((dFe) => {
  "use strict";
  Object.defineProperty(dFe, "__esModule", { value: !0 });
  dFe.getErrorMessage = MBo;
  dFe.getErrorCode = FBo;
  function MBo(t) {
    return t instanceof Error ? t.message : String(t);
  }
  function FBo(t) {
    return typeof t == "object" && t !== null && "code" in t && typeof t.code == "number" ? t.code : null;
  }
});