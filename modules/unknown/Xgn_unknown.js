/**
 * @module Xgn
 * @category unknown
 * @label unknown
 * @position 831 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Xgn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Xgn = T((c$t) => {
  "use strict";
  Object.defineProperty(c$t, "__esModule", { value: !0 });
  var u$t = _a(),
    i3s = nc(),
    o3s = xYe(),
    s3s = { message: "must be equal to constant", params: ({ schemaCode: t }) => (0, u$t._)`{allowedValue: ${t}}` },
    a3s = {
      keyword: "const",
      $data: !0,
      error: s3s,
      code(t) {
        let { gen: e, data: r, $data: n, schemaCode: o, schema: s } = t;
        n || (s && typeof s == "object")
          ? t.fail$data((0, u$t._)`!${(0, i3s.useFunc)(e, o3s.default)}(${r}, ${o})`)
          : t.fail((0, u$t._)`${s} !== ${r}`);
      },
    };
  c$t.default = a3s;
});