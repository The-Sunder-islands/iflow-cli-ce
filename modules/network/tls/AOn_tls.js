/**
 * @module AOn
 * @category network/tls
 * @label tls
 * @position 1255 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (AOn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var AOn = T((H2c, bOn) => {
  var LNs = Kr(),
    MNs = pOn(),
    FNs = gOn(),
    YJt = class extends LNs {
      constructor() {
        (super(), (this.map = { "a:hlinkClick": new MNs(), "a:extLst": new FNs() }));
      }
      get tag() {
        return "xdr:cNvPr";
      }
      render(e, r) {
        (e.openNode(this.tag, { id: r.index, name: `Picture ${r.index}` }),
          this.map["a:hlinkClick"].render(e, r),
          this.map["a:extLst"].render(e, r),
          e.closeNode());
      }
      parseOpen(e) {
        if (this.parser) return (this.parser.parseOpen(e), !0);
        switch (e.name) {
          case this.tag:
            this.reset();
            break;
          default:
            ((this.parser = this.map[e.name]), this.parser && this.parser.parseOpen(e));
            break;
        }
        return !0;
      }
      parseText() {}
      parseClose(e) {
        if (this.parser) return (this.parser.parseClose(e) || (this.parser = void 0), !0);
        switch (e) {
          case this.tag:
            return ((this.model = this.map["a:hlinkClick"].model), !1);
          default:
            return !0;
        }
      }
    };
  bOn.exports = YJt;
});