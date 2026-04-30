/**
 * @module _Fi
 * @category unknown
 * @label unknown
 * @position 1847 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (_Fi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var _Fi = T((Kil, yFi) => {
  "use strict";
  var aTe = j8r(),
    Inu = Hht(),
    Rnu = pFi(),
    zht = new Set(["\x1B", "\x9B"]),
    knu = 39,
    V8r = "\x07",
    bFi = "[",
    Onu = "]",
    AFi = "m",
    W8r = `${Onu}8;;`,
    hFi = (t) => `${zht.values().next().value}${bFi}${t}${AFi}`,
    gFi = (t) => `${zht.values().next().value}${W8r}${t}${V8r}`,
    Nnu = (t) => t.split(" ").map((e) => aTe(e)),
    H8r = (t, e, r) => {
      let n = [...e],
        o = !1,
        s = !1,
        a = aTe(Inu(t[t.length - 1]));
      for (let [u, c] of n.entries()) {
        let m = aTe(c);
        if (
          (a + m <= r ? (t[t.length - 1] += c) : (t.push(c), (a = 0)),
          zht.has(c) &&
            ((o = !0),
            (s = n
              .slice(u + 1)
              .join("")
              .startsWith(W8r))),
          o)
        ) {
          s ? c === V8r && ((o = !1), (s = !1)) : c === AFi && (o = !1);
          continue;
        }
        ((a += m), a === r && u < n.length - 1 && (t.push(""), (a = 0)));
      }
      !a && t[t.length - 1].length > 0 && t.length > 1 && (t[t.length - 2] += t.pop());
    },
    Pnu = (t) => {
      let e = t.split(" "),
        r = e.length;
      for (; r > 0 && !(aTe(e[r - 1]) > 0); ) r--;
      return r === e.length ? t : e.slice(0, r).join(" ") + e.slice(r).join("");
    },
    Bnu = (t, e, r = {}) => {
      if (r.trim !== !1 && t.trim() === "") return "";
      let n = "",
        o,
        s,
        a = Nnu(t),
        u = [""];
      for (let [m, d] of t.split(" ").entries()) {
        r.trim !== !1 && (u[u.length - 1] = u[u.length - 1].trimStart());
        let f = aTe(u[u.length - 1]);
        if (
          (m !== 0 &&
            (f >= e && (r.wordWrap === !1 || r.trim === !1) && (u.push(""), (f = 0)),
            (f > 0 || r.trim === !1) && ((u[u.length - 1] += " "), f++)),
          r.hard && a[m] > e)
        ) {
          let p = e - f,
            h = 1 + Math.floor((a[m] - p - 1) / e);
          (Math.floor((a[m] - 1) / e) < h && u.push(""), H8r(u, d, e));
          continue;
        }
        if (f + a[m] > e && f > 0 && a[m] > 0) {
          if (r.wordWrap === !1 && f < e) {
            H8r(u, d, e);
            continue;
          }
          u.push("");
        }
        if (f + a[m] > e && r.wordWrap === !1) {
          H8r(u, d, e);
          continue;
        }
        u[u.length - 1] += d;
      }
      r.trim !== !1 && (u = u.map(Pnu));
      let c = [
        ...u.join(`
`),
      ];
      for (let [m, d] of c.entries()) {
        if (((n += d), zht.has(d))) {
          let { groups: p } = new RegExp(`(?:\\${bFi}(?<code>\\d+)m|\\${W8r}(?<uri>.*)${V8r})`).exec(
            c.slice(m).join(""),
          ) || { groups: {} };
          if (p.code !== void 0) {
            let h = Number.parseFloat(p.code);
            o = h === knu ? void 0 : h;
          } else p.uri !== void 0 && (s = p.uri.length === 0 ? void 0 : p.uri);
        }
        let f = Rnu.codes.get(Number(o));
        c[m + 1] ===
        `
`
          ? (s && (n += gFi("")), o && f && (n += hFi(f)))
          : d ===
              `
` && (o && f && (n += hFi(o)), s && (n += gFi(s)));
      }
      return n;
    };
  yFi.exports = (t, e, r) =>
    String(t)
      .normalize()
      .replace(
        /\r\n/g,
        `
`,
      )
      .split(
        `
`,
      )
      .map((n) => Bnu(n, e, r)).join(`
`);
});