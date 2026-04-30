/**
 * @module DYr
 * @category utils/oop
 * @label oop
 * @position 325 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (DYr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var DYr = T((xLe) => {
  "use strict";
  Object.defineProperty(xLe, "__esModule", { value: !0 });
  xLe.ConsoleLogRecordExporter = void 0;
  var TYr = Ii(),
    X4t = class {
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
          timestamp: (0, TYr.hrTimeToMicroseconds)(e.hrTime),
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
        r?.({ code: TYr.ExportResultCode.SUCCESS });
      }
    };
  xLe.ConsoleLogRecordExporter = X4t;
});