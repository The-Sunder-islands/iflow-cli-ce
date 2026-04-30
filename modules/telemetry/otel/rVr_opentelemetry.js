/**
 * @module rVr
 * @category telemetry/otel
 * @label opentelemetry
 * @position 190 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (rVr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var rVr = T((Ute) => {
  "use strict";
  Object.defineProperty(Ute, "__esModule", { value: !0 });
  Ute.SumAggregator = Ute.SumAccumulation = void 0;
  var hTo = Ite(),
    gTo = OB(),
    NB = class {
      startTime;
      monotonic;
      _current;
      reset;
      constructor(e, r, n = 0, o = !1) {
        ((this.startTime = e), (this.monotonic = r), (this._current = n), (this.reset = o));
      }
      record(e) {
        (this.monotonic && e < 0) || (this._current += e);
      }
      setStartTime(e) {
        this.startTime = e;
      }
      toPointValue() {
        return this._current;
      }
    };
  Ute.SumAccumulation = NB;
  var sCt = class {
    monotonic;
    kind = hTo.AggregatorKind.SUM;
    constructor(e) {
      this.monotonic = e;
    }
    createAccumulation(e) {
      return new NB(e, this.monotonic);
    }
    merge(e, r) {
      let n = e.toPointValue(),
        o = r.toPointValue();
      return r.reset ? new NB(r.startTime, this.monotonic, o, r.reset) : new NB(e.startTime, this.monotonic, n + o);
    }
    diff(e, r) {
      let n = e.toPointValue(),
        o = r.toPointValue();
      return this.monotonic && n > o
        ? new NB(r.startTime, this.monotonic, o, !0)
        : new NB(r.startTime, this.monotonic, o - n);
    }
    toMetricData(e, r, n, o) {
      return {
        descriptor: e,
        aggregationTemporality: r,
        dataPointType: gTo.DataPointType.SUM,
        dataPoints: n.map(([s, a]) => ({ attributes: s, startTime: a.startTime, endTime: o, value: a.toPointValue() })),
        isMonotonic: this.monotonic,
      };
    }
  };
  Ute.SumAggregator = sCt;
});