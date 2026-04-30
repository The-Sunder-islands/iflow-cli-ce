/**
 * @module pin
 * @category utils/oop
 * @label oop
 * @position 597 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (pin) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var pin = T((vje) => {
  "use strict";
  Object.defineProperty(vje, "__esModule", { value: !0 });
  vje.diagLogLevelFromString = void 0;
  var $R = (Zt(), bt(cr)),
    fin = {
      ALL: $R.DiagLogLevel.ALL,
      VERBOSE: $R.DiagLogLevel.VERBOSE,
      DEBUG: $R.DiagLogLevel.DEBUG,
      INFO: $R.DiagLogLevel.INFO,
      WARN: $R.DiagLogLevel.WARN,
      ERROR: $R.DiagLogLevel.ERROR,
      NONE: $R.DiagLogLevel.NONE,
    };
  function Rzo(t) {
    if (t == null) return;
    let e = fin[t.toUpperCase()];
    return (
      e ??
      ($R.diag.warn(`Unknown log level "${t}", expected one of ${Object.keys(fin)}, using default`),
      $R.DiagLogLevel.INFO)
    );
  }
  vje.diagLogLevelFromString = Rzo;
});