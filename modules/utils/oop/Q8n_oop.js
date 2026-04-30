/**
 * @module Q8n
 * @category utils/oop
 * @label oop
 * @position 926 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Q8n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Q8n = T((iGt) => {
  "use strict";
  Object.defineProperty(iGt, "__esModule", { value: !0 });
  var M9s = sc(),
    F9s = {
      keyword: ["then", "else"],
      schemaType: ["object", "boolean"],
      code({ keyword: t, parentSchema: e, it: r }) {
        e.if === void 0 && (0, M9s.checkStrictMode)(r, `"${t}" without "if" is ignored`);
      },
    };
  iGt.default = F9s;
});