/**
 * @module lji
 * @category unknown
 * @label unknown
 * @position 1870 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (lji) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var lji = T((Gal, cji) => {
  var psu = o6r(),
    hsu = i6r();
  function x3t(t) {
    try {
      return (psu(t), !0);
    } catch {
      return !1;
    }
  }
  function uji(t, e) {
    var r = e[0].length - t[0].length;
    return r !== 0 ? r : t[0].toUpperCase().localeCompare(e[0].toUpperCase());
  }
  var rji = [
      ["APGL", "AGPL"],
      ["Gpl", "GPL"],
      ["GLP", "GPL"],
      ["APL", "Apache"],
      ["ISD", "ISC"],
      ["GLP", "GPL"],
      ["IST", "ISC"],
      ["Claude", "Clause"],
      [" or later", "+"],
      [" International", ""],
      ["GNU", "GPL"],
      ["GUN", "GPL"],
      ["+", ""],
      ["GNU GPL", "GPL"],
      ["GNU LGPL", "LGPL"],
      ["GNU/GPL", "GPL"],
      ["GNU GLP", "GPL"],
      ["GNU LESSER GENERAL PUBLIC LICENSE", "LGPL"],
      ["GNU Lesser General Public License", "LGPL"],
      ["GNU LESSER GENERAL PUBLIC LICENSE", "LGPL-2.1"],
      ["GNU Lesser General Public License", "LGPL-2.1"],
      ["LESSER GENERAL PUBLIC LICENSE", "LGPL"],
      ["Lesser General Public License", "LGPL"],
      ["LESSER GENERAL PUBLIC LICENSE", "LGPL-2.1"],
      ["Lesser General Public License", "LGPL-2.1"],
      ["GNU General Public License", "GPL"],
      ["Gnu public license", "GPL"],
      ["GNU Public License", "GPL"],
      ["GNU GENERAL PUBLIC LICENSE", "GPL"],
      ["MTI", "MIT"],
      ["Mozilla Public License", "MPL"],
      ["Universal Permissive License", "UPL"],
      ["WTH", "WTF"],
      ["WTFGPL", "WTFPL"],
      ["-License", ""],
    ].sort(uji),
    gsu = 0,
    bsu = 1,
    nji = [
      function (t) {
        return t.toUpperCase();
      },
      function (t) {
        return t.trim();
      },
      function (t) {
        return t.replace(/\./g, "");
      },
      function (t) {
        return t.replace(/\s+/g, "");
      },
      function (t) {
        return t.replace(/\s+/g, "-");
      },
      function (t) {
        return t.replace("v", "-");
      },
      function (t) {
        return t.replace(/,?\s*(\d)/, "-$1");
      },
      function (t) {
        return t.replace(/,?\s*(\d)/, "-$1.0");
      },
      function (t) {
        return t.replace(/,?\s*(V\.|v\.|V|v|Version|version)\s*(\d)/, "-$2");
      },
      function (t) {
        return t.replace(/,?\s*(V\.|v\.|V|v|Version|version)\s*(\d)/, "-$2.0");
      },
      function (t) {
        return t[0].toUpperCase() + t.slice(1);
      },
      function (t) {
        return t.replace("/", "-");
      },
      function (t) {
        return t.replace(/\s*V\s*(\d)/, "-$1").replace(/(\d)$/, "$1.0");
      },
      function (t) {
        return t.indexOf("3.0") !== -1 ? t + "-or-later" : t + "-only";
      },
      function (t) {
        return t + "only";
      },
      function (t) {
        return t.replace(/(\d)$/, "-$1.0");
      },
      function (t) {
        return t.replace(/(-| )?(\d)$/, "-$2-Clause");
      },
      function (t) {
        return t.replace(/(-| )clause(-| )(\d)/, "-$3-Clause");
      },
      function (t) {
        return t.replace(/\b(Modified|New|Revised)(-| )?BSD((-| )License)?/i, "BSD-3-Clause");
      },
      function (t) {
        return t.replace(/\bSimplified(-| )?BSD((-| )License)?/i, "BSD-2-Clause");
      },
      function (t) {
        return t.replace(/\b(Free|Net)(-| )?BSD((-| )License)?/i, "BSD-2-Clause-$1BSD");
      },
      function (t) {
        return t.replace(/\bClear(-| )?BSD((-| )License)?/i, "BSD-3-Clause-Clear");
      },
      function (t) {
        return t.replace(/\b(Old|Original)(-| )?BSD((-| )License)?/i, "BSD-4-Clause");
      },
      function (t) {
        return "CC-" + t;
      },
      function (t) {
        return "CC-" + t + "-4.0";
      },
      function (t) {
        return t
          .replace("Attribution", "BY")
          .replace("NonCommercial", "NC")
          .replace("NoDerivatives", "ND")
          .replace(/ (\d)/, "-$1")
          .replace(/ ?International/, "");
      },
      function (t) {
        return (
          "CC-" +
          t
            .replace("Attribution", "BY")
            .replace("NonCommercial", "NC")
            .replace("NoDerivatives", "ND")
            .replace(/ (\d)/, "-$1")
            .replace(/ ?International/, "") +
          "-4.0"
        );
      },
    ],
    s6r = hsu
      .map(function (t) {
        var e = /^(.*)-\d+\.\d+$/.exec(t);
        return e ? [e[0], e[1]] : [t, null];
      })
      .reduce(function (t, e) {
        var r = e[1];
        return ((t[r] = t[r] || []), t[r].push(e[0]), t);
      }, {}),
    Asu = Object.keys(s6r)
      .map(function (e) {
        return [e, s6r[e]];
      })
      .filter(function (e) {
        return e[1].length === 1 && e[0] !== null && e[0] !== "APL";
      })
      .map(function (e) {
        return [e[0], e[1][0]];
      });
  s6r = void 0;
  var iji = [
      ["UNLI", "Unlicense"],
      ["WTF", "WTFPL"],
      ["2 CLAUSE", "BSD-2-Clause"],
      ["2-CLAUSE", "BSD-2-Clause"],
      ["3 CLAUSE", "BSD-3-Clause"],
      ["3-CLAUSE", "BSD-3-Clause"],
      ["AFFERO", "AGPL-3.0-or-later"],
      ["AGPL", "AGPL-3.0-or-later"],
      ["APACHE", "Apache-2.0"],
      ["ARTISTIC", "Artistic-2.0"],
      ["Affero", "AGPL-3.0-or-later"],
      ["BEER", "Beerware"],
      ["BOOST", "BSL-1.0"],
      ["BSD", "BSD-2-Clause"],
      ["CDDL", "CDDL-1.1"],
      ["ECLIPSE", "EPL-1.0"],
      ["FUCK", "WTFPL"],
      ["GNU", "GPL-3.0-or-later"],
      ["LGPL", "LGPL-3.0-or-later"],
      ["GPLV1", "GPL-1.0-only"],
      ["GPL-1", "GPL-1.0-only"],
      ["GPLV2", "GPL-2.0-only"],
      ["GPL-2", "GPL-2.0-only"],
      ["GPL", "GPL-3.0-or-later"],
      ["MIT +NO-FALSE-ATTRIBS", "MITNFA"],
      ["MIT", "MIT"],
      ["MPL", "MPL-2.0"],
      ["X11", "X11"],
      ["ZLIB", "Zlib"],
    ]
      .concat(Asu)
      .sort(uji),
    ysu = 0,
    _su = 1,
    oji = function (t) {
      for (var e = 0; e < nji.length; e++) {
        var r = nji[e](t).trim();
        if (r !== t && x3t(r)) return r;
      }
      return null;
    },
    sji = function (t) {
      for (var e = t.toUpperCase(), r = 0; r < iji.length; r++) {
        var n = iji[r];
        if (e.indexOf(n[ysu]) > -1) return n[_su];
      }
      return null;
    },
    aji = function (t, e) {
      for (var r = 0; r < rji.length; r++) {
        var n = rji[r],
          o = n[gsu];
        if (t.indexOf(o) > -1) {
          var s = t.replace(o, n[bsu]),
            a = e(s);
          if (a !== null) return a;
        }
      }
      return null;
    };
  cji.exports = function (t, e) {
    e = e || {};
    var r = e.upgrade === void 0 ? !0 : !!e.upgrade;
    function n(u) {
      return r ? Esu(u) : u;
    }
    var o = typeof t == "string" && t.trim().length !== 0;
    if (!o) throw Error("Invalid argument. Expected non-empty string.");
    if (((t = t.trim()), x3t(t))) return n(t);
    var s = t.replace(/\+$/, "").trim();
    if (x3t(s)) return n(s);
    var a = oji(t);
    return a !== null ||
      ((a = aji(t, function (u) {
        return x3t(u) ? u : oji(u);
      })),
      a !== null) ||
      ((a = sji(t)), a !== null) ||
      ((a = aji(t, sji)), a !== null)
      ? n(a)
      : null;
  };
  function Esu(t) {
    return ["GPL-1.0", "LGPL-1.0", "AGPL-1.0", "GPL-2.0", "LGPL-2.0", "AGPL-2.0", "LGPL-2.1"].indexOf(t) !== -1
      ? t + "-only"
      : ["GPL-1.0+", "GPL-2.0+", "GPL-3.0+", "LGPL-2.0+", "LGPL-2.1+", "LGPL-3.0+", "AGPL-1.0+", "AGPL-3.0+"].indexOf(
            t,
          ) !== -1
        ? t.replace(/\+$/, "-or-later")
        : ["GPL-3.0", "LGPL-3.0", "AGPL-3.0"].indexOf(t) !== -1
          ? t + "-or-later"
          : t;
  }
});