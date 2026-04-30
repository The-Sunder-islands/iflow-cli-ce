/**
 * @module dVr
 * @category telemetry/otel
 * @label opentelemetry
 * @position 196 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (dVr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var dVr = T((gPe) => {
  "use strict";
  Object.defineProperty(gPe, "__esModule", { value: !0 });
  gPe.PeriodicExportingMetricReader = void 0;
  var lCt = (Zt(), bt(cr)),
    pge = Ii(),
    STo = cCt(),
    mVr = qC(),
    mCt = class extends STo.MetricReader {
      _interval;
      _exporter;
      _exportInterval;
      _exportTimeout;
      constructor(e) {
        if (
          (super({
            aggregationSelector: e.exporter.selectAggregation?.bind(e.exporter),
            aggregationTemporalitySelector: e.exporter.selectAggregationTemporality?.bind(e.exporter),
            metricProducers: e.metricProducers,
          }),
          e.exportIntervalMillis !== void 0 && e.exportIntervalMillis <= 0)
        )
          throw Error("exportIntervalMillis must be greater than 0");
        if (e.exportTimeoutMillis !== void 0 && e.exportTimeoutMillis <= 0)
          throw Error("exportTimeoutMillis must be greater than 0");
        if (
          e.exportTimeoutMillis !== void 0 &&
          e.exportIntervalMillis !== void 0 &&
          e.exportIntervalMillis < e.exportTimeoutMillis
        )
          throw Error("exportIntervalMillis must be greater than or equal to exportTimeoutMillis");
        ((this._exportInterval = e.exportIntervalMillis ?? 6e4),
          (this._exportTimeout = e.exportTimeoutMillis ?? 3e4),
          (this._exporter = e.exporter));
      }
      async _runOnce() {
        try {
          await (0, mVr.callWithTimeout)(this._doRun(), this._exportTimeout);
        } catch (e) {
          if (e instanceof mVr.TimeoutError) {
            lCt.diag.error("Export took longer than %s milliseconds and timed out.", this._exportTimeout);
            return;
          }
          (0, pge.globalErrorHandler)(e);
        }
      }
      async _doRun() {
        let { resourceMetrics: e, errors: r } = await this.collect({ timeoutMillis: this._exportTimeout });
        if (
          (r.length > 0 && lCt.diag.error("PeriodicExportingMetricReader: metrics collection errors", ...r),
          e.resource.asyncAttributesPending)
        )
          try {
            await e.resource.waitForAsyncAttributes?.();
          } catch (o) {
            (lCt.diag.debug("Error while resolving async portion of resource: ", o), (0, pge.globalErrorHandler)(o));
          }
        if (e.scopeMetrics.length === 0) return;
        let n = await pge.internal._export(this._exporter, e);
        if (n.code !== pge.ExportResultCode.SUCCESS)
          throw new Error(`PeriodicExportingMetricReader: metrics export failed (error ${n.error})`);
      }
      onInitialized() {
        ((this._interval = setInterval(() => {
          this._runOnce();
        }, this._exportInterval)),
          (0, pge.unrefTimer)(this._interval));
      }
      async onForceFlush() {
        (await this._runOnce(), await this._exporter.forceFlush());
      }
      async onShutdown() {
        (this._interval && clearInterval(this._interval), await this.onForceFlush(), await this._exporter.shutdown());
      }
    };
  gPe.PeriodicExportingMetricReader = mCt;
});