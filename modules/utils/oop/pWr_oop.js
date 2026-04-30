/**
 * @module pWr
 * @category utils/oop
 * @label oop
 * @position 243 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (pWr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var pWr = T((iBe) => {
  "use strict";
  Object.defineProperty(iBe, "__esModule", { value: !0 });
  iBe.InstrumentSelector = void 0;
  var fWr = nBe(),
    s4t = class {
      _nameFilter;
      _type;
      _unitFilter;
      constructor(e) {
        ((this._nameFilter = new fWr.PatternPredicate(e?.name ?? "*")),
          (this._type = e?.type),
          (this._unitFilter = new fWr.ExactPredicate(e?.unit)));
      }
      getType() {
        return this._type;
      }
      getNameFilter() {
        return this._nameFilter;
      }
      getUnitFilter() {
        return this._unitFilter;
      }
    };
  iBe.InstrumentSelector = s4t;
});