/**
 * @module qkn
 * @category unknown
 * @label unknown
 * @position 1241 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (qkn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var qkn = T((k2c, Gkn) => {
  var Qkn = Kr(),
    kJt = class extends Qkn {
      get tag() {
        return "x14:cfIcon";
      }
      render(e, r) {
        e.leafNode(this.tag, { iconSet: r.iconSet, iconId: r.iconId });
      }
      parseOpen({ attributes: e }) {
        this.model = { iconSet: e.iconSet, iconId: Qkn.toIntValue(e.iconId) };
      }
      parseClose(e) {
        return e !== this.tag;
      }
    };
  Gkn.exports = kJt;
});