/**
 * @module cCt
 * @category telemetry/otel
 * @label opentelemetry
 * @position 195 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (cCt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var cCt = T((hPe) => {
  "use strict";
  Object.defineProperty(hPe, "__esModule", { value: !0 });
  hPe.MetricReader = void 0;
  var cVr = (Zt(), bt(cr)),
    pPe = qC(),
    lVr = aCt(),
    uCt = class {
      _shutdown = !1;
      _metricProducers;
      _sdkMetricProducer;
      _aggregationTemporalitySelector;
      _aggregationSelector;
      _cardinalitySelector;
      constructor(e) {
        ((this._aggregationSelector = e?.aggregationSelector ?? lVr.DEFAULT_AGGREGATION_SELECTOR),
          (this._aggregationTemporalitySelector =
            e?.aggregationTemporalitySelector ?? lVr.DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR),
          (this._metricProducers = e?.metricProducers ?? []),
          (this._cardinalitySelector = e?.cardinalitySelector));
      }
      setMetricProducer(e) {
        if (this._sdkMetricProducer) throw new Error("MetricReader can not be bound to a MeterProvider again.");
        ((this._sdkMetricProducer = e), this.onInitialized());
      }
      selectAggregation(e) {
        return this._aggregationSelector(e);
      }
      selectAggregationTemporality(e) {
        return this._aggregationTemporalitySelector(e);
      }
      selectCardinalityLimit(e) {
        return this._cardinalitySelector ? this._cardinalitySelector(e) : 2e3;
      }
      onInitialized() {}
      async collect(e) {
        if (this._sdkMetricProducer === void 0) throw new Error("MetricReader is not bound to a MetricProducer");
        if (this._shutdown) throw new Error("MetricReader is shutdown");
        let [r, ...n] = await Promise.all([
            this._sdkMetricProducer.collect({ timeoutMillis: e?.timeoutMillis }),
            ...this._metricProducers.map((u) => u.collect({ timeoutMillis: e?.timeoutMillis })),
          ]),
          o = r.errors.concat((0, pPe.FlatMap)(n, (u) => u.errors)),
          s = r.resourceMetrics.resource,
          a = r.resourceMetrics.scopeMetrics.concat((0, pPe.FlatMap)(n, (u) => u.resourceMetrics.scopeMetrics));
        return { resourceMetrics: { resource: s, scopeMetrics: a }, errors: o };
      }
      async shutdown(e) {
        if (this._shutdown) {
          cVr.diag.error("Cannot call shutdown twice.");
          return;
        }
        (e?.timeoutMillis == null
          ? await this.onShutdown()
          : await (0, pPe.callWithTimeout)(this.onShutdown(), e.timeoutMillis),
          (this._shutdown = !0));
      }
      async forceFlush(e) {
        if (this._shutdown) {
          cVr.diag.warn("Cannot forceFlush on already shutdown MetricReader.");
          return;
        }
        if (e?.timeoutMillis == null) {
          await this.onForceFlush();
          return;
        }
        await (0, pPe.callWithTimeout)(this.onForceFlush(), e.timeoutMillis);
      }
    };
  hPe.MetricReader = uCt;
});