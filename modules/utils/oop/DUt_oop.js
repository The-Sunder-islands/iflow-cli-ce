/**
 * @module DUt
 * @category utils/oop
 * @label oop
 * @position 804 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (DUt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var DUt = T((_M) => {
  "use strict";
  Object.defineProperty(_M, "__esModule", { value: !0 });
  _M.shouldUseRule = _M.shouldUseGroup = _M.schemaHasRulesForType = void 0;
  function $fs({ schema: t, self: e }, r) {
    let n = e.RULES.types[r];
    return n && n !== !0 && G3n(t, n);
  }
  _M.schemaHasRulesForType = $fs;
  function G3n(t, e) {
    return e.rules.some((r) => q3n(t, r));
  }
  _M.shouldUseGroup = G3n;
  function q3n(t, e) {
    var r;
    return (
      t[e.keyword] !== void 0 ||
      ((r = e.definition.implements) === null || r === void 0 ? void 0 : r.some((n) => t[n] !== void 0))
    );
  }
  _M.shouldUseRule = q3n;
});