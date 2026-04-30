/**
 * @module gXt
 * @category unknown
 * @label unknown
 * @position 1278 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (gXt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var gXt = T((p5c, dNn) => {
  var FPs = Kr(),
    UPs = tNn(),
    $Ps = mNn(),
    Let = class t extends FPs {
      constructor() {
        (super(), (this.map = { "v:textbox": new UPs(), "x:ClientData": new $Ps() }));
      }
      get tag() {
        return "v:shape";
      }
      render(e, r, n) {
        (e.openNode("v:shape", t.V_SHAPE_ATTRIBUTES(r, n)),
          e.leafNode("v:fill", { color2: "infoBackground [80]" }),
          e.leafNode("v:shadow", { color: "none [81]", obscured: "t" }),
          e.leafNode("v:path", { "o:connecttype": "none" }),
          this.map["v:textbox"].render(e, r),
          this.map["x:ClientData"].render(e, r),
          e.closeNode());
      }
      parseOpen(e) {
        if (this.parser) return (this.parser.parseOpen(e), !0);
        switch (e.name) {
          case this.tag:
            (this.reset(),
              (this.model = {
                margins: { insetmode: e.attributes["o:insetmode"] },
                anchor: "",
                editAs: "",
                protection: {},
              }));
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
              (this.model.margins.inset = this.map["v:textbox"].model && this.map["v:textbox"].model.inset),
              (this.model.protection = this.map["x:ClientData"].model && this.map["x:ClientData"].model.protection),
              (this.model.anchor = this.map["x:ClientData"].model && this.map["x:ClientData"].model.anchor),
              (this.model.editAs = this.map["x:ClientData"].model && this.map["x:ClientData"].model.editAs),
              !1
            );
          default:
            return !0;
        }
      }
    };
  Let.V_SHAPE_ATTRIBUTES = (t, e) => ({
    id: `_x0000_s${1025 + e}`,
    type: "#_x0000_t202",
    style:
      "position:absolute; margin-left:105.3pt;margin-top:10.5pt;width:97.8pt;height:59.1pt;z-index:1;visibility:hidden",
    fillcolor: "infoBackground [80]",
    strokecolor: "none [81]",
    "o:insetmode": t.note.margins && t.note.margins.insetmode,
  });
  dNn.exports = Let;
});