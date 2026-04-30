/**
 * @module oTn
 * @category unknown
 * @label unknown
 * @position 1105 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (oTn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var oTn = T((iTn) => {
  var rxs = XM();
  function nTn(t) {
    if (t.type === "text") return t.value;
    if (t.type === rxs.types.tab) return "	";
    var e =
      t.type === "paragraph"
        ? `

`
        : "";
    return (t.children || []).map(nTn).join("") + e;
  }
  iTn.convertElementToRawText = nTn;
});