/**
 * @module aRn
 * @category unknown
 * @label unknown
 * @position 1190 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (aRn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var aRn = T((OAc, sRn) => {
  var PRs = _et(),
    BRs = g_e(),
    LRs = Kr(),
    cKt = class extends LRs {
      constructor() {
        (super(), (this.map = { r: new BRs(), t: new PRs() }));
      }
      get tag() {
        return "rPh";
      }
      render(e, r) {
        if ((e.openNode(this.tag, { sb: r.sb || 0, eb: r.eb || 0 }), r && r.hasOwnProperty("richText") && r.richText)) {
          let { r: n } = this.map;
          r.richText.forEach((o) => {
            n.render(e, o);
          });
        } else r && this.map.t.render(e, r.text);
        e.closeNode();
      }
      parseOpen(e) {
        let { name: r } = e;
        return this.parser
          ? (this.parser.parseOpen(e), !0)
          : r === this.tag
            ? ((this.model = { sb: parseInt(e.attributes.sb, 10), eb: parseInt(e.attributes.eb, 10) }), !0)
            : ((this.parser = this.map[r]), this.parser ? (this.parser.parseOpen(e), !0) : !1);
      }
      parseText(e) {
        this.parser && this.parser.parseText(e);
      }
      parseClose(e) {
        if (this.parser) {
          if (!this.parser.parseClose(e)) {
            switch (e) {
              case "r": {
                let r = this.model.richText;
                (r || (r = this.model.richText = []), r.push(this.parser.model));
                break;
              }
              case "t":
                this.model.text = this.parser.model;
                break;
              default:
                break;
            }
            this.parser = void 0;
          }
          return !0;
        }
        switch (e) {
          case this.tag:
            return !1;
          default:
            return !0;
        }
      }
    };
  sRn.exports = cKt;
});