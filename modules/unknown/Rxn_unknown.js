/**
 * @module Rxn
 * @category unknown
 * @label unknown
 * @position 1095 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Rxn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Rxn = T(($Wt) => {
  var ows = (d1(), bt(m1)),
    sws = Pk(),
    Gye = ZXe();
  $Wt.writeStyleMap = uws;
  $Wt.readStyleMap = mws;
  var aws = "http://schemas.zwobble.org/mammoth/style-map",
    mZe = "mammoth/style-map",
    Dxn = "/" + mZe;
  function uws(t, e) {
    return (
      t.write(mZe, e),
      cws(t).then(function () {
        return lws(t);
      })
    );
  }
  function cws(t) {
    var e = "word/_rels/document.xml.rels",
      r = "http://schemas.openxmlformats.org/package/2006/relationships",
      n = "{" + r + "}Relationship";
    return t
      .read(e, "utf8")
      .then(Gye.readString)
      .then(function (o) {
        var s = o.children;
        Ixn(s, n, "Id", { Id: "rMammothStyleMap", Type: aws, Target: Dxn });
        var a = { "": r };
        return t.write(e, Gye.writeString(o, a));
      });
  }
  function lws(t) {
    var e = "[Content_Types].xml",
      r = "http://schemas.openxmlformats.org/package/2006/content-types",
      n = "{" + r + "}Override";
    return t
      .read(e, "utf8")
      .then(Gye.readString)
      .then(function (o) {
        var s = o.children;
        Ixn(s, n, "PartName", { PartName: Dxn, ContentType: "text/prs.mammoth.style-map" });
        var a = { "": r };
        return t.write(e, Gye.writeString(o, a));
      });
  }
  function Ixn(t, e, r, n) {
    var o = ows.find(t, function (s) {
      return s.name === e && s.attributes[r] === n[r];
    });
    o ? (o.attributes = n) : t.push(Gye.element(e, n));
  }
  function mws(t) {
    return t.exists(mZe) ? t.read(mZe, "utf8") : sws.resolve(null);
  }
});