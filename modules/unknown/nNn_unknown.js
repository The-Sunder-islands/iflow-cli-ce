/**
 * @module nNn
 * @category unknown
 * @label unknown
 * @position 1274 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (nNn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var nNn = T((l5c, rNn) => {
  var NPs = Kr(),
    mXt = class extends NPs {
      get tag() {
        return "x:Anchor";
      }
      getAnchorRect(e) {
        let r = Math.floor(e.left),
          n = Math.floor((e.left - r) * 68),
          o = Math.floor(e.top),
          s = Math.floor((e.top - o) * 18),
          a = Math.floor(e.right),
          u = Math.floor((e.right - a) * 68),
          c = Math.floor(e.bottom),
          m = Math.floor((e.bottom - c) * 18);
        return [r, n, o, s, a, u, c, m];
      }
      getDefaultRect(e) {
        let r = e.col,
          n = 6,
          o = Math.max(e.row - 2, 0),
          s = 14,
          a = r + 2,
          u = 2,
          c = o + 4;
        return [r, n, o, s, a, u, c, 16];
      }
      render(e, r) {
        let n = r.anchor ? this.getAnchorRect(r.anchor) : this.getDefaultRect(r.refAddress);
        e.leafNode("x:Anchor", null, n.join(", "));
      }
      parseOpen(e) {
        switch (e.name) {
          case this.tag:
            return ((this.text = ""), !0);
          default:
            return !1;
        }
      }
      parseText(e) {
        this.text = e;
      }
      parseClose() {
        return !1;
      }
    };
  rNn.exports = mXt;
});