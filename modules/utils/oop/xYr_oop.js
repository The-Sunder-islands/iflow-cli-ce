/**
 * @module xYr
 * @category utils/oop
 * @label oop
 * @position 324 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (xYr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var xYr = T((tq) => {
  "use strict";
  Object.defineProperty(tq, "__esModule", { value: !0 });
  tq.LoggerProvider = tq.DEFAULT_LOGGER_NAME = void 0;
  var wLe = (Zt(), bt(cr)),
    vko = Xte(),
    Cko = rre(),
    SYr = Ii(),
    Sko = _Yr(),
    wYr = EYr(),
    wko = CYr();
  tq.DEFAULT_LOGGER_NAME = "unknown";
  var J4t = class {
    _shutdownOnce;
    _sharedState;
    constructor(e = {}) {
      let r = (0, SYr.merge)({}, (0, wYr.loadDefaultConfig)(), e),
        n = e.resource ?? (0, Cko.defaultResource)();
      ((this._sharedState = new wko.LoggerProviderSharedState(
        n,
        r.forceFlushTimeoutMillis,
        (0, wYr.reconfigureLimits)(r.logRecordLimits),
        e?.processors ?? [],
      )),
        (this._shutdownOnce = new SYr.BindOnceFuture(this._shutdown, this)));
    }
    getLogger(e, r, n) {
      if (this._shutdownOnce.isCalled)
        return (wLe.diag.warn("A shutdown LoggerProvider cannot provide a Logger"), vko.NOOP_LOGGER);
      e || wLe.diag.warn("Logger requested without instrumentation scope name.");
      let o = e || tq.DEFAULT_LOGGER_NAME,
        s = `${o}@${r || ""}:${n?.schemaUrl || ""}`;
      return (
        this._sharedState.loggers.has(s) ||
          this._sharedState.loggers.set(
            s,
            new Sko.Logger({ name: o, version: r, schemaUrl: n?.schemaUrl }, this._sharedState),
          ),
        this._sharedState.loggers.get(s)
      );
    }
    forceFlush() {
      return this._shutdownOnce.isCalled
        ? (wLe.diag.warn("invalid attempt to force flush after LoggerProvider shutdown"), this._shutdownOnce.promise)
        : this._sharedState.activeProcessor.forceFlush();
    }
    shutdown() {
      return this._shutdownOnce.isCalled
        ? (wLe.diag.warn("shutdown may only be called once per LoggerProvider"), this._shutdownOnce.promise)
        : this._shutdownOnce.call();
    }
    _shutdown() {
      return this._sharedState.activeProcessor.shutdown();
    }
  };
  tq.LoggerProvider = J4t;
});