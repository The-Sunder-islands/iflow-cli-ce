/**
 * @module LYr
 * @category app/hooks
 * @label iflow-hooks
 * @position 334 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (LYr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 *
 * === Auto-analyzed semantic info ===
 * Classes: class extends
 * Features: esbuild module exports: LYr
 * === End semantic info ===
 */


var LYr = T((PLe) => {
  "use strict";
  Object.defineProperty(PLe, "__esModule", { value: !0 });
  PLe.AsyncHooksContextManager = void 0;
  var Fko = (Zt(), bt(cr)),
    Uko = Ae("async_hooks"),
    $ko = oSt(),
    sSt = class extends $ko.AbstractAsyncHooksContextManager {
      _asyncHook;
      _contexts = new Map();
      _stack = [];
      constructor() {
        (super(),
          (this._asyncHook = Uko.createHook({
            init: this._init.bind(this),
            before: this._before.bind(this),
            after: this._after.bind(this),
            destroy: this._destroy.bind(this),
            promiseResolve: this._destroy.bind(this),
          })));
      }
      active() {
        return this._stack[this._stack.length - 1] ?? Fko.ROOT_CONTEXT;
      }
      with(e, r, n, ...o) {
        this._enterContext(e);
        try {
          return r.call(n, ...o);
        } finally {
          this._exitContext();
        }
      }
      enable() {
        return (this._asyncHook.enable(), this);
      }
      disable() {
        return (this._asyncHook.disable(), this._contexts.clear(), (this._stack = []), this);
      }
      _init(e, r) {
        if (r === "TIMERWRAP") return;
        let n = this._stack[this._stack.length - 1];
        n !== void 0 && this._contexts.set(e, n);
      }
      _destroy(e) {
        this._contexts.delete(e);
      }
      _before(e) {
        let r = this._contexts.get(e);
        r !== void 0 && this._enterContext(r);
      }
      _after() {
        this._exitContext();
      }
      _enterContext(e) {
        this._stack.push(e);
      }
      _exitContext() {
        this._stack.pop();
      }
    };
  PLe.AsyncHooksContextManager = sSt;
});