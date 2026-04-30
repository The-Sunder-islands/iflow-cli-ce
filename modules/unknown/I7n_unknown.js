/**
 * @module I7n
 * @category unknown
 * @label unknown
 * @position 1173 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (I7n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var I7n = T((pAc, D7n) => {
  var J7s = Kr(),
    $Yt = class extends J7s {
      constructor(e) {
        (super(), (this.tag = e.tag), (this.attr = e.attr));
      }
      render(e, r) {
        r && (e.openNode(this.tag), e.closeNode());
      }
      parseOpen(e) {
        e.name === this.tag && (this.model = !0);
      }
      parseText() {}
      parseClose() {
        return !1;
      }
    };
  D7n.exports = $Yt;
});