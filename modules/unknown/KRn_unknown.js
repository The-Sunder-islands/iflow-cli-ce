/**
 * @module KRn
 * @category unknown
 * @label unknown
 * @position 1212 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (KRn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var KRn = T((r2c, YRn) => {
  var Pks = Kr(),
    jKt = class extends Pks {
      get tag() {
        return "pageSetUpPr";
      }
      render(e, r) {
        return r && r.fitToPage ? (e.leafNode(this.tag, { fitToPage: r.fitToPage ? "1" : void 0 }), !0) : !1;
      }
      parseOpen(e) {
        return e.name === this.tag ? ((this.model = { fitToPage: e.attributes.fitToPage === "1" }), !0) : !1;
      }
      parseText() {}
      parseClose() {
        return !1;
      }
    };
  YRn.exports = jKt;
});