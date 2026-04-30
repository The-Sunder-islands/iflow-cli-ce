/**
 * @module tqr
 * @category utils/oop
 * @label oop
 * @position 141 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (tqr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var tqr = T((Ste) => {
  "use strict";
  Object.defineProperty(Ste, "__esModule", { value: !0 });
  Ste.validateValue = Ste.validateKey = void 0;
  var hvt = "[_0-9a-z-*/]",
    uwo = `[a-z]${hvt}{0,255}`,
    cwo = `[a-z0-9]${hvt}{0,240}@[a-z]${hvt}{0,13}`,
    lwo = new RegExp(`^(?:${uwo}|${cwo})$`),
    mwo = /^[ -~]{0,255}[!-~]$/,
    dwo = /,|=/;
  function fwo(t) {
    return lwo.test(t);
  }
  Ste.validateKey = fwo;
  function pwo(t) {
    return mwo.test(t) && !dwo.test(t);
  }
  Ste.validateValue = pwo;
});