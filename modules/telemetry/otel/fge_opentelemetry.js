/**
 * @module fge
 * @category telemetry/otel
 * @label opentelemetry
 * @position 193 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (fge) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var fge = T((qG) => {
  "use strict";
  Object.defineProperty(qG, "__esModule", { value: !0 });
  qG.toAggregation = qG.AggregationType = void 0;
  var QG = uVr(),
    GG;
  (function (t) {
    ((t[(t.DEFAULT = 0)] = "DEFAULT"),
      (t[(t.DROP = 1)] = "DROP"),
      (t[(t.SUM = 2)] = "SUM"),
      (t[(t.LAST_VALUE = 3)] = "LAST_VALUE"),
      (t[(t.EXPLICIT_BUCKET_HISTOGRAM = 4)] = "EXPLICIT_BUCKET_HISTOGRAM"),
      (t[(t.EXPONENTIAL_HISTOGRAM = 5)] = "EXPONENTIAL_HISTOGRAM"));
  })((GG = qG.AggregationType || (qG.AggregationType = {})));
  function yTo(t) {
    switch (t.type) {
      case GG.DEFAULT:
        return QG.DEFAULT_AGGREGATION;
      case GG.DROP:
        return QG.DROP_AGGREGATION;
      case GG.SUM:
        return QG.SUM_AGGREGATION;
      case GG.LAST_VALUE:
        return QG.LAST_VALUE_AGGREGATION;
      case GG.EXPONENTIAL_HISTOGRAM: {
        let e = t;
        return new QG.ExponentialHistogramAggregation(e.options?.maxSize, e.options?.recordMinMax);
      }
      case GG.EXPLICIT_BUCKET_HISTOGRAM: {
        let e = t;
        return e.options == null
          ? QG.HISTOGRAM_AGGREGATION
          : new QG.ExplicitBucketHistogramAggregation(e.options?.boundaries, e.options?.recordMinMax);
      }
      default:
        throw new Error("Unsupported Aggregation");
    }
  }
  qG.toAggregation = yTo;
});