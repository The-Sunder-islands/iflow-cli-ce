/**
 * @module pnn
 * @category telemetry/otel
 * @label opentelemetry
 * @position 568 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (pnn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var pnn = T((Lf) => {
  "use strict";
  Object.defineProperty(Lf, "__esModule", { value: !0 });
  Lf.NodeSDK = Lf.tracing = Lf.resources = Lf.node = Lf.metrics = Lf.logs = Lf.core = Lf.contextBase = Lf.api = void 0;
  Lf.api = (Zt(), bt(cr));
  Lf.contextBase = (Zt(), bt(cr));
  Lf.core = Ii();
  Lf.logs = nSt();
  Lf.metrics = Dx();
  Lf.node = DMe();
  Lf.resources = rre();
  Lf.tracing = ZMe();
  var aWo = fnn();
  Object.defineProperty(Lf, "NodeSDK", {
    enumerable: !0,
    get: function () {
      return aWo.NodeSDK;
    },
  });
});
function uWo(t, e) {
  return new Promise((r, n) => {
    let o = setTimeout(() => {
      n(new Error(`Operation timed out after ${e} ms`));
    }, e);
    t.then(r)
      .catch(n)
      .finally(() => clearTimeout(o));
  });
}
var hnn,
  Z$e,
  gnn = j(() => {
    "use strict";
    hnn = Se(Dx(), 1);
    Z$e = class extends hnn.PeriodicExportingMetricReader {
      _alignSeconds = [0, 20, 40];
      _intervalSeconds = 20;
      constructor(e) {
        if (
          (super({ ...e, exportIntervalMillis: e.exportIntervalMillis ?? 2e4 }),
          (e.exportIntervalMillis ?? 2e4) !== 2e4)
        )
          throw new Error("Aligned reader only supports 20-second intervals for 0/20/40 alignment");
      }
      onInitialized() {
        let e = new Date(),
          r = e.getSeconds(),
          n = e.getMilliseconds(),
          o = this._alignSeconds.find((u) => u >= r),
          s;
        (o !== void 0 ? (s = (o - r) * 1e3 - n) : ((s = (60 - r) * 1e3 - n), (o = 0)), (s = Math.max(0, s)));
        let a = setTimeout(() => {
          (this._alignedExport(),
            (this._interval = setInterval(() => {
              this._alignedExport();
            }, this._intervalSeconds * 1e3)));
          let u = this._interval;
          typeof u != "number" && u?.unref && u.unref();
        }, s);
        typeof a != "number" && a?.unref && a.unref();
      }
      async _alignedExport() {
        let e = this._exportTimeout;
        try {
          await uWo(this._doCollectAndExport(), e);
        } catch {}
      }
      async _doCollectAndExport() {
        let e = this._exportTimeout,
          { resourceMetrics: r, errors: n } = await this.collect({ timeoutMillis: e });
        if ((n.length > 0, r.resource.asyncAttributesPending))
          try {
            await r.resource.waitForAsyncAttributes?.();
          } catch {}
        if (r.scopeMetrics.length === 0) return;
        await this._exporter.export(r);
      }
      async onShutdown() {
        let e = this._interval;
        (e && clearInterval(e), await super.onShutdown());
      }
    };
  });