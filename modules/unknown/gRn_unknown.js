/**
 * @module gRn
 * @category unknown
 * @label unknown
 * @position 1196 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (gRn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var gRn = T((FAc, hRn) => {
  var KRs = Kr(),
    hKt = class extends KRs {
      render(e, r) {
        (e.openNode("HeadingPairs"),
          e.openNode("vt:vector", { size: 2, baseType: "variant" }),
          e.openNode("vt:variant"),
          e.leafNode("vt:lpstr", void 0, "Worksheets"),
          e.closeNode(),
          e.openNode("vt:variant"),
          e.leafNode("vt:i4", void 0, r.length),
          e.closeNode(),
          e.closeNode(),
          e.closeNode());
      }
      parseOpen(e) {
        return e.name === "HeadingPairs";
      }
      parseText() {}
      parseClose(e) {
        return e !== "HeadingPairs";
      }
    };
  hRn.exports = hKt;
});