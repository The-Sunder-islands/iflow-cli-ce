/**
 * @module axn
 * @category utils/xml
 * @label xml
 * @position 1088 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (axn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var axn = T((sZe) => {
  var oZe = (d1(), bt(m1));
  sZe.readNumberingXml = wSs;
  sZe.Numbering = LWt;
  sZe.defaultNumbering = new LWt({}, {});
  function LWt(t, e, r) {
    var n = oZe.flatten(
        oZe.values(e).map(function (u) {
          return oZe.values(u.levels);
        }),
      ),
      o = oZe.indexBy(
        n.filter(function (u) {
          return u.paragraphStyleId != null;
        }),
        "paragraphStyleId",
      );
    function s(u, c) {
      var m = t[u];
      if (m) {
        var d = e[m.abstractNumId];
        if (d) {
          if (d.numStyleLink == null) return e[m.abstractNumId].levels[c];
          var f = r.findNumberingStyleById(d.numStyleLink);
          return s(f.numId, c);
        } else return null;
      } else return null;
    }
    function a(u) {
      return o[u] || null;
    }
    return { findLevel: s, findLevelByParagraphStyleId: a };
  }
  function wSs(t, e) {
    if (!e || !e.styles) throw new Error("styles is missing");
    var r = xSs(t),
      n = DSs(t, r);
    return new LWt(n, r, e.styles);
  }
  function xSs(t) {
    var e = {};
    return (
      t.getElementsByTagName("w:abstractNum").forEach(function (r) {
        var n = r.attributes["w:abstractNumId"];
        e[n] = TSs(r);
      }),
      e
    );
  }
  function TSs(t) {
    var e = {},
      r = null;
    (t.getElementsByTagName("w:lvl").forEach(function (o) {
      var s = o.attributes["w:ilvl"],
        a = o.firstOrEmpty("w:numFmt").attributes["w:val"],
        u = a !== "bullet",
        c = o.firstOrEmpty("w:pStyle").attributes["w:val"];
      s === void 0
        ? (r = { isOrdered: u, level: "0", paragraphStyleId: c })
        : (e[s] = { isOrdered: u, level: s, paragraphStyleId: c });
    }),
      r !== null && e[r.level] === void 0 && (e[r.level] = r));
    var n = t.firstOrEmpty("w:numStyleLink").attributes["w:val"];
    return { levels: e, numStyleLink: n };
  }
  function DSs(t) {
    var e = {};
    return (
      t.getElementsByTagName("w:num").forEach(function (r) {
        var n = r.attributes["w:numId"],
          o = r.first("w:abstractNumId").attributes["w:val"];
        e[n] = { abstractNumId: o };
      }),
      e
    );
  }
});