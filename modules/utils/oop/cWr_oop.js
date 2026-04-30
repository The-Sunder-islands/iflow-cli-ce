/**
 * @module cWr
 * @category utils/oop
 * @label oop
 * @position 237 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (cWr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var cWr = T((XPe) => {
  "use strict";
  Object.defineProperty(XPe, "__esModule", { value: !0 });
  XPe.SyncMetricStorage = void 0;
  var GDo = MCt(),
    qDo = jCt(),
    HDo = GCt(),
    KCt = class extends GDo.MetricStorage {
      _attributesProcessor;
      _aggregationCardinalityLimit;
      _deltaMetricStorage;
      _temporalMetricStorage;
      constructor(e, r, n, o, s) {
        (super(e),
          (this._attributesProcessor = n),
          (this._aggregationCardinalityLimit = s),
          (this._deltaMetricStorage = new qDo.DeltaMetricProcessor(r, this._aggregationCardinalityLimit)),
          (this._temporalMetricStorage = new HDo.TemporalMetricProcessor(r, o)));
      }
      record(e, r, n, o) {
        ((r = this._attributesProcessor.process(r, n)), this._deltaMetricStorage.record(e, r, n, o));
      }
      collect(e, r) {
        let n = this._deltaMetricStorage.collect();
        return this._temporalMetricStorage.buildMetrics(e, this._instrumentDescriptor, n, r);
      }
    };
  XPe.SyncMetricStorage = KCt;
});