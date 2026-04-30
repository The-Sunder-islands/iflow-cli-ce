/**
 * @module d4t
 * @category telemetry/otel
 * @label opentelemetry
 * @position 252 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (d4t) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var d4t = T((Rx) => {
  "use strict";
  Object.defineProperty(Rx, "__esModule", { value: !0 });
  Rx.createExportTraceServiceRequest = Rx.toOtlpSpanEvent = Rx.toOtlpLink = Rx.sdkSpanToOtlpSpan = void 0;
  var Sge = VNe(),
    $Io = HNe(),
    jIo = 256,
    QIo = 512;
  function OWr(t, e) {
    let r = (t & 255) | jIo;
    return (e && (r |= QIo), r);
  }
  function NWr(t, e) {
    let r = t.spanContext(),
      n = t.status,
      o = t.parentSpanContext?.spanId ? e.encodeSpanContext(t.parentSpanContext?.spanId) : void 0;
    return {
      traceId: e.encodeSpanContext(r.traceId),
      spanId: e.encodeSpanContext(r.spanId),
      parentSpanId: o,
      traceState: r.traceState?.serialize(),
      name: t.name,
      kind: t.kind == null ? 0 : t.kind + 1,
      startTimeUnixNano: e.encodeHrTime(t.startTime),
      endTimeUnixNano: e.encodeHrTime(t.endTime),
      attributes: (0, Sge.toAttributes)(t.attributes),
      droppedAttributesCount: t.droppedAttributesCount,
      events: t.events.map((s) => BWr(s, e)),
      droppedEventsCount: t.droppedEventsCount,
      status: { code: n.code, message: n.message },
      links: t.links.map((s) => PWr(s, e)),
      droppedLinksCount: t.droppedLinksCount,
      flags: OWr(r.traceFlags, t.parentSpanContext?.isRemote),
    };
  }
  Rx.sdkSpanToOtlpSpan = NWr;
  function PWr(t, e) {
    return {
      attributes: t.attributes ? (0, Sge.toAttributes)(t.attributes) : [],
      spanId: e.encodeSpanContext(t.context.spanId),
      traceId: e.encodeSpanContext(t.context.traceId),
      traceState: t.context.traceState?.serialize(),
      droppedAttributesCount: t.droppedAttributesCount || 0,
      flags: OWr(t.context.traceFlags, t.context.isRemote),
    };
  }
  Rx.toOtlpLink = PWr;
  function BWr(t, e) {
    return {
      attributes: t.attributes ? (0, Sge.toAttributes)(t.attributes) : [],
      name: t.name,
      timeUnixNano: e.encodeHrTime(t.time),
      droppedAttributesCount: t.droppedAttributesCount || 0,
    };
  }
  Rx.toOtlpSpanEvent = BWr;
  function GIo(t, e) {
    let r = (0, $Io.getOtlpEncoder)(e);
    return { resourceSpans: HIo(t, r) };
  }
  Rx.createExportTraceServiceRequest = GIo;
  function qIo(t) {
    let e = new Map();
    for (let r of t) {
      let n = e.get(r.resource);
      n || ((n = new Map()), e.set(r.resource, n));
      let o = `${r.instrumentationScope.name}@${r.instrumentationScope.version || ""}:${r.instrumentationScope.schemaUrl || ""}`,
        s = n.get(o);
      (s || ((s = []), n.set(o, s)), s.push(r));
    }
    return e;
  }
  function HIo(t, e) {
    let r = qIo(t),
      n = [],
      o = r.entries(),
      s = o.next();
    for (; !s.done; ) {
      let [a, u] = s.value,
        c = [],
        m = u.values(),
        d = m.next();
      for (; !d.done; ) {
        let h = d.value;
        if (h.length > 0) {
          let g = h.map((b) => NWr(b, e));
          c.push({
            scope: (0, Sge.createInstrumentationScope)(h[0].instrumentationScope),
            spans: g,
            schemaUrl: h[0].instrumentationScope.schemaUrl,
          });
        }
        d = m.next();
      }
      let f = (0, Sge.createResource)(a),
        p = { resource: f, scopeSpans: c, schemaUrl: f.schemaUrl };
      (n.push(p), (s = o.next()));
    }
    return n;
  }
});