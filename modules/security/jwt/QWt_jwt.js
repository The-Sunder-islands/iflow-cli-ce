/**
 * @module QWt
 * @category security/jwt
 * @label jwt
 * @position 1096 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (QWt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var QWt = T((aW) => {
  var kxn = qye();
  function dws(t, e, r) {
    return jWt(kxn.element(t, e, { fresh: !1 }), r);
  }
  function fws(t, e, r) {
    var n = kxn.element(t, e, { fresh: !0 });
    return jWt(n, r);
  }
  function jWt(t, e) {
    return { type: "element", tag: t, children: e || [] };
  }
  function pws(t) {
    return { type: "text", value: t };
  }
  var hws = { type: "forceWrite" };
  aW.freshElement = fws;
  aW.nonFreshElement = dws;
  aW.elementWithTag = jWt;
  aW.text = pws;
  aW.forceWrite = hws;
  var gws = { br: !0, hr: !0, img: !0, input: !0 };
  function bws(t) {
    return t.children.length === 0 && gws[t.tag.tagName];
  }
  aW.isVoidElement = bws;
});