/**
 * @module Gsn
 * @category utils/oop
 * @label oop
 * @position 696 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Gsn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Gsn = T((Kq) => {
  "use strict";
  Object.defineProperty(Kq, "__esModule", { value: !0 });
  Kq.LoggerProvider = Kq.DEFAULT_LOGGER_NAME = void 0;
  var tGe = (Zt(), bt(cr)),
    MXo = ron(),
    FXo = Bsn(),
    jsn = a4(),
    UXo = Msn(),
    Qsn = Fsn(),
    $Xo = $sn();
  Kq.DEFAULT_LOGGER_NAME = "unknown";
  var qRt = class {
    _shutdownOnce;
    _sharedState;
    constructor(e = {}) {
      let r = (0, jsn.merge)({}, (0, Qsn.loadDefaultConfig)(), e),
        n = e.resource ?? (0, FXo.defaultResource)();
      ((this._sharedState = new $Xo.LoggerProviderSharedState(
        n,
        r.forceFlushTimeoutMillis,
        (0, Qsn.reconfigureLimits)(r.logRecordLimits),
        e?.processors ?? [],
      )),
        (this._shutdownOnce = new jsn.BindOnceFuture(this._shutdown, this)));
    }
    getLogger(e, r, n) {
      if (this._shutdownOnce.isCalled)
        return (tGe.diag.warn("A shutdown LoggerProvider cannot provide a Logger"), MXo.NOOP_LOGGER);
      e || tGe.diag.warn("Logger requested without instrumentation scope name.");
      let o = e || Kq.DEFAULT_LOGGER_NAME,
        s = `${o}@${r || ""}:${n?.schemaUrl || ""}`;
      return (
        this._sharedState.loggers.has(s) ||
          this._sharedState.loggers.set(
            s,
            new UXo.Logger({ name: o, version: r, schemaUrl: n?.schemaUrl }, this._sharedState),
          ),
        this._sharedState.loggers.get(s)
      );
    }
    forceFlush() {
      return this._shutdownOnce.isCalled
        ? (tGe.diag.warn("invalid attempt to force flush after LoggerProvider shutdown"), this._shutdownOnce.promise)
        : this._sharedState.activeProcessor.forceFlush();
    }
    shutdown() {
      return this._shutdownOnce.isCalled
        ? (tGe.diag.warn("shutdown may only be called once per LoggerProvider"), this._shutdownOnce.promise)
        : this._shutdownOnce.call();
    }
    _shutdown() {
      return this._sharedState.activeProcessor.shutdown();
    }
  };
  Kq.LoggerProvider = qRt;
});