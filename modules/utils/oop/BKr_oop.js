/**
 * @module BKr
 * @category utils/oop
 * @label oop
 * @position 380 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (BKr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var BKr = T((wMe) => {
  "use strict";
  Object.defineProperty(wMe, "__esModule", { value: !0 });
  wMe.SimpleSpanProcessor = void 0;
  var lNo = (Zt(), bt(cr)),
    SMe = Ii(),
    GSt = class {
      _exporter;
      _shutdownOnce;
      _pendingExports;
      constructor(e) {
        ((this._exporter = e),
          (this._shutdownOnce = new SMe.BindOnceFuture(this._shutdown, this)),
          (this._pendingExports = new Set()));
      }
      async forceFlush() {
        (await Promise.all(Array.from(this._pendingExports)),
          this._exporter.forceFlush && (await this._exporter.forceFlush()));
      }
      onStart(e, r) {}
      onEnd(e) {
        if (this._shutdownOnce.isCalled || (e.spanContext().traceFlags & lNo.TraceFlags.SAMPLED) === 0) return;
        let r = this._doExport(e).catch((n) => (0, SMe.globalErrorHandler)(n));
        (this._pendingExports.add(r), r.finally(() => this._pendingExports.delete(r)));
      }
      async _doExport(e) {
        e.resource.asyncAttributesPending && (await e.resource.waitForAsyncAttributes?.());
        let r = await SMe.internal._export(this._exporter, [e]);
        if (r.code !== SMe.ExportResultCode.SUCCESS)
          throw r.error ?? new Error(`SimpleSpanProcessor: span export failed (status ${r})`);
      }
      shutdown() {
        return this._shutdownOnce.call();
      }
      _shutdown() {
        return this._exporter.shutdown();
      }
    };
  wMe.SimpleSpanProcessor = GSt;
});