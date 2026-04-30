/**
 * @module oWr
 * @category utils/oop
 * @label oop
 * @position 235 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (oWr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var oWr = T((Wte) => {
  "use strict";
  Object.defineProperty(Wte, "__esModule", { value: !0 });
  Wte.BatchObservableResultImpl = Wte.ObservableResultImpl = void 0;
  var Vte = (Zt(), bt(cr)),
    iWr = _ge(),
    jDo = jPe(),
    WCt = class {
      _instrumentName;
      _valueType;
      _buffer = new iWr.AttributeHashMap();
      constructor(e, r) {
        ((this._instrumentName = e), (this._valueType = r));
      }
      observe(e, r = {}) {
        if (typeof e != "number") {
          Vte.diag.warn(`non-number value provided to metric ${this._instrumentName}: ${e}`);
          return;
        }
        (this._valueType === Vte.ValueType.INT &&
          !Number.isInteger(e) &&
          (Vte.diag.warn(
            `INT value type cannot accept a floating-point value for ${this._instrumentName}, ignoring the fractional digits.`,
          ),
          (e = Math.trunc(e)),
          !Number.isInteger(e))) ||
          this._buffer.set(r, e);
      }
    };
  Wte.ObservableResultImpl = WCt;
  var zCt = class {
    _buffer = new Map();
    observe(e, r, n = {}) {
      if (!(0, jDo.isObservableInstrument)(e)) return;
      let o = this._buffer.get(e);
      if ((o == null && ((o = new iWr.AttributeHashMap()), this._buffer.set(e, o)), typeof r != "number")) {
        Vte.diag.warn(`non-number value provided to metric ${e._descriptor.name}: ${r}`);
        return;
      }
      (e._descriptor.valueType === Vte.ValueType.INT &&
        !Number.isInteger(r) &&
        (Vte.diag.warn(
          `INT value type cannot accept a floating-point value for ${e._descriptor.name}, ignoring the fractional digits.`,
        ),
        (r = Math.trunc(r)),
        !Number.isInteger(r))) ||
        o.set(n, r);
    }
  };
  Wte.BatchObservableResultImpl = zCt;
});