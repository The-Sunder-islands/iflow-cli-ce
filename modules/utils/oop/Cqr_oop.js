/**
 * @module Cqr
 * @category utils/oop
 * @label oop
 * @position 150 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Cqr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Cqr = T((kNe) => {
  "use strict";
  Object.defineProperty(kNe, "__esModule", { value: !0 });
  kNe.BindOnceFuture = void 0;
  var Hwo = vqr(),
    vvt = class {
      _callback;
      _that;
      _isCalled = !1;
      _deferred = new Hwo.Deferred();
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
  kNe.BindOnceFuture = vvt;
});