/**
 * @module tVr
 * @category telemetry/otel
 * @label opentelemetry
 * @position 189 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (tVr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var tVr = T((Fte) => {
  "use strict";
  Object.defineProperty(Fte, "__esModule", { value: !0 });
  Fte.LastValueAggregator = Fte.LastValueAccumulation = void 0;
  var fTo = Ite(),
    dge = Ii(),
    pTo = OB(),
    Mte = class {
      startTime;
      _current;
      sampleTime;
      constructor(e, r = 0, n = [0, 0]) {
        ((this.startTime = e), (this._current = r), (this.sampleTime = n));
      }
      record(e) {
        ((this._current = e), (this.sampleTime = (0, dge.millisToHrTime)(Date.now())));
      }
      setStartTime(e) {
        this.startTime = e;
      }
      toPointValue() {
        return this._current;
      }
    };
  Fte.LastValueAccumulation = Mte;
  var oCt = class {
    kind = fTo.AggregatorKind.LAST_VALUE;
    createAccumulation(e) {
      return new Mte(e);
    }
    merge(e, r) {
      let n = (0, dge.hrTimeToMicroseconds)(r.sampleTime) >= (0, dge.hrTimeToMicroseconds)(e.sampleTime) ? r : e;
      return new Mte(e.startTime, n.toPointValue(), n.sampleTime);
    }
    diff(e, r) {
      let n = (0, dge.hrTimeToMicroseconds)(r.sampleTime) >= (0, dge.hrTimeToMicroseconds)(e.sampleTime) ? r : e;
      return new Mte(r.startTime, n.toPointValue(), n.sampleTime);
    }
    toMetricData(e, r, n, o) {
      return {
        descriptor: e,
        aggregationTemporality: r,
        dataPointType: pTo.DataPointType.GAUGE,
        dataPoints: n.map(([s, a]) => ({ attributes: s, startTime: a.startTime, endTime: o, value: a.toPointValue() })),
      };
    }
  };
  Fte.LastValueAggregator = oCt;
});