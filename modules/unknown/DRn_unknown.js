/**
 * @module DRn
 * @category unknown
 * @label unknown
 * @position 1202 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (DRn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var DRn = T((qAc, TRn) => {
  var uks = Kr(),
    vKt = class extends uks {
      render(e, r) {
        e.leafNode("workbookPr", { date1904: r.date1904 ? 1 : void 0, defaultThemeVersion: 164011, filterPrivacy: 1 });
      }
      parseOpen(e) {
        return e.name === "workbookPr" ? ((this.model = { date1904: e.attributes.date1904 === "1" }), !0) : !1;
      }
      parseText() {}
      parseClose() {
        return !1;
      }
    };
  TRn.exports = vKt;
});