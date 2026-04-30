/**
 * @module cRn
 * @category unknown
 * @label unknown
 * @position 1191 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (cRn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var cRn = T((NAc, uRn) => {
  var MRs = _et(),
    FRs = g_e(),
    URs = aRn(),
    $Rs = Kr(),
    lKt = class extends $Rs {
      constructor(e) {
        (super(), (this.model = e), (this.map = { r: new FRs(), t: new MRs(), rPh: new URs() }));
      }
      get tag() {
        return "si";
      }
      render(e, r) {
        (e.openNode(this.tag),
          r && r.hasOwnProperty("richText") && r.richText
            ? r.richText.length
              ? r.richText.forEach((n) => {
                  this.map.r.render(e, n);
                })
              : this.map.t.render(e, "")
            : r != null && this.map.t.render(e, r),
          e.closeNode());
      }
      parseOpen(e) {
        let { name: r } = e;
        return this.parser
          ? (this.parser.parseOpen(e), !0)
          : r === this.tag
            ? ((this.model = {}), !0)
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
                this.model = this.parser.model;
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
  uRn.exports = lKt;
});