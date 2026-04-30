/**
 * @module uet
 * @category unknown
 * @label unknown
 * @position 1175 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (uet) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var uet = T((gAc, k7n) => {
  var Z7s = Kr(),
    QYt = class extends Z7s {
      constructor(e) {
        (super(), (this.tag = e.tag), (this.attr = e.attr), (this.attrs = e.attrs));
      }
      render(e, r) {
        r !== void 0 &&
          (e.openNode(this.tag),
          this.attrs && e.addAttributes(this.attrs),
          this.attr ? e.addAttribute(this.attr, r) : e.writeText(r),
          e.closeNode());
      }
      parseOpen(e) {
        e.name === this.tag && (this.attr ? (this.model = e.attributes[this.attr]) : (this.text = []));
      }
      parseText(e) {
        this.attr || this.text.push(e);
      }
      parseClose() {
        return (this.attr || (this.model = this.text.join("")), !1);
      }
    };
  k7n.exports = QYt;
});