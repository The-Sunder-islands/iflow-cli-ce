/**
 * @module lRt
 * @category utils/oop
 * @label oop
 * @position 639 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (lRt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var lRt = T((iQe) => {
  "use strict";
  Object.defineProperty(iQe, "__esModule", { value: !0 });
  iQe.loggingErrorHandler = void 0;
  var cKo = (Zt(), bt(cr));
  function lKo() {
    return (t) => {
      cKo.diag.error(mKo(t));
    };
  }
  iQe.loggingErrorHandler = lKo;
  function mKo(t) {
    return typeof t == "string" ? t : JSON.stringify(dKo(t));
  }
  function dKo(t) {
    let e = {},
      r = t;
    for (; r !== null; )
      (Object.getOwnPropertyNames(r).forEach((n) => {
        if (e[n]) return;
        let o = r[n];
        o && (e[n] = String(o));
      }),
        (r = Object.getPrototypeOf(r)));
    return e;
  }
});