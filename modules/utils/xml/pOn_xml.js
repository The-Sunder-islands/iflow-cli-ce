/**
 * @module pOn
 * @category utils/xml
 * @label xml
 * @position 1253 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (pOn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var pOn = T((G2c, fOn) => {
  var PNs = Kr(),
    WJt = class extends PNs {
      get tag() {
        return "a:hlinkClick";
      }
      render(e, r) {
        r.hyperlinks &&
          r.hyperlinks.rId &&
          e.leafNode(this.tag, {
            "xmlns:r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
            "r:id": r.hyperlinks.rId,
            tooltip: r.hyperlinks.tooltip,
          });
      }
      parseOpen(e) {
        switch (e.name) {
          case this.tag:
            return ((this.model = { hyperlinks: { rId: e.attributes["r:id"], tooltip: e.attributes.tooltip } }), !0);
          default:
            return !0;
        }
      }
      parseText() {}
      parseClose() {
        return !1;
      }
    };
  fOn.exports = WJt;
});