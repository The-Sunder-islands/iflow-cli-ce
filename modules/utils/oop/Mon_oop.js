/**
 * @module Mon
 * @category utils/oop
 * @label oop
 * @position 655 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Mon) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Mon = T((kb) => {
  "use strict";
  Object.defineProperty(kb, "__esModule", { value: !0 });
  kb.W3CTraceContextPropagator = kb.parseTraceParent = kb.TRACE_STATE_HEADER = kb.TRACE_PARENT_HEADER = void 0;
  var gQe = (Zt(), bt(cr)),
    qKo = mAe(),
    HKo = ARt();
  kb.TRACE_PARENT_HEADER = "traceparent";
  kb.TRACE_STATE_HEADER = "tracestate";
  var VKo = "00",
    WKo = "(?!ff)[\\da-f]{2}",
    zKo = "(?![0]{32})[\\da-f]{32}",
    YKo = "(?![0]{16})[\\da-f]{16}",
    KKo = "[\\da-f]{2}",
    JKo = new RegExp(`^\\s?(${WKo})-(${zKo})-(${YKo})-(${KKo})(-.*)?\\s?$`);
  function Lon(t) {
    let e = JKo.exec(t);
    return !e || (e[1] === "00" && e[5]) ? null : { traceId: e[2], spanId: e[3], traceFlags: parseInt(e[4], 16) };
  }
  kb.parseTraceParent = Lon;
  var yRt = class {
    inject(e, r, n) {
      let o = gQe.trace.getSpanContext(e);
      if (!o || (0, qKo.isTracingSuppressed)(e) || !(0, gQe.isSpanContextValid)(o)) return;
      let s = `${VKo}-${o.traceId}-${o.spanId}-0${Number(o.traceFlags || gQe.TraceFlags.NONE).toString(16)}`;
      (n.set(r, kb.TRACE_PARENT_HEADER, s), o.traceState && n.set(r, kb.TRACE_STATE_HEADER, o.traceState.serialize()));
    }
    extract(e, r, n) {
      let o = n.get(r, kb.TRACE_PARENT_HEADER);
      if (!o) return e;
      let s = Array.isArray(o) ? o[0] : o;
      if (typeof s != "string") return e;
      let a = Lon(s);
      if (!a) return e;
      a.isRemote = !0;
      let u = n.get(r, kb.TRACE_STATE_HEADER);
      if (u) {
        let c = Array.isArray(u) ? u.join(",") : u;
        a.traceState = new HKo.TraceState(typeof c == "string" ? c : void 0);
      }
      return gQe.trace.setSpanContext(e, a);
    }
    fields() {
      return [kb.TRACE_PARENT_HEADER, kb.TRACE_STATE_HEADER];
    }
  };
  kb.W3CTraceContextPropagator = yRt;
});