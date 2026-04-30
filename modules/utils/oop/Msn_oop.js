/**
 * @module Msn
 * @category utils/oop
 * @label oop
 * @position 692 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Msn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Msn = T((JQe) => {
  "use strict";
  Object.defineProperty(JQe, "__esModule", { value: !0 });
  JQe.Logger = void 0;
  var RXo = (Zt(), bt(cr)),
    kXo = Lsn(),
    URt = class {
      instrumentationScope;
      _sharedState;
      constructor(e, r) {
        ((this.instrumentationScope = e), (this._sharedState = r));
      }
      emit(e) {
        let r = e.context || RXo.context.active(),
          n = new kXo.LogRecordImpl(this._sharedState, this.instrumentationScope, { context: r, ...e });
        (this._sharedState.activeProcessor.onEmit(n, r), n._makeReadonly());
      }
    };
  JQe.Logger = URt;
});