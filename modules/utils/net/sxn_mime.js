/**
 * @module sxn
 * @category utils/net
 * @label mime
 * @position 1087 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (sxn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var sxn = T((BWt) => {
  BWt.readContentTypesFromXml = SSs;
  var CSs = { png: "png", gif: "gif", jpeg: "jpeg", jpg: "jpeg", tif: "tiff", tiff: "tiff", bmp: "bmp" };
  BWt.defaultContentTypes = oxn({}, {});
  function SSs(t) {
    var e = {},
      r = {};
    return (
      t.children.forEach(function (n) {
        if (
          (n.name === "content-types:Default" && (e[n.attributes.Extension] = n.attributes.ContentType),
          n.name === "content-types:Override")
        ) {
          var o = n.attributes.PartName;
          (o.charAt(0) === "/" && (o = o.substring(1)), (r[o] = n.attributes.ContentType));
        }
      }),
      oxn(r, e)
    );
  }
  function oxn(t, e) {
    return {
      findContentType: function (r) {
        var n = t[r];
        if (n) return n;
        var o = r.split("."),
          s = o[o.length - 1];
        if (e.hasOwnProperty(s)) return e[s];
        var a = CSs[s.toLowerCase()];
        return a ? "image/" + a : null;
      },
    };
  }
});