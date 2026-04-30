/**
 * @module UKr
 * @category utils/oop
 * @label oop
 * @position 385 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (UKr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var UKr = T((IMe) => {
  "use strict";
  Object.defineProperty(IMe, "__esModule", { value: !0 });
  IMe.ExceptionEventName = void 0;
  IMe.ExceptionEventName = "exception";
});
var $Kr = T((RMe) => {
  "use strict";
  Object.defineProperty(RMe, "__esModule", { value: !0 });
  RMe.SpanImpl = void 0;
  var I_ = (Zt(), bt(cr)),
    vb = Ii(),
    sq = ($1(), bt(Ih)),
    xNo = UKr(),
    zSt = class {
      _spanContext;
      kind;
      parentSpanContext;
      attributes = {};
      links = [];
      events = [];
      startTime;
      resource;
      instrumentationScope;
      _droppedAttributesCount = 0;
      _droppedEventsCount = 0;
      _droppedLinksCount = 0;
      name;
      status = { code: I_.SpanStatusCode.UNSET };
      endTime = [0, 0];
      _ended = !1;
      _duration = [-1, -1];
      _spanProcessor;
      _spanLimits;
      _attributeValueLengthLimit;
      _performanceStartTime;
      _performanceOffset;
      _startTimeProvided;
      constructor(e) {
        let r = Date.now();
        ((this._spanContext = e.spanContext),
          (this._performanceStartTime = vb.otperformance.now()),
          (this._performanceOffset = r - (this._performanceStartTime + (0, vb.getTimeOrigin)())),
          (this._startTimeProvided = e.startTime != null),
          (this._spanLimits = e.spanLimits),
          (this._attributeValueLengthLimit = this._spanLimits.attributeValueLengthLimit || 0),
          (this._spanProcessor = e.spanProcessor),
          (this.name = e.name),
          (this.parentSpanContext = e.parentSpanContext),
          (this.kind = e.kind),
          (this.links = e.links || []),
          (this.startTime = this._getTime(e.startTime ?? r)),
          (this.resource = e.resource),
          (this.instrumentationScope = e.scope),
          e.attributes != null && this.setAttributes(e.attributes),
          this._spanProcessor.onStart(this, e.context));
      }
      spanContext() {
        return this._spanContext;
      }
      setAttribute(e, r) {
        if (r == null || this._isSpanEnded()) return this;
        if (e.length === 0) return (I_.diag.warn(`Invalid attribute key: ${e}`), this);
        if (!(0, vb.isAttributeValue)(r)) return (I_.diag.warn(`Invalid attribute value set for key: ${e}`), this);
        let { attributeCountLimit: n } = this._spanLimits;
        return n !== void 0 &&
          Object.keys(this.attributes).length >= n &&
          !Object.prototype.hasOwnProperty.call(this.attributes, e)
          ? (this._droppedAttributesCount++, this)
          : ((this.attributes[e] = this._truncateToSize(r)), this);
      }
      setAttributes(e) {
        for (let [r, n] of Object.entries(e)) this.setAttribute(r, n);
        return this;
      }
      addEvent(e, r, n) {
        if (this._isSpanEnded()) return this;
        let { eventCountLimit: o } = this._spanLimits;
        if (o === 0) return (I_.diag.warn("No events allowed."), this._droppedEventsCount++, this);
        (o !== void 0 &&
          this.events.length >= o &&
          (this._droppedEventsCount === 0 && I_.diag.debug("Dropping extra events."),
          this.events.shift(),
          this._droppedEventsCount++),
          (0, vb.isTimeInput)(r) && ((0, vb.isTimeInput)(n) || (n = r), (r = void 0)));
        let s = (0, vb.sanitizeAttributes)(r);
        return (this.events.push({ name: e, attributes: s, time: this._getTime(n), droppedAttributesCount: 0 }), this);
      }
      addLink(e) {
        return (this.links.push(e), this);
      }
      addLinks(e) {
        return (this.links.push(...e), this);
      }
      setStatus(e) {
        return this._isSpanEnded()
          ? this
          : ((this.status = { ...e }),
            this.status.message != null &&
              typeof e.message != "string" &&
              (I_.diag.warn(`Dropping invalid status.message of type '${typeof e.message}', expected 'string'`),
              delete this.status.message),
            this);
      }
      updateName(e) {
        return this._isSpanEnded() ? this : ((this.name = e), this);
      }
      end(e) {
        if (this._isSpanEnded()) {
          I_.diag.error(
            `${this.name} ${this._spanContext.traceId}-${this._spanContext.spanId} - You can only call end() on a span once.`,
          );
          return;
        }
        ((this._ended = !0),
          (this.endTime = this._getTime(e)),
          (this._duration = (0, vb.hrTimeDuration)(this.startTime, this.endTime)),
          this._duration[0] < 0 &&
            (I_.diag.warn(
              "Inconsistent start and end time, startTime > endTime. Setting span duration to 0ms.",
              this.startTime,
              this.endTime,
            ),
            (this.endTime = this.startTime.slice()),
            (this._duration = [0, 0])),
          this._droppedEventsCount > 0 &&
            I_.diag.warn(`Dropped ${this._droppedEventsCount} events because eventCountLimit reached`),
          this._spanProcessor.onEnd(this));
      }
      _getTime(e) {
        if (typeof e == "number" && e <= vb.otperformance.now()) return (0, vb.hrTime)(e + this._performanceOffset);
        if (typeof e == "number") return (0, vb.millisToHrTime)(e);
        if (e instanceof Date) return (0, vb.millisToHrTime)(e.getTime());
        if ((0, vb.isTimeInputHrTime)(e)) return e;
        if (this._startTimeProvided) return (0, vb.millisToHrTime)(Date.now());
        let r = vb.otperformance.now() - this._performanceStartTime;
        return (0, vb.addHrTimes)(this.startTime, (0, vb.millisToHrTime)(r));
      }
      isRecording() {
        return this._ended === !1;
      }
      recordException(e, r) {
        let n = {};
        (typeof e == "string"
          ? (n[sq.ATTR_EXCEPTION_MESSAGE] = e)
          : e &&
            (e.code ? (n[sq.ATTR_EXCEPTION_TYPE] = e.code.toString()) : e.name && (n[sq.ATTR_EXCEPTION_TYPE] = e.name),
            e.message && (n[sq.ATTR_EXCEPTION_MESSAGE] = e.message),
            e.stack && (n[sq.ATTR_EXCEPTION_STACKTRACE] = e.stack)),
          n[sq.ATTR_EXCEPTION_TYPE] || n[sq.ATTR_EXCEPTION_MESSAGE]
            ? this.addEvent(xNo.ExceptionEventName, n, r)
            : I_.diag.warn(`Failed to record an exception ${e}`));
      }
      get duration() {
        return this._duration;
      }
      get ended() {
        return this._ended;
      }
      get droppedAttributesCount() {
        return this._droppedAttributesCount;
      }
      get droppedEventsCount() {
        return this._droppedEventsCount;
      }
      get droppedLinksCount() {
        return this._droppedLinksCount;
      }
      _isSpanEnded() {
        if (this._ended) {
          let e = new Error(
            `Operation attempted on ended Span {traceId: ${this._spanContext.traceId}, spanId: ${this._spanContext.spanId}}`,
          );
          I_.diag.warn(
            `Cannot execute the operation on ended Span {traceId: ${this._spanContext.traceId}, spanId: ${this._spanContext.spanId}}`,
            e,
          );
        }
        return this._ended;
      }
      _truncateToLimitUtil(e, r) {
        return e.length <= r ? e : e.substring(0, r);
      }
      _truncateToSize(e) {
        let r = this._attributeValueLengthLimit;
        return r <= 0
          ? (I_.diag.warn(`Attribute value limit must be positive, got ${r}`), e)
          : typeof e == "string"
            ? this._truncateToLimitUtil(e, r)
            : Array.isArray(e)
              ? e.map((n) => (typeof n == "string" ? this._truncateToLimitUtil(n, r) : n))
              : e;
      }
    };
  RMe.SpanImpl = zSt;
});
var $ge = T((Uge) => {
  "use strict";
  Object.defineProperty(Uge, "__esModule", { value: !0 });
  Uge.SamplingDecision = void 0;
  var TNo;
  (function (t) {
    ((t[(t.NOT_RECORD = 0)] = "NOT_RECORD"),
      (t[(t.RECORD = 1)] = "RECORD"),
      (t[(t.RECORD_AND_SAMPLED = 2)] = "RECORD_AND_SAMPLED"));
  })((TNo = Uge.SamplingDecision || (Uge.SamplingDecision = {})));
});