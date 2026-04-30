/**
 * @module QHr
 * @category telemetry/otel
 * @label opentelemetry
 * @position 180 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (QHr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var QHr = T((kte) => {
  "use strict";
  Object.defineProperty(kte, "__esModule", { value: !0 });
  kte.HistogramAggregator = kte.HistogramAccumulation = void 0;
  var Wxo = Ite(),
    lge = OB(),
    zxo = qC();
  function Yxo(t) {
    let e = t.map(() => 0);
    return (
      e.push(0),
      { buckets: { boundaries: t, counts: e }, sum: 0, count: 0, hasMinMax: !1, min: 1 / 0, max: -1 / 0 }
    );
  }
  var Rte = class {
    startTime;
    _boundaries;
    _recordMinMax;
    _current;
    constructor(e, r, n = !0, o = Yxo(r)) {
      ((this.startTime = e), (this._boundaries = r), (this._recordMinMax = n), (this._current = o));
    }
    record(e) {
      if (Number.isNaN(e)) return;
      ((this._current.count += 1),
        (this._current.sum += e),
        this._recordMinMax &&
          ((this._current.min = Math.min(e, this._current.min)),
          (this._current.max = Math.max(e, this._current.max)),
          (this._current.hasMinMax = !0)));
      let r = (0, zxo.binarySearchUB)(this._boundaries, e);
      this._current.buckets.counts[r] += 1;
    }
    setStartTime(e) {
      this.startTime = e;
    }
    toPointValue() {
      return this._current;
    }
  };
  kte.HistogramAccumulation = Rte;
  var Yvt = class {
    _boundaries;
    _recordMinMax;
    kind = Wxo.AggregatorKind.HISTOGRAM;
    constructor(e, r) {
      ((this._boundaries = e), (this._recordMinMax = r));
    }
    createAccumulation(e) {
      return new Rte(e, this._boundaries, this._recordMinMax);
    }
    merge(e, r) {
      let n = e.toPointValue(),
        o = r.toPointValue(),
        s = n.buckets.counts,
        a = o.buckets.counts,
        u = new Array(s.length);
      for (let d = 0; d < s.length; d++) u[d] = s[d] + a[d];
      let c = 1 / 0,
        m = -1 / 0;
      return (
        this._recordMinMax &&
          (n.hasMinMax && o.hasMinMax
            ? ((c = Math.min(n.min, o.min)), (m = Math.max(n.max, o.max)))
            : n.hasMinMax
              ? ((c = n.min), (m = n.max))
              : o.hasMinMax && ((c = o.min), (m = o.max))),
        new Rte(e.startTime, n.buckets.boundaries, this._recordMinMax, {
          buckets: { boundaries: n.buckets.boundaries, counts: u },
          count: n.count + o.count,
          sum: n.sum + o.sum,
          hasMinMax: this._recordMinMax && (n.hasMinMax || o.hasMinMax),
          min: c,
          max: m,
        })
      );
    }
    diff(e, r) {
      let n = e.toPointValue(),
        o = r.toPointValue(),
        s = n.buckets.counts,
        a = o.buckets.counts,
        u = new Array(s.length);
      for (let c = 0; c < s.length; c++) u[c] = a[c] - s[c];
      return new Rte(r.startTime, n.buckets.boundaries, this._recordMinMax, {
        buckets: { boundaries: n.buckets.boundaries, counts: u },
        count: o.count - n.count,
        sum: o.sum - n.sum,
        hasMinMax: !1,
        min: 1 / 0,
        max: -1 / 0,
      });
    }
    toMetricData(e, r, n, o) {
      return {
        descriptor: e,
        aggregationTemporality: r,
        dataPointType: lge.DataPointType.HISTOGRAM,
        dataPoints: n.map(([s, a]) => {
          let u = a.toPointValue(),
            c =
              e.type === lge.InstrumentType.GAUGE ||
              e.type === lge.InstrumentType.UP_DOWN_COUNTER ||
              e.type === lge.InstrumentType.OBSERVABLE_GAUGE ||
              e.type === lge.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER;
          return {
            attributes: s,
            startTime: a.startTime,
            endTime: o,
            value: {
              min: u.hasMinMax ? u.min : void 0,
              max: u.hasMinMax ? u.max : void 0,
              sum: c ? void 0 : u.sum,
              buckets: u.buckets,
              count: u.count,
            },
          };
        }),
      };
    }
  };
  kte.HistogramAggregator = Yvt;
});