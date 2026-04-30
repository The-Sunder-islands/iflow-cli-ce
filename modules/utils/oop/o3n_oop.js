/**
 * @module o3n
 * @category utils/oop
 * @label oop
 * @position 785 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (o3n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var o3n = T((WFt) => {
  "use strict";
  Object.defineProperty(WFt, "__esModule", { value: !0 });
  var Xds = tc(),
    Zds = {
      keyword: ["then", "else"],
      schemaType: ["object", "boolean"],
      code({ keyword: t, parentSchema: e, it: r }) {
        e.if === void 0 && (0, Xds.checkStrictMode)(r, `"${t}" without "if" is ignored`);
      },
    };
  WFt.default = Zds;
});