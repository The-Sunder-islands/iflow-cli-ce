/**
 * @module don
 * @category utils/oop
 * @label oop
 * @position 640 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (don) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var don = T((_ne) => {
  "use strict";
  Object.defineProperty(_ne, "__esModule", { value: !0 });
  _ne.globalErrorHandler = _ne.setGlobalErrorHandler = void 0;
  var fKo = lRt(),
    mon = (0, fKo.loggingErrorHandler)();
  function pKo(t) {
    mon = t;
  }
  _ne.setGlobalErrorHandler = pKo;
  function hKo(t) {
    try {
      mon(t);
    } catch {}
  }
  _ne.globalErrorHandler = hKo;
});