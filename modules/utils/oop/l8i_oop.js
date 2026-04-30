/**
 * @module l8i
 * @category utils/oop
 * @label oop
 * @position 1749 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (l8i) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var l8i = T((nmt) => {
  "use strict";
  Object.defineProperty(nmt, "__esModule", { value: !0 });
  nmt.uint32ArrayFrom = void 0;
  function ARa(t) {
    if (!Uint32Array.from) {
      for (var e = new Uint32Array(t.length), r = 0; r < t.length; ) ((e[r] = t[r]), (r += 1));
      return e;
    }
    return Uint32Array.from(t);
  }
  nmt.uint32ArrayFrom = ARa;
});