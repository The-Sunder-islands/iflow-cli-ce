/**
 * @module a8n
 * @category utils/oop
 * @label oop
 * @position 902 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (a8n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var a8n = T((IQt) => {
  "use strict";
  Object.defineProperty(IQt, "__esModule", { value: !0 });
  var v8s = yE(),
    TKe = za(),
    C8s = {
      message: ({ schemaCode: t }) => (0, TKe.str)`must match pattern "${t}"`,
      params: ({ schemaCode: t }) => (0, TKe._)`{pattern: ${t}}`,
    },
    S8s = {
      keyword: "pattern",
      type: "string",
      schemaType: "string",
      $data: !0,
      error: C8s,
      code(t) {
        let { data: e, $data: r, schema: n, schemaCode: o, it: s } = t,
          a = s.opts.unicodeRegExp ? "u" : "",
          u = r ? (0, TKe._)`(new RegExp(${o}, ${a}))` : (0, v8s.usePattern)(t, n);
        t.fail$data((0, TKe._)`!${u}.test(${e})`);
      },
    };
  IQt.default = S8s;
});