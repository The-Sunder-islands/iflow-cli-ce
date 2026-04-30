/**
 * @module Z7t
 * @category utils/oop
 * @label oop
 * @position 625 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Z7t) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Z7t = T((Kje) => {
  "use strict";
  Object.defineProperty(Kje, "__esModule", { value: !0 });
  Kje.ProxyLogger = void 0;
  var $Yo = Wje(),
    X7t = class {
      constructor(e, r, n, o) {
        ((this._provider = e), (this.name = r), (this.version = n), (this.options = o));
      }
      emit(e) {
        this._getLogger().emit(e);
      }
      _getLogger() {
        if (this._delegate) return this._delegate;
        let e = this._provider._getDelegateLogger(this.name, this.version, this.options);
        return e ? ((this._delegate = e), this._delegate) : $Yo.NOOP_LOGGER;
      }
    };
  Kje.ProxyLogger = X7t;
});