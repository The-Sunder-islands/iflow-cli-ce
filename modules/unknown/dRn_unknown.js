/**
 * @module dRn
 * @category unknown
 * @label unknown
 * @position 1193 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (dRn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var dRn = T((BAc, mRn) => {
  var qRs = Kr(),
    fKt = class extends qRs {
      render(e, r) {
        e.leafNode("Relationship", r);
      }
      parseOpen(e) {
        switch (e.name) {
          case "Relationship":
            return ((this.model = e.attributes), !0);
          default:
            return !1;
        }
      }
      parseText() {}
      parseClose() {
        return !1;
      }
    };
  mRn.exports = fKt;
});