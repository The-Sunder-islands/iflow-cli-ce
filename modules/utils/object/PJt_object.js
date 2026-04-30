/**
 * @module PJt
 * @category utils/object
 * @label object
 * @position 1243 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (PJt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var PJt = T((N2c, Ykn) => {
  var { v4: Wkn } = (HOt(), bt(n0n)),
    qOs = Kr(),
    HOs = W8(),
    zkn = jkn(),
    VOs = Vkn(),
    WOs = { "3Triangles": !0, "3Stars": !0, "5Boxes": !0 },
    NJt = class t extends HOs {
      constructor() {
        (super(),
          (this.map = {
            "x14:dataBar": (this.databarXform = new zkn()),
            "x14:iconSet": (this.iconSetXform = new VOs()),
          }));
      }
      get tag() {
        return "x14:cfRule";
      }
      static isExt(e) {
        return e.type === "dataBar" ? zkn.isExt(e) : !!(e.type === "iconSet" && (e.custom || WOs[e.iconSet]));
      }
      prepare(e) {
        t.isExt(e) && (e.x14Id = `{${Wkn()}}`.toUpperCase());
      }
      render(e, r) {
        if (t.isExt(r))
          switch (r.type) {
            case "dataBar":
              this.renderDataBar(e, r);
              break;
            case "iconSet":
              this.renderIconSet(e, r);
              break;
          }
      }
      renderDataBar(e, r) {
        (e.openNode(this.tag, { type: "dataBar", id: r.x14Id }), this.databarXform.render(e, r), e.closeNode());
      }
      renderIconSet(e, r) {
        (e.openNode(this.tag, { type: "iconSet", priority: r.priority, id: r.x14Id || `{${Wkn()}}` }),
          this.iconSetXform.render(e, r),
          e.closeNode());
      }
      createNewModel({ attributes: e }) {
        return { type: e.type, x14Id: e.id, priority: qOs.toIntValue(e.priority) };
      }
      onParserClose(e, r) {
        Object.assign(this.model, r.model);
      }
    };
  Ykn.exports = NJt;
});