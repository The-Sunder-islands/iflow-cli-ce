/**
 * @module GCt
 * @category telemetry/otel
 * @label opentelemetry
 * @position 230 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (GCt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var GCt = T((VPe) => {
  "use strict";
  Object.defineProperty(VPe, "__esModule", { value: !0 });
  VPe.TemporalMetricProcessor = void 0;
  var kDo = KNe(),
    ODo = _ge(),
    QCt = class t {
      _aggregator;
      _unreportedAccumulations = new Map();
      _reportHistory = new Map();
      constructor(e, r) {
        ((this._aggregator = e),
          r.forEach((n) => {
            this._unreportedAccumulations.set(n, []);
          }));
      }
      buildMetrics(e, r, n, o) {
        this._stashAccumulations(n);
        let s = this._getMergedUnreportedAccumulations(e),
          a = s,
          u;
        if (this._reportHistory.has(e)) {
          let m = this._reportHistory.get(e),
            d = m.collectionTime;
          ((u = m.aggregationTemporality),
            u === kDo.AggregationTemporality.CUMULATIVE
              ? (a = t.merge(m.accumulations, s, this._aggregator))
              : (a = t.calibrateStartTime(m.accumulations, s, d)));
        } else u = e.selectAggregationTemporality(r.type);
        this._reportHistory.set(e, { accumulations: a, collectionTime: o, aggregationTemporality: u });
        let c = NDo(a);
        if (c.length !== 0) return this._aggregator.toMetricData(r, u, c, o);
      }
      _stashAccumulations(e) {
        let r = this._unreportedAccumulations.keys();
        for (let n of r) {
          let o = this._unreportedAccumulations.get(n);
          (o === void 0 && ((o = []), this._unreportedAccumulations.set(n, o)), o.push(e));
        }
      }
      _getMergedUnreportedAccumulations(e) {
        let r = new ODo.AttributeHashMap(),
          n = this._unreportedAccumulations.get(e);
        if ((this._unreportedAccumulations.set(e, []), n === void 0)) return r;
        for (let o of n) r = t.merge(r, o, this._aggregator);
        return r;
      }
      static merge(e, r, n) {
        let o = e,
          s = r.entries(),
          a = s.next();
        for (; a.done !== !0; ) {
          let [u, c, m] = a.value;
          if (e.has(u, m)) {
            let d = e.get(u, m),
              f = n.merge(d, c);
            o.set(u, f, m);
          } else o.set(u, c, m);
          a = s.next();
        }
        return o;
      }
      static calibrateStartTime(e, r, n) {
        for (let [o, s] of e.keys()) r.get(o, s)?.setStartTime(n);
        return r;
      }
    };
  VPe.TemporalMetricProcessor = QCt;
  function NDo(t) {
    return Array.from(t.entries());
  }
});