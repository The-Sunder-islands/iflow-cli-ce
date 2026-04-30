/**
 * @module ZOn
 * @category utils/xml
 * @label xml
 * @position 1272 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ZOn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ZOn = T((u5c, XOn) => {
  var DPs = Ig(),
    IPs = eA(),
    RPs = Kr(),
    kPs = cXt(),
    JOn = (XOn.exports = function () {
      this.map = { comment: new kPs() };
    });
  IPs.inherits(
    JOn,
    RPs,
    { COMMENTS_ATTRIBUTES: { xmlns: "http://schemas.openxmlformats.org/spreadsheetml/2006/main" } },
    {
      render(t, e) {
        ((e = e || this.model),
          t.openXml(DPs.StdDocAttributes),
          t.openNode("comments", JOn.COMMENTS_ATTRIBUTES),
          t.openNode("authors"),
          t.leafNode("author", null, "Author"),
          t.closeNode(),
          t.openNode("commentList"),
          e.comments.forEach((r) => {
            this.map.comment.render(t, r);
          }),
          t.closeNode(),
          t.closeNode());
      },
      parseOpen(t) {
        if (this.parser) return (this.parser.parseOpen(t), !0);
        switch (t.name) {
          case "commentList":
            return ((this.model = { comments: [] }), !0);
          case "comment":
            return ((this.parser = this.map.comment), this.parser.parseOpen(t), !0);
          default:
            return !1;
        }
      },
      parseText(t) {
        this.parser && this.parser.parseText(t);
      },
      parseClose(t) {
        switch (t) {
          case "commentList":
            return !1;
          case "comment":
            return (this.model.comments.push(this.parser.model), (this.parser = void 0), !0);
          default:
            return (this.parser && this.parser.parseClose(t), !0);
        }
      },
    },
  );
});