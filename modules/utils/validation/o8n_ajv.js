/**
 * @module o8n
 * @category utils/validation
 * @label ajv
 * @position 900 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (o8n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var o8n = T((TQt) => {
  "use strict";
  Object.defineProperty(TQt, "__esModule", { value: !0 });
  function i8n(t) {
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
  TQt.default = i8n;
  i8n.code = 'require("ajv/dist/runtime/ucs2length").default';
});