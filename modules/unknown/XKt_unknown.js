/**
 * @module XKt
 * @category unknown
 * @label unknown
 * @position 1218 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (XKt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var XKt = T((u2c, nkn) => {
  var Wks = f1(),
    zks = Kr(),
    JKt = class extends zks {
      get tag() {
        return "pageMargins";
      }
      render(e, r) {
        if (r) {
          let n = { left: r.left, right: r.right, top: r.top, bottom: r.bottom, header: r.header, footer: r.footer };
          Wks.some(n, (o) => o !== void 0) && e.leafNode(this.tag, n);
        }
      }
      parseOpen(e) {
        switch (e.name) {
          case this.tag:
            return (
              (this.model = {
                left: parseFloat(e.attributes.left || 0.7),
                right: parseFloat(e.attributes.right || 0.7),
                top: parseFloat(e.attributes.top || 0.75),
                bottom: parseFloat(e.attributes.bottom || 0.75),
                header: parseFloat(e.attributes.header || 0.3),
                footer: parseFloat(e.attributes.footer || 0.3),
              }),
              !0
            );
          default:
            return !1;
        }
      }
      parseText() {}
      parseClose() {
        return !1;
      }
    };
  nkn.exports = JKt;
});