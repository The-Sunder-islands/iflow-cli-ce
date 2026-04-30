/**
 * @module NFi
 * @category unknown
 * @label unknown
 * @position 1851 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (NFi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var NFi = T((eol, K8r) => {
  "use strict";
  var RFi = Ae("fs"),
    Knu = Ae("path").join,
    Jnu = Ae("path").resolve,
    kFi = Ae("path").dirname,
    Y8r = {
      extensions: ["js", "json", "coffee"],
      recurse: !0,
      rename: function (t) {
        return t;
      },
      visit: function (t) {
        return t;
      },
    };
  function Xnu(t, e, r) {
    return (
      new RegExp("\\.(" + r.extensions.join("|") + ")$", "i").test(e) &&
      !(r.include && r.include instanceof RegExp && !r.include.test(t)) &&
      !(r.include && typeof r.include == "function" && !r.include(t, e)) &&
      !(r.exclude && r.exclude instanceof RegExp && r.exclude.test(t)) &&
      !(r.exclude && typeof r.exclude == "function" && r.exclude(t, e))
    );
  }
  function OFi(t, e, r) {
    var n = {};
    (e && !r && typeof e != "string" && ((r = e), (e = null)), (r = r || {}));
    for (var o in Y8r) typeof r[o] > "u" && (r[o] = Y8r[o]);
    return (
      (e = e ? Jnu(kFi(t.filename), e) : kFi(t.filename)),
      RFi.readdirSync(e).forEach(function (s) {
        var a = Knu(e, s),
          u,
          c,
          m;
        RFi.statSync(a).isDirectory() && r.recurse
          ? ((u = OFi(t, a, r)), Object.keys(u).length && (n[r.rename(s, a, s)] = u))
          : a !== t.filename &&
            Xnu(a, s, r) &&
            ((c = s.substring(0, s.lastIndexOf("."))),
            (m = t.require(a)),
            (n[r.rename(c, a, s)] = r.visit(m, a, s) || m));
      }),
      n
    );
  }
  K8r.exports = OFi;
  K8r.exports.defaults = Y8r;
});