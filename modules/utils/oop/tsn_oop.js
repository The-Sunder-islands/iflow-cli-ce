/**
 * @module tsn
 * @category utils/oop
 * @label oop
 * @position 663 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (tsn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var tsn = T((SQe) => {
  "use strict";
  Object.defineProperty(SQe, "__esModule", { value: !0 });
  SQe.diagLogLevelFromString = void 0;
  var QR = (Zt(), bt(cr)),
    esn = {
      ALL: QR.DiagLogLevel.ALL,
      VERBOSE: QR.DiagLogLevel.VERBOSE,
      DEBUG: QR.DiagLogLevel.DEBUG,
      INFO: QR.DiagLogLevel.INFO,
      WARN: QR.DiagLogLevel.WARN,
      ERROR: QR.DiagLogLevel.ERROR,
      NONE: QR.DiagLogLevel.NONE,
    };
  function _Jo(t) {
    if (t == null) return;
    let e = esn[t.toUpperCase()];
    return (
      e ??
      (QR.diag.warn(`Unknown log level "${t}", expected one of ${Object.keys(esn)}, using default`),
      QR.DiagLogLevel.INFO)
    );
  }
  SQe.diagLogLevelFromString = _Jo;
});