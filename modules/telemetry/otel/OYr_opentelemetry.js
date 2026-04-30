/**
 * @module OYr
 * @category telemetry/otel
 * @label opentelemetry
 * @position 328 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (OYr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var OYr = T((ILe) => {
  "use strict";
  Object.defineProperty(ILe, "__esModule", { value: !0 });
  ILe.BatchLogRecordProcessorBase = void 0;
  var xko = (Zt(), bt(cr)),
    a6 = Ii(),
    tSt = class {
      _exporter;
      _maxExportBatchSize;
      _maxQueueSize;
      _scheduledDelayMillis;
      _exportTimeoutMillis;
      _finishedLogRecords = [];
      _timer;
      _shutdownOnce;
      constructor(e, r) {
        ((this._exporter = e),
          (this._maxExportBatchSize =
            r?.maxExportBatchSize ?? (0, a6.getNumberFromEnv)("OTEL_BLRP_MAX_EXPORT_BATCH_SIZE") ?? 512),
          (this._maxQueueSize = r?.maxQueueSize ?? (0, a6.getNumberFromEnv)("OTEL_BLRP_MAX_QUEUE_SIZE") ?? 2048),
          (this._scheduledDelayMillis =
            r?.scheduledDelayMillis ?? (0, a6.getNumberFromEnv)("OTEL_BLRP_SCHEDULE_DELAY") ?? 5e3),
          (this._exportTimeoutMillis =
            r?.exportTimeoutMillis ?? (0, a6.getNumberFromEnv)("OTEL_BLRP_EXPORT_TIMEOUT") ?? 3e4),
          (this._shutdownOnce = new a6.BindOnceFuture(this._shutdown, this)),
          this._maxExportBatchSize > this._maxQueueSize &&
            (xko.diag.warn(
              "BatchLogRecordProcessor: maxExportBatchSize must be smaller or equal to maxQueueSize, setting maxExportBatchSize to match maxQueueSize",
            ),
            (this._maxExportBatchSize = this._maxQueueSize)));
      }
      onEmit(e) {
        this._shutdownOnce.isCalled || this._addToBuffer(e);
      }
      forceFlush() {
        return this._shutdownOnce.isCalled ? this._shutdownOnce.promise : this._flushAll();
      }
      shutdown() {
        return this._shutdownOnce.call();
      }
      async _shutdown() {
        (this.onShutdown(), await this._flushAll(), await this._exporter.shutdown());
      }
      _addToBuffer(e) {
        this._finishedLogRecords.length >= this._maxQueueSize ||
          (this._finishedLogRecords.push(e), this._maybeStartTimer());
      }
      _flushAll() {
        return new Promise((e, r) => {
          let n = [],
            o = Math.ceil(this._finishedLogRecords.length / this._maxExportBatchSize);
          for (let s = 0; s < o; s++) n.push(this._flushOneBatch());
          Promise.all(n)
            .then(() => {
              e();
            })
            .catch(r);
        });
      }
      _flushOneBatch() {
        return (
          this._clearTimer(),
          this._finishedLogRecords.length === 0
            ? Promise.resolve()
            : new Promise((e, r) => {
                (0, a6.callWithTimeout)(
                  this._export(this._finishedLogRecords.splice(0, this._maxExportBatchSize)),
                  this._exportTimeoutMillis,
                )
                  .then(() => e())
                  .catch(r);
              })
        );
      }
      _maybeStartTimer() {
        this._timer === void 0 &&
          ((this._timer = setTimeout(() => {
            this._flushOneBatch()
              .then(() => {
                this._finishedLogRecords.length > 0 && (this._clearTimer(), this._maybeStartTimer());
              })
              .catch((e) => {
                (0, a6.globalErrorHandler)(e);
              });
          }, this._scheduledDelayMillis)),
          (0, a6.unrefTimer)(this._timer));
      }
      _clearTimer() {
        this._timer !== void 0 && (clearTimeout(this._timer), (this._timer = void 0));
      }
      _export(e) {
        let r = () =>
            a6.internal
              ._export(this._exporter, e)
              .then((o) => {
                o.code !== a6.ExportResultCode.SUCCESS &&
                  (0, a6.globalErrorHandler)(
                    o.error ?? new Error(`BatchLogRecordProcessor: log record export failed (status ${o})`),
                  );
              })
              .catch(a6.globalErrorHandler),
          n = e.map((o) => o.resource).filter((o) => o.asyncAttributesPending);
        return n.length === 0
          ? r()
          : Promise.all(n.map((o) => o.waitForAsyncAttributes?.())).then(r, a6.globalErrorHandler);
      }
    };
  ILe.BatchLogRecordProcessorBase = tSt;
});