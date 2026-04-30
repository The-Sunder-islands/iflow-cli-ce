/**
 * @module OSt
 * @category telemetry/otel
 * @label opentelemetry
 * @position 369 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (OSt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var OSt = T((T_) => {
  "use strict";
  Object.defineProperty(T_, "__esModule", { value: !0 });
  T_.reconfigureLimits =
    T_.mergeConfig =
    T_.DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT =
    T_.DEFAULT_ATTRIBUTE_COUNT_LIMIT =
      void 0;
  var EKr = kSt(),
    pMe = Ii();
  T_.DEFAULT_ATTRIBUTE_COUNT_LIMIT = 128;
  T_.DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT = 1 / 0;
  function zOo(t) {
    let e = { sampler: (0, EKr.buildSamplerFromEnv)() },
      r = (0, EKr.loadDefaultConfig)(),
      n = Object.assign({}, r, e, t);
    return (
      (n.generalLimits = Object.assign({}, r.generalLimits, t.generalLimits || {})),
      (n.spanLimits = Object.assign({}, r.spanLimits, t.spanLimits || {})),
      n
    );
  }
  T_.mergeConfig = zOo;
  function YOo(t) {
    let e = Object.assign({}, t.spanLimits);
    return (
      (e.attributeCountLimit =
        t.spanLimits?.attributeCountLimit ??
        t.generalLimits?.attributeCountLimit ??
        (0, pMe.getNumberFromEnv)("OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT") ??
        (0, pMe.getNumberFromEnv)("OTEL_ATTRIBUTE_COUNT_LIMIT") ??
        T_.DEFAULT_ATTRIBUTE_COUNT_LIMIT),
      (e.attributeValueLengthLimit =
        t.spanLimits?.attributeValueLengthLimit ??
        t.generalLimits?.attributeValueLengthLimit ??
        (0, pMe.getNumberFromEnv)("OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT") ??
        (0, pMe.getNumberFromEnv)("OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT") ??
        T_.DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT),
      Object.assign({}, t, { spanLimits: e })
    );
  }
  T_.reconfigureLimits = YOo;
});