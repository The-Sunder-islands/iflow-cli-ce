/**
 * @module aqr
 * @category telemetry/otel
 * @label opentelemetry
 * @position 143 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (aqr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var aqr = T((_b) => {
  "use strict";
  Object.defineProperty(_b, "__esModule", { value: !0 });
  _b.W3CTraceContextPropagator = _b.parseTraceParent = _b.TRACE_STATE_HEADER = _b.TRACE_PARENT_HEADER = void 0;
  var SNe = (Zt(), bt(cr)),
    gwo = tge(),
    bwo = bvt();
  _b.TRACE_PARENT_HEADER = "traceparent";
  _b.TRACE_STATE_HEADER = "tracestate";
  var Awo = "00",
    ywo = "(?!ff)[\\da-f]{2}",
    _wo = "(?![0]{32})[\\da-f]{32}",
    Ewo = "(?![0]{16})[\\da-f]{16}",
    vwo = "[\\da-f]{2}",
    Cwo = new RegExp(`^\\s?(${ywo})-(${_wo})-(${Ewo})-(${vwo})(-.*)?\\s?$`);
  function sqr(t) {
    let e = Cwo.exec(t);
    return !e || (e[1] === "00" && e[5]) ? null : { traceId: e[2], spanId: e[3], traceFlags: parseInt(e[4], 16) };
  }
  _b.parseTraceParent = sqr;
  var Avt = class {
    inject(e, r, n) {
      let o = SNe.trace.getSpanContext(e);
      if (!o || (0, gwo.isTracingSuppressed)(e) || !(0, SNe.isSpanContextValid)(o)) return;
      let s = `${Awo}-${o.traceId}-${o.spanId}-0${Number(o.traceFlags || SNe.TraceFlags.NONE).toString(16)}`;
      (n.set(r, _b.TRACE_PARENT_HEADER, s), o.traceState && n.set(r, _b.TRACE_STATE_HEADER, o.traceState.serialize()));
    }
    extract(e, r, n) {
      let o = n.get(r, _b.TRACE_PARENT_HEADER);
      if (!o) return e;
      let s = Array.isArray(o) ? o[0] : o;
      if (typeof s != "string") return e;
      let a = sqr(s);
      if (!a) return e;
      a.isRemote = !0;
      let u = n.get(r, _b.TRACE_STATE_HEADER);
      if (u) {
        let c = Array.isArray(u) ? u.join(",") : u;
        a.traceState = new bwo.TraceState(typeof c == "string" ? c : void 0);
      }
      return SNe.trace.setSpanContext(e, a);
    }
    fields() {
      return [_b.TRACE_PARENT_HEADER, _b.TRACE_STATE_HEADER];
    }
  };
  _b.W3CTraceContextPropagator = Avt;
});