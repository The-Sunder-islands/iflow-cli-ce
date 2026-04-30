/**
 * @module Ysn
 * @category telemetry/otel
 * @label opentelemetry
 * @position 700 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Ysn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Ysn = T((oGe) => {
  "use strict";
  Object.defineProperty(oGe, "__esModule", { value: !0 });
  oGe.BatchLogRecordProcessorBase = void 0;
  var jXo = (Zt(), bt(cr)),
    Q_ = a4(),
    zRt = class {
      _exporter;
      _maxExportBatchSize;
      _maxQueueSize;
      _scheduledDelayMillis;
      _exportTimeoutMillis;
      _isExporting = !1;
      _finishedLogRecords = [];
      _timer;
      _shutdownOnce;
      constructor(e, r) {
        ((this._exporter = e),
          (this._maxExportBatchSize =
            r?.maxExportBatchSize ?? (0, Q_.getNumberFromEnv)("OTEL_BLRP_MAX_EXPORT_BATCH_SIZE") ?? 512),
          (this._maxQueueSize = r?.maxQueueSize ?? (0, Q_.getNumberFromEnv)("OTEL_BLRP_MAX_QUEUE_SIZE") ?? 2048),
          (this._scheduledDelayMillis =
            r?.scheduledDelayMillis ?? (0, Q_.getNumberFromEnv)("OTEL_BLRP_SCHEDULE_DELAY") ?? 5e3),
          (this._exportTimeoutMillis =
            r?.exportTimeoutMillis ?? (0, Q_.getNumberFromEnv)("OTEL_BLRP_EXPORT_TIMEOUT") ?? 3e4),
          (this._shutdownOnce = new Q_.BindOnceFuture(this._shutdown, this)),
          this._maxExportBatchSize > this._maxQueueSize &&
            (jXo.diag.warn(
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
                (0, Q_.callWithTimeout)(
                  this._export(this._finishedLogRecords.splice(0, this._maxExportBatchSize)),
                  this._exportTimeoutMillis,
                )
                  .then(() => e())
                  .catch(r);
              })
        );
      }
      _maybeStartTimer() {
        if (this._isExporting) return;
        let e = () => {
          ((this._isExporting = !0),
            this._flushOneBatch()
              .then(() => {
                ((this._isExporting = !1),
                  this._finishedLogRecords.length > 0 && (this._clearTimer(), this._maybeStartTimer()));
              })
              .catch((r) => {
                ((this._isExporting = !1), (0, Q_.globalErrorHandler)(r));
              }));
        };
        if (this._finishedLogRecords.length >= this._maxExportBatchSize) return e();
        this._timer === void 0 &&
          ((this._timer = setTimeout(() => e(), this._scheduledDelayMillis)),
          typeof this._timer != "number" && this._timer.unref());
      }
      _clearTimer() {
        this._timer !== void 0 && (clearTimeout(this._timer), (this._timer = void 0));
      }
      _export(e) {
        let r = () =>
            Q_.internal
              ._export(this._exporter, e)
              .then((o) => {
                o.code !== Q_.ExportResultCode.SUCCESS &&
                  (0, Q_.globalErrorHandler)(
                    o.error ?? new Error(`BatchLogRecordProcessor: log record export failed (status ${o})`),
                  );
              })
              .catch(Q_.globalErrorHandler),
          n = e.map((o) => o.resource).filter((o) => o.asyncAttributesPending);
        return n.length === 0
          ? r()
          : Promise.all(n.map((o) => o.waitForAsyncAttributes?.())).then(r, Q_.globalErrorHandler);
      }
    };
  oGe.BatchLogRecordProcessorBase = zRt;
});