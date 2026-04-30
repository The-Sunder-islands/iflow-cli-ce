/**
 * @module A9t
 * @category unknown
 * @label unknown
 * @position 20 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (A9t) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var A9t = T((pyu, fxr) => {
  "use strict";
  var { tokenChars: Lhe } = iee();
  function Jw(t, e, r) {
    t[e] === void 0 ? (t[e] = [r]) : t[e].push(r);
  }
  function e0o(t) {
    let e = Object.create(null),
      r = Object.create(null),
      n = !1,
      o = !1,
      s = !1,
      a,
      u,
      c = -1,
      m = -1,
      d = -1,
      f = 0;
    for (; f < t.length; f++)
      if (((m = t.charCodeAt(f)), a === void 0))
        if (d === -1 && Lhe[m] === 1) c === -1 && (c = f);
        else if (f !== 0 && (m === 32 || m === 9)) d === -1 && c !== -1 && (d = f);
        else if (m === 59 || m === 44) {
          if (c === -1) throw new SyntaxError(`Unexpected character at index ${f}`);
          d === -1 && (d = f);
          let h = t.slice(c, d);
          (m === 44 ? (Jw(e, h, r), (r = Object.create(null))) : (a = h), (c = d = -1));
        } else throw new SyntaxError(`Unexpected character at index ${f}`);
      else if (u === void 0)
        if (d === -1 && Lhe[m] === 1) c === -1 && (c = f);
        else if (m === 32 || m === 9) d === -1 && c !== -1 && (d = f);
        else if (m === 59 || m === 44) {
          if (c === -1) throw new SyntaxError(`Unexpected character at index ${f}`);
          (d === -1 && (d = f),
            Jw(r, t.slice(c, d), !0),
            m === 44 && (Jw(e, a, r), (r = Object.create(null)), (a = void 0)),
            (c = d = -1));
        } else if (m === 61 && c !== -1 && d === -1) ((u = t.slice(c, f)), (c = d = -1));
        else throw new SyntaxError(`Unexpected character at index ${f}`);
      else if (o) {
        if (Lhe[m] !== 1) throw new SyntaxError(`Unexpected character at index ${f}`);
        (c === -1 ? (c = f) : n || (n = !0), (o = !1));
      } else if (s)
        if (Lhe[m] === 1) c === -1 && (c = f);
        else if (m === 34 && c !== -1) ((s = !1), (d = f));
        else if (m === 92) o = !0;
        else throw new SyntaxError(`Unexpected character at index ${f}`);
      else if (m === 34 && t.charCodeAt(f - 1) === 61) s = !0;
      else if (d === -1 && Lhe[m] === 1) c === -1 && (c = f);
      else if (c !== -1 && (m === 32 || m === 9)) d === -1 && (d = f);
      else if (m === 59 || m === 44) {
        if (c === -1) throw new SyntaxError(`Unexpected character at index ${f}`);
        d === -1 && (d = f);
        let h = t.slice(c, d);
        (n && ((h = h.replace(/\\/g, "")), (n = !1)),
          Jw(r, u, h),
          m === 44 && (Jw(e, a, r), (r = Object.create(null)), (a = void 0)),
          (u = void 0),
          (c = d = -1));
      } else throw new SyntaxError(`Unexpected character at index ${f}`);
    if (c === -1 || s || m === 32 || m === 9) throw new SyntaxError("Unexpected end of input");
    d === -1 && (d = f);
    let p = t.slice(c, d);
    return (
      a === void 0
        ? Jw(e, p, r)
        : (u === void 0 ? Jw(r, p, !0) : n ? Jw(r, u, p.replace(/\\/g, "")) : Jw(r, u, p), Jw(e, a, r)),
      e
    );
  }
  function t0o(t) {
    return Object.keys(t)
      .map((e) => {
        let r = t[e];
        return (
          Array.isArray(r) || (r = [r]),
          r
            .map((n) =>
              [e]
                .concat(
                  Object.keys(n).map((o) => {
                    let s = n[o];
                    return (Array.isArray(s) || (s = [s]), s.map((a) => (a === !0 ? o : `${o}=${a}`)).join("; "));
                  }),
                )
                .join("; "),
            )
            .join(", ")
        );
      })
      .join(", ");
  }
  fxr.exports = { format: t0o, parse: e0o };
});