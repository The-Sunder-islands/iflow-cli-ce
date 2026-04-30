/**
 * @module skn
 * @category unknown
 * @label unknown
 * @position 1220 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (skn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var skn = T((l2c, okn) => {
  var tOs = f1(),
    rOs = Kr();
  function Det(t) {
    return t ? "1" : void 0;
  }
  var tJt = class extends rOs {
    get tag() {
      return "printOptions";
    }
    render(e, r) {
      if (r) {
        let n = {
          headings: Det(r.showRowColHeaders),
          gridLines: Det(r.showGridLines),
          horizontalCentered: Det(r.horizontalCentered),
          verticalCentered: Det(r.verticalCentered),
        };
        tOs.some(n, (o) => o !== void 0) && e.leafNode(this.tag, n);
      }
    }
    parseOpen(e) {
      switch (e.name) {
        case this.tag:
          return (
            (this.model = {
              showRowColHeaders: e.attributes.headings === "1",
              showGridLines: e.attributes.gridLines === "1",
              horizontalCentered: e.attributes.horizontalCentered === "1",
              verticalCentered: e.attributes.verticalCentered === "1",
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
  okn.exports = tJt;
});