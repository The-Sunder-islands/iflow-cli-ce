/**
 * @module cLr
 * @category utils/oop
 * @label oop
 * @position 125 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (cLr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var cLr = T((mNe) => {
  "use strict";
  Object.defineProperty(mNe, "__esModule", { value: !0 });
  mNe.AnchoredClock = void 0;
  var ovt = class {
    _monotonicClock;
    _epochMillis;
    _performanceMillis;
    constructor(e, r) {
      ((this._monotonicClock = r), (this._epochMillis = e.now()), (this._performanceMillis = r.now()));
    }
    now() {
      let e = this._monotonicClock.now() - this._performanceMillis;
      return this._epochMillis + e;
    }
  };
  mNe.AnchoredClock = ovt;
});