/**
 * @module EYr
 * @category telemetry/otel
 * @label opentelemetry
 * @position 320 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (EYr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var EYr = T((ire) => {
  "use strict";
  Object.defineProperty(ire, "__esModule", { value: !0 });
  ire.reconfigureLimits = ire.loadDefaultConfig = void 0;
  var nre = Ii();
  function bko() {
    return {
      forceFlushTimeoutMillis: 3e4,
      logRecordLimits: {
        attributeValueLengthLimit: (0, nre.getNumberFromEnv)("OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT") ?? 1 / 0,
        attributeCountLimit: (0, nre.getNumberFromEnv)("OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT") ?? 128,
      },
      includeTraceContext: !0,
    };
  }
  ire.loadDefaultConfig = bko;
  function Ako(t) {
    return {
      attributeCountLimit:
        t.attributeCountLimit ??
        (0, nre.getNumberFromEnv)("OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT") ??
        (0, nre.getNumberFromEnv)("OTEL_ATTRIBUTE_COUNT_LIMIT") ??
        128,
      attributeValueLengthLimit:
        t.attributeValueLengthLimit ??
        (0, nre.getNumberFromEnv)("OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT") ??
        (0, nre.getNumberFromEnv)("OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT") ??
        1 / 0,
    };
  }
  ire.reconfigureLimits = Ako;
});