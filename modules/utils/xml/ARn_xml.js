/**
 * @module ARn
 * @category utils/xml
 * @label xml
 * @position 1197 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ARn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ARn = T((UAc, bRn) => {
  var JRs = Kr(),
    gKt = class extends JRs {
      render(e, r) {
        (e.openNode("TitlesOfParts"),
          e.openNode("vt:vector", { size: r.length, baseType: "lpstr" }),
          r.forEach((n) => {
            e.leafNode("vt:lpstr", void 0, n.name);
          }),
          e.closeNode(),
          e.closeNode());
      }
      parseOpen(e) {
        return e.name === "TitlesOfParts";
      }
      parseText() {}
      parseClose(e) {
        return e !== "TitlesOfParts";
      }
    };
  bRn.exports = gKt;
});