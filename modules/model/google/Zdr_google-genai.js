/**
 * @module Zdr
 * @category model/google
 * @label google-genai
 * @position 1616 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Zdr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Zdr = T((qLc, Jut) => {
  function Oci(t) {
    return Array.isArray(t) ? t : [t];
  }
  var p6a = void 0,
    zdr = "",
    Rci = " ",
    Wdr = "\\",
    h6a = /^\s+$/,
    g6a = /(?:[^\\]|^)\\$/,
    b6a = /^\\!/,
    A6a = /^\\#/,
    y6a = /\r?\n/g,
    _6a = /^\.{0,2}\/|^\.{1,2}$/,
    E6a = /\/$/,
    V0e = "/",
    Nci = "node-ignore";
  typeof Symbol < "u" && (Nci = Symbol.for("node-ignore"));
  var Pci = Nci,
    W0e = (t, e, r) => (Object.defineProperty(t, e, { value: r }), r),
    v6a = /([0-z])-([0-z])/g,
    Bci = () => !1,
    C6a = (t) => t.replace(v6a, (e, r, n) => (r.charCodeAt(0) <= n.charCodeAt(0) ? e : zdr)),
    S6a = (t) => {
      let { length: e } = t;
      return t.slice(0, e - (e % 2));
    },
    w6a = [
      [/^\uFEFF/, () => zdr],
      [/((?:\\\\)*?)(\\?\s+)$/, (t, e, r) => e + (r.indexOf("\\") === 0 ? Rci : zdr)],
      [
        /(\\+?)\s/g,
        (t, e) => {
          let { length: r } = e;
          return e.slice(0, r - (r % 2)) + Rci;
        },
      ],
      [/[\\$.|*+(){^]/g, (t) => `\\${t}`],
      [/(?!\\)\?/g, () => "[^/]"],
      [/^\//, () => "^"],
      [/\//g, () => "\\/"],
      [/^\^*\\\*\\\*\\\//, () => "^(?:.*\\/)?"],
      [
        /^(?=[^^])/,
        function () {
          return /\/(?!$)/.test(this) ? "^" : "(?:^|\\/)";
        },
      ],
      [/\\\/\\\*\\\*(?=\\\/|$)/g, (t, e, r) => (e + 6 < r.length ? "(?:\\/[^\\/]+)*" : "\\/.+")],
      [
        /(^|[^\\]+)(\\\*)+(?=.+)/g,
        (t, e, r) => {
          let n = r.replace(/\\\*/g, "[^\\/]*");
          return e + n;
        },
      ],
      [/\\\\\\(?=[$.|*+(){^])/g, () => Wdr],
      [/\\\\/g, () => Wdr],
      [
        /(\\)?\[([^\]/]*?)(\\*)($|\])/g,
        (t, e, r, n, o) =>
          e === Wdr ? `\\[${r}${S6a(n)}${o}` : o === "]" && n.length % 2 === 0 ? `[${C6a(r)}${n}]` : "[]",
      ],
      [/(?:[^*])$/, (t) => (/\/$/.test(t) ? `${t}$` : `${t}(?=$|\\/$)`)],
    ],
    x6a = /(^|\\\/)?\\\*$/,
    $4e = "regex",
    Yut = "checkRegex",
    kci = "_",
    T6a = {
      [$4e](t, e) {
        return `${e ? `${e}[^/]+` : "[^/]*"}(?=$|\\/$)`;
      },
      [Yut](t, e) {
        return `${e ? `${e}[^/]*` : "[^/]*"}(?=$|\\/$)`;
      },
    },
    D6a = (t) => w6a.reduce((e, [r, n]) => e.replace(r, n.bind(t)), t),
    Kut = (t) => typeof t == "string",
    I6a = (t) => t && Kut(t) && !h6a.test(t) && !g6a.test(t) && t.indexOf("#") !== 0,
    R6a = (t) => t.split(y6a).filter(Boolean),
    Ydr = class {
      constructor(e, r, n, o, s, a) {
        ((this.pattern = e),
          (this.mark = r),
          (this.negative = s),
          W0e(this, "body", n),
          W0e(this, "ignoreCase", o),
          W0e(this, "regexPrefix", a));
      }
      get regex() {
        let e = kci + $4e;
        return this[e] ? this[e] : this._make($4e, e);
      }
      get checkRegex() {
        let e = kci + Yut;
        return this[e] ? this[e] : this._make(Yut, e);
      }
      _make(e, r) {
        let n = this.regexPrefix.replace(x6a, T6a[e]),
          o = this.ignoreCase ? new RegExp(n, "i") : new RegExp(n);
        return W0e(this, r, o);
      }
    },
    k6a = ({ pattern: t, mark: e }, r) => {
      let n = !1,
        o = t;
      (o.indexOf("!") === 0 && ((n = !0), (o = o.substr(1))), (o = o.replace(b6a, "!").replace(A6a, "#")));
      let s = D6a(o);
      return new Ydr(t, e, o, r, n, s);
    },
    Kdr = class {
      constructor(e) {
        ((this._ignoreCase = e), (this._rules = []));
      }
      _add(e) {
        if (e && e[Pci]) {
          ((this._rules = this._rules.concat(e._rules._rules)), (this._added = !0));
          return;
        }
        if ((Kut(e) && (e = { pattern: e }), I6a(e.pattern))) {
          let r = k6a(e, this._ignoreCase);
          ((this._added = !0), this._rules.push(r));
        }
      }
      add(e) {
        return ((this._added = !1), Oci(Kut(e) ? R6a(e) : e).forEach(this._add, this), this._added);
      }
      test(e, r, n) {
        let o = !1,
          s = !1,
          a;
        this._rules.forEach((c) => {
          let { negative: m } = c;
          (s === m && o !== s) || (m && !o && !s && !r) || !c[n].test(e) || ((o = !m), (s = m), (a = m ? p6a : c));
        });
        let u = { ignored: o, unignored: s };
        return (a && (u.rule = a), u);
      }
    },
    O6a = (t, e) => {
      throw new e(t);
    },
    oN = (t, e, r) =>
      Kut(t)
        ? t
          ? oN.isNotRelative(t)
            ? r(`path should be a \`path.relative()\`d string, but got "${e}"`, RangeError)
            : !0
          : r("path must not be empty", TypeError)
        : r(`path must be a string, but got \`${e}\``, TypeError),
    Lci = (t) => _6a.test(t);
  oN.isNotRelative = Lci;
  oN.convert = (t) => t;
  var Jdr = class {
      constructor({ ignorecase: e = !0, ignoreCase: r = e, allowRelativePaths: n = !1 } = {}) {
        (W0e(this, Pci, !0), (this._rules = new Kdr(r)), (this._strictPathCheck = !n), this._initCache());
      }
      _initCache() {
        ((this._ignoreCache = Object.create(null)), (this._testCache = Object.create(null)));
      }
      add(e) {
        return (this._rules.add(e) && this._initCache(), this);
      }
      addPattern(e) {
        return this.add(e);
      }
      _test(e, r, n, o) {
        let s = e && oN.convert(e);
        return (oN(s, e, this._strictPathCheck ? O6a : Bci), this._t(s, r, n, o));
      }
      checkIgnore(e) {
        if (!E6a.test(e)) return this.test(e);
        let r = e.split(V0e).filter(Boolean);
        if ((r.pop(), r.length)) {
          let n = this._t(r.join(V0e) + V0e, this._testCache, !0, r);
          if (n.ignored) return n;
        }
        return this._rules.test(e, !1, Yut);
      }
      _t(e, r, n, o) {
        if (e in r) return r[e];
        if ((o || (o = e.split(V0e).filter(Boolean)), o.pop(), !o.length)) return (r[e] = this._rules.test(e, n, $4e));
        let s = this._t(o.join(V0e) + V0e, r, n, o);
        return (r[e] = s.ignored ? s : this._rules.test(e, n, $4e));
      }
      ignores(e) {
        return this._test(e, this._ignoreCache, !1).ignored;
      }
      createFilter() {
        return (e) => !this.ignores(e);
      }
      filter(e) {
        return Oci(e).filter(this.createFilter());
      }
      test(e) {
        return this._test(e, this._testCache, !0);
      }
    },
    Xdr = (t) => new Jdr(t),
    N6a = (t) => oN(t && oN.convert(t), t, Bci),
    Mci = () => {
      let t = (r) => (/^\\\\\?\\/.test(r) || /["<>|\u0000-\u001F]+/u.test(r) ? r : r.replace(/\\/g, "/"));
      oN.convert = t;
      let e = /^[a-z]:\//i;
      oN.isNotRelative = (r) => e.test(r) || Lci(r);
    };
  typeof process < "u" && process.platform === "win32" && Mci();
  Jut.exports = Xdr;
  Xdr.default = Xdr;
  Jut.exports.isPathValid = N6a;
  W0e(Jut.exports, Symbol.for("setupWindows"), Mci);
});
import * as Fci from "fs";
import * as JU from "path";
var Uci,
  z0e,
  e1r = j(() => {
    "use strict";
    Uci = Se(Zdr(), 1);
    TO();
    z0e = class {
      projectRoot;
      ig = (0, Uci.default)();
      patterns = [];
      constructor(e) {
        this.projectRoot = JU.resolve(e);
      }
      loadGitRepoPatterns() {
        if (!ll(this.projectRoot)) return;
        this.addPatterns([".git"]);
        let e = [".gitignore", JU.join(".git", "info", "exclude")];
        for (let r of e) this.loadPatterns(r);
      }
      loadPatterns(e) {
        let r = JU.join(this.projectRoot, e),
          n;
        try {
          n = Fci.readFileSync(r, "utf-8");
        } catch {
          return;
        }
        let o = (n ?? "")
          .split(
            `
`,
          )
          .map((s) => s.trim())
          .filter((s) => s !== "" && !s.startsWith("#"));
        this.addPatterns(o);
      }
      addPatterns(e) {
        (this.ig.add(e), this.patterns.push(...e));
      }
      addAdditionalPatterns(e) {
        this.addPatterns(e);
      }
      isIgnored(e) {
        let r = JU.resolve(this.projectRoot, e),
          n = JU.relative(this.projectRoot, r);
        if (n === "" || n.startsWith("..")) return !1;
        let o = n.replace(/\\/g, "/");
        return o.startsWith("/") ? !1 : this.ig.ignores(o);
      }
      getPatterns() {
        return this.patterns;
      }
    };
  });
