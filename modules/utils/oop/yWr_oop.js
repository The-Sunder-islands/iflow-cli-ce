/**
 * @module yWr
 * @category utils/oop
 * @label oop
 * @position 246 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (yWr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var yWr = T((uBe) => {
  "use strict";
  Object.defineProperty(uBe, "__esModule", { value: !0 });
  uBe.MeterProvider = void 0;
  var aBe = (Zt(), bt(cr)),
    bIo = qVr(),
    AIo = mWr(),
    yIo = dWr(),
    _Io = AWr(),
    l4t = class {
      _sharedState;
      _shutdown = !1;
      constructor(e) {
        if (
          ((this._sharedState = new AIo.MeterProviderSharedState(e?.resource ?? (0, bIo.defaultResource)())),
          e?.views != null && e.views.length > 0)
        )
          for (let r of e.views) this._sharedState.viewRegistry.addView(new _Io.View(r));
        if (e?.readers != null && e.readers.length > 0)
          for (let r of e.readers) {
            let n = new yIo.MetricCollector(this._sharedState, r);
            (r.setMetricProducer(n), this._sharedState.metricCollectors.push(n));
          }
      }
      getMeter(e, r = "", n = {}) {
        return this._shutdown
          ? (aBe.diag.warn("A shutdown MeterProvider cannot provide a Meter"), (0, aBe.createNoopMeter)())
          : this._sharedState.getMeterSharedState({ name: e, version: r, schemaUrl: n.schemaUrl }).meter;
      }
      async shutdown(e) {
        if (this._shutdown) {
          aBe.diag.warn("shutdown may only be called once per MeterProvider");
          return;
        }
        ((this._shutdown = !0), await Promise.all(this._sharedState.metricCollectors.map((r) => r.shutdown(e))));
      }
      async forceFlush(e) {
        if (this._shutdown) {
          aBe.diag.warn("invalid attempt to force flush after MeterProvider shutdown");
          return;
        }
        await Promise.all(this._sharedState.metricCollectors.map((r) => r.forceFlush(e)));
      }
    };
  uBe.MeterProvider = l4t;
});