/**
 * @module aet
 * @category unknown
 * @label unknown
 * @position 1174 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (aet) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var aet = T((hAc, R7n) => {
  var X7s = Kr(),
    jYt = class extends X7s {
      constructor(e) {
        (super(), (this.tag = e.tag), (this.attr = e.attr), (this.attrs = e.attrs), (this.zero = e.zero));
      }
      render(e, r) {
        (r || this.zero) &&
          (e.openNode(this.tag),
          this.attrs && e.addAttributes(this.attrs),
          this.attr ? e.addAttribute(this.attr, r) : e.writeText(r),
          e.closeNode());
      }
      parseOpen(e) {
        return e.name === this.tag
          ? (this.attr ? (this.model = parseInt(e.attributes[this.attr], 10)) : (this.text = []), !0)
          : !1;
      }
      parseText(e) {
        this.attr || this.text.push(e);
      }
      parseClose() {
        return (this.attr || (this.model = parseInt(this.text.join("") || 0, 10)), !1);
      }
    };
  R7n.exports = jYt;
});