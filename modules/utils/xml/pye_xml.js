/**
 * @module pye
 * @category utils/xml
 * @label xml
 * @position 1046 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (pye) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var pye = T((Mae) => {
  "use strict";
  function p4s(t, e, r) {
    if ((r === void 0 && (r = Array.prototype), t && typeof r.find == "function")) return r.find.call(t, e);
    for (var n = 0; n < t.length; n++)
      if (Object.prototype.hasOwnProperty.call(t, n)) {
        var o = t[n];
        if (e.call(void 0, o, n, t)) return o;
      }
  }
  function sWt(t, e) {
    return (e === void 0 && (e = Object), e && typeof e.freeze == "function" ? e.freeze(t) : t);
  }
  function h4s(t, e) {
    if (t === null || typeof t != "object") throw new TypeError("target is not an object");
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t;
  }
  var F4n = sWt({
      HTML: "text/html",
      isHTML: function (t) {
        return t === F4n.HTML;
      },
      XML_APPLICATION: "application/xml",
      XML_TEXT: "text/xml",
      XML_XHTML_APPLICATION: "application/xhtml+xml",
      XML_SVG_IMAGE: "image/svg+xml",
    }),
    U4n = sWt({
      HTML: "http://www.w3.org/1999/xhtml",
      isHTML: function (t) {
        return t === U4n.HTML;
      },
      SVG: "http://www.w3.org/2000/svg",
      XML: "http://www.w3.org/XML/1998/namespace",
      XMLNS: "http://www.w3.org/2000/xmlns/",
    });
  Mae.assign = h4s;
  Mae.find = p4s;
  Mae.freeze = sWt;
  Mae.MIME_TYPE = F4n;
  Mae.NAMESPACE = U4n;
});