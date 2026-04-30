/**
 * @module zsn
 * @category utils/oop
 * @label oop
 * @position 699 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (zsn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var zsn = T((iGe) => {
  "use strict";
  Object.defineProperty(iGe, "__esModule", { value: !0 });
  iGe.InMemoryLogRecordExporter = void 0;
  var Wsn = a4(),
    WRt = class {
      _finishedLogRecords = [];
      _stopped = !1;
      export(e, r) {
        if (this._stopped)
          return r({ code: Wsn.ExportResultCode.FAILED, error: new Error("Exporter has been stopped") });
        (this._finishedLogRecords.push(...e), r({ code: Wsn.ExportResultCode.SUCCESS }));
      }
      shutdown() {
        return ((this._stopped = !0), this.reset(), Promise.resolve());
      }
      getFinishedLogRecords() {
        return this._finishedLogRecords;
      }
      reset() {
        this._finishedLogRecords = [];
      }
    };
  iGe.InMemoryLogRecordExporter = WRt;
});