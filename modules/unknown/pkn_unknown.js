/**
 * @module pkn
 * @category unknown
 * @label unknown
 * @position 1225 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (pkn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var pkn = T((h2c, fkn) => {
  var uOs = Kr(),
    uJt = class extends uOs {
      get tag() {
        return "brk";
      }
      render(e, r) {
        e.leafNode("brk", r);
      }
      parseOpen(e) {
        return e.name === "brk" ? ((this.model = e.attributes.ref), !0) : !1;
      }
      parseText() {}
      parseClose() {
        return !1;
      }
    };
  fkn.exports = uJt;
});