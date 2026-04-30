/**
 * @module tLn
 * @category utils/fs
 * @label fs
 * @position 1323 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (tLn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var tLn = T((r8c, XZt) => {
  var N6 = (XZt.exports = (t, e, r = {}) => (
    Btt(e),
    !r.nocomment && e.charAt(0) === "#" ? !1 : new Uue(e, r).match(t)
  ));
  XZt.exports = N6;
  var KZt = MBn();
  N6.sep = KZt.sep;
  var oS = Symbol("globstar **");
  N6.GLOBSTAR = oS;
  var pjs = YBn(),
    KBn = {
      "!": { open: "(?:(?!(?:", close: "))[^/]*?)" },
      "?": { open: "(?:", close: ")?" },
      "+": { open: "(?:", close: ")+" },
      "*": { open: "(?:", close: ")*" },
      "@": { open: "(?:", close: ")" },
    },
    JZt = "[^/]",
    zZt = JZt + "*?",
    hjs = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?",
    gjs = "(?:(?!(?:\\/|^)\\.).)*?",
    ZBn = (t) => t.split("").reduce((e, r) => ((e[r] = !0), e), {}),
    JBn = ZBn("().*{}+?[]^$\\!"),
    bjs = ZBn("[.("),
    XBn = /\/+/;
  N6.filter =
    (t, e = {}) =>
    (r, n, o) =>
      N6(r, t, e);
  var PF = (t, e = {}) => {
    let r = {};
    return (Object.keys(t).forEach((n) => (r[n] = t[n])), Object.keys(e).forEach((n) => (r[n] = e[n])), r);
  };
  N6.defaults = (t) => {
    if (!t || typeof t != "object" || !Object.keys(t).length) return N6;
    let e = N6,
      r = (n, o, s) => e(n, o, PF(t, s));
    return (
      (r.Minimatch = class extends e.Minimatch {
        constructor(o, s) {
          super(o, PF(t, s));
        }
      }),
      (r.Minimatch.defaults = (n) => e.defaults(PF(t, n)).Minimatch),
      (r.filter = (n, o) => e.filter(n, PF(t, o))),
      (r.defaults = (n) => e.defaults(PF(t, n))),
      (r.makeRe = (n, o) => e.makeRe(n, PF(t, o))),
      (r.braceExpand = (n, o) => e.braceExpand(n, PF(t, o))),
      (r.match = (n, o, s) => e.match(n, o, PF(t, s))),
      r
    );
  };
  N6.braceExpand = (t, e) => eLn(t, e);
  var eLn = (t, e = {}) => (Btt(t), e.nobrace || !/\{(?:(?!\{).)*\}/.test(t) ? [t] : pjs(t)),
    Ajs = 1024 * 64,
    Btt = (t) => {
      if (typeof t != "string") throw new TypeError("invalid pattern");
      if (t.length > Ajs) throw new TypeError("pattern is too long");
    },
    YZt = Symbol("subparse");
  N6.makeRe = (t, e) => new Uue(t, e || {}).makeRe();
  N6.match = (t, e, r = {}) => {
    let n = new Uue(e, r);
    return ((t = t.filter((o) => n.match(o))), n.options.nonull && !t.length && t.push(e), t);
  };
  var yjs = (t) => t.replace(/\\(.)/g, "$1"),
    _js = (t) => t.replace(/\\([^-\]])/g, "$1"),
    Ejs = (t) => t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"),
    vjs = (t) => t.replace(/[[\]\\]/g, "\\$&"),
    Uue = class {
      constructor(e, r) {
        (Btt(e),
          r || (r = {}),
          (this.options = r),
          (this.set = []),
          (this.pattern = e),
          (this.windowsPathsNoEscape = !!r.windowsPathsNoEscape || r.allowWindowsEscape === !1),
          this.windowsPathsNoEscape && (this.pattern = this.pattern.replace(/\\/g, "/")),
          (this.regexp = null),
          (this.negate = !1),
          (this.comment = !1),
          (this.empty = !1),
          (this.partial = !!r.partial),
          this.make());
      }
      debug() {}
      make() {
        let e = this.pattern,
          r = this.options;
        if (!r.nocomment && e.charAt(0) === "#") {
          this.comment = !0;
          return;
        }
        if (!e) {
          this.empty = !0;
          return;
        }
        this.parseNegate();
        let n = (this.globSet = this.braceExpand());
        (r.debug && (this.debug = (...o) => console.error(...o)),
          this.debug(this.pattern, n),
          (n = this.globParts = n.map((o) => o.split(XBn))),
          this.debug(this.pattern, n),
          (n = n.map((o, s, a) => o.map(this.parse, this))),
          this.debug(this.pattern, n),
          (n = n.filter((o) => o.indexOf(!1) === -1)),
          this.debug(this.pattern, n),
          (this.set = n));
      }
      parseNegate() {
        if (this.options.nonegate) return;
        let e = this.pattern,
          r = !1,
          n = 0;
        for (let o = 0; o < e.length && e.charAt(o) === "!"; o++) ((r = !r), n++);
        (n && (this.pattern = e.slice(n)), (this.negate = r));
      }
      matchOne(e, r, n) {
        var o = this.options;
        (this.debug("matchOne", { this: this, file: e, pattern: r }), this.debug("matchOne", e.length, r.length));
        for (var s = 0, a = 0, u = e.length, c = r.length; s < u && a < c; s++, a++) {
          this.debug("matchOne loop");
          var m = r[a],
            d = e[s];
          if ((this.debug(r, m, d), m === !1)) return !1;
          if (m === oS) {
            this.debug("GLOBSTAR", [r, m, d]);
            var f = s,
              p = a + 1;
            if (p === c) {
              for (this.debug("** at the end"); s < u; s++)
                if (e[s] === "." || e[s] === ".." || (!o.dot && e[s].charAt(0) === ".")) return !1;
              return !0;
            }
            for (; f < u; ) {
              var h = e[f];
              if (
                (this.debug(
                  `
globstar while`,
                  e,
                  f,
                  r,
                  p,
                  h,
                ),
                this.matchOne(e.slice(f), r.slice(p), n))
              )
                return (this.debug("globstar found match!", f, u, h), !0);
              if (h === "." || h === ".." || (!o.dot && h.charAt(0) === ".")) {
                this.debug("dot detected!", e, f, r, p);
                break;
              }
              (this.debug("globstar swallow a segment, and continue"), f++);
            }
            return !!(
              n &&
              (this.debug(
                `
>>> no match, partial?`,
                e,
                f,
                r,
                p,
              ),
              f === u)
            );
          }
          var g;
          if (
            (typeof m == "string"
              ? ((g = d === m), this.debug("string match", m, d, g))
              : ((g = d.match(m)), this.debug("pattern match", m, d, g)),
            !g)
          )
            return !1;
        }
        if (s === u && a === c) return !0;
        if (s === u) return n;
        if (a === c) return s === u - 1 && e[s] === "";
        throw new Error("wtf?");
      }
      braceExpand() {
        return eLn(this.pattern, this.options);
      }
      parse(e, r) {
        Btt(e);
        let n = this.options;
        if (e === "**")
          if (n.noglobstar) e = "*";
          else return oS;
        if (e === "") return "";
        let o = "",
          s = !1,
          a = !1,
          u = [],
          c = [],
          m,
          d = !1,
          f = -1,
          p = -1,
          h,
          g,
          b,
          A = e.charAt(0) === ".",
          y = n.dot || A,
          E = () => (A ? "" : y ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))" : "(?!\\.)"),
          v = (R) => (R.charAt(0) === "." ? "" : n.dot ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))" : "(?!\\.)"),
          C = () => {
            if (m) {
              switch (m) {
                case "*":
                  ((o += zZt), (s = !0));
                  break;
                case "?":
                  ((o += JZt), (s = !0));
                  break;
                default:
                  o += "\\" + m;
                  break;
              }
              (this.debug("clearStateChar %j %j", m, o), (m = !1));
            }
          };
        for (let R = 0, P; R < e.length && (P = e.charAt(R)); R++) {
          if ((this.debug("%s	%s %s %j", e, R, o, P), a)) {
            if (P === "/") return !1;
            (JBn[P] && (o += "\\"), (o += P), (a = !1));
            continue;
          }
          switch (P) {
            case "/":
              return !1;
            case "\\":
              if (d && e.charAt(R + 1) === "-") {
                o += P;
                continue;
              }
              (C(), (a = !0));
              continue;
            case "?":
            case "*":
            case "+":
            case "@":
            case "!":
              if ((this.debug("%s	%s %s %j <-- stateChar", e, R, o, P), d)) {
                (this.debug("  in class"), P === "!" && R === p + 1 && (P = "^"), (o += P));
                continue;
              }
              (this.debug("call clearStateChar %j", m), C(), (m = P), n.noext && C());
              continue;
            case "(": {
              if (d) {
                o += "(";
                continue;
              }
              if (!m) {
                o += "\\(";
                continue;
              }
              let D = { type: m, start: R - 1, reStart: o.length, open: KBn[m].open, close: KBn[m].close };
              (this.debug(this.pattern, "	", D),
                u.push(D),
                (o += D.open),
                D.start === 0 && D.type !== "!" && ((A = !0), (o += v(e.slice(R + 1)))),
                this.debug("plType %j %j", m, o),
                (m = !1));
              continue;
            }
            case ")": {
              let D = u[u.length - 1];
              if (d || !D) {
                o += "\\)";
                continue;
              }
              (u.pop(),
                C(),
                (s = !0),
                (g = D),
                (o += g.close),
                g.type === "!" && c.push(Object.assign(g, { reEnd: o.length })));
              continue;
            }
            case "|": {
              let D = u[u.length - 1];
              if (d || !D) {
                o += "\\|";
                continue;
              }
              (C(), (o += "|"), D.start === 0 && D.type !== "!" && ((A = !0), (o += v(e.slice(R + 1)))));
              continue;
            }
            case "[":
              if ((C(), d)) {
                o += "\\" + P;
                continue;
              }
              ((d = !0), (p = R), (f = o.length), (o += P));
              continue;
            case "]":
              if (R === p + 1 || !d) {
                o += "\\" + P;
                continue;
              }
              h = e.substring(p + 1, R);
              try {
                (RegExp("[" + vjs(_js(h)) + "]"), (o += P));
              } catch {
                o = o.substring(0, f) + "(?:$.)";
              }
              ((s = !0), (d = !1));
              continue;
            default:
              (C(), JBn[P] && !(P === "^" && d) && (o += "\\"), (o += P));
              break;
          }
        }
        for (
          d &&
            ((h = e.slice(p + 1)), (b = this.parse(h, YZt)), (o = o.substring(0, f) + "\\[" + b[0]), (s = s || b[1])),
            g = u.pop();
          g;
          g = u.pop()
        ) {
          let R;
          ((R = o.slice(g.reStart + g.open.length)),
            this.debug("setting tail", o, g),
            (R = R.replace(/((?:\\{2}){0,64})(\\?)\|/g, (D, O, N) => (N || (N = "\\"), O + O + N + "|"))),
            this.debug(
              `tail=%j
   %s`,
              R,
              R,
              g,
              o,
            ));
          let P = g.type === "*" ? zZt : g.type === "?" ? JZt : "\\" + g.type;
          ((s = !0), (o = o.slice(0, g.reStart) + P + "\\(" + R));
        }
        (C(), a && (o += "\\\\"));
        let x = bjs[o.charAt(0)];
        for (let R = c.length - 1; R > -1; R--) {
          let P = c[R],
            D = o.slice(0, P.reStart),
            O = o.slice(P.reStart, P.reEnd - 8),
            N = o.slice(P.reEnd),
            F = o.slice(P.reEnd - 8, P.reEnd) + N,
            B = D.split(")").length,
            L = D.split("(").length - B,
            G = N;
          for (let K = 0; K < L; K++) G = G.replace(/\)[+*?]?/, "");
          N = G;
          let Q = N === "" && r !== YZt ? "(?:$|\\/)" : "";
          o = D + O + N + Q + F;
        }
        if ((o !== "" && s && (o = "(?=.)" + o), x && (o = E() + o), r === YZt)) return [o, s];
        if ((n.nocase && !s && (s = e.toUpperCase() !== e.toLowerCase()), !s)) return yjs(e);
        let k = n.nocase ? "i" : "";
        try {
          return Object.assign(new RegExp("^" + o + "$", k), { _glob: e, _src: o });
        } catch {
          return new RegExp("$.");
        }
      }
      makeRe() {
        if (this.regexp || this.regexp === !1) return this.regexp;
        let e = this.set;
        if (!e.length) return ((this.regexp = !1), this.regexp);
        let r = this.options,
          n = r.noglobstar ? zZt : r.dot ? hjs : gjs,
          o = r.nocase ? "i" : "",
          s = e
            .map(
              (a) => (
                (a = a
                  .map((u) => (typeof u == "string" ? Ejs(u) : u === oS ? oS : u._src))
                  .reduce((u, c) => ((u[u.length - 1] === oS && c === oS) || u.push(c), u), [])),
                a.forEach((u, c) => {
                  u !== oS ||
                    a[c - 1] === oS ||
                    (c === 0
                      ? a.length > 1
                        ? (a[c + 1] = "(?:\\/|" + n + "\\/)?" + a[c + 1])
                        : (a[c] = n)
                      : c === a.length - 1
                        ? (a[c - 1] += "(?:\\/|" + n + ")?")
                        : ((a[c - 1] += "(?:\\/|\\/" + n + "\\/)" + a[c + 1]), (a[c + 1] = oS)));
                }),
                a.filter((u) => u !== oS).join("/")
              ),
            )
            .join("|");
        ((s = "^(?:" + s + ")$"), this.negate && (s = "^(?!" + s + ").*$"));
        try {
          this.regexp = new RegExp(s, o);
        } catch {
          this.regexp = !1;
        }
        return this.regexp;
      }
      match(e, r = this.partial) {
        if ((this.debug("match", e, this.pattern), this.comment)) return !1;
        if (this.empty) return e === "";
        if (e === "/" && r) return !0;
        let n = this.options;
        (KZt.sep !== "/" && (e = e.split(KZt.sep).join("/")), (e = e.split(XBn)), this.debug(this.pattern, "split", e));
        let o = this.set;
        this.debug(this.pattern, "set", o);
        let s;
        for (let a = e.length - 1; a >= 0 && ((s = e[a]), !s); a--);
        for (let a = 0; a < o.length; a++) {
          let u = o[a],
            c = e;
          if ((n.matchBase && u.length === 1 && (c = [s]), this.matchOne(c, u, r)))
            return n.flipNegate ? !0 : !this.negate;
        }
        return n.flipNegate ? !1 : this.negate;
      }
      static defaults(e) {
        return N6.defaults(e).Minimatch;
      }
    };
  N6.Minimatch = Uue;
});