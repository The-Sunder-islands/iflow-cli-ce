/**
 * @module CF
 * @category unknown
 * @label unknown
 * @position 1172 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (CF) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var CF = T((fAc, T7n) => {
  var K7s = Kr(),
    UYt = class extends K7s {
      constructor(e) {
        (super(), (this.name = e || "color"));
      }
      get tag() {
        return this.name;
      }
      render(e, r) {
        return r
          ? (e.openNode(this.name),
            r.argb
              ? e.addAttribute("rgb", r.argb)
              : r.theme !== void 0
                ? (e.addAttribute("theme", r.theme), r.tint !== void 0 && e.addAttribute("tint", r.tint))
                : r.indexed !== void 0
                  ? e.addAttribute("indexed", r.indexed)
                  : e.addAttribute("auto", "1"),
            e.closeNode(),
            !0)
          : !1;
      }
      parseOpen(e) {
        return e.name === this.name
          ? (e.attributes.rgb
              ? (this.model = { argb: e.attributes.rgb })
              : e.attributes.theme
                ? ((this.model = { theme: parseInt(e.attributes.theme, 10) }),
                  e.attributes.tint && (this.model.tint = parseFloat(e.attributes.tint)))
                : e.attributes.indexed
                  ? (this.model = { indexed: parseInt(e.attributes.indexed, 10) })
                  : (this.model = void 0),
            !0)
          : !1;
      }
      parseText() {}
      parseClose() {
        return !1;
      }
    };
  T7n.exports = UYt;
});