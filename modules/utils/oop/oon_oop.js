/**
 * @module oon
 * @category utils/oop
 * @label oop
 * @position 637 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (oon) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var oon = T((nQe) => {
  "use strict";
  Object.defineProperty(nQe, "__esModule", { value: !0 });
  nQe.AnchoredClock = void 0;
  var cRt = class {
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
  nQe.AnchoredClock = cRt;
});