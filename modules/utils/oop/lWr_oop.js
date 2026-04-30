/**
 * @module lWr
 * @category utils/oop
 * @label oop
 * @position 239 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (lWr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var lWr = T((eBe) => {
  "use strict";
  Object.defineProperty(eBe, "__esModule", { value: !0 });
  eBe.MeterSharedState = void 0;
  var JDo = yge(),
    XDo = zVr(),
    ZDo = qC(),
    eIo = YVr(),
    tIo = rWr(),
    rIo = nWr(),
    nIo = uWr(),
    iIo = cWr(),
    oIo = ZPe(),
    t4t = class {
      _meterProviderSharedState;
      _instrumentationScope;
      metricStorageRegistry = new tIo.MetricStorageRegistry();
      observableRegistry = new nIo.ObservableRegistry();
      meter;
      constructor(e, r) {
        ((this._meterProviderSharedState = e), (this._instrumentationScope = r), (this.meter = new XDo.Meter(this)));
      }
      registerMetricStorage(e) {
        let r = this._registerMetricStorage(e, iIo.SyncMetricStorage);
        return r.length === 1 ? r[0] : new rIo.MultiMetricStorage(r);
      }
      registerAsyncMetricStorage(e) {
        return this._registerMetricStorage(e, eIo.AsyncMetricStorage);
      }
      async collect(e, r, n) {
        let o = await this.observableRegistry.observe(r, n?.timeoutMillis),
          s = this.metricStorageRegistry.getStorages(e);
        if (s.length === 0) return null;
        let a = s.map((u) => u.collect(e, r)).filter(ZDo.isNotNullish);
        return a.length === 0
          ? { errors: o }
          : { scopeMetrics: { scope: this._instrumentationScope, metrics: a }, errors: o };
      }
      _registerMetricStorage(e, r) {
        let o = this._meterProviderSharedState.viewRegistry.findViews(e, this._instrumentationScope).map((s) => {
          let a = (0, JDo.createInstrumentDescriptorWithView)(s, e),
            u = this.metricStorageRegistry.findOrUpdateCompatibleStorage(a);
          if (u != null) return u;
          let c = s.aggregation.createAggregator(a),
            m = new r(
              a,
              c,
              s.attributesProcessor,
              this._meterProviderSharedState.metricCollectors,
              s.aggregationCardinalityLimit,
            );
          return (this.metricStorageRegistry.register(m), m);
        });
        if (o.length === 0) {
          let a = this._meterProviderSharedState.selectAggregations(e.type).map(([u, c]) => {
            let m = this.metricStorageRegistry.findOrUpdateCompatibleCollectorStorage(u, e);
            if (m != null) return m;
            let d = c.createAggregator(e),
              f = u.selectCardinalityLimit(e.type),
              p = new r(e, d, (0, oIo.createNoopAttributesProcessor)(), [u], f);
            return (this.metricStorageRegistry.registerForCollector(u, p), p);
          });
          o = o.concat(a);
        }
        return o;
      }
    };
  eBe.MeterSharedState = t4t;
});