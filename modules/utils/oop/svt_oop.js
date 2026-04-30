/**
 * @module svt
 * @category utils/oop
 * @label oop
 * @position 127 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (svt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var svt = T((dNe) => {
  "use strict";
  Object.defineProperty(dNe, "__esModule", { value: !0 });
  dNe.loggingErrorHandler = void 0;
  var G2o = (Zt(), bt(cr));
  function q2o() {
    return (t) => {
      G2o.diag.error(H2o(t));
    };
  }
  dNe.loggingErrorHandler = q2o;
  function H2o(t) {
    return typeof t == "string" ? t : JSON.stringify(V2o(t));
  }
  function V2o(t) {
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