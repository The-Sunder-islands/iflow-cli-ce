/**
 * @module n1r
 * @category unknown
 * @label unknown
 * @position 1619 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (n1r) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var n1r = T(($Y) => {
  "use strict";
  Object.defineProperty($Y, "__esModule", { value: !0 });
  $Y.createDeferred = $Y.deferred = void 0;
  function r1r() {
    let t,
      e,
      r = "pending";
    return {
      promise: new Promise((o, s) => {
        ((t = o), (e = s));
      }),
      done(o) {
        r === "pending" && ((r = "resolved"), t(o));
      },
      fail(o) {
        r === "pending" && ((r = "rejected"), e(o));
      },
      get fulfilled() {
        return r !== "pending";
      },
      get status() {
        return r;
      },
    };
  }
  $Y.deferred = r1r;
  $Y.createDeferred = r1r;
  $Y.default = r1r;
});
import { Buffer as V6a } from "node:buffer";
import { spawn as Dya } from "child_process";
import { normalize as q_a } from "node:path";
import { EventEmitter as VEa } from "node:events";
function H6a(...t) {
  let e = new String(t);
  return (cct.set(e, t), e);
}
function ict(t) {
  return t instanceof String && cct.has(t);
}
function Gci(t) {
  return cct.get(t) || [];
}
function vli(t) {
  return typeof t != "function" ? GY : t;
}
function Cli(t) {
  return typeof t == "function" && t !== GY;
}
function Sli(t, e) {
  let r = t.indexOf(e);
  return r <= 0 ? [t, ""] : [t.substr(0, r), t.substr(r + 1)];
}
function wli(t, e = 0) {
  return xli(t) && t.length > e ? t[e] : void 0;
}
function QY(t, e = 0) {
  if (xli(t) && t.length > e) return t[t.length - 1 - e];
}
function xli(t) {
  return pct(t);
}
function V4e(
  t = "",
  e = !0,
  r = `
`,
) {
  return t.split(r).reduce((n, o) => {
    let s = e ? o.trim() : o;
    return (s && n.push(s), n);
  }, []);
}
function x1r(t, e) {
  return V4e(t, !0).map((r) => e(r));
}
function T1r(t) {
  return (0, lct.exists)(t, lct.FOLDER);
}
function wc(t, e) {
  return (Array.isArray(t) ? t.includes(e) || t.push(e) : t.add(e), e);
}
function Tli(t, e) {
  return (Array.isArray(t) && !t.includes(e) && t.push(e), t);
}
function mct(t, e) {
  if (Array.isArray(t)) {
    let r = t.indexOf(e);
    r >= 0 && t.splice(r, 1);
  } else t.delete(e);
  return e;
}
function zD(t) {
  return Array.isArray(t) ? t : [t];
}
function Dli(t) {
  return t.replace(/[\s-]+(.)/g, (e, r) => r.toUpperCase());
}
function Z0e(t) {
  return zD(t).map((e) => (e instanceof String ? e : String(e)));
}
function X0(t, e = 0) {
  if (t == null) return e;
  let r = parseInt(t, 10);
  return Number.isNaN(r) ? e : r;
}
function Q4e(t, e) {
  let r = [];
  for (let n = 0, o = t.length; n < o; n++) r.push(e, t[n]);
  return r;
}
function G4e(t) {
  return (Array.isArray(t) ? V6a.concat(t) : t).toString("utf-8");
}
function Ili(t, e) {
  let r = {};
  return (
    e.forEach((n) => {
      t[n] !== void 0 && (r[n] = t[n]);
    }),
    r
  );
}
function l1r(t = 0) {
  return new Promise((e) => setTimeout(e, t));
}
function m1r(t) {
  if (t !== !1) return t;
}
function iy(t, e, r) {
  return e(t) ? t : arguments.length > 2 ? r : void 0;
}
function d1r(t, e) {
  let r = ict(t) ? "string" : typeof t;
  return /number|string|boolean/.test(r) && (!e || !e.includes(r));
}
function fct(t) {
  return !!t && W4e(t) === "[object Object]";
}
function Rli(t) {
  return typeof t == "function";
}
function Y6a() {
  throw new Error("LineParser:useMatches not implemented");
}
function Nli(...t) {
  let e = process.cwd(),
    r = Object.assign({ baseDir: e, ...Pli }, ...t.filter((n) => typeof n == "object" && n));
  return ((r.baseDir = r.baseDir || e), (r.trimmed = r.trimmed === !0), r);
}
function I1r(t, e = []) {
  return fct(t)
    ? Object.keys(t).reduce((r, n) => {
        let o = t[n];
        if (ict(o)) r.push(o);
        else if (d1r(o, ["boolean"])) r.push(n + "=" + o);
        else if (Array.isArray(o)) for (let s of o) d1r(s, ["string", "number"]) || r.push(n + "=" + s);
        else r.push(n);
        return r;
      }, e)
    : e;
}
function m9(t, e = 0, r = !1) {
  let n = [];
  for (let o = 0, s = e < 0 ? t.length : e; o < s; o++) "string|number".includes(typeof t[o]) && n.push(String(t[o]));
  return (I1r(R1r(t), n), r || n.push(...X6a(t)), n);
}
function X6a(t) {
  let e = typeof QY(t) == "function";
  return Z0e(iy(QY(t, e ? 1 : 0), z4e, []));
}
function R1r(t) {
  let e = Rli(QY(t));
  return iy(QY(t, e ? 1 : 0), fct);
}
function v1(t, e = !0) {
  let r = vli(QY(t));
  return e || Cli(r) ? r : void 0;
}
function p1r(t, e) {
  return t(e.stdOut, e.stdErr);
}
function f9(t, e, r, n = !0) {
  return (
    zD(r).forEach((o) => {
      for (let s = V4e(o, n), a = 0, u = s.length; a < u; a++) {
        let c = (m = 0) => {
          if (!(a + m >= u)) return s[a + m];
        };
        e.some(({ parse: m }) => m(c, t));
      }
    }),
    t
  );
}
function tya(t) {
  switch (t) {
    case "bare":
      return Fli();
    case "root":
      return Mli();
  }
  return { commands: ["rev-parse", "--is-inside-work-tree"], format: "utf-8", onError: hct, parser: k1r };
}
function Mli() {
  return {
    commands: ["rev-parse", "--git-dir"],
    format: "utf-8",
    onError: hct,
    parser(e) {
      return /^\.(git)?$/.test(e.trim());
    },
  };
}
function Fli() {
  return { commands: ["rev-parse", "--is-bare-repository"], format: "utf-8", onError: hct, parser: k1r };
}
function rya(t) {
  return /(Not a git repository|Kein Git-Repository)/i.test(String(t));
}
function nya(t, e) {
  let r = new $li(t),
    n = t ? Qli : jli;
  return (
    V4e(e).forEach((o) => {
      let s = o.replace(n, "");
      (r.paths.push(s), (Gli.test(s) ? r.folders : r.files).push(s));
    }),
    r
  );
}
function qli(t) {
  return { commands: gct, format: "empty", parser: t };
}
function d9(t) {
  return {
    commands: gct,
    format: "empty",
    parser() {
      throw typeof t == "string" ? new _li(t) : t;
    },
  };
}
function K2(t, e = !1) {
  return {
    commands: t,
    format: "utf-8",
    parser(r) {
      return e ? String(r).trim() : r;
    },
  };
}
function Hli(t) {
  return {
    commands: t,
    format: "buffer",
    parser(e) {
      return e;
    },
  };
}
function Vli(t) {
  return t.format === "buffer";
}
function Wli(t) {
  return t.format === "empty" || !t.commands.length;
}
function oya(t, e) {
  let { cleanMode: r, options: n, valid: o } = aya(t);
  return r ? (o.options ? (n.push(...e), n.some(lya) ? d9(O1r) : Yli(r, n)) : d9(P1r + JSON.stringify(t))) : d9(N1r);
}
function Yli(t, e) {
  return {
    commands: ["clean", `-${t}`, ...e],
    format: "utf-8",
    parser(n) {
      return nya(t === "n", n);
    },
  };
}
function sya(t) {
  return Array.isArray(t) && t.every((e) => B1r.has(e));
}
function aya(t) {
  let e,
    r = [],
    n = { cleanMode: !1, options: !0 };
  return (
    t
      .replace(/[^a-z]i/g, "")
      .split("")
      .forEach((o) => {
        uya(o) ? ((e = o), (n.cleanMode = !0)) : (n.options = n.options && cya((r[r.length] = `-${o}`)));
      }),
    { cleanMode: e, options: r, valid: n }
  );
}
function uya(t) {
  return t === "f" || t === "n";
}
function cya(t) {
  return /^-[a-z]$/i.test(t) && B1r.has(t.charAt(1));
}
function lya(t) {
  return /^-[^\-]/.test(t) ? t.indexOf("i") > 0 : t === "--interactive";
}
function mya(t) {
  let e = new Xli();
  for (let r of Jli(t)) e.addValue(r.file, String(r.key), r.value);
  return e;
}
function dya(t, e) {
  let r = null,
    n = [],
    o = new Map();
  for (let s of Jli(t, e))
    s.key === e && (n.push((r = s.value)), o.has(s.file) || o.set(s.file, []), o.get(s.file).push(r));
  return { key: e, paths: Array.from(o.keys()), scopes: o, value: r, values: n };
}
function fya(t) {
  return t.replace(/^(file):/, "");
}
function* Jli(t, e = null) {
  let r = t.split("\0");
  for (let n = 0, o = r.length - 1; n < o; ) {
    let s = fya(r[n++]),
      a = r[n++],
      u = e;
    if (
      a.includes(`
`)
    ) {
      let c = Sli(
        a,
        `
`,
      );
      ((u = c[0]), (a = c[1]));
    }
    yield { file: s, key: u, value: a };
  }
}
function i1r(t, e) {
  return typeof t == "string" && Object.hasOwn(b1r, t) ? t : e;
}
function hya(t, e, r, n) {
  let o = ["config", `--${n}`];
  return (
    r && o.push("--add"),
    o.push(t, e),
    {
      commands: o,
      format: "utf-8",
      parser(s) {
        return s;
      },
    }
  );
}
function gya(t, e) {
  let r = ["config", "--null", "--show-origin", "--get-all", t];
  return (
    e && r.splice(1, 0, `--${e}`),
    {
      commands: r,
      format: "utf-8",
      parser(n) {
        return dya(n, t);
      },
    }
  );
}
function bya(t) {
  let e = ["config", "--list", "--show-origin", "--null"];
  return (
    t && e.push(`--${t}`),
    {
      commands: e,
      format: "utf-8",
      parser(r) {
        return mya(r);
      },
    }
  );
}
function Aya() {
  return {
    addConfig(t, e, ...r) {
      return this._runTask(hya(t, e, r[0] === !0, i1r(r[1], "local")), v1(arguments));
    },
    getConfig(t, e) {
      return this._runTask(gya(t, i1r(e, void 0)), v1(arguments));
    },
    listConfig(...t) {
      return this._runTask(bya(i1r(t[0], void 0)), v1(arguments));
    },
  };
}
function yya(t) {
  return e0i.has(t);
}
function _ya(...t) {
  return new n0i().param(...t);
}
function Eya(t) {
  let e = new Set(),
    r = {};
  return (
    x1r(t, (n) => {
      let [o, s, a] = n.split(J0e);
      (e.add(o), (r[o] = r[o] || []).push({ line: X0(s), path: o, preview: a }));
    }),
    { paths: e, results: r }
  );
}
function vya() {
  return {
    grep(t) {
      let e = v1(arguments),
        r = m9(arguments);
      for (let o of r0i) if (r.includes(o)) return this._runTask(d9(`git.grep: use of "${o}" is not supported.`), e);
      typeof t == "string" && (t = _ya().param(t));
      let n = ["grep", "--null", "-n", "--full-name", ...r, ...t];
      return this._runTask(
        {
          commands: n,
          format: "utf-8",
          parser(o) {
            return Eya(o);
          },
        },
        e,
      );
    },
  };
}
function Cya(t, e) {
  let r = ["reset"];
  return (s0i(t) && r.push(`--${t}`), r.push(...e), K2(r));
}
function Sya(t) {
  if (s0i(t)) return t;
  switch (typeof t) {
    case "string":
    case "undefined":
      return "soft";
  }
}
function s0i(t) {
  return typeof t == "string" && a0i.includes(t);
}
function wya() {
  return (0, act.default)("simple-git");
}
function Hci(t, e, r) {
  return !e || !String(e).replace(/\s*/, "")
    ? r
      ? (n, ...o) => {
          (t(n, ...o), r(n, ...o));
        }
      : t
    : (n, ...o) => {
        (t(`%s ${n}`, e, ...o), r && r(n, ...o));
      };
}
function xya(t, e, { namespace: r }) {
  if (typeof t == "string") return t;
  let n = (e && e.namespace) || "";
  return n.startsWith(r) ? n.substr(r.length + 1) : n || r;
}
function L1r(t, e, r, n = wya()) {
  let o = (t && `[${t}]`) || "",
    s = [],
    a = typeof e == "string" ? n.extend(e) : e,
    u = xya(iy(e, m3), a, n);
  return m(r);
  function c(d, f) {
    return wc(s, L1r(t, u.replace(/^[^:]+/, d), f, n));
  }
  function m(d) {
    let f = (d && `[${d}]`) || "",
      p = (a && Hci(a, f)) || GY,
      h = Hci(n, `${o} ${f}`, p);
    return Object.assign(a ? p : h, { label: t, sibling: c, info: h, step: m });
  }
}
function jY(t, e) {
  return { method: wli(t.commands) || "", commands: e };
}
function Iya(t, e) {
  return (r) => {
    (e("[ERROR] child process exception %o", r), t.push(Buffer.from(String(r.stack), "ascii")));
  };
}
function Vci(t, e, r, n) {
  return (o) => {
    (r("%s received %L bytes", e, o), n("%B", o), t.push(o));
  };
}
function Oya(t, e, r = GY) {
  let n = (s) => {
      r(null, s);
    },
    o = (s) => {
      s?.task === t && r(s instanceof H4e ? Nya(s) : s, void 0);
    };
  e.then(n, o);
}
function Nya(t) {
  let e = (n) => {
    (console.warn(
      `simple-git deprecation notice: accessing GitResponseError.${n} should be GitResponseError.git.${n}, this will no longer be available in version 3`,
    ),
      (e = GY));
  };
  return Object.create(t, Object.getOwnPropertyNames(t.git).reduce(r, {}));
  function r(n, o) {
    return (
      o in t ||
        (n[o] = {
          enumerable: !1,
          configurable: !1,
          get() {
            return (e(o), t.git[o]);
          },
        }),
      n
    );
  }
}
function Wci(t, e) {
  return qli((r) => {
    if (!T1r(t)) throw new Error(`Git.cwd: cannot change to non-directory "${t}"`);
    return ((e || r).cwd = t);
  });
}
function s1r(t) {
  let e = ["checkout", ...t];
  return (e[1] === "-b" && e.includes("-B") && (e[1] = mct(e, "-B")), K2(e));
}
function Lya() {
  return {
    checkout() {
      return this._runTask(s1r(m9(arguments, 1)), v1(arguments));
    },
    checkoutBranch(t, e) {
      return this._runTask(s1r(["-b", t, e, ...m9(arguments)]), v1(arguments));
    },
    checkoutLocalBranch(t) {
      return this._runTask(s1r(["-b", t, ...m9(arguments)]), v1(arguments));
    },
  };
}
function Fya() {
  return { count: 0, garbage: 0, inPack: 0, packs: 0, prunePackable: 0, size: 0, sizeGarbage: 0, sizePack: 0 };
}
function Uya() {
  return {
    countObjects() {
      return this._runTask({
        commands: ["count-objects", "--verbose"],
        format: "utf-8",
        parser(t) {
          return f9(Fya(), [f0i], t);
        },
      });
    },
  };
}
function jya(t) {
  return f9(
    { author: null, branch: "", commit: "", root: !1, summary: { changes: 0, insertions: 0, deletions: 0 } },
    p0i,
    t,
  );
}
function Gya(t, e, r) {
  return { commands: ["-c", "core.abbrev=40", "commit", ...Q4e(t, "-m"), ...e, ...r], format: "utf-8", parser: jya };
}
function qya() {
  return {
    commit(e, ...r) {
      let n = v1(arguments),
        o = t(e) || Gya(zD(e), zD(iy(r[0], oct, [])), [...Z0e(iy(r[1], z4e, [])), ...m9(arguments, 0, !0)]);
      return this._runTask(o, n);
    },
  };
  function t(e) {
    return !oct(e) && d9("git.commit: requires the commit message to be supplied as a string/string[]");
  }
}
function Vya() {
  return {
    firstCommit() {
      return this._runTask(K2(["rev-list", "--max-parents=0", "HEAD"], !0), v1(arguments));
    },
  };
}
function zya(t, e) {
  let r = ["hash-object", t];
  return (e && r.push("-w"), K2(r, !0));
}
function Kya(t, e, r) {
  let n = String(r).trim(),
    o;
  if ((o = h0i.exec(n))) return new rct(t, e, !1, o[1]);
  if ((o = g0i.exec(n))) return new rct(t, e, !0, o[1]);
  let s = "",
    a = n.split(" ");
  for (; a.length; )
    if (a.shift() === "in") {
      s = a.join(" ");
      break;
    }
  return new rct(t, e, /^re/i.test(n), s);
}
function Xya(t) {
  return t.includes(M1r);
}
function Zya(t = !1, e, r) {
  let n = ["init", ...r];
  return (
    t && !Xya(n) && n.splice(1, 0, M1r),
    {
      commands: n,
      format: "utf-8",
      parser(o) {
        return Kya(n.includes("--bare"), e, o);
      },
    }
  );
}
function F1r(t) {
  for (let e = 0; e < t.length; e++) {
    let r = U1r.exec(t[e]);
    if (r) return `--${r[1]}`;
  }
  return "";
}
function t_a(t) {
  return U1r.test(t);
}
function A0i(t = "") {
  let e = y0i[t];
  return (r) => f9(new b0i(), e, r, !1);
}
function n_a(t, e) {
  return e.reduce((r, n, o) => ((r[n] = t[o] || ""), r), Object.create({ diff: null }));
}
function E0i(t = Q1r, e = v0i, r = "") {
  let n = A0i(r);
  return function (o) {
    let s = V4e(o.trim(), !1, $1r).map(function (a) {
      let u = a.split(j1r),
        c = n_a(u[0].split(t), e);
      return (u.length > 1 && u[1].trim() && (c.diff = n(u[1])), c);
    });
    return { all: s, latest: (s.length && s[0]) || null, total: s.length };
  };
}
function i_a(t) {
  let e = F1r(t),
    r = ["diff"];
  return (
    e === "" && ((e = "--stat"), r.push("--stat=4096")),
    r.push(...t),
    bct(r) || { commands: r, format: "utf-8", parser: A0i(e) }
  );
}
function bct(t) {
  let e = t.filter(t_a);
  if (e.length > 1) return d9(`Summary flags are mutually exclusive - pick one of ${e.join(",")}`);
  if (e.length && t.includes("-z"))
    return d9(`Summary flag ${e} parsing is not compatible with null termination option '-z'`);
}
function o_a(t, e) {
  let r = [],
    n = [];
  return (
    Object.keys(t).forEach((o) => {
      (r.push(o), n.push(String(t[o])));
    }),
    [r, n.join(e)]
  );
}
function s_a(t) {
  return Object.keys(t).reduce((e, r) => (r in _1r || (e[r] = t[r]), e), {});
}
function w0i(t = {}, e = []) {
  let r = iy(t.splitter, m3, Q1r),
    n = fct(t.format)
      ? t.format
      : {
          hash: "%H",
          date: t.strictDate === !1 ? "%ai" : "%aI",
          message: "%s",
          refs: "%D",
          body: t.multiLine ? "%B" : "%b",
          author_name: t.mailMap !== !1 ? "%aN" : "%an",
          author_email: t.mailMap !== !1 ? "%aE" : "%ae",
        },
    [o, s] = o_a(n, r),
    a = [],
    u = [`--pretty=format:${$1r}${s}${j1r}`, ...e],
    c = t.n || t["max-count"] || t.maxCount;
  if ((c && u.push(`--max-count=${c}`), t.from || t.to)) {
    let m = t.symmetric !== !1 ? "..." : "..";
    a.push(`${t.from || ""}${m}${t.to || ""}`);
  }
  return (
    m3(t.file) && u.push("--follow", H6a(t.file)),
    I1r(s_a(t), u),
    { fields: o, splitter: r, commands: [...u, ...a] }
  );
}
function a_a(t, e, r) {
  let n = E0i(t, e, F1r(r));
  return { commands: ["log", ...r], format: "utf-8", parser: n };
}
function u_a() {
  return {
    log(...r) {
      let n = v1(arguments),
        o = w0i(R1r(arguments), Z0e(iy(arguments[0], z4e, []))),
        s = e(...r) || bct(o.commands) || t(o);
      return this._runTask(s, n);
    },
  };
  function t(r) {
    return a_a(r.splitter, r.fields, r.commands);
  }
  function e(r, n) {
    return (
      m3(r) && m3(n) && d9("git.log(string, string) should be replaced with git.log({ from: string, to: string })")
    );
  }
}
function u1r(t) {
  return (t.objects = t.objects || {
    compressing: 0,
    counting: 0,
    enumerating: 0,
    packReused: 0,
    reused: { count: 0, delta: 0 },
    total: { count: 0, delta: 0 },
  });
}
function Jci(t) {
  let e = /^\s*(\d+)/.exec(t),
    r = /delta (\d+)/i.exec(t);
  return { count: X0((e && e[1]) || "0"), delta: X0((r && r[1]) || "0") };
}
function R0i(t, e) {
  return f9({ remoteMessages: new O0i() }, k0i, e);
}
function d_a(t, e) {
  let r = f9(new D0i(), P0i, [t, e]);
  return r.message && r;
}
function oli(t) {
  return t.length
    ? {
        commands: ["merge", ...t],
        format: "utf-8",
        parser(e, r) {
          let n = L0i(e, r);
          if (n.failed) throw new H4e(n);
          return n;
        },
      }
    : d9("Git.merge requires at least one option");
}
function h_a(t, e, r) {
  let n = r.includes("deleted"),
    o = r.includes("tag") || /^refs\/tags/.test(t),
    s = !r.includes("new");
  return { deleted: n, tag: o, branch: !o, new: !s, alreadyUpdated: s, local: t, remote: e };
}
function b_a(t = {}, e) {
  return (wc(e, "--tags"), H1r(t, e));
}
function H1r(t = {}, e) {
  let r = ["push", ...e];
  return (
    t.branch && r.splice(1, 0, t.branch),
    t.remote && r.splice(1, 0, t.remote),
    mct(r, "-v"),
    wc(r, "--verbose"),
    wc(r, "--porcelain"),
    { commands: r, format: "utf-8", parser: M0i }
  );
}
function A_a() {
  return {
    showBuffer() {
      let t = ["show", ...m9(arguments, 1)];
      return (t.includes("--binary") || t.splice(1, 0, "--binary"), this._runTask(Hli(t), v1(arguments)));
    },
    show() {
      let t = ["show", ...m9(arguments, 1)];
      return this._runTask(K2(t), v1(arguments));
    },
  };
}
function cli(t) {
  let [e, r] = t.split(J0e);
  return { from: r || e, to: e };
}
function ny(t, e, r) {
  return [`${t}${e}`, r];
}
function c1r(t, ...e) {
  return e.map((r) => ny(t, r, (n, o) => wc(n.conflicted, o)));
}
function E_a(t, e) {
  let r = e.trim();
  switch (" ") {
    case r.charAt(2):
      return n(r.charAt(0), r.charAt(1), r.substr(3));
    case r.charAt(1):
      return n(" ", r.charAt(0), r.substr(2));
    default:
      return;
  }
  function n(o, s, a) {
    let u = `${o}${s}`,
      c = j0i.get(u);
    (c && c(t, a), u !== "##" && u !== "!!" && t.files.push(new $0i(a, o, s)));
  }
}
function C_a(t) {
  return {
    format: "utf-8",
    commands: ["status", "--porcelain", "-b", "-u", "--null", ...t.filter((r) => !G0i.includes(r))],
    parser(r) {
      return Q0i(r);
    },
  };
}
function uct(t = 0, e = 0, r = 0, n = "", o = !0) {
  return Object.defineProperty({ major: t, minor: e, patch: r, agent: n, installed: o }, "toString", {
    value() {
      return `${this.major}.${this.minor}.${this.patch}`;
    },
    configurable: !1,
    enumerable: !1,
  });
}
function w_a() {
  return uct(0, 0, 0, "", !1);
}
function x_a() {
  return {
    version() {
      return this._runTask({
        commands: ["--version"],
        format: "utf-8",
        parser: T_a,
        onError(t, e, r, n) {
          if (t.exitCode === -2) return r(Buffer.from(V1r));
          n(e);
        },
      });
    },
  };
}
function T_a(t) {
  return t === V1r ? w_a() : f9(uct(0, 0, 0, t), q0i, t);
}
function k_a(t, e) {
  return K2(["apply", ...e, ...t]);
}
function N_a(t, e) {
  return { branch: t, hash: e, success: !0 };
}
function P_a(t) {
  return { branch: t, hash: null, success: !1 };
}
function J0i(t, e) {
  return e === 1 && C1r.test(t);
}
function pli(t) {
  return t ? t.charAt(0) : "";
}
function Z0i(t, e = !1) {
  return f9(new X0i(), e ? [tmi] : emi, t);
}
function nmi(t) {
  let e = ["-d", "-D", "--delete"];
  return t.some((r) => e.includes(r));
}
function U_a(t) {
  let e = nmi(t),
    r = t.includes("--show-current"),
    n = ["branch", ...t];
  return (
    n.length === 1 && n.push("-a"),
    n.includes("-v") || n.splice(1, 0, "-v"),
    {
      format: "utf-8",
      commands: n,
      parser(o, s) {
        return e ? Act(o, s).all[0] : Z0i(o, r);
      },
    }
  );
}
function $_a() {
  return {
    format: "utf-8",
    commands: ["branch", "-v"],
    parser(t) {
      return Z0i(t);
    },
  };
}
function j_a(t, e = !1) {
  return {
    format: "utf-8",
    commands: ["branch", "-v", e ? "-D" : "-d", ...t],
    parser(r, n) {
      return Act(r, n);
    },
    onError({ exitCode: r, stdOut: n }, o, s, a) {
      if (!J0i(String(o), r)) return a(o);
      s(n);
    },
  };
}
function Q_a(t, e = !1) {
  let r = {
    format: "utf-8",
    commands: ["branch", "-v", e ? "-D" : "-d", t],
    parser(n, o) {
      return Act(n, o).branches[t];
    },
    onError({ exitCode: n, stdErr: o, stdOut: s }, a, u, c) {
      if (!J0i(String(a), n)) return c(a);
      throw new H4e(r.parser(G4e(s), G4e(o)), String(a));
    },
  };
  return r;
}
function H_a(t) {
  let e = t.trim().replace(/^["']|["']$/g, "");
  return e && q_a(e);
}
function W_a(t) {
  return { commands: ["check-ignore", ...t], format: "utf-8", parser: imi };
}
function Y_a(t) {
  return /^--upload-pack(=|$)/.test(t);
}
function ami(t, e, r) {
  let n = ["clone", ...r];
  return (
    m3(t) && n.push(t),
    m3(e) && n.push(e),
    n.find(Y_a) ? d9("git.fetch: potential exploit argument blocked.") : K2(n)
  );
}
function K_a(t, e, r) {
  return (wc(r, "--mirror"), ami(t, e, r));
}
function X_a(t, e) {
  return f9({ raw: t, remote: null, branches: [], tags: [], updated: [], deleted: [] }, umi, [t, e]);
}
function eEa(t) {
  return /^--upload-pack(=|$)/.test(t);
}
function tEa(t, e, r) {
  let n = ["fetch", ...r];
  return (
    t && e && n.push(t, e),
    n.find(eEa) ? d9("git.fetch: potential exploit argument blocked.") : { commands: n, format: "utf-8", parser: X_a }
  );
}
function nEa(t) {
  return f9({ moves: [] }, lmi, t);
}
function oEa(t, e) {
  return { commands: ["mv", "-v", ...zD(t), e], format: "utf-8", parser: nEa };
}
function aEa(t, e, r) {
  let n = ["pull", ...r];
  return (
    t && e && n.splice(1, 0, t, e),
    {
      commands: n,
      format: "utf-8",
      parser(o, s) {
        return q1r(o, s);
      },
      onError(o, s, a, u) {
        let c = d_a(G4e(o.stdOut), G4e(o.stdErr));
        if (c) return u(new H4e(c));
        u(s);
      },
    }
  );
}
function cEa(t) {
  let e = {};
  return (fmi(t, ([r]) => (e[r] = { name: r })), Object.values(e));
}
function lEa(t) {
  let e = {};
  return (
    fmi(t, ([r, n, o]) => {
      (Object.hasOwn(e, r) || (e[r] = { name: r, refs: { fetch: "", push: "" } }),
        o && n && (e[r].refs[o.replace(/[^a-z]/g, "")] = n));
    }),
    Object.values(e)
  );
}
function fmi(t, e) {
  x1r(t, (r) => e(r.split(/\s+/)));
}
function dEa(t, e, r) {
  return K2(["remote", "add", ...r, t, e]);
}
function fEa(t) {
  let e = ["remote"];
  return (t && e.push("-v"), { commands: e, format: "utf-8", parser: t ? lEa : cEa });
}
function pEa(t) {
  let e = [...t];
  return (e[0] !== "ls-remote" && e.unshift("ls-remote"), K2(e));
}
function hEa(t) {
  let e = [...t];
  return (e[0] !== "remote" && e.unshift("remote"), K2(e));
}
function gEa(t) {
  return K2(["remote", "remove", t]);
}
function AEa(t = {}, e) {
  let r = w0i(t),
    n = ["stash", "list", ...r.commands, ...e],
    o = E0i(r.splitter, r.fields, F1r(n));
  return bct(n) || { commands: n, format: "utf-8", parser: o };
}
function _Ea(t, e) {
  return yct(["add", t, e]);
}
function EEa(t) {
  return yct(["init", ...t]);
}
function yct(t) {
  let e = [...t];
  return (e[0] !== "submodule" && e.unshift("submodule"), K2(e));
}
function vEa(t) {
  return yct(["update", ...t]);
}
function SEa(t, e) {
  let r = Number.isNaN(t),
    n = Number.isNaN(e);
  return r !== n ? (r ? 1 : -1) : r ? bmi(t, e) : 0;
}
function bmi(t, e) {
  return t === e ? 0 : t > e ? 1 : -1;
}
function wEa(t) {
  return t.trim();
}
function Zut(t) {
  return (typeof t == "string" && parseInt(t.replace(/^\D+/g, ""), 10)) || 0;
}
function TEa(t = []) {
  let e = t.some((r) => /^--sort=/.test(r));
  return {
    format: "utf-8",
    commands: ["tag", "-l", ...t],
    parser(r) {
      return Ami(r, e);
    },
  };
}
function DEa(t) {
  return {
    format: "utf-8",
    commands: ["tag", t],
    parser() {
      return { name: t };
    },
  };
}
function IEa(t, e) {
  return {
    format: "utf-8",
    commands: ["tag", "-a", "-m", e, t],
    parser() {
      return { name: t };
    },
  };
}
function NEa(t) {
  return t
    ? [
        {
          type: "spawn.before",
          action(n, o) {
            t.aborted && o.kill(new sN(void 0, "abort", "Abort already signaled"));
          },
        },
        {
          type: "spawn.after",
          action(n, o) {
            function s() {
              o.kill(new sN(void 0, "abort", "Abort signal received"));
            }
            (t.addEventListener("abort", s), o.spawned.on("close", () => t.removeEventListener("abort", s)));
          },
        },
      ]
    : void 0;
}
function PEa(t) {
  return typeof t == "string" && t.trim().toLowerCase() === "-c";
}
function BEa(t, e) {
  if (PEa(t) && /^\s*protocol(.[a-z]+)?.allow/.test(e))
    throw new sN(
      void 0,
      "unsafe",
      "Configuring protocol.allow is not permitted without enabling allowUnsafeExtProtocol",
    );
}
function LEa(t, e) {
  if (/^\s*--(upload|receive)-pack/.test(t))
    throw new sN(
      void 0,
      "unsafe",
      "Use of --upload-pack or --receive-pack is not permitted without enabling allowUnsafePack",
    );
  if (e === "clone" && /^\s*-u\b/.test(t))
    throw new sN(void 0, "unsafe", "Use of clone with option -u is not permitted without enabling allowUnsafePack");
  if (e === "push" && /^\s*--exec\b/.test(t))
    throw new sN(void 0, "unsafe", "Use of push with option --exec is not permitted without enabling allowUnsafePack");
}
function MEa({ allowUnsafeProtocolOverride: t = !1, allowUnsafePack: e = !1 } = {}) {
  return {
    type: "spawn.args",
    action(r, n) {
      return (
        r.forEach((o, s) => {
          let a = s < r.length ? r[s + 1] : "";
          (t || BEa(o, a), e || LEa(o, n.method));
        }),
        r
      );
    },
  };
}
function FEa(t) {
  let e = Q4e(t, "-c");
  return {
    type: "spawn.args",
    action(r) {
      return [...e, ...r];
    },
  };
}
function UEa({ onClose: t = !0, onExit: e = 50 } = {}) {
  function r() {
    let o = -1,
      s = {
        close: (0, K0e.deferred)(),
        closeTimeout: (0, K0e.deferred)(),
        exit: (0, K0e.deferred)(),
        exitTimeout: (0, K0e.deferred)(),
      },
      a = Promise.race([t === !1 ? gli : s.closeTimeout.promise, e === !1 ? gli : s.exitTimeout.promise]);
    return (
      n(t, s.close, s.closeTimeout),
      n(e, s.exit, s.exitTimeout),
      {
        close(u) {
          ((o = u), s.close.done());
        },
        exit(u) {
          ((o = u), s.exit.done());
        },
        get exitCode() {
          return o;
        },
        result: a,
      }
    );
  }
  function n(o, s, a) {
    o !== !1 && (o === !0 ? s.promise : s.promise.then(() => l1r(o))).then(a.done);
  }
  return {
    type: "spawn.after",
    async action(o, { spawned: s, close: a }) {
      let u = r(),
        c = !0,
        m = () => void (c = !1);
      (s.stdout?.on("data", m),
        s.stderr?.on("data", m),
        s.on("error", m),
        s.on("close", (d) => u.close(d)),
        s.on("exit", (d) => u.exit(d)));
      try {
        (await u.result, c && (await l1r(50)), a(u.exitCode));
      } catch (d) {
        a(u.exitCode, d);
      }
    },
  };
}
function jEa(t) {
  return !t || !/^([a-z]:)?([a-z0-9/.\\_-]+)$/i.test(t);
}
function Ali(t, e) {
  if (t.length < 1 || t.length > 2) throw new sN(void 0, "binary", $Ea);
  if (t.some(jEa))
    if (e) console.warn(bli);
    else throw new sN(void 0, "binary", bli);
  let [n, o] = t;
  return { binary: n, prefix: o };
}
function QEa(t, e = ["git"], r = !1) {
  let n = Ali(zD(e), r);
  (t.on("binary", (o) => {
    n = Ali(zD(o), r);
  }),
    t.append("spawn.binary", () => n.binary),
    t.append("spawn.args", (o) => (n.prefix ? [n.prefix, ...o] : o)));
}
function GEa(t) {
  return !!(t.exitCode && t.stdErr.length);
}
function qEa(t) {
  return Buffer.concat([...t.stdOut, ...t.stdErr]);
}
function HEa(t = !1, e = GEa, r = qEa) {
  return (n, o) => ((!t && n) || !e(o) ? n : r(o));
}
function yli(t) {
  return {
    type: "task.error",
    action(e, r) {
      let n = t(e.error, { stdErr: r.stdErr, stdOut: r.stdOut, exitCode: r.exitCode });
      return Buffer.isBuffer(n) ? { error: new aN(void 0, n.toString("utf-8")) } : { error: n };
    },
  };
}
function zEa(t) {
  let e = "--progress",
    r = ["checkout", "clone", "fetch", "pull", "push"];
  return [
    {
      type: "spawn.args",
      action(s, a) {
        return r.includes(a.method) ? Tli(s, e) : s;
      },
    },
    {
      type: "spawn.after",
      action(s, a) {
        a.commands.includes(e) &&
          a.spawned.stderr?.on("data", (u) => {
            let c = /^([\s\S]+?):\s*(\d+)% \((\d+)\/(\d+)\)/.exec(u.toString("utf8"));
            c && t({ method: a.method, stage: YEa(c[1]), progress: X0(c[2]), processed: X0(c[3]), total: X0(c[4]) });
          });
      },
    },
  ];
}
function YEa(t) {
  return String(t.toLowerCase().split(" ", 1)) || "unknown";
}
function KEa(t) {
  let e = Ili(t, ["uid", "gid"]);
  return {
    type: "spawn.options",
    action(r) {
      return { ...e, ...r };
    },
  };
}
function JEa({ block: t, stdErr: e = !0, stdOut: r = !0 }) {
  if (t > 0)
    return {
      type: "spawn.after",
      action(n, o) {
        let s;
        function a() {
          (s && clearTimeout(s), (s = setTimeout(c, t)));
        }
        function u() {
          (o.spawned.stdout?.off("data", a),
            o.spawned.stderr?.off("data", a),
            o.spawned.off("exit", u),
            o.spawned.off("close", u),
            s && clearTimeout(s));
        }
        function c() {
          (u(), o.kill(new sN(void 0, "timeout", "block timeout reached")));
        }
        (r && o.spawned.stdout?.on("data", a),
          e && o.spawned.stderr?.on("data", a),
          o.spawned.on("exit", u),
          o.spawned.on("close", u),
          a());
      },
    };
}
function XEa() {
  return {
    type: "spawn.args",
    action(t) {
      let e = [],
        r;
      function n(o) {
        (r = r || []).push(...o);
      }
      for (let o = 0; o < t.length; o++) {
        let s = t[o];
        if (ict(s)) {
          n(Gci(s));
          continue;
        }
        if (s === "--") {
          n(t.slice(o + 1).flatMap((a) => (ict(a) && Gci(a)) || a));
          break;
        }
        e.push(s);
      }
      return r ? [...e, "--", ...r.map(String)] : e;
    },
  };
}
function eva(t, e) {
  let r = new WEa(),
    n = Nli((t && (typeof t == "string" ? { baseDir: t } : t)) || {}, e);
  if (!T1r(n.baseDir)) throw new OEa(n, "Cannot use simple-git on a directory that does not exist");
  return (
    Array.isArray(n.config) && r.add(FEa(n.config)),
    r.add(MEa(n.unsafe)),
    r.add(XEa()),
    r.add(UEa(n.completion)),
    n.abort && r.add(NEa(n.abort)),
    n.progress && r.add(zEa(n.progress)),
    n.timeout && r.add(JEa(n.timeout)),
    n.spawnOptions && r.add(KEa(n.spawnOptions)),
    r.add(yli(HEa(!0))),
    n.errors && r.add(yli(n.errors)),
    QEa(r, n.binary, n.unsafe?.allowUnsafeCustomBinary),
    new ZEa(n, r)
  );
}
var lct,
  act,
  W0i,
  K0e,
  S1r,
  j6a,
  w1r,
  Q6a,
  Rn,
  G6a,
  af,
  q6a,
  E1,
  cct,
  q4e,
  aN,
  ZU,
  H4e,
  X0e,
  _li,
  Eli,
  J0e,
  GY,
  W4e,
  dct,
  z4e,
  kli,
  m3,
  oct,
  pct,
  D1r,
  f1r,
  W6a,
  sct,
  z6a,
  Os,
  XU,
  K6a,
  Pli,
  J6a,
  Z6a,
  eya,
  Bli,
  Zo,
  Lli,
  h1r,
  hct,
  k1r,
  Uli,
  $li,
  jli,
  Qli,
  Gli,
  iya,
  g1r,
  gct,
  sf,
  zli,
  O1r,
  N1r,
  P1r,
  ect,
  B1r,
  Kli,
  Xli,
  pya,
  b1r,
  Zli,
  o1r,
  e0i,
  t0i,
  r0i,
  j4e,
  qci,
  n0i,
  i0i,
  o0i,
  tct,
  a0i,
  u0i,
  c0i,
  l0i,
  Tya,
  y1r,
  Rya,
  m0i,
  d0i,
  kya,
  Pya,
  Bya,
  Mya,
  f0i,
  $ya,
  p0i,
  Qya,
  Hya,
  Wya,
  Yya,
  rct,
  h0i,
  g0i,
  Jya,
  M1r,
  e_a,
  U1r,
  Y4e,
  b0i,
  r_a,
  a1r,
  zci,
  Yci,
  Kci,
  y0i,
  _0i,
  $1r,
  j1r,
  Q1r,
  v0i,
  C0i,
  S0i,
  G1r,
  _1r,
  x0i,
  nct,
  T0i,
  c_a,
  E1r,
  D0i,
  l_a,
  I0i,
  m_a,
  k0i,
  O0i,
  N0i,
  Xci,
  Zci,
  eli,
  tli,
  P0i,
  rli,
  q1r,
  B0i,
  nli,
  L0i,
  ili,
  f_a,
  p_a,
  sli,
  M0i,
  ali,
  g_a,
  F0i,
  U0i,
  y_a,
  uli,
  $0i,
  __a,
  lli,
  j0i,
  Q0i,
  v_a,
  G0i,
  S_a,
  V1r,
  q0i,
  D_a,
  H0i,
  v1r,
  I_a,
  V0i,
  mli,
  z0i,
  R_a,
  Y0i,
  O_a,
  K0i,
  B_a,
  dli,
  C1r,
  fli,
  Act,
  L_a,
  X0i,
  M_a,
  emi,
  tmi,
  F_a,
  rmi,
  G_a,
  imi,
  V_a,
  omi,
  z_a,
  smi,
  J_a,
  umi,
  Z_a,
  cmi,
  rEa,
  lmi,
  iEa,
  mmi,
  sEa,
  dmi,
  uEa,
  mEa,
  pmi,
  bEa,
  hmi,
  yEa,
  gmi,
  CEa,
  hli,
  Ami,
  xEa,
  ymi,
  REa,
  kEa,
  OEa,
  sN,
  gli,
  $Ea,
  bli,
  WEa,
  ZEa,
  _ct,
  _mi = j(() => {
    ((lct = Se(Qci(), 1)),
      (act = Se(Iee(), 1)),
      (W0i = Se(n1r(), 1)),
      (K0e = Se(n1r(), 1)),
      (S1r = Object.defineProperty),
      (j6a = Object.getOwnPropertyDescriptor),
      (w1r = Object.getOwnPropertyNames),
      (Q6a = Object.prototype.hasOwnProperty),
      (Rn = (t, e) =>
        function () {
          return (t && (e = (0, t[w1r(t)[0]])((t = 0))), e);
        }),
      (G6a = (t, e) =>
        function () {
          return (e || (0, t[w1r(t)[0]])((e = { exports: {} }).exports, e), e.exports);
        }),
      (af = (t, e) => {
        for (var r in e) S1r(t, r, { get: e[r], enumerable: !0 });
      }),
      (q6a = (t, e, r, n) => {
        if ((e && typeof e == "object") || typeof e == "function")
          for (let o of w1r(e))
            !Q6a.call(t, o) && o !== r && S1r(t, o, { get: () => e[o], enumerable: !(n = j6a(e, o)) || n.enumerable });
        return t;
      }),
      (E1 = (t) => q6a(S1r({}, "__esModule", { value: !0 }), t)));
    ((q4e = Rn({
      "src/lib/args/pathspec.ts"() {
        "use strict";
        cct = new WeakMap();
      },
    })),
      (ZU = Rn({
        "src/lib/errors/git-error.ts"() {
          "use strict";
          aN = class extends Error {
            constructor(t, e) {
              (super(e), (this.task = t), Object.setPrototypeOf(this, new.target.prototype));
            }
          };
        },
      })),
      (X0e = Rn({
        "src/lib/errors/git-response-error.ts"() {
          "use strict";
          (ZU(),
            (H4e = class extends aN {
              constructor(t, e) {
                (super(void 0, e || String(t)), (this.git = t));
              }
            }));
        },
      })),
      (Eli = Rn({
        "src/lib/errors/task-configuration-error.ts"() {
          "use strict";
          (ZU(),
            (_li = class extends aN {
              constructor(t) {
                super(void 0, t);
              }
            }));
        },
      })));
    dct = Rn({
      "src/lib/utils/util.ts"() {
        "use strict";
        (D1r(), (J0e = "\0"), (GY = () => {}), (W4e = Object.prototype.toString.call.bind(Object.prototype.toString)));
      },
    });
    ((D1r = Rn({
      "src/lib/utils/argument-filters.ts"() {
        "use strict";
        (q4e(),
          dct(),
          (z4e = (t) => Array.isArray(t)),
          (kli = (t) => typeof t == "number"),
          (m3 = (t) => typeof t == "string"),
          (oct = (t) => m3(t) || (Array.isArray(t) && t.every(m3))),
          (pct = (t) =>
            t == null || "number|boolean|function".includes(typeof t) ? !1 : typeof t.length == "number"));
      },
    })),
      (W6a = Rn({
        "src/lib/utils/exit-codes.ts"() {
          "use strict";
          f1r = ((t) => (
            (t[(t.SUCCESS = 0)] = "SUCCESS"),
            (t[(t.ERROR = 1)] = "ERROR"),
            (t[(t.NOT_FOUND = -2)] = "NOT_FOUND"),
            (t[(t.UNCLEAN = 128)] = "UNCLEAN"),
            t
          ))(f1r || {});
        },
      })),
      (z6a = Rn({
        "src/lib/utils/git-output-streams.ts"() {
          "use strict";
          sct = class Oli {
            constructor(e, r) {
              ((this.stdOut = e), (this.stdErr = r));
            }
            asStrings() {
              return new Oli(this.stdOut.toString("utf8"), this.stdErr.toString("utf8"));
            }
          };
        },
      })));
    K6a = Rn({
      "src/lib/utils/line-parser.ts"() {
        "use strict";
        ((Os = class {
          constructor(t, e) {
            ((this.matches = []),
              (this.useMatches = Y6a),
              (this.parse = (r, n) => (
                this.resetMatches(),
                this._regExp.every((o, s) => this.addMatch(o, s, r(s)))
                  ? this.useMatches(n, this.prepareMatches()) !== !1
                  : !1
              )),
              (this._regExp = Array.isArray(t) ? t : [t]),
              e && (this.useMatches = e));
          }
          resetMatches() {
            this.matches.length = 0;
          }
          prepareMatches() {
            return this.matches;
          }
          addMatch(t, e, r) {
            let n = r && t.exec(r);
            return (n && this.pushMatch(e, n), !!n);
          }
          pushMatch(t, e) {
            this.matches.push(...e.slice(1));
          }
        }),
          (XU = class extends Os {
            addMatch(t, e, r) {
              return /^remote:\s/.test(String(r)) && super.addMatch(t, e, r);
            }
            pushMatch(t, e) {
              (t > 0 || e.length > 1) && super.pushMatch(t, e);
            }
          }));
      },
    });
    J6a = Rn({
      "src/lib/utils/simple-git-options.ts"() {
        "use strict";
        Pli = { binary: "git", maxConcurrentProcesses: 5, config: [], trimmed: !1 };
      },
    });
    Z6a = Rn({
      "src/lib/utils/task-options.ts"() {
        "use strict";
        (D1r(), dct(), q4e());
      },
    });
    ((eya = Rn({
      "src/lib/utils/task-parser.ts"() {
        "use strict";
        dct();
      },
    })),
      (Bli = {}));
    af(Bli, {
      ExitCodes: () => f1r,
      GitOutputStreams: () => sct,
      LineParser: () => Os,
      NOOP: () => GY,
      NULL: () => J0e,
      RemoteLineParser: () => XU,
      append: () => wc,
      appendTaskOptions: () => I1r,
      asArray: () => zD,
      asCamelCase: () => Dli,
      asFunction: () => vli,
      asNumber: () => X0,
      asStringArray: () => Z0e,
      bufferToString: () => G4e,
      callTaskParser: () => p1r,
      createInstanceConfig: () => Nli,
      delay: () => l1r,
      filterArray: () => z4e,
      filterFunction: () => Rli,
      filterHasLength: () => pct,
      filterNumber: () => kli,
      filterPlainObject: () => fct,
      filterPrimitives: () => d1r,
      filterString: () => m3,
      filterStringOrStringArray: () => oct,
      filterType: () => iy,
      first: () => wli,
      folderExists: () => T1r,
      forEachLineWithContent: () => x1r,
      getTrailingOptions: () => m9,
      including: () => Tli,
      isUserFunction: () => Cli,
      last: () => QY,
      objectToString: () => W4e,
      orVoid: () => m1r,
      parseStringResponse: () => f9,
      pick: () => Ili,
      prefixedArray: () => Q4e,
      remove: () => mct,
      splitOn: () => Sli,
      toLinesWithContent: () => V4e,
      trailingFunctionArgument: () => v1,
      trailingOptionsArgument: () => R1r,
    });
    ((Zo = Rn({
      "src/lib/utils/index.ts"() {
        "use strict";
        (D1r(), W6a(), z6a(), K6a(), J6a(), Z6a(), eya(), dct());
      },
    })),
      (Lli = {}));
    af(Lli, {
      CheckRepoActions: () => h1r,
      checkIsBareRepoTask: () => Fli,
      checkIsRepoRootTask: () => Mli,
      checkIsRepoTask: () => tya,
    });
    Uli = Rn({
      "src/lib/tasks/check-is-repo.ts"() {
        "use strict";
        (Zo(),
          (h1r = ((t) => ((t.BARE = "bare"), (t.IN_TREE = "tree"), (t.IS_REPO_ROOT = "root"), t))(h1r || {})),
          (hct = ({ exitCode: t }, e, r, n) => {
            if (t === 128 && rya(e)) return r(Buffer.from("false"));
            n(e);
          }),
          (k1r = (t) => t.trim() === "true"));
      },
    });
    ((iya = Rn({
      "src/lib/responses/CleanSummary.ts"() {
        "use strict";
        (Zo(),
          ($li = class {
            constructor(t) {
              ((this.dryRun = t), (this.paths = []), (this.files = []), (this.folders = []));
            }
          }),
          (jli = /^[a-z]+\s*/i),
          (Qli = /^[a-z]+\s+[a-z]+\s*/i),
          (Gli = /\/$/));
      },
    })),
      (g1r = {}));
    af(g1r, {
      EMPTY_COMMANDS: () => gct,
      adhocExecTask: () => qli,
      configurationErrorTask: () => d9,
      isBufferTask: () => Vli,
      isEmptyTask: () => Wli,
      straightThroughBufferTask: () => Hli,
      straightThroughStringTask: () => K2,
    });
    ((sf = Rn({
      "src/lib/tasks/task.ts"() {
        "use strict";
        (Eli(), (gct = []));
      },
    })),
      (zli = {}));
    af(zli, {
      CONFIG_ERROR_INTERACTIVE_MODE: () => O1r,
      CONFIG_ERROR_MODE_REQUIRED: () => N1r,
      CONFIG_ERROR_UNKNOWN_OPTION: () => P1r,
      CleanOptions: () => ect,
      cleanTask: () => Yli,
      cleanWithOptionsTask: () => oya,
      isCleanOptionsArray: () => sya,
    });
    Kli = Rn({
      "src/lib/tasks/clean.ts"() {
        "use strict";
        (iya(),
          Zo(),
          sf(),
          (O1r = "Git clean interactive mode is not supported"),
          (N1r = 'Git clean mode parameter ("n" or "f") is required'),
          (P1r = "Git clean unknown option found in: "),
          (ect = ((t) => (
            (t.DRY_RUN = "n"),
            (t.FORCE = "f"),
            (t.IGNORED_INCLUDED = "x"),
            (t.IGNORED_ONLY = "X"),
            (t.EXCLUDING = "e"),
            (t.QUIET = "q"),
            (t.RECURSIVE = "d"),
            t
          ))(ect || {})),
          (B1r = new Set(["i", ...Z0e(Object.values(ect))])));
      },
    });
    pya = Rn({
      "src/lib/responses/ConfigList.ts"() {
        "use strict";
        (Zo(),
          (Xli = class {
            constructor() {
              ((this.files = []), (this.values = Object.create(null)));
            }
            get all() {
              return (
                this._all || (this._all = this.files.reduce((t, e) => Object.assign(t, this.values[e]), {})),
                this._all
              );
            }
            addFile(t) {
              if (!(t in this.values)) {
                let e = QY(this.files);
                ((this.values[t] = e ? Object.create(this.values[e]) : {}), this.files.push(t));
              }
              return this.values[t];
            }
            addValue(t, e, r) {
              let n = this.addFile(t);
              (Object.hasOwn(n, e) ? (Array.isArray(n[e]) ? n[e].push(r) : (n[e] = [n[e], r])) : (n[e] = r),
                (this._all = void 0));
            }
          }));
      },
    });
    Zli = Rn({
      "src/lib/tasks/config.ts"() {
        "use strict";
        (pya(),
          Zo(),
          (b1r = ((t) => (
            (t.system = "system"),
            (t.global = "global"),
            (t.local = "local"),
            (t.worktree = "worktree"),
            t
          ))(b1r || {})));
      },
    });
    t0i = Rn({
      "src/lib/tasks/diff-name-status.ts"() {
        "use strict";
        ((o1r = ((t) => (
          (t.ADDED = "A"),
          (t.COPIED = "C"),
          (t.DELETED = "D"),
          (t.MODIFIED = "M"),
          (t.RENAMED = "R"),
          (t.CHANGED = "T"),
          (t.UNMERGED = "U"),
          (t.UNKNOWN = "X"),
          (t.BROKEN = "B"),
          t
        ))(o1r || {})),
          (e0i = new Set(Object.values(o1r))));
      },
    });
    ((i0i = Rn({
      "src/lib/tasks/grep.ts"() {
        "use strict";
        (Zo(),
          sf(),
          (r0i = ["-h"]),
          (j4e = Symbol("grepQuery")),
          (n0i = class {
            constructor() {
              this[qci] = [];
            }
            *[((qci = j4e), Symbol.iterator)]() {
              for (let t of this[j4e]) yield t;
            }
            and(...t) {
              return (t.length && this[j4e].push("--and", "(", ...Q4e(t, "-e"), ")"), this);
            }
            param(...t) {
              return (this[j4e].push(...Q4e(t, "-e")), this);
            }
          }));
      },
    })),
      (o0i = {}));
    af(o0i, { ResetMode: () => tct, getResetMode: () => Sya, resetTask: () => Cya });
    u0i = Rn({
      "src/lib/tasks/reset.ts"() {
        "use strict";
        (Zo(),
          sf(),
          (tct = ((t) => (
            (t.MIXED = "mixed"),
            (t.SOFT = "soft"),
            (t.HARD = "hard"),
            (t.MERGE = "merge"),
            (t.KEEP = "keep"),
            t
          ))(tct || {})),
          (a0i = Z0e(Object.values(tct))));
      },
    });
    ((c0i = Rn({
      "src/lib/git-logger.ts"() {
        "use strict";
        (Zo(),
          (act.default.formatters.L = (t) => String(pct(t) ? t.length : "-")),
          (act.default.formatters.B = (t) => (Buffer.isBuffer(t) ? t.toString("utf8") : W4e(t))));
      },
    })),
      (Tya = Rn({
        "src/lib/runners/tasks-pending-queue.ts"() {
          "use strict";
          (ZU(),
            c0i(),
            (l0i = class A1r {
              constructor(e = "GitExecutor") {
                ((this.logLabel = e), (this._queue = new Map()));
              }
              withProgress(e) {
                return this._queue.get(e);
              }
              createProgress(e) {
                let r = A1r.getName(e.commands[0]),
                  n = L1r(this.logLabel, r);
                return { task: e, logger: n, name: r };
              }
              push(e) {
                let r = this.createProgress(e);
                return (r.logger("Adding task to the queue, commands = %o", e.commands), this._queue.set(e, r), r);
              }
              fatal(e) {
                for (let [r, { logger: n }] of Array.from(this._queue.entries()))
                  (r === e.task
                    ? (n.info("Failed %o", e),
                      n("Fatal exception, any as-yet un-started tasks run through this executor will not be attempted"))
                    : n.info("A fatal exception occurred in a previous task, the queue has been purged: %o", e.message),
                    this.complete(r));
                if (this._queue.size !== 0)
                  throw new Error(`Queue size should be zero after fatal: ${this._queue.size}`);
              }
              complete(e) {
                this.withProgress(e) && this._queue.delete(e);
              }
              attempt(e) {
                let r = this.withProgress(e);
                if (!r) throw new aN(void 0, "TasksPendingQueue: attempt called for an unknown task");
                return (r.logger("Starting task"), r);
              }
              static getName(e = "empty") {
                return `task:${e}:${++A1r.counter}`;
              }
              static {
                this.counter = 0;
              }
            }));
        },
      })));
    ((Rya = Rn({
      "src/lib/runners/git-executor-chain.ts"() {
        "use strict";
        (ZU(),
          sf(),
          Zo(),
          Tya(),
          (y1r = class {
            constructor(t, e, r) {
              ((this._executor = t),
                (this._scheduler = e),
                (this._plugins = r),
                (this._chain = Promise.resolve()),
                (this._queue = new l0i()));
            }
            get cwd() {
              return this._cwd || this._executor.cwd;
            }
            set cwd(t) {
              this._cwd = t;
            }
            get env() {
              return this._executor.env;
            }
            get outputHandler() {
              return this._executor.outputHandler;
            }
            chain() {
              return this;
            }
            push(t) {
              return (this._queue.push(t), (this._chain = this._chain.then(() => this.attemptTask(t))));
            }
            async attemptTask(t) {
              let e = await this._scheduler.next(),
                r = () => this._queue.complete(t);
              try {
                let { logger: n } = this._queue.attempt(t);
                return await (Wli(t) ? this.attemptEmptyTask(t, n) : this.attemptRemoteTask(t, n));
              } catch (n) {
                throw this.onFatalException(t, n);
              } finally {
                (r(), e());
              }
            }
            onFatalException(t, e) {
              let r = e instanceof aN ? Object.assign(e, { task: t }) : new aN(t, e && String(e));
              return ((this._chain = Promise.resolve()), this._queue.fatal(r), r);
            }
            async attemptRemoteTask(t, e) {
              let r = this._plugins.exec("spawn.binary", "", jY(t, t.commands)),
                n = this._plugins.exec("spawn.args", [...t.commands], jY(t, t.commands)),
                o = await this.gitResponse(t, r, n, this.outputHandler, e.step("SPAWN")),
                s = await this.handleTaskData(t, n, o, e.step("HANDLE"));
              return (
                e("passing response to task's parser as a %s", t.format),
                Vli(t) ? p1r(t.parser, s) : p1r(t.parser, s.asStrings())
              );
            }
            async attemptEmptyTask(t, e) {
              return (e("empty task bypassing child process to call to task's parser"), t.parser(this));
            }
            handleTaskData(t, e, r, n) {
              let { exitCode: o, rejection: s, stdOut: a, stdErr: u } = r;
              return new Promise((c, m) => {
                n("Preparing to handle process response exitCode=%d stdOut=", o);
                let { error: d } = this._plugins.exec("task.error", { error: s }, { ...jY(t, e), ...r });
                if (d && t.onError)
                  return (
                    n.info("exitCode=%s handling with custom error handler"),
                    t.onError(
                      r,
                      d,
                      (f) => {
                        (n.info("custom error handler treated as success"),
                          n("custom error returned a %s", W4e(f)),
                          c(new sct(Array.isArray(f) ? Buffer.concat(f) : f, Buffer.concat(u))));
                      },
                      m,
                    )
                  );
                if (d) return (n.info("handling as error: exitCode=%s stdErr=%s rejection=%o", o, u.length, s), m(d));
                (n.info("retrieving task output complete"), c(new sct(Buffer.concat(a), Buffer.concat(u))));
              });
            }
            async gitResponse(t, e, r, n, o) {
              let s = o.sibling("output"),
                a = this._plugins.exec(
                  "spawn.options",
                  { cwd: this.cwd, env: this.env, windowsHide: !0 },
                  jY(t, t.commands),
                );
              return new Promise((u) => {
                let c = [],
                  m = [];
                (o.info("%s %o", e, r), o("%O", a));
                let d = this._beforeSpawn(t, r);
                if (d) return u({ stdOut: c, stdErr: m, exitCode: 9901, rejection: d });
                this._plugins.exec("spawn.before", void 0, {
                  ...jY(t, r),
                  kill(p) {
                    d = p || d;
                  },
                });
                let f = Dya(e, r, a);
                (f.stdout.on("data", Vci(c, "stdOut", o, s.step("stdOut"))),
                  f.stderr.on("data", Vci(m, "stdErr", o, s.step("stdErr"))),
                  f.on("error", Iya(m, o)),
                  n &&
                    (o("Passing child process stdOut/stdErr to custom outputHandler"),
                    n(e, f.stdout, f.stderr, [...r])),
                  this._plugins.exec("spawn.after", void 0, {
                    ...jY(t, r),
                    spawned: f,
                    close(p, h) {
                      u({ stdOut: c, stdErr: m, exitCode: p, rejection: d || h });
                    },
                    kill(p) {
                      f.killed || ((d = p), f.kill("SIGINT"));
                    },
                  }));
              });
            }
            _beforeSpawn(t, e) {
              let r;
              return (
                this._plugins.exec("spawn.before", void 0, {
                  ...jY(t, e),
                  kill(n) {
                    r = n || r;
                  },
                }),
                r
              );
            }
          }));
      },
    })),
      (m0i = {}));
    af(m0i, { GitExecutor: () => d0i });
    kya = Rn({
      "src/lib/runners/git-executor.ts"() {
        "use strict";
        (Rya(),
          (d0i = class {
            constructor(t, e, r) {
              ((this.cwd = t),
                (this._scheduler = e),
                (this._plugins = r),
                (this._chain = new y1r(this, this._scheduler, this._plugins)));
            }
            chain() {
              return new y1r(this, this._scheduler, this._plugins);
            }
            push(t) {
              return this._chain.push(t);
            }
          }));
      },
    });
    Pya = Rn({
      "src/lib/task-callback.ts"() {
        "use strict";
        (X0e(), Zo());
      },
    });
    Bya = Rn({
      "src/lib/tasks/change-working-directory.ts"() {
        "use strict";
        (Zo(), sf());
      },
    });
    Mya = Rn({
      "src/lib/tasks/checkout.ts"() {
        "use strict";
        (Zo(), sf());
      },
    });
    $ya = Rn({
      "src/lib/tasks/count-objects.ts"() {
        "use strict";
        (Zo(),
          (f0i = new Os(/([a-z-]+): (\d+)$/, (t, [e, r]) => {
            let n = Dli(e);
            Object.hasOwn(t, n) && (t[n] = X0(r));
          })));
      },
    });
    Qya = Rn({
      "src/lib/parsers/parse-commit.ts"() {
        "use strict";
        (Zo(),
          (p0i = [
            new Os(/^\[([^\s]+)( \([^)]+\))? ([^\]]+)/, (t, [e, r, n]) => {
              ((t.branch = e), (t.commit = n), (t.root = !!r));
            }),
            new Os(/\s*Author:\s(.+)/i, (t, [e]) => {
              let r = e.split("<"),
                n = r.pop();
              !n || !n.includes("@") || (t.author = { email: n.substr(0, n.length - 1), name: r.join("<").trim() });
            }),
            new Os(/(\d+)[^,]*(?:,\s*(\d+)[^,]*)(?:,\s*(\d+))/g, (t, [e, r, n]) => {
              ((t.summary.changes = parseInt(e, 10) || 0),
                (t.summary.insertions = parseInt(r, 10) || 0),
                (t.summary.deletions = parseInt(n, 10) || 0));
            }),
            new Os(/^(\d+)[^,]*(?:,\s*(\d+)[^(]+\(([+-]))?/, (t, [e, r, n]) => {
              t.summary.changes = parseInt(e, 10) || 0;
              let o = parseInt(r, 10) || 0;
              n === "-" ? (t.summary.deletions = o) : n === "+" && (t.summary.insertions = o);
            }),
          ]));
      },
    });
    Hya = Rn({
      "src/lib/tasks/commit.ts"() {
        "use strict";
        (Qya(), Zo(), sf());
      },
    });
    Wya = Rn({
      "src/lib/tasks/first-commit.ts"() {
        "use strict";
        (Zo(), sf());
      },
    });
    Yya = Rn({
      "src/lib/tasks/hash-object.ts"() {
        "use strict";
        sf();
      },
    });
    Jya = Rn({
      "src/lib/responses/InitSummary.ts"() {
        "use strict";
        ((rct = class {
          constructor(t, e, r, n) {
            ((this.bare = t), (this.path = e), (this.existing = r), (this.gitDir = n));
          }
        }),
          (h0i = /^Init.+ repository in (.+)$/),
          (g0i = /^Rein.+ in (.+)$/));
      },
    });
    e_a = Rn({
      "src/lib/tasks/init.ts"() {
        "use strict";
        (Jya(), (M1r = "--bare"));
      },
    });
    ((Y4e = Rn({
      "src/lib/args/log-format.ts"() {
        "use strict";
        U1r = /^--(stat|numstat|name-only|name-status)(=|$)/;
      },
    })),
      (r_a = Rn({
        "src/lib/responses/DiffSummary.ts"() {
          "use strict";
          b0i = class {
            constructor() {
              ((this.changed = 0), (this.deletions = 0), (this.insertions = 0), (this.files = []));
            }
          };
        },
      })));
    _0i = Rn({
      "src/lib/parsers/parse-diff-summary.ts"() {
        "use strict";
        (Y4e(),
          r_a(),
          t0i(),
          Zo(),
          (a1r = [
            new Os(/^(.+)\s+\|\s+(\d+)(\s+[+\-]+)?$/, (t, [e, r, n = ""]) => {
              t.files.push({
                file: e.trim(),
                changes: X0(r),
                insertions: n.replace(/[^+]/g, "").length,
                deletions: n.replace(/[^-]/g, "").length,
                binary: !1,
              });
            }),
            new Os(/^(.+) \|\s+Bin ([0-9.]+) -> ([0-9.]+) ([a-z]+)/, (t, [e, r, n]) => {
              t.files.push({ file: e.trim(), before: X0(r), after: X0(n), binary: !0 });
            }),
            new Os(/(\d+) files? changed\s*((?:, \d+ [^,]+){0,2})/, (t, [e, r]) => {
              let n = /(\d+) i/.exec(r),
                o = /(\d+) d/.exec(r);
              ((t.changed = X0(e)), (t.insertions = X0(n?.[1])), (t.deletions = X0(o?.[1])));
            }),
          ]),
          (zci = [
            new Os(/(\d+)\t(\d+)\t(.+)$/, (t, [e, r, n]) => {
              let o = X0(e),
                s = X0(r);
              (t.changed++,
                (t.insertions += o),
                (t.deletions += s),
                t.files.push({ file: n, changes: o + s, insertions: o, deletions: s, binary: !1 }));
            }),
            new Os(/-\t-\t(.+)$/, (t, [e]) => {
              (t.changed++, t.files.push({ file: e, after: 0, before: 0, binary: !0 }));
            }),
          ]),
          (Yci = [
            new Os(/(.+)$/, (t, [e]) => {
              (t.changed++, t.files.push({ file: e, changes: 0, insertions: 0, deletions: 0, binary: !1 }));
            }),
          ]),
          (Kci = [
            new Os(/([ACDMRTUXB])([0-9]{0,3})\t(.[^\t]*)(\t(.[^\t]*))?$/, (t, [e, r, n, o, s]) => {
              (t.changed++,
                t.files.push({
                  file: s ?? n,
                  changes: 0,
                  insertions: 0,
                  deletions: 0,
                  binary: !1,
                  status: m1r(yya(e) && e),
                  from: m1r(!!s && n !== s && n),
                  similarity: X0(r),
                }));
            }),
          ]),
          (y0i = { "": a1r, "--stat": a1r, "--numstat": zci, "--name-status": Kci, "--name-only": Yci }));
      },
    });
    ((C0i = Rn({
      "src/lib/parsers/parse-list-log-summary.ts"() {
        "use strict";
        (Zo(),
          _0i(),
          Y4e(),
          ($1r = "\xF2\xF2\xF2\xF2\xF2\xF2 "),
          (j1r = " \xF2\xF2"),
          (Q1r = " \xF2 "),
          (v0i = ["hash", "date", "message", "refs", "author_name", "author_email"]));
      },
    })),
      (S0i = {}));
    af(S0i, { diffSummaryTask: () => i_a, validateLogFormatConfig: () => bct });
    G1r = Rn({
      "src/lib/tasks/diff.ts"() {
        "use strict";
        (Y4e(), _0i(), sf());
      },
    });
    ((x0i = Rn({
      "src/lib/tasks/log.ts"() {
        "use strict";
        (Y4e(),
          q4e(),
          C0i(),
          Zo(),
          sf(),
          G1r(),
          (_1r = ((t) => (
            (t[(t["--pretty"] = 0)] = "--pretty"),
            (t[(t["max-count"] = 1)] = "max-count"),
            (t[(t.maxCount = 2)] = "maxCount"),
            (t[(t.n = 3)] = "n"),
            (t[(t.file = 4)] = "file"),
            (t[(t.format = 5)] = "format"),
            (t[(t.from = 6)] = "from"),
            (t[(t.to = 7)] = "to"),
            (t[(t.splitter = 8)] = "splitter"),
            (t[(t.symmetric = 9)] = "symmetric"),
            (t[(t.mailMap = 10)] = "mailMap"),
            (t[(t.multiLine = 11)] = "multiLine"),
            (t[(t.strictDate = 12)] = "strictDate"),
            t
          ))(_1r || {})));
      },
    })),
      (c_a = Rn({
        "src/lib/responses/MergeSummary.ts"() {
          "use strict";
          ((nct = class {
            constructor(t, e = null, r) {
              ((this.reason = t), (this.file = e), (this.meta = r));
            }
            toString() {
              return `${this.file}:${this.reason}`;
            }
          }),
            (T0i = class {
              constructor() {
                ((this.conflicts = []), (this.merges = []), (this.result = "success"));
              }
              get failed() {
                return this.conflicts.length > 0;
              }
              get reason() {
                return this.result;
              }
              toString() {
                return this.conflicts.length ? `CONFLICTS: ${this.conflicts.join(", ")}` : "OK";
              }
            }));
        },
      })),
      (l_a = Rn({
        "src/lib/responses/PullSummary.ts"() {
          "use strict";
          ((E1r = class {
            constructor() {
              ((this.remoteMessages = { all: [] }),
                (this.created = []),
                (this.deleted = []),
                (this.files = []),
                (this.deletions = {}),
                (this.insertions = {}),
                (this.summary = { changes: 0, deletions: 0, insertions: 0 }));
            }
          }),
            (D0i = class {
              constructor() {
                ((this.remote = ""),
                  (this.hash = { local: "", remote: "" }),
                  (this.branch = { local: "", remote: "" }),
                  (this.message = ""));
              }
              toString() {
                return this.message;
              }
            }));
        },
      })));
    m_a = Rn({
      "src/lib/parsers/parse-remote-objects.ts"() {
        "use strict";
        (Zo(),
          (I0i = [
            new XU(/^remote:\s*(enumerating|counting|compressing) objects: (\d+),/i, (t, [e, r]) => {
              let n = e.toLowerCase(),
                o = u1r(t.remoteMessages);
              Object.assign(o, { [n]: X0(r) });
            }),
            new XU(/^remote:\s*(enumerating|counting|compressing) objects: \d+% \(\d+\/(\d+)\),/i, (t, [e, r]) => {
              let n = e.toLowerCase(),
                o = u1r(t.remoteMessages);
              Object.assign(o, { [n]: X0(r) });
            }),
            new XU(/total ([^,]+), reused ([^,]+), pack-reused (\d+)/i, (t, [e, r, n]) => {
              let o = u1r(t.remoteMessages);
              ((o.total = Jci(e)), (o.reused = Jci(r)), (o.packReused = X0(n)));
            }),
          ]));
      },
    });
    N0i = Rn({
      "src/lib/parsers/parse-remote-messages.ts"() {
        "use strict";
        (Zo(),
          m_a(),
          (k0i = [
            new XU(/^remote:\s*(.+)$/, (t, [e]) => (t.remoteMessages.all.push(e.trim()), !1)),
            ...I0i,
            new XU([/create a (?:pull|merge) request/i, /\s(https?:\/\/\S+)$/], (t, [e]) => {
              t.remoteMessages.pullRequestUrl = e;
            }),
            new XU([/found (\d+) vulnerabilities.+\(([^)]+)\)/i, /\s(https?:\/\/\S+)$/], (t, [e, r, n]) => {
              t.remoteMessages.vulnerabilities = { count: X0(e), summary: r, url: n };
            }),
          ]),
          (O0i = class {
            constructor() {
              this.all = [];
            }
          }));
      },
    });
    ((B0i = Rn({
      "src/lib/parsers/parse-pull.ts"() {
        "use strict";
        (l_a(),
          Zo(),
          N0i(),
          (Xci = /^\s*(.+?)\s+\|\s+\d+\s*(\+*)(-*)/),
          (Zci = /(\d+)\D+((\d+)\D+\(\+\))?(\D+(\d+)\D+\(-\))?/),
          (eli = /^(create|delete) mode \d+ (.+)/),
          (tli = [
            new Os(Xci, (t, [e, r, n]) => {
              (t.files.push(e), r && (t.insertions[e] = r.length), n && (t.deletions[e] = n.length));
            }),
            new Os(Zci, (t, [e, , r, , n]) =>
              r !== void 0 || n !== void 0
                ? ((t.summary.changes = +e || 0), (t.summary.insertions = +r || 0), (t.summary.deletions = +n || 0), !0)
                : !1,
            ),
            new Os(eli, (t, [e, r]) => {
              (wc(t.files, r), wc(e === "create" ? t.created : t.deleted, r));
            }),
          ]),
          (P0i = [
            new Os(/^from\s(.+)$/i, (t, [e]) => void (t.remote = e)),
            new Os(/^fatal:\s(.+)$/, (t, [e]) => void (t.message = e)),
            new Os(/([a-z0-9]+)\.\.([a-z0-9]+)\s+(\S+)\s+->\s+(\S+)$/, (t, [e, r, n, o]) => {
              ((t.branch.local = n), (t.hash.local = e), (t.branch.remote = o), (t.hash.remote = r));
            }),
          ]),
          (rli = (t, e) => f9(new E1r(), tli, [t, e])),
          (q1r = (t, e) => Object.assign(new E1r(), rli(t, e), R0i(t, e))));
      },
    })),
      (f_a = Rn({
        "src/lib/parsers/parse-merge.ts"() {
          "use strict";
          (c_a(),
            Zo(),
            B0i(),
            (nli = [
              new Os(/^Auto-merging\s+(.+)$/, (t, [e]) => {
                t.merges.push(e);
              }),
              new Os(/^CONFLICT\s+\((.+)\): Merge conflict in (.+)$/, (t, [e, r]) => {
                t.conflicts.push(new nct(e, r));
              }),
              new Os(/^CONFLICT\s+\((.+\/delete)\): (.+) deleted in (.+) and/, (t, [e, r, n]) => {
                t.conflicts.push(new nct(e, r, { deleteRef: n }));
              }),
              new Os(/^CONFLICT\s+\((.+)\):/, (t, [e]) => {
                t.conflicts.push(new nct(e, null));
              }),
              new Os(/^Automatic merge failed;\s+(.+)$/, (t, [e]) => {
                t.result = e;
              }),
            ]),
            (L0i = (t, e) => Object.assign(ili(t, e), q1r(t, e))),
            (ili = (t) => f9(new T0i(), nli, t)));
        },
      })));
    p_a = Rn({
      "src/lib/tasks/merge.ts"() {
        "use strict";
        (X0e(), f_a(), sf());
      },
    });
    ((g_a = Rn({
      "src/lib/parsers/parse-push.ts"() {
        "use strict";
        (Zo(),
          N0i(),
          (sli = [
            new Os(/^Pushing to (.+)$/, (t, [e]) => {
              t.repo = e;
            }),
            new Os(/^updating local tracking ref '(.+)'/, (t, [e]) => {
              t.ref = { ...(t.ref || {}), local: e };
            }),
            new Os(/^[=*-]\s+([^:]+):(\S+)\s+\[(.+)]$/, (t, [e, r, n]) => {
              t.pushed.push(h_a(e, r, n));
            }),
            new Os(/^Branch '([^']+)' set up to track remote branch '([^']+)' from '([^']+)'/, (t, [e, r, n]) => {
              t.branch = { ...(t.branch || {}), local: e, remote: r, remoteName: n };
            }),
            new Os(/^([^:]+):(\S+)\s+([a-z0-9]+)\.\.([a-z0-9]+)$/, (t, [e, r, n, o]) => {
              t.update = { head: { local: e, remote: r }, hash: { from: n, to: o } };
            }),
          ]),
          (M0i = (t, e) => {
            let r = ali(t, e),
              n = R0i(t, e);
            return { ...r, ...n };
          }),
          (ali = (t, e) => f9({ pushed: [] }, sli, [t, e])));
      },
    })),
      (F0i = {}));
    af(F0i, { pushTagsTask: () => b_a, pushTask: () => H1r });
    U0i = Rn({
      "src/lib/tasks/push.ts"() {
        "use strict";
        (g_a(), Zo());
      },
    });
    ((y_a = Rn({
      "src/lib/tasks/show.ts"() {
        "use strict";
        (Zo(), sf());
      },
    })),
      (__a = Rn({
        "src/lib/responses/FileStatusSummary.ts"() {
          "use strict";
          ((uli = /^(.+)\0(.+)$/),
            ($0i = class {
              constructor(t, e, r) {
                if (((this.path = t), (this.index = e), (this.working_dir = r), e === "R" || r === "R")) {
                  let n = uli.exec(t) || [null, t, t];
                  ((this.from = n[2] || ""), (this.path = n[1] || ""));
                }
              }
            }));
        },
      })));
    v_a = Rn({
      "src/lib/responses/StatusSummary.ts"() {
        "use strict";
        (Zo(),
          __a(),
          (lli = class {
            constructor() {
              ((this.not_added = []),
                (this.conflicted = []),
                (this.created = []),
                (this.deleted = []),
                (this.ignored = void 0),
                (this.modified = []),
                (this.renamed = []),
                (this.files = []),
                (this.staged = []),
                (this.ahead = 0),
                (this.behind = 0),
                (this.current = null),
                (this.tracking = null),
                (this.detached = !1),
                (this.isClean = () => !this.files.length));
            }
          }),
          (j0i = new Map([
            ny(" ", "A", (t, e) => wc(t.created, e)),
            ny(" ", "D", (t, e) => wc(t.deleted, e)),
            ny(" ", "M", (t, e) => wc(t.modified, e)),
            ny("A", " ", (t, e) => wc(t.created, e) && wc(t.staged, e)),
            ny("A", "M", (t, e) => wc(t.created, e) && wc(t.staged, e) && wc(t.modified, e)),
            ny("D", " ", (t, e) => wc(t.deleted, e) && wc(t.staged, e)),
            ny("M", " ", (t, e) => wc(t.modified, e) && wc(t.staged, e)),
            ny("M", "M", (t, e) => wc(t.modified, e) && wc(t.staged, e)),
            ny("R", " ", (t, e) => {
              wc(t.renamed, cli(e));
            }),
            ny("R", "M", (t, e) => {
              let r = cli(e);
              (wc(t.renamed, r), wc(t.modified, r.to));
            }),
            ny("!", "!", (t, e) => {
              wc((t.ignored = t.ignored || []), e);
            }),
            ny("?", "?", (t, e) => wc(t.not_added, e)),
            ...c1r("A", "A", "U"),
            ...c1r("D", "D", "U"),
            ...c1r("U", "A", "D", "U"),
            [
              "##",
              (t, e) => {
                let r = /ahead (\d+)/,
                  n = /behind (\d+)/,
                  o = /^(.+?(?=(?:\.{3}|\s|$)))/,
                  s = /\.{3}(\S*)/,
                  a = /\son\s(\S+?)(?=\.{3}|$)/,
                  u = r.exec(e);
                ((t.ahead = (u && +u[1]) || 0),
                  (u = n.exec(e)),
                  (t.behind = (u && +u[1]) || 0),
                  (u = o.exec(e)),
                  (t.current = iy(u?.[1], m3, null)),
                  (u = s.exec(e)),
                  (t.tracking = iy(u?.[1], m3, null)),
                  (u = a.exec(e)),
                  u && (t.current = iy(u?.[1], m3, t.current)),
                  (t.detached = /\(no branch\)/.test(e)));
              },
            ],
          ])),
          (Q0i = function (t) {
            let e = t.split(J0e),
              r = new lli();
            for (let n = 0, o = e.length; n < o; ) {
              let s = e[n++].trim();
              s && (s.charAt(0) === "R" && (s += J0e + (e[n++] || "")), E_a(r, s));
            }
            return r;
          }));
      },
    });
    S_a = Rn({
      "src/lib/tasks/status.ts"() {
        "use strict";
        (v_a(), (G0i = ["--null", "-z"]));
      },
    });
    ((D_a = Rn({
      "src/lib/tasks/version.ts"() {
        "use strict";
        (Zo(),
          (V1r = "installed=false"),
          (q0i = [
            new Os(/version (\d+)\.(\d+)\.(\d+)(?:\s*\((.+)\))?/, (t, [e, r, n, o = ""]) => {
              Object.assign(t, uct(X0(e), X0(r), X0(n), o));
            }),
            new Os(/version (\d+)\.(\d+)\.(\D+)(.+)?$/, (t, [e, r, n, o = ""]) => {
              Object.assign(t, uct(X0(e), X0(r), n, o));
            }),
          ]));
      },
    })),
      (H0i = {}));
    af(H0i, { SimpleGitApi: () => v1r });
    ((I_a = Rn({
      "src/lib/simple-git-api.ts"() {
        "use strict";
        (Pya(),
          Bya(),
          Mya(),
          $ya(),
          Hya(),
          Zli(),
          Wya(),
          i0i(),
          Yya(),
          e_a(),
          x0i(),
          p_a(),
          U0i(),
          y_a(),
          S_a(),
          sf(),
          D_a(),
          Zo(),
          (v1r = class {
            constructor(t) {
              this._executor = t;
            }
            _runTask(t, e) {
              let r = this._executor.chain(),
                n = r.push(t);
              return (
                e && Oya(t, n, e),
                Object.create(this, {
                  then: { value: n.then.bind(n) },
                  catch: { value: n.catch.bind(n) },
                  _executor: { value: r },
                })
              );
            }
            add(t) {
              return this._runTask(K2(["add", ...zD(t)]), v1(arguments));
            }
            cwd(t) {
              let e = v1(arguments);
              return typeof t == "string"
                ? this._runTask(Wci(t, this._executor), e)
                : typeof t?.path == "string"
                  ? this._runTask(Wci(t.path, (t.root && this._executor) || void 0), e)
                  : this._runTask(d9("Git.cwd: workingDirectory must be supplied as a string"), e);
            }
            hashObject(t, e) {
              return this._runTask(zya(t, e === !0), v1(arguments));
            }
            init(t) {
              return this._runTask(Zya(t === !0, this._executor.cwd, m9(arguments)), v1(arguments));
            }
            merge() {
              return this._runTask(oli(m9(arguments)), v1(arguments));
            }
            mergeFromTo(t, e) {
              return m3(t) && m3(e)
                ? this._runTask(oli([t, e, ...m9(arguments)]), v1(arguments, !1))
                : this._runTask(
                    d9("Git.mergeFromTo requires that the 'remote' and 'branch' arguments are supplied as strings"),
                  );
            }
            outputHandler(t) {
              return ((this._executor.outputHandler = t), this);
            }
            push() {
              let t = H1r({ remote: iy(arguments[0], m3), branch: iy(arguments[1], m3) }, m9(arguments));
              return this._runTask(t, v1(arguments));
            }
            stash() {
              return this._runTask(K2(["stash", ...m9(arguments)]), v1(arguments));
            }
            status() {
              return this._runTask(C_a(m9(arguments)), v1(arguments));
            }
          }),
          Object.assign(v1r.prototype, Lya(), qya(), Aya(), Uya(), Vya(), vya(), u_a(), A_a(), x_a()));
      },
    })),
      (V0i = {}));
    af(V0i, { Scheduler: () => z0i });
    ((R_a = Rn({
      "src/lib/runners/scheduler.ts"() {
        "use strict";
        (Zo(),
          c0i(),
          (mli = (() => {
            let t = 0;
            return () => {
              t++;
              let { promise: e, done: r } = (0, W0i.createDeferred)();
              return { promise: e, done: r, id: t };
            };
          })()),
          (z0i = class {
            constructor(t = 2) {
              ((this.concurrency = t),
                (this.logger = L1r("", "scheduler")),
                (this.pending = []),
                (this.running = []),
                this.logger("Constructed, concurrency=%s", t));
            }
            schedule() {
              if (!this.pending.length || this.running.length >= this.concurrency) {
                this.logger(
                  "Schedule attempt ignored, pending=%s running=%s concurrency=%s",
                  this.pending.length,
                  this.running.length,
                  this.concurrency,
                );
                return;
              }
              let t = wc(this.running, this.pending.shift());
              (this.logger("Attempting id=%s", t.id),
                t.done(() => {
                  (this.logger("Completing id=", t.id), mct(this.running, t), this.schedule());
                }));
            }
            next() {
              let { promise: t, id: e } = wc(this.pending, mli());
              return (this.logger("Scheduling id=%s", e), this.schedule(), t);
            }
          }));
      },
    })),
      (Y0i = {}));
    af(Y0i, { applyPatchTask: () => k_a });
    O_a = Rn({
      "src/lib/tasks/apply-patch.ts"() {
        "use strict";
        sf();
      },
    });
    B_a = Rn({
      "src/lib/responses/BranchDeleteSummary.ts"() {
        "use strict";
        K0i = class {
          constructor() {
            ((this.all = []), (this.branches = {}), (this.errors = []));
          }
          get success() {
            return !this.errors.length;
          }
        };
      },
    });
    ((L_a = Rn({
      "src/lib/parsers/parse-branch-delete.ts"() {
        "use strict";
        (B_a(),
          Zo(),
          (dli = /(\S+)\s+\(\S+\s([^)]+)\)/),
          (C1r = /^error[^']+'([^']+)'/m),
          (fli = [
            new Os(dli, (t, [e, r]) => {
              let n = N_a(e, r);
              (t.all.push(n), (t.branches[e] = n));
            }),
            new Os(C1r, (t, [e]) => {
              let r = P_a(e);
              (t.errors.push(r), t.all.push(r), (t.branches[e] = r));
            }),
          ]),
          (Act = (t, e) => f9(new K0i(), fli, [t, e])));
      },
    })),
      (M_a = Rn({
        "src/lib/responses/BranchSummary.ts"() {
          "use strict";
          X0i = class {
            constructor() {
              ((this.all = []), (this.branches = {}), (this.current = ""), (this.detached = !1));
            }
            push(t, e, r, n, o) {
              (t === "*" && ((this.detached = e), (this.current = r)),
                this.all.push(r),
                (this.branches[r] = { current: t === "*", linkedWorkTree: t === "+", name: r, commit: n, label: o }));
            }
          };
        },
      })));
    ((F_a = Rn({
      "src/lib/parsers/parse-branch.ts"() {
        "use strict";
        (M_a(),
          Zo(),
          (emi = [
            new Os(/^([*+]\s)?\((?:HEAD )?detached (?:from|at) (\S+)\)\s+([a-z0-9]+)\s(.*)$/, (t, [e, r, n, o]) => {
              t.push(pli(e), !0, r, n, o);
            }),
            new Os(/^([*+]\s)?(\S+)\s+([a-z0-9]+)\s?(.*)$/s, (t, [e, r, n, o]) => {
              t.push(pli(e), !1, r, n, o);
            }),
          ]),
          (tmi = new Os(/^(\S+)$/s, (t, [e]) => {
            t.push("*", !1, e, "", "");
          })));
      },
    })),
      (rmi = {}));
    af(rmi, {
      branchLocalTask: () => $_a,
      branchTask: () => U_a,
      containsDeleteBranchCommand: () => nmi,
      deleteBranchTask: () => Q_a,
      deleteBranchesTask: () => j_a,
    });
    G_a = Rn({
      "src/lib/tasks/branch.ts"() {
        "use strict";
        (X0e(), L_a(), F_a(), Zo());
      },
    });
    ((V_a = Rn({
      "src/lib/responses/CheckIgnore.ts"() {
        "use strict";
        imi = (t) => t.split(/\n/g).map(H_a).filter(Boolean);
      },
    })),
      (omi = {}));
    af(omi, { checkIgnoreTask: () => W_a });
    ((z_a = Rn({
      "src/lib/tasks/check-ignore.ts"() {
        "use strict";
        V_a();
      },
    })),
      (smi = {}));
    af(smi, { cloneMirrorTask: () => K_a, cloneTask: () => ami });
    J_a = Rn({
      "src/lib/tasks/clone.ts"() {
        "use strict";
        (sf(), Zo());
      },
    });
    ((Z_a = Rn({
      "src/lib/parsers/parse-fetch.ts"() {
        "use strict";
        (Zo(),
          (umi = [
            new Os(/From (.+)$/, (t, [e]) => {
              t.remote = e;
            }),
            new Os(/\* \[new branch]\s+(\S+)\s*-> (.+)$/, (t, [e, r]) => {
              t.branches.push({ name: e, tracking: r });
            }),
            new Os(/\* \[new tag]\s+(\S+)\s*-> (.+)$/, (t, [e, r]) => {
              t.tags.push({ name: e, tracking: r });
            }),
            new Os(/- \[deleted]\s+\S+\s*-> (.+)$/, (t, [e]) => {
              t.deleted.push({ tracking: e });
            }),
            new Os(/\s*([^.]+)\.\.(\S+)\s+(\S+)\s*-> (.+)$/, (t, [e, r, n, o]) => {
              t.updated.push({ name: n, tracking: o, to: r, from: e });
            }),
          ]));
      },
    })),
      (cmi = {}));
    af(cmi, { fetchTask: () => tEa });
    rEa = Rn({
      "src/lib/tasks/fetch.ts"() {
        "use strict";
        (Z_a(), sf());
      },
    });
    ((iEa = Rn({
      "src/lib/parsers/parse-move.ts"() {
        "use strict";
        (Zo(),
          (lmi = [
            new Os(/^Renaming (.+) to (.+)$/, (t, [e, r]) => {
              t.moves.push({ from: e, to: r });
            }),
          ]));
      },
    })),
      (mmi = {}));
    af(mmi, { moveTask: () => oEa });
    ((sEa = Rn({
      "src/lib/tasks/move.ts"() {
        "use strict";
        (iEa(), Zo());
      },
    })),
      (dmi = {}));
    af(dmi, { pullTask: () => aEa });
    uEa = Rn({
      "src/lib/tasks/pull.ts"() {
        "use strict";
        (X0e(), B0i(), Zo());
      },
    });
    ((mEa = Rn({
      "src/lib/responses/GetRemoteSummary.ts"() {
        "use strict";
        Zo();
      },
    })),
      (pmi = {}));
    af(pmi, {
      addRemoteTask: () => dEa,
      getRemotesTask: () => fEa,
      listRemotesTask: () => pEa,
      remoteTask: () => hEa,
      removeRemoteTask: () => gEa,
    });
    ((bEa = Rn({
      "src/lib/tasks/remote.ts"() {
        "use strict";
        (mEa(), sf());
      },
    })),
      (hmi = {}));
    af(hmi, { stashListTask: () => AEa });
    ((yEa = Rn({
      "src/lib/tasks/stash-list.ts"() {
        "use strict";
        (Y4e(), C0i(), G1r(), x0i());
      },
    })),
      (gmi = {}));
    af(gmi, {
      addSubModuleTask: () => _Ea,
      initSubModuleTask: () => EEa,
      subModuleTask: () => yct,
      updateSubModuleTask: () => vEa,
    });
    CEa = Rn({
      "src/lib/tasks/sub-module.ts"() {
        "use strict";
        sf();
      },
    });
    ((xEa = Rn({
      "src/lib/responses/TagList.ts"() {
        "use strict";
        ((hli = class {
          constructor(t, e) {
            ((this.all = t), (this.latest = e));
          }
        }),
          (Ami = function (t, e = !1) {
            let r = t
              .split(
                `
`,
              )
              .map(wEa)
              .filter(Boolean);
            e ||
              r.sort(function (o, s) {
                let a = o.split("."),
                  u = s.split(".");
                if (a.length === 1 || u.length === 1) return SEa(Zut(a[0]), Zut(u[0]));
                for (let c = 0, m = Math.max(a.length, u.length); c < m; c++) {
                  let d = bmi(Zut(a[c]), Zut(u[c]));
                  if (d) return d;
                }
                return 0;
              });
            let n = e ? r[0] : [...r].reverse().find((o) => o.indexOf(".") >= 0);
            return new hli(r, n);
          }));
      },
    })),
      (ymi = {}));
    af(ymi, { addAnnotatedTagTask: () => IEa, addTagTask: () => DEa, tagListTask: () => TEa });
    ((REa = Rn({
      "src/lib/tasks/tag.ts"() {
        "use strict";
        xEa();
      },
    })),
      (kEa = G6a({
        "src/git.js"(t, e) {
          "use strict";
          var { GitExecutor: r } = (kya(), E1(m0i)),
            { SimpleGitApi: n } = (I_a(), E1(H0i)),
            { Scheduler: o } = (R_a(), E1(V0i)),
            { configurationErrorTask: s } = (sf(), E1(g1r)),
            {
              asArray: a,
              filterArray: u,
              filterPrimitives: c,
              filterString: m,
              filterStringOrStringArray: d,
              filterType: f,
              getTrailingOptions: p,
              trailingFunctionArgument: h,
              trailingOptionsArgument: g,
            } = (Zo(), E1(Bli)),
            { applyPatchTask: b } = (O_a(), E1(Y0i)),
            { branchTask: A, branchLocalTask: y, deleteBranchesTask: E, deleteBranchTask: v } = (G_a(), E1(rmi)),
            { checkIgnoreTask: C } = (z_a(), E1(omi)),
            { checkIsRepoTask: x } = (Uli(), E1(Lli)),
            { cloneTask: k, cloneMirrorTask: R } = (J_a(), E1(smi)),
            { cleanWithOptionsTask: P, isCleanOptionsArray: D } = (Kli(), E1(zli)),
            { diffSummaryTask: O } = (G1r(), E1(S0i)),
            { fetchTask: N } = (rEa(), E1(cmi)),
            { moveTask: F } = (sEa(), E1(mmi)),
            { pullTask: B } = (uEa(), E1(dmi)),
            { pushTagsTask: L } = (U0i(), E1(F0i)),
            {
              addRemoteTask: G,
              getRemotesTask: Q,
              listRemotesTask: K,
              remoteTask: H,
              removeRemoteTask: U,
            } = (bEa(), E1(pmi)),
            { getResetMode: Y, resetTask: X } = (u0i(), E1(o0i)),
            { stashListTask: J } = (yEa(), E1(hmi)),
            {
              addSubModuleTask: q,
              initSubModuleTask: ne,
              subModuleTask: de,
              updateSubModuleTask: ce,
            } = (CEa(), E1(gmi)),
            { addAnnotatedTagTask: ye, addTagTask: Z, tagListTask: oe } = (REa(), E1(ymi)),
            { straightThroughBufferTask: ue, straightThroughStringTask: he } = (sf(), E1(g1r));
          function se(ge, V) {
            ((this._plugins = V),
              (this._executor = new r(ge.baseDir, new o(ge.maxConcurrentProcesses), V)),
              (this._trimmed = ge.trimmed));
          }
          (((se.prototype = Object.create(n.prototype)).constructor = se),
            (se.prototype.customBinary = function (ge) {
              return (this._plugins.reconfigure("binary", ge), this);
            }),
            (se.prototype.env = function (ge, V) {
              return (
                arguments.length === 1 && typeof ge == "object"
                  ? (this._executor.env = ge)
                  : ((this._executor.env = this._executor.env || {})[ge] = V),
                this
              );
            }),
            (se.prototype.stashList = function (ge) {
              return this._runTask(J(g(arguments) || {}, (u(ge) && ge) || []), h(arguments));
            }));
          function fe(ge, V, ee, Ce) {
            return typeof ee != "string"
              ? s(`git.${ge}() requires a string 'repoPath'`)
              : V(ee, f(Ce, m), p(arguments));
          }
          ((se.prototype.clone = function () {
            return this._runTask(fe("clone", k, ...arguments), h(arguments));
          }),
            (se.prototype.mirror = function () {
              return this._runTask(fe("mirror", R, ...arguments), h(arguments));
            }),
            (se.prototype.mv = function (ge, V) {
              return this._runTask(F(ge, V), h(arguments));
            }),
            (se.prototype.checkoutLatestTag = function (ge) {
              var V = this;
              return this.pull(function () {
                V.tags(function (ee, Ce) {
                  V.checkout(Ce.latest, ge);
                });
              });
            }),
            (se.prototype.pull = function (ge, V, ee, Ce) {
              return this._runTask(B(f(ge, m), f(V, m), p(arguments)), h(arguments));
            }),
            (se.prototype.fetch = function (ge, V) {
              return this._runTask(N(f(ge, m), f(V, m), p(arguments)), h(arguments));
            }),
            (se.prototype.silent = function (ge) {
              return (
                console.warn(
                  "simple-git deprecation notice: git.silent: logging should be configured using the `debug` library / `DEBUG` environment variable, this will be an error in version 3",
                ),
                this
              );
            }),
            (se.prototype.tags = function (ge, V) {
              return this._runTask(oe(p(arguments)), h(arguments));
            }),
            (se.prototype.rebase = function () {
              return this._runTask(he(["rebase", ...p(arguments)]), h(arguments));
            }),
            (se.prototype.reset = function (ge) {
              return this._runTask(X(Y(ge), p(arguments)), h(arguments));
            }),
            (se.prototype.revert = function (ge) {
              let V = h(arguments);
              return typeof ge != "string"
                ? this._runTask(s("Commit must be a string"), V)
                : this._runTask(he(["revert", ...p(arguments, 0, !0), ge]), V);
            }),
            (se.prototype.addTag = function (ge) {
              let V = typeof ge == "string" ? Z(ge) : s("Git.addTag requires a tag name");
              return this._runTask(V, h(arguments));
            }),
            (se.prototype.addAnnotatedTag = function (ge, V) {
              return this._runTask(ye(ge, V), h(arguments));
            }),
            (se.prototype.deleteLocalBranch = function (ge, V, ee) {
              return this._runTask(v(ge, typeof V == "boolean" ? V : !1), h(arguments));
            }),
            (se.prototype.deleteLocalBranches = function (ge, V, ee) {
              return this._runTask(E(ge, typeof V == "boolean" ? V : !1), h(arguments));
            }),
            (se.prototype.branch = function (ge, V) {
              return this._runTask(A(p(arguments)), h(arguments));
            }),
            (se.prototype.branchLocal = function (ge) {
              return this._runTask(y(), h(arguments));
            }),
            (se.prototype.raw = function (ge) {
              let V = !Array.isArray(ge),
                ee = [].slice.call(V ? arguments : ge, 0);
              for (let pe = 0; pe < ee.length && V; pe++)
                if (!c(ee[pe])) {
                  ee.splice(pe, ee.length - pe);
                  break;
                }
              ee.push(...p(arguments, 0, !0));
              var Ce = h(arguments);
              return ee.length
                ? this._runTask(he(ee, this._trimmed), Ce)
                : this._runTask(s("Raw: must supply one or more command to execute"), Ce);
            }),
            (se.prototype.submoduleAdd = function (ge, V, ee) {
              return this._runTask(q(ge, V), h(arguments));
            }),
            (se.prototype.submoduleUpdate = function (ge, V) {
              return this._runTask(ce(p(arguments, !0)), h(arguments));
            }),
            (se.prototype.submoduleInit = function (ge, V) {
              return this._runTask(ne(p(arguments, !0)), h(arguments));
            }),
            (se.prototype.subModule = function (ge, V) {
              return this._runTask(de(p(arguments)), h(arguments));
            }),
            (se.prototype.listRemote = function () {
              return this._runTask(K(p(arguments)), h(arguments));
            }),
            (se.prototype.addRemote = function (ge, V, ee) {
              return this._runTask(G(ge, V, p(arguments)), h(arguments));
            }),
            (se.prototype.removeRemote = function (ge, V) {
              return this._runTask(U(ge), h(arguments));
            }),
            (se.prototype.getRemotes = function (ge, V) {
              return this._runTask(Q(ge === !0), h(arguments));
            }),
            (se.prototype.remote = function (ge, V) {
              return this._runTask(H(p(arguments)), h(arguments));
            }),
            (se.prototype.tag = function (ge, V) {
              let ee = p(arguments);
              return (ee[0] !== "tag" && ee.unshift("tag"), this._runTask(he(ee), h(arguments)));
            }),
            (se.prototype.updateServerInfo = function (ge) {
              return this._runTask(he(["update-server-info"]), h(arguments));
            }),
            (se.prototype.pushTags = function (ge, V) {
              let ee = L({ remote: f(ge, m) }, p(arguments));
              return this._runTask(ee, h(arguments));
            }),
            (se.prototype.rm = function (ge) {
              return this._runTask(he(["rm", "-f", ...a(ge)]), h(arguments));
            }),
            (se.prototype.rmKeepLocal = function (ge) {
              return this._runTask(he(["rm", "--cached", ...a(ge)]), h(arguments));
            }),
            (se.prototype.catFile = function (ge, V) {
              return this._catFile("utf-8", arguments);
            }),
            (se.prototype.binaryCatFile = function () {
              return this._catFile("buffer", arguments);
            }),
            (se.prototype._catFile = function (ge, V) {
              var ee = h(V),
                Ce = ["cat-file"],
                pe = V[0];
              if (typeof pe == "string")
                return this._runTask(s("Git.catFile: options must be supplied as an array of strings"), ee);
              Array.isArray(pe) && Ce.push.apply(Ce, pe);
              let be = ge === "buffer" ? ue(Ce) : he(Ce);
              return this._runTask(be, ee);
            }),
            (se.prototype.diff = function (ge, V) {
              let ee = m(ge)
                ? s(
                    "git.diff: supplying options as a single string is no longer supported, switch to an array of strings",
                  )
                : he(["diff", ...p(arguments)]);
              return this._runTask(ee, h(arguments));
            }),
            (se.prototype.diffSummary = function () {
              return this._runTask(O(p(arguments, 1)), h(arguments));
            }),
            (se.prototype.applyPatch = function (ge) {
              let V = d(ge)
                ? b(a(ge), p([].slice.call(arguments, 1)))
                : s("git.applyPatch requires one or more string patches as the first argument");
              return this._runTask(V, h(arguments));
            }),
            (se.prototype.revparse = function () {
              let ge = ["rev-parse", ...p(arguments, !0)];
              return this._runTask(he(ge, !0), h(arguments));
            }),
            (se.prototype.clean = function (ge, V, ee) {
              let Ce = D(ge),
                pe = (Ce && ge.join("")) || f(ge, m) || "",
                be = p([].slice.call(arguments, Ce ? 1 : 0));
              return this._runTask(P(pe, be), h(arguments));
            }),
            (se.prototype.exec = function (ge) {
              let V = {
                commands: [],
                format: "utf-8",
                parser() {
                  typeof ge == "function" && ge();
                },
              };
              return this._runTask(V);
            }),
            (se.prototype.clearQueue = function () {
              return this;
            }),
            (se.prototype.checkIgnore = function (ge, V) {
              return this._runTask(C(a(f(ge, d, []))), h(arguments));
            }),
            (se.prototype.checkIsRepo = function (ge, V) {
              return this._runTask(x(f(ge, m)), h(arguments));
            }),
            (e.exports = se));
        },
      })));
    q4e();
    ZU();
    OEa = class extends aN {
      constructor(t, e) {
        (super(void 0, e), (this.config = t));
      }
    };
    ZU();
    ZU();
    sN = class extends aN {
      constructor(t, e, r) {
        (super(t, r), (this.task = t), (this.plugin = e), Object.setPrototypeOf(this, new.target.prototype));
      }
    };
    X0e();
    Eli();
    Uli();
    Kli();
    Zli();
    t0i();
    i0i();
    u0i();
    Zo();
    Zo();
    gli = (0, K0e.deferred)().promise;
    Zo();
    (($Ea =
      "Invalid value supplied for custom binary, requires a single string or an array containing either one or two strings"),
      (bli =
        "Invalid value supplied for custom binary, restricted characters must be removed or supply the unsafe.allowUnsafeCustomBinary option"));
    ZU();
    Zo();
    WEa = class {
      constructor() {
        ((this.plugins = new Set()), (this.events = new VEa()));
      }
      on(t, e) {
        this.events.on(t, e);
      }
      reconfigure(t, e) {
        this.events.emit(t, e);
      }
      append(t, e) {
        let r = wc(this.plugins, { type: t, action: e });
        return () => this.plugins.delete(r);
      }
      add(t) {
        let e = [];
        return (
          zD(t).forEach((r) => r && this.plugins.add(wc(e, r))),
          () => {
            e.forEach((r) => this.plugins.delete(r));
          }
        );
      }
      exec(t, e, r) {
        let n = e,
          o = Object.freeze(Object.create(r));
        for (let s of this.plugins) s.type === t && (n = s.action(n, o));
        return n;
      }
    };
    Zo();
    Zo();
    q4e();
    Zo();
    ZEa = kEa();
    X0e();
    _ct = eva;
  });
import * as J2 from "fs/promises";
import * as hv from "path";
var gv,
  W1r = j(() => {
    "use strict";
    E0();
    _mi();
    Pa();
    TO();
    gv = class {
      projectRoot;
      constructor(e) {
        this.projectRoot = hv.resolve(e);
      }
      getHistoryDir() {
        let e = gOe(this.projectRoot);
        return hv.join(Tn(), "history", e);
      }
      async initialize() {
        if (!(await this.verifyGitAvailability()))
          throw new Error(
            "Checkpointing is enabled, but Git is not installed. Please install Git or disable checkpointing to continue.",
          );
        await this.setupShadowGitRepository();
      }
      verifyGitAvailability() {
        return Promise.resolve(w0());
      }
      async setupShadowGitRepository() {
        let e = this.getHistoryDir(),
          r = hv.join(e, ".git"),
          n = hv.join(e, ".gitconfig");
        (await J2.mkdir(e, { recursive: !0 }),
          await J2.writeFile(
            n,
            `[user]
  name = iFlow CLI
  email = noreply@iflow.cn
[commit]
  gpgsign = false
`,
          ));
        let s = _ct(e).env({
            GIT_DIR: r,
            GIT_WORK_TREE: e,
            HOME: e,
            XDG_CONFIG_HOME: e,
            GIT_CONFIG_GLOBAL: n,
            GIT_CONFIG_SYSTEM: process.platform === "win32" ? "nul" : "/dev/null",
          }),
          a = !1;
        try {
          (await J2.access(r), (a = !0));
        } catch {
          a = !1;
        }
        if (!a) {
          await s.init(!1, { "--initial-branch": "main" });
          try {
            await s.commit("Initial commit", { "--allow-empty": null });
          } catch {}
        }
        let u = hv.join(this.projectRoot, ".gitignore"),
          c = hv.join(e, ".gitignore"),
          m = "";
        try {
          m = await J2.readFile(u, "utf-8");
        } catch (p) {
          if (Go(p) && p.code !== "ENOENT") throw p;
        }
        let f =
          m +
          `
` +
          `
# === Dependencies ===
node_modules/
.pnp/
.pnp.js
vendor/
bower_components/

# === Python/Virtual environments ===
.venv/
venv/
env/
ENV/
__pycache__/
*.pyc
*.pyo
*.pyd
.Python
pip-log.txt
pip-delete-this-directory.txt

# === Build outputs ===
dist/
build/
.next/
.nuxt/
out/
target/
*.tsbuildinfo
.gradle/
*.class
*.jar
*.war
*.ear

# === Caches ===
.npm/
.yarn/
.pnpm-store/
.cache/
.parcel-cache/
.eslintcache
.sass-cache/

# === IDEs ===
.idea/
.vscode/
*.swp
*.swo
*~
.project
.classpath
.settings/

# === OS ===
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db
Desktop.ini

# === Images (\u4FDD\u7559\u5C0F\u56FE\u6807\u548C SVG) ===
*.jpg
*.jpeg
*.png
!icon*.png
!logo*.png
!*-icon.png
!*-logo.png
*.gif
*.bmp
*.tiff
*.ico
*.webp
*.heic
*.heif

# === Font files ===
*.ttf
*.otf
*.woff
*.woff2
*.eot

# === Video files ===
*.mp4
*.avi
*.mov
*.wmv
*.flv
*.mkv
*.webm
*.m4v
*.3gp
*.mpeg
*.mpg

# === Audio files ===
*.mp3
*.wav
*.flac
*.aac
*.ogg
*.m4a
*.wma

# === Documents ===
*.pdf
*.doc
*.docx
*.ppt
*.pptx
*.xls
*.xlsx
*.odt
*.ods
*.odp

# === Archives ===
*.zip
*.tar
*.tar.gz
*.tgz
*.rar
*.7z
*.gz
*.bz2
*.xz
*.iso

# === Binary and compiled files ===
*.exe
*.dll
*.so
*.dylib
*.a
*.lib
*.o
*.obj
*.out
*.app

# === Database files ===
*.db
*.sqlite
*.sqlite3
*.mdb
*.accdb

# === Log files ===
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*

# === Temporary files ===
*.tmp
*.temp
*.bak
*.swp
*.swo
*~
`;
        await J2.writeFile(c, f);
      }
      get shadowGitRepository() {
        let e = this.getHistoryDir(),
          r = hv.join(e, ".gitconfig");
        return _ct(this.projectRoot).env({
          GIT_DIR: hv.join(e, ".git"),
          GIT_WORK_TREE: this.projectRoot,
          HOME: e,
          XDG_CONFIG_HOME: e,
          GIT_CONFIG_GLOBAL: r,
          GIT_CONFIG_SYSTEM: process.platform === "win32" ? "nul" : "/dev/null",
        });
      }
      async getCurrentCommitHash() {
        return (await this.shadowGitRepository.raw("rev-parse", "HEAD")).trim();
      }
      async createFileSnapshot(e) {
        let r = this.shadowGitRepository;
        await r.add(".");
        try {
          return (await r.commit(e)).commit;
        } catch {
          return "";
        }
      }
      async restoreProjectFromSnapshot(e) {
        let r = this.shadowGitRepository;
        (await r.raw(["checkout", e, "--", "."]), await r.clean("f", ["-d"]));
      }
      parseDiffStats(e) {
        if (!e || e.trim() === "") return { additions: 0, deletions: 0 };
        let r = e.trim().split(`
`),
          n = 0,
          o = 0;
        for (let s of r) {
          let a = s.split("	");
          if (a.length >= 2) {
            let u = parseInt(a[0], 10) || 0,
              c = parseInt(a[1], 10) || 0;
            ((n += u), (o += c));
          }
        }
        return { additions: n, deletions: o };
      }
      async getFileDiffStats(e, r, n) {
        try {
          let s = await this.shadowGitRepository.raw(["diff", "--numstat", e, r, "--", n]);
          return this.parseDiffStats(s);
        } catch (o) {
          return (console.warn("Failed to get file diff stats:", o), { additions: 0, deletions: 0 });
        }
      }
      async getProjectDiffStats(e) {
        try {
          let n = await this.shadowGitRepository.raw(["diff", "--numstat", e]);
          return this.parseDiffStats(n);
        } catch (r) {
          return (console.warn("Failed to get project diff stats:", r), { additions: 0, deletions: 0 });
        }
      }
      async getProjectDiffStatsBetweenCommits(e, r) {
        try {
          let o = await this.shadowGitRepository.raw(["diff", "--numstat", e, r]);
          return this.parseDiffStats(o);
        } catch (n) {
          return (console.warn("Failed to get project diff stats between commits:", n), { additions: 0, deletions: 0 });
        }
      }
      async cleanupOldCommits(e) {
        if (!(e <= 0))
          try {
            let r = this.getHistoryDir();
            (await _ct(r)
              .env({ GIT_DIR: hv.join(r, ".git"), GIT_WORK_TREE: r, HOME: r, XDG_CONFIG_HOME: r })
              .raw(["gc", "--auto"]),
              console.log("Git optimization: repository optimized, all history retained"));
          } catch (r) {
            console.warn("Git cleanup failed (non-critical):", r);
          }
      }
      async getCommitCount() {
        try {
          return (await this.shadowGitRepository.log()).all.filter((r) => !r.message.includes("Initial commit")).length;
        } catch {
          return 0;
        }
      }
      async calculateDirSize(e) {
        let r = 0;
        try {
          let n = await J2.readdir(e, { withFileTypes: !0 });
          for (let o of n) {
            let s = hv.join(e, o.name);
            if (o.isDirectory()) r += await this.calculateDirSize(s);
            else {
              let a = await J2.stat(s);
              r += a.size;
            }
          }
        } catch {}
        return r;
      }
      async getDirectorySize(e) {
        try {
          return await this.calculateDirSize(e);
        } catch {
          return 0;
        }
      }
      async cleanupAllHistory() {
        let e = this.getHistoryDir(),
          r = await this.getCommitCount(),
          n = await this.getDirectorySize(e);
        return (await J2.rm(e, { recursive: !0, force: !0 }), { freedSpace: n, deletedCommits: r });
      }
    };
  });
import * as vmi from "fs/promises";
import * as Cmi from "path";
async function Smi(t, e) {
  let { fileName: r, ignoreDirs: n = [], maxDirs: o = 1 / 0, debug: s = !1, fileService: a } = e,
    u = [],
    c = [t],
    m = new Set(),
    d = 0,
    f = 0,
    p = new Set(n),
    h = 15;
  for (; f < c.length && d < o; ) {
    let g = Math.min(h, o - d),
      b = [];
    for (; b.length < g && f < c.length; ) {
      let E = c[f];
      (f++, m.has(E) || (m.add(E), b.push(E)));
    }
    if (((d += b.length), b.length === 0)) continue;
    s && Emi.debug(`Scanning [${d}/${o}]: batch of ${b.length}`);
    let A = b.map(async (E) => {
        try {
          let v = await vmi.readdir(E, { withFileTypes: !0 });
          return { currentDir: E, entries: v };
        } catch (v) {
          let C = v?.message ?? "Unknown error";
          return (
            console.warn(`[WARN] Skipping unreadable directory: ${E} (${C})`),
            s && Emi.debug(`Full error for ${E}:`, v),
            { currentDir: E, entries: [] }
          );
        }
      }),
      y = await Promise.all(A);
    for (let { currentDir: E, entries: v } of y)
      for (let C of v) {
        let x = Cmi.join(E, C.name);
        a?.shouldIgnoreFile(x, {
          respectGitIgnore: e.fileFilteringOptions?.respectGitIgnore,
          respectGeminiIgnore: e.fileFilteringOptions?.respectGeminiIgnore,
        }) || (C.isDirectory() ? p.has(C.name) || c.push(x) : C.isFile() && C.name === r && u.push(x));
      }
  }
  return u;
}
var Emi,
  wmi = j(() => {
    "use strict";
    Emi = { debug: (...t) => console.debug("[DEBUG] [BfsFileSearch]", ...t) };
  });
function J1r() {
  return {
    async: !1,
    breaks: !1,
    extensions: null,
    gfm: !0,
    hooks: null,
    pedantic: !1,
    renderer: null,
    silent: !1,
    tokenizer: null,
    walkTokens: null,
  };
}
function kmi(t) {
  HY = t;
}
function dl(t, e = "") {
  let r = typeof t == "string" ? t : t.source,
    n = {
      replace: (o, s) => {
        let a = typeof s == "string" ? s : s.source;
        return ((a = a.replace(X2.caret, "$1")), (r = r.replace(o, a)), n);
      },
      getRegex: () => new RegExp(r, e),
    };
  return n;
}
function YD(t, e) {
  if (e) {
    if (X2.escapeTest.test(t)) return t.replace(X2.escapeReplace, Tmi);
  } else if (X2.escapeTestNoEncode.test(t)) return t.replace(X2.escapeReplaceNoEncode, Tmi);
  return t;
}
function Dmi(t) {
  try {
    t = encodeURI(t).replace(X2.percentDecode, "%");
  } catch {
    return null;
  }
  return t;
}
function Imi(t, e) {
  let r = t.replace(X2.findPipe, (s, a, u) => {
      let c = !1,
        m = a;
      for (; --m >= 0 && u[m] === "\\"; ) c = !c;
      return c ? "|" : " |";
    }),
    n = r.split(X2.splitPipe),
    o = 0;
  if ((n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), e))
    if (n.length > e) n.splice(e);
    else for (; n.length < e; ) n.push("");
  for (; o < n.length; o++) n[o] = n[o].trim().replace(X2.slashPipe, "|");
  return n;
}
function J4e(t, e, r) {
  let n = t.length;
  if (n === 0) return "";
  let o = 0;
  for (; o < n; ) {
    let s = t.charAt(n - o - 1);
    if (s === e && !r) o++;
    else if (s !== e && r) o++;
    else break;
  }
  return t.slice(0, n - o);
}
function Pva(t, e) {
  if (t.indexOf(e[1]) === -1) return -1;
  let r = 0;
  for (let n = 0; n < t.length; n++)
    if (t[n] === "\\") n++;
    else if (t[n] === e[0]) r++;
    else if (t[n] === e[1] && (r--, r < 0)) return n;
  return r > 0 ? -2 : -1;
}
function Rmi(t, e, r, n, o) {
  let s = e.href,
    a = e.title || null,
    u = t[1].replace(o.other.outputLinkReplace, "$1");
  n.state.inLink = !0;
  let c = {
    type: t[0].charAt(0) === "!" ? "image" : "link",
    raw: r,
    href: s,
    title: a,
    text: u,
    tokens: n.inlineTokens(u),
  };
  return ((n.state.inLink = !1), c);
}
function Bva(t, e, r) {
  let n = t.match(r.other.indentCodeCompensation);
  if (n === null) return e;
  let o = n[1];
  return e
    .split(
      `
`,
    )
    .map((s) => {
      let a = s.match(r.other.beginningSpace);
      if (a === null) return s;
      let [u] = a;
      return u.length >= o.length ? s.slice(o.length) : s;
    }).join(`
`);
}
function ml(t, e) {
  return qY.parse(t, e);
}
var HY,
  X4e,
  X2,
  tva,
  rva,
  nva,
  Z4e,
  iva,
  X1r,
  Omi,
  Nmi,
  ova,
  Z1r,
  sva,
  efr,
  ava,
  uva,
  xct,
  tfr,
  cva,
  Pmi,
  lva,
  rfr,
  xmi,
  mva,
  dva,
  fva,
  pva,
  Bmi,
  hva,
  Tct,
  nfr,
  Lmi,
  gva,
  Mmi,
  bva,
  Ava,
  yva,
  Fmi,
  _va,
  Eva,
  Umi,
  vva,
  Cva,
  Sva,
  wva,
  xva,
  Tva,
  Dva,
  Cct,
  Iva,
  $mi,
  jmi,
  Rva,
  ifr,
  kva,
  z1r,
  Ova,
  Ect,
  K4e,
  Nva,
  Tmi,
  Sct,
  uN,
  wct,
  ofr,
  cN,
  vct,
  Lva,
  qY,
  MMc,
  FMc,
  UMc,
  $Mc,
  jMc,
  QMc,
  GMc,
  Qmi = j(() => {
    HY = J1r();
    X4e = { exec: () => null };
    ((X2 = {
      codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
      outputLinkReplace: /\\([\[\]])/g,
      indentCodeCompensation: /^(\s+)(?:```)/,
      beginningSpace: /^\s+/,
      endingHash: /#$/,
      startingSpaceChar: /^ /,
      endingSpaceChar: / $/,
      nonSpaceChar: /[^ ]/,
      newLineCharGlobal: /\n/g,
      tabCharGlobal: /\t/g,
      multipleSpaceGlobal: /\s+/g,
      blankLine: /^[ \t]*$/,
      doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
      blockquoteStart: /^ {0,3}>/,
      blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
      blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
      listReplaceTabs: /^\t+/,
      listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
      listIsTask: /^\[[ xX]\] /,
      listReplaceTask: /^\[[ xX]\] +/,
      anyLine: /\n.*\n/,
      hrefBrackets: /^<(.*)>$/,
      tableDelimiter: /[:|]/,
      tableAlignChars: /^\||\| *$/g,
      tableRowBlankLine: /\n[ \t]*$/,
      tableAlignRight: /^ *-+: *$/,
      tableAlignCenter: /^ *:-+: *$/,
      tableAlignLeft: /^ *:-+ *$/,
      startATag: /^<a /i,
      endATag: /^<\/a>/i,
      startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
      endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
      startAngleBracket: /^</,
      endAngleBracket: />$/,
      pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
      unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
      escapeTest: /[&<>"']/,
      escapeReplace: /[&<>"']/g,
      escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
      escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
      unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,
      caret: /(^|[^\[])\^/g,
      percentDecode: /%25/g,
      findPipe: /\|/g,
      splitPipe: / \|/,
      slashPipe: /\\\|/g,
      carriageReturn: /\r\n|\r/g,
      spaceLine: /^ +$/gm,
      notSpaceStart: /^\S*/,
      endingNewline: /\n$/,
      listItemRegex: (t) => new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),
      nextBulletRegex: (t) => new RegExp(`^ {0,${Math.min(3, t - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
      hrRegex: (t) => new RegExp(`^ {0,${Math.min(3, t - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
      fencesBeginRegex: (t) => new RegExp(`^ {0,${Math.min(3, t - 1)}}(?:\`\`\`|~~~)`),
      headingBeginRegex: (t) => new RegExp(`^ {0,${Math.min(3, t - 1)}}#`),
      htmlBeginRegex: (t) => new RegExp(`^ {0,${Math.min(3, t - 1)}}<(?:[a-z].*>|!--)`, "i"),
    }),
      (tva = /^(?:[ \t]*(?:\n|$))+/),
      (rva = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/),
      (nva =
        /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/),
      (Z4e = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/),
      (iva = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/),
      (X1r = /(?:[*+-]|\d{1,9}[.)])/),
      (Omi =
        /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/),
      (Nmi = dl(Omi)
        .replace(/bull/g, X1r)
        .replace(/blockCode/g, /(?: {4}| {0,3}\t)/)
        .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
        .replace(/blockquote/g, / {0,3}>/)
        .replace(/heading/g, / {0,3}#{1,6}/)
        .replace(/html/g, / {0,3}<[^\n>]+>\n/)
        .replace(/\|table/g, "")
        .getRegex()),
      (ova = dl(Omi)
        .replace(/bull/g, X1r)
        .replace(/blockCode/g, /(?: {4}| {0,3}\t)/)
        .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
        .replace(/blockquote/g, / {0,3}>/)
        .replace(/heading/g, / {0,3}#{1,6}/)
        .replace(/html/g, / {0,3}<[^\n>]+>\n/)
        .replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/)
        .getRegex()),
      (Z1r = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/),
      (sva = /^[^\n]+/),
      (efr = /(?!\s*\])(?:\\.|[^\[\]\\])+/),
      (ava = dl(
        /^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/,
      )
        .replace("label", efr)
        .replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/)
        .getRegex()),
      (uva = dl(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/)
        .replace(/bull/g, X1r)
        .getRegex()),
      (xct =
        "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul"),
      (tfr = /<!--(?:-?>|[\s\S]*?(?:-->|$))/),
      (cva = dl(
        "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))",
        "i",
      )
        .replace("comment", tfr)
        .replace("tag", xct)
        .replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/)
        .getRegex()),
      (Pmi = dl(Z1r)
        .replace("hr", Z4e)
        .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
        .replace("|lheading", "")
        .replace("|table", "")
        .replace("blockquote", " {0,3}>")
        .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
        .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
        .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)")
        .replace("tag", xct)
        .getRegex()),
      (lva = dl(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/)
        .replace("paragraph", Pmi)
        .getRegex()),
      (rfr = {
        blockquote: lva,
        code: rva,
        def: ava,
        fences: nva,
        heading: iva,
        hr: Z4e,
        html: cva,
        lheading: Nmi,
        list: uva,
        newline: tva,
        paragraph: Pmi,
        table: X4e,
        text: sva,
      }),
      (xmi = dl(
        "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
      )
        .replace("hr", Z4e)
        .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
        .replace("blockquote", " {0,3}>")
        .replace("code", "(?: {4}| {0,3}	)[^\\n]")
        .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
        .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
        .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)")
        .replace("tag", xct)
        .getRegex()),
      (mva = {
        ...rfr,
        lheading: ova,
        table: xmi,
        paragraph: dl(Z1r)
          .replace("hr", Z4e)
          .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
          .replace("|lheading", "")
          .replace("table", xmi)
          .replace("blockquote", " {0,3}>")
          .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
          .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
          .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)")
          .replace("tag", xct)
          .getRegex(),
      }),
      (dva = {
        ...rfr,
        html: dl(
          `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`,
        )
          .replace("comment", tfr)
          .replace(
            /tag/g,
            "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b",
          )
          .getRegex(),
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
        heading: /^(#{1,6})(.*)(?:\n+|$)/,
        fences: X4e,
        lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
        paragraph: dl(Z1r)
          .replace("hr", Z4e)
          .replace(
            "heading",
            ` *#{1,6} *[^
]`,
          )
          .replace("lheading", Nmi)
          .replace("|table", "")
          .replace("blockquote", " {0,3}>")
          .replace("|fences", "")
          .replace("|list", "")
          .replace("|html", "")
          .replace("|tag", "")
          .getRegex(),
      }),
      (fva = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/),
      (pva = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/),
      (Bmi = /^( {2,}|\\)\n(?!\s*$)/),
      (hva = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/),
      (Tct = /[\p{P}\p{S}]/u),
      (nfr = /[\s\p{P}\p{S}]/u),
      (Lmi = /[^\s\p{P}\p{S}]/u),
      (gva = dl(/^((?![*_])punctSpace)/, "u")
        .replace(/punctSpace/g, nfr)
        .getRegex()),
      (Mmi = /(?!~)[\p{P}\p{S}]/u),
      (bva = /(?!~)[\s\p{P}\p{S}]/u),
      (Ava = /(?:[^\s\p{P}\p{S}]|~)/u),
      (yva = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g),
      (Fmi = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/),
      (_va = dl(Fmi, "u").replace(/punct/g, Tct).getRegex()),
      (Eva = dl(Fmi, "u").replace(/punct/g, Mmi).getRegex()),
      (Umi =
        "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)"),
      (vva = dl(Umi, "gu")
        .replace(/notPunctSpace/g, Lmi)
        .replace(/punctSpace/g, nfr)
        .replace(/punct/g, Tct)
        .getRegex()),
      (Cva = dl(Umi, "gu")
        .replace(/notPunctSpace/g, Ava)
        .replace(/punctSpace/g, bva)
        .replace(/punct/g, Mmi)
        .getRegex()),
      (Sva = dl(
        "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)",
        "gu",
      )
        .replace(/notPunctSpace/g, Lmi)
        .replace(/punctSpace/g, nfr)
        .replace(/punct/g, Tct)
        .getRegex()),
      (wva = dl(/\\(punct)/, "gu")
        .replace(/punct/g, Tct)
        .getRegex()),
      (xva = dl(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/)
        .replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/)
        .replace(
          "email",
          /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,
        )
        .getRegex()),
      (Tva = dl(tfr).replace("(?:-->|$)", "-->").getRegex()),
      (Dva = dl(
        "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
      )
        .replace("comment", Tva)
        .replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/)
        .getRegex()),
      (Cct = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/),
      (Iva = dl(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/)
        .replace("label", Cct)
        .replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/)
        .replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/)
        .getRegex()),
      ($mi = dl(/^!?\[(label)\]\[(ref)\]/)
        .replace("label", Cct)
        .replace("ref", efr)
        .getRegex()),
      (jmi = dl(/^!?\[(ref)\](?:\[\])?/)
        .replace("ref", efr)
        .getRegex()),
      (Rva = dl("reflink|nolink(?!\\()", "g").replace("reflink", $mi).replace("nolink", jmi).getRegex()),
      (ifr = {
        _backpedal: X4e,
        anyPunctuation: wva,
        autolink: xva,
        blockSkip: yva,
        br: Bmi,
        code: pva,
        del: X4e,
        emStrongLDelim: _va,
        emStrongRDelimAst: vva,
        emStrongRDelimUnd: Sva,
        escape: fva,
        link: Iva,
        nolink: jmi,
        punctuation: gva,
        reflink: $mi,
        reflinkSearch: Rva,
        tag: Dva,
        text: hva,
        url: X4e,
      }),
      (kva = {
        ...ifr,
        link: dl(/^!?\[(label)\]\((.*?)\)/)
          .replace("label", Cct)
          .getRegex(),
        reflink: dl(/^!?\[(label)\]\s*\[([^\]]*)\]/)
          .replace("label", Cct)
          .getRegex(),
      }),
      (z1r = {
        ...ifr,
        emStrongRDelimAst: Cva,
        emStrongLDelim: Eva,
        url: dl(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i")
          .replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/)
          .getRegex(),
        _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
        del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
        text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
      }),
      (Ova = {
        ...z1r,
        br: dl(Bmi).replace("{2,}", "*").getRegex(),
        text: dl(z1r.text)
          .replace("\\b_", "\\b_| {2,}\\n")
          .replace(/\{2,\}/g, "*")
          .getRegex(),
      }),
      (Ect = { normal: rfr, gfm: mva, pedantic: dva }),
      (K4e = { normal: ifr, gfm: z1r, breaks: Ova, pedantic: kva }),
      (Nva = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }),
      (Tmi = (t) => Nva[t]));
    ((Sct = class {
      options;
      rules;
      lexer;
      constructor(t) {
        this.options = t || HY;
      }
      space(t) {
        let e = this.rules.block.newline.exec(t);
        if (e && e[0].length > 0) return { type: "space", raw: e[0] };
      }
      code(t) {
        let e = this.rules.block.code.exec(t);
        if (e) {
          let r = e[0].replace(this.rules.other.codeRemoveIndent, "");
          return {
            type: "code",
            raw: e[0],
            codeBlockStyle: "indented",
            text: this.options.pedantic
              ? r
              : J4e(
                  r,
                  `
`,
                ),
          };
        }
      }
      fences(t) {
        let e = this.rules.block.fences.exec(t);
        if (e) {
          let r = e[0],
            n = Bva(r, e[3] || "", this.rules);
          return {
            type: "code",
            raw: r,
            lang: e[2] ? e[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : e[2],
            text: n,
          };
        }
      }
      heading(t) {
        let e = this.rules.block.heading.exec(t);
        if (e) {
          let r = e[2].trim();
          if (this.rules.other.endingHash.test(r)) {
            let n = J4e(r, "#");
            (this.options.pedantic || !n || this.rules.other.endingSpaceChar.test(n)) && (r = n.trim());
          }
          return { type: "heading", raw: e[0], depth: e[1].length, text: r, tokens: this.lexer.inline(r) };
        }
      }
      hr(t) {
        let e = this.rules.block.hr.exec(t);
        if (e)
          return {
            type: "hr",
            raw: J4e(
              e[0],
              `
`,
            ),
          };
      }
      blockquote(t) {
        let e = this.rules.block.blockquote.exec(t);
        if (e) {
          let r = J4e(
              e[0],
              `
`,
            ).split(`
`),
            n = "",
            o = "",
            s = [];
          for (; r.length > 0; ) {
            let a = !1,
              u = [],
              c;
            for (c = 0; c < r.length; c++)
              if (this.rules.other.blockquoteStart.test(r[c])) (u.push(r[c]), (a = !0));
              else if (!a) u.push(r[c]);
              else break;
            r = r.slice(c);
            let m = u.join(`
`),
              d = m
                .replace(
                  this.rules.other.blockquoteSetextReplace,
                  `
    $1`,
                )
                .replace(this.rules.other.blockquoteSetextReplace2, "");
            ((n = n
              ? `${n}
${m}`
              : m),
              (o = o
                ? `${o}
${d}`
                : d));
            let f = this.lexer.state.top;
            if (
              ((this.lexer.state.top = !0),
              this.lexer.blockTokens(d, s, !0),
              (this.lexer.state.top = f),
              r.length === 0)
            )
              break;
            let p = s.at(-1);
            if (p?.type === "code") break;
            if (p?.type === "blockquote") {
              let h = p,
                g =
                  h.raw +
                  `
` +
                  r.join(`
`),
                b = this.blockquote(g);
              ((s[s.length - 1] = b),
                (n = n.substring(0, n.length - h.raw.length) + b.raw),
                (o = o.substring(0, o.length - h.text.length) + b.text));
              break;
            } else if (p?.type === "list") {
              let h = p,
                g =
                  h.raw +
                  `
` +
                  r.join(`
`),
                b = this.list(g);
              ((s[s.length - 1] = b),
                (n = n.substring(0, n.length - p.raw.length) + b.raw),
                (o = o.substring(0, o.length - h.raw.length) + b.raw),
                (r = g.substring(s.at(-1).raw.length).split(`
`)));
              continue;
            }
          }
          return { type: "blockquote", raw: n, tokens: s, text: o };
        }
      }
      list(t) {
        let e = this.rules.block.list.exec(t);
        if (e) {
          let r = e[1].trim(),
            n = r.length > 1,
            o = { type: "list", raw: "", ordered: n, start: n ? +r.slice(0, -1) : "", loose: !1, items: [] };
          ((r = n ? `\\d{1,9}\\${r.slice(-1)}` : `\\${r}`), this.options.pedantic && (r = n ? r : "[*+-]"));
          let s = this.rules.other.listItemRegex(r),
            a = !1;
          for (; t; ) {
            let c = !1,
              m = "",
              d = "";
            if (!(e = s.exec(t)) || this.rules.block.hr.test(t)) break;
            ((m = e[0]), (t = t.substring(m.length)));
            let f = e[2]
                .split(
                  `
`,
                  1,
                )[0]
                .replace(this.rules.other.listReplaceTabs, (y) => " ".repeat(3 * y.length)),
              p = t.split(
                `
`,
                1,
              )[0],
              h = !f.trim(),
              g = 0;
            if (
              (this.options.pedantic
                ? ((g = 2), (d = f.trimStart()))
                : h
                  ? (g = e[1].length + 1)
                  : ((g = e[2].search(this.rules.other.nonSpaceChar)),
                    (g = g > 4 ? 1 : g),
                    (d = f.slice(g)),
                    (g += e[1].length)),
              h &&
                this.rules.other.blankLine.test(p) &&
                ((m +=
                  p +
                  `
`),
                (t = t.substring(p.length + 1)),
                (c = !0)),
              !c)
            ) {
              let y = this.rules.other.nextBulletRegex(g),
                E = this.rules.other.hrRegex(g),
                v = this.rules.other.fencesBeginRegex(g),
                C = this.rules.other.headingBeginRegex(g),
                x = this.rules.other.htmlBeginRegex(g);
              for (; t; ) {
                let k = t.split(
                    `
`,
                    1,
                  )[0],
                  R;
                if (
                  ((p = k),
                  this.options.pedantic
                    ? ((p = p.replace(this.rules.other.listReplaceNesting, "  ")), (R = p))
                    : (R = p.replace(this.rules.other.tabCharGlobal, "    ")),
                  v.test(p) || C.test(p) || x.test(p) || y.test(p) || E.test(p))
                )
                  break;
                if (R.search(this.rules.other.nonSpaceChar) >= g || !p.trim())
                  d +=
                    `
` + R.slice(g);
                else {
                  if (
                    h ||
                    f.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 ||
                    v.test(f) ||
                    C.test(f) ||
                    E.test(f)
                  )
                    break;
                  d +=
                    `
` + p;
                }
                (!h && !p.trim() && (h = !0),
                  (m +=
                    k +
                    `
`),
                  (t = t.substring(k.length + 1)),
                  (f = R.slice(g)));
              }
            }
            o.loose || (a ? (o.loose = !0) : this.rules.other.doubleBlankLine.test(m) && (a = !0));
            let b = null,
              A;
            (this.options.gfm &&
              ((b = this.rules.other.listIsTask.exec(d)),
              b && ((A = b[0] !== "[ ] "), (d = d.replace(this.rules.other.listReplaceTask, "")))),
              o.items.push({ type: "list_item", raw: m, task: !!b, checked: A, loose: !1, text: d, tokens: [] }),
              (o.raw += m));
          }
          let u = o.items.at(-1);
          if (u) ((u.raw = u.raw.trimEnd()), (u.text = u.text.trimEnd()));
          else return;
          o.raw = o.raw.trimEnd();
          for (let c = 0; c < o.items.length; c++)
            if (
              ((this.lexer.state.top = !1), (o.items[c].tokens = this.lexer.blockTokens(o.items[c].text, [])), !o.loose)
            ) {
              let m = o.items[c].tokens.filter((f) => f.type === "space"),
                d = m.length > 0 && m.some((f) => this.rules.other.anyLine.test(f.raw));
              o.loose = d;
            }
          if (o.loose) for (let c = 0; c < o.items.length; c++) o.items[c].loose = !0;
          return o;
        }
      }
      html(t) {
        let e = this.rules.block.html.exec(t);
        if (e)
          return {
            type: "html",
            block: !0,
            raw: e[0],
            pre: e[1] === "pre" || e[1] === "script" || e[1] === "style",
            text: e[0],
          };
      }
      def(t) {
        let e = this.rules.block.def.exec(t);
        if (e) {
          let r = e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "),
            n = e[2]
              ? e[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1")
              : "",
            o = e[3] ? e[3].substring(1, e[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : e[3];
          return { type: "def", tag: r, raw: e[0], href: n, title: o };
        }
      }
      table(t) {
        let e = this.rules.block.table.exec(t);
        if (!e || !this.rules.other.tableDelimiter.test(e[2])) return;
        let r = Imi(e[1]),
          n = e[2].replace(this.rules.other.tableAlignChars, "").split("|"),
          o = e[3]?.trim()
            ? e[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`)
            : [],
          s = { type: "table", raw: e[0], header: [], align: [], rows: [] };
        if (r.length === n.length) {
          for (let a of n)
            this.rules.other.tableAlignRight.test(a)
              ? s.align.push("right")
              : this.rules.other.tableAlignCenter.test(a)
                ? s.align.push("center")
                : this.rules.other.tableAlignLeft.test(a)
                  ? s.align.push("left")
                  : s.align.push(null);
          for (let a = 0; a < r.length; a++)
            s.header.push({ text: r[a], tokens: this.lexer.inline(r[a]), header: !0, align: s.align[a] });
          for (let a of o)
            s.rows.push(
              Imi(a, s.header.length).map((u, c) => ({
                text: u,
                tokens: this.lexer.inline(u),
                header: !1,
                align: s.align[c],
              })),
            );
          return s;
        }
      }
      lheading(t) {
        let e = this.rules.block.lheading.exec(t);
        if (e)
          return {
            type: "heading",
            raw: e[0],
            depth: e[2].charAt(0) === "=" ? 1 : 2,
            text: e[1],
            tokens: this.lexer.inline(e[1]),
          };
      }
      paragraph(t) {
        let e = this.rules.block.paragraph.exec(t);
        if (e) {
          let r =
            e[1].charAt(e[1].length - 1) ===
            `
`
              ? e[1].slice(0, -1)
              : e[1];
          return { type: "paragraph", raw: e[0], text: r, tokens: this.lexer.inline(r) };
        }
      }
      text(t) {
        let e = this.rules.block.text.exec(t);
        if (e) return { type: "text", raw: e[0], text: e[0], tokens: this.lexer.inline(e[0]) };
      }
      escape(t) {
        let e = this.rules.inline.escape.exec(t);
        if (e) return { type: "escape", raw: e[0], text: e[1] };
      }
      tag(t) {
        let e = this.rules.inline.tag.exec(t);
        if (e)
          return (
            !this.lexer.state.inLink && this.rules.other.startATag.test(e[0])
              ? (this.lexer.state.inLink = !0)
              : this.lexer.state.inLink && this.rules.other.endATag.test(e[0]) && (this.lexer.state.inLink = !1),
            !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(e[0])
              ? (this.lexer.state.inRawBlock = !0)
              : this.lexer.state.inRawBlock &&
                this.rules.other.endPreScriptTag.test(e[0]) &&
                (this.lexer.state.inRawBlock = !1),
            {
              type: "html",
              raw: e[0],
              inLink: this.lexer.state.inLink,
              inRawBlock: this.lexer.state.inRawBlock,
              block: !1,
              text: e[0],
            }
          );
      }
      link(t) {
        let e = this.rules.inline.link.exec(t);
        if (e) {
          let r = e[2].trim();
          if (!this.options.pedantic && this.rules.other.startAngleBracket.test(r)) {
            if (!this.rules.other.endAngleBracket.test(r)) return;
            let s = J4e(r.slice(0, -1), "\\");
            if ((r.length - s.length) % 2 === 0) return;
          } else {
            let s = Pva(e[2], "()");
            if (s === -2) return;
            if (s > -1) {
              let u = (e[0].indexOf("!") === 0 ? 5 : 4) + e[1].length + s;
              ((e[2] = e[2].substring(0, s)), (e[0] = e[0].substring(0, u).trim()), (e[3] = ""));
            }
          }
          let n = e[2],
            o = "";
          if (this.options.pedantic) {
            let s = this.rules.other.pedanticHrefTitle.exec(n);
            s && ((n = s[1]), (o = s[3]));
          } else o = e[3] ? e[3].slice(1, -1) : "";
          return (
            (n = n.trim()),
            this.rules.other.startAngleBracket.test(n) &&
              (this.options.pedantic && !this.rules.other.endAngleBracket.test(r)
                ? (n = n.slice(1))
                : (n = n.slice(1, -1))),
            Rmi(
              e,
              {
                href: n && n.replace(this.rules.inline.anyPunctuation, "$1"),
                title: o && o.replace(this.rules.inline.anyPunctuation, "$1"),
              },
              e[0],
              this.lexer,
              this.rules,
            )
          );
        }
      }
      reflink(t, e) {
        let r;
        if ((r = this.rules.inline.reflink.exec(t)) || (r = this.rules.inline.nolink.exec(t))) {
          let n = (r[2] || r[1]).replace(this.rules.other.multipleSpaceGlobal, " "),
            o = e[n.toLowerCase()];
          if (!o) {
            let s = r[0].charAt(0);
            return { type: "text", raw: s, text: s };
          }
          return Rmi(r, o, r[0], this.lexer, this.rules);
        }
      }
      emStrong(t, e, r = "") {
        let n = this.rules.inline.emStrongLDelim.exec(t);
        if (!n || (n[3] && r.match(this.rules.other.unicodeAlphaNumeric))) return;
        if (!(n[1] || n[2] || "") || !r || this.rules.inline.punctuation.exec(r)) {
          let s = [...n[0]].length - 1,
            a,
            u,
            c = s,
            m = 0,
            d = n[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
          for (d.lastIndex = 0, e = e.slice(-1 * t.length + s); (n = d.exec(e)) != null; ) {
            if (((a = n[1] || n[2] || n[3] || n[4] || n[5] || n[6]), !a)) continue;
            if (((u = [...a].length), n[3] || n[4])) {
              c += u;
              continue;
            } else if ((n[5] || n[6]) && s % 3 && !((s + u) % 3)) {
              m += u;
              continue;
            }
            if (((c -= u), c > 0)) continue;
            u = Math.min(u, u + c + m);
            let f = [...n[0]][0].length,
              p = t.slice(0, s + n.index + f + u);
            if (Math.min(s, u) % 2) {
              let g = p.slice(1, -1);
              return { type: "em", raw: p, text: g, tokens: this.lexer.inlineTokens(g) };
            }
            let h = p.slice(2, -2);
            return { type: "strong", raw: p, text: h, tokens: this.lexer.inlineTokens(h) };
          }
        }
      }
      codespan(t) {
        let e = this.rules.inline.code.exec(t);
        if (e) {
          let r = e[2].replace(this.rules.other.newLineCharGlobal, " "),
            n = this.rules.other.nonSpaceChar.test(r),
            o = this.rules.other.startingSpaceChar.test(r) && this.rules.other.endingSpaceChar.test(r);
          return (n && o && (r = r.substring(1, r.length - 1)), { type: "codespan", raw: e[0], text: r });
        }
      }
      br(t) {
        let e = this.rules.inline.br.exec(t);
        if (e) return { type: "br", raw: e[0] };
      }
      del(t) {
        let e = this.rules.inline.del.exec(t);
        if (e) return { type: "del", raw: e[0], text: e[2], tokens: this.lexer.inlineTokens(e[2]) };
      }
      autolink(t) {
        let e = this.rules.inline.autolink.exec(t);
        if (e) {
          let r, n;
          return (
            e[2] === "@" ? ((r = e[1]), (n = "mailto:" + r)) : ((r = e[1]), (n = r)),
            { type: "link", raw: e[0], text: r, href: n, tokens: [{ type: "text", raw: r, text: r }] }
          );
        }
      }
      url(t) {
        let e;
        if ((e = this.rules.inline.url.exec(t))) {
          let r, n;
          if (e[2] === "@") ((r = e[0]), (n = "mailto:" + r));
          else {
            let o;
            do ((o = e[0]), (e[0] = this.rules.inline._backpedal.exec(e[0])?.[0] ?? ""));
            while (o !== e[0]);
            ((r = e[0]), e[1] === "www." ? (n = "http://" + e[0]) : (n = e[0]));
          }
          return { type: "link", raw: e[0], text: r, href: n, tokens: [{ type: "text", raw: r, text: r }] };
        }
      }
      inlineText(t) {
        let e = this.rules.inline.text.exec(t);
        if (e) {
          let r = this.lexer.state.inRawBlock;
          return { type: "text", raw: e[0], text: e[0], escaped: r };
        }
      }
    }),
      (uN = class Y1r {
        tokens;
        options;
        state;
        tokenizer;
        inlineQueue;
        constructor(e) {
          ((this.tokens = []),
            (this.tokens.links = Object.create(null)),
            (this.options = e || HY),
            (this.options.tokenizer = this.options.tokenizer || new Sct()),
            (this.tokenizer = this.options.tokenizer),
            (this.tokenizer.options = this.options),
            (this.tokenizer.lexer = this),
            (this.inlineQueue = []),
            (this.state = { inLink: !1, inRawBlock: !1, top: !0 }));
          let r = { other: X2, block: Ect.normal, inline: K4e.normal };
          (this.options.pedantic
            ? ((r.block = Ect.pedantic), (r.inline = K4e.pedantic))
            : this.options.gfm &&
              ((r.block = Ect.gfm), this.options.breaks ? (r.inline = K4e.breaks) : (r.inline = K4e.gfm)),
            (this.tokenizer.rules = r));
        }
        static get rules() {
          return { block: Ect, inline: K4e };
        }
        static lex(e, r) {
          return new Y1r(r).lex(e);
        }
        static lexInline(e, r) {
          return new Y1r(r).inlineTokens(e);
        }
        lex(e) {
          ((e = e.replace(
            X2.carriageReturn,
            `
`,
          )),
            this.blockTokens(e, this.tokens));
          for (let r = 0; r < this.inlineQueue.length; r++) {
            let n = this.inlineQueue[r];
            this.inlineTokens(n.src, n.tokens);
          }
          return ((this.inlineQueue = []), this.tokens);
        }
        blockTokens(e, r = [], n = !1) {
          for (this.options.pedantic && (e = e.replace(X2.tabCharGlobal, "    ").replace(X2.spaceLine, "")); e; ) {
            let o;
            if (
              this.options.extensions?.block?.some((a) =>
                (o = a.call({ lexer: this }, e, r)) ? ((e = e.substring(o.raw.length)), r.push(o), !0) : !1,
              )
            )
              continue;
            if ((o = this.tokenizer.space(e))) {
              e = e.substring(o.raw.length);
              let a = r.at(-1);
              o.raw.length === 1 && a !== void 0
                ? (a.raw += `
`)
                : r.push(o);
              continue;
            }
            if ((o = this.tokenizer.code(e))) {
              e = e.substring(o.raw.length);
              let a = r.at(-1);
              a?.type === "paragraph" || a?.type === "text"
                ? ((a.raw +=
                    `
` + o.raw),
                  (a.text +=
                    `
` + o.text),
                  (this.inlineQueue.at(-1).src = a.text))
                : r.push(o);
              continue;
            }
            if ((o = this.tokenizer.fences(e))) {
              ((e = e.substring(o.raw.length)), r.push(o));
              continue;
            }
            if ((o = this.tokenizer.heading(e))) {
              ((e = e.substring(o.raw.length)), r.push(o));
              continue;
            }
            if ((o = this.tokenizer.hr(e))) {
              ((e = e.substring(o.raw.length)), r.push(o));
              continue;
            }
            if ((o = this.tokenizer.blockquote(e))) {
              ((e = e.substring(o.raw.length)), r.push(o));
              continue;
            }
            if ((o = this.tokenizer.list(e))) {
              ((e = e.substring(o.raw.length)), r.push(o));
              continue;
            }
            if ((o = this.tokenizer.html(e))) {
              ((e = e.substring(o.raw.length)), r.push(o));
              continue;
            }
            if ((o = this.tokenizer.def(e))) {
              e = e.substring(o.raw.length);
              let a = r.at(-1);
              a?.type === "paragraph" || a?.type === "text"
                ? ((a.raw +=
                    `
` + o.raw),
                  (a.text +=
                    `
` + o.raw),
                  (this.inlineQueue.at(-1).src = a.text))
                : this.tokens.links[o.tag] || (this.tokens.links[o.tag] = { href: o.href, title: o.title });
              continue;
            }
            if ((o = this.tokenizer.table(e))) {
              ((e = e.substring(o.raw.length)), r.push(o));
              continue;
            }
            if ((o = this.tokenizer.lheading(e))) {
              ((e = e.substring(o.raw.length)), r.push(o));
              continue;
            }
            let s = e;
            if (this.options.extensions?.startBlock) {
              let a = 1 / 0,
                u = e.slice(1),
                c;
              (this.options.extensions.startBlock.forEach((m) => {
                ((c = m.call({ lexer: this }, u)), typeof c == "number" && c >= 0 && (a = Math.min(a, c)));
              }),
                a < 1 / 0 && a >= 0 && (s = e.substring(0, a + 1)));
            }
            if (this.state.top && (o = this.tokenizer.paragraph(s))) {
              let a = r.at(-1);
              (n && a?.type === "paragraph"
                ? ((a.raw +=
                    `
` + o.raw),
                  (a.text +=
                    `
` + o.text),
                  this.inlineQueue.pop(),
                  (this.inlineQueue.at(-1).src = a.text))
                : r.push(o),
                (n = s.length !== e.length),
                (e = e.substring(o.raw.length)));
              continue;
            }
            if ((o = this.tokenizer.text(e))) {
              e = e.substring(o.raw.length);
              let a = r.at(-1);
              a?.type === "text"
                ? ((a.raw +=
                    `
` + o.raw),
                  (a.text +=
                    `
` + o.text),
                  this.inlineQueue.pop(),
                  (this.inlineQueue.at(-1).src = a.text))
                : r.push(o);
              continue;
            }
            if (e) {
              let a = "Infinite loop on byte: " + e.charCodeAt(0);
              if (this.options.silent) {
                console.error(a);
                break;
              } else throw new Error(a);
            }
          }
          return ((this.state.top = !0), r);
        }
        inline(e, r = []) {
          return (this.inlineQueue.push({ src: e, tokens: r }), r);
        }
        inlineTokens(e, r = []) {
          let n = e,
            o = null;
          if (this.tokens.links) {
            let u = Object.keys(this.tokens.links);
            if (u.length > 0)
              for (; (o = this.tokenizer.rules.inline.reflinkSearch.exec(n)) != null; )
                u.includes(o[0].slice(o[0].lastIndexOf("[") + 1, -1)) &&
                  (n =
                    n.slice(0, o.index) +
                    "[" +
                    "a".repeat(o[0].length - 2) +
                    "]" +
                    n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
          }
          for (; (o = this.tokenizer.rules.inline.anyPunctuation.exec(n)) != null; )
            n = n.slice(0, o.index) + "++" + n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
          for (; (o = this.tokenizer.rules.inline.blockSkip.exec(n)) != null; )
            n =
              n.slice(0, o.index) +
              "[" +
              "a".repeat(o[0].length - 2) +
              "]" +
              n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
          let s = !1,
            a = "";
          for (; e; ) {
            (s || (a = ""), (s = !1));
            let u;
            if (
              this.options.extensions?.inline?.some((m) =>
                (u = m.call({ lexer: this }, e, r)) ? ((e = e.substring(u.raw.length)), r.push(u), !0) : !1,
              )
            )
              continue;
            if ((u = this.tokenizer.escape(e))) {
              ((e = e.substring(u.raw.length)), r.push(u));
              continue;
            }
            if ((u = this.tokenizer.tag(e))) {
              ((e = e.substring(u.raw.length)), r.push(u));
              continue;
            }
            if ((u = this.tokenizer.link(e))) {
              ((e = e.substring(u.raw.length)), r.push(u));
              continue;
            }
            if ((u = this.tokenizer.reflink(e, this.tokens.links))) {
              e = e.substring(u.raw.length);
              let m = r.at(-1);
              u.type === "text" && m?.type === "text" ? ((m.raw += u.raw), (m.text += u.text)) : r.push(u);
              continue;
            }
            if ((u = this.tokenizer.emStrong(e, n, a))) {
              ((e = e.substring(u.raw.length)), r.push(u));
              continue;
            }
            if ((u = this.tokenizer.codespan(e))) {
              ((e = e.substring(u.raw.length)), r.push(u));
              continue;
            }
            if ((u = this.tokenizer.br(e))) {
              ((e = e.substring(u.raw.length)), r.push(u));
              continue;
            }
            if ((u = this.tokenizer.del(e))) {
              ((e = e.substring(u.raw.length)), r.push(u));
              continue;
            }
            if ((u = this.tokenizer.autolink(e))) {
              ((e = e.substring(u.raw.length)), r.push(u));
              continue;
            }
            if (!this.state.inLink && (u = this.tokenizer.url(e))) {
              ((e = e.substring(u.raw.length)), r.push(u));
              continue;
            }
            let c = e;
            if (this.options.extensions?.startInline) {
              let m = 1 / 0,
                d = e.slice(1),
                f;
              (this.options.extensions.startInline.forEach((p) => {
                ((f = p.call({ lexer: this }, d)), typeof f == "number" && f >= 0 && (m = Math.min(m, f)));
              }),
                m < 1 / 0 && m >= 0 && (c = e.substring(0, m + 1)));
            }
            if ((u = this.tokenizer.inlineText(c))) {
              ((e = e.substring(u.raw.length)), u.raw.slice(-1) !== "_" && (a = u.raw.slice(-1)), (s = !0));
              let m = r.at(-1);
              m?.type === "text" ? ((m.raw += u.raw), (m.text += u.text)) : r.push(u);
              continue;
            }
            if (e) {
              let m = "Infinite loop on byte: " + e.charCodeAt(0);
              if (this.options.silent) {
                console.error(m);
                break;
              } else throw new Error(m);
            }
          }
          return r;
        }
      }),
      (wct = class {
        options;
        parser;
        constructor(t) {
          this.options = t || HY;
        }
        space(t) {
          return "";
        }
        code({ text: t, lang: e, escaped: r }) {
          let n = (e || "").match(X2.notSpaceStart)?.[0],
            o =
              t.replace(X2.endingNewline, "") +
              `
`;
          return n
            ? '<pre><code class="language-' +
                YD(n) +
                '">' +
                (r ? o : YD(o, !0)) +
                `</code></pre>
`
            : "<pre><code>" +
                (r ? o : YD(o, !0)) +
                `</code></pre>
`;
        }
        blockquote({ tokens: t }) {
          return `<blockquote>
${this.parser.parse(t)}</blockquote>
`;
        }
        html({ text: t }) {
          return t;
        }
        heading({ tokens: t, depth: e }) {
          return `<h${e}>${this.parser.parseInline(t)}</h${e}>
`;
        }
        hr(t) {
          return `<hr>
`;
        }
        list(t) {
          let e = t.ordered,
            r = t.start,
            n = "";
          for (let a = 0; a < t.items.length; a++) {
            let u = t.items[a];
            n += this.listitem(u);
          }
          let o = e ? "ol" : "ul",
            s = e && r !== 1 ? ' start="' + r + '"' : "";
          return (
            "<" +
            o +
            s +
            `>
` +
            n +
            "</" +
            o +
            `>
`
          );
        }
        listitem(t) {
          let e = "";
          if (t.task) {
            let r = this.checkbox({ checked: !!t.checked });
            t.loose
              ? t.tokens[0]?.type === "paragraph"
                ? ((t.tokens[0].text = r + " " + t.tokens[0].text),
                  t.tokens[0].tokens &&
                    t.tokens[0].tokens.length > 0 &&
                    t.tokens[0].tokens[0].type === "text" &&
                    ((t.tokens[0].tokens[0].text = r + " " + YD(t.tokens[0].tokens[0].text)),
                    (t.tokens[0].tokens[0].escaped = !0)))
                : t.tokens.unshift({ type: "text", raw: r + " ", text: r + " ", escaped: !0 })
              : (e += r + " ");
          }
          return (
            (e += this.parser.parse(t.tokens, !!t.loose)),
            `<li>${e}</li>
`
          );
        }
        checkbox({ checked: t }) {
          return "<input " + (t ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
        }
        paragraph({ tokens: t }) {
          return `<p>${this.parser.parseInline(t)}</p>
`;
        }
        table(t) {
          let e = "",
            r = "";
          for (let o = 0; o < t.header.length; o++) r += this.tablecell(t.header[o]);
          e += this.tablerow({ text: r });
          let n = "";
          for (let o = 0; o < t.rows.length; o++) {
            let s = t.rows[o];
            r = "";
            for (let a = 0; a < s.length; a++) r += this.tablecell(s[a]);
            n += this.tablerow({ text: r });
          }
          return (
            n && (n = `<tbody>${n}</tbody>`),
            `<table>
<thead>
` +
              e +
              `</thead>
` +
              n +
              `</table>
`
          );
        }
        tablerow({ text: t }) {
          return `<tr>
${t}</tr>
`;
        }
        tablecell(t) {
          let e = this.parser.parseInline(t.tokens),
            r = t.header ? "th" : "td";
          return (
            (t.align ? `<${r} align="${t.align}">` : `<${r}>`) +
            e +
            `</${r}>
`
          );
        }
        strong({ tokens: t }) {
          return `<strong>${this.parser.parseInline(t)}</strong>`;
        }
        em({ tokens: t }) {
          return `<em>${this.parser.parseInline(t)}</em>`;
        }
        codespan({ text: t }) {
          return `<code>${YD(t, !0)}</code>`;
        }
        br(t) {
          return "<br>";
        }
        del({ tokens: t }) {
          return `<del>${this.parser.parseInline(t)}</del>`;
        }
        link({ href: t, title: e, tokens: r }) {
          let n = this.parser.parseInline(r),
            o = Dmi(t);
          if (o === null) return n;
          t = o;
          let s = '<a href="' + t + '"';
          return (e && (s += ' title="' + YD(e) + '"'), (s += ">" + n + "</a>"), s);
        }
        image({ href: t, title: e, text: r, tokens: n }) {
          n && (r = this.parser.parseInline(n, this.parser.textRenderer));
          let o = Dmi(t);
          if (o === null) return YD(r);
          t = o;
          let s = `<img src="${t}" alt="${r}"`;
          return (e && (s += ` title="${YD(e)}"`), (s += ">"), s);
        }
        text(t) {
          return "tokens" in t && t.tokens
            ? this.parser.parseInline(t.tokens)
            : "escaped" in t && t.escaped
              ? t.text
              : YD(t.text);
        }
      }),
      (ofr = class {
        strong({ text: t }) {
          return t;
        }
        em({ text: t }) {
          return t;
        }
        codespan({ text: t }) {
          return t;
        }
        del({ text: t }) {
          return t;
        }
        html({ text: t }) {
          return t;
        }
        text({ text: t }) {
          return t;
        }
        link({ text: t }) {
          return "" + t;
        }
        image({ text: t }) {
          return "" + t;
        }
        br() {
          return "";
        }
      }),
      (cN = class K1r {
        options;
        renderer;
        textRenderer;
        constructor(e) {
          ((this.options = e || HY),
            (this.options.renderer = this.options.renderer || new wct()),
            (this.renderer = this.options.renderer),
            (this.renderer.options = this.options),
            (this.renderer.parser = this),
            (this.textRenderer = new ofr()));
        }
        static parse(e, r) {
          return new K1r(r).parse(e);
        }
        static parseInline(e, r) {
          return new K1r(r).parseInline(e);
        }
        parse(e, r = !0) {
          let n = "";
          for (let o = 0; o < e.length; o++) {
            let s = e[o];
            if (this.options.extensions?.renderers?.[s.type]) {
              let u = s,
                c = this.options.extensions.renderers[u.type].call({ parser: this }, u);
              if (
                c !== !1 ||
                ![
                  "space",
                  "hr",
                  "heading",
                  "code",
                  "table",
                  "blockquote",
                  "list",
                  "html",
                  "paragraph",
                  "text",
                ].includes(u.type)
              ) {
                n += c || "";
                continue;
              }
            }
            let a = s;
            switch (a.type) {
              case "space": {
                n += this.renderer.space(a);
                continue;
              }
              case "hr": {
                n += this.renderer.hr(a);
                continue;
              }
              case "heading": {
                n += this.renderer.heading(a);
                continue;
              }
              case "code": {
                n += this.renderer.code(a);
                continue;
              }
              case "table": {
                n += this.renderer.table(a);
                continue;
              }
              case "blockquote": {
                n += this.renderer.blockquote(a);
                continue;
              }
              case "list": {
                n += this.renderer.list(a);
                continue;
              }
              case "html": {
                n += this.renderer.html(a);
                continue;
              }
              case "paragraph": {
                n += this.renderer.paragraph(a);
                continue;
              }
              case "text": {
                let u = a,
                  c = this.renderer.text(u);
                for (; o + 1 < e.length && e[o + 1].type === "text"; )
                  ((u = e[++o]),
                    (c +=
                      `
` + this.renderer.text(u)));
                r
                  ? (n += this.renderer.paragraph({
                      type: "paragraph",
                      raw: c,
                      text: c,
                      tokens: [{ type: "text", raw: c, text: c, escaped: !0 }],
                    }))
                  : (n += c);
                continue;
              }
              default: {
                let u = 'Token with "' + a.type + '" type was not found.';
                if (this.options.silent) return (console.error(u), "");
                throw new Error(u);
              }
            }
          }
          return n;
        }
        parseInline(e, r = this.renderer) {
          let n = "";
          for (let o = 0; o < e.length; o++) {
            let s = e[o];
            if (this.options.extensions?.renderers?.[s.type]) {
              let u = this.options.extensions.renderers[s.type].call({ parser: this }, s);
              if (
                u !== !1 ||
                !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(s.type)
              ) {
                n += u || "";
                continue;
              }
            }
            let a = s;
            switch (a.type) {
              case "escape": {
                n += r.text(a);
                break;
              }
              case "html": {
                n += r.html(a);
                break;
              }
              case "link": {
                n += r.link(a);
                break;
              }
              case "image": {
                n += r.image(a);
                break;
              }
              case "strong": {
                n += r.strong(a);
                break;
              }
              case "em": {
                n += r.em(a);
                break;
              }
              case "codespan": {
                n += r.codespan(a);
                break;
              }
              case "br": {
                n += r.br(a);
                break;
              }
              case "del": {
                n += r.del(a);
                break;
              }
              case "text": {
                n += r.text(a);
                break;
              }
              default: {
                let u = 'Token with "' + a.type + '" type was not found.';
                if (this.options.silent) return (console.error(u), "");
                throw new Error(u);
              }
            }
          }
          return n;
        }
      }),
      (vct = class {
        options;
        block;
        constructor(t) {
          this.options = t || HY;
        }
        static passThroughHooks = new Set(["preprocess", "postprocess", "processAllTokens"]);
        preprocess(t) {
          return t;
        }
        postprocess(t) {
          return t;
        }
        processAllTokens(t) {
          return t;
        }
        provideLexer() {
          return this.block ? uN.lex : uN.lexInline;
        }
        provideParser() {
          return this.block ? cN.parse : cN.parseInline;
        }
      }),
      (Lva = class {
        defaults = J1r();
        options = this.setOptions;
        parse = this.parseMarkdown(!0);
        parseInline = this.parseMarkdown(!1);
        Parser = cN;
        Renderer = wct;
        TextRenderer = ofr;
        Lexer = uN;
        Tokenizer = Sct;
        Hooks = vct;
        constructor(...t) {
          this.use(...t);
        }
        walkTokens(t, e) {
          let r = [];
          for (let n of t)
            switch (((r = r.concat(e.call(this, n))), n.type)) {
              case "table": {
                let o = n;
                for (let s of o.header) r = r.concat(this.walkTokens(s.tokens, e));
                for (let s of o.rows) for (let a of s) r = r.concat(this.walkTokens(a.tokens, e));
                break;
              }
              case "list": {
                let o = n;
                r = r.concat(this.walkTokens(o.items, e));
                break;
              }
              default: {
                let o = n;
                this.defaults.extensions?.childTokens?.[o.type]
                  ? this.defaults.extensions.childTokens[o.type].forEach((s) => {
                      let a = o[s].flat(1 / 0);
                      r = r.concat(this.walkTokens(a, e));
                    })
                  : o.tokens && (r = r.concat(this.walkTokens(o.tokens, e)));
              }
            }
          return r;
        }
        use(...t) {
          let e = this.defaults.extensions || { renderers: {}, childTokens: {} };
          return (
            t.forEach((r) => {
              let n = { ...r };
              if (
                ((n.async = this.defaults.async || n.async || !1),
                r.extensions &&
                  (r.extensions.forEach((o) => {
                    if (!o.name) throw new Error("extension name required");
                    if ("renderer" in o) {
                      let s = e.renderers[o.name];
                      s
                        ? (e.renderers[o.name] = function (...a) {
                            let u = o.renderer.apply(this, a);
                            return (u === !1 && (u = s.apply(this, a)), u);
                          })
                        : (e.renderers[o.name] = o.renderer);
                    }
                    if ("tokenizer" in o) {
                      if (!o.level || (o.level !== "block" && o.level !== "inline"))
                        throw new Error("extension level must be 'block' or 'inline'");
                      let s = e[o.level];
                      (s ? s.unshift(o.tokenizer) : (e[o.level] = [o.tokenizer]),
                        o.start &&
                          (o.level === "block"
                            ? e.startBlock
                              ? e.startBlock.push(o.start)
                              : (e.startBlock = [o.start])
                            : o.level === "inline" &&
                              (e.startInline ? e.startInline.push(o.start) : (e.startInline = [o.start]))));
                    }
                    "childTokens" in o && o.childTokens && (e.childTokens[o.name] = o.childTokens);
                  }),
                  (n.extensions = e)),
                r.renderer)
              ) {
                let o = this.defaults.renderer || new wct(this.defaults);
                for (let s in r.renderer) {
                  if (!(s in o)) throw new Error(`renderer '${s}' does not exist`);
                  if (["options", "parser"].includes(s)) continue;
                  let a = s,
                    u = r.renderer[a],
                    c = o[a];
                  o[a] = (...m) => {
                    let d = u.apply(o, m);
                    return (d === !1 && (d = c.apply(o, m)), d || "");
                  };
                }
                n.renderer = o;
              }
              if (r.tokenizer) {
                let o = this.defaults.tokenizer || new Sct(this.defaults);
                for (let s in r.tokenizer) {
                  if (!(s in o)) throw new Error(`tokenizer '${s}' does not exist`);
                  if (["options", "rules", "lexer"].includes(s)) continue;
                  let a = s,
                    u = r.tokenizer[a],
                    c = o[a];
                  o[a] = (...m) => {
                    let d = u.apply(o, m);
                    return (d === !1 && (d = c.apply(o, m)), d);
                  };
                }
                n.tokenizer = o;
              }
              if (r.hooks) {
                let o = this.defaults.hooks || new vct();
                for (let s in r.hooks) {
                  if (!(s in o)) throw new Error(`hook '${s}' does not exist`);
                  if (["options", "block"].includes(s)) continue;
                  let a = s,
                    u = r.hooks[a],
                    c = o[a];
                  vct.passThroughHooks.has(s)
                    ? (o[a] = (m) => {
                        if (this.defaults.async) return Promise.resolve(u.call(o, m)).then((f) => c.call(o, f));
                        let d = u.call(o, m);
                        return c.call(o, d);
                      })
                    : (o[a] = (...m) => {
                        let d = u.apply(o, m);
                        return (d === !1 && (d = c.apply(o, m)), d);
                      });
                }
                n.hooks = o;
              }
              if (r.walkTokens) {
                let o = this.defaults.walkTokens,
                  s = r.walkTokens;
                n.walkTokens = function (a) {
                  let u = [];
                  return (u.push(s.call(this, a)), o && (u = u.concat(o.call(this, a))), u);
                };
              }
              this.defaults = { ...this.defaults, ...n };
            }),
            this
          );
        }
        setOptions(t) {
          return ((this.defaults = { ...this.defaults, ...t }), this);
        }
        lexer(t, e) {
          return uN.lex(t, e ?? this.defaults);
        }
        parser(t, e) {
          return cN.parse(t, e ?? this.defaults);
        }
        parseMarkdown(t) {
          return (r, n) => {
            let o = { ...n },
              s = { ...this.defaults, ...o },
              a = this.onError(!!s.silent, !!s.async);
            if (this.defaults.async === !0 && o.async === !1)
              return a(
                new Error(
                  "marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.",
                ),
              );
            if (typeof r > "u" || r === null) return a(new Error("marked(): input parameter is undefined or null"));
            if (typeof r != "string")
              return a(
                new Error(
                  "marked(): input parameter is of type " + Object.prototype.toString.call(r) + ", string expected",
                ),
              );
            s.hooks && ((s.hooks.options = s), (s.hooks.block = t));
            let u = s.hooks ? s.hooks.provideLexer() : t ? uN.lex : uN.lexInline,
              c = s.hooks ? s.hooks.provideParser() : t ? cN.parse : cN.parseInline;
            if (s.async)
              return Promise.resolve(s.hooks ? s.hooks.preprocess(r) : r)
                .then((m) => u(m, s))
                .then((m) => (s.hooks ? s.hooks.processAllTokens(m) : m))
                .then((m) => (s.walkTokens ? Promise.all(this.walkTokens(m, s.walkTokens)).then(() => m) : m))
                .then((m) => c(m, s))
                .then((m) => (s.hooks ? s.hooks.postprocess(m) : m))
                .catch(a);
            try {
              s.hooks && (r = s.hooks.preprocess(r));
              let m = u(r, s);
              (s.hooks && (m = s.hooks.processAllTokens(m)), s.walkTokens && this.walkTokens(m, s.walkTokens));
              let d = c(m, s);
              return (s.hooks && (d = s.hooks.postprocess(d)), d);
            } catch (m) {
              return a(m);
            }
          };
        }
        onError(t, e) {
          return (r) => {
            if (
              ((r.message += `
Please report this to https://github.com/markedjs/marked.`),
              t)
            ) {
              let n = "<p>An error occurred:</p><pre>" + YD(r.message + "", !0) + "</pre>";
              return e ? Promise.resolve(n) : n;
            }
            if (e) return Promise.reject(r);
            throw r;
          };
        }
      }),
      (qY = new Lva()));
    ml.options = ml.setOptions = function (t) {
      return (qY.setOptions(t), (ml.defaults = qY.defaults), kmi(ml.defaults), ml);
    };
    ml.getDefaults = J1r;
    ml.defaults = HY;
    ml.use = function (...t) {
      return (qY.use(...t), (ml.defaults = qY.defaults), kmi(ml.defaults), ml);
    };
    ml.walkTokens = function (t, e) {
      return qY.walkTokens(t, e);
    };
    ml.parseInline = qY.parseInline;
    ml.Parser = cN;
    ml.parser = cN.parse;
    ml.Renderer = wct;
    ml.TextRenderer = ofr;
    ml.Lexer = uN;
    ml.lexer = uN.lex;
    ml.Tokenizer = Sct;
    ml.Hooks = vct;
    ml.parse = ml;
    ((MMc = ml.options),
      (FMc = ml.setOptions),
      (UMc = ml.use),
      ($Mc = ml.walkTokens),
      (jMc = ml.parseInline),
      (QMc = cN.parse),
      (GMc = uN.lex));
  });
