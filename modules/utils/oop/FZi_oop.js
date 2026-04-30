/**
 * @module FZi
 * @category utils/oop
 * @label oop
 * @position 1923 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (FZi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var FZi = T((YJ) => {
  YJ.parse = YJ.decode = upu;
  YJ.stringify = YJ.encode = BZi;
  YJ.safe = Bfe;
  YJ.unsafe = Jbt;
  var TEr =
    typeof process < "u" && process.platform === "win32"
      ? `\r
`
      : `
`;
  function BZi(t, e) {
    var r = [],
      n = "";
    typeof e == "string" ? (e = { section: e, whitespace: !1 }) : ((e = e || {}), (e.whitespace = e.whitespace === !0));
    var o = e.whitespace ? " = " : "=";
    return (
      Object.keys(t).forEach(function (s, a, u) {
        var c = t[s];
        c && Array.isArray(c)
          ? c.forEach(function (m) {
              n +=
                Bfe(s + "[]") +
                o +
                Bfe(m) +
                `
`;
            })
          : c && typeof c == "object"
            ? r.push(s)
            : (n += Bfe(s) + o + Bfe(c) + TEr);
      }),
      e.section && n.length && (n = "[" + Bfe(e.section) + "]" + TEr + n),
      r.forEach(function (s, a, u) {
        var c = LZi(s).join("\\."),
          m = (e.section ? e.section + "." : "") + c,
          d = BZi(t[s], { section: m, whitespace: e.whitespace });
        (n.length && d.length && (n += TEr), (n += d));
      }),
      n
    );
  }
  function LZi(t) {
    return t
      .replace(/\1/g, "LITERAL\\1LITERAL")
      .replace(/\\\./g, "")
      .split(/\./)
      .map(function (e) {
        return e.replace(/\1/g, "\\.").replace(/\2LITERAL\\1LITERAL\2/g, "");
      });
  }
  function upu(t) {
    var e = {},
      r = e,
      n = null,
      o = /^\[([^\]]*)\]$|^([^=]+)(=(.*))?$/i,
      s = t.split(/[\r\n]+/g);
    return (
      s.forEach(function (a, u, c) {
        if (!(!a || a.match(/^\s*[;#]/))) {
          var m = a.match(o);
          if (m) {
            if (m[1] !== void 0) {
              if (((n = Jbt(m[1])), n === "__proto__")) {
                r = {};
                return;
              }
              r = e[n] = e[n] || {};
              return;
            }
            var d = Jbt(m[2]);
            if (d !== "__proto__") {
              var f = m[3] ? Jbt(m[4]) : !0;
              switch (f) {
                case "true":
                case "false":
                case "null":
                  f = JSON.parse(f);
              }
              if (d.length > 2 && d.slice(-2) === "[]") {
                if (((d = d.substring(0, d.length - 2)), d === "__proto__")) return;
                r[d] ? Array.isArray(r[d]) || (r[d] = [r[d]]) : (r[d] = []);
              }
              Array.isArray(r[d]) ? r[d].push(f) : (r[d] = f);
            }
          }
        }
      }),
      Object.keys(e)
        .filter(function (a, u, c) {
          if (!e[a] || typeof e[a] != "object" || Array.isArray(e[a])) return !1;
          var m = LZi(a),
            d = e,
            f = m.pop(),
            p = f.replace(/\\\./g, ".");
          return (
            m.forEach(function (h, g, b) {
              h !== "__proto__" && ((!d[h] || typeof d[h] != "object") && (d[h] = {}), (d = d[h]));
            }),
            d === e && p === f ? !1 : ((d[p] = e[a]), !0)
          );
        })
        .forEach(function (a, u, c) {
          delete e[a];
        }),
      e
    );
  }
  function MZi(t) {
    return (t.charAt(0) === '"' && t.slice(-1) === '"') || (t.charAt(0) === "'" && t.slice(-1) === "'");
  }
  function Bfe(t) {
    return typeof t != "string" || t.match(/[=\r\n]/) || t.match(/^\[/) || (t.length > 1 && MZi(t)) || t !== t.trim()
      ? JSON.stringify(t)
      : t.replace(/;/g, "\\;").replace(/#/g, "\\#");
  }
  function Jbt(t, e) {
    if (((t = (t || "").trim()), MZi(t))) {
      t.charAt(0) === "'" && (t = t.substr(1, t.length - 2));
      try {
        t = JSON.parse(t);
      } catch {}
    } else {
      for (var r = !1, n = "", o = 0, s = t.length; o < s; o++) {
        var a = t.charAt(o);
        if (r) ("\\;#".indexOf(a) !== -1 ? (n += a) : (n += "\\" + a), (r = !1));
        else {
          if (";#".indexOf(a) !== -1) break;
          a === "\\" ? (r = !0) : (n += a);
        }
      }
      return (r && (n += "\\"), n.trim());
    }
    return t;
  }
});