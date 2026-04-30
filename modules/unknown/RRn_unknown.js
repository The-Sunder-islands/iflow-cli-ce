/**
 * @module RRn
 * @category unknown
 * @label unknown
 * @position 1203 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (RRn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var RRn = T((HAc, IRn) => {
  var cks = Kr(),
    CKt = class extends cks {
      render(e, r) {
        e.leafNode("calcPr", { calcId: 171027, fullCalcOnLoad: r.fullCalcOnLoad ? 1 : void 0 });
      }
      parseOpen(e) {
        return e.name === "calcPr" ? ((this.model = {}), !0) : !1;
      }
      parseText() {}
      parseClose() {
        return !1;
      }
    };
  IRn.exports = CKt;
});