/**
 * @module YVr
 * @category utils/oop
 * @label oop
 * @position 231 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (YVr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var YVr = T((WPe) => {
  "use strict";
  Object.defineProperty(WPe, "__esModule", { value: !0 });
  WPe.AsyncMetricStorage = void 0;
  var PDo = MCt(),
    BDo = jCt(),
    LDo = GCt(),
    MDo = _ge(),
    qCt = class extends PDo.MetricStorage {
      _attributesProcessor;
      _aggregationCardinalityLimit;
      _deltaMetricStorage;
      _temporalMetricStorage;
      constructor(e, r, n, o, s) {
        (super(e),
          (this._attributesProcessor = n),
          (this._aggregationCardinalityLimit = s),
          (this._deltaMetricStorage = new BDo.DeltaMetricProcessor(r, this._aggregationCardinalityLimit)),
          (this._temporalMetricStorage = new LDo.TemporalMetricProcessor(r, o)));
      }
      record(e, r) {
        let n = new MDo.AttributeHashMap();
        (Array.from(e.entries()).forEach(([o, s]) => {
          n.set(this._attributesProcessor.process(o), s);
        }),
          this._deltaMetricStorage.batchCumulate(n, r));
      }
      collect(e, r) {
        let n = this._deltaMetricStorage.collect();
        return this._temporalMetricStorage.buildMetrics(e, this._instrumentDescriptor, n, r);
      }
    };
  WPe.AsyncMetricStorage = qCt;
});