/**
 * @module Vsn
 * @category utils/oop
 * @label oop
 * @position 698 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Vsn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Vsn = T((nGe) => {
  "use strict";
  Object.defineProperty(nGe, "__esModule", { value: !0 });
  nGe.SimpleLogRecordProcessor = void 0;
  var Ine = a4(),
    VRt = class {
      _exporter;
      _shutdownOnce;
      _unresolvedExports;
      constructor(e) {
        ((this._exporter = e),
          (this._shutdownOnce = new Ine.BindOnceFuture(this._shutdown, this)),
          (this._unresolvedExports = new Set()));
      }
      onEmit(e) {
        if (this._shutdownOnce.isCalled) return;
        let r = () =>
          Ine.internal
            ._export(this._exporter, [e])
            .then((n) => {
              n.code !== Ine.ExportResultCode.SUCCESS &&
                (0, Ine.globalErrorHandler)(
                  n.error ?? new Error(`SimpleLogRecordProcessor: log record export failed (status ${n})`),
                );
            })
            .catch(Ine.globalErrorHandler);
        if (e.resource.asyncAttributesPending) {
          let n = e.resource
            .waitForAsyncAttributes?.()
            .then(() => (this._unresolvedExports.delete(n), r()), Ine.globalErrorHandler);
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
  nGe.SimpleLogRecordProcessor = VRt;
});