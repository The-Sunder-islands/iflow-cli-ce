/**
 * @module vhn
 * @category utils/validation
 * @label ajv
 * @position 759 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (vhn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var vhn = T((gFt) => {
  "use strict";
  Object.defineProperty(gFt, "__esModule", { value: !0 });
  function Ehn(t) {
    let e = t.length,
      r = 0,
      n = 0,
      o;
    for (; n < e; )
      (r++,
        (o = t.charCodeAt(n++)),
        o >= 55296 && o <= 56319 && n < e && ((o = t.charCodeAt(n)), (o & 64512) === 56320 && n++));
    return r;
  }
  gFt.default = Ehn;
  Ehn.code = 'require("ajv/dist/runtime/ucs2length").default';
});