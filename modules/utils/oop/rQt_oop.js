/**
 * @module rQt
 * @category utils/oop
 * @label oop
 * @position 880 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (rQt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var rQt = T((PM) => {
  "use strict";
  Object.defineProperty(PM, "__esModule", { value: !0 });
  PM.shouldUseRule = PM.shouldUseGroup = PM.schemaHasRulesForType = void 0;
  function A2s({ schema: t, self: e }, r) {
    let n = e.RULES.types[r];
    return n && n !== !0 && i5n(t, n);
  }
  PM.schemaHasRulesForType = A2s;
  function i5n(t, e) {
    return e.rules.some((r) => o5n(t, r));
  }
  PM.shouldUseGroup = i5n;
  function o5n(t, e) {
    var r;
    return (
      t[e.keyword] !== void 0 ||
      ((r = e.definition.implements) === null || r === void 0 ? void 0 : r.some((n) => t[n] !== void 0))
    );
  }
  PM.shouldUseRule = o5n;
});