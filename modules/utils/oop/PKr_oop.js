/**
 * @module PKr
 * @category utils/oop
 * @label oop
 * @position 379 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (PKr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var PKr = T((CMe) => {
  "use strict";
  Object.defineProperty(CMe, "__esModule", { value: !0 });
  CMe.InMemorySpanExporter = void 0;
  var NKr = Ii(),
    QSt = class {
      _finishedSpans = [];
      _stopped = !1;
      export(e, r) {
        if (this._stopped)
          return r({ code: NKr.ExportResultCode.FAILED, error: new Error("Exporter has been stopped") });
        (this._finishedSpans.push(...e), setTimeout(() => r({ code: NKr.ExportResultCode.SUCCESS }), 0));
      }
      shutdown() {
        return ((this._stopped = !0), (this._finishedSpans = []), this.forceFlush());
      }
      forceFlush() {
        return Promise.resolve();
      }
      reset() {
        this._finishedSpans = [];
      }
      getFinishedSpans() {
        return this._finishedSpans;
      }
    };
  CMe.InMemorySpanExporter = QSt;
});