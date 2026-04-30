/**
 * @module lJt
 * @category unknown
 * @label unknown
 * @position 1226 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (lJt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var lJt = T((g2c, hkn) => {
  "use strict";
  var cOs = pkn(),
    lOs = vF(),
    cJt = class extends lOs {
      constructor() {
        let e = { tag: "rowBreaks", count: !0, childXform: new cOs() };
        super(e);
      }
      render(e, r) {
        if (r && r.length) {
          (e.openNode(this.tag, this.$),
            this.count && (e.addAttribute(this.$count, r.length), e.addAttribute("manualBreakCount", r.length)));
          let { childXform: n } = this;
          (r.forEach((o) => {
            n.render(e, o);
          }),
            e.closeNode());
        } else this.empty && e.leafNode(this.tag);
      }
    };
  hkn.exports = cJt;
});