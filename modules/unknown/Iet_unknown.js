/**
 * @module Iet
 * @category unknown
 * @label unknown
 * @position 1229 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Iet) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Iet = T((y2c, ykn) => {
  var Akn = Kr(),
    pJt = class extends Akn {
      get tag() {
        return "cfvo";
      }
      render(e, r) {
        e.leafNode(this.tag, { type: r.type, val: r.value });
      }
      parseOpen(e) {
        this.model = { type: e.attributes.type, value: Akn.toFloatValue(e.attributes.val) };
      }
      parseClose(e) {
        return e !== this.tag;
      }
    };
  ykn.exports = pJt;
});