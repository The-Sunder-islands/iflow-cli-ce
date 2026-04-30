/**
 * @module tge
 * @category telemetry/otel
 * @label opentelemetry
 * @position 121 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (tge) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var tge = T((SB) => {
  "use strict";
  Object.defineProperty(SB, "__esModule", { value: !0 });
  SB.isTracingSuppressed = SB.unsuppressTracing = SB.suppressTracing = void 0;
  var O2o = (Zt(), bt(cr)),
    ZEt = (0, O2o.createContextKey)("OpenTelemetry SDK Context Key SUPPRESS_TRACING");
  function N2o(t) {
    return t.setValue(ZEt, !0);
  }
  SB.suppressTracing = N2o;
  function P2o(t) {
    return t.deleteValue(ZEt);
  }
  SB.unsuppressTracing = P2o;
  function B2o(t) {
    return t.getValue(ZEt) === !0;
  }
  SB.isTracingSuppressed = B2o;
});