import * as $ci from "path";
var P6a,
  UY,
  t1r = j(() => {
    "use strict";
    e1r();
    TO();
    ((P6a = ".iflowignore"),
      (UY = class {
        gitIgnoreFilter = null;
        geminiIgnoreFilter = null;
        projectRoot;
        constructor(e) {
          if (((this.projectRoot = $ci.resolve(e)), ll(this.projectRoot))) {
            let n = new z0e(this.projectRoot);
            try {
              n.loadGitRepoPatterns();
            } catch {}
            this.gitIgnoreFilter = n;
          }
          let r = new z0e(this.projectRoot);
          try {
            r.loadPatterns(P6a);
          } catch {}
          this.geminiIgnoreFilter = r;
        }
        filterFiles(e, r = { respectGitIgnore: !0, respectGeminiIgnore: !0 }) {
          return e.filter(
            (n) =>
              !(
                (r.respectGitIgnore && this.shouldGitIgnoreFile(n)) ||
                (r.respectGeminiIgnore && this.shouldGeminiIgnoreFile(n))
              ),
          );
        }
        shouldGitIgnoreFile(e) {
          return this.gitIgnoreFilter ? this.gitIgnoreFilter.isIgnored(e) : !1;
        }
        shouldGeminiIgnoreFile(e) {
          return this.geminiIgnoreFilter ? this.geminiIgnoreFilter.isIgnored(e) : !1;
        }
        shouldIgnoreFile(e, r = {}) {
          let { respectGitIgnore: n = !0, respectGeminiIgnore: o = !0 } = r;
          return !!((n && this.shouldGitIgnoreFile(e)) || (o && this.shouldGeminiIgnoreFile(e)));
        }
        getGeminiIgnorePatterns() {
          return this.geminiIgnoreFilter?.getPatterns() ?? [];
        }
      }));
  });