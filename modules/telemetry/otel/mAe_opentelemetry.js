/**
 * @module mAe
 * @category telemetry/otel
 * @label opentelemetry
 * @position 633 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (mAe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var mAe = T((cL) => {
  "use strict";
  Object.defineProperty(cL, "__esModule", { value: !0 });
  cL.isTracingSuppressed = cL.unsuppressTracing = cL.suppressTracing = void 0;
  var XYo = (Zt(), bt(cr)),
    nRt = (0, XYo.createContextKey)("OpenTelemetry SDK Context Key SUPPRESS_TRACING");
  function ZYo(t) {
    return t.setValue(nRt, !0);
  }
  cL.suppressTracing = ZYo;
  function eKo(t) {
    return t.deleteValue(nRt);
  }
  cL.unsuppressTracing = eKo;
  function tKo(t) {
    return t.getValue(nRt) === !0;
  }
  cL.isTracingSuppressed = tKo;
});