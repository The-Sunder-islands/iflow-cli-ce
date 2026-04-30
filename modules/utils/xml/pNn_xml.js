/**
 * @module pNn
 * @category utils/xml
 * @label xml
 * @position 1279 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (pNn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var pNn = T((h5c, fNn) => {
  var jPs = Ig(),
    QPs = Kr(),
    GPs = gXt(),
    Met = class t extends QPs {
      constructor() {
        (super(), (this.map = { "v:shape": new GPs() }));
      }
      get tag() {
        return "xml";
      }
      render(e, r) {
        (e.openXml(jPs.StdDocAttributes),
          e.openNode(this.tag, t.DRAWING_ATTRIBUTES),
          e.openNode("o:shapelayout", { "v:ext": "edit" }),
          e.leafNode("o:idmap", { "v:ext": "edit", data: 1 }),
          e.closeNode(),
          e.openNode("v:shapetype", {
            id: "_x0000_t202",
            coordsize: "21600,21600",
            "o:spt": 202,
            path: "m,l,21600r21600,l21600,xe",
          }),
          e.leafNode("v:stroke", { joinstyle: "miter" }),
          e.leafNode("v:path", { gradientshapeok: "t", "o:connecttype": "rect" }),
          e.closeNode(),
          r.comments.forEach((n, o) => {
            this.map["v:shape"].render(e, n, o);
          }),
          e.closeNode());
      }
      parseOpen(e) {
        if (this.parser) return (this.parser.parseOpen(e), !0);
        switch (e.name) {
          case this.tag:
            (this.reset(), (this.model = { comments: [] }));
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
          return (
            this.parser.parseClose(e) || (this.model.comments.push(this.parser.model), (this.parser = void 0)),
            !0
          );
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
  Met.DRAWING_ATTRIBUTES = {
    "xmlns:v": "urn:schemas-microsoft-com:vml",
    "xmlns:o": "urn:schemas-microsoft-com:office:office",
    "xmlns:x": "urn:schemas-microsoft-com:office:excel",
  };
  fNn.exports = Met;
});