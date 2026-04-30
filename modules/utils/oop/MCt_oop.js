/**
 * @module MCt
 * @category utils/oop
 * @label oop
 * @position 227 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (MCt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var MCt = T((GPe) => {
  "use strict";
  Object.defineProperty(GPe, "__esModule", { value: !0 });
  GPe.MetricStorage = void 0;
  var DDo = yge(),
    LCt = class {
      _instrumentDescriptor;
      constructor(e) {
        this._instrumentDescriptor = e;
      }
      getInstrumentDescriptor() {
        return this._instrumentDescriptor;
      }
      updateDescription(e) {
        this._instrumentDescriptor = (0, DDo.createInstrumentDescriptor)(
          this._instrumentDescriptor.name,
          this._instrumentDescriptor.type,
          {
            description: e,
            valueType: this._instrumentDescriptor.valueType,
            unit: this._instrumentDescriptor.unit,
            advice: this._instrumentDescriptor.advice,
          },
        );
      }
    };
  GPe.MetricStorage = LCt;
});