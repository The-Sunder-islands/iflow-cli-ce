/**
 * @module Rhn
 * @category utils/oop
 * @label oop
 * @position 767 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Rhn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Rhn = T((xFt) => {
  "use strict";
  Object.defineProperty(xFt, "__esModule", { value: !0 });
  var wFt = Ha(),
    Jms = tc(),
    Xms = Yze(),
    Zms = { message: "must be equal to constant", params: ({ schemaCode: t }) => (0, wFt._)`{allowedValue: ${t}}` },
    eds = {
      keyword: "const",
      $data: !0,
      error: Zms,
      code(t) {
        let { gen: e, data: r, $data: n, schemaCode: o, schema: s } = t;
        n || (s && typeof s == "object")
          ? t.fail$data((0, wFt._)`!${(0, Jms.useFunc)(e, Xms.default)}(${r}, ${o})`)
          : t.fail((0, wFt._)`${s} !== ${r}`);
      },
    };
  xFt.default = eds;
});