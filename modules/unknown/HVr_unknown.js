/**
 * @module HVr
 * @category unknown
 * @label unknown
 * @position 223 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (HVr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var HVr = T(($Pe) => {
  "use strict";
  Object.defineProperty($Pe, "__esModule", { value: !0 });
  $Pe.ViewRegistry = void 0;
  var TCt = class {
    _registeredViews = [];
    addView(e) {
      this._registeredViews.push(e);
    }
    findViews(e, r) {
      return this._registeredViews.filter(
        (o) => this._matchInstrument(o.instrumentSelector, e) && this._matchMeter(o.meterSelector, r),
      );
    }
    _matchInstrument(e, r) {
      return (
        (e.getType() === void 0 || r.type === e.getType()) &&
        e.getNameFilter().match(r.name) &&
        e.getUnitFilter().match(r.unit)
      );
    }
    _matchMeter(e, r) {
      return (
        e.getNameFilter().match(r.name) &&
        (r.version === void 0 || e.getVersionFilter().match(r.version)) &&
        (r.schemaUrl === void 0 || e.getSchemaUrlFilter().match(r.schemaUrl))
      );
    }
  };
  $Pe.ViewRegistry = TCt;
});