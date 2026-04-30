/**
 * @module pdi
 * @category unknown
 * @label unknown
 * @position 1624 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (pdi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var pdi = T((uFc, fdi) => {
  "use strict";
  var hCa = udi(),
    bfr = mdi(),
    ddi = tSe(),
    gCa = eSe(),
    bCa = (t) => t && typeof t == "object" && !Array.isArray(t),
    uf = (t, e, r = !1) => {
      if (Array.isArray(t)) {
        let d = t.map((p) => uf(p, e, r));
        return (p) => {
          for (let h of d) {
            let g = h(p);
            if (g) return g;
          }
          return !1;
        };
      }
      let n = bCa(t) && t.tokens && t.input;
      if (t === "" || (typeof t != "string" && !n)) throw new TypeError("Expected pattern to be a non-empty string");
      let o = e || {},
        s = o.windows,
        a = n ? uf.compileRe(t, e) : uf.makeRe(t, e, !1, !0),
        u = a.state;
      delete a.state;
      let c = () => !1;
      if (o.ignore) {
        let d = { ...e, ignore: null, onMatch: null, onResult: null };
        c = uf(o.ignore, d, r);
      }
      let m = (d, f = !1) => {
        let { isMatch: p, match: h, output: g } = uf.test(d, a, e, { glob: t, posix: s }),
          b = { glob: t, state: u, regex: a, posix: s, input: d, output: g, match: h, isMatch: p };
        return (
          typeof o.onResult == "function" && o.onResult(b),
          p === !1
            ? ((b.isMatch = !1), f ? b : !1)
            : c(d)
              ? (typeof o.onIgnore == "function" && o.onIgnore(b), (b.isMatch = !1), f ? b : !1)
              : (typeof o.onMatch == "function" && o.onMatch(b), f ? b : !0)
        );
      };
      return (r && (m.state = u), m);
    };
  uf.test = (t, e, r, { glob: n, posix: o } = {}) => {
    if (typeof t != "string") throw new TypeError("Expected input to be a string");
    if (t === "") return { isMatch: !1, output: "" };
    let s = r || {},
      a = s.format || (o ? ddi.toPosixSlashes : null),
      u = t === n,
      c = u && a ? a(t) : t;
    return (
      u === !1 && ((c = a ? a(t) : t), (u = c === n)),
      (u === !1 || s.capture === !0) &&
        (s.matchBase === !0 || s.basename === !0 ? (u = uf.matchBase(t, e, r, o)) : (u = e.exec(c))),
      { isMatch: !!u, match: u, output: c }
    );
  };
  uf.matchBase = (t, e, r) => (e instanceof RegExp ? e : uf.makeRe(e, r)).test(ddi.basename(t));
  uf.isMatch = (t, e, r) => uf(e, r)(t);
  uf.parse = (t, e) => (Array.isArray(t) ? t.map((r) => uf.parse(r, e)) : bfr(t, { ...e, fastpaths: !1 }));
  uf.scan = (t, e) => hCa(t, e);
  uf.compileRe = (t, e, r = !1, n = !1) => {
    if (r === !0) return t.output;
    let o = e || {},
      s = o.contains ? "" : "^",
      a = o.contains ? "" : "$",
      u = `${s}(?:${t.output})${a}`;
    t && t.negated === !0 && (u = `^(?!${u}).*$`);
    let c = uf.toRegex(u, e);
    return (n === !0 && (c.state = t), c);
  };
  uf.makeRe = (t, e = {}, r = !1, n = !1) => {
    if (!t || typeof t != "string") throw new TypeError("Expected a non-empty string");
    let o = { negated: !1, fastpaths: !0 };
    return (
      e.fastpaths !== !1 && (t[0] === "." || t[0] === "*") && (o.output = bfr.fastpaths(t, e)),
      o.output || (o = bfr(t, e)),
      uf.compileRe(o, e, r, n)
    );
  };
  uf.toRegex = (t, e) => {
    try {
      let r = e || {};
      return new RegExp(t, r.flags || (r.nocase ? "i" : ""));
    } catch (r) {
      if (e && e.debug === !0) throw r;
      return /$^/;
    }
  };
  uf.constants = gCa;
  fdi.exports = uf;
});