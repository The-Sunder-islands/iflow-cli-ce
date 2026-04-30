/**
 * @module R4t
 * @category utils/oop
 * @label oop
 * @position 287 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (R4t) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var R4t = T((WBe) => {
  "use strict";
  Object.defineProperty(WBe, "__esModule", { value: !0 });
  WBe.ProxyLoggerProvider = void 0;
  var cRo = HBe(),
    lRo = D4t(),
    I4t = class {
      getLogger(e, r, n) {
        var o;
        return (o = this._getDelegateLogger(e, r, n)) !== null && o !== void 0 ? o : new lRo.ProxyLogger(this, e, r, n);
      }
      _getDelegate() {
        var e;
        return (e = this._delegate) !== null && e !== void 0 ? e : cRo.NOOP_LOGGER_PROVIDER;
      }
      _setDelegate(e) {
        this._delegate = e;
      }
      _getDelegateLogger(e, r, n) {
        var o;
        return (o = this._delegate) === null || o === void 0 ? void 0 : o.getLogger(e, r, n);
      }
    };
  WBe.ProxyLoggerProvider = I4t;
});