/**
 * @module P_i
 * @category utils/oop
 * @label oop
 * @position 1794 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (P_i) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var P_i = T((Ymt) => {
  "use strict";
  Object.defineProperty(Ymt, "__esModule", { value: !0 });
  Ymt.retryWrapper = void 0;
  var $Ba = (t, e, r) => async () => {
    for (let n = 0; n < e; ++n)
      try {
        return await t();
      } catch {
        await new Promise((s) => setTimeout(s, r));
      }
    return await t();
  };
  Ymt.retryWrapper = $Ba;
});