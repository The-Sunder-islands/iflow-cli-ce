/**
 * @module nJr
 * @category utils/oop
 * @label oop
 * @position 399 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (nJr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var nJr = T((aq) => {
  "use strict";
  Object.defineProperty(aq, "__esModule", { value: !0 });
  aq.BasicTracerProvider = aq.ForceFlushState = void 0;
  var GNo = Ii(),
    qNo = rre(),
    HNo = tJr(),
    VNo = iwt(),
    WNo = rJr(),
    zNo = owt(),
    yre;
  (function (t) {
    ((t[(t.resolved = 0)] = "resolved"),
      (t[(t.timeout = 1)] = "timeout"),
      (t[(t.error = 2)] = "error"),
      (t[(t.unresolved = 3)] = "unresolved"));
  })((yre = aq.ForceFlushState || (aq.ForceFlushState = {})));
  var dwt = class {
    _config;
    _tracers = new Map();
    _resource;
    _activeSpanProcessor;
    constructor(e = {}) {
      let r = (0, GNo.merge)({}, (0, VNo.loadDefaultConfig)(), (0, zNo.reconfigureLimits)(e));
      ((this._resource = r.resource ?? (0, qNo.defaultResource)()),
        (this._config = Object.assign({}, r, { resource: this._resource })));
      let n = [];
      (e.spanProcessors?.length && n.push(...e.spanProcessors),
        (this._activeSpanProcessor = new WNo.MultiSpanProcessor(n)));
    }
    getTracer(e, r, n) {
      let o = `${e}@${r || ""}:${n?.schemaUrl || ""}`;
      return (
        this._tracers.has(o) ||
          this._tracers.set(
            o,
            new HNo.Tracer(
              { name: e, version: r, schemaUrl: n?.schemaUrl },
              this._config,
              this._resource,
              this._activeSpanProcessor,
            ),
          ),
        this._tracers.get(o)
      );
    }
    forceFlush() {
      let e = this._config.forceFlushTimeoutMillis,
        r = this._activeSpanProcessor._spanProcessors.map(
          (n) =>
            new Promise((o) => {
              let s,
                a = setTimeout(() => {
                  (o(new Error(`Span processor did not completed within timeout period of ${e} ms`)),
                    (s = yre.timeout));
                }, e);
              n.forceFlush()
                .then(() => {
                  (clearTimeout(a), s !== yre.timeout && ((s = yre.resolved), o(s)));
                })
                .catch((u) => {
                  (clearTimeout(a), (s = yre.error), o(u));
                });
            }),
        );
      return new Promise((n, o) => {
        Promise.all(r)
          .then((s) => {
            let a = s.filter((u) => u !== yre.resolved);
            a.length > 0 ? o(a) : n();
          })
          .catch((s) => o([s]));
      });
    }
    shutdown() {
      return this._activeSpanProcessor.shutdown();
    }
  };
  aq.BasicTracerProvider = dwt;
});