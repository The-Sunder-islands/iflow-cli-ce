/**
 * @module yYr
 * @category utils/oop
 * @label oop
 * @position 318 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (yYr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var yYr = T((_Le) => {
  "use strict";
  Object.defineProperty(_Le, "__esModule", { value: !0 });
  _Le.LogRecordImpl = void 0;
  var eq = (Zt(), bt(cr)),
    yLe = Ii(),
    H4t = class {
      hrTime;
      hrTimeObserved;
      spanContext;
      resource;
      instrumentationScope;
      attributes = {};
      _severityText;
      _severityNumber;
      _body;
      _eventName;
      totalAttributesCount = 0;
      _isReadonly = !1;
      _logRecordLimits;
      set severityText(e) {
        this._isLogRecordReadonly() || (this._severityText = e);
      }
      get severityText() {
        return this._severityText;
      }
      set severityNumber(e) {
        this._isLogRecordReadonly() || (this._severityNumber = e);
      }
      get severityNumber() {
        return this._severityNumber;
      }
      set body(e) {
        this._isLogRecordReadonly() || (this._body = e);
      }
      get body() {
        return this._body;
      }
      get eventName() {
        return this._eventName;
      }
      set eventName(e) {
        this._isLogRecordReadonly() || (this._eventName = e);
      }
      get droppedAttributesCount() {
        return this.totalAttributesCount - Object.keys(this.attributes).length;
      }
      constructor(e, r, n) {
        let {
            timestamp: o,
            observedTimestamp: s,
            eventName: a,
            severityNumber: u,
            severityText: c,
            body: m,
            attributes: d = {},
            context: f,
          } = n,
          p = Date.now();
        if (
          ((this.hrTime = (0, yLe.timeInputToHrTime)(o ?? p)),
          (this.hrTimeObserved = (0, yLe.timeInputToHrTime)(s ?? p)),
          f)
        ) {
          let h = eq.trace.getSpanContext(f);
          h && eq.isSpanContextValid(h) && (this.spanContext = h);
        }
        ((this.severityNumber = u),
          (this.severityText = c),
          (this.body = m),
          (this.resource = e.resource),
          (this.instrumentationScope = r),
          (this._logRecordLimits = e.logRecordLimits),
          (this._eventName = a),
          this.setAttributes(d));
      }
      setAttribute(e, r) {
        return this._isLogRecordReadonly()
          ? this
          : r === null
            ? this
            : e.length === 0
              ? (eq.diag.warn(`Invalid attribute key: ${e}`), this)
              : !(0, yLe.isAttributeValue)(r) &&
                  !(typeof r == "object" && !Array.isArray(r) && Object.keys(r).length > 0)
                ? (eq.diag.warn(`Invalid attribute value set for key: ${e}`), this)
                : ((this.totalAttributesCount += 1),
                  Object.keys(this.attributes).length >= this._logRecordLimits.attributeCountLimit &&
                  !Object.prototype.hasOwnProperty.call(this.attributes, e)
                    ? (this.droppedAttributesCount === 1 && eq.diag.warn("Dropping extra attributes."), this)
                    : ((0, yLe.isAttributeValue)(r)
                        ? (this.attributes[e] = this._truncateToSize(r))
                        : (this.attributes[e] = r),
                      this));
      }
      setAttributes(e) {
        for (let [r, n] of Object.entries(e)) this.setAttribute(r, n);
        return this;
      }
      setBody(e) {
        return ((this.body = e), this);
      }
      setEventName(e) {
        return ((this.eventName = e), this);
      }
      setSeverityNumber(e) {
        return ((this.severityNumber = e), this);
      }
      setSeverityText(e) {
        return ((this.severityText = e), this);
      }
      _makeReadonly() {
        this._isReadonly = !0;
      }
      _truncateToSize(e) {
        let r = this._logRecordLimits.attributeValueLengthLimit;
        return r <= 0
          ? (eq.diag.warn(`Attribute value limit must be positive, got ${r}`), e)
          : typeof e == "string"
            ? this._truncateToLimitUtil(e, r)
            : Array.isArray(e)
              ? e.map((n) => (typeof n == "string" ? this._truncateToLimitUtil(n, r) : n))
              : e;
      }
      _truncateToLimitUtil(e, r) {
        return e.length <= r ? e : e.substring(0, r);
      }
      _isLogRecordReadonly() {
        return (
          this._isReadonly && eq.diag.warn("Can not execute the operation on emitted log record"),
          this._isReadonly
        );
      }
    };
  _Le.LogRecordImpl = H4t;
});