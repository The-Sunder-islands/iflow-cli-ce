/**
 * @module eWr
 * @category utils/oop
 * @label oop
 * @position 232 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (eWr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var eWr = T((e8) => {
  "use strict";
  Object.defineProperty(e8, "__esModule", { value: !0 });
  e8.getConflictResolutionRecipe =
    e8.getDescriptionResolutionRecipe =
    e8.getTypeConflictResolutionRecipe =
    e8.getUnitConflictResolutionRecipe =
    e8.getValueTypeConflictResolutionRecipe =
    e8.getIncompatibilityDetails =
      void 0;
  function FDo(t, e) {
    let r = "";
    return (
      t.unit !== e.unit &&
        (r += `	- Unit '${t.unit}' does not match '${e.unit}'
`),
      t.type !== e.type &&
        (r += `	- Type '${t.type}' does not match '${e.type}'
`),
      t.valueType !== e.valueType &&
        (r += `	- Value Type '${t.valueType}' does not match '${e.valueType}'
`),
      t.description !== e.description &&
        (r += `	- Description '${t.description}' does not match '${e.description}'
`),
      r
    );
  }
  e8.getIncompatibilityDetails = FDo;
  function KVr(t, e) {
    return `	- use valueType '${t.valueType}' on instrument creation or use an instrument name other than '${e.name}'`;
  }
  e8.getValueTypeConflictResolutionRecipe = KVr;
  function JVr(t, e) {
    return `	- use unit '${t.unit}' on instrument creation or use an instrument name other than '${e.name}'`;
  }
  e8.getUnitConflictResolutionRecipe = JVr;
  function XVr(t, e) {
    let r = { name: e.name, type: e.type, unit: e.unit },
      n = JSON.stringify(r);
    return `	- create a new view with a name other than '${t.name}' and InstrumentSelector '${n}'`;
  }
  e8.getTypeConflictResolutionRecipe = XVr;
  function ZVr(t, e) {
    let r = { name: e.name, type: e.type, unit: e.unit },
      n = JSON.stringify(r);
    return `	- create a new view with a name other than '${t.name}' and InstrumentSelector '${n}'
    	- OR - create a new view with the name ${t.name} and description '${t.description}' and InstrumentSelector ${n}
    	- OR - create a new view with the name ${e.name} and description '${t.description}' and InstrumentSelector ${n}`;
  }
  e8.getDescriptionResolutionRecipe = ZVr;
  function UDo(t, e) {
    return t.valueType !== e.valueType
      ? KVr(t, e)
      : t.unit !== e.unit
        ? JVr(t, e)
        : t.type !== e.type
          ? XVr(t, e)
          : t.description !== e.description
            ? ZVr(t, e)
            : "";
  }
  e8.getConflictResolutionRecipe = UDo;
});