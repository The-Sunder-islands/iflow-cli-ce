/**
 * @module qJt
 * @category unknown
 * @label unknown
 * @position 1250 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (qJt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var qJt = T(($2c, uOn) => {
  var RNs = Kr(),
    Oet = aet(),
    GJt = class extends RNs {
      constructor(e) {
        (super(),
          (this.tag = e.tag),
          (this.map = {
            "xdr:col": new Oet({ tag: "xdr:col", zero: !0 }),
            "xdr:colOff": new Oet({ tag: "xdr:colOff", zero: !0 }),
            "xdr:row": new Oet({ tag: "xdr:row", zero: !0 }),
            "xdr:rowOff": new Oet({ tag: "xdr:rowOff", zero: !0 }),
          }));
      }
      render(e, r) {
        (e.openNode(this.tag),
          this.map["xdr:col"].render(e, r.nativeCol),
          this.map["xdr:colOff"].render(e, r.nativeColOff),
          this.map["xdr:row"].render(e, r.nativeRow),
          this.map["xdr:rowOff"].render(e, r.nativeRowOff),
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
      parseText(e) {
        this.parser && this.parser.parseText(e);
      }
      parseClose(e) {
        if (this.parser) return (this.parser.parseClose(e) || (this.parser = void 0), !0);
        switch (e) {
          case this.tag:
            return (
              (this.model = {
                nativeCol: this.map["xdr:col"].model,
                nativeColOff: this.map["xdr:colOff"].model,
                nativeRow: this.map["xdr:row"].model,
                nativeRowOff: this.map["xdr:rowOff"].model,
              }),
              !1
            );
          default:
            return !0;
        }
      }
    };
  uOn.exports = GJt;
});