/**
 * @module cXt
 * @category utils/oop
 * @label oop
 * @position 1271 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (cXt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var cXt = T((a5c, KOn) => {
  var SPs = g_e(),
    wPs = eA(),
    xPs = Kr(),
    TPs = (KOn.exports = function (t) {
      this.model = t;
    });
  wPs.inherits(TPs, xPs, {
    get tag() {
      return "r";
    },
    get richTextXform() {
      return (this._richTextXform || (this._richTextXform = new SPs()), this._richTextXform);
    },
    render(t, e) {
      ((e = e || this.model),
        t.openNode("comment", { ref: e.ref, authorId: 0 }),
        t.openNode("text"),
        e &&
          e.note &&
          e.note.texts &&
          e.note.texts.forEach((r) => {
            this.richTextXform.render(t, r);
          }),
        t.closeNode(),
        t.closeNode());
    },
    parseOpen(t) {
      if (this.parser) return (this.parser.parseOpen(t), !0);
      switch (t.name) {
        case "comment":
          return ((this.model = { type: "note", note: { texts: [] }, ...t.attributes }), !0);
        case "r":
          return ((this.parser = this.richTextXform), this.parser.parseOpen(t), !0);
        default:
          return !1;
      }
    },
    parseText(t) {
      this.parser && this.parser.parseText(t);
    },
    parseClose(t) {
      switch (t) {
        case "comment":
          return !1;
        case "r":
          return (this.model.note.texts.push(this.parser.model), (this.parser = void 0), !0);
        default:
          return (this.parser && this.parser.parseClose(t), !0);
      }
    },
  });
});