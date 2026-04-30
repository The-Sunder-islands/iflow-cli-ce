/**
 * @module vro
 * @category unknown
 * @label unknown
 * @position 1973 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (vro) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var vro = T((OTl, uvr) => {
  "use strict";
  var kgu = gro(),
    Ogu = Aro(),
    Ngu = _ro(),
    Ero = (t) => {
      if (typeof t != "string" || t.length === 0 || ((t = kgu(t)), t.length === 0)) return 0;
      t = t.replace(Ngu(), "  ");
      let e = 0;
      for (let r = 0; r < t.length; r++) {
        let n = t.codePointAt(r);
        n <= 31 || (n >= 127 && n <= 159) || (n >= 768 && n <= 879) || (n > 65535 && r++, (e += Ogu(n) ? 2 : 1));
      }
      return e;
    };
  uvr.exports = Ero;
  uvr.exports.default = Ero;
});