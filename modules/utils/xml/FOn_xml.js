/**
 * @module FOn
 * @category utils/xml
 * @label xml
 * @position 1265 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (FOn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var FOn = T((t5c, MOn) => {
  var lPs = Kr(),
    iXt = class extends lPs {
      get tag() {
        return "filter";
      }
      render(e, r) {
        e.leafNode(this.tag, { val: r.val });
      }
      parseOpen(e) {
        return e.name === this.tag ? ((this.model = { val: e.attributes.val }), !0) : !1;
      }
      parseText() {}
      parseClose() {
        return !1;
      }
    };
  MOn.exports = iXt;
});