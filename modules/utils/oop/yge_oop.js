/**
 * @module yge
 * @category utils/oop
 * @label oop
 * @position 224 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (yge) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var yge = T((xx) => {
  "use strict";
  Object.defineProperty(xx, "__esModule", { value: !0 });
  xx.isValidName =
    xx.isDescriptorCompatibleWith =
    xx.createInstrumentDescriptorWithView =
    xx.createInstrumentDescriptor =
      void 0;
  var VVr = (Zt(), bt(cr)),
    EDo = qC();
  function vDo(t, e, r) {
    return (
      WVr(t) ||
        VVr.diag.warn(
          `Invalid metric name: "${t}". The metric name should be a ASCII string with a length no greater than 255 characters.`,
        ),
      {
        name: t,
        type: e,
        description: r?.description ?? "",
        unit: r?.unit ?? "",
        valueType: r?.valueType ?? VVr.ValueType.DOUBLE,
        advice: r?.advice ?? {},
      }
    );
  }
  xx.createInstrumentDescriptor = vDo;
  function CDo(t, e) {
    return {
      name: t.name ?? e.name,
      description: t.description ?? e.description,
      type: e.type,
      unit: e.unit,
      valueType: e.valueType,
      advice: e.advice,
    };
  }
  xx.createInstrumentDescriptorWithView = CDo;
  function SDo(t, e) {
    return (
      (0, EDo.equalsCaseInsensitive)(t.name, e.name) &&
      t.unit === e.unit &&
      t.type === e.type &&
      t.valueType === e.valueType
    );
  }
  xx.isDescriptorCompatibleWith = SDo;
  var wDo = /^[a-z][a-z0-9_.\-/]{0,254}$/i;
  function WVr(t) {
    return t.match(wDo) != null;
  }
  xx.isValidName = WVr;
});