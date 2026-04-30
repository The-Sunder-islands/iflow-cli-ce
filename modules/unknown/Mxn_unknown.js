/**
 * @module Mxn
 * @category unknown
 * @label unknown
 * @position 1097 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Mxn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Mxn = T((Qgc, Lxn) => {
  var Oxn = (d1(), bt(m1)),
    dZe = QWt();
  function Aws(t) {
    return Pxn(Bxn(t));
  }
  function Pxn(t) {
    var e = [];
    return (
      t.map(yws).forEach(function (r) {
        GWt(e, r);
      }),
      e
    );
  }
  function yws(t) {
    return _ws[t.type](t);
  }
  var _ws = { element: Ews, text: Nxn, forceWrite: Nxn };
  function Ews(t) {
    return dZe.elementWithTag(t.tag, Pxn(t.children));
  }
  function Nxn(t) {
    return t;
  }
  function GWt(t, e) {
    var r = t[t.length - 1];
    e.type === "element" && !e.tag.fresh && r && r.type === "element" && e.tag.matchesElement(r.tag)
      ? (e.tag.separator && GWt(r.children, dZe.text(e.tag.separator)),
        e.children.forEach(function (n) {
          GWt(r.children, n);
        }))
      : t.push(e);
  }
  function Bxn(t) {
    return vws(t, function (e) {
      return Cws[e.type](e);
    });
  }
  function vws(t, e) {
    return Oxn.flatten(Oxn.map(t, e), !0);
  }
  var Cws = { element: wws, text: xws, forceWrite: Sws };
  function Sws(t) {
    return [t];
  }
  function wws(t) {
    var e = Bxn(t.children);
    return e.length === 0 && !dZe.isVoidElement(t) ? [] : [dZe.elementWithTag(t.tag, e)];
  }
  function xws(t) {
    return t.value.length === 0 ? [] : [t];
  }
  Lxn.exports = Aws;
});