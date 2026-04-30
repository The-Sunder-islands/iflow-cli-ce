/**
 * @module Vgn
 * @category unknown
 * @label unknown
 * @position 825 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Vgn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Vgn = T((t$t) => {
  "use strict";
  Object.defineProperty(t$t, "__esModule", { value: !0 });
  var qhs = pE(),
    wYe = _a(),
    Hhs = {
      message: ({ schemaCode: t }) => (0, wYe.str)`must match pattern "${t}"`,
      params: ({ schemaCode: t }) => (0, wYe._)`{pattern: ${t}}`,
    },
    Vhs = {
      keyword: "pattern",
      type: "string",
      schemaType: "string",
      $data: !0,
      error: Hhs,
      code(t) {
        let { data: e, $data: r, schema: n, schemaCode: o, it: s } = t,
          a = s.opts.unicodeRegExp ? "u" : "",
          u = r ? (0, wYe._)`(new RegExp(${o}, ${a}))` : (0, qhs.usePattern)(t, n);
        t.fail$data((0, wYe._)`!${u}.test(${e})`);
      },
    };
  t$t.default = Vhs;
});