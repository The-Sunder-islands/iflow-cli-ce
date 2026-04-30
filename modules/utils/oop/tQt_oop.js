/**
 * @module tQt
 * @category utils/oop
 * @label oop
 * @position 879 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (tQt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var tQt = T((wse) => {
  "use strict";
  Object.defineProperty(wse, "__esModule", { value: !0 });
  wse.getRules = wse.isJSONType = void 0;
  var p2s = ["string", "number", "integer", "boolean", "null", "object", "array"],
    h2s = new Set(p2s);
  function g2s(t) {
    return typeof t == "string" && h2s.has(t);
  }
  wse.isJSONType = g2s;
  function b2s() {
    let t = {
      number: { type: "number", rules: [] },
      string: { type: "string", rules: [] },
      array: { type: "array", rules: [] },
      object: { type: "object", rules: [] },
    };
    return {
      types: { ...t, integer: !0, boolean: !0, null: !0 },
      rules: [{ rules: [] }, t.number, t.string, t.array, t.object],
      post: { rules: [] },
      all: {},
      keywords: {},
    };
  }
  wse.getRules = b2s;
});