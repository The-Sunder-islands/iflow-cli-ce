/**
 * @module j8r
 * @category unknown
 * @label unknown
 * @position 1841 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (j8r) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var j8r = T((qil, $8r) => {
  "use strict";
  var gnu = Hht(),
    bnu = JMi(),
    Anu = ZMi(),
    eFi = (t) => {
      if (typeof t != "string" || t.length === 0 || ((t = gnu(t)), t.length === 0)) return 0;
      t = t.replace(Anu(), "  ");
      let e = 0;
      for (let r = 0; r < t.length; r++) {
        let n = t.codePointAt(r);
        n <= 31 || (n >= 127 && n <= 159) || (n >= 768 && n <= 879) || (n > 65535 && r++, (e += bnu(n) ? 2 : 1));
      }
      return e;
    };
  $8r.exports = eFi;
  $8r.exports.default = eFi;
});