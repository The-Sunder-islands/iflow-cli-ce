/**
 * @module sJr
 * @category utils/oop
 * @label oop
 * @position 401 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (sJr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var sJr = T((YMe) => {
  "use strict";
  Object.defineProperty(YMe, "__esModule", { value: !0 });
  YMe.InMemorySpanExporter = void 0;
  var oJr = Ii(),
    hwt = class {
      _finishedSpans = [];
      _stopped = !1;
      export(e, r) {
        if (this._stopped)
          return r({ code: oJr.ExportResultCode.FAILED, error: new Error("Exporter has been stopped") });
        (this._finishedSpans.push(...e), setTimeout(() => r({ code: oJr.ExportResultCode.SUCCESS }), 0));
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
  YMe.InMemorySpanExporter = hwt;
});