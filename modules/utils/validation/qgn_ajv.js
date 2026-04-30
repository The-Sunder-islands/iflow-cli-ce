/**
 * @module qgn
 * @category utils/validation
 * @label ajv
 * @position 823 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (qgn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var qgn = T((ZUt) => {
  "use strict";
  Object.defineProperty(ZUt, "__esModule", { value: !0 });
  function Ggn(t) {
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
  ZUt.default = Ggn;
  Ggn.code = 'require("ajv/dist/runtime/ucs2length").default';
});