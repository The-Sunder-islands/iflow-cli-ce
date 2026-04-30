/**
 * @module tJr
 * @category utils/oop
 * @label oop
 * @position 397 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (tJr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var tJr = T((VMe) => {
  "use strict";
  Object.defineProperty(VMe, "__esModule", { value: !0 });
  VMe.Tracer = void 0;
  var Z3 = (Zt(), bt(cr)),
    HMe = Ii(),
    UNo = $Kr(),
    $No = owt(),
    jNo = cwt(),
    lwt = class {
      _sampler;
      _generalLimits;
      _spanLimits;
      _idGenerator;
      instrumentationScope;
      _resource;
      _spanProcessor;
      constructor(e, r, n, o) {
        let s = (0, $No.mergeConfig)(r);
        ((this._sampler = s.sampler),
          (this._generalLimits = s.generalLimits),
          (this._spanLimits = s.spanLimits),
          (this._idGenerator = r.idGenerator || new jNo.RandomIdGenerator()),
          (this._resource = n),
          (this._spanProcessor = o),
          (this.instrumentationScope = e));
      }
      startSpan(e, r = {}, n = Z3.context.active()) {
        r.root && (n = Z3.trace.deleteSpan(n));
        let o = Z3.trace.getSpan(n);
        if ((0, HMe.isTracingSuppressed)(n))
          return (
            Z3.diag.debug("Instrumentation suppressed, returning Noop Span"),
            Z3.trace.wrapSpanContext(Z3.INVALID_SPAN_CONTEXT)
          );
        let s = o?.spanContext(),
          a = this._idGenerator.generateSpanId(),
          u,
          c,
          m;
        !s || !Z3.trace.isSpanContextValid(s)
          ? (c = this._idGenerator.generateTraceId())
          : ((c = s.traceId), (m = s.traceState), (u = s));
        let d = r.kind ?? Z3.SpanKind.INTERNAL,
          f = (r.links ?? []).map((E) => ({
            context: E.context,
            attributes: (0, HMe.sanitizeAttributes)(E.attributes),
          })),
          p = (0, HMe.sanitizeAttributes)(r.attributes),
          h = this._sampler.shouldSample(n, c, e, d, p, f);
        m = h.traceState ?? m;
        let g = h.decision === Z3.SamplingDecision.RECORD_AND_SAMPLED ? Z3.TraceFlags.SAMPLED : Z3.TraceFlags.NONE,
          b = { traceId: c, spanId: a, traceFlags: g, traceState: m };
        if (h.decision === Z3.SamplingDecision.NOT_RECORD)
          return (
            Z3.diag.debug("Recording is off, propagating context in a non-recording span"),
            Z3.trace.wrapSpanContext(b)
          );
        let A = (0, HMe.sanitizeAttributes)(Object.assign(p, h.attributes));
        return new UNo.SpanImpl({
          resource: this._resource,
          scope: this.instrumentationScope,
          context: n,
          spanContext: b,
          name: e,
          kind: d,
          links: f,
          parentSpanContext: u,
          attributes: A,
          startTime: r.startTime,
          spanProcessor: this._spanProcessor,
          spanLimits: this._spanLimits,
        });
      }
      startActiveSpan(e, r, n, o) {
        let s, a, u;
        if (arguments.length < 2) return;
        arguments.length === 2 ? (u = r) : arguments.length === 3 ? ((s = r), (u = n)) : ((s = r), (a = n), (u = o));
        let c = a ?? Z3.context.active(),
          m = this.startSpan(e, s, c),
          d = Z3.trace.setSpan(c, m);
        return Z3.context.with(d, u, void 0, m);
      }
      getGeneralLimits() {
        return this._generalLimits;
      }
      getSpanLimits() {
        return this._spanLimits;
      }
    };
  VMe.Tracer = lwt;
});