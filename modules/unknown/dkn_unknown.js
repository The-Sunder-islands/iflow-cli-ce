/**
 * @module dkn
 * @category unknown
 * @label unknown
 * @position 1224 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (dkn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var dkn = T((p2c, mkn) => {
  var aOs = Kr(),
    aJt = class extends aOs {
      get tag() {
        return "tablePart";
      }
      render(e, r) {
        r && e.leafNode(this.tag, { "r:id": r.rId });
      }
      parseOpen(e) {
        switch (e.name) {
          case this.tag:
            return ((this.model = { rId: e.attributes["r:id"] }), !0);
          default:
            return !1;
        }
      }
      parseText() {}
      parseClose() {
        return !1;
      }
    };
  mkn.exports = aJt;
});