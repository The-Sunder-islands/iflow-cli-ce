/**
 * @module rAe
 * @category telemetry/otel
 * @label opentelemetry
 * @position 569 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (rAe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var rAe = T((aL) => {
  "use strict";
  Object.defineProperty(aL, "__esModule", { value: !0 });
  aL.isTracingSuppressed = aL.unsuppressTracing = aL.suppressTracing = void 0;
  var cWo = (Zt(), bt(cr)),
    A7t = (0, cWo.createContextKey)("OpenTelemetry SDK Context Key SUPPRESS_TRACING");
  function lWo(t) {
    return t.setValue(A7t, !0);
  }
  aL.suppressTracing = lWo;
  function mWo(t) {
    return t.deleteValue(A7t);
  }
  aL.unsuppressTracing = mWo;
  function dWo(t) {
    return t.getValue(A7t) === !0;
  }
  aL.isTracingSuppressed = dWo;
});