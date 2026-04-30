/**
 * @module eVr
 * @category telemetry/otel
 * @label opentelemetry
 * @position 188 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (eVr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var eVr = T((Lte) => {
  "use strict";
  Object.defineProperty(Lte, "__esModule", { value: !0 });
  Lte.ExponentialHistogramAggregator = Lte.ExponentialHistogramAccumulation = void 0;
  var uTo = Ite(),
    mge = OB(),
    cTo = (Zt(), bt(cr)),
    XHr = GHr(),
    ZHr = JHr(),
    lTo = ePe(),
    Bte = class t {
      low;
      high;
      static combine(e, r) {
        return new t(Math.min(e.low, r.low), Math.max(e.high, r.high));
      }
      constructor(e, r) {
        ((this.low = e), (this.high = r));
      }
    },
    mTo = 20,
    dTo = 160,
    nCt = 2,
    sPe = class t {
      startTime;
      _maxSize;
      _recordMinMax;
      _sum;
      _count;
      _zeroCount;
      _min;
      _max;
      _positive;
      _negative;
      _mapping;
      constructor(
        e,
        r = dTo,
        n = !0,
        o = 0,
        s = 0,
        a = 0,
        u = Number.POSITIVE_INFINITY,
        c = Number.NEGATIVE_INFINITY,
        m = new XHr.Buckets(),
        d = new XHr.Buckets(),
        f = (0, ZHr.getMapping)(mTo),
      ) {
        ((this.startTime = e),
          (this._maxSize = r),
          (this._recordMinMax = n),
          (this._sum = o),
          (this._count = s),
          (this._zeroCount = a),
          (this._min = u),
          (this._max = c),
          (this._positive = m),
          (this._negative = d),
          (this._mapping = f),
          this._maxSize < nCt &&
            (cTo.diag.warn(
              `Exponential Histogram Max Size set to ${this._maxSize},                 changing to the minimum size of: ${nCt}`,
            ),
            (this._maxSize = nCt)));
      }
      record(e) {
        this.updateByIncrement(e, 1);
      }
      setStartTime(e) {
        this.startTime = e;
      }
      toPointValue() {
        return {
          hasMinMax: this._recordMinMax,
          min: this.min,
          max: this.max,
          sum: this.sum,
          positive: { offset: this.positive.offset, bucketCounts: this.positive.counts() },
          negative: { offset: this.negative.offset, bucketCounts: this.negative.counts() },
          count: this.count,
          scale: this.scale,
          zeroCount: this.zeroCount,
        };
      }
      get sum() {
        return this._sum;
      }
      get min() {
        return this._min;
      }
      get max() {
        return this._max;
      }
      get count() {
        return this._count;
      }
      get zeroCount() {
        return this._zeroCount;
      }
      get scale() {
        return this._count === this._zeroCount ? 0 : this._mapping.scale;
      }
      get positive() {
        return this._positive;
      }
      get negative() {
        return this._negative;
      }
      updateByIncrement(e, r) {
        if (!Number.isNaN(e)) {
          if ((e > this._max && (this._max = e), e < this._min && (this._min = e), (this._count += r), e === 0)) {
            this._zeroCount += r;
            return;
          }
          ((this._sum += e * r),
            e > 0 ? this._updateBuckets(this._positive, e, r) : this._updateBuckets(this._negative, -e, r));
        }
      }
      merge(e) {
        (this._count === 0
          ? ((this._min = e.min), (this._max = e.max))
          : e.count !== 0 && (e.min < this.min && (this._min = e.min), e.max > this.max && (this._max = e.max)),
          (this.startTime = e.startTime),
          (this._sum += e.sum),
          (this._count += e.count),
          (this._zeroCount += e.zeroCount));
        let r = this._minScale(e);
        (this._downscale(this.scale - r),
          this._mergeBuckets(this.positive, e, e.positive, r),
          this._mergeBuckets(this.negative, e, e.negative, r));
      }
      diff(e) {
        ((this._min = 1 / 0),
          (this._max = -1 / 0),
          (this._sum -= e.sum),
          (this._count -= e.count),
          (this._zeroCount -= e.zeroCount));
        let r = this._minScale(e);
        (this._downscale(this.scale - r),
          this._diffBuckets(this.positive, e, e.positive, r),
          this._diffBuckets(this.negative, e, e.negative, r));
      }
      clone() {
        return new t(
          this.startTime,
          this._maxSize,
          this._recordMinMax,
          this._sum,
          this._count,
          this._zeroCount,
          this._min,
          this._max,
          this.positive.clone(),
          this.negative.clone(),
          this._mapping,
        );
      }
      _updateBuckets(e, r, n) {
        let o = this._mapping.mapToIndex(r),
          s = !1,
          a = 0,
          u = 0;
        if (
          (e.length === 0
            ? ((e.indexStart = o), (e.indexEnd = e.indexStart), (e.indexBase = e.indexStart))
            : o < e.indexStart && e.indexEnd - o >= this._maxSize
              ? ((s = !0), (u = o), (a = e.indexEnd))
              : o > e.indexEnd && o - e.indexStart >= this._maxSize && ((s = !0), (u = e.indexStart), (a = o)),
          s)
        ) {
          let c = this._changeScale(a, u);
          (this._downscale(c), (o = this._mapping.mapToIndex(r)));
        }
        this._incrementIndexBy(e, o, n);
      }
      _incrementIndexBy(e, r, n) {
        if (n === 0) return;
        if ((e.length === 0 && (e.indexStart = e.indexEnd = e.indexBase = r), r < e.indexStart)) {
          let s = e.indexEnd - r;
          (s >= e.backing.length && this._grow(e, s + 1), (e.indexStart = r));
        } else if (r > e.indexEnd) {
          let s = r - e.indexStart;
          (s >= e.backing.length && this._grow(e, s + 1), (e.indexEnd = r));
        }
        let o = r - e.indexBase;
        (o < 0 && (o += e.backing.length), e.incrementBucket(o, n));
      }
      _grow(e, r) {
        let n = e.backing.length,
          o = e.indexBase - e.indexStart,
          s = n - o,
          a = (0, lTo.nextGreaterSquare)(r);
        a > this._maxSize && (a = this._maxSize);
        let u = a - o;
        e.backing.growTo(a, s, u);
      }
      _changeScale(e, r) {
        let n = 0;
        for (; e - r >= this._maxSize; ) ((e >>= 1), (r >>= 1), n++);
        return n;
      }
      _downscale(e) {
        if (e === 0) return;
        if (e < 0) throw new Error(`impossible change of scale: ${this.scale}`);
        let r = this._mapping.scale - e;
        (this._positive.downscale(e), this._negative.downscale(e), (this._mapping = (0, ZHr.getMapping)(r)));
      }
      _minScale(e) {
        let r = Math.min(this.scale, e.scale),
          n = Bte.combine(
            this._highLowAtScale(this.positive, this.scale, r),
            this._highLowAtScale(e.positive, e.scale, r),
          ),
          o = Bte.combine(
            this._highLowAtScale(this.negative, this.scale, r),
            this._highLowAtScale(e.negative, e.scale, r),
          );
        return Math.min(r - this._changeScale(n.high, n.low), r - this._changeScale(o.high, o.low));
      }
      _highLowAtScale(e, r, n) {
        if (e.length === 0) return new Bte(0, -1);
        let o = r - n;
        return new Bte(e.indexStart >> o, e.indexEnd >> o);
      }
      _mergeBuckets(e, r, n, o) {
        let s = n.offset,
          a = r.scale - o;
        for (let u = 0; u < n.length; u++) this._incrementIndexBy(e, (s + u) >> a, n.at(u));
      }
      _diffBuckets(e, r, n, o) {
        let s = n.offset,
          a = r.scale - o;
        for (let u = 0; u < n.length; u++) {
          let m = ((s + u) >> a) - e.indexBase;
          (m < 0 && (m += e.backing.length), e.decrementBucket(m, n.at(u)));
        }
        e.trim();
      }
    };
  Lte.ExponentialHistogramAccumulation = sPe;
  var iCt = class {
    _maxSize;
    _recordMinMax;
    kind = uTo.AggregatorKind.EXPONENTIAL_HISTOGRAM;
    constructor(e, r) {
      ((this._maxSize = e), (this._recordMinMax = r));
    }
    createAccumulation(e) {
      return new sPe(e, this._maxSize, this._recordMinMax);
    }
    merge(e, r) {
      let n = r.clone();
      return (n.merge(e), n);
    }
    diff(e, r) {
      let n = r.clone();
      return (n.diff(e), n);
    }
    toMetricData(e, r, n, o) {
      return {
        descriptor: e,
        aggregationTemporality: r,
        dataPointType: mge.DataPointType.EXPONENTIAL_HISTOGRAM,
        dataPoints: n.map(([s, a]) => {
          let u = a.toPointValue(),
            c =
              e.type === mge.InstrumentType.GAUGE ||
              e.type === mge.InstrumentType.UP_DOWN_COUNTER ||
              e.type === mge.InstrumentType.OBSERVABLE_GAUGE ||
              e.type === mge.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER;
          return {
            attributes: s,
            startTime: a.startTime,
            endTime: o,
            value: {
              min: u.hasMinMax ? u.min : void 0,
              max: u.hasMinMax ? u.max : void 0,
              sum: c ? void 0 : u.sum,
              positive: { offset: u.positive.offset, bucketCounts: u.positive.bucketCounts },
              negative: { offset: u.negative.offset, bucketCounts: u.negative.bucketCounts },
              count: u.count,
              scale: u.scale,
              zeroCount: u.zeroCount,
            },
          };
        }),
      };
    }
  };
  Lte.ExponentialHistogramAggregator = iCt;
});