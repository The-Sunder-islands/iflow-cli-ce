/**
 * @module kHr
 * @category utils/oop
 * @label oop
 * @position 170 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (kHr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var kHr = T((qNe) => {
  "use strict";
  Object.defineProperty(qNe, "__esModule", { value: !0 });
  qNe.hexToBinary = void 0;
  function RHr(t) {
    return t >= 48 && t <= 57 ? t - 48 : t >= 97 && t <= 102 ? t - 87 : t - 55;
  }
  function gxo(t) {
    let e = new Uint8Array(t.length / 2),
      r = 0;
    for (let n = 0; n < t.length; n += 2) {
      let o = RHr(t.charCodeAt(n)),
        s = RHr(t.charCodeAt(n + 1));
      e[r++] = (o << 4) | s;
    }
    return e;
  }
  qNe.hexToBinary = gxo;
});