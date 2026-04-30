/**
 * @module tNn
 * @category unknown
 * @label unknown
 * @position 1273 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (tNn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var tNn = T((c5c, eNn) => {
  var OPs = Kr(),
    lXt = class extends OPs {
      get tag() {
        return "v:textbox";
      }
      conversionUnit(e, r, n) {
        return `${parseFloat(e) * r.toFixed(2)}${n}`;
      }
      reverseConversionUnit(e) {
        return (e || "")
          .split(",")
          .map((r) => Number(parseFloat(this.conversionUnit(parseFloat(r), 0.1, "")).toFixed(2)));
      }
      render(e, r) {
        let n = { style: "mso-direction-alt:auto" };
        if (r && r.note) {
          let { inset: o } = r.note && r.note.margins;
          (Array.isArray(o) && (o = o.map((s) => this.conversionUnit(s, 10, "mm")).join(",")), o && (n.inset = o));
        }
        (e.openNode("v:textbox", n), e.leafNode("div", { style: "text-align:left" }), e.closeNode());
      }
      parseOpen(e) {
        switch (e.name) {
          case this.tag:
            return ((this.model = { inset: this.reverseConversionUnit(e.attributes.inset) }), !0);
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
  eNn.exports = lXt;
});