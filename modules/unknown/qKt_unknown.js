/**
 * @module qKt
 * @category unknown
 * @label unknown
 * @position 1214 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (qKt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var qKt = T((i2c, ZRn) => {
  var Lks = Kr(),
    Mks = CF(),
    Fks = KRn(),
    Uks = XRn(),
    GKt = class extends Lks {
      constructor() {
        (super(), (this.map = { tabColor: new Mks("tabColor"), pageSetUpPr: new Fks(), outlinePr: new Uks() }));
      }
      get tag() {
        return "sheetPr";
      }
      render(e, r) {
        if (r) {
          (e.addRollback(), e.openNode("sheetPr"));
          let n = !1;
          ((n = this.map.tabColor.render(e, r.tabColor) || n),
            (n = this.map.pageSetUpPr.render(e, r.pageSetup) || n),
            (n = this.map.outlinePr.render(e, r.outlineProperties) || n),
            n ? (e.closeNode(), e.commit()) : e.rollback());
        }
      }
      parseOpen(e) {
        return this.parser
          ? (this.parser.parseOpen(e), !0)
          : e.name === this.tag
            ? (this.reset(), !0)
            : this.map[e.name]
              ? ((this.parser = this.map[e.name]), this.parser.parseOpen(e), !0)
              : !1;
      }
      parseText(e) {
        return this.parser ? (this.parser.parseText(e), !0) : !1;
      }
      parseClose(e) {
        return this.parser
          ? (this.parser.parseClose(e) || (this.parser = void 0), !0)
          : (this.map.tabColor.model || this.map.pageSetUpPr.model || this.map.outlinePr.model
              ? ((this.model = {}),
                this.map.tabColor.model && (this.model.tabColor = this.map.tabColor.model),
                this.map.pageSetUpPr.model && (this.model.pageSetup = this.map.pageSetUpPr.model),
                this.map.outlinePr.model && (this.model.outlineProperties = this.map.outlinePr.model))
              : (this.model = null),
            !1);
      }
    };
  ZRn.exports = GKt;
});