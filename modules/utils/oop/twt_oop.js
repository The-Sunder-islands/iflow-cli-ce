/**
 * @module twt
 * @category utils/oop
 * @label oop
 * @position 389 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (twt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var twt = T((MMe) => {
  "use strict";
  Object.defineProperty(MMe, "__esModule", { value: !0 });
  MMe.TraceIdRatioBasedSampler = void 0;
  var kNo = (Zt(), bt(cr)),
    QKr = $ge(),
    ewt = class {
      _ratio;
      _upperBound;
      constructor(e = 0) {
        ((this._ratio = e),
          (this._ratio = this._normalize(e)),
          (this._upperBound = Math.floor(this._ratio * 4294967295)));
      }
      shouldSample(e, r) {
        return {
          decision:
            (0, kNo.isValidTraceId)(r) && this._accumulate(r) < this._upperBound
              ? QKr.SamplingDecision.RECORD_AND_SAMPLED
              : QKr.SamplingDecision.NOT_RECORD,
        };
      }
      toString() {
        return `TraceIdRatioBased{${this._ratio}}`;
      }
      _normalize(e) {
        return typeof e != "number" || isNaN(e) ? 0 : e >= 1 ? 1 : e <= 0 ? 0 : e;
      }
      _accumulate(e) {
        let r = 0;
        for (let n = 0; n < e.length / 8; n++) {
          let o = n * 8,
            s = parseInt(e.slice(o, o + 8), 16);
          r = (r ^ s) >>> 0;
        }
        return r;
      }
    };
  MMe.TraceIdRatioBasedSampler = ewt;
});