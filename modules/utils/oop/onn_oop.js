/**
 * @module onn
 * @category utils/oop
 * @label oop
 * @position 564 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (onn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var onn = T((i4) => {
  "use strict";
  Object.defineProperty(i4, "__esModule", { value: !0 });
  i4.JaegerPropagator = i4.UBER_BAGGAGE_HEADER_PREFIX = i4.UBER_TRACE_ID_HEADER = void 0;
  var Pq = (Zt(), bt(cr)),
    NVo = Ii();
  i4.UBER_TRACE_ID_HEADER = "uber-trace-id";
  i4.UBER_BAGGAGE_HEADER_PREFIX = "uberctx";
  var d7t = class {
    _jaegerTraceHeader;
    _jaegerBaggageHeaderPrefix;
    constructor(e) {
      typeof e == "string"
        ? ((this._jaegerTraceHeader = e), (this._jaegerBaggageHeaderPrefix = i4.UBER_BAGGAGE_HEADER_PREFIX))
        : ((this._jaegerTraceHeader = e?.customTraceHeader || i4.UBER_TRACE_ID_HEADER),
          (this._jaegerBaggageHeaderPrefix = e?.customBaggageHeaderPrefix || i4.UBER_BAGGAGE_HEADER_PREFIX));
    }
    inject(e, r, n) {
      let o = Pq.trace.getSpanContext(e),
        s = Pq.propagation.getBaggage(e);
      if (o && (0, NVo.isTracingSuppressed)(e) === !1) {
        let a = `0${(o.traceFlags || Pq.TraceFlags.NONE).toString(16)}`;
        n.set(r, this._jaegerTraceHeader, `${o.traceId}:${o.spanId}:0:${a}`);
      }
      if (s)
        for (let [a, u] of s.getAllEntries())
          n.set(r, `${this._jaegerBaggageHeaderPrefix}-${a}`, encodeURIComponent(u.value));
    }
    extract(e, r, n) {
      let o = n.get(r, this._jaegerTraceHeader),
        s = Array.isArray(o) ? o[0] : o,
        a = n
          .keys(r)
          .filter((m) => m.startsWith(`${this._jaegerBaggageHeaderPrefix}-`))
          .map((m) => {
            let d = n.get(r, m);
            return { key: m.substring(this._jaegerBaggageHeaderPrefix.length + 1), value: Array.isArray(d) ? d[0] : d };
          }),
        u = e;
      if (typeof s == "string") {
        let m = BVo(s);
        m && (u = Pq.trace.setSpanContext(u, m));
      }
      if (a.length === 0) return u;
      let c = Pq.propagation.getBaggage(e) ?? Pq.propagation.createBaggage();
      for (let m of a) m.value !== void 0 && (c = c.setEntry(m.key, { value: decodeURIComponent(m.value) }));
      return ((u = Pq.propagation.setBaggage(u, c)), u);
    }
    fields() {
      return [this._jaegerTraceHeader];
    }
  };
  i4.JaegerPropagator = d7t;
  var PVo = /^[0-9a-f]{1,2}$/i;
  function BVo(t) {
    let e = decodeURIComponent(t).split(":");
    if (e.length !== 4) return null;
    let [r, n, , o] = e,
      s = r.padStart(32, "0"),
      a = n.padStart(16, "0"),
      u = PVo.test(o) ? parseInt(o, 16) & 1 : 1;
    return { traceId: s, spanId: a, isRemote: !0, traceFlags: u };
  }
});