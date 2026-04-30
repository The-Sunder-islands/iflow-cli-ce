/**
 * @module Lhn
 * @category utils/oop
 * @label oop
 * @position 772 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Lhn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Lhn = T((OFt) => {
  "use strict";
  Object.defineProperty(OFt, "__esModule", { value: !0 });
  var _ds = kFt(),
    Eds = {
      keyword: "prefixItems",
      type: "array",
      schemaType: ["array"],
      before: "uniqueItems",
      code: (t) => (0, _ds.validateTuple)(t, "items"),
    };
  OFt.default = Eds;
});