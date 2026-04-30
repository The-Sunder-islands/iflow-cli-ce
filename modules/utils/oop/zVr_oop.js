/**
 * @module zVr
 * @category utils/oop
 * @label oop
 * @position 226 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (zVr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var zVr = T((QPe) => {
  "use strict";
  Object.defineProperty(QPe, "__esModule", { value: !0 });
  QPe.Meter = void 0;
  var YG = yge(),
    KG = jPe(),
    JG = OB(),
    BCt = class {
      _meterSharedState;
      constructor(e) {
        this._meterSharedState = e;
      }
      createGauge(e, r) {
        let n = (0, YG.createInstrumentDescriptor)(e, JG.InstrumentType.GAUGE, r),
          o = this._meterSharedState.registerMetricStorage(n);
        return new KG.GaugeInstrument(o, n);
      }
      createHistogram(e, r) {
        let n = (0, YG.createInstrumentDescriptor)(e, JG.InstrumentType.HISTOGRAM, r),
          o = this._meterSharedState.registerMetricStorage(n);
        return new KG.HistogramInstrument(o, n);
      }
      createCounter(e, r) {
        let n = (0, YG.createInstrumentDescriptor)(e, JG.InstrumentType.COUNTER, r),
          o = this._meterSharedState.registerMetricStorage(n);
        return new KG.CounterInstrument(o, n);
      }
      createUpDownCounter(e, r) {
        let n = (0, YG.createInstrumentDescriptor)(e, JG.InstrumentType.UP_DOWN_COUNTER, r),
          o = this._meterSharedState.registerMetricStorage(n);
        return new KG.UpDownCounterInstrument(o, n);
      }
      createObservableGauge(e, r) {
        let n = (0, YG.createInstrumentDescriptor)(e, JG.InstrumentType.OBSERVABLE_GAUGE, r),
          o = this._meterSharedState.registerAsyncMetricStorage(n);
        return new KG.ObservableGaugeInstrument(n, o, this._meterSharedState.observableRegistry);
      }
      createObservableCounter(e, r) {
        let n = (0, YG.createInstrumentDescriptor)(e, JG.InstrumentType.OBSERVABLE_COUNTER, r),
          o = this._meterSharedState.registerAsyncMetricStorage(n);
        return new KG.ObservableCounterInstrument(n, o, this._meterSharedState.observableRegistry);
      }
      createObservableUpDownCounter(e, r) {
        let n = (0, YG.createInstrumentDescriptor)(e, JG.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER, r),
          o = this._meterSharedState.registerAsyncMetricStorage(n);
        return new KG.ObservableUpDownCounterInstrument(n, o, this._meterSharedState.observableRegistry);
      }
      addBatchObservableCallback(e, r) {
        this._meterSharedState.observableRegistry.addBatchCallback(e, r);
      }
      removeBatchObservableCallback(e, r) {
        this._meterSharedState.observableRegistry.removeBatchCallback(e, r);
      }
    };
  QPe.Meter = BCt;
});