/**
 * @module Wvt
 * @category telemetry/otel
 * @label opentelemetry
 * @position 173 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Wvt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Wvt = T((Dte) => {
  "use strict";
  Object.defineProperty(Dte, "__esModule", { value: !0 });
  Dte.toLogAttributes = Dte.createExportLogsServiceRequest = void 0;
  var Cxo = HNe(),
    WNe = VNe();
  function Sxo(t, e) {
    let r = (0, Cxo.getOtlpEncoder)(e);
    return { resourceLogs: xxo(t, r) };
  }
  Dte.createExportLogsServiceRequest = Sxo;
  function wxo(t) {
    let e = new Map();
    for (let r of t) {
      let {
          resource: n,
          instrumentationScope: { name: o, version: s = "", schemaUrl: a = "" },
        } = r,
        u = e.get(n);
      u || ((u = new Map()), e.set(n, u));
      let c = `${o}@${s}:${a}`,
        m = u.get(c);
      (m || ((m = []), u.set(c, m)), m.push(r));
    }
    return e;
  }
  function xxo(t, e) {
    let r = wxo(t);
    return Array.from(r, ([n, o]) => {
      let s = (0, WNe.createResource)(n);
      return {
        resource: s,
        scopeLogs: Array.from(o, ([, a]) => ({
          scope: (0, WNe.createInstrumentationScope)(a[0].instrumentationScope),
          logRecords: a.map((u) => Txo(u, e)),
          schemaUrl: a[0].instrumentationScope.schemaUrl,
        })),
        schemaUrl: s.schemaUrl,
      };
    });
  }
  function Txo(t, e) {
    return {
      timeUnixNano: e.encodeHrTime(t.hrTime),
      observedTimeUnixNano: e.encodeHrTime(t.hrTimeObserved),
      severityNumber: t.severityNumber,
      severityText: t.severityText,
      body: (0, WNe.toAnyValue)(t.body),
      eventName: t.eventName,
      attributes: MHr(t.attributes),
      droppedAttributesCount: t.droppedAttributesCount,
      flags: t.spanContext?.traceFlags,
      traceId: e.encodeOptionalSpanContext(t.spanContext?.traceId),
      spanId: e.encodeOptionalSpanContext(t.spanContext?.spanId),
    };
  }
  function MHr(t) {
    return Object.keys(t).map((e) => (0, WNe.toKeyValue)(e, t[e]));
  }
  Dte.toLogAttributes = MHr;
});