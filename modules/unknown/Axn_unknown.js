/**
 * @module Axn
 * @category unknown
 * @label unknown
 * @position 1093 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Axn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Axn = T((MWt) => {
  var gxn = Ae("fs"),
    FSs = Ae("url"),
    USs = Ae("os"),
    $Ss = Ae("path").dirname,
    jSs = Ae("path").resolve,
    QSs = J4(),
    Wae = Pk();
  MWt.Files = GSs;
  MWt.uriToPath = bxn;
  function GSs(t) {
    if (((t = t || {}), !t.externalFileAccess))
      return {
        read: function (o) {
          return Wae.reject(new Error("could not read external image '" + o + "', external file access is disabled"));
        },
      };
    var e = t.relativeToFile ? $Ss(t.relativeToFile) : null;
    function r(o, s) {
      return n(o).then(function (a) {
        return qSs(a, s).caught(function (u) {
          var c =
            "could not open external image: '" +
            o +
            "' (document directory: '" +
            e +
            `')
` +
            u.message;
          return Wae.reject(new Error(c));
        });
      });
    }
    function n(o) {
      var s = bxn(o);
      return QSs(s)
        ? Wae.resolve(s)
        : e
          ? Wae.resolve(jSs(e, s))
          : Wae.reject(new Error("could not find external image '" + o + "', path of input document is unknown"));
    }
    return { read: r };
  }
  var qSs = Wae.promisify(gxn.readFile.bind(gxn));
  function bxn(t, e) {
    e || (e = USs.platform());
    var r = FSs.parse(t);
    if (HSs(r) || VSs(r)) {
      var n = decodeURIComponent(r.path);
      return e === "win32" && /^\/[a-z]:/i.test(n) ? n.slice(1) : n;
    } else throw new Error("Could not convert URI to path: " + t);
  }
  function HSs(t) {
    return t.protocol === "file:" && (!t.host || t.host === "localhost");
  }
  function VSs(t) {
    return !t.protocol && !t.host;
  }
});