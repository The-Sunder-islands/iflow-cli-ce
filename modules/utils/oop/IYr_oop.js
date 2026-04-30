/**
 * @module IYr
 * @category utils/oop
 * @label oop
 * @position 326 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (IYr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var IYr = T((TLe) => {
  "use strict";
  Object.defineProperty(TLe, "__esModule", { value: !0 });
  TLe.SimpleLogRecordProcessor = void 0;
  var ore = Ii(),
    Z4t = class {
      _exporter;
      _shutdownOnce;
      _unresolvedExports;
      constructor(e) {
        ((this._exporter = e),
          (this._shutdownOnce = new ore.BindOnceFuture(this._shutdown, this)),
          (this._unresolvedExports = new Set()));
      }
      onEmit(e) {
        if (this._shutdownOnce.isCalled) return;
        let r = () =>
          ore.internal
            ._export(this._exporter, [e])
            .then((n) => {
              n.code !== ore.ExportResultCode.SUCCESS &&
                (0, ore.globalErrorHandler)(
                  n.error ?? new Error(`SimpleLogRecordProcessor: log record export failed (status ${n})`),
                );
            })
            .catch(ore.globalErrorHandler);
        if (e.resource.asyncAttributesPending) {
          let n = e.resource
            .waitForAsyncAttributes?.()
            .then(() => (this._unresolvedExports.delete(n), r()), ore.globalErrorHandler);
          n != null && this._unresolvedExports.add(n);
        } else r();
      }
      async forceFlush() {
        await Promise.all(Array.from(this._unresolvedExports));
      }
      shutdown() {
        return this._shutdownOnce.call();
      }
      _shutdown() {
        return this._exporter.shutdown();
      }
    };
  TLe.SimpleLogRecordProcessor = Z4t;
});