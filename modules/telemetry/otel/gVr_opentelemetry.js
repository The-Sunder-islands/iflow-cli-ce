/**
 * @module gVr
 * @category telemetry/otel
 * @label opentelemetry
 * @position 198 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (gVr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var gVr = T((APe) => {
  "use strict";
  Object.defineProperty(APe, "__esModule", { value: !0 });
  APe.ConsoleMetricExporter = void 0;
  var hVr = Ii(),
    wTo = aCt(),
    fCt = class t {
      _shutdown = !1;
      _temporalitySelector;
      constructor(e) {
        this._temporalitySelector = e?.temporalitySelector ?? wTo.DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR;
      }
      export(e, r) {
        if (this._shutdown) {
          setImmediate(r, { code: hVr.ExportResultCode.FAILED });
          return;
        }
        return t._sendMetrics(e, r);
      }
      forceFlush() {
        return Promise.resolve();
      }
      selectAggregationTemporality(e) {
        return this._temporalitySelector(e);
      }
      shutdown() {
        return ((this._shutdown = !0), Promise.resolve());
      }
      static _sendMetrics(e, r) {
        for (let n of e.scopeMetrics)
          for (let o of n.metrics)
            console.dir(
              { descriptor: o.descriptor, dataPointType: o.dataPointType, dataPoints: o.dataPoints },
              { depth: null },
            );
        r({ code: hVr.ExportResultCode.SUCCESS });
      }
    };
  APe.ConsoleMetricExporter = fCt;
});