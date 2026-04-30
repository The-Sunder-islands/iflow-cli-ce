/**
 * @module Fwn
 * @category utils/xml
 * @label xml
 * @position 1079 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Fwn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Fwn = T((wWt) => {
  var K4s = (d1(), bt(m1)),
    J4s = Pk(),
    X4s = ZXe();
  wWt.read = Lwn;
  wWt.readXmlFromZipFile = eSs;
  var Z4s = {
    "http://schemas.openxmlformats.org/wordprocessingml/2006/main": "w",
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships": "r",
    "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing": "wp",
    "http://schemas.openxmlformats.org/drawingml/2006/main": "a",
    "http://schemas.openxmlformats.org/drawingml/2006/picture": "pic",
    "http://purl.oclc.org/ooxml/wordprocessingml/main": "w",
    "http://purl.oclc.org/ooxml/officeDocument/relationships": "r",
    "http://purl.oclc.org/ooxml/drawingml/wordprocessingDrawing": "wp",
    "http://purl.oclc.org/ooxml/drawingml/main": "a",
    "http://purl.oclc.org/ooxml/drawingml/picture": "pic",
    "http://schemas.openxmlformats.org/package/2006/content-types": "content-types",
    "http://schemas.openxmlformats.org/package/2006/relationships": "relationships",
    "http://schemas.openxmlformats.org/markup-compatibility/2006": "mc",
    "urn:schemas-microsoft-com:vml": "v",
    "urn:schemas-microsoft-com:office:word": "office-word",
    "http://schemas.microsoft.com/office/word/2010/wordml": "wordml",
  };
  function Lwn(t) {
    return X4s.readString(t, Z4s).then(function (e) {
      return Mwn(e)[0];
    });
  }
  function eSs(t, e) {
    return t.exists(e) ? t.read(e, "utf-8").then(tSs).then(Lwn) : J4s.resolve(null);
  }
  function tSs(t) {
    return t.replace(/^\uFEFF/g, "");
  }
  function Mwn(t) {
    return t.type === "element"
      ? t.name === "mc:AlternateContent"
        ? t.firstOrEmpty("mc:Fallback").children
        : ((t.children = K4s.flatten(t.children.map(Mwn, !0))), [t])
      : [t];
  }
});