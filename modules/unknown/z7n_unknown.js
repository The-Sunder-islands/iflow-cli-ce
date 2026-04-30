/**
 * @module z7n
 * @category unknown
 * @label unknown
 * @position 1183 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (z7n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var z7n = T((wAc, W7n) => {
  var dRs = Kr(),
    fRs = XYt(),
    pRs = eKt(),
    tKt = class extends dRs {
      constructor(e) {
        (super(), (this.xfId = !!(e && e.xfId)), (this.map = { alignment: new fRs(), protection: new pRs() }));
      }
      get tag() {
        return "xf";
      }
      render(e, r) {
        (e.openNode("xf", {
          numFmtId: r.numFmtId || 0,
          fontId: r.fontId || 0,
          fillId: r.fillId || 0,
          borderId: r.borderId || 0,
        }),
          this.xfId && e.addAttribute("xfId", r.xfId || 0),
          r.numFmtId && e.addAttribute("applyNumberFormat", "1"),
          r.fontId && e.addAttribute("applyFont", "1"),
          r.fillId && e.addAttribute("applyFill", "1"),
          r.borderId && e.addAttribute("applyBorder", "1"),
          r.alignment && e.addAttribute("applyAlignment", "1"),
          r.protection && e.addAttribute("applyProtection", "1"),
          r.alignment && this.map.alignment.render(e, r.alignment),
          r.protection && this.map.protection.render(e, r.protection),
          e.closeNode());
      }
      parseOpen(e) {
        if (this.parser) return (this.parser.parseOpen(e), !0);
        switch (e.name) {
          case "xf":
            return (
              (this.model = {
                numFmtId: parseInt(e.attributes.numFmtId, 10),
                fontId: parseInt(e.attributes.fontId, 10),
                fillId: parseInt(e.attributes.fillId, 10),
                borderId: parseInt(e.attributes.borderId, 10),
              }),
              this.xfId && (this.model.xfId = parseInt(e.attributes.xfId, 10)),
              !0
            );
          case "alignment":
            return ((this.parser = this.map.alignment), this.parser.parseOpen(e), !0);
          case "protection":
            return ((this.parser = this.map.protection), this.parser.parseOpen(e), !0);
          default:
            return !1;
        }
      }
      parseText(e) {
        this.parser && this.parser.parseText(e);
      }
      parseClose(e) {
        return this.parser
          ? (this.parser.parseClose(e) ||
              (this.map.protection === this.parser
                ? (this.model.protection = this.parser.model)
                : (this.model.alignment = this.parser.model),
              (this.parser = void 0)),
            !0)
          : e !== "xf";
      }
    };
  W7n.exports = tKt;
});