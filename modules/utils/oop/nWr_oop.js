/**
 * @module nWr
 * @category utils/oop
 * @label oop
 * @position 234 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (nWr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var nWr = T((KPe) => {
  "use strict";
  Object.defineProperty(KPe, "__esModule", { value: !0 });
  KPe.MultiMetricStorage = void 0;
  var VCt = class {
    _backingStorages;
    constructor(e) {
      this._backingStorages = e;
    }
    record(e, r, n, o) {
      this._backingStorages.forEach((s) => {
        s.record(e, r, n, o);
      });
    }
  };
  KPe.MultiMetricStorage = VCt;
});