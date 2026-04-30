/**
 * @module OOn
 * @category unknown
 * @label unknown
 * @position 1262 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (OOn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var OOn = T((X2c, kOn) => {
  var XNs = QJt(),
    ZNs = lue(),
    ePs = qJt(),
    tPs = ROn(),
    rPs = ZJt(),
    rXt = class extends XNs {
      constructor() {
        (super(),
          (this.map = {
            "xdr:from": new ePs({ tag: "xdr:from" }),
            "xdr:ext": new tPs({ tag: "xdr:ext" }),
            "xdr:pic": new rPs(),
            "xdr:clientData": new ZNs({ tag: "xdr:clientData" }),
          }));
      }
      get tag() {
        return "xdr:oneCellAnchor";
      }
      prepare(e, r) {
        this.map["xdr:pic"].prepare(e.picture, r);
      }
      render(e, r) {
        (e.openNode(this.tag, { editAs: r.range.editAs || "oneCell" }),
          this.map["xdr:from"].render(e, r.range.tl),
          this.map["xdr:ext"].render(e, r.range.ext),
          this.map["xdr:pic"].render(e, r.picture),
          this.map["xdr:clientData"].render(e, {}),
          e.closeNode());
      }
      parseClose(e) {
        if (this.parser) return (this.parser.parseClose(e) || (this.parser = void 0), !0);
        switch (e) {
          case this.tag:
            return (
              (this.model.range.tl = this.map["xdr:from"].model),
              (this.model.range.ext = this.map["xdr:ext"].model),
              (this.model.picture = this.map["xdr:pic"].model),
              !1
            );
          default:
            return !0;
        }
      }
      reconcile(e, r) {
        e.medium = this.reconcilePicture(e.picture, r);
      }
    };
  kOn.exports = rXt;
});