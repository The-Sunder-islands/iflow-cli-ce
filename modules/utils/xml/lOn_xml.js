/**
 * @module lOn
 * @category utils/xml
 * @label xml
 * @position 1251 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (lOn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var lOn = T((j2c, cOn) => {
  var kNs = Kr(),
    HJt = class extends kNs {
      get tag() {
        return "a:blip";
      }
      render(e, r) {
        e.leafNode(this.tag, {
          "xmlns:r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
          "r:embed": r.rId,
          cstate: "print",
        });
      }
      parseOpen(e) {
        switch (e.name) {
          case this.tag:
            return ((this.model = { rId: e.attributes["r:embed"] }), !0);
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
  cOn.exports = HJt;
});