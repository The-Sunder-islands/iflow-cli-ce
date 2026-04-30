/**
 * @module u8i
 * @category utils/oop
 * @label oop
 * @position 1747 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (u8i) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var u8i = T((tmt) => {
  "use strict";
  Object.defineProperty(tmt, "__esModule", { value: !0 });
  tmt.isEmptyData = void 0;
  function gRa(t) {
    return typeof t == "string" ? t.length === 0 : t.byteLength === 0;
  }
  tmt.isEmptyData = gRa;
});