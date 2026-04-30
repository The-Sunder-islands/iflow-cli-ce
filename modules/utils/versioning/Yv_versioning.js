/**
 * @module Yv
 * @category utils/versioning
 * @label versioning
 * @position 1952 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Yv) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Yv = T((Mxl, Keo) => {
  "use strict";
  var Dhu = /\s+/g,
    $Er = class t {
      constructor(e, r) {
        if (((r = Rhu(r)), e instanceof t))
          return e.loose === !!r.loose && e.includePrerelease === !!r.includePrerelease ? e : new t(e.raw, r);
        if (e instanceof jEr) return ((this.raw = e.value), (this.set = [[e]]), (this.formatted = void 0), this);
        if (
          ((this.options = r),
          (this.loose = !!r.loose),
          (this.includePrerelease = !!r.includePrerelease),
          (this.raw = e.trim().replace(Dhu, " ")),
          (this.set = this.raw
            .split("||")
            .map((n) => this.parseRange(n.trim()))
            .filter((n) => n.length)),
          !this.set.length)
        )
          throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
        if (this.set.length > 1) {
          let n = this.set[0];
          if (((this.set = this.set.filter((o) => !zeo(o[0]))), this.set.length === 0)) this.set = [n];
          else if (this.set.length > 1) {
            for (let o of this.set)
              if (o.length === 1 && Mhu(o[0])) {
                this.set = [o];
                break;
              }
          }
        }
        this.formatted = void 0;
      }
      get range() {
        if (this.formatted === void 0) {
          this.formatted = "";
          for (let e = 0; e < this.set.length; e++) {
            e > 0 && (this.formatted += "||");
            let r = this.set[e];
            for (let n = 0; n < r.length; n++)
              (n > 0 && (this.formatted += " "), (this.formatted += r[n].toString().trim()));
          }
        }
        return this.formatted;
      }
      format() {
        return this.range;
      }
      toString() {
        return this.range;
      }
      parseRange(e) {
        let n = ((this.options.includePrerelease && Bhu) | (this.options.loose && Lhu)) + ":" + e,
          o = Weo.get(n);
        if (o) return o;
        let s = this.options.loose,
          a = s ? T5[VA.HYPHENRANGELOOSE] : T5[VA.HYPHENRANGE];
        ((e = e.replace(a, Whu(this.options.includePrerelease))),
          jm("hyphen replace", e),
          (e = e.replace(T5[VA.COMPARATORTRIM], Ohu)),
          jm("comparator trim", e),
          (e = e.replace(T5[VA.TILDETRIM], Nhu)),
          jm("tilde trim", e),
          (e = e.replace(T5[VA.CARETTRIM], Phu)),
          jm("caret trim", e));
        let u = e
          .split(" ")
          .map((f) => Fhu(f, this.options))
          .join(" ")
          .split(/\s+/)
          .map((f) => Vhu(f, this.options));
        (s && (u = u.filter((f) => (jm("loose invalid filter", f, this.options), !!f.match(T5[VA.COMPARATORLOOSE])))),
          jm("range list", u));
        let c = new Map(),
          m = u.map((f) => new jEr(f, this.options));
        for (let f of m) {
          if (zeo(f)) return [f];
          c.set(f.value, f);
        }
        c.size > 1 && c.has("") && c.delete("");
        let d = [...c.values()];
        return (Weo.set(n, d), d);
      }
      intersects(e, r) {
        if (!(e instanceof t)) throw new TypeError("a Range is required");
        return this.set.some(
          (n) => Yeo(n, r) && e.set.some((o) => Yeo(o, r) && n.every((s) => o.every((a) => s.intersects(a, r)))),
        );
      }
      test(e) {
        if (!e) return !1;
        if (typeof e == "string")
          try {
            e = new khu(e, this.options);
          } catch {
            return !1;
          }
        for (let r = 0; r < this.set.length; r++) if (zhu(this.set[r], e, this.options)) return !0;
        return !1;
      }
    };
  Keo.exports = $Er;
  var Ihu = Veo(),
    Weo = new Ihu(),
    Rhu = E3t(),
    jEr = NDe(),
    jm = wTe(),
    khu = NA(),
    { safeRe: T5, t: VA, comparatorTrimReplace: Ohu, tildeTrimReplace: Nhu, caretTrimReplace: Phu } = w1e(),
    { FLAG_INCLUDE_PRERELEASE: Bhu, FLAG_LOOSE: Lhu } = xTe(),
    zeo = (t) => t.value === "<0.0.0-0",
    Mhu = (t) => t.value === "",
    Yeo = (t, e) => {
      let r = !0,
        n = t.slice(),
        o = n.pop();
      for (; r && n.length; ) ((r = n.every((s) => o.intersects(s, e))), (o = n.pop()));
      return r;
    },
    Fhu = (t, e) => (
      (t = t.replace(T5[VA.BUILD], "")),
      jm("comp", t, e),
      (t = jhu(t, e)),
      jm("caret", t),
      (t = Uhu(t, e)),
      jm("tildes", t),
      (t = Ghu(t, e)),
      jm("xrange", t),
      (t = Hhu(t, e)),
      jm("stars", t),
      t
    ),
    D5 = (t) => !t || t.toLowerCase() === "x" || t === "*",
    Uhu = (t, e) =>
      t
        .trim()
        .split(/\s+/)
        .map((r) => $hu(r, e))
        .join(" "),
    $hu = (t, e) => {
      let r = e.loose ? T5[VA.TILDELOOSE] : T5[VA.TILDE];
      return t.replace(r, (n, o, s, a, u) => {
        jm("tilde", t, n, o, s, a, u);
        let c;
        return (
          D5(o)
            ? (c = "")
            : D5(s)
              ? (c = `>=${o}.0.0 <${+o + 1}.0.0-0`)
              : D5(a)
                ? (c = `>=${o}.${s}.0 <${o}.${+s + 1}.0-0`)
                : u
                  ? (jm("replaceTilde pr", u), (c = `>=${o}.${s}.${a}-${u} <${o}.${+s + 1}.0-0`))
                  : (c = `>=${o}.${s}.${a} <${o}.${+s + 1}.0-0`),
          jm("tilde return", c),
          c
        );
      });
    },
    jhu = (t, e) =>
      t
        .trim()
        .split(/\s+/)
        .map((r) => Qhu(r, e))
        .join(" "),
    Qhu = (t, e) => {
      jm("caret", t, e);
      let r = e.loose ? T5[VA.CARETLOOSE] : T5[VA.CARET],
        n = e.includePrerelease ? "-0" : "";
      return t.replace(r, (o, s, a, u, c) => {
        jm("caret", t, o, s, a, u, c);
        let m;
        return (
          D5(s)
            ? (m = "")
            : D5(a)
              ? (m = `>=${s}.0.0${n} <${+s + 1}.0.0-0`)
              : D5(u)
                ? s === "0"
                  ? (m = `>=${s}.${a}.0${n} <${s}.${+a + 1}.0-0`)
                  : (m = `>=${s}.${a}.0${n} <${+s + 1}.0.0-0`)
                : c
                  ? (jm("replaceCaret pr", c),
                    s === "0"
                      ? a === "0"
                        ? (m = `>=${s}.${a}.${u}-${c} <${s}.${a}.${+u + 1}-0`)
                        : (m = `>=${s}.${a}.${u}-${c} <${s}.${+a + 1}.0-0`)
                      : (m = `>=${s}.${a}.${u}-${c} <${+s + 1}.0.0-0`))
                  : (jm("no pr"),
                    s === "0"
                      ? a === "0"
                        ? (m = `>=${s}.${a}.${u}${n} <${s}.${a}.${+u + 1}-0`)
                        : (m = `>=${s}.${a}.${u}${n} <${s}.${+a + 1}.0-0`)
                      : (m = `>=${s}.${a}.${u} <${+s + 1}.0.0-0`)),
          jm("caret return", m),
          m
        );
      });
    },
    Ghu = (t, e) => (
      jm("replaceXRanges", t, e),
      t
        .split(/\s+/)
        .map((r) => qhu(r, e))
        .join(" ")
    ),
    qhu = (t, e) => {
      t = t.trim();
      let r = e.loose ? T5[VA.XRANGELOOSE] : T5[VA.XRANGE];
      return t.replace(r, (n, o, s, a, u, c) => {
        jm("xRange", t, n, o, s, a, u, c);
        let m = D5(s),
          d = m || D5(a),
          f = d || D5(u),
          p = f;
        return (
          o === "=" && p && (o = ""),
          (c = e.includePrerelease ? "-0" : ""),
          m
            ? o === ">" || o === "<"
              ? (n = "<0.0.0-0")
              : (n = "*")
            : o && p
              ? (d && (a = 0),
                (u = 0),
                o === ">"
                  ? ((o = ">="), d ? ((s = +s + 1), (a = 0), (u = 0)) : ((a = +a + 1), (u = 0)))
                  : o === "<=" && ((o = "<"), d ? (s = +s + 1) : (a = +a + 1)),
                o === "<" && (c = "-0"),
                (n = `${o + s}.${a}.${u}${c}`))
              : d
                ? (n = `>=${s}.0.0${c} <${+s + 1}.0.0-0`)
                : f && (n = `>=${s}.${a}.0${c} <${s}.${+a + 1}.0-0`),
          jm("xRange return", n),
          n
        );
      });
    },
    Hhu = (t, e) => (jm("replaceStars", t, e), t.trim().replace(T5[VA.STAR], "")),
    Vhu = (t, e) => (jm("replaceGTE0", t, e), t.trim().replace(T5[e.includePrerelease ? VA.GTE0PRE : VA.GTE0], "")),
    Whu = (t) => (e, r, n, o, s, a, u, c, m, d, f, p) => (
      D5(n)
        ? (r = "")
        : D5(o)
          ? (r = `>=${n}.0.0${t ? "-0" : ""}`)
          : D5(s)
            ? (r = `>=${n}.${o}.0${t ? "-0" : ""}`)
            : a
              ? (r = `>=${r}`)
              : (r = `>=${r}${t ? "-0" : ""}`),
      D5(m)
        ? (c = "")
        : D5(d)
          ? (c = `<${+m + 1}.0.0-0`)
          : D5(f)
            ? (c = `<${m}.${+d + 1}.0-0`)
            : p
              ? (c = `<=${m}.${d}.${f}-${p}`)
              : t
                ? (c = `<${m}.${d}.${+f + 1}-0`)
                : (c = `<=${c}`),
      `${r} ${c}`.trim()
    ),
    zhu = (t, e, r) => {
      for (let n = 0; n < t.length; n++) if (!t[n].test(e)) return !1;
      if (e.prerelease.length && !r.includePrerelease) {
        for (let n = 0; n < t.length; n++)
          if ((jm(t[n].semver), t[n].semver !== jEr.ANY && t[n].semver.prerelease.length > 0)) {
            let o = t[n].semver;
            if (o.major === e.major && o.minor === e.minor && o.patch === e.patch) return !0;
          }
        return !1;
      }
      return !0;
    };
});