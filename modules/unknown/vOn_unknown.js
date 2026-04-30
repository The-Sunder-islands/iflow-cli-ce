/**
 * @module vOn
 * @category unknown
 * @label unknown
 * @position 1257 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (vOn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var vOn = T((W2c, EOn) => {
  var $Ns = Kr(),
    jNs = AOn(),
    QNs = _On(),
    JJt = class extends $Ns {
      constructor() {
        (super(), (this.map = { "xdr:cNvPr": new jNs(), "xdr:cNvPicPr": new QNs() }));
      }
      get tag() {
        return "xdr:nvPicPr";
      }
      render(e, r) {
        (e.openNode(this.tag),
          this.map["xdr:cNvPr"].render(e, r),
          this.map["xdr:cNvPicPr"].render(e, r),
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
            return ((this.model = this.map["xdr:cNvPr"].model), !1);
          default:
            return !0;
        }
      }
    };
  EOn.exports = JJt;
});