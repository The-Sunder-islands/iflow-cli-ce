/**
 * @module eZr
 * @category utils/net
 * @label mime
 * @position 451 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (eZr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var eZr = T((jLu, ZXr) => {
  "use strict";
  ZXr.exports = abe;
  var yFo = xvt(),
    _Fo = Tvt(),
    zxt = _Fo("fs");
  function abe(t, e, r) {
    return (
      typeof e == "function" ? ((r = e), (e = {})) : e || (e = {}),
      r
        ? !e.xhr && zxt && zxt.readFile
          ? zxt.readFile(t, function (o, s) {
              return o && typeof XMLHttpRequest < "u"
                ? abe.xhr(t, e, r)
                : o
                  ? r(o)
                  : r(null, e.binary ? s : s.toString("utf8"));
            })
          : abe.xhr(t, e, r)
        : yFo(abe, this, t, e)
    );
  }
  abe.xhr = function (e, r, n) {
    var o = new XMLHttpRequest();
    ((o.onreadystatechange = function () {
      if (o.readyState === 4) {
        if (o.status !== 0 && o.status !== 200) return n(Error("status " + o.status));
        if (r.binary) {
          var a = o.response;
          if (!a) {
            a = [];
            for (var u = 0; u < o.responseText.length; ++u) a.push(o.responseText.charCodeAt(u) & 255);
          }
          return n(null, typeof Uint8Array < "u" ? new Uint8Array(a) : a);
        }
        return n(null, o.responseText);
      }
    }),
      r.binary &&
        ("overrideMimeType" in o && o.overrideMimeType("text/plain; charset=x-user-defined"),
        (o.responseType = "arraybuffer")),
      o.open("GET", e),
      o.send());
  };
});