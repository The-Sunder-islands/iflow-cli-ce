/**
 * @module _et
 * @category utils/xml
 * @label xml
 * @position 1188 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (_et) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var _et = T((RAc, iRn) => {
  var RRs = Kr(),
    uKt = class extends RRs {
      get tag() {
        return "t";
      }
      render(e, r) {
        (e.openNode("t"),
          /^\s|\n|\s$/.test(r) && e.addAttribute("xml:space", "preserve"),
          e.writeText(r),
          e.closeNode());
      }
      get model() {
        return this._text.join("").replace(/_x([0-9A-F]{4})_/g, (e, r) => String.fromCharCode(parseInt(r, 16)));
      }
      parseOpen(e) {
        switch (e.name) {
          case "t":
            return ((this._text = []), !0);
          default:
            return !1;
        }
      }
      parseText(e) {
        this._text.push(e);
      }
      parseClose() {
        return !1;
      }
    };
  iRn.exports = uKt;
});