/**
 * @module Hsn
 * @category utils/oop
 * @label oop
 * @position 697 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Hsn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Hsn = T((rGe) => {
  "use strict";
  Object.defineProperty(rGe, "__esModule", { value: !0 });
  rGe.ConsoleLogRecordExporter = void 0;
  var qsn = a4(),
    HRt = class {
      export(e, r) {
        this._sendLogRecords(e, r);
      }
      shutdown() {
        return Promise.resolve();
      }
      _exportInfo(e) {
        return {
          resource: { attributes: e.resource.attributes },
          instrumentationScope: e.instrumentationScope,
          timestamp: (0, qsn.hrTimeToMicroseconds)(e.hrTime),
          traceId: e.spanContext?.traceId,
          spanId: e.spanContext?.spanId,
          traceFlags: e.spanContext?.traceFlags,
          severityText: e.severityText,
          severityNumber: e.severityNumber,
          body: e.body,
          attributes: e.attributes,
        };
      }
      _sendLogRecords(e, r) {
        for (let n of e) console.dir(this._exportInfo(n), { depth: 3 });
        r?.({ code: qsn.ExportResultCode.SUCCESS });
      }
    };
  rGe.ConsoleLogRecordExporter = HRt;
});