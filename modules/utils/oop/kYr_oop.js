/**
 * @module kYr
 * @category utils/oop
 * @label oop
 * @position 327 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (kYr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var kYr = T((DLe) => {
  "use strict";
  Object.defineProperty(DLe, "__esModule", { value: !0 });
  DLe.InMemoryLogRecordExporter = void 0;
  var RYr = Ii(),
    eSt = class {
      _finishedLogRecords = [];
      _stopped = !1;
      export(e, r) {
        if (this._stopped)
          return r({ code: RYr.ExportResultCode.FAILED, error: new Error("Exporter has been stopped") });
        (this._finishedLogRecords.push(...e), r({ code: RYr.ExportResultCode.SUCCESS }));
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
  DLe.InMemoryLogRecordExporter = eSt;
});