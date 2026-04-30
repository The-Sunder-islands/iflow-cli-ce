/**
 * @module POn
 * @category utils/xml
 * @label xml
 * @position 1263 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (POn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var POn = T((Z2c, NOn) => {
  var nPs = Pd(),
    iPs = Ig(),
    oPs = Kr(),
    sPs = DOn(),
    aPs = OOn();
  function uPs(t) {
    return (typeof t.range == "string" ? nPs.decode(t.range) : t.range).br ? "xdr:twoCellAnchor" : "xdr:oneCellAnchor";
  }
  var Pet = class t extends oPs {
    constructor() {
      (super(), (this.map = { "xdr:twoCellAnchor": new sPs(), "xdr:oneCellAnchor": new aPs() }));
    }
    prepare(e) {
      e.anchors.forEach((r, n) => {
        ((r.anchorType = uPs(r)), this.map[r.anchorType].prepare(r, { index: n }));
      });
    }
    get tag() {
      return "xdr:wsDr";
    }
    render(e, r) {
      (e.openXml(iPs.StdDocAttributes),
        e.openNode(this.tag, t.DRAWING_ATTRIBUTES),
        r.anchors.forEach((n) => {
          this.map[n.anchorType].render(e, n);
        }),
        e.closeNode());
    }
    parseOpen(e) {
      if (this.parser) return (this.parser.parseOpen(e), !0);
      switch (e.name) {
        case this.tag:
          (this.reset(), (this.model = { anchors: [] }));
          break;
        default:
          ((this.parser = this.map[e.name]), this.parser && this.parser.parseOpen(e));
          break;
      }
      return !0;
    }
    parseText(e) {
      this.parser && this.parser.parseText(e);
    }
    parseClose(e) {
      if (this.parser)
        return (this.parser.parseClose(e) || (this.model.anchors.push(this.parser.model), (this.parser = void 0)), !0);
      switch (e) {
        case this.tag:
          return !1;
        default:
          return !0;
      }
    }
    reconcile(e, r) {
      e.anchors.forEach((n) => {
        n.br ? this.map["xdr:twoCellAnchor"].reconcile(n, r) : this.map["xdr:oneCellAnchor"].reconcile(n, r);
      });
    }
  };
  Pet.DRAWING_ATTRIBUTES = {
    "xmlns:xdr": "http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing",
    "xmlns:a": "http://schemas.openxmlformats.org/drawingml/2006/main",
  };
  NOn.exports = Pet;
});