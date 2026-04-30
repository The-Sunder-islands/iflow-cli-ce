/**
 * @module WOn
 * @category unknown
 * @label unknown
 * @position 1269 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (WOn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var WOn = T((o5c, VOn) => {
  var bPs = Kr(),
    uXt = class extends bPs {
      get tag() {
        return "tableStyleInfo";
      }
      render(e, r) {
        return (
          e.leafNode(this.tag, {
            name: r.theme ? r.theme : void 0,
            showFirstColumn: r.showFirstColumn ? "1" : "0",
            showLastColumn: r.showLastColumn ? "1" : "0",
            showRowStripes: r.showRowStripes ? "1" : "0",
            showColumnStripes: r.showColumnStripes ? "1" : "0",
          }),
          !0
        );
      }
      parseOpen(e) {
        if (e.name === this.tag) {
          let { attributes: r } = e;
          return (
            (this.model = {
              theme: r.name ? r.name : null,
              showFirstColumn: r.showFirstColumn === "1",
              showLastColumn: r.showLastColumn === "1",
              showRowStripes: r.showRowStripes === "1",
              showColumnStripes: r.showColumnStripes === "1",
            }),
            !0
          );
        }
        return !1;
      }
      parseText() {}
      parseClose() {
        return !1;
      }
    };
  VOn.exports = uXt;
});