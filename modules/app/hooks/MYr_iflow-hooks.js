/**
 * @module MYr
 * @category app/hooks
 * @label iflow-hooks
 * @position 335 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (MYr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 *
 * === Auto-analyzed semantic info ===
 * Classes: class extends
 * Features: esbuild module exports: MYr
 * === End semantic info ===
 */


var MYr = T((BLe) => {
  "use strict";
  Object.defineProperty(BLe, "__esModule", { value: !0 });
  BLe.AsyncLocalStorageContextManager = void 0;
  var jko = (Zt(), bt(cr)),
    Qko = Ae("async_hooks"),
    Gko = oSt(),
    aSt = class extends Gko.AbstractAsyncHooksContextManager {
      _asyncLocalStorage;
      constructor() {
        (super(), (this._asyncLocalStorage = new Qko.AsyncLocalStorage()));
      }
      active() {
        return this._asyncLocalStorage.getStore() ?? jko.ROOT_CONTEXT;
      }
      with(e, r, n, ...o) {
        let s = n == null ? r : r.bind(n);
        return this._asyncLocalStorage.run(e, s, ...o);
      }
      enable() {
        return this;
      }
      disable() {
        return (this._asyncLocalStorage.disable(), this);
      }
    };
  BLe.AsyncLocalStorageContextManager = aSt;
});