/**
 * @module mxn
 * @category utils/xml
 * @label xml
 * @position 1090 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (mxn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var mxn = T((Qye) => {
  var NSs = XM(),
    PSs = jT().Result;
  Qye.createFootnotesReader = lxn.bind(Qye, "footnote");
  Qye.createEndnotesReader = lxn.bind(Qye, "endnote");
  function lxn(t, e) {
    function r(s) {
      return PSs.combine(
        s
          .getElementsByTagName("w:" + t)
          .filter(n)
          .map(o),
      );
    }
    function n(s) {
      var a = s.attributes["w:type"];
      return a !== "continuationSeparator" && a !== "separator";
    }
    function o(s) {
      var a = s.attributes["w:id"];
      return e.readXmlElements(s.children).map(function (u) {
        return NSs.Note({ noteType: t, noteId: a, body: u });
      });
    }
    return r;
  }
});