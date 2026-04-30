/**
 * @module Zin
 * @category utils/oop
 * @label oop
 * @position 631 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Zin) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Zin = T((tQe) => {
  "use strict";
  Object.defineProperty(tQe, "__esModule", { value: !0 });
  tQe.LogsAPI = void 0;
  var $_ = Jin(),
    WYo = Yje(),
    Xin = tRt(),
    rRt = class t {
      constructor() {
        this._proxyLoggerProvider = new Xin.ProxyLoggerProvider();
      }
      static getInstance() {
        return (this._instance || (this._instance = new t()), this._instance);
      }
      setGlobalLoggerProvider(e) {
        return $_._global[$_.GLOBAL_LOGS_API_KEY]
          ? this.getLoggerProvider()
          : (($_._global[$_.GLOBAL_LOGS_API_KEY] = (0, $_.makeGetter)(
              $_.API_BACKWARDS_COMPATIBILITY_VERSION,
              e,
              WYo.NOOP_LOGGER_PROVIDER,
            )),
            this._proxyLoggerProvider._setDelegate(e),
            e);
      }
      getLoggerProvider() {
        var e, r;
        return (r =
          (e = $_._global[$_.GLOBAL_LOGS_API_KEY]) === null || e === void 0
            ? void 0
            : e.call($_._global, $_.API_BACKWARDS_COMPATIBILITY_VERSION)) !== null && r !== void 0
          ? r
          : this._proxyLoggerProvider;
      }
      getLogger(e, r, n) {
        return this.getLoggerProvider().getLogger(e, r, n);
      }
      disable() {
        (delete $_._global[$_.GLOBAL_LOGS_API_KEY], (this._proxyLoggerProvider = new Xin.ProxyLoggerProvider()));
      }
    };
  tQe.LogsAPI = rRt;
});