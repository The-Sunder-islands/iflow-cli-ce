/**
 * @module wqr
 * @category utils/oop
 * @label oop
 * @position 151 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (wqr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var wqr = T((ONe) => {
  "use strict";
  Object.defineProperty(ONe, "__esModule", { value: !0 });
  ONe.diagLogLevelFromString = void 0;
  var CR = (Zt(), bt(cr)),
    Sqr = {
      ALL: CR.DiagLogLevel.ALL,
      VERBOSE: CR.DiagLogLevel.VERBOSE,
      DEBUG: CR.DiagLogLevel.DEBUG,
      INFO: CR.DiagLogLevel.INFO,
      WARN: CR.DiagLogLevel.WARN,
      ERROR: CR.DiagLogLevel.ERROR,
      NONE: CR.DiagLogLevel.NONE,
    };
  function Vwo(t) {
    if (t == null) return;
    let e = Sqr[t.toUpperCase()];
    return (
      e ??
      (CR.diag.warn(`Unknown log level "${t}", expected one of ${Object.keys(Sqr)}, using default`),
      CR.DiagLogLevel.INFO)
    );
  }
  ONe.diagLogLevelFromString = Vwo;
});