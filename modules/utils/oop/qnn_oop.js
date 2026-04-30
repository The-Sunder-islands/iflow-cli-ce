/**
 * @module qnn
 * @category utils/oop
 * @label oop
 * @position 587 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (qnn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var qnn = T((fne) => {
  "use strict";
  Object.defineProperty(fne, "__esModule", { value: !0 });
  fne.validateValue = fne.validateKey = void 0;
  var I7t = "[_0-9a-z-*/]",
    VWo = `[a-z]${I7t}{0,255}`,
    WWo = `[a-z0-9]${I7t}{0,240}@[a-z]${I7t}{0,13}`,
    zWo = new RegExp(`^(?:${VWo}|${WWo})$`),
    YWo = /^[ -~]{0,255}[!-~]$/,
    KWo = /,|=/;
  function JWo(t) {
    return zWo.test(t);
  }
  fne.validateKey = JWo;
  function XWo(t) {
    return YWo.test(t) && !KWo.test(t);
  }
  fne.validateValue = XWo;
});