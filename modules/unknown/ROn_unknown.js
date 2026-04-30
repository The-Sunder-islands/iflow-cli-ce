/**
 * @module ROn
 * @category unknown
 * @label unknown
 * @position 1261 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ROn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ROn = T((J2c, IOn) => {
  var JNs = Kr(),
    Net = 9525,
    tXt = class extends JNs {
      constructor(e) {
        (super(), (this.tag = e.tag), (this.map = {}));
      }
      render(e, r) {
        e.openNode(this.tag);
        let n = Math.floor(r.width * Net),
          o = Math.floor(r.height * Net);
        (e.addAttribute("cx", n), e.addAttribute("cy", o), e.closeNode());
      }
      parseOpen(e) {
        return e.name === this.tag
          ? ((this.model = {
              width: parseInt(e.attributes.cx || "0", 10) / Net,
              height: parseInt(e.attributes.cy || "0", 10) / Net,
            }),
            !0)
          : !1;
      }
      parseText() {}
      parseClose() {
        return !1;
      }
    };
  IOn.exports = tXt;
});