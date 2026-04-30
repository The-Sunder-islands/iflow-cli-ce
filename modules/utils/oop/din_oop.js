/**
 * @module din
 * @category utils/oop
 * @label oop
 * @position 596 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (din) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var din = T((Eje) => {
  "use strict";
  Object.defineProperty(Eje, "__esModule", { value: !0 });
  Eje.BindOnceFuture = void 0;
  var Izo = min(),
    L7t = class {
      _isCalled = !1;
      _deferred = new Izo.Deferred();
      _callback;
      _that;
      constructor(e, r) {
        ((this._callback = e), (this._that = r));
      }
      get isCalled() {
        return this._isCalled;
      }
      get promise() {
        return this._deferred.promise;
      }
      call(...e) {
        if (!this._isCalled) {
          this._isCalled = !0;
          try {
            Promise.resolve(this._callback.call(this._that, ...e)).then(
              (r) => this._deferred.resolve(r),
              (r) => this._deferred.reject(r),
            );
          } catch (r) {
            this._deferred.reject(r);
          }
        }
        return this._deferred.promise;
      }
    };
  Eje.BindOnceFuture = L7t;
});