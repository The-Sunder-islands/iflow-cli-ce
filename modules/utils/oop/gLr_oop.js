/**
 * @module gLr
 * @category utils/oop
 * @label oop
 * @position 128 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (gLr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var gLr = T((vte) => {
  "use strict";
  Object.defineProperty(vte, "__esModule", { value: !0 });
  vte.globalErrorHandler = vte.setGlobalErrorHandler = void 0;
  var W2o = svt(),
    hLr = (0, W2o.loggingErrorHandler)();
  function z2o(t) {
    hLr = t;
  }
  vte.setGlobalErrorHandler = z2o;
  function Y2o(t) {
    try {
      hLr(t);
    } catch {}
  }
  vte.globalErrorHandler = Y2o;
});