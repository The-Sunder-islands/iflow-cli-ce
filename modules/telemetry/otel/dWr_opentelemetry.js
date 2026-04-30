/**
 * @module dWr
 * @category telemetry/otel
 * @label opentelemetry
 * @position 241 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (dWr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var dWr = T((rBe) => {
  "use strict";
  Object.defineProperty(rBe, "__esModule", { value: !0 });
  rBe.MetricCollector = void 0;
  var lIo = Ii(),
    n4t = class {
      _sharedState;
      _metricReader;
      constructor(e, r) {
        ((this._sharedState = e), (this._metricReader = r));
      }
      async collect(e) {
        let r = (0, lIo.millisToHrTime)(Date.now()),
          n = [],
          o = [],
          s = Array.from(this._sharedState.meterSharedStates.values()).map(async (a) => {
            let u = await a.collect(this, r, e);
            (u?.scopeMetrics != null && n.push(u.scopeMetrics), u?.errors != null && o.push(...u.errors));
          });
        return (
          await Promise.all(s),
          { resourceMetrics: { resource: this._sharedState.resource, scopeMetrics: n }, errors: o }
        );
      }
      async forceFlush(e) {
        await this._metricReader.forceFlush(e);
      }
      async shutdown(e) {
        await this._metricReader.shutdown(e);
      }
      selectAggregationTemporality(e) {
        return this._metricReader.selectAggregationTemporality(e);
      }
      selectAggregation(e) {
        return this._metricReader.selectAggregation(e);
      }
      selectCardinalityLimit(e) {
        return this._metricReader.selectCardinalityLimit?.(e) ?? 2e3;
      }
    };
  rBe.MetricCollector = n4t;
});