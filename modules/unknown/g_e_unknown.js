/**
 * @module g_e
 * @category unknown
 * @label unknown
 * @position 1189 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (g_e) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var g_e = T((kAc, oRn) => {
  var kRs = _et(),
    ORs = det(),
    NRs = Kr(),
    Eet = class t extends NRs {
      constructor(e) {
        (super(), (this.model = e));
      }
      get tag() {
        return "r";
      }
      get textXform() {
        return this._textXform || (this._textXform = new kRs());
      }
      get fontXform() {
        return this._fontXform || (this._fontXform = new ORs(t.FONT_OPTIONS));
      }
      render(e, r) {
        ((r = r || this.model),
          e.openNode("r"),
          r.font && this.fontXform.render(e, r.font),
          this.textXform.render(e, r.text),
          e.closeNode());
      }
      parseOpen(e) {
        if (this.parser) return (this.parser.parseOpen(e), !0);
        switch (e.name) {
          case "r":
            return ((this.model = {}), !0);
          case "t":
            return ((this.parser = this.textXform), this.parser.parseOpen(e), !0);
          case "rPr":
            return ((this.parser = this.fontXform), this.parser.parseOpen(e), !0);
          default:
            return !1;
        }
      }
      parseText(e) {
        this.parser && this.parser.parseText(e);
      }
      parseClose(e) {
        switch (e) {
          case "r":
            return !1;
          case "t":
            return ((this.model.text = this.parser.model), (this.parser = void 0), !0);
          case "rPr":
            return ((this.model.font = this.parser.model), (this.parser = void 0), !0);
          default:
            return (this.parser && this.parser.parseClose(e), !0);
        }
      }
    };
  Eet.FONT_OPTIONS = { tagName: "rPr", fontNameTag: "rFont" };
  oRn.exports = Eet;
});