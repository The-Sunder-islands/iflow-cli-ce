/**
 * @module rZi
 * @category utils/json
 * @label json
 * @position 1912 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (rZi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var rZi = T((kfe) => {
  "use strict";
  var tZi = Ae("fs"),
    jfu = JXi(),
    DDe = Ae("path"),
    Qfu = eZi(),
    Gfu = (kfe.parse = function (t) {
      return /^\s*{/.test(t) ? JSON.parse(Qfu(t)) : jfu.parse(t);
    }),
    qfu = (kfe.file = function () {
      var t = [].slice.call(arguments).filter(function (o) {
        return o != null;
      });
      for (var e in t) if (typeof t[e] != "string") return;
      var r = DDe.join.apply(null, t),
        n;
      try {
        return tZi.readFileSync(r, "utf-8");
      } catch {
        return;
      }
    }),
    Hwl = (kfe.json = function () {
      var t = qfu.apply(null, arguments);
      return t ? Gfu(t) : null;
    }),
    Vwl = (kfe.env = function (t, e) {
      e = e || process.env;
      var r = {},
        n = t.length;
      for (var o in e)
        if (o.toLowerCase().indexOf(t.toLowerCase()) === 0) {
          for (var s = o.substring(n).split("__"), a; (a = s.indexOf("")) > -1; ) s.splice(a, 1);
          var u = r;
          s.forEach(function (m, d) {
            !m ||
              typeof u != "object" ||
              (d === s.length - 1 && (u[m] = e[o]), u[m] === void 0 && (u[m] = {}), (u = u[m]));
          });
        }
      return r;
    }),
    Wwl = (kfe.find = function () {
      var t = DDe.join.apply(null, [].slice.call(arguments));
      function e(r, n) {
        var o = DDe.join(r, n);
        try {
          return (tZi.statSync(o), o);
        } catch {
          if (DDe.dirname(r) !== r) return e(DDe.dirname(r), n);
        }
      }
      return e(process.cwd(), t);
    });
});