/**
 * @module N7n
 * @category unknown
 * @label unknown
 * @position 1176 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (N7n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var N7n = T((bAc, O7n) => {
  var eRs = Kr(),
    cet = class t extends eRs {
      constructor(e) {
        (super(), (this.model = e));
      }
      get tag() {
        return "u";
      }
      render(e, r) {
        if (((r = r || this.model), r === !0)) e.leafNode("u");
        else {
          let n = t.Attributes[r];
          n && e.leafNode("u", n);
        }
      }
      parseOpen(e) {
        e.name === "u" && (this.model = e.attributes.val || !0);
      }
      parseText() {}
      parseClose() {
        return !1;
      }
    };
  cet.Attributes = {
    single: {},
    double: { val: "double" },
    singleAccounting: { val: "singleAccounting" },
    doubleAccounting: { val: "doubleAccounting" },
  };
  O7n.exports = cet;
});