/**
 * @module Gzr
 * @category utils/oop
 * @label oop
 * @position 291 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Gzr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Gzr = T((JBe) => {
  "use strict";
  Object.defineProperty(JBe, "__esModule", { value: !0 });
  JBe.LogsAPI = void 0;
  var w_ = jzr(),
    hRo = HBe(),
    Qzr = R4t(),
    k4t = class t {
      constructor() {
        this._proxyLoggerProvider = new Qzr.ProxyLoggerProvider();
      }
      static getInstance() {
        return (this._instance || (this._instance = new t()), this._instance);
      }
      setGlobalLoggerProvider(e) {
        return w_._global[w_.GLOBAL_LOGS_API_KEY]
          ? this.getLoggerProvider()
          : ((w_._global[w_.GLOBAL_LOGS_API_KEY] = (0, w_.makeGetter)(
              w_.API_BACKWARDS_COMPATIBILITY_VERSION,
              e,
              hRo.NOOP_LOGGER_PROVIDER,
            )),
            this._proxyLoggerProvider._setDelegate(e),
            e);
      }
      getLoggerProvider() {
        var e, r;
        return (r =
          (e = w_._global[w_.GLOBAL_LOGS_API_KEY]) === null || e === void 0
            ? void 0
            : e.call(w_._global, w_.API_BACKWARDS_COMPATIBILITY_VERSION)) !== null && r !== void 0
          ? r
          : this._proxyLoggerProvider;
      }
      getLogger(e, r, n) {
        return this.getLoggerProvider().getLogger(e, r, n);
      }
      disable() {
        (delete w_._global[w_.GLOBAL_LOGS_API_KEY], (this._proxyLoggerProvider = new Qzr.ProxyLoggerProvider()));
      }
    };
  JBe.LogsAPI = k4t;
});