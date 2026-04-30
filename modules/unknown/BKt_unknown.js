/**
 * @module BKt
 * @category unknown
 * @label unknown
 * @position 1210 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (BKt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var BKt = T((ZAc, HRn) => {
  var Iks = Kr(),
    PKt = class extends Iks {
      get tag() {
        return "hyperlink";
      }
      render(e, r) {
        this.isInternalLink(r)
          ? e.leafNode("hyperlink", { ref: r.address, "r:id": r.rId, tooltip: r.tooltip, location: r.target })
          : e.leafNode("hyperlink", { ref: r.address, "r:id": r.rId, tooltip: r.tooltip });
      }
      parseOpen(e) {
        return e.name === "hyperlink"
          ? ((this.model = { address: e.attributes.ref, rId: e.attributes["r:id"], tooltip: e.attributes.tooltip }),
            e.attributes.location && (this.model.target = e.attributes.location),
            !0)
          : !1;
      }
      parseText() {}
      parseClose() {
        return !1;
      }
      isInternalLink(e) {
        return e.target && /^[^!]+![a-zA-Z]+[\d]+$/.test(e.target);
      }
    };
  HRn.exports = PKt;
});