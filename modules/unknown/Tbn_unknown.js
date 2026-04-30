/**
 * @module Tbn
 * @category unknown
 * @label unknown
 * @position 846 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Tbn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Tbn = T((R$t) => {
  "use strict";
  Object.defineProperty(R$t, "__esModule", { value: !0 });
  var ogs = nc(),
    sgs = {
      keyword: ["then", "else"],
      schemaType: ["object", "boolean"],
      code({ keyword: t, parentSchema: e, it: r }) {
        e.if === void 0 && (0, ogs.checkStrictMode)(r, `"${t}" without "if" is ignored`);
      },
    };
  R$t.default = sgs;
});