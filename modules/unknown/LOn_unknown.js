/**
 * @module LOn
 * @category unknown
 * @label unknown
 * @position 1264 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (LOn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var LOn = T((e5c, BOn) => {
  var cPs = Kr(),
    nXt = class extends cPs {
      get tag() {
        return "customFilter";
      }
      render(e, r) {
        e.leafNode(this.tag, { val: r.val, operator: r.operator });
      }
      parseOpen(e) {
        return e.name === this.tag
          ? ((this.model = { val: e.attributes.val, operator: e.attributes.operator }), !0)
          : !1;
      }
      parseText() {}
      parseClose() {
        return !1;
      }
    };
  BOn.exports = nXt;
});