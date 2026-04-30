/**
 * @module aJr
 * @category utils/oop
 * @label oop
 * @position 402 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (aJr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var aJr = T((JMe) => {
  "use strict";
  Object.defineProperty(JMe, "__esModule", { value: !0 });
  JMe.SimpleSpanProcessor = void 0;
  var YNo = (Zt(), bt(cr)),
    KMe = Ii(),
    gwt = class {
      _exporter;
      _shutdownOnce;
      _pendingExports;
      constructor(e) {
        ((this._exporter = e),
          (this._shutdownOnce = new KMe.BindOnceFuture(this._shutdown, this)),
          (this._pendingExports = new Set()));
      }
      async forceFlush() {
        (await Promise.all(Array.from(this._pendingExports)),
          this._exporter.forceFlush && (await this._exporter.forceFlush()));
      }
      onStart(e, r) {}
      onEnd(e) {
        if (this._shutdownOnce.isCalled || (e.spanContext().traceFlags & YNo.TraceFlags.SAMPLED) === 0) return;
        let r = this._doExport(e).catch((n) => (0, KMe.globalErrorHandler)(n));
        (this._pendingExports.add(r), r.finally(() => this._pendingExports.delete(r)));
      }
      async _doExport(e) {
        e.resource.asyncAttributesPending && (await e.resource.waitForAsyncAttributes?.());
        let r = await KMe.internal._export(this._exporter, [e]);
        if (r.code !== KMe.ExportResultCode.SUCCESS)
          throw r.error ?? new Error(`SimpleSpanProcessor: span export failed (status ${r})`);
      }
      shutdown() {
        return this._shutdownOnce.call();
      }
      _shutdown() {
        return this._exporter.shutdown();
      }
    };
  JMe.SimpleSpanProcessor = gwt;
});