/**
 * @module tWt
 * @category unknown
 * @label unknown
 * @position 1039 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (tWt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var tWt = T((Y3c, S4n) => {
  "use strict";
  var OXe = Nd(),
    C4n = Fk(),
    VCs = JVt(),
    WCs = b4n(),
    zCs = v4n(),
    YCs = ZVt();
  S4n.exports = function (t) {
    var e = OXe.getTypeOf(t);
    return (
      OXe.checkSupport(e),
      e === "string" && !C4n.uint8array
        ? new WCs(t)
        : e === "nodebuffer"
          ? new zCs(t)
          : C4n.uint8array
            ? new YCs(OXe.transformTo("uint8array", t))
            : new VCs(OXe.transformTo("array", t))
    );
  };
});