/**
 * @module fxn
 * @category utils/xml
 * @label xml
 * @position 1091 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (fxn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var fxn = T((dxn) => {
  var BSs = XM(),
    LSs = jT().Result;
  function MSs(t) {
    function e(n) {
      return LSs.combine(n.getElementsByTagName("w:comment").map(r));
    }
    function r(n) {
      var o = n.attributes["w:id"];
      function s(a) {
        return (n.attributes[a] || "").trim() || null;
      }
      return t.readXmlElements(n.children).map(function (a) {
        return BSs.comment({ commentId: o, body: a, authorName: s("w:author"), authorInitials: s("w:initials") });
      });
    }
    return e;
  }
  dxn.createCommentsReader = MSs;
});