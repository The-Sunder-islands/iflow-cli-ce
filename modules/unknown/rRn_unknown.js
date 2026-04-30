/**
 * @module rRn
 * @category unknown
 * @label unknown
 * @position 1186 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (rRn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var rRn = T((DAc, tRn) => {
  var xRs = Kr(),
    oKt = class extends xRs {
      constructor(e) {
        (super(),
          (this.tag = e.tag),
          (this.attr = e.attr),
          (this.attrs = e.attrs),
          (this._format =
            e.format ||
            function (r) {
              try {
                return Number.isNaN(r.getTime()) ? "" : r.toISOString();
              } catch {
                return "";
              }
            }),
          (this._parse =
            e.parse ||
            function (r) {
              return new Date(r);
            }));
      }
      render(e, r) {
        r &&
          (e.openNode(this.tag),
          this.attrs && e.addAttributes(this.attrs),
          this.attr ? e.addAttribute(this.attr, this._format(r)) : e.writeText(this._format(r)),
          e.closeNode());
      }
      parseOpen(e) {
        e.name === this.tag && (this.attr ? (this.model = this._parse(e.attributes[this.attr])) : (this.text = []));
      }
      parseText(e) {
        this.attr || this.text.push(e);
      }
      parseClose() {
        return (this.attr || (this.model = this._parse(this.text.join(""))), !1);
      }
    };
  tRn.exports = oKt;
});