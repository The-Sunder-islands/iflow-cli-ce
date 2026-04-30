/**
 * @module owt
 * @category telemetry/otel
 * @label opentelemetry
 * @position 391 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (owt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var owt = T((R_) => {
  "use strict";
  Object.defineProperty(R_, "__esModule", { value: !0 });
  R_.reconfigureLimits =
    R_.mergeConfig =
    R_.DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT =
    R_.DEFAULT_ATTRIBUTE_COUNT_LIMIT =
      void 0;
  var WKr = iwt(),
    $Me = Ii();
  R_.DEFAULT_ATTRIBUTE_COUNT_LIMIT = 128;
  R_.DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT = 1 / 0;
  function NNo(t) {
    let e = { sampler: (0, WKr.buildSamplerFromEnv)() },
      r = (0, WKr.loadDefaultConfig)(),
      n = Object.assign({}, r, e, t);
    return (
      (n.generalLimits = Object.assign({}, r.generalLimits, t.generalLimits || {})),
      (n.spanLimits = Object.assign({}, r.spanLimits, t.spanLimits || {})),
      n
    );
  }
  R_.mergeConfig = NNo;
  function PNo(t) {
    let e = Object.assign({}, t.spanLimits);
    return (
      (e.attributeCountLimit =
        t.spanLimits?.attributeCountLimit ??
        t.generalLimits?.attributeCountLimit ??
        (0, $Me.getNumberFromEnv)("OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT") ??
        (0, $Me.getNumberFromEnv)("OTEL_ATTRIBUTE_COUNT_LIMIT") ??
        R_.DEFAULT_ATTRIBUTE_COUNT_LIMIT),
      (e.attributeValueLengthLimit =
        t.spanLimits?.attributeValueLengthLimit ??
        t.generalLimits?.attributeValueLengthLimit ??
        (0, $Me.getNumberFromEnv)("OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT") ??
        (0, $Me.getNumberFromEnv)("OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT") ??
        R_.DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT),
      Object.assign({}, t, { spanLimits: e })
    );
  }
  R_.reconfigureLimits = PNo;
});