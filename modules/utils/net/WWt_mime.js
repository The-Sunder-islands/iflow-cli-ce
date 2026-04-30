/**
 * @module WWt
 * @category utils/net
 * @label mime
 * @position 1100 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (WWt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var WWt = T((Vye) => {
  var Nws = (d1(), bt(m1)),
    Pws = Pk(),
    Bws = Hye();
  Vye.imgElement = $xn;
  function $xn(t) {
    return function (e, r) {
      return Pws.when(t(e)).then(function (n) {
        var o = {};
        return (e.altText && (o.alt = e.altText), Nws.extend(o, n), [Bws.freshElement("img", o)]);
      });
    };
  }
  Vye.inline = Vye.imgElement;
  Vye.dataUri = $xn(function (t) {
    return t.readAsBase64String().then(function (e) {
      return { src: "data:" + t.contentType + ";base64," + e };
    });
  });
});