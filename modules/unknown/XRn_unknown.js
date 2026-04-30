/**
 * @module XRn
 * @category unknown
 * @label unknown
 * @position 1213 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (XRn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var XRn = T((n2c, JRn) => {
  var Bks = Kr(),
    hue = (t) => typeof t < "u",
    QKt = class extends Bks {
      get tag() {
        return "outlinePr";
      }
      render(e, r) {
        return r && (hue(r.summaryBelow) || hue(r.summaryRight))
          ? (e.leafNode(this.tag, {
              summaryBelow: hue(r.summaryBelow) ? Number(r.summaryBelow) : void 0,
              summaryRight: hue(r.summaryRight) ? Number(r.summaryRight) : void 0,
            }),
            !0)
          : !1;
      }
      parseOpen(e) {
        return e.name === this.tag
          ? ((this.model = {
              summaryBelow: hue(e.attributes.summaryBelow) ? !!Number(e.attributes.summaryBelow) : void 0,
              summaryRight: hue(e.attributes.summaryRight) ? !!Number(e.attributes.summaryRight) : void 0,
            }),
            !0)
          : !1;
      }
      parseText() {}
      parseClose() {
        return !1;
      }
    };
  JRn.exports = QKt;
});