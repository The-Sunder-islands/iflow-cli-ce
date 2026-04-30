/**
 * @module IKr
 * @category utils/oop
 * @label oop
 * @position 375 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (IKr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var IKr = T((_Me) => {
  "use strict";
  Object.defineProperty(_Me, "__esModule", { value: !0 });
  _Me.Tracer = void 0;
  var X3 = (Zt(), bt(cr)),
    yMe = Ii(),
    eNo = pKr(),
    tNo = OSt(),
    rNo = LSt(),
    MSt = class {
      _sampler;
      _generalLimits;
      _spanLimits;
      _idGenerator;
      instrumentationScope;
      _resource;
      _spanProcessor;
      constructor(e, r, n, o) {
        let s = (0, tNo.mergeConfig)(r);
        ((this._sampler = s.sampler),
          (this._generalLimits = s.generalLimits),
          (this._spanLimits = s.spanLimits),
          (this._idGenerator = r.idGenerator || new rNo.RandomIdGenerator()),
          (this._resource = n),
          (this._spanProcessor = o),
          (this.instrumentationScope = e));
      }
      startSpan(e, r = {}, n = X3.context.active()) {
        r.root && (n = X3.trace.deleteSpan(n));
        let o = X3.trace.getSpan(n);
        if ((0, yMe.isTracingSuppressed)(n))
          return (
            X3.diag.debug("Instrumentation suppressed, returning Noop Span"),
            X3.trace.wrapSpanContext(X3.INVALID_SPAN_CONTEXT)
          );
        let s = o?.spanContext(),
          a = this._idGenerator.generateSpanId(),
          u,
          c,
          m;
        !s || !X3.trace.isSpanContextValid(s)
          ? (c = this._idGenerator.generateTraceId())
          : ((c = s.traceId), (m = s.traceState), (u = s));
        let d = r.kind ?? X3.SpanKind.INTERNAL,
          f = (r.links ?? []).map((E) => ({
            context: E.context,
            attributes: (0, yMe.sanitizeAttributes)(E.attributes),
          })),
          p = (0, yMe.sanitizeAttributes)(r.attributes),
          h = this._sampler.shouldSample(n, c, e, d, p, f);
        m = h.traceState ?? m;
        let g = h.decision === X3.SamplingDecision.RECORD_AND_SAMPLED ? X3.TraceFlags.SAMPLED : X3.TraceFlags.NONE,
          b = { traceId: c, spanId: a, traceFlags: g, traceState: m };
        if (h.decision === X3.SamplingDecision.NOT_RECORD)
          return (
            X3.diag.debug("Recording is off, propagating context in a non-recording span"),
            X3.trace.wrapSpanContext(b)
          );
        let A = (0, yMe.sanitizeAttributes)(Object.assign(p, h.attributes));
        return new eNo.SpanImpl({
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
        let c = a ?? X3.context.active(),
          m = this.startSpan(e, s, c),
          d = X3.trace.setSpan(c, m);
        return X3.context.with(d, u, void 0, m);
      }
      getGeneralLimits() {
        return this._generalLimits;
      }
      getSpanLimits() {
        return this._spanLimits;
      }
    };
  _Me.Tracer = MSt;
});