/**
 * @module Fsn
 * @category telemetry/otel
 * @label opentelemetry
 * @position 693 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Fsn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Fsn = T((Dne) => {
  "use strict";
  Object.defineProperty(Dne, "__esModule", { value: !0 });
  Dne.reconfigureLimits = Dne.loadDefaultConfig = void 0;
  var Tne = a4();
  function OXo() {
    return {
      forceFlushTimeoutMillis: 3e4,
      logRecordLimits: {
        attributeValueLengthLimit: (0, Tne.getNumberFromEnv)("OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT") ?? 1 / 0,
        attributeCountLimit: (0, Tne.getNumberFromEnv)("OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT") ?? 128,
      },
      includeTraceContext: !0,
    };
  }
  Dne.loadDefaultConfig = OXo;
  function NXo(t) {
    return {
      attributeCountLimit:
        t.attributeCountLimit ??
        (0, Tne.getNumberFromEnv)("OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT") ??
        (0, Tne.getNumberFromEnv)("OTEL_ATTRIBUTE_COUNT_LIMIT") ??
        128,
      attributeValueLengthLimit:
        t.attributeValueLengthLimit ??
        (0, Tne.getNumberFromEnv)("OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT") ??
        (0, Tne.getNumberFromEnv)("OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT") ??
        1 / 0,
    };
  }
  Dne.reconfigureLimits = NXo;
});