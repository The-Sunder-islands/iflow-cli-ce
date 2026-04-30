/**
 * @module Nto
 * @category utils/versioning
 * @label versioning
 * @position 1965 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Nto) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Nto = T((Kxl, Oto) => {
  "use strict";
  var Dto = Yv(),
    WEr = NDe(),
    { ANY: VEr } = WEr,
    LDe = BDe(),
    zEr = zv(),
    C3u = (t, e, r = {}) => {
      if (t === e) return !0;
      ((t = new Dto(t, r)), (e = new Dto(e, r)));
      let n = !1;
      e: for (let o of t.set) {
        for (let s of e.set) {
          let a = w3u(o, s, r);
          if (((n = n || a !== null), a)) continue e;
        }
        if (n) return !1;
      }
      return !0;
    },
    S3u = [new WEr(">=0.0.0-0")],
    Ito = [new WEr(">=0.0.0")],
    w3u = (t, e, r) => {
      if (t === e) return !0;
      if (t.length === 1 && t[0].semver === VEr) {
        if (e.length === 1 && e[0].semver === VEr) return !0;
        r.includePrerelease ? (t = S3u) : (t = Ito);
      }
      if (e.length === 1 && e[0].semver === VEr) {
        if (r.includePrerelease) return !0;
        e = Ito;
      }
      let n = new Set(),
        o,
        s;
      for (let h of t)
        h.operator === ">" || h.operator === ">="
          ? (o = Rto(o, h, r))
          : h.operator === "<" || h.operator === "<="
            ? (s = kto(s, h, r))
            : n.add(h.semver);
      if (n.size > 1) return null;
      let a;
      if (o && s) {
        if (((a = zEr(o.semver, s.semver, r)), a > 0)) return null;
        if (a === 0 && (o.operator !== ">=" || s.operator !== "<=")) return null;
      }
      for (let h of n) {
        if ((o && !LDe(h, String(o), r)) || (s && !LDe(h, String(s), r))) return null;
        for (let g of e) if (!LDe(h, String(g), r)) return !1;
        return !0;
      }
      let u,
        c,
        m,
        d,
        f = s && !r.includePrerelease && s.semver.prerelease.length ? s.semver : !1,
        p = o && !r.includePrerelease && o.semver.prerelease.length ? o.semver : !1;
      f && f.prerelease.length === 1 && s.operator === "<" && f.prerelease[0] === 0 && (f = !1);
      for (let h of e) {
        if (
          ((d = d || h.operator === ">" || h.operator === ">="),
          (m = m || h.operator === "<" || h.operator === "<="),
          o)
        ) {
          if (
            (p &&
              h.semver.prerelease &&
              h.semver.prerelease.length &&
              h.semver.major === p.major &&
              h.semver.minor === p.minor &&
              h.semver.patch === p.patch &&
              (p = !1),
            h.operator === ">" || h.operator === ">=")
          ) {
            if (((u = Rto(o, h, r)), u === h && u !== o)) return !1;
          } else if (o.operator === ">=" && !LDe(o.semver, String(h), r)) return !1;
        }
        if (s) {
          if (
            (f &&
              h.semver.prerelease &&
              h.semver.prerelease.length &&
              h.semver.major === f.major &&
              h.semver.minor === f.minor &&
              h.semver.patch === f.patch &&
              (f = !1),
            h.operator === "<" || h.operator === "<=")
          ) {
            if (((c = kto(s, h, r)), c === h && c !== s)) return !1;
          } else if (s.operator === "<=" && !LDe(s.semver, String(h), r)) return !1;
        }
        if (!h.operator && (s || o) && a !== 0) return !1;
      }
      return !((o && m && !s && a !== 0) || (s && d && !o && a !== 0) || p || f);
    },
    Rto = (t, e, r) => {
      if (!t) return e;
      let n = zEr(t.semver, e.semver, r);
      return n > 0 ? t : n < 0 || (e.operator === ">" && t.operator === ">=") ? e : t;
    },
    kto = (t, e, r) => {
      if (!t) return e;
      let n = zEr(t.semver, e.semver, r);
      return n < 0 ? t : n > 0 || (e.operator === "<" && t.operator === "<=") ? e : t;
    };
  Oto.exports = C3u;
});