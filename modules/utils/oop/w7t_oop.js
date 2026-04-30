/**
 * @module w7t
 * @category utils/oop
 * @label oop
 * @position 575 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (w7t) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var w7t = T((rje) => {
  "use strict";
  Object.defineProperty(rje, "__esModule", { value: !0 });
  rje.loggingErrorHandler = void 0;
  var _Wo = (Zt(), bt(cr));
  function EWo() {
    return (t) => {
      _Wo.diag.error(vWo(t));
    };
  }
  rje.loggingErrorHandler = EWo;
  function vWo(t) {
    return typeof t == "string" ? t : JSON.stringify(CWo(t));
  }
  function CWo(t) {
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