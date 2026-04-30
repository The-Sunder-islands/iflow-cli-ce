/**
 * @module TWi
 * @category utils/markdown
 * @label markdown
 * @position 1905 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (TWi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var TWi = T((mgl, xWi) => {
  function pWi(t) {
    return (
      t instanceof Map
        ? (t.clear =
            t.delete =
            t.set =
              function () {
                throw new Error("map is read-only");
              })
        : t instanceof Set &&
          (t.add =
            t.clear =
            t.delete =
              function () {
                throw new Error("set is read-only");
              }),
      Object.freeze(t),
      Object.getOwnPropertyNames(t).forEach((e) => {
        let r = t[e],
          n = typeof r;
        (n === "object" || n === "function") && !Object.isFrozen(r) && pWi(r);
      }),
      t
    );
  }
  var Rgt = class {
    constructor(e) {
      (e.data === void 0 && (e.data = {}), (this.data = e.data), (this.isMatchIgnored = !1));
    }
    ignoreMatch() {
      this.isMatchIgnored = !0;
    }
  };
  function hWi(t) {
    return t
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#x27;");
  }
  function Ij(t, ...e) {
    let r = Object.create(null);
    for (let n in t) r[n] = t[n];
    return (
      e.forEach(function (n) {
        for (let o in n) r[o] = n[o];
      }),
      r
    );
  }
  var g0u = "</span>",
    uWi = (t) => !!t.scope,
    b0u = (t, { prefix: e }) => {
      if (t.startsWith("language:")) return t.replace("language:", "language-");
      if (t.includes(".")) {
        let r = t.split(".");
        return [`${e}${r.shift()}`, ...r.map((n, o) => `${n}${"_".repeat(o + 1)}`)].join(" ");
      }
      return `${e}${t}`;
    },
    Pyr = class {
      constructor(e, r) {
        ((this.buffer = ""), (this.classPrefix = r.classPrefix), e.walk(this));
      }
      addText(e) {
        this.buffer += hWi(e);
      }
      openNode(e) {
        if (!uWi(e)) return;
        let r = b0u(e.scope, { prefix: this.classPrefix });
        this.span(r);
      }
      closeNode(e) {
        uWi(e) && (this.buffer += g0u);
      }
      value() {
        return this.buffer;
      }
      span(e) {
        this.buffer += `<span class="${e}">`;
      }
    },
    cWi = (t = {}) => {
      let e = { children: [] };
      return (Object.assign(e, t), e);
    },
    Byr = class t {
      constructor() {
        ((this.rootNode = cWi()), (this.stack = [this.rootNode]));
      }
      get top() {
        return this.stack[this.stack.length - 1];
      }
      get root() {
        return this.rootNode;
      }
      add(e) {
        this.top.children.push(e);
      }
      openNode(e) {
        let r = cWi({ scope: e });
        (this.add(r), this.stack.push(r));
      }
      closeNode() {
        if (this.stack.length > 1) return this.stack.pop();
      }
      closeAllNodes() {
        for (; this.closeNode(); );
      }
      toJSON() {
        return JSON.stringify(this.rootNode, null, 4);
      }
      walk(e) {
        return this.constructor._walk(e, this.rootNode);
      }
      static _walk(e, r) {
        return (
          typeof r == "string"
            ? e.addText(r)
            : r.children && (e.openNode(r), r.children.forEach((n) => this._walk(e, n)), e.closeNode(r)),
          e
        );
      }
      static _collapse(e) {
        typeof e != "string" &&
          e.children &&
          (e.children.every((r) => typeof r == "string")
            ? (e.children = [e.children.join("")])
            : e.children.forEach((r) => {
                t._collapse(r);
              }));
      }
    },
    Lyr = class extends Byr {
      constructor(e) {
        (super(), (this.options = e));
      }
      addText(e) {
        e !== "" && this.add(e);
      }
      startScope(e) {
        this.openNode(e);
      }
      endScope() {
        this.closeNode();
      }
      __addSublanguage(e, r) {
        let n = e.root;
        (r && (n.scope = `language:${r}`), this.add(n));
      }
      toHTML() {
        return new Pyr(this, this.options).value();
      }
      finalize() {
        return (this.closeAllNodes(), !0);
      }
    };
  function rDe(t) {
    return t ? (typeof t == "string" ? t : t.source) : null;
  }
  function gWi(t) {
    return CJ("(?=", t, ")");
  }
  function A0u(t) {
    return CJ("(?:", t, ")*");
  }
  function y0u(t) {
    return CJ("(?:", t, ")?");
  }
  function CJ(...t) {
    return t.map((r) => rDe(r)).join("");
  }
  function _0u(t) {
    let e = t[t.length - 1];
    return typeof e == "object" && e.constructor === Object ? (t.splice(t.length - 1, 1), e) : {};
  }
  function Fyr(...t) {
    return "(" + (_0u(t).capture ? "" : "?:") + t.map((n) => rDe(n)).join("|") + ")";
  }
  function bWi(t) {
    return new RegExp(t.toString() + "|").exec("").length - 1;
  }
  function E0u(t, e) {
    let r = t && t.exec(e);
    return r && r.index === 0;
  }
  var v0u = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function Uyr(t, { joinWith: e }) {
    let r = 0;
    return t
      .map((n) => {
        r += 1;
        let o = r,
          s = rDe(n),
          a = "";
        for (; s.length > 0; ) {
          let u = v0u.exec(s);
          if (!u) {
            a += s;
            break;
          }
          ((a += s.substring(0, u.index)),
            (s = s.substring(u.index + u[0].length)),
            u[0][0] === "\\" && u[1] ? (a += "\\" + String(Number(u[1]) + o)) : ((a += u[0]), u[0] === "(" && r++));
        }
        return a;
      })
      .map((n) => `(${n})`)
      .join(e);
  }
  var C0u = /\b\B/,
    AWi = "[a-zA-Z]\\w*",
    $yr = "[a-zA-Z_]\\w*",
    yWi = "\\b\\d+(\\.\\d+)?",
    _Wi = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
    EWi = "\\b(0b[01]+)",
    S0u =
      "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
    w0u = (t = {}) => {
      let e = /^#![ ]*\//;
      return (
        t.binary && (t.begin = CJ(e, /.*\b/, t.binary, /\b.*/)),
        Ij(
          {
            scope: "meta",
            begin: e,
            end: /$/,
            relevance: 0,
            "on:begin": (r, n) => {
              r.index !== 0 && n.ignoreMatch();
            },
          },
          t,
        )
      );
    },
    nDe = { begin: "\\\\[\\s\\S]", relevance: 0 },
    x0u = { scope: "string", begin: "'", end: "'", illegal: "\\n", contains: [nDe] },
    T0u = { scope: "string", begin: '"', end: '"', illegal: "\\n", contains: [nDe] },
    D0u = {
      begin:
        /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/,
    },
    Ogt = function (t, e, r = {}) {
      let n = Ij({ scope: "comment", begin: t, end: e, contains: [] }, r);
      n.contains.push({
        scope: "doctag",
        begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
        end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
        excludeBegin: !0,
        relevance: 0,
      });
      let o = Fyr(
        "I",
        "a",
        "is",
        "so",
        "us",
        "to",
        "at",
        "if",
        "in",
        "it",
        "on",
        /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
        /[A-Za-z]+[-][a-z]+/,
        /[A-Za-z][a-z]{2,}/,
      );
      return (n.contains.push({ begin: CJ(/[ ]+/, "(", o, /[.]?[:]?([.][ ]|[ ])/, "){3}") }), n);
    },
    I0u = Ogt("//", "$"),
    R0u = Ogt("/\\*", "\\*/"),
    k0u = Ogt("#", "$"),
    O0u = { scope: "number", begin: yWi, relevance: 0 },
    N0u = { scope: "number", begin: _Wi, relevance: 0 },
    P0u = { scope: "number", begin: EWi, relevance: 0 },
    B0u = {
      scope: "regexp",
      begin: /\/(?=[^/\n]*\/)/,
      end: /\/[gimuy]*/,
      contains: [nDe, { begin: /\[/, end: /\]/, relevance: 0, contains: [nDe] }],
    },
    L0u = { scope: "title", begin: AWi, relevance: 0 },
    M0u = { scope: "title", begin: $yr, relevance: 0 },
    F0u = { begin: "\\.\\s*" + $yr, relevance: 0 },
    U0u = function (t) {
      return Object.assign(t, {
        "on:begin": (e, r) => {
          r.data._beginMatch = e[1];
        },
        "on:end": (e, r) => {
          r.data._beginMatch !== e[1] && r.ignoreMatch();
        },
      });
    },
    Igt = Object.freeze({
      __proto__: null,
      APOS_STRING_MODE: x0u,
      BACKSLASH_ESCAPE: nDe,
      BINARY_NUMBER_MODE: P0u,
      BINARY_NUMBER_RE: EWi,
      COMMENT: Ogt,
      C_BLOCK_COMMENT_MODE: R0u,
      C_LINE_COMMENT_MODE: I0u,
      C_NUMBER_MODE: N0u,
      C_NUMBER_RE: _Wi,
      END_SAME_AS_BEGIN: U0u,
      HASH_COMMENT_MODE: k0u,
      IDENT_RE: AWi,
      MATCH_NOTHING_RE: C0u,
      METHOD_GUARD: F0u,
      NUMBER_MODE: O0u,
      NUMBER_RE: yWi,
      PHRASAL_WORDS_MODE: D0u,
      QUOTE_STRING_MODE: T0u,
      REGEXP_MODE: B0u,
      RE_STARTERS_RE: S0u,
      SHEBANG: w0u,
      TITLE_MODE: L0u,
      UNDERSCORE_IDENT_RE: $yr,
      UNDERSCORE_TITLE_MODE: M0u,
    });
  function $0u(t, e) {
    t.input[t.index - 1] === "." && e.ignoreMatch();
  }
  function j0u(t, e) {
    t.className !== void 0 && ((t.scope = t.className), delete t.className);
  }
  function Q0u(t, e) {
    e &&
      t.beginKeywords &&
      ((t.begin = "\\b(" + t.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)"),
      (t.__beforeBegin = $0u),
      (t.keywords = t.keywords || t.beginKeywords),
      delete t.beginKeywords,
      t.relevance === void 0 && (t.relevance = 0));
  }
  function G0u(t, e) {
    Array.isArray(t.illegal) && (t.illegal = Fyr(...t.illegal));
  }
  function q0u(t, e) {
    if (t.match) {
      if (t.begin || t.end) throw new Error("begin & end are not supported with match");
      ((t.begin = t.match), delete t.match);
    }
  }
  function H0u(t, e) {
    t.relevance === void 0 && (t.relevance = 1);
  }
  var V0u = (t, e) => {
      if (!t.beforeMatch) return;
      if (t.starts) throw new Error("beforeMatch cannot be used with starts");
      let r = Object.assign({}, t);
      (Object.keys(t).forEach((n) => {
        delete t[n];
      }),
        (t.keywords = r.keywords),
        (t.begin = CJ(r.beforeMatch, gWi(r.begin))),
        (t.starts = { relevance: 0, contains: [Object.assign(r, { endsParent: !0 })] }),
        (t.relevance = 0),
        delete r.beforeMatch);
    },
    W0u = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"],
    z0u = "keyword";
  function vWi(t, e, r = z0u) {
    let n = Object.create(null);
    return (
      typeof t == "string"
        ? o(r, t.split(" "))
        : Array.isArray(t)
          ? o(r, t)
          : Object.keys(t).forEach(function (s) {
              Object.assign(n, vWi(t[s], e, s));
            }),
      n
    );
    function o(s, a) {
      (e && (a = a.map((u) => u.toLowerCase())),
        a.forEach(function (u) {
          let c = u.split("|");
          n[c[0]] = [s, Y0u(c[0], c[1])];
        }));
    }
  }
  function Y0u(t, e) {
    return e ? Number(e) : K0u(t) ? 0 : 1;
  }
  function K0u(t) {
    return W0u.includes(t.toLowerCase());
  }
  var lWi = {},
    vJ = (t) => {
      console.error(t);
    },
    mWi = (t, ...e) => {
      console.log(`WARN: ${t}`, ...e);
    },
    efe = (t, e) => {
      lWi[`${t}/${e}`] || (console.log(`Deprecated as of ${t}. ${e}`), (lWi[`${t}/${e}`] = !0));
    },
    kgt = new Error();
  function CWi(t, e, { key: r }) {
    let n = 0,
      o = t[r],
      s = {},
      a = {};
    for (let u = 1; u <= e.length; u++) ((a[u + n] = o[u]), (s[u + n] = !0), (n += bWi(e[u - 1])));
    ((t[r] = a), (t[r]._emit = s), (t[r]._multi = !0));
  }
  function J0u(t) {
    if (Array.isArray(t.begin)) {
      if (t.skip || t.excludeBegin || t.returnBegin)
        throw (vJ("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), kgt);
      if (typeof t.beginScope != "object" || t.beginScope === null) throw (vJ("beginScope must be object"), kgt);
      (CWi(t, t.begin, { key: "beginScope" }), (t.begin = Uyr(t.begin, { joinWith: "" })));
    }
  }
  function X0u(t) {
    if (Array.isArray(t.end)) {
      if (t.skip || t.excludeEnd || t.returnEnd)
        throw (vJ("skip, excludeEnd, returnEnd not compatible with endScope: {}"), kgt);
      if (typeof t.endScope != "object" || t.endScope === null) throw (vJ("endScope must be object"), kgt);
      (CWi(t, t.end, { key: "endScope" }), (t.end = Uyr(t.end, { joinWith: "" })));
    }
  }
  function Z0u(t) {
    t.scope && typeof t.scope == "object" && t.scope !== null && ((t.beginScope = t.scope), delete t.scope);
  }
  function emu(t) {
    (Z0u(t),
      typeof t.beginScope == "string" && (t.beginScope = { _wrap: t.beginScope }),
      typeof t.endScope == "string" && (t.endScope = { _wrap: t.endScope }),
      J0u(t),
      X0u(t));
  }
  function tmu(t) {
    function e(a, u) {
      return new RegExp(rDe(a), "m" + (t.case_insensitive ? "i" : "") + (t.unicodeRegex ? "u" : "") + (u ? "g" : ""));
    }
    class r {
      constructor() {
        ((this.matchIndexes = {}), (this.regexes = []), (this.matchAt = 1), (this.position = 0));
      }
      addRule(u, c) {
        ((c.position = this.position++),
          (this.matchIndexes[this.matchAt] = c),
          this.regexes.push([c, u]),
          (this.matchAt += bWi(u) + 1));
      }
      compile() {
        this.regexes.length === 0 && (this.exec = () => null);
        let u = this.regexes.map((c) => c[1]);
        ((this.matcherRe = e(Uyr(u, { joinWith: "|" }), !0)), (this.lastIndex = 0));
      }
      exec(u) {
        this.matcherRe.lastIndex = this.lastIndex;
        let c = this.matcherRe.exec(u);
        if (!c) return null;
        let m = c.findIndex((f, p) => p > 0 && f !== void 0),
          d = this.matchIndexes[m];
        return (c.splice(0, m), Object.assign(c, d));
      }
    }
    class n {
      constructor() {
        ((this.rules = []), (this.multiRegexes = []), (this.count = 0), (this.lastIndex = 0), (this.regexIndex = 0));
      }
      getMatcher(u) {
        if (this.multiRegexes[u]) return this.multiRegexes[u];
        let c = new r();
        return (this.rules.slice(u).forEach(([m, d]) => c.addRule(m, d)), c.compile(), (this.multiRegexes[u] = c), c);
      }
      resumingScanAtSamePosition() {
        return this.regexIndex !== 0;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      addRule(u, c) {
        (this.rules.push([u, c]), c.type === "begin" && this.count++);
      }
      exec(u) {
        let c = this.getMatcher(this.regexIndex);
        c.lastIndex = this.lastIndex;
        let m = c.exec(u);
        if (this.resumingScanAtSamePosition() && !(m && m.index === this.lastIndex)) {
          let d = this.getMatcher(0);
          ((d.lastIndex = this.lastIndex + 1), (m = d.exec(u)));
        }
        return (m && ((this.regexIndex += m.position + 1), this.regexIndex === this.count && this.considerAll()), m);
      }
    }
    function o(a) {
      let u = new n();
      return (
        a.contains.forEach((c) => u.addRule(c.begin, { rule: c, type: "begin" })),
        a.terminatorEnd && u.addRule(a.terminatorEnd, { type: "end" }),
        a.illegal && u.addRule(a.illegal, { type: "illegal" }),
        u
      );
    }
    function s(a, u) {
      let c = a;
      if (a.isCompiled) return c;
      ([j0u, q0u, emu, V0u].forEach((d) => d(a, u)),
        t.compilerExtensions.forEach((d) => d(a, u)),
        (a.__beforeBegin = null),
        [Q0u, G0u, H0u].forEach((d) => d(a, u)),
        (a.isCompiled = !0));
      let m = null;
      return (
        typeof a.keywords == "object" &&
          a.keywords.$pattern &&
          ((a.keywords = Object.assign({}, a.keywords)), (m = a.keywords.$pattern), delete a.keywords.$pattern),
        (m = m || /\w+/),
        a.keywords && (a.keywords = vWi(a.keywords, t.case_insensitive)),
        (c.keywordPatternRe = e(m, !0)),
        u &&
          (a.begin || (a.begin = /\B|\b/),
          (c.beginRe = e(c.begin)),
          !a.end && !a.endsWithParent && (a.end = /\B|\b/),
          a.end && (c.endRe = e(c.end)),
          (c.terminatorEnd = rDe(c.end) || ""),
          a.endsWithParent && u.terminatorEnd && (c.terminatorEnd += (a.end ? "|" : "") + u.terminatorEnd)),
        a.illegal && (c.illegalRe = e(a.illegal)),
        a.contains || (a.contains = []),
        (a.contains = [].concat(
          ...a.contains.map(function (d) {
            return rmu(d === "self" ? a : d);
          }),
        )),
        a.contains.forEach(function (d) {
          s(d, c);
        }),
        a.starts && s(a.starts, u),
        (c.matcher = o(c)),
        c
      );
    }
    if ((t.compilerExtensions || (t.compilerExtensions = []), t.contains && t.contains.includes("self")))
      throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return ((t.classNameAliases = Ij(t.classNameAliases || {})), s(t));
  }
  function SWi(t) {
    return t ? t.endsWithParent || SWi(t.starts) : !1;
  }
  function rmu(t) {
    return (
      t.variants &&
        !t.cachedVariants &&
        (t.cachedVariants = t.variants.map(function (e) {
          return Ij(t, { variants: null }, e);
        })),
      t.cachedVariants
        ? t.cachedVariants
        : SWi(t)
          ? Ij(t, { starts: t.starts ? Ij(t.starts) : null })
          : Object.isFrozen(t)
            ? Ij(t)
            : t
    );
  }
  var nmu = "11.11.1",
    Myr = class extends Error {
      constructor(e, r) {
        (super(e), (this.name = "HTMLInjectionError"), (this.html = r));
      }
    },
    Nyr = hWi,
    dWi = Ij,
    fWi = Symbol("nomatch"),
    imu = 7,
    wWi = function (t) {
      let e = Object.create(null),
        r = Object.create(null),
        n = [],
        o = !0,
        s = "Could not find the language '{}', did you forget to load/include a language module?",
        a = { disableAutodetect: !0, name: "Plain text", contains: [] },
        u = {
          ignoreUnescapedHTML: !1,
          throwUnescapedHTML: !1,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          __emitter: Lyr,
        };
      function c(Q) {
        return u.noHighlightRe.test(Q);
      }
      function m(Q) {
        let K = Q.className + " ";
        K += Q.parentNode ? Q.parentNode.className : "";
        let H = u.languageDetectRe.exec(K);
        if (H) {
          let U = P(H[1]);
          return (
            U || (mWi(s.replace("{}", H[1])), mWi("Falling back to no-highlight mode for this block.", Q)),
            U ? H[1] : "no-highlight"
          );
        }
        return K.split(/\s+/).find((U) => c(U) || P(U));
      }
      function d(Q, K, H) {
        let U = "",
          Y = "";
        (typeof K == "object"
          ? ((U = Q), (H = K.ignoreIllegals), (Y = K.language))
          : (efe("10.7.0", "highlight(lang, code, ...args) has been deprecated."),
            efe(
              "10.7.0",
              `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`,
            ),
            (Y = Q),
            (U = K)),
          H === void 0 && (H = !0));
        let X = { code: U, language: Y };
        L("before:highlight", X);
        let J = X.result ? X.result : f(X.language, X.code, H);
        return ((J.code = X.code), L("after:highlight", J), J);
      }
      function f(Q, K, H, U) {
        let Y = Object.create(null);
        function X(ke, $e) {
          return ke.keywords[$e];
        }
        function J() {
          if (!pe.keywords) {
            Ne.addText(Ge);
            return;
          }
          let ke = 0;
          pe.keywordPatternRe.lastIndex = 0;
          let $e = pe.keywordPatternRe.exec(Ge),
            Le = "";
          for (; $e; ) {
            Le += Ge.substring(ke, $e.index);
            let Fe = V.case_insensitive ? $e[0].toLowerCase() : $e[0],
              je = X(pe, Fe);
            if (je) {
              let [He, mt] = je;
              if (
                (Ne.addText(Le), (Le = ""), (Y[Fe] = (Y[Fe] || 0) + 1), Y[Fe] <= imu && (Ze += mt), He.startsWith("_"))
              )
                Le += $e[0];
              else {
                let kt = V.classNameAliases[He] || He;
                de($e[0], kt);
              }
            } else Le += $e[0];
            ((ke = pe.keywordPatternRe.lastIndex), ($e = pe.keywordPatternRe.exec(Ge)));
          }
          ((Le += Ge.substring(ke)), Ne.addText(Le));
        }
        function q() {
          if (Ge === "") return;
          let ke = null;
          if (typeof pe.subLanguage == "string") {
            if (!e[pe.subLanguage]) {
              Ne.addText(Ge);
              return;
            }
            ((ke = f(pe.subLanguage, Ge, !0, be[pe.subLanguage])), (be[pe.subLanguage] = ke._top));
          } else ke = h(Ge, pe.subLanguage.length ? pe.subLanguage : null);
          (pe.relevance > 0 && (Ze += ke.relevance), Ne.__addSublanguage(ke._emitter, ke.language));
        }
        function ne() {
          (pe.subLanguage != null ? q() : J(), (Ge = ""));
        }
        function de(ke, $e) {
          ke !== "" && (Ne.startScope($e), Ne.addText(ke), Ne.endScope());
        }
        function ce(ke, $e) {
          let Le = 1,
            Fe = $e.length - 1;
          for (; Le <= Fe; ) {
            if (!ke._emit[Le]) {
              Le++;
              continue;
            }
            let je = V.classNameAliases[ke[Le]] || ke[Le],
              He = $e[Le];
            (je ? de(He, je) : ((Ge = He), J(), (Ge = "")), Le++);
          }
        }
        function ye(ke, $e) {
          return (
            ke.scope && typeof ke.scope == "string" && Ne.openNode(V.classNameAliases[ke.scope] || ke.scope),
            ke.beginScope &&
              (ke.beginScope._wrap
                ? (de(Ge, V.classNameAliases[ke.beginScope._wrap] || ke.beginScope._wrap), (Ge = ""))
                : ke.beginScope._multi && (ce(ke.beginScope, $e), (Ge = ""))),
            (pe = Object.create(ke, { parent: { value: pe } })),
            pe
          );
        }
        function Z(ke, $e, Le) {
          let Fe = E0u(ke.endRe, Le);
          if (Fe) {
            if (ke["on:end"]) {
              let je = new Rgt(ke);
              (ke["on:end"]($e, je), je.isMatchIgnored && (Fe = !1));
            }
            if (Fe) {
              for (; ke.endsParent && ke.parent; ) ke = ke.parent;
              return ke;
            }
          }
          if (ke.endsWithParent) return Z(ke.parent, $e, Le);
        }
        function oe(ke) {
          return pe.matcher.regexIndex === 0 ? ((Ge += ke[0]), 1) : ((Ie = !0), 0);
        }
        function ue(ke) {
          let $e = ke[0],
            Le = ke.rule,
            Fe = new Rgt(Le),
            je = [Le.__beforeBegin, Le["on:begin"]];
          for (let He of je) if (He && (He(ke, Fe), Fe.isMatchIgnored)) return oe($e);
          return (
            Le.skip
              ? (Ge += $e)
              : (Le.excludeBegin && (Ge += $e), ne(), !Le.returnBegin && !Le.excludeBegin && (Ge = $e)),
            ye(Le, ke),
            Le.returnBegin ? 0 : $e.length
          );
        }
        function he(ke) {
          let $e = ke[0],
            Le = K.substring(ke.index),
            Fe = Z(pe, ke, Le);
          if (!Fe) return fWi;
          let je = pe;
          pe.endScope && pe.endScope._wrap
            ? (ne(), de($e, pe.endScope._wrap))
            : pe.endScope && pe.endScope._multi
              ? (ne(), ce(pe.endScope, ke))
              : je.skip
                ? (Ge += $e)
                : (je.returnEnd || je.excludeEnd || (Ge += $e), ne(), je.excludeEnd && (Ge = $e));
          do (pe.scope && Ne.closeNode(), !pe.skip && !pe.subLanguage && (Ze += pe.relevance), (pe = pe.parent));
          while (pe !== Fe.parent);
          return (Fe.starts && ye(Fe.starts, ke), je.returnEnd ? 0 : $e.length);
        }
        function se() {
          let ke = [];
          for (let $e = pe; $e !== V; $e = $e.parent) $e.scope && ke.unshift($e.scope);
          ke.forEach(($e) => Ne.openNode($e));
        }
        let fe = {};
        function ge(ke, $e) {
          let Le = $e && $e[0];
          if (((Ge += ke), Le == null)) return (ne(), 0);
          if (fe.type === "begin" && $e.type === "end" && fe.index === $e.index && Le === "") {
            if (((Ge += K.slice($e.index, $e.index + 1)), !o)) {
              let Fe = new Error(`0 width match regex (${Q})`);
              throw ((Fe.languageName = Q), (Fe.badRule = fe.rule), Fe);
            }
            return 1;
          }
          if (((fe = $e), $e.type === "begin")) return ue($e);
          if ($e.type === "illegal" && !H) {
            let Fe = new Error('Illegal lexeme "' + Le + '" for mode "' + (pe.scope || "<unnamed>") + '"');
            throw ((Fe.mode = pe), Fe);
          } else if ($e.type === "end") {
            let Fe = he($e);
            if (Fe !== fWi) return Fe;
          }
          if ($e.type === "illegal" && Le === "")
            return (
              (Ge += `
`),
              1
            );
          if (_e > 1e5 && _e > $e.index * 3)
            throw new Error("potential infinite loop, way more iterations than matches");
          return ((Ge += Le), Le.length);
        }
        let V = P(Q);
        if (!V) throw (vJ(s.replace("{}", Q)), new Error('Unknown language: "' + Q + '"'));
        let ee = tmu(V),
          Ce = "",
          pe = U || ee,
          be = {},
          Ne = new u.__emitter(u);
        se();
        let Ge = "",
          Ze = 0,
          Ye = 0,
          _e = 0,
          Ie = !1;
        try {
          if (V.__emitTokens) V.__emitTokens(K, Ne);
          else {
            for (pe.matcher.considerAll(); ; ) {
              (_e++, Ie ? (Ie = !1) : pe.matcher.considerAll(), (pe.matcher.lastIndex = Ye));
              let ke = pe.matcher.exec(K);
              if (!ke) break;
              let $e = K.substring(Ye, ke.index),
                Le = ge($e, ke);
              Ye = ke.index + Le;
            }
            ge(K.substring(Ye));
          }
          return (
            Ne.finalize(),
            (Ce = Ne.toHTML()),
            { language: Q, value: Ce, relevance: Ze, illegal: !1, _emitter: Ne, _top: pe }
          );
        } catch (ke) {
          if (ke.message && ke.message.includes("Illegal"))
            return {
              language: Q,
              value: Nyr(K),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: ke.message,
                index: Ye,
                context: K.slice(Ye - 100, Ye + 100),
                mode: ke.mode,
                resultSoFar: Ce,
              },
              _emitter: Ne,
            };
          if (o)
            return { language: Q, value: Nyr(K), illegal: !1, relevance: 0, errorRaised: ke, _emitter: Ne, _top: pe };
          throw ke;
        }
      }
      function p(Q) {
        let K = { value: Nyr(Q), illegal: !1, relevance: 0, _top: a, _emitter: new u.__emitter(u) };
        return (K._emitter.addText(Q), K);
      }
      function h(Q, K) {
        K = K || u.languages || Object.keys(e);
        let H = p(Q),
          U = K.filter(P)
            .filter(O)
            .map((ne) => f(ne, Q, !1));
        U.unshift(H);
        let Y = U.sort((ne, de) => {
            if (ne.relevance !== de.relevance) return de.relevance - ne.relevance;
            if (ne.language && de.language) {
              if (P(ne.language).supersetOf === de.language) return 1;
              if (P(de.language).supersetOf === ne.language) return -1;
            }
            return 0;
          }),
          [X, J] = Y,
          q = X;
        return ((q.secondBest = J), q);
      }
      function g(Q, K, H) {
        let U = (K && r[K]) || H;
        (Q.classList.add("hljs"), Q.classList.add(`language-${U}`));
      }
      function b(Q) {
        let K = null,
          H = m(Q);
        if (c(H)) return;
        if ((L("before:highlightElement", { el: Q, language: H }), Q.dataset.highlighted)) {
          console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", Q);
          return;
        }
        if (
          Q.children.length > 0 &&
          (u.ignoreUnescapedHTML ||
            (console.warn(
              "One of your code blocks includes unescaped HTML. This is a potentially serious security risk.",
            ),
            console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),
            console.warn("The element with unescaped HTML:"),
            console.warn(Q)),
          u.throwUnescapedHTML)
        )
          throw new Myr("One of your code blocks includes unescaped HTML.", Q.innerHTML);
        K = Q;
        let U = K.textContent,
          Y = H ? d(U, { language: H, ignoreIllegals: !0 }) : h(U);
        ((Q.innerHTML = Y.value),
          (Q.dataset.highlighted = "yes"),
          g(Q, H, Y.language),
          (Q.result = { language: Y.language, re: Y.relevance, relevance: Y.relevance }),
          Y.secondBest && (Q.secondBest = { language: Y.secondBest.language, relevance: Y.secondBest.relevance }),
          L("after:highlightElement", { el: Q, result: Y, text: U }));
      }
      function A(Q) {
        u = dWi(u, Q);
      }
      let y = () => {
        (C(), efe("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now."));
      };
      function E() {
        (C(), efe("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now."));
      }
      let v = !1;
      function C() {
        function Q() {
          C();
        }
        if (document.readyState === "loading") {
          (v || window.addEventListener("DOMContentLoaded", Q, !1), (v = !0));
          return;
        }
        document.querySelectorAll(u.cssSelector).forEach(b);
      }
      function x(Q, K) {
        let H = null;
        try {
          H = K(t);
        } catch (U) {
          if ((vJ("Language definition for '{}' could not be registered.".replace("{}", Q)), o)) vJ(U);
          else throw U;
          H = a;
        }
        (H.name || (H.name = Q),
          (e[Q] = H),
          (H.rawDefinition = K.bind(null, t)),
          H.aliases && D(H.aliases, { languageName: Q }));
      }
      function k(Q) {
        delete e[Q];
        for (let K of Object.keys(r)) r[K] === Q && delete r[K];
      }
      function R() {
        return Object.keys(e);
      }
      function P(Q) {
        return ((Q = (Q || "").toLowerCase()), e[Q] || e[r[Q]]);
      }
      function D(Q, { languageName: K }) {
        (typeof Q == "string" && (Q = [Q]),
          Q.forEach((H) => {
            r[H.toLowerCase()] = K;
          }));
      }
      function O(Q) {
        let K = P(Q);
        return K && !K.disableAutodetect;
      }
      function N(Q) {
        (Q["before:highlightBlock"] &&
          !Q["before:highlightElement"] &&
          (Q["before:highlightElement"] = (K) => {
            Q["before:highlightBlock"](Object.assign({ block: K.el }, K));
          }),
          Q["after:highlightBlock"] &&
            !Q["after:highlightElement"] &&
            (Q["after:highlightElement"] = (K) => {
              Q["after:highlightBlock"](Object.assign({ block: K.el }, K));
            }));
      }
      function F(Q) {
        (N(Q), n.push(Q));
      }
      function B(Q) {
        let K = n.indexOf(Q);
        K !== -1 && n.splice(K, 1);
      }
      function L(Q, K) {
        let H = Q;
        n.forEach(function (U) {
          U[H] && U[H](K);
        });
      }
      function G(Q) {
        return (
          efe("10.7.0", "highlightBlock will be removed entirely in v12.0"),
          efe("10.7.0", "Please use highlightElement now."),
          b(Q)
        );
      }
      (Object.assign(t, {
        highlight: d,
        highlightAuto: h,
        highlightAll: C,
        highlightElement: b,
        highlightBlock: G,
        configure: A,
        initHighlighting: y,
        initHighlightingOnLoad: E,
        registerLanguage: x,
        unregisterLanguage: k,
        listLanguages: R,
        getLanguage: P,
        registerAliases: D,
        autoDetection: O,
        inherit: dWi,
        addPlugin: F,
        removePlugin: B,
      }),
        (t.debugMode = function () {
          o = !1;
        }),
        (t.safeMode = function () {
          o = !0;
        }),
        (t.versionString = nmu),
        (t.regex = { concat: CJ, lookahead: gWi, either: Fyr, optional: y0u, anyNumberOfTimes: A0u }));
      for (let Q in Igt) typeof Igt[Q] == "object" && pWi(Igt[Q]);
      return (Object.assign(t, Igt), t);
    },
    tfe = wWi({});
  tfe.newInstance = () => wWi({});
  xWi.exports = tfe;
  tfe.HighlightJS = tfe;
  tfe.default = tfe;
});