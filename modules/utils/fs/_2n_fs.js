/**
 * @module _2n
 * @category utils/fs
 * @label fs
 * @position 870 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (_2n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var _2n = T((Enc, y2n) => {
  "use strict";
  var A2n =
      "(?:" +
      ["\\|\\|", "\\&\\&", ";;", "\\|\\&", "\\<\\(", "\\<\\<\\<", ">>", ">\\&", "<\\&", "[&;()|<>]"].join("|") +
      ")",
    p2n = new RegExp("^" + A2n + "$"),
    h2n = "|&;()<> \\t",
    iAs = '"((\\\\"|[^"])*?)"',
    oAs = "'((\\\\'|[^'])*?)'",
    sAs = /^#$/,
    g2n = "'",
    b2n = '"',
    vjt = "$",
    dV = "",
    aAs = 4294967296;
  for (Cjt = 0; Cjt < 4; Cjt++) dV += (aAs * Math.random()).toString(16);
  var Cjt,
    uAs = new RegExp("^" + dV);
  function cAs(t, e) {
    for (var r = e.lastIndex, n = [], o; (o = e.exec(t)); ) (n.push(o), e.lastIndex === o.index && (e.lastIndex += 1));
    return ((e.lastIndex = r), n);
  }
  function lAs(t, e, r) {
    var n = typeof t == "function" ? t(r) : t[r];
    return (
      typeof n > "u" && r != "" ? (n = "") : typeof n > "u" && (n = "$"),
      typeof n == "object" ? e + dV + JSON.stringify(n) + dV : e + n
    );
  }
  function mAs(t, e, r) {
    r || (r = {});
    var n = r.escape || "\\",
      o = "(\\" + n + `['"` + h2n + `]|[^\\s'"` + h2n + "])+",
      s = new RegExp(["(" + A2n + ")", "(" + o + "|" + iAs + "|" + oAs + ")+"].join("|"), "g"),
      a = cAs(t, s);
    if (a.length === 0) return [];
    e || (e = {});
    var u = !1;
    return a
      .map(function (c) {
        var m = c[0];
        if (!m || u) return;
        if (p2n.test(m)) return { op: m };
        var d = !1,
          f = !1,
          p = "",
          h = !1,
          g;
        function b() {
          g += 1;
          var E,
            v,
            C = m.charAt(g);
          if (C === "{") {
            if (((g += 1), m.charAt(g) === "}")) throw new Error("Bad substitution: " + m.slice(g - 2, g + 1));
            if (((E = m.indexOf("}", g)), E < 0)) throw new Error("Bad substitution: " + m.slice(g));
            ((v = m.slice(g, E)), (g = E));
          } else if (/[*@#?$!_-]/.test(C)) ((v = C), (g += 1));
          else {
            var x = m.slice(g);
            ((E = x.match(/[^\w\d_]/)),
              E ? ((v = x.slice(0, E.index)), (g += E.index - 1)) : ((v = x), (g = m.length)));
          }
          return lAs(e, "", v);
        }
        for (g = 0; g < m.length; g++) {
          var A = m.charAt(g);
          if (((h = h || (!d && (A === "*" || A === "?"))), f)) ((p += A), (f = !1));
          else if (d)
            A === d
              ? (d = !1)
              : d == g2n
                ? (p += A)
                : A === n
                  ? ((g += 1), (A = m.charAt(g)), A === b2n || A === n || A === vjt ? (p += A) : (p += n + A))
                  : A === vjt
                    ? (p += b())
                    : (p += A);
          else if (A === b2n || A === g2n) d = A;
          else {
            if (p2n.test(A)) return { op: m };
            if (sAs.test(A)) {
              u = !0;
              var y = { comment: t.slice(c.index + g + 1) };
              return p.length ? [p, y] : [y];
            } else A === n ? (f = !0) : A === vjt ? (p += b()) : (p += A);
          }
        }
        return h ? { op: "glob", pattern: p } : p;
      })
      .reduce(function (c, m) {
        return typeof m > "u" ? c : c.concat(m);
      }, []);
  }
  y2n.exports = function (e, r, n) {
    var o = mAs(e, r, n);
    return typeof r != "function"
      ? o
      : o.reduce(function (s, a) {
          if (typeof a == "object") return s.concat(a);
          var u = a.split(RegExp("(" + dV + ".*?" + dV + ")", "g"));
          return u.length === 1
            ? s.concat(u[0])
            : s.concat(
                u.filter(Boolean).map(function (c) {
                  return uAs.test(c) ? JSON.parse(c.split(dV)[1]) : c;
                }),
              );
        }, []);
  };
});