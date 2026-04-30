/**
 * @module nxn
 * @category utils/xml
 * @label xml
 * @position 1085 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (nxn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var nxn = T((rxn) => {
  rxn.DocumentXmlReader = ESs;
  var ySs = XM(),
    _Ss = jT().Result;
  function ESs(t) {
    var e = t.bodyReader;
    function r(n) {
      var o = n.first("w:body");
      if (o == null) throw new Error("Could not find the body element: are you sure this is a docx file?");
      var s = e.readXmlElements(o.children).map(function (a) {
        return new ySs.Document(a, { notes: t.notes, comments: t.comments });
      });
      return new _Ss(s.value, s.messages);
    }
    return { convertXmlToDocument: r };
  }
});