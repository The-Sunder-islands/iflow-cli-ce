/**
 * @module Shn
 * @category utils/oop
 * @label oop
 * @position 761 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Shn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Shn = T((AFt) => {
  "use strict";
  Object.defineProperty(AFt, "__esModule", { value: !0 });
  var Mms = lE(),
    zze = Ha(),
    Fms = {
      message: ({ schemaCode: t }) => (0, zze.str)`must match pattern "${t}"`,
      params: ({ schemaCode: t }) => (0, zze._)`{pattern: ${t}}`,
    },
    Ums = {
      keyword: "pattern",
      type: "string",
      schemaType: "string",
      $data: !0,
      error: Fms,
      code(t) {
        let { data: e, $data: r, schema: n, schemaCode: o, it: s } = t,
          a = s.opts.unicodeRegExp ? "u" : "",
          u = r ? (0, zze._)`(new RegExp(${o}, ${a}))` : (0, Mms.usePattern)(t, n);
        t.fail$data((0, zze._)`!${u}.test(${e})`);
      },
    };
  AFt.default = Ums;
});