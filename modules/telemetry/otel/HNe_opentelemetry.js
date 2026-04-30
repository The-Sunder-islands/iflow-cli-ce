/**
 * @module HNe
 * @category telemetry/otel
 * @label opentelemetry
 * @position 171 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (HNe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var HNe = T((C_) => {
  "use strict";
  Object.defineProperty(C_, "__esModule", { value: !0 });
  C_.getOtlpEncoder = C_.encodeAsString = C_.encodeAsLongBits = C_.toLongBits = C_.hrTimeToNanos = void 0;
  var bxo = Ii(),
    Qvt = kHr();
  function Gvt(t) {
    let e = BigInt(1e9);
    return BigInt(Math.trunc(t[0])) * e + BigInt(Math.trunc(t[1]));
  }
  C_.hrTimeToNanos = Gvt;
  function NHr(t) {
    let e = Number(BigInt.asUintN(32, t)),
      r = Number(BigInt.asUintN(32, t >> BigInt(32)));
    return { low: e, high: r };
  }
  C_.toLongBits = NHr;
  function qvt(t) {
    let e = Gvt(t);
    return NHr(e);
  }
  C_.encodeAsLongBits = qvt;
  function PHr(t) {
    return Gvt(t).toString();
  }
  C_.encodeAsString = PHr;
  var Axo = typeof BigInt < "u" ? PHr : bxo.hrTimeToNanoseconds;
  function OHr(t) {
    return t;
  }
  function BHr(t) {
    if (t !== void 0) return (0, Qvt.hexToBinary)(t);
  }
  var yxo = { encodeHrTime: qvt, encodeSpanContext: Qvt.hexToBinary, encodeOptionalSpanContext: BHr };
  function _xo(t) {
    if (t === void 0) return yxo;
    let e = t.useLongBits ?? !0,
      r = t.useHex ?? !1;
    return {
      encodeHrTime: e ? qvt : Axo,
      encodeSpanContext: r ? OHr : Qvt.hexToBinary,
      encodeOptionalSpanContext: r ? OHr : BHr,
    };
  }
  C_.getOtlpEncoder = _xo;
});