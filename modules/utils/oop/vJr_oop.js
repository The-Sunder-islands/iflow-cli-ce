/**
 * @module vJr
 * @category utils/oop
 * @label oop
 * @position 407 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (vJr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var vJr = T((tFe) => {
  "use strict";
  Object.defineProperty(tFe, "__esModule", { value: !0 });
  tFe.satisfies = void 0;
  var Ewt = (Zt(), bt(cr)),
    AJr =
      /^(?:v)?(?<version>(?<major>0|[1-9]\d*)\.(?<minor>0|[1-9]\d*)\.(?<patch>0|[1-9]\d*))(?:-(?<prerelease>(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+(?<build>[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/,
    lPo =
      /^(?<op><|>|=|==|<=|>=|~|\^|~>)?\s*(?:v)?(?<version>(?<major>x|X|\*|0|[1-9]\d*)(?:\.(?<minor>x|X|\*|0|[1-9]\d*))?(?:\.(?<patch>x|X|\*|0|[1-9]\d*))?)(?:-(?<prerelease>(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+(?<build>[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/,
    mPo = { ">": [1], ">=": [0, 1], "=": [0], "<=": [-1, 0], "<": [-1], "!=": [-1, 1] };
  function dPo(t, e, r) {
    if (!fPo(t)) return (Ewt.diag.error(`Invalid version: ${t}`), !1);
    if (!e) return !0;
    e = e.replace(/([<>=~^]+)\s+/g, "$1");
    let n = bPo(t);
    if (!n) return !1;
    let o = [],
      s = yJr(n, e, o, r);
    return s && !r?.includePrerelease ? hPo(n, o) : s;
  }
  tFe.satisfies = dPo;
  function fPo(t) {
    return typeof t == "string" && AJr.test(t);
  }
  function yJr(t, e, r, n) {
    if (e.includes("||")) {
      let o = e.trim().split("||");
      for (let s of o) if (Awt(t, s, r, n)) return !0;
      return !1;
    } else if (e.includes(" - ")) e = FPo(e, n);
    else if (e.includes(" ")) {
      let o = e
        .trim()
        .replace(/\s{2,}/g, " ")
        .split(" ");
      for (let s of o) if (!Awt(t, s, r, n)) return !1;
      return !0;
    }
    return Awt(t, e, r, n);
  }
  function Awt(t, e, r, n) {
    if (((e = gPo(e, n)), e.includes(" "))) return yJr(t, e, r, n);
    {
      let o = APo(e);
      return (r.push(o), pPo(t, o));
    }
  }
  function pPo(t, e) {
    if (e.invalid) return !1;
    if (!e.version || _wt(e.version)) return !0;
    let r = hJr(t.versionSegments || [], e.versionSegments || []);
    if (r === 0) {
      let n = t.prereleaseSegments || [],
        o = e.prereleaseSegments || [];
      !n.length && !o.length
        ? (r = 0)
        : !n.length && o.length
          ? (r = 1)
          : n.length && !o.length
            ? (r = -1)
            : (r = hJr(n, o));
    }
    return mPo[e.op]?.includes(r);
  }
  function hPo(t, e) {
    return t.prerelease ? e.some((r) => r.prerelease && r.version === t.version) : !0;
  }
  function gPo(t, e) {
    return ((t = t.trim()), (t = LPo(t, e)), (t = BPo(t)), (t = MPo(t, e)), (t = t.trim()), t);
  }
  function l2(t) {
    return !t || t.toLowerCase() === "x" || t === "*";
  }
  function bPo(t) {
    let e = t.match(AJr);
    if (!e) {
      Ewt.diag.error(`Invalid version: ${t}`);
      return;
    }
    let r = e.groups.version,
      n = e.groups.prerelease,
      o = e.groups.build,
      s = r.split("."),
      a = n?.split(".");
    return {
      op: void 0,
      version: r,
      versionSegments: s,
      versionSegmentCount: s.length,
      prerelease: n,
      prereleaseSegments: a,
      prereleaseSegmentCount: a ? a.length : 0,
      build: o,
    };
  }
  function APo(t) {
    if (!t) return {};
    let e = t.match(lPo);
    if (!e) return (Ewt.diag.error(`Invalid range: ${t}`), { invalid: !0 });
    let r = e.groups.op,
      n = e.groups.version,
      o = e.groups.prerelease,
      s = e.groups.build,
      a = n.split("."),
      u = o?.split(".");
    return (
      r === "==" && (r = "="),
      {
        op: r || "=",
        version: n,
        versionSegments: a,
        versionSegmentCount: a.length,
        prerelease: o,
        prereleaseSegments: u,
        prereleaseSegmentCount: u ? u.length : 0,
        build: s,
      }
    );
  }
  function _wt(t) {
    return t === "*" || t === "x" || t === "X";
  }
  function pJr(t) {
    let e = parseInt(t, 10);
    return isNaN(e) ? t : e;
  }
  function yPo(t, e) {
    if (typeof t == typeof e) {
      if (typeof t == "number") return [t, e];
      if (typeof t == "string") return [t, e];
      throw new Error("Version segments can only be strings or numbers");
    } else return [String(t), String(e)];
  }
  function _Po(t, e) {
    if (_wt(t) || _wt(e)) return 0;
    let [r, n] = yPo(pJr(t), pJr(e));
    return r > n ? 1 : r < n ? -1 : 0;
  }
  function hJr(t, e) {
    for (let r = 0; r < Math.max(t.length, e.length); r++) {
      let n = _Po(t[r] || "0", e[r] || "0");
      if (n !== 0) return n;
    }
    return 0;
  }
  var _Jr = "[a-zA-Z0-9-]",
    EJr = "0|[1-9]\\d*",
    EPo = `\\d*[a-zA-Z-]${_Jr}*`,
    vPo = "((?:<|>)?=?)",
    gJr = `(?:${EJr}|${EPo})`,
    CPo = `(?:-(${gJr}(?:\\.${gJr})*))`,
    bJr = `${_Jr}+`,
    SPo = `(?:\\+(${bJr}(?:\\.${bJr})*))`,
    ywt = `${EJr}|x|X|\\*`,
    jge = `[v=\\s]*(${ywt})(?:\\.(${ywt})(?:\\.(${ywt})(?:${CPo})?${SPo}?)?)?`,
    wPo = `^${vPo}\\s*${jge}$`,
    xPo = new RegExp(wPo),
    TPo = `^\\s*(${jge})\\s+-\\s+(${jge})\\s*$`,
    DPo = new RegExp(TPo),
    IPo = "(?:~>?)",
    RPo = `^${IPo}${jge}$`,
    kPo = new RegExp(RPo),
    OPo = "(?:\\^)",
    NPo = `^${OPo}${jge}$`,
    PPo = new RegExp(NPo);
  function BPo(t) {
    let e = kPo;
    return t.replace(e, (r, n, o, s, a) => {
      let u;
      return (
        l2(n)
          ? (u = "")
          : l2(o)
            ? (u = `>=${n}.0.0 <${+n + 1}.0.0-0`)
            : l2(s)
              ? (u = `>=${n}.${o}.0 <${n}.${+o + 1}.0-0`)
              : a
                ? (u = `>=${n}.${o}.${s}-${a} <${n}.${+o + 1}.0-0`)
                : (u = `>=${n}.${o}.${s} <${n}.${+o + 1}.0-0`),
        u
      );
    });
  }
  function LPo(t, e) {
    let r = PPo,
      n = e?.includePrerelease ? "-0" : "";
    return t.replace(r, (o, s, a, u, c) => {
      let m;
      return (
        l2(s)
          ? (m = "")
          : l2(a)
            ? (m = `>=${s}.0.0${n} <${+s + 1}.0.0-0`)
            : l2(u)
              ? s === "0"
                ? (m = `>=${s}.${a}.0${n} <${s}.${+a + 1}.0-0`)
                : (m = `>=${s}.${a}.0${n} <${+s + 1}.0.0-0`)
              : c
                ? s === "0"
                  ? a === "0"
                    ? (m = `>=${s}.${a}.${u}-${c} <${s}.${a}.${+u + 1}-0`)
                    : (m = `>=${s}.${a}.${u}-${c} <${s}.${+a + 1}.0-0`)
                  : (m = `>=${s}.${a}.${u}-${c} <${+s + 1}.0.0-0`)
                : s === "0"
                  ? a === "0"
                    ? (m = `>=${s}.${a}.${u}${n} <${s}.${a}.${+u + 1}-0`)
                    : (m = `>=${s}.${a}.${u}${n} <${s}.${+a + 1}.0-0`)
                  : (m = `>=${s}.${a}.${u} <${+s + 1}.0.0-0`),
        m
      );
    });
  }
  function MPo(t, e) {
    let r = xPo;
    return t.replace(r, (n, o, s, a, u, c) => {
      let m = l2(s),
        d = m || l2(a),
        f = d || l2(u),
        p = f;
      return (
        o === "=" && p && (o = ""),
        (c = e?.includePrerelease ? "-0" : ""),
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
        n
      );
    });
  }
  function FPo(t, e) {
    let r = DPo;
    return t.replace(
      r,
      (n, o, s, a, u, c, m, d, f, p, h, g) => (
        l2(s)
          ? (o = "")
          : l2(a)
            ? (o = `>=${s}.0.0${e?.includePrerelease ? "-0" : ""}`)
            : l2(u)
              ? (o = `>=${s}.${a}.0${e?.includePrerelease ? "-0" : ""}`)
              : c
                ? (o = `>=${o}`)
                : (o = `>=${o}${e?.includePrerelease ? "-0" : ""}`),
        l2(f)
          ? (d = "")
          : l2(p)
            ? (d = `<${+f + 1}.0.0-0`)
            : l2(h)
              ? (d = `<${f}.${+p + 1}.0-0`)
              : g
                ? (d = `<=${f}.${p}.${h}-${g}`)
                : e?.includePrerelease
                  ? (d = `<${f}.${p}.${+h + 1}-0`)
                  : (d = `<=${d}`),
        `${o} ${d}`.trim()
      ),
    );
  }
});