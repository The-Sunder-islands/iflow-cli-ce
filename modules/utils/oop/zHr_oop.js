/**
 * @module zHr
 * @category utils/oop
 * @label oop
 * @position 186 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (zHr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var zHr = T((iPe) => {
  "use strict";
  Object.defineProperty(iPe, "__esModule", { value: !0 });
  iPe.LogarithmMapping = void 0;
  var Pte = Zvt(),
    VHr = ePe(),
    WHr = rPe(),
    rCt = class {
      _scale;
      _scaleFactor;
      _inverseFactor;
      constructor(e) {
        ((this._scale = e),
          (this._scaleFactor = VHr.ldexp(Math.LOG2E, e)),
          (this._inverseFactor = VHr.ldexp(Math.LN2, -e)));
      }
      mapToIndex(e) {
        if (e <= Pte.MIN_VALUE) return this._minNormalLowerBoundaryIndex() - 1;
        if (Pte.getSignificand(e) === 0) return (Pte.getNormalBase2(e) << this._scale) - 1;
        let r = Math.floor(Math.log(e) * this._scaleFactor),
          n = this._maxNormalLowerBoundaryIndex();
        return r >= n ? n : r;
      }
      lowerBoundary(e) {
        let r = this._maxNormalLowerBoundaryIndex();
        if (e >= r) {
          if (e === r) return 2 * Math.exp((e - (1 << this._scale)) / this._scaleFactor);
          throw new WHr.MappingError(`overflow: ${e} is > maximum lower boundary: ${r}`);
        }
        let n = this._minNormalLowerBoundaryIndex();
        if (e <= n) {
          if (e === n) return Pte.MIN_VALUE;
          if (e === n - 1) return Math.exp((e + (1 << this._scale)) / this._scaleFactor) / 2;
          throw new WHr.MappingError(`overflow: ${e} is < minimum lower boundary: ${n}`);
        }
        return Math.exp(e * this._inverseFactor);
      }
      get scale() {
        return this._scale;
      }
      _minNormalLowerBoundaryIndex() {
        return Pte.MIN_NORMAL_EXPONENT << this._scale;
      }
      _maxNormalLowerBoundaryIndex() {
        return ((Pte.MAX_NORMAL_EXPONENT + 1) << this._scale) - 1;
      }
    };
  iPe.LogarithmMapping = rCt;
});