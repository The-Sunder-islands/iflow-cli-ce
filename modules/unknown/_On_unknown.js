/**
 * @module _On
 * @category unknown
 * @label unknown
 * @position 1256 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (_On) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var _On = T((V2c, yOn) => {
  var UNs = Kr(),
    KJt = class extends UNs {
      get tag() {
        return "xdr:cNvPicPr";
      }
      render(e) {
        (e.openNode(this.tag), e.leafNode("a:picLocks", { noChangeAspect: "1" }), e.closeNode());
      }
      parseOpen(e) {
        switch (e.name) {
          case this.tag:
            return !0;
          default:
            return !0;
        }
      }
      parseText() {}
      parseClose(e) {
        switch (e) {
          case this.tag:
            return !1;
          default:
            return !0;
        }
      }
    };
  yOn.exports = KJt;
});