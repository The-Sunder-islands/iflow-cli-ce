/**
 * @module c8i
 * @category utils/oop
 * @label oop
 * @position 1748 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (c8i) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var c8i = T((rmt) => {
  "use strict";
  Object.defineProperty(rmt, "__esModule", { value: !0 });
  rmt.numToUint8 = void 0;
  function bRa(t) {
    return new Uint8Array([(t & 4278190080) >> 24, (t & 16711680) >> 16, (t & 65280) >> 8, t & 255]);
  }
  rmt.numToUint8 = bRa;
});