/**
 * @module tRt
 * @category utils/oop
 * @label oop
 * @position 626 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (tRt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var tRt = T((Jje) => {
  "use strict";
  Object.defineProperty(Jje, "__esModule", { value: !0 });
  Jje.ProxyLoggerProvider = void 0;
  var jYo = Yje(),
    QYo = Z7t(),
    eRt = class {
      getLogger(e, r, n) {
        var o;
        return (o = this._getDelegateLogger(e, r, n)) !== null && o !== void 0 ? o : new QYo.ProxyLogger(this, e, r, n);
      }
      _getDelegate() {
        var e;
        return (e = this._delegate) !== null && e !== void 0 ? e : jYo.NOOP_LOGGER_PROVIDER;
      }
      _setDelegate(e) {
        this._delegate = e;
      }
      _getDelegateLogger(e, r, n) {
        var o;
        return (o = this._delegate) === null || o === void 0 ? void 0 : o.getLogger(e, r, n);
      }
    };
  Jje.ProxyLoggerProvider = eRt;
});