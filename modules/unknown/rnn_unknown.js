/**
 * @module rnn
 * @category unknown
 * @label unknown
 * @position 560 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (rnn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var rnn = T((Y$e) => {
  "use strict";
  Object.defineProperty(Y$e, "__esModule", { value: !0 });
  Y$e.B3SinglePropagator = void 0;
  var Nq = (Zt(), bt(cr)),
    AVo = Ii(),
    tnn = s7t(),
    u7t = Xbe(),
    yVo = /((?:[0-9a-f]{16}){1,2})-([0-9a-f]{16})(?:-([01d](?![0-9a-f])))?(?:-([0-9a-f]{16}))?/,
    _Vo = "0".repeat(16),
    EVo = new Set(["d", "1"]),
    vVo = "d";
  function CVo(t) {
    return t.length === 32 ? t : `${_Vo}${t}`;
  }
  function SVo(t) {
    return t && EVo.has(t) ? Nq.TraceFlags.SAMPLED : Nq.TraceFlags.NONE;
  }
  var c7t = class {
    inject(e, r, n) {
      let o = Nq.trace.getSpanContext(e);
      if (!o || !(0, Nq.isSpanContextValid)(o) || (0, AVo.isTracingSuppressed)(e)) return;
      let s = e.getValue(tnn.B3_DEBUG_FLAG_KEY) || o.traceFlags & 1,
        a = `${o.traceId}-${o.spanId}-${s}`;
      n.set(r, u7t.B3_CONTEXT_HEADER, a);
    }
    extract(e, r, n) {
      let o = n.get(r, u7t.B3_CONTEXT_HEADER),
        s = Array.isArray(o) ? o[0] : o;
      if (typeof s != "string") return e;
      let a = s.match(yVo);
      if (!a) return e;
      let [, u, c, m] = a,
        d = CVo(u);
      if (!(0, Nq.isValidTraceId)(d) || !(0, Nq.isValidSpanId)(c)) return e;
      let f = SVo(m);
      return (
        m === vVo && (e = e.setValue(tnn.B3_DEBUG_FLAG_KEY, m)),
        Nq.trace.setSpanContext(e, { traceId: d, spanId: c, isRemote: !0, traceFlags: f })
      );
    }
    fields() {
      return [u7t.B3_CONTEXT_HEADER];
    }
  };
  Y$e.B3SinglePropagator = c7t;
});