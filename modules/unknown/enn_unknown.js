/**
 * @module enn
 * @category unknown
 * @label unknown
 * @position 559 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (enn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var enn = T((z$e) => {
  "use strict";
  Object.defineProperty(z$e, "__esModule", { value: !0 });
  z$e.B3MultiPropagator = void 0;
  var n4 = (Zt(), bt(cr)),
    lVo = Ii(),
    Xrn = s7t(),
    h6 = Xbe(),
    mVo = new Set([!0, "true", "True", "1", 1]),
    dVo = new Set([!1, "false", "False", "0", 0]);
  function fVo(t) {
    return t === n4.TraceFlags.SAMPLED || t === n4.TraceFlags.NONE;
  }
  function pVo(t) {
    return Array.isArray(t) ? t[0] : t;
  }
  function W$e(t, e, r) {
    let n = e.get(t, r);
    return pVo(n);
  }
  function hVo(t, e) {
    let r = W$e(t, e, h6.X_B3_TRACE_ID);
    return typeof r == "string" ? r.padStart(32, "0") : "";
  }
  function gVo(t, e) {
    let r = W$e(t, e, h6.X_B3_SPAN_ID);
    return typeof r == "string" ? r : "";
  }
  function Zrn(t, e) {
    return W$e(t, e, h6.X_B3_FLAGS) === "1" ? "1" : void 0;
  }
  function bVo(t, e) {
    let r = W$e(t, e, h6.X_B3_SAMPLED);
    if (Zrn(t, e) === "1" || mVo.has(r)) return n4.TraceFlags.SAMPLED;
    if (r === void 0 || dVo.has(r)) return n4.TraceFlags.NONE;
  }
  var a7t = class {
    inject(e, r, n) {
      let o = n4.trace.getSpanContext(e);
      if (!o || !(0, n4.isSpanContextValid)(o) || (0, lVo.isTracingSuppressed)(e)) return;
      let s = e.getValue(Xrn.B3_DEBUG_FLAG_KEY);
      (n.set(r, h6.X_B3_TRACE_ID, o.traceId),
        n.set(r, h6.X_B3_SPAN_ID, o.spanId),
        s === "1"
          ? n.set(r, h6.X_B3_FLAGS, s)
          : o.traceFlags !== void 0 &&
            n.set(r, h6.X_B3_SAMPLED, (n4.TraceFlags.SAMPLED & o.traceFlags) === n4.TraceFlags.SAMPLED ? "1" : "0"));
    }
    extract(e, r, n) {
      let o = hVo(r, n),
        s = gVo(r, n),
        a = bVo(r, n),
        u = Zrn(r, n);
      return (0, n4.isValidTraceId)(o) && (0, n4.isValidSpanId)(s) && fVo(a)
        ? ((e = e.setValue(Xrn.B3_DEBUG_FLAG_KEY, u)),
          n4.trace.setSpanContext(e, { traceId: o, spanId: s, isRemote: !0, traceFlags: a }))
        : e;
    }
    fields() {
      return [h6.X_B3_TRACE_ID, h6.X_B3_SPAN_ID, h6.X_B3_FLAGS, h6.X_B3_SAMPLED, h6.X_B3_PARENT_SPAN_ID];
    }
  };
  z$e.B3MultiPropagator = a7t;
});