import * as e$ from "fs/promises";
import * as Xf from "path";
async function Mva(t) {
  let e = Xf.resolve(t);
  for (;;) {
    let r = Xf.join(e, ".git");
    try {
      if ((await e$.lstat(r)).isDirectory()) return e;
    } catch {}
    let n = Xf.dirname(e);
    if (n === e) break;
    e = n;
  }
  return Xf.resolve(t);
}
function qmi(t) {
  return typeof t == "object" && t !== null && "message" in t && typeof t.message == "string";
}
function Hmi(t) {
  let e = [],
    r = 0,
    n = t.length;
  for (; r < n && ((r = t.indexOf("@", r)), r !== -1); ) {
    if (r > 0 && !Vmi(t[r - 1])) {
      r++;
      continue;
    }
    let o = r + 1;
    for (
      ;
      o < n &&
      !Vmi(t[o]) &&
      t[o] !==
        `
` &&
      t[o] !== "\r";
    )
      o++;
    let s = t.slice(r + 1, o);
    (s.length > 0 && (s[0] === "." || s[0] === "/" || Fva(s[0])) && e.push({ start: r, _end: o, path: s }),
      (r = o + 1));
  }
  return e;
}
function Vmi(t) {
  return (
    t === " " ||
    t === "	" ||
    t ===
      `
` ||
    t === "\r"
  );
}
function Fva(t) {
  let e = t.charCodeAt(0);
  return (e >= 65 && e <= 90) || (e >= 97 && e <= 122);
}
function Wmi(t) {
  let e = [],
    r = ml.lexer(t),
    n = new Map();
  function o(s) {
    if (s.type === "code" || s.type === "codespan") {
      if (!n.has(s.raw)) {
        let u = [],
          c = -1;
        for (; (c = t.indexOf(s.raw, c + 1)) !== -1; ) u.push(c);
        n.set(s.raw, u);
      }
      let a = n.get(s.raw);
      if (a && a.length > 0) {
        let u = a.shift();
        e.push([u, u + s.raw.length]);
      }
    }
    if ("tokens" in s && s.tokens) for (let a of s.tokens) o(a);
  }
  for (let s of r) o(s);
  return e;
}
async function sfr(t, e, r = !1, n = { processedFiles: new Set(), maxDepth: 5, currentDepth: 0 }, o, s = "tree") {
  if ((o || (o = await Mva(e)), n.currentDepth >= n.maxDepth))
    return (
      r && Gmi.warn(`Maximum import depth (${n.maxDepth}) reached. Stopping import processing.`),
      { content: t, importTree: { path: n.currentFile || "unknown" } }
    );
  if (s === "flat") {
    let f = [],
      p = new Set();
    async function h(A, y, E, v) {
      let C = Xf.normalize(E);
      if (p.has(C)) return;
      (p.add(C), f.push({ path: C, content: A }));
      let x = Wmi(A),
        k = Hmi(A);
      for (let R = k.length - 1; R >= 0; R--) {
        let { start: P, _end: D, path: O } = k[R];
        if (x.some(([B, L]) => P >= B && P < L) || !zmi(O, y, [o || ""])) continue;
        let N = Xf.resolve(y, O),
          F = Xf.normalize(N);
        if (!p.has(F))
          try {
            await e$.access(N);
            let B = await e$.readFile(N, "utf-8");
            await h(B, Xf.dirname(N), F, v + 1);
          } catch (B) {
            r && Gmi.warn(`Failed to import ${N}: ${qmi(B) ? B.message : "Unknown error"}`);
          }
      }
    }
    let g = Xf.normalize(n.currentFile || Xf.resolve(e));
    return (
      await h(t, e, g, 0),
      {
        content: f.map(
          (A) => `--- File: ${A.path} ---
${A.content.trim()}
--- End of File: ${A.path} ---`,
        ).join(`

`),
        importTree: { path: g },
      }
    );
  }
  let a = Wmi(t),
    u = "",
    c = 0,
    m = [],
    d = Hmi(t);
  for (let { start: f, _end: p, path: h } of d) {
    if (((u += t.substring(c, f)), (c = p), a.some(([b, A]) => f >= b && f < A))) {
      u += `@${h}`;
      continue;
    }
    if (!zmi(h, e, [o || ""])) {
      u += `<!-- Import failed: ${h} - Path traversal attempt -->`;
      continue;
    }
    let g = Xf.resolve(e, h);
    if (n.processedFiles.has(g)) {
      u += `<!-- File already processed: ${h} -->`;
      continue;
    }
    try {
      await e$.access(g);
      let b = await e$.readFile(g, "utf-8"),
        A = { ...n, processedFiles: new Set(n.processedFiles), currentDepth: n.currentDepth + 1, currentFile: g };
      A.processedFiles.add(g);
      let y = await sfr(b, Xf.dirname(g), r, A, o, s);
      ((u += `<!-- Imported from: ${h} -->
${y.content}
<!-- End of import from: ${h} -->`),
        m.push(y.importTree));
    } catch (b) {
      let A = "Unknown error";
      (qmi(b) ? (A = b.message) : typeof b == "string" && (A = b), (u += `<!-- Import failed: ${h} - ${A} -->`));
    }
  }
  return (
    (u += t.substring(c)),
    { content: u, importTree: { path: n.currentFile || "unknown", imports: m.length > 0 ? m : void 0 } }
  );
}
function zmi(t, e, r) {
  if (/^(file|https?):\/\//.test(t)) return !1;
  let n = Xf.resolve(e, t);
  return r.some((o) => {
    let s = Xf.resolve(o),
      a = n === s,
      u = n.startsWith(s + Xf.sep);
    return a || u;
  });
}
var Gmi,
  Ymi = j(() => {
    "use strict";
    Qmi();
    Gmi = {
      debug: (...t) => console.debug("[DEBUG] [ImportProcessor]", ...t),
      warn: (...t) => console.warn("[WARN] [ImportProcessor]", ...t),
      error: (...t) => console.error("[ERROR] [ImportProcessor]", ...t),
    };
  });
import * as VY from "fs/promises";
import * as afr from "fs";
import * as Zf from "path";
import { homedir as Uva } from "os";
async function $va(t) {
  let e = Zf.resolve(t);
  for (;;) {
    let r = Zf.join(e, ".git");
    try {
      if ((await VY.lstat(r)).isDirectory()) return e;
    } catch (o) {
      let s = typeof o == "object" && o !== null && "code" in o && o.code === "ENOENT",
        a = process.env.VITEST;
      if (!s && !a)
        if (typeof o == "object" && o !== null && "code" in o) {
          let u = o;
          oy.warn(`Error checking for .git directory at ${r}: ${u.message}`);
        } else oy.warn(`Non-standard error checking for .git directory at ${r}: ${String(o)}`);
    }
    let n = Zf.dirname(e);
    if (n === e) return null;
    e = n;
  }
}
async function jva(t, e, r, n, o = [], s, a) {
  let u = new Set(),
    c = Lz();
  for (let d of c) {
    let f = Zf.resolve(e),
      p = Zf.join(f, Kce, d);
    try {
      (await VY.access(p, afr.constants.R_OK), u.add(p), r && oy.debug(`Found readable global ${d}: ${p}`));
    } catch {}
    if (t) {
      let h = Zf.resolve(t);
      r && oy.debug(`Searching for ${d} starting from CWD: ${h}`);
      let g = await $va(h);
      r && oy.debug(`Determined project root: ${g ?? "None"}`);
      let b = [],
        A = h,
        y = g ? Zf.dirname(g) : Zf.dirname(f);
      for (; A && A !== Zf.dirname(A) && A !== Zf.join(f, Kce); ) {
        let C = Zf.join(A, d);
        try {
          (await VY.access(C, afr.constants.R_OK), C !== p && b.unshift(C));
        } catch {}
        if (A === y) break;
        A = Zf.dirname(A);
      }
      b.forEach((C) => u.add(C));
      let E = { ...eme, ...s },
        v = await Smi(h, { fileName: d, maxDirs: a, debug: r, fileService: n, fileFilteringOptions: E });
      v.sort();
      for (let C of v) u.add(C);
    }
  }
  for (let d of o) u.add(d);
  let m = Array.from(u);
  return (r && oy.debug(`Final ordered ${Lz()} paths to read: ${JSON.stringify(m)}`), m);
}
async function Qva(t, e, r = "tree") {
  let n = [];
  for (let o of t)
    try {
      let s = await VY.readFile(o, "utf-8"),
        a = await sfr(s, Zf.dirname(o), e, void 0, void 0, r);
      (n.push({ filePath: o, content: a.content }),
        e && oy.debug(`Successfully read and processed imports: ${o} (Length: ${a.content.length})`));
    } catch (s) {
      if (!process.env.VITEST) {
        let u = s instanceof Error ? s.message : String(s);
        oy.warn(`Warning: Could not read ${Lz()} file at ${o}. Error: ${u}`);
      }
      (n.push({ filePath: o, content: null }), e && oy.debug(`Failed to read: ${o}`));
    }
  return n;
}
function Gva(t, e) {
  return t
    .filter((r) => typeof r.content == "string")
    .map((r) => {
      let n = r.content.trim();
      if (n.length === 0) return null;
      let o = Zf.isAbsolute(r.filePath) ? Zf.relative(e, r.filePath) : r.filePath;
      return `--- Context from: ${o} ---
${n}
--- End of Context from: ${o} ---`;
    })
    .filter((r) => r !== null).join(`

`);
}
async function t$(t, e, r, n = [], o = "tree", s, a = 200) {
  e && oy.debug(`Loading server hierarchical memory for CWD: ${t} (importFormat: ${o})`);
  let u = Uva(),
    c = await jva(t, u, e, r, n, s || eme, a);
  if (c.length === 0)
    return (
      e && oy.debug("No IFLOW.md or AGENTS.md files found in hierarchy."),
      { memoryContent: "", fileCount: 0, filePaths: [] }
    );
  let m = await Qva(c, e, o),
    d = Gva(m, t);
  return (
    e && oy.debug(`Combined instructions length: ${d.length}`),
    e && d.length > 0 && oy.debug(`Combined instructions (snippet): ${d.substring(0, 500)}...`),
    { memoryContent: d, fileCount: c.length, filePaths: c }
  );
}
var oy,
  ufr = j(() => {
    "use strict";
    wmi();
    RO();
    Ymi();
    Ag();
    oy = {
      debug: (...t) => console.debug("[DEBUG] [MemoryDiscovery]", ...t),
      warn: (...t) => console.warn("[WARN] [MemoryDiscovery]", ...t),
      error: (...t) => console.error("[ERROR] [MemoryDiscovery]", ...t),
    };
  });