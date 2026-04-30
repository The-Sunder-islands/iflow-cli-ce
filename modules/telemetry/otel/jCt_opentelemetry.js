/**
 * @module jCt
 * @category telemetry/otel
 * @label opentelemetry
 * @position 229 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (jCt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var jCt = T((HPe) => {
  "use strict";
  Object.defineProperty(HPe, "__esModule", { value: !0 });
  HPe.DeltaMetricProcessor = void 0;
  var RDo = qC(),
    UCt = _ge(),
    $Ct = class {
      _aggregator;
      _activeCollectionStorage = new UCt.AttributeHashMap();
      _cumulativeMemoStorage = new UCt.AttributeHashMap();
      _cardinalityLimit;
      _overflowAttributes = { "otel.metric.overflow": !0 };
      _overflowHashCode;
      constructor(e, r) {
        ((this._aggregator = e),
          (this._cardinalityLimit = (r ?? 2e3) - 1),
          (this._overflowHashCode = (0, RDo.hashAttributes)(this._overflowAttributes)));
      }
      record(e, r, n, o) {
        let s = this._activeCollectionStorage.get(r);
        if (!s) {
          if (this._activeCollectionStorage.size >= this._cardinalityLimit) {
            this._activeCollectionStorage
              .getOrDefault(this._overflowAttributes, () => this._aggregator.createAccumulation(o))
              ?.record(e);
            return;
          }
          ((s = this._aggregator.createAccumulation(o)), this._activeCollectionStorage.set(r, s));
        }
        s?.record(e);
      }
      batchCumulate(e, r) {
        Array.from(e.entries()).forEach(([n, o, s]) => {
          let a = this._aggregator.createAccumulation(r);
          a?.record(o);
          let u = a;
          if (this._cumulativeMemoStorage.has(n, s)) {
            let c = this._cumulativeMemoStorage.get(n, s);
            u = this._aggregator.diff(c, a);
          } else if (
            this._cumulativeMemoStorage.size >= this._cardinalityLimit &&
            ((n = this._overflowAttributes), (s = this._overflowHashCode), this._cumulativeMemoStorage.has(n, s))
          ) {
            let c = this._cumulativeMemoStorage.get(n, s);
            u = this._aggregator.diff(c, a);
          }
          if (this._activeCollectionStorage.has(n, s)) {
            let c = this._activeCollectionStorage.get(n, s);
            u = this._aggregator.merge(c, u);
          }
          (this._cumulativeMemoStorage.set(n, a, s), this._activeCollectionStorage.set(n, u, s));
        });
      }
      collect() {
        let e = this._activeCollectionStorage;
        return ((this._activeCollectionStorage = new UCt.AttributeHashMap()), e);
      }
    };
  HPe.DeltaMetricProcessor = $Ct;
});