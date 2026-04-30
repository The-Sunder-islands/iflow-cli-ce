/**
 * @module _Yr
 * @category utils/oop
 * @label oop
 * @position 319 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (_Yr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var _Yr = T((ELe) => {
  "use strict";
  Object.defineProperty(ELe, "__esModule", { value: !0 });
  ELe.Logger = void 0;
  var hko = (Zt(), bt(cr)),
    gko = yYr(),
    V4t = class {
      instrumentationScope;
      _sharedState;
      constructor(e, r) {
        ((this.instrumentationScope = e), (this._sharedState = r));
      }
      emit(e) {
        let r = e.context || hko.context.active(),
          n = new gko.LogRecordImpl(this._sharedState, this.instrumentationScope, { context: r, ...e });
        (this._sharedState.activeProcessor.onEmit(n, r), n._makeReadonly());
      }
    };
  ELe.Logger = V4t;
});