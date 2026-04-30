/**
 * @module hWr
 * @category utils/oop
 * @label oop
 * @position 244 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (hWr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var hWr = T((oBe) => {
  "use strict";
  Object.defineProperty(oBe, "__esModule", { value: !0 });
  oBe.MeterSelector = void 0;
  var a4t = nBe(),
    u4t = class {
      _nameFilter;
      _versionFilter;
      _schemaUrlFilter;
      constructor(e) {
        ((this._nameFilter = new a4t.ExactPredicate(e?.name)),
          (this._versionFilter = new a4t.ExactPredicate(e?.version)),
          (this._schemaUrlFilter = new a4t.ExactPredicate(e?.schemaUrl)));
      }
      getNameFilter() {
        return this._nameFilter;
      }
      getVersionFilter() {
        return this._versionFilter;
      }
      getSchemaUrlFilter() {
        return this._schemaUrlFilter;
      }
    };
  oBe.MeterSelector = u4t;
});