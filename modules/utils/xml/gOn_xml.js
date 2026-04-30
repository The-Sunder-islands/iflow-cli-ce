/**
 * @module gOn
 * @category utils/xml
 * @label xml
 * @position 1254 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (gOn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var gOn = T((q2c, hOn) => {
  var BNs = Kr(),
    zJt = class extends BNs {
      get tag() {
        return "a:extLst";
      }
      render(e) {
        (e.openNode(this.tag),
          e.openNode("a:ext", { uri: "{FF2B5EF4-FFF2-40B4-BE49-F238E27FC236}" }),
          e.leafNode("a16:creationId", {
            "xmlns:a16": "http://schemas.microsoft.com/office/drawing/2014/main",
            id: "{00000000-0008-0000-0000-000002000000}",
          }),
          e.closeNode(),
          e.closeNode());
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
  hOn.exports = zJt;
});