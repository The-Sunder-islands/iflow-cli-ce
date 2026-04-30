/**
 * @module zKr
 * @category telemetry/otel
 * @label opentelemetry
 * @position 392 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (zKr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var zKr = T((jMe) => {
  "use strict";
  Object.defineProperty(jMe, "__esModule", { value: !0 });
  jMe.BatchSpanProcessorBase = void 0;
  var gre = (Zt(), bt(cr)),
    Hx = Ii(),
    swt = class {
      _exporter;
      _maxExportBatchSize;
      _maxQueueSize;
      _scheduledDelayMillis;
      _exportTimeoutMillis;
      _isExporting = !1;
      _finishedSpans = [];
      _timer;
      _shutdownOnce;
      _droppedSpansCount = 0;
      constructor(e, r) {
        ((this._exporter = e),
          (this._maxExportBatchSize =
            typeof r?.maxExportBatchSize == "number"
              ? r.maxExportBatchSize
              : ((0, Hx.getNumberFromEnv)("OTEL_BSP_MAX_EXPORT_BATCH_SIZE") ?? 512)),
          (this._maxQueueSize =
            typeof r?.maxQueueSize == "number"
              ? r.maxQueueSize
              : ((0, Hx.getNumberFromEnv)("OTEL_BSP_MAX_QUEUE_SIZE") ?? 2048)),
          (this._scheduledDelayMillis =
            typeof r?.scheduledDelayMillis == "number"
              ? r.scheduledDelayMillis
              : ((0, Hx.getNumberFromEnv)("OTEL_BSP_SCHEDULE_DELAY") ?? 5e3)),
          (this._exportTimeoutMillis =
            typeof r?.exportTimeoutMillis == "number"
              ? r.exportTimeoutMillis
              : ((0, Hx.getNumberFromEnv)("OTEL_BSP_EXPORT_TIMEOUT") ?? 3e4)),
          (this._shutdownOnce = new Hx.BindOnceFuture(this._shutdown, this)),
          this._maxExportBatchSize > this._maxQueueSize &&
            (gre.diag.warn(
              "BatchSpanProcessor: maxExportBatchSize must be smaller or equal to maxQueueSize, setting maxExportBatchSize to match maxQueueSize",
            ),
            (this._maxExportBatchSize = this._maxQueueSize)));
      }
      forceFlush() {
        return this._shutdownOnce.isCalled ? this._shutdownOnce.promise : this._flushAll();
      }
      onStart(e, r) {}
      onEnd(e) {
        this._shutdownOnce.isCalled ||
          ((e.spanContext().traceFlags & gre.TraceFlags.SAMPLED) !== 0 && this._addToBuffer(e));
      }
      shutdown() {
        return this._shutdownOnce.call();
      }
      _shutdown() {
        return Promise.resolve()
          .then(() => this.onShutdown())
          .then(() => this._flushAll())
          .then(() => this._exporter.shutdown());
      }
      _addToBuffer(e) {
        if (this._finishedSpans.length >= this._maxQueueSize) {
          (this._droppedSpansCount === 0 && gre.diag.debug("maxQueueSize reached, dropping spans"),
            this._droppedSpansCount++);
          return;
        }
        (this._droppedSpansCount > 0 &&
          (gre.diag.warn(`Dropped ${this._droppedSpansCount} spans because maxQueueSize reached`),
          (this._droppedSpansCount = 0)),
          this._finishedSpans.push(e),
          this._maybeStartTimer());
      }
      _flushAll() {
        return new Promise((e, r) => {
          let n = [],
            o = Math.ceil(this._finishedSpans.length / this._maxExportBatchSize);
          for (let s = 0, a = o; s < a; s++) n.push(this._flushOneBatch());
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
          this._finishedSpans.length === 0
            ? Promise.resolve()
            : new Promise((e, r) => {
                let n = setTimeout(() => {
                  r(new Error("Timeout"));
                }, this._exportTimeoutMillis);
                gre.context.with((0, Hx.suppressTracing)(gre.context.active()), () => {
                  let o;
                  this._finishedSpans.length <= this._maxExportBatchSize
                    ? ((o = this._finishedSpans), (this._finishedSpans = []))
                    : (o = this._finishedSpans.splice(0, this._maxExportBatchSize));
                  let s = () =>
                      this._exporter.export(o, (u) => {
                        (clearTimeout(n),
                          u.code === Hx.ExportResultCode.SUCCESS
                            ? e()
                            : r(u.error ?? new Error("BatchSpanProcessor: span export failed")));
                      }),
                    a = null;
                  for (let u = 0, c = o.length; u < c; u++) {
                    let m = o[u];
                    m.resource.asyncAttributesPending &&
                      m.resource.waitForAsyncAttributes &&
                      ((a ??= []), a.push(m.resource.waitForAsyncAttributes()));
                  }
                  a === null
                    ? s()
                    : Promise.all(a).then(s, (u) => {
                        ((0, Hx.globalErrorHandler)(u), r(u));
                      });
                });
              })
        );
      }
      _maybeStartTimer() {
        if (this._isExporting) return;
        let e = () => {
          ((this._isExporting = !0),
            this._flushOneBatch()
              .finally(() => {
                ((this._isExporting = !1),
                  this._finishedSpans.length > 0 && (this._clearTimer(), this._maybeStartTimer()));
              })
              .catch((r) => {
                ((this._isExporting = !1), (0, Hx.globalErrorHandler)(r));
              }));
        };
        if (this._finishedSpans.length >= this._maxExportBatchSize) return e();
        this._timer === void 0 &&
          ((this._timer = setTimeout(() => e(), this._scheduledDelayMillis)), (0, Hx.unrefTimer)(this._timer));
      }
      _clearTimer() {
        this._timer !== void 0 && (clearTimeout(this._timer), (this._timer = void 0));
      }
    };
  jMe.BatchSpanProcessorBase = swt;
});