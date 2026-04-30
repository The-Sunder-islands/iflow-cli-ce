/**
 * @module cxn
 * @category utils/xml
 * @label xml
 * @position 1089 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (cxn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var cxn = T((aZe) => {
  aZe.readStylesXml = ISs;
  aZe.Styles = jye;
  aZe.defaultStyles = new jye({}, {});
  function jye(t, e, r, n) {
    return {
      findParagraphStyleById: function (o) {
        return t[o];
      },
      findCharacterStyleById: function (o) {
        return e[o];
      },
      findTableStyleById: function (o) {
        return r[o];
      },
      findNumberingStyleById: function (o) {
        return n[o];
      },
    };
  }
  jye.EMPTY = new jye({}, {}, {}, {});
  function ISs(t) {
    var e = {},
      r = {},
      n = {},
      o = {},
      s = { paragraph: e, character: r, table: n, numbering: o };
    return (
      t.getElementsByTagName("w:style").forEach(function (a) {
        var u = RSs(a),
          c = s[u.type];
        c && c[u.styleId] === void 0 && (c[u.styleId] = u);
      }),
      new jye(e, r, n, o)
    );
  }
  function RSs(t) {
    var e = t.attributes["w:type"];
    if (e === "numbering") return OSs(e, t);
    var r = uxn(t),
      n = kSs(t);
    return { type: e, styleId: r, name: n };
  }
  function kSs(t) {
    var e = t.first("w:name");
    return e ? e.attributes["w:val"] : null;
  }
  function OSs(t, e) {
    var r = uxn(e),
      n = e.firstOrEmpty("w:pPr").firstOrEmpty("w:numPr").firstOrEmpty("w:numId").attributes["w:val"];
    return { type: t, numId: n, styleId: r };
  }
  function uxn(t) {
    return t.attributes["w:styleId"];
  }
});