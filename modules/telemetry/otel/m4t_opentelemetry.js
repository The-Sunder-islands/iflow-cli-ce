/**
 * @module m4t
 * @category telemetry/otel
 * @label opentelemetry
 * @position 249 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (m4t) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var m4t = T((Ix) => {
  "use strict";
  Object.defineProperty(Ix, "__esModule", { value: !0 });
  Ix.createExportMetricsServiceRequest = Ix.toMetric = Ix.toScopeMetrics = Ix.toResourceMetrics = void 0;
  var CWr = (Zt(), bt(cr)),
    Yte = Dx(),
    SWr = vWr(),
    RIo = HNe(),
    Cge = VNe();
  function xWr(t, e) {
    let r = (0, RIo.getOtlpEncoder)(e),
      n = (0, Cge.createResource)(t.resource);
    return { resource: n, schemaUrl: n.schemaUrl, scopeMetrics: TWr(t.scopeMetrics, r) };
  }
  Ix.toResourceMetrics = xWr;
  function TWr(t, e) {
    return Array.from(
      t.map((r) => ({
        scope: (0, Cge.createInstrumentationScope)(r.scope),
        metrics: r.metrics.map((n) => DWr(n, e)),
        schemaUrl: r.scope.schemaUrl,
      })),
    );
  }
  Ix.toScopeMetrics = TWr;
  function DWr(t, e) {
    let r = { name: t.descriptor.name, description: t.descriptor.description, unit: t.descriptor.unit },
      n = PIo(t.aggregationTemporality);
    switch (t.dataPointType) {
      case Yte.DataPointType.SUM:
        r.sum = { aggregationTemporality: n, isMonotonic: t.isMonotonic, dataPoints: wWr(t, e) };
        break;
      case Yte.DataPointType.GAUGE:
        r.gauge = { dataPoints: wWr(t, e) };
        break;
      case Yte.DataPointType.HISTOGRAM:
        r.histogram = { aggregationTemporality: n, dataPoints: OIo(t, e) };
        break;
      case Yte.DataPointType.EXPONENTIAL_HISTOGRAM:
        r.exponentialHistogram = { aggregationTemporality: n, dataPoints: NIo(t, e) };
        break;
    }
    return r;
  }
  Ix.toMetric = DWr;
  function kIo(t, e, r) {
    let n = {
      attributes: (0, Cge.toAttributes)(t.attributes),
      startTimeUnixNano: r.encodeHrTime(t.startTime),
      timeUnixNano: r.encodeHrTime(t.endTime),
    };
    switch (e) {
      case CWr.ValueType.INT:
        n.asInt = t.value;
        break;
      case CWr.ValueType.DOUBLE:
        n.asDouble = t.value;
        break;
    }
    return n;
  }
  function wWr(t, e) {
    return t.dataPoints.map((r) => kIo(r, t.descriptor.valueType, e));
  }
  function OIo(t, e) {
    return t.dataPoints.map((r) => {
      let n = r.value;
      return {
        attributes: (0, Cge.toAttributes)(r.attributes),
        bucketCounts: n.buckets.counts,
        explicitBounds: n.buckets.boundaries,
        count: n.count,
        sum: n.sum,
        min: n.min,
        max: n.max,
        startTimeUnixNano: e.encodeHrTime(r.startTime),
        timeUnixNano: e.encodeHrTime(r.endTime),
      };
    });
  }
  function NIo(t, e) {
    return t.dataPoints.map((r) => {
      let n = r.value;
      return {
        attributes: (0, Cge.toAttributes)(r.attributes),
        count: n.count,
        min: n.min,
        max: n.max,
        sum: n.sum,
        positive: { offset: n.positive.offset, bucketCounts: n.positive.bucketCounts },
        negative: { offset: n.negative.offset, bucketCounts: n.negative.bucketCounts },
        scale: n.scale,
        zeroCount: n.zeroCount,
        startTimeUnixNano: e.encodeHrTime(r.startTime),
        timeUnixNano: e.encodeHrTime(r.endTime),
      };
    });
  }
  function PIo(t) {
    switch (t) {
      case Yte.AggregationTemporality.DELTA:
        return SWr.EAggregationTemporality.AGGREGATION_TEMPORALITY_DELTA;
      case Yte.AggregationTemporality.CUMULATIVE:
        return SWr.EAggregationTemporality.AGGREGATION_TEMPORALITY_CUMULATIVE;
    }
  }
  function BIo(t, e) {
    return { resourceMetrics: t.map((r) => xWr(r, e)) };
  }
  Ix.createExportMetricsServiceRequest = BIo;
});