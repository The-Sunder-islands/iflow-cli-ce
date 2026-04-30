/**
 * @module TUt
 * @category utils/oop
 * @label oop
 * @position 803 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (TUt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var TUt = T((zoe) => {
  "use strict";
  Object.defineProperty(zoe, "__esModule", { value: !0 });
  zoe.getRules = zoe.isJSONType = void 0;
  var Lfs = ["string", "number", "integer", "boolean", "null", "object", "array"],
    Mfs = new Set(Lfs);
  function Ffs(t) {
    return typeof t == "string" && Mfs.has(t);
  }
  zoe.isJSONType = Ffs;
  function Ufs() {
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
  zoe.getRules = Ufs;
});