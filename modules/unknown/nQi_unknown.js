/**
 * @module nQi
 * @category unknown
 * @label unknown
 * @position 1883 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (nQi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var nQi = T((xul, _6r) => {
  "use strict";
  var Zji = Ae("child_process").exec,
    eQi = Ae("child_process").execSync,
    O3t = Ae("fs"),
    Xji = Ae("path"),
    tQi = O3t.access,
    rQi = O3t.accessSync,
    I1e = O3t.constants || O3t,
    A6r = process.platform == "win32",
    pau = function (t, e) {
      tQi(t, I1e.F_OK, function (r) {
        e(!r);
      });
    },
    hau = function (t) {
      try {
        return (rQi(t, I1e.F_OK), !1);
      } catch {
        return !0;
      }
    },
    gau = function (t, e) {
      tQi(t, I1e.F_OK | I1e.X_OK, function (r) {
        e(null, !r);
      });
    },
    bau = function (t) {
      try {
        return (rQi(t, I1e.F_OK | I1e.X_OK), !0);
      } catch {
        return !1;
      }
    },
    Aau = function (t, e, r) {
      pau(t, function (n) {
        if (!n) {
          var o = Zji("command -v " + e + " 2>/dev/null && { echo >&1 " + e + "; exit 0; }", function (s, a, u) {
            r(null, !!a);
          });
          return;
        }
        gau(t, r);
      });
    },
    yau = function (t, e, r) {
      if (!/^(?!(?:.*\s|.*\.|\W+)$)(?:[a-zA-Z]:)?(?:(?:[^<>:"\|\?\*\n])+(?:\/\/|\/|\\\\|\\)?)+$/m.test(t)) {
        r(null, !1);
        return;
      }
      var n = Zji("where " + e, function (o) {
        o !== null ? r(null, !1) : r(null, !0);
      });
    },
    _au = function (t, e) {
      if (hau(t))
        try {
          var r = eQi("command -v " + e + " 2>/dev/null && { echo >&1 " + e + "; exit 0; }");
          return !!r;
        } catch {
          return !1;
        }
      return bau(t);
    },
    Eau = function (t, e, r) {
      if (!/^(?!(?:.*\s|.*\.|\W+)$)(?:[a-zA-Z]:)?(?:(?:[^<>:"\|\?\*\n])+(?:\/\/|\/|\\\\|\\)?)+$/m.test(t)) return !1;
      try {
        var n = eQi("where " + e, { stdio: [] });
        return !!n;
      } catch {
        return !1;
      }
    },
    y6r = function (t) {
      return (
        /[^A-Za-z0-9_\/:=-]/.test(t) &&
          ((t = "'" + t.replace(/'/g, "'\\''") + "'"), (t = t.replace(/^(?:'')+/g, "").replace(/\\'''/g, "\\'"))),
        t
      );
    };
  A6r &&
    (y6r = function (t) {
      var e = /[\\]/.test(t);
      if (e) {
        var r = '"' + Xji.dirname(t) + '"',
          n = '"' + Xji.basename(t) + '"';
        return r + ":" + n;
      }
      return '"' + t + '"';
    });
  _6r.exports = function t(e, r) {
    var n = y6r(e);
    if (!r && typeof Promise < "u")
      return new Promise(function (o, s) {
        t(e, function (a, u) {
          u ? o(e) : s(a);
        });
      });
    A6r ? yau(e, n, r) : Aau(e, n, r);
  };
  _6r.exports.sync = function (t) {
    var e = y6r(t);
    return A6r ? Eau(t, e) : _au(t, e);
  };
});