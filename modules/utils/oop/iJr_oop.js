/**
 * @module iJr
 * @category utils/oop
 * @label oop
 * @position 400 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (iJr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var iJr = T((zMe) => {
  "use strict";
  Object.defineProperty(zMe, "__esModule", { value: !0 });
  zMe.ConsoleSpanExporter = void 0;
  var fwt = Ii(),
    pwt = class {
      export(e, r) {
        return this._sendSpans(e, r);
      }
      shutdown() {
        return (this._sendSpans([]), this.forceFlush());
      }
      forceFlush() {
        return Promise.resolve();
      }
      _exportInfo(e) {
        return {
          resource: { attributes: e.resource.attributes },
          instrumentationScope: e.instrumentationScope,
          traceId: e.spanContext().traceId,
          parentSpanContext: e.parentSpanContext,
          traceState: e.spanContext().traceState?.serialize(),
          name: e.name,
          id: e.spanContext().spanId,
          kind: e.kind,
          timestamp: (0, fwt.hrTimeToMicroseconds)(e.startTime),
          duration: (0, fwt.hrTimeToMicroseconds)(e.duration),
          attributes: e.attributes,
          status: e.status,
          events: e.events,
          links: e.links,
        };
      }
      _sendSpans(e, r) {
        for (let n of e) console.dir(this._exportInfo(n), { depth: 3 });
        if (r) return r({ code: fwt.ExportResultCode.SUCCESS });
      }
    };
  zMe.ConsoleSpanExporter = pwt;
});