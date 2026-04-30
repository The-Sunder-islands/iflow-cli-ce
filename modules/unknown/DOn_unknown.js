/**
 * @module DOn
 * @category unknown
 * @label unknown
 * @position 1260 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (DOn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var DOn = T((K2c, TOn) => {
  var zNs = QJt(),
    YNs = lue(),
    xOn = qJt(),
    KNs = ZJt(),
    eXt = class extends zNs {
      constructor() {
        (super(),
          (this.map = {
            "xdr:from": new xOn({ tag: "xdr:from" }),
            "xdr:to": new xOn({ tag: "xdr:to" }),
            "xdr:pic": new KNs(),
            "xdr:clientData": new YNs({ tag: "xdr:clientData" }),
          }));
      }
      get tag() {
        return "xdr:twoCellAnchor";
      }
      prepare(e, r) {
        this.map["xdr:pic"].prepare(e.picture, r);
      }
      render(e, r) {
        (e.openNode(this.tag, { editAs: r.range.editAs || "oneCell" }),
          this.map["xdr:from"].render(e, r.range.tl),
          this.map["xdr:to"].render(e, r.range.br),
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
              (this.model.range.br = this.map["xdr:to"].model),
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
  TOn.exports = eXt;
});