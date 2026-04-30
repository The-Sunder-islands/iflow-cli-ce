/**
 * @module pVr
 * @category telemetry/otel
 * @label opentelemetry
 * @position 197 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (pVr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var pVr = T((bPe) => {
  "use strict";
  Object.defineProperty(bPe, "__esModule", { value: !0 });
  bPe.InMemoryMetricExporter = void 0;
  var fVr = Ii(),
    dCt = class {
      _shutdown = !1;
      _aggregationTemporality;
      _metrics = [];
      constructor(e) {
        this._aggregationTemporality = e;
      }
      export(e, r) {
        if (this._shutdown) {
          setTimeout(() => r({ code: fVr.ExportResultCode.FAILED }), 0);
          return;
        }
        (this._metrics.push(e), setTimeout(() => r({ code: fVr.ExportResultCode.SUCCESS }), 0));
      }
      getMetrics() {
        return this._metrics;
      }
      forceFlush() {
        return Promise.resolve();
      }
      reset() {
        this._metrics = [];
      }
      selectAggregationTemporality(e) {
        return this._aggregationTemporality;
      }
      shutdown() {
        return ((this._shutdown = !0), Promise.resolve());
      }
    };
  bPe.InMemoryMetricExporter = dCt;
});