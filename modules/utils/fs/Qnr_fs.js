/**
 * @module Qnr
 * @category utils/fs
 * @label fs
 * @position 1454 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Qnr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Qnr = T((eyc, Iqn) => {
  var FEe = Ae("path"),
    Tqn = Ae("fs"),
    Dqn = parseInt("0777", 8);
  Iqn.exports = xce.mkdirp = xce.mkdirP = xce;
  function xce(t, e, r, n) {
    typeof e == "function" ? ((r = e), (e = {})) : (!e || typeof e != "object") && (e = { mode: e });
    var o = e.mode,
      s = e.fs || Tqn;
    (o === void 0 && (o = Dqn), n || (n = null));
    var a = r || function () {};
    ((t = FEe.resolve(t)),
      s.mkdir(t, o, function (u) {
        if (!u) return ((n = n || t), a(null, n));
        switch (u.code) {
          case "ENOENT":
            if (FEe.dirname(t) === t) return a(u);
            xce(FEe.dirname(t), e, function (c, m) {
              c ? a(c, m) : xce(t, e, a, m);
            });
            break;
          default:
            s.stat(t, function (c, m) {
              c || !m.isDirectory() ? a(u, n) : a(null, n);
            });
            break;
        }
      }));
  }
  xce.sync = function t(e, r, n) {
    (!r || typeof r != "object") && (r = { mode: r });
    var o = r.mode,
      s = r.fs || Tqn;
    (o === void 0 && (o = Dqn), n || (n = null), (e = FEe.resolve(e)));
    try {
      (s.mkdirSync(e, o), (n = n || e));
    } catch (u) {
      switch (u.code) {
        case "ENOENT":
          ((n = t(FEe.dirname(e), r, n)), t(e, r, n));
          break;
        default:
          var a;
          try {
            a = s.statSync(e);
          } catch {
            throw u;
          }
          if (!a.isDirectory()) throw u;
          break;
      }
    }
    return n;
  };
});