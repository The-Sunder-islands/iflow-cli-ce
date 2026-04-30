/**
 * @module uVr
 * @category utils/oop
 * @label oop
 * @position 192 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (uVr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var uVr = T((_c) => {
  "use strict";
  Object.defineProperty(_c, "__esModule", { value: !0 });
  _c.DEFAULT_AGGREGATION =
    _c.EXPONENTIAL_HISTOGRAM_AGGREGATION =
    _c.HISTOGRAM_AGGREGATION =
    _c.LAST_VALUE_AGGREGATION =
    _c.SUM_AGGREGATION =
    _c.DROP_AGGREGATION =
    _c.DefaultAggregation =
    _c.ExponentialHistogramAggregation =
    _c.ExplicitBucketHistogramAggregation =
    _c.HistogramAggregation =
    _c.LastValueAggregation =
    _c.SumAggregation =
    _c.DropAggregation =
      void 0;
  var ATo = (Zt(), bt(cr)),
    jG = aVr(),
    vx = OB(),
    aPe = class t {
      static DEFAULT_INSTANCE = new jG.DropAggregator();
      createAggregator(e) {
        return t.DEFAULT_INSTANCE;
      }
    };
  _c.DropAggregation = aPe;
  var uPe = class t {
    static MONOTONIC_INSTANCE = new jG.SumAggregator(!0);
    static NON_MONOTONIC_INSTANCE = new jG.SumAggregator(!1);
    createAggregator(e) {
      switch (e.type) {
        case vx.InstrumentType.COUNTER:
        case vx.InstrumentType.OBSERVABLE_COUNTER:
        case vx.InstrumentType.HISTOGRAM:
          return t.MONOTONIC_INSTANCE;
        default:
          return t.NON_MONOTONIC_INSTANCE;
      }
    }
  };
  _c.SumAggregation = uPe;
  var cPe = class t {
    static DEFAULT_INSTANCE = new jG.LastValueAggregator();
    createAggregator(e) {
      return t.DEFAULT_INSTANCE;
    }
  };
  _c.LastValueAggregation = cPe;
  var lPe = class t {
    static DEFAULT_INSTANCE = new jG.HistogramAggregator(
      [0, 5, 10, 25, 50, 75, 100, 250, 500, 750, 1e3, 2500, 5e3, 7500, 1e4],
      !0,
    );
    createAggregator(e) {
      return t.DEFAULT_INSTANCE;
    }
  };
  _c.HistogramAggregation = lPe;
  var mPe = class {
    _recordMinMax;
    _boundaries;
    constructor(e, r = !0) {
      if (((this._recordMinMax = r), e == null))
        throw new Error(
          "ExplicitBucketHistogramAggregation should be created with explicit boundaries, if a single bucket histogram is required, please pass an empty array",
        );
      ((e = e.concat()), (e = e.sort((s, a) => s - a)));
      let n = e.lastIndexOf(-1 / 0),
        o = e.indexOf(1 / 0);
      (o === -1 && (o = void 0), (this._boundaries = e.slice(n + 1, o)));
    }
    createAggregator(e) {
      return new jG.HistogramAggregator(this._boundaries, this._recordMinMax);
    }
  };
  _c.ExplicitBucketHistogramAggregation = mPe;
  var dPe = class {
    _maxSize;
    _recordMinMax;
    constructor(e = 160, r = !0) {
      ((this._maxSize = e), (this._recordMinMax = r));
    }
    createAggregator(e) {
      return new jG.ExponentialHistogramAggregator(this._maxSize, this._recordMinMax);
    }
  };
  _c.ExponentialHistogramAggregation = dPe;
  var fPe = class {
    _resolve(e) {
      switch (e.type) {
        case vx.InstrumentType.COUNTER:
        case vx.InstrumentType.UP_DOWN_COUNTER:
        case vx.InstrumentType.OBSERVABLE_COUNTER:
        case vx.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER:
          return _c.SUM_AGGREGATION;
        case vx.InstrumentType.GAUGE:
        case vx.InstrumentType.OBSERVABLE_GAUGE:
          return _c.LAST_VALUE_AGGREGATION;
        case vx.InstrumentType.HISTOGRAM:
          return e.advice.explicitBucketBoundaries
            ? new mPe(e.advice.explicitBucketBoundaries)
            : _c.HISTOGRAM_AGGREGATION;
      }
      return (ATo.diag.warn(`Unable to recognize instrument type: ${e.type}`), _c.DROP_AGGREGATION);
    }
    createAggregator(e) {
      return this._resolve(e).createAggregator(e);
    }
  };
  _c.DefaultAggregation = fPe;
  _c.DROP_AGGREGATION = new aPe();
  _c.SUM_AGGREGATION = new uPe();
  _c.LAST_VALUE_AGGREGATION = new cPe();
  _c.HISTOGRAM_AGGREGATION = new lPe();
  _c.EXPONENTIAL_HISTOGRAM_AGGREGATION = new dPe();
  _c.DEFAULT_AGGREGATION = new fPe();
});