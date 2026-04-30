/**
 * @module ZJt
 * @category unknown
 * @label unknown
 * @position 1259 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ZJt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ZJt = T((Y2c, wOn) => {
  var GNs = Kr(),
    qNs = lue(),
    HNs = dOn(),
    VNs = vOn(),
    WNs = SOn(),
    XJt = class extends GNs {
      constructor() {
        (super(), (this.map = { "xdr:nvPicPr": new VNs(), "xdr:blipFill": new HNs(), "xdr:spPr": new qNs(WNs) }));
      }
      get tag() {
        return "xdr:pic";
      }
      prepare(e, r) {
        e.index = r.index + 1;
      }
      render(e, r) {
        (e.openNode(this.tag),
          this.map["xdr:nvPicPr"].render(e, r),
          this.map["xdr:blipFill"].render(e, r),
          this.map["xdr:spPr"].render(e, r),
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
        if (this.parser)
          return (this.parser.parseClose(e) || (this.mergeModel(this.parser.model), (this.parser = void 0)), !0);
        switch (e) {
          case this.tag:
            return !1;
          default:
            return !0;
        }
      }
    };
  wOn.exports = XJt;
});