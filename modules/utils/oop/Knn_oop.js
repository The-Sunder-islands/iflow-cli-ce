/**
 * @module Knn
 * @category utils/oop
 * @label oop
 * @position 589 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Knn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Knn = T((Tb) => {
  "use strict";
  Object.defineProperty(Tb, "__esModule", { value: !0 });
  Tb.W3CTraceContextPropagator = Tb.parseTraceParent = Tb.TRACE_STATE_HEADER = Tb.TRACE_PARENT_HEADER = void 0;
  var pje = (Zt(), bt(cr)),
    ezo = rAe(),
    tzo = k7t();
  Tb.TRACE_PARENT_HEADER = "traceparent";
  Tb.TRACE_STATE_HEADER = "tracestate";
  var rzo = "00",
    nzo = "(?!ff)[\\da-f]{2}",
    izo = "(?![0]{32})[\\da-f]{32}",
    ozo = "(?![0]{16})[\\da-f]{16}",
    szo = "[\\da-f]{2}",
    azo = new RegExp(`^\\s?(${nzo})-(${izo})-(${ozo})-(${szo})(-.*)?\\s?$`);
  function Ynn(t) {
    let e = azo.exec(t);
    return !e || (e[1] === "00" && e[5]) ? null : { traceId: e[2], spanId: e[3], traceFlags: parseInt(e[4], 16) };
  }
  Tb.parseTraceParent = Ynn;
  var O7t = class {
    inject(e, r, n) {
      let o = pje.trace.getSpanContext(e);
      if (!o || (0, ezo.isTracingSuppressed)(e) || !(0, pje.isSpanContextValid)(o)) return;
      let s = `${rzo}-${o.traceId}-${o.spanId}-0${Number(o.traceFlags || pje.TraceFlags.NONE).toString(16)}`;
      (n.set(r, Tb.TRACE_PARENT_HEADER, s), o.traceState && n.set(r, Tb.TRACE_STATE_HEADER, o.traceState.serialize()));
    }
    extract(e, r, n) {
      let o = n.get(r, Tb.TRACE_PARENT_HEADER);
      if (!o) return e;
      let s = Array.isArray(o) ? o[0] : o;
      if (typeof s != "string") return e;
      let a = Ynn(s);
      if (!a) return e;
      a.isRemote = !0;
      let u = n.get(r, Tb.TRACE_STATE_HEADER);
      if (u) {
        let c = Array.isArray(u) ? u.join(",") : u;
        a.traceState = new tzo.TraceState(typeof c == "string" ? c : void 0);
      }
      return pje.trace.setSpanContext(e, a);
    }
    fields() {
      return [Tb.TRACE_PARENT_HEADER, Tb.TRACE_STATE_HEADER];
    }
  };
  Tb.W3CTraceContextPropagator = O7t;
});