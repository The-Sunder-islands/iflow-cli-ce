/**
 * @module Hye
 * @category unknown
 * @label unknown
 * @position 1098 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Hye) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Hye = T((fF) => {
  var Kae = QWt();
  fF.freshElement = Kae.freshElement;
  fF.nonFreshElement = Kae.nonFreshElement;
  fF.elementWithTag = Kae.elementWithTag;
  fF.text = Kae.text;
  fF.forceWrite = Kae.forceWrite;
  fF.simplify = Mxn();
  function Fxn(t, e) {
    e.forEach(function (r) {
      Tws(t, r);
    });
  }
  function Tws(t, e) {
    Dws[e.type](t, e);
  }
  var Dws = { element: Iws, text: Rws, forceWrite: function () {} };
  function Iws(t, e) {
    Kae.isVoidElement(e)
      ? t.selfClosing(e.tag.tagName, e.tag.attributes)
      : (t.open(e.tag.tagName, e.tag.attributes), Fxn(t, e.children), t.close(e.tag.tagName));
  }
  function Rws(t, e) {
    t.text(e.value);
  }
  fF.write = Fxn;
});