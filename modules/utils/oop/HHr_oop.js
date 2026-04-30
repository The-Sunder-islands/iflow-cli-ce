/**
 * @module HHr
 * @category utils/oop
 * @label oop
 * @position 185 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (HHr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var HHr = T((nPe) => {
  "use strict";
  Object.defineProperty(nPe, "__esModule", { value: !0 });
  nPe.ExponentMapping = void 0;
  var Nte = Zvt(),
    rTo = ePe(),
    qHr = rPe(),
    tCt = class {
      _shift;
      constructor(e) {
        this._shift = -e;
      }
      mapToIndex(e) {
        if (e < Nte.MIN_VALUE) return this._minNormalLowerBoundaryIndex();
        let r = Nte.getNormalBase2(e),
          n = this._rightShift(Nte.getSignificand(e) - 1, Nte.SIGNIFICAND_WIDTH);
        return (r + n) >> this._shift;
      }
      lowerBoundary(e) {
        let r = this._minNormalLowerBoundaryIndex();
        if (e < r) throw new qHr.MappingError(`underflow: ${e} is < minimum lower boundary: ${r}`);
        let n = this._maxNormalLowerBoundaryIndex();
        if (e > n) throw new qHr.MappingError(`overflow: ${e} is > maximum lower boundary: ${n}`);
        return rTo.ldexp(1, e << this._shift);
      }
      get scale() {
        return this._shift === 0 ? 0 : -this._shift;
      }
      _minNormalLowerBoundaryIndex() {
        let e = Nte.MIN_NORMAL_EXPONENT >> this._shift;
        return (this._shift < 2 && e--, e);
      }
      _maxNormalLowerBoundaryIndex() {
        return Nte.MAX_NORMAL_EXPONENT >> this._shift;
      }
      _rightShift(e, r) {
        return Math.floor(e * Math.pow(2, -r));
      }
    };
  nPe.ExponentMapping = tCt;
});