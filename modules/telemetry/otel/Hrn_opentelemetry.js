/**
 * @module Hrn
 * @category telemetry/otel
 * @label opentelemetry
 * @position 553 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Hrn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Hrn = T((M_) => {
  "use strict";
  Object.defineProperty(M_, "__esModule", { value: !0 });
  M_._toZipkinAnnotations =
    M_._toZipkinTags =
    M_.toZipkinSpan =
    M_.defaultStatusErrorTagName =
    M_.defaultStatusCodeTagName =
      void 0;
  var rL = (Zt(), bt(cr)),
    r7t = Ii(),
    G$e = Qrn(),
    nVo = {
      [rL.SpanKind.CLIENT]: G$e.SpanKind.CLIENT,
      [rL.SpanKind.SERVER]: G$e.SpanKind.SERVER,
      [rL.SpanKind.CONSUMER]: G$e.SpanKind.CONSUMER,
      [rL.SpanKind.PRODUCER]: G$e.SpanKind.PRODUCER,
      [rL.SpanKind.INTERNAL]: void 0,
    };
  M_.defaultStatusCodeTagName = "otel.status_code";
  M_.defaultStatusErrorTagName = "error";
  function iVo(t, e, r, n) {
    return {
      traceId: t.spanContext().traceId,
      parentId: t.parentSpanContext?.spanId,
      name: t.name,
      id: t.spanContext().spanId,
      kind: nVo[t.kind],
      timestamp: (0, r7t.hrTimeToMicroseconds)(t.startTime),
      duration: Math.round((0, r7t.hrTimeToMicroseconds)(t.duration)),
      localEndpoint: { serviceName: e },
      tags: Grn(t, r, n),
      annotations: t.events.length ? qrn(t.events) : void 0,
    };
  }
  M_.toZipkinSpan = iVo;
  function Grn(
    { attributes: t, resource: e, status: r, droppedAttributesCount: n, droppedEventsCount: o, droppedLinksCount: s },
    a,
    u,
  ) {
    let c = {};
    for (let m of Object.keys(t)) c[m] = String(t[m]);
    return (
      r.code !== rL.SpanStatusCode.UNSET && (c[a] = String(rL.SpanStatusCode[r.code])),
      r.code === rL.SpanStatusCode.ERROR && r.message && (c[u] = r.message),
      n && (c["otel.dropped_attributes_count"] = String(n)),
      o && (c["otel.dropped_events_count"] = String(o)),
      s && (c["otel.dropped_links_count"] = String(s)),
      Object.keys(e.attributes).forEach((m) => (c[m] = String(e.attributes[m]))),
      c
    );
  }
  M_._toZipkinTags = Grn;
  function qrn(t) {
    return t.map((e) => ({ timestamp: Math.round((0, r7t.hrTimeToMicroseconds)(e.time)), value: e.name }));
  }
  M_._toZipkinAnnotations = qrn;
});