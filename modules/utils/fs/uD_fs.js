/**
 * @module uD
 * @category utils/fs
 * @label fs
 * @position 1363 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (uD) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var uD = T((G8c, iUn) => {
  iUn.exports = P6;
  P6.Minimatch = Pg;
  var J_e = (function () {
    try {
      return Ae("path");
    } catch {}
  })() || { sep: "/" };
  P6.sep = J_e.sep;
  var btr = (P6.GLOBSTAR = Pg.GLOBSTAR = {}),
    _Ws = ZFn(),
    eUn = {
      "!": { open: "(?:(?!(?:", close: "))[^/]*?)" },
      "?": { open: "(?:", close: ")?" },
      "+": { open: "(?:", close: ")+" },
      "*": { open: "(?:", close: ")*" },
      "@": { open: "(?:", close: ")" },
    },
    htr = "[^/]",
    gtr = htr + "*?",
    EWs = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?",
    vWs = "(?:(?!(?:\\/|^)\\.).)*?",
    tUn = CWs("().*{}+?[]^$\\!");
  function CWs(t) {
    return t.split("").reduce(function (e, r) {
      return ((e[r] = !0), e);
    }, {});
  }
  var rUn = /\/+/;
  P6.filter = SWs;
  function SWs(t, e) {
    return (
      (e = e || {}),
      function (r, n, o) {
        return P6(r, t, e);
      }
    );
  }
  function UF(t, e) {
    e = e || {};
    var r = {};
    return (
      Object.keys(t).forEach(function (n) {
        r[n] = t[n];
      }),
      Object.keys(e).forEach(function (n) {
        r[n] = e[n];
      }),
      r
    );
  }
  P6.defaults = function (t) {
    if (!t || typeof t != "object" || !Object.keys(t).length) return P6;
    var e = P6,
      r = function (o, s, a) {
        return e(o, s, UF(t, a));
      };
    return (
      (r.Minimatch = function (o, s) {
        return new e.Minimatch(o, UF(t, s));
      }),
      (r.Minimatch.defaults = function (o) {
        return e.defaults(UF(t, o)).Minimatch;
      }),
      (r.filter = function (o, s) {
        return e.filter(o, UF(t, s));
      }),
      (r.defaults = function (o) {
        return e.defaults(UF(t, o));
      }),
      (r.makeRe = function (o, s) {
        return e.makeRe(o, UF(t, s));
      }),
      (r.braceExpand = function (o, s) {
        return e.braceExpand(o, UF(t, s));
      }),
      (r.match = function (n, o, s) {
        return e.match(n, o, UF(t, s));
      }),
      r
    );
  };
  Pg.defaults = function (t) {
    return P6.defaults(t).Minimatch;
  };
  function P6(t, e, r) {
    return (vrt(e), r || (r = {}), !r.nocomment && e.charAt(0) === "#" ? !1 : new Pg(e, r).match(t));
  }
  function Pg(t, e) {
    if (!(this instanceof Pg)) return new Pg(t, e);
    (vrt(t),
      e || (e = {}),
      (t = t.trim()),
      !e.allowWindowsEscape && J_e.sep !== "/" && (t = t.split(J_e.sep).join("/")),
      (this.options = e),
      (this.set = []),
      (this.pattern = t),
      (this.regexp = null),
      (this.negate = !1),
      (this.comment = !1),
      (this.empty = !1),
      (this.partial = !!e.partial),
      this.make());
  }
  Pg.prototype.debug = function () {};
  Pg.prototype.make = wWs;
  function wWs() {
    var t = this.pattern,
      e = this.options;
    if (!e.nocomment && t.charAt(0) === "#") {
      this.comment = !0;
      return;
    }
    if (!t) {
      this.empty = !0;
      return;
    }
    this.parseNegate();
    var r = (this.globSet = this.braceExpand());
    (e.debug &&
      (this.debug = function () {
        console.error.apply(console, arguments);
      }),
      this.debug(this.pattern, r),
      (r = this.globParts =
        r.map(function (n) {
          return n.split(rUn);
        })),
      this.debug(this.pattern, r),
      (r = r.map(function (n, o, s) {
        return n.map(this.parse, this);
      }, this)),
      this.debug(this.pattern, r),
      (r = r.filter(function (n) {
        return n.indexOf(!1) === -1;
      })),
      this.debug(this.pattern, r),
      (this.set = r));
  }
  Pg.prototype.parseNegate = xWs;
  function xWs() {
    var t = this.pattern,
      e = !1,
      r = this.options,
      n = 0;
    if (!r.nonegate) {
      for (var o = 0, s = t.length; o < s && t.charAt(o) === "!"; o++) ((e = !e), n++);
      (n && (this.pattern = t.substr(n)), (this.negate = e));
    }
  }
  P6.braceExpand = function (t, e) {
    return nUn(t, e);
  };
  Pg.prototype.braceExpand = nUn;
  function nUn(t, e) {
    return (
      e || (this instanceof Pg ? (e = this.options) : (e = {})),
      (t = typeof t > "u" ? this.pattern : t),
      vrt(t),
      e.nobrace || !/\{(?:(?!\{).)*\}/.test(t) ? [t] : _Ws(t)
    );
  }
  var TWs = 1024 * 64,
    vrt = function (t) {
      if (typeof t != "string") throw new TypeError("invalid pattern");
      if (t.length > TWs) throw new TypeError("pattern is too long");
    };
  Pg.prototype.parse = DWs;
  var Ert = {};
  function DWs(t, e) {
    vrt(t);
    var r = this.options;
    if (t === "**")
      if (r.noglobstar) t = "*";
      else return btr;
    if (t === "") return "";
    var n = "",
      o = !!r.nocase,
      s = !1,
      a = [],
      u = [],
      c,
      m = !1,
      d = -1,
      f = -1,
      p = t.charAt(0) === "." ? "" : r.dot ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))" : "(?!\\.)",
      h = this;
    function g() {
      if (c) {
        switch (c) {
          case "*":
            ((n += gtr), (o = !0));
            break;
          case "?":
            ((n += htr), (o = !0));
            break;
          default:
            n += "\\" + c;
            break;
        }
        (h.debug("clearStateChar %j %j", c, n), (c = !1));
      }
    }
    for (var b = 0, A = t.length, y; b < A && (y = t.charAt(b)); b++) {
      if ((this.debug("%s	%s %s %j", t, b, n, y), s && tUn[y])) {
        ((n += "\\" + y), (s = !1));
        continue;
      }
      switch (y) {
        case "/":
          return !1;
        case "\\":
          (g(), (s = !0));
          continue;
        case "?":
        case "*":
        case "+":
        case "@":
        case "!":
          if ((this.debug("%s	%s %s %j <-- stateChar", t, b, n, y), m)) {
            (this.debug("  in class"), y === "!" && b === f + 1 && (y = "^"), (n += y));
            continue;
          }
          (h.debug("call clearStateChar %j", c), g(), (c = y), r.noext && g());
          continue;
        case "(":
          if (m) {
            n += "(";
            continue;
          }
          if (!c) {
            n += "\\(";
            continue;
          }
          (a.push({ type: c, start: b - 1, reStart: n.length, open: eUn[c].open, close: eUn[c].close }),
            (n += c === "!" ? "(?:(?!(?:" : "(?:"),
            this.debug("plType %j %j", c, n),
            (c = !1));
          continue;
        case ")":
          if (m || !a.length) {
            n += "\\)";
            continue;
          }
          (g(), (o = !0));
          var E = a.pop();
          ((n += E.close), E.type === "!" && u.push(E), (E.reEnd = n.length));
          continue;
        case "|":
          if (m || !a.length || s) {
            ((n += "\\|"), (s = !1));
            continue;
          }
          (g(), (n += "|"));
          continue;
        case "[":
          if ((g(), m)) {
            n += "\\" + y;
            continue;
          }
          ((m = !0), (f = b), (d = n.length), (n += y));
          continue;
        case "]":
          if (b === f + 1 || !m) {
            ((n += "\\" + y), (s = !1));
            continue;
          }
          var v = t.substring(f + 1, b);
          try {
            RegExp("[" + v + "]");
          } catch {
            var C = this.parse(v, Ert);
            ((n = n.substr(0, d) + "\\[" + C[0] + "\\]"), (o = o || C[1]), (m = !1));
            continue;
          }
          ((o = !0), (m = !1), (n += y));
          continue;
        default:
          (g(), s ? (s = !1) : tUn[y] && !(y === "^" && m) && (n += "\\"), (n += y));
      }
    }
    for (
      m && ((v = t.substr(f + 1)), (C = this.parse(v, Ert)), (n = n.substr(0, d) + "\\[" + C[0]), (o = o || C[1])),
        E = a.pop();
      E;
      E = a.pop()
    ) {
      var x = n.slice(E.reStart + E.open.length);
      (this.debug("setting tail", n, E),
        (x = x.replace(/((?:\\{2}){0,64})(\\?)\|/g, function (Y, X, J) {
          return (J || (J = "\\"), X + X + J + "|");
        })),
        this.debug(
          `tail=%j
   %s`,
          x,
          x,
          E,
          n,
        ));
      var k = E.type === "*" ? gtr : E.type === "?" ? htr : "\\" + E.type;
      ((o = !0), (n = n.slice(0, E.reStart) + k + "\\(" + x));
    }
    (g(), s && (n += "\\\\"));
    var R = !1;
    switch (n.charAt(0)) {
      case "[":
      case ".":
      case "(":
        R = !0;
    }
    for (var P = u.length - 1; P > -1; P--) {
      var D = u[P],
        O = n.slice(0, D.reStart),
        N = n.slice(D.reStart, D.reEnd - 8),
        F = n.slice(D.reEnd - 8, D.reEnd),
        B = n.slice(D.reEnd);
      F += B;
      var L = O.split("(").length - 1,
        G = B;
      for (b = 0; b < L; b++) G = G.replace(/\)[+*?]?/, "");
      B = G;
      var Q = "";
      B === "" && e !== Ert && (Q = "$");
      var K = O + N + B + Q + F;
      n = K;
    }
    if ((n !== "" && o && (n = "(?=.)" + n), R && (n = p + n), e === Ert)) return [n, o];
    if (!o) return RWs(t);
    var H = r.nocase ? "i" : "";
    try {
      var U = new RegExp("^" + n + "$", H);
    } catch {
      return new RegExp("$.");
    }
    return ((U._glob = t), (U._src = n), U);
  }
  P6.makeRe = function (t, e) {
    return new Pg(t, e || {}).makeRe();
  };
  Pg.prototype.makeRe = IWs;
  function IWs() {
    if (this.regexp || this.regexp === !1) return this.regexp;
    var t = this.set;
    if (!t.length) return ((this.regexp = !1), this.regexp);
    var e = this.options,
      r = e.noglobstar ? gtr : e.dot ? EWs : vWs,
      n = e.nocase ? "i" : "",
      o = t
        .map(function (s) {
          return s
            .map(function (a) {
              return a === btr ? r : typeof a == "string" ? kWs(a) : a._src;
            })
            .join("\\/");
        })
        .join("|");
    ((o = "^(?:" + o + ")$"), this.negate && (o = "^(?!" + o + ").*$"));
    try {
      this.regexp = new RegExp(o, n);
    } catch {
      this.regexp = !1;
    }
    return this.regexp;
  }
  P6.match = function (t, e, r) {
    r = r || {};
    var n = new Pg(e, r);
    return (
      (t = t.filter(function (o) {
        return n.match(o);
      })),
      n.options.nonull && !t.length && t.push(e),
      t
    );
  };
  Pg.prototype.match = function (e, r) {
    if ((typeof r > "u" && (r = this.partial), this.debug("match", e, this.pattern), this.comment)) return !1;
    if (this.empty) return e === "";
    if (e === "/" && r) return !0;
    var n = this.options;
    (J_e.sep !== "/" && (e = e.split(J_e.sep).join("/")), (e = e.split(rUn)), this.debug(this.pattern, "split", e));
    var o = this.set;
    this.debug(this.pattern, "set", o);
    var s, a;
    for (a = e.length - 1; a >= 0 && ((s = e[a]), !s); a--);
    for (a = 0; a < o.length; a++) {
      var u = o[a],
        c = e;
      n.matchBase && u.length === 1 && (c = [s]);
      var m = this.matchOne(c, u, r);
      if (m) return n.flipNegate ? !0 : !this.negate;
    }
    return n.flipNegate ? !1 : this.negate;
  };
  Pg.prototype.matchOne = function (t, e, r) {
    var n = this.options;
    (this.debug("matchOne", { this: this, file: t, pattern: e }), this.debug("matchOne", t.length, e.length));
    for (var o = 0, s = 0, a = t.length, u = e.length; o < a && s < u; o++, s++) {
      this.debug("matchOne loop");
      var c = e[s],
        m = t[o];
      if ((this.debug(e, c, m), c === !1)) return !1;
      if (c === btr) {
        this.debug("GLOBSTAR", [e, c, m]);
        var d = o,
          f = s + 1;
        if (f === u) {
          for (this.debug("** at the end"); o < a; o++)
            if (t[o] === "." || t[o] === ".." || (!n.dot && t[o].charAt(0) === ".")) return !1;
          return !0;
        }
        for (; d < a; ) {
          var p = t[d];
          if (
            (this.debug(
              `
globstar while`,
              t,
              d,
              e,
              f,
              p,
            ),
            this.matchOne(t.slice(d), e.slice(f), r))
          )
            return (this.debug("globstar found match!", d, a, p), !0);
          if (p === "." || p === ".." || (!n.dot && p.charAt(0) === ".")) {
            this.debug("dot detected!", t, d, e, f);
            break;
          }
          (this.debug("globstar swallow a segment, and continue"), d++);
        }
        return !!(
          r &&
          (this.debug(
            `
>>> no match, partial?`,
            t,
            d,
            e,
            f,
          ),
          d === a)
        );
      }
      var h;
      if (
        (typeof c == "string"
          ? ((h = m === c), this.debug("string match", c, m, h))
          : ((h = m.match(c)), this.debug("pattern match", c, m, h)),
        !h)
      )
        return !1;
    }
    if (o === a && s === u) return !0;
    if (o === a) return r;
    if (s === u) return o === a - 1 && t[o] === "";
    throw new Error("wtf?");
  };
  function RWs(t) {
    return t.replace(/\\(.)/g, "$1");
  }
  function kWs(t) {
    return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  }
});