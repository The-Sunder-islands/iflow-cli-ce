/**
 * @module qRn
 * @category unknown
 * @label unknown
 * @position 1209 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (qRn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var qRn = T((XAc, GRn) => {
  var Dks = Kr(),
    NKt = class extends Dks {
      get tag() {
        return "dimension";
      }
      render(e, r) {
        r && e.leafNode("dimension", { ref: r });
      }
      parseOpen(e) {
        return e.name === "dimension" ? ((this.model = e.attributes.ref), !0) : !1;
      }
      parseText() {}
      parseClose() {
        return !1;
      }
    };
  GRn.exports = NKt;
});