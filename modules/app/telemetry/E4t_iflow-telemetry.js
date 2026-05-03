/**
 * @module E4t
 * @category app/telemetry
 * @label iflow-telemetry
 * @position 267 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (E4t) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 *
 * === Auto-analyzed semantic info ===
 * Classes: class extends
 * Functions: L7o, U7o, M7o
 * Features: esbuild module exports: E4t, telemetry/OTLP
 * === End semantic info ===
 */


var E4t = T((J3) => {
  "use strict";
  Object.defineProperty(J3, "__esModule", { value: !0 });
  J3.OTLPMetricExporterBase =
    J3.LowMemoryTemporalitySelector =
    J3.DeltaTemporalitySelector =
    J3.CumulativeTemporalitySelector =
      void 0;
  var R7o = Ii(),
    Nf = Dx(),
    Ezr = y4t(),
    k7o = (yx(), bt(Ax)),
    O7o = (Zt(), bt(cr)),
    N7o = () => Nf.AggregationTemporality.CUMULATIVE;
  J3.CumulativeTemporalitySelector = N7o;
  var P7o = (t) => {
    switch (t) {
      case Nf.InstrumentType.COUNTER:
      case Nf.InstrumentType.OBSERVABLE_COUNTER:
      case Nf.InstrumentType.GAUGE:
      case Nf.InstrumentType.HISTOGRAM:
      case Nf.InstrumentType.OBSERVABLE_GAUGE:
        return Nf.AggregationTemporality.DELTA;
      case Nf.InstrumentType.UP_DOWN_COUNTER:
      case Nf.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER:
        return Nf.AggregationTemporality.CUMULATIVE;
    }
  };
  J3.DeltaTemporalitySelector = P7o;
  var B7o = (t) => {
    switch (t) {
      case Nf.InstrumentType.COUNTER:
      case Nf.InstrumentType.HISTOGRAM:
        return Nf.AggregationTemporality.DELTA;
      case Nf.InstrumentType.GAUGE:
      case Nf.InstrumentType.UP_DOWN_COUNTER:
      case Nf.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER:
      case Nf.InstrumentType.OBSERVABLE_COUNTER:
      case Nf.InstrumentType.OBSERVABLE_GAUGE:
        return Nf.AggregationTemporality.CUMULATIVE;
    }
  };
  J3.LowMemoryTemporalitySelector = B7o;
  function L7o() {
    let t = (
      (0, R7o.getStringFromEnv)("OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE") ?? "cumulative"
    ).toLowerCase();
    return t === "cumulative"
      ? J3.CumulativeTemporalitySelector
      : t === "delta"
        ? J3.DeltaTemporalitySelector
        : t === "lowmemory"
          ? J3.LowMemoryTemporalitySelector
          : (O7o.diag.warn(
              `OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE is set to '${t}', but only 'cumulative' and 'delta' are allowed. Using default ('cumulative') instead.`,
            ),
            J3.CumulativeTemporalitySelector);
  }
  function M7o(t) {
    return t != null
      ? t === Ezr.AggregationTemporalityPreference.DELTA
        ? J3.DeltaTemporalitySelector
        : t === Ezr.AggregationTemporalityPreference.LOWMEMORY
          ? J3.LowMemoryTemporalitySelector
          : J3.CumulativeTemporalitySelector
      : L7o();
  }
  var F7o = Object.freeze({ type: Nf.AggregationType.DEFAULT });
  function U7o(t) {
    return t?.aggregationPreference ?? (() => F7o);
  }
  var _4t = class extends k7o.OTLPExporterBase {
    _aggregationTemporalitySelector;
    _aggregationSelector;
    constructor(e, r) {
      (super(e),
        (this._aggregationSelector = U7o(r)),
        (this._aggregationTemporalitySelector = M7o(r?.temporalityPreference)));
    }
    selectAggregation(e) {
      return this._aggregationSelector(e);
    }
    selectAggregationTemporality(e) {
      return this._aggregationTemporalitySelector(e);
    }
  };
  J3.OTLPMetricExporterBase = _4t;
});