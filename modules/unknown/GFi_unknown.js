/**
 * @module GFi
 * @category unknown
 * @label unknown
 * @position 1856 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (GFi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var GFi = T((ool, X8r) => {
  "use strict";
  var eiu = MFi(),
    tiu = UFi(),
    riu = jFi(),
    QFi = (t) => {
      if (typeof t != "string" || t.length === 0 || ((t = eiu(t)), t.length === 0)) return 0;
      t = t.replace(riu(), "  ");
      let e = 0;
      for (let r = 0; r < t.length; r++) {
        let n = t.codePointAt(r);
        n <= 31 || (n >= 127 && n <= 159) || (n >= 768 && n <= 879) || (n > 65535 && r++, (e += tiu(n) ? 2 : 1));
      }
      return e;
    };
  X8r.exports = QFi;
  X8r.exports.default = QFi;
});