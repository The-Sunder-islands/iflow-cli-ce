/**
 * @module OKt
 * @category unknown
 * @label unknown
 * @position 1208 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (OKt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var OKt = T((JAc, QRn) => {
  var RKt = eA(),
    Tks = Kr(),
    kKt = class extends Tks {
      get tag() {
        return "col";
      }
      prepare(e, r) {
        let n = r.styles.addStyleModel(e.style || {});
        n && (e.styleId = n);
      }
      render(e, r) {
        (e.openNode("col"),
          e.addAttribute("min", r.min),
          e.addAttribute("max", r.max),
          r.width && e.addAttribute("width", r.width),
          r.styleId && e.addAttribute("style", r.styleId),
          r.hidden && e.addAttribute("hidden", "1"),
          r.bestFit && e.addAttribute("bestFit", "1"),
          r.outlineLevel && e.addAttribute("outlineLevel", r.outlineLevel),
          r.collapsed && e.addAttribute("collapsed", "1"),
          e.addAttribute("customWidth", "1"),
          e.closeNode());
      }
      parseOpen(e) {
        if (e.name === "col") {
          let r = (this.model = {
            min: parseInt(e.attributes.min || "0", 10),
            max: parseInt(e.attributes.max || "0", 10),
            width: e.attributes.width === void 0 ? void 0 : parseFloat(e.attributes.width || "0"),
          });
          return (
            e.attributes.style && (r.styleId = parseInt(e.attributes.style, 10)),
            RKt.parseBoolean(e.attributes.hidden) && (r.hidden = !0),
            RKt.parseBoolean(e.attributes.bestFit) && (r.bestFit = !0),
            e.attributes.outlineLevel && (r.outlineLevel = parseInt(e.attributes.outlineLevel, 10)),
            RKt.parseBoolean(e.attributes.collapsed) && (r.collapsed = !0),
            !0
          );
        }
        return !1;
      }
      parseText() {}
      parseClose() {
        return !1;
      }
      reconcile(e, r) {
        e.styleId && (e.style = r.styles.getStyleModel(e.styleId));
      }
    };
  QRn.exports = kKt;
});