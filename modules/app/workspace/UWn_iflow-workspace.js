/**
 * @module UWn
 * @category app/workspace
 * @label iflow-workspace
 * @position 1475 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (UWn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var UWn = T((u_c, FWn) => {
  var OWn = Ptt();
  FWn.exports = una;
  var NWn = "\0SLASH" + Math.random() + "\0",
    PWn = "\0OPEN" + Math.random() + "\0",
    Kir = "\0CLOSE" + Math.random() + "\0",
    BWn = "\0COMMA" + Math.random() + "\0",
    LWn = "\0PERIOD" + Math.random() + "\0";
  function Yir(t) {
    return parseInt(t, 10) == t ? parseInt(t, 10) : t.charCodeAt(0);
  }
  function sna(t) {
    return t
      .split("\\\\")
      .join(NWn)
      .split("\\{")
      .join(PWn)
      .split("\\}")
      .join(Kir)
      .split("\\,")
      .join(BWn)
      .split("\\.")
      .join(LWn);
  }
  function ana(t) {
    return t.split(NWn).join("\\").split(PWn).join("{").split(Kir).join("}").split(BWn).join(",").split(LWn).join(".");
  }
  function MWn(t) {
    if (!t) return [""];
    var e = [],
      r = OWn("{", "}", t);
    if (!r) return t.split(",");
    var n = r.pre,
      o = r.body,
      s = r.post,
      a = n.split(",");
    a[a.length - 1] += "{" + o + "}";
    var u = MWn(s);
    return (s.length && ((a[a.length - 1] += u.shift()), a.push.apply(a, u)), e.push.apply(e, a), e);
  }
  function una(t) {
    return t ? (t.substr(0, 2) === "{}" && (t = "\\{\\}" + t.substr(2)), sve(sna(t), !0).map(ana)) : [];
  }
  function cna(t) {
    return "{" + t + "}";
  }
  function lna(t) {
    return /^-?0\d/.test(t);
  }
  function mna(t, e) {
    return t <= e;
  }
  function dna(t, e) {
    return t >= e;
  }
  function sve(t, e) {
    var r = [],
      n = OWn("{", "}", t);
    if (!n) return [t];
    var o = n.pre,
      s = n.post.length ? sve(n.post, !1) : [""];
    if (/\$$/.test(n.pre))
      for (var a = 0; a < s.length; a++) {
        var u = o + "{" + n.body + "}" + s[a];
        r.push(u);
      }
    else {
      var c = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(n.body),
        m = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(n.body),
        d = c || m,
        f = n.body.indexOf(",") >= 0;
      if (!d && !f) return n.post.match(/,(?!,).*\}/) ? ((t = n.pre + "{" + n.body + Kir + n.post), sve(t)) : [t];
      var p;
      if (d) p = n.body.split(/\.\./);
      else if (((p = MWn(n.body)), p.length === 1 && ((p = sve(p[0], !1).map(cna)), p.length === 1)))
        return s.map(function (O) {
          return n.pre + p[0] + O;
        });
      var h;
      if (d) {
        var g = Yir(p[0]),
          b = Yir(p[1]),
          A = Math.max(p[0].length, p[1].length),
          y = p.length == 3 ? Math.abs(Yir(p[2])) : 1,
          E = mna,
          v = b < g;
        v && ((y *= -1), (E = dna));
        var C = p.some(lna);
        h = [];
        for (var x = g; E(x, b); x += y) {
          var k;
          if (m) ((k = String.fromCharCode(x)), k === "\\" && (k = ""));
          else if (((k = String(x)), C)) {
            var R = A - k.length;
            if (R > 0) {
              var P = new Array(R + 1).join("0");
              x < 0 ? (k = "-" + P + k.slice(1)) : (k = P + k);
            }
          }
          h.push(k);
        }
      } else {
        h = [];
        for (var D = 0; D < p.length; D++) h.push.apply(h, sve(p[D], !1));
      }
      for (var D = 0; D < h.length; D++)
        for (var a = 0; a < s.length; a++) {
          var u = o + h[D] + s[a];
          (!e || d || u) && r.push(u);
        }
    }
    return r;
  }
});
var ave,
  $Wn = j(() => {
    ave = (t) => {
      if (typeof t != "string") throw new TypeError("invalid pattern");
      if (t.length > 65536) throw new TypeError("pattern is too long");
    };
  });
var fna,
  uve,
  pna,
  jWn,
  QWn,
  GWn = j(() => {
    ((fna = {
      "[:alnum:]": ["\\p{L}\\p{Nl}\\p{Nd}", !0],
      "[:alpha:]": ["\\p{L}\\p{Nl}", !0],
      "[:ascii:]": ["\\x00-\\x7f", !1],
      "[:blank:]": ["\\p{Zs}\\t", !0],
      "[:cntrl:]": ["\\p{Cc}", !0],
      "[:digit:]": ["\\p{Nd}", !0],
      "[:graph:]": ["\\p{Z}\\p{C}", !0, !0],
      "[:lower:]": ["\\p{Ll}", !0],
      "[:print:]": ["\\p{C}", !0],
      "[:punct:]": ["\\p{P}", !0],
      "[:space:]": ["\\p{Z}\\t\\r\\n\\v\\f", !0],
      "[:upper:]": ["\\p{Lu}", !0],
      "[:word:]": ["\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}", !0],
      "[:xdigit:]": ["A-Fa-f0-9", !1],
    }),
      (uve = (t) => t.replace(/[[\]\\-]/g, "\\$&")),
      (pna = (t) => t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")),
      (jWn = (t) => t.join("")),
      (QWn = (t, e) => {
        let r = e;
        if (t.charAt(r) !== "[") throw new Error("not in a brace expression");
        let n = [],
          o = [],
          s = r + 1,
          a = !1,
          u = !1,
          c = !1,
          m = !1,
          d = r,
          f = "";
        e: for (; s < t.length; ) {
          let b = t.charAt(s);
          if ((b === "!" || b === "^") && s === r + 1) {
            ((m = !0), s++);
            continue;
          }
          if (b === "]" && a && !c) {
            d = s + 1;
            break;
          }
          if (((a = !0), b === "\\" && !c)) {
            ((c = !0), s++);
            continue;
          }
          if (b === "[" && !c) {
            for (let [A, [y, E, v]] of Object.entries(fna))
              if (t.startsWith(A, s)) {
                if (f) return ["$.", !1, t.length - r, !0];
                ((s += A.length), v ? o.push(y) : n.push(y), (u = u || E));
                continue e;
              }
          }
          if (((c = !1), f)) {
            (b > f ? n.push(uve(f) + "-" + uve(b)) : b === f && n.push(uve(b)), (f = ""), s++);
            continue;
          }
          if (t.startsWith("-]", s + 1)) {
            (n.push(uve(b + "-")), (s += 2));
            continue;
          }
          if (t.startsWith("-", s + 1)) {
            ((f = b), (s += 2));
            continue;
          }
          (n.push(uve(b)), s++);
        }
        if (d < s) return ["", !1, 0, !1];
        if (!n.length && !o.length) return ["$.", !1, t.length - r, !0];
        if (o.length === 0 && n.length === 1 && /^\\?.$/.test(n[0]) && !m) {
          let b = n[0].length === 2 ? n[0].slice(-1) : n[0];
          return [pna(b), !1, d - r, !1];
        }
        let p = "[" + (m ? "^" : "") + jWn(n) + "]",
          h = "[" + (m ? "" : "^") + jWn(o) + "]";
        return [n.length && o.length ? "(" + p + "|" + h + ")" : n.length ? p : h, u, d - r, !0];
      }));
  });
var UE,
  Knt = j(() => {
    UE = (t, { windowsPathsNoEscape: e = !1 } = {}) =>
      e
        ? t.replace(/\[([^\/\\])\]/g, "$1")
        : t.replace(/((?!\\).|^)\[([^\/\\])\]/g, "$1$2").replace(/\\([^\/])/g, "$1");
  });
var hna,
  qWn,
  gna,
  Jnt,
  bna,
  Ana,
  yna,
  _na,
  Jir,
  HWn,
  VWn,
  jce,
  Xir = j(() => {
    GWn();
    Knt();
    ((hna = new Set(["!", "?", "+", "*", "@"])),
      (qWn = (t) => hna.has(t)),
      (gna = "(?!(?:^|/)\\.\\.?(?:$|/))"),
      (Jnt = "(?!\\.)"),
      (bna = new Set(["[", "."])),
      (Ana = new Set(["..", "."])),
      (yna = new Set("().*{}+?[]^$\\!")),
      (_na = (t) => t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")),
      (Jir = "[^/]"),
      (HWn = Jir + "*?"),
      (VWn = Jir + "+?"),
      (jce = class t {
        type;
        #e;
        #t;
        #r = !1;
        #n = [];
        #i;
        #o;
        #u;
        #a = !1;
        #s;
        #l;
        #c = !1;
        constructor(e, r, n = {}) {
          ((this.type = e),
            e && (this.#t = !0),
            (this.#i = r),
            (this.#e = this.#i ? this.#i.#e : this),
            (this.#s = this.#e === this ? n : this.#e.#s),
            (this.#u = this.#e === this ? [] : this.#e.#u),
            e === "!" && !this.#e.#a && this.#u.push(this),
            (this.#o = this.#i ? this.#i.#n.length : 0));
        }
        get hasMagic() {
          if (this.#t !== void 0) return this.#t;
          for (let e of this.#n) if (typeof e != "string" && (e.type || e.hasMagic)) return (this.#t = !0);
          return this.#t;
        }
        toString() {
          return this.#l !== void 0
            ? this.#l
            : this.type
              ? (this.#l = this.type + "(" + this.#n.map((e) => String(e)).join("|") + ")")
              : (this.#l = this.#n.map((e) => String(e)).join(""));
        }
        #p() {
          if (this !== this.#e) throw new Error("should only call on root");
          if (this.#a) return this;
          (this.toString(), (this.#a = !0));
          let e;
          for (; (e = this.#u.pop()); ) {
            if (e.type !== "!") continue;
            let r = e,
              n = r.#i;
            for (; n; ) {
              for (let o = r.#o + 1; !n.type && o < n.#n.length; o++)
                for (let s of e.#n) {
                  if (typeof s == "string") throw new Error("string part in extglob AST??");
                  s.copyIn(n.#n[o]);
                }
              ((r = n), (n = r.#i));
            }
          }
          return this;
        }
        push(...e) {
          for (let r of e)
            if (r !== "") {
              if (typeof r != "string" && !(r instanceof t && r.#i === this)) throw new Error("invalid part: " + r);
              this.#n.push(r);
            }
        }
        toJSON() {
          let e =
            this.type === null
              ? this.#n.slice().map((r) => (typeof r == "string" ? r : r.toJSON()))
              : [this.type, ...this.#n.map((r) => r.toJSON())];
          return (
            this.isStart() && !this.type && e.unshift([]),
            this.isEnd() && (this === this.#e || (this.#e.#a && this.#i?.type === "!")) && e.push({}),
            e
          );
        }
        isStart() {
          if (this.#e === this) return !0;
          if (!this.#i?.isStart()) return !1;
          if (this.#o === 0) return !0;
          let e = this.#i;
          for (let r = 0; r < this.#o; r++) {
            let n = e.#n[r];
            if (!(n instanceof t && n.type === "!")) return !1;
          }
          return !0;
        }
        isEnd() {
          if (this.#e === this || this.#i?.type === "!") return !0;
          if (!this.#i?.isEnd()) return !1;
          if (!this.type) return this.#i?.isEnd();
          let e = this.#i ? this.#i.#n.length : 0;
          return this.#o === e - 1;
        }
        copyIn(e) {
          typeof e == "string" ? this.push(e) : this.push(e.clone(this));
        }
        clone(e) {
          let r = new t(this.type, e);
          for (let n of this.#n) r.copyIn(n);
          return r;
        }
        static #f(e, r, n, o) {
          let s = !1,
            a = !1,
            u = -1,
            c = !1;
          if (r.type === null) {
            let h = n,
              g = "";
            for (; h < e.length; ) {
              let b = e.charAt(h++);
              if (s || b === "\\") {
                ((s = !s), (g += b));
                continue;
              }
              if (a) {
                (h === u + 1 ? (b === "^" || b === "!") && (c = !0) : b === "]" && !(h === u + 2 && c) && (a = !1),
                  (g += b));
                continue;
              } else if (b === "[") {
                ((a = !0), (u = h), (c = !1), (g += b));
                continue;
              }
              if (!o.noext && qWn(b) && e.charAt(h) === "(") {
                (r.push(g), (g = ""));
                let A = new t(b, r);
                ((h = t.#f(e, A, h, o)), r.push(A));
                continue;
              }
              g += b;
            }
            return (r.push(g), h);
          }
          let m = n + 1,
            d = new t(null, r),
            f = [],
            p = "";
          for (; m < e.length; ) {
            let h = e.charAt(m++);
            if (s || h === "\\") {
              ((s = !s), (p += h));
              continue;
            }
            if (a) {
              (m === u + 1 ? (h === "^" || h === "!") && (c = !0) : h === "]" && !(m === u + 2 && c) && (a = !1),
                (p += h));
              continue;
            } else if (h === "[") {
              ((a = !0), (u = m), (c = !1), (p += h));
              continue;
            }
            if (qWn(h) && e.charAt(m) === "(") {
              (d.push(p), (p = ""));
              let g = new t(h, d);
              (d.push(g), (m = t.#f(e, g, m, o)));
              continue;
            }
            if (h === "|") {
              (d.push(p), (p = ""), f.push(d), (d = new t(null, r)));
              continue;
            }
            if (h === ")")
              return (p === "" && r.#n.length === 0 && (r.#c = !0), d.push(p), (p = ""), r.push(...f, d), m);
            p += h;
          }
          return ((r.type = null), (r.#t = void 0), (r.#n = [e.substring(n - 1)]), m);
        }
        static fromGlob(e, r = {}) {
          let n = new t(null, void 0, r);
          return (t.#f(e, n, 0, r), n);
        }
        toMMPattern() {
          if (this !== this.#e) return this.#e.toMMPattern();
          let e = this.toString(),
            [r, n, o, s] = this.toRegExpSource();
          if (!(o || this.#t || (this.#s.nocase && !this.#s.nocaseMagicOnly && e.toUpperCase() !== e.toLowerCase())))
            return n;
          let u = (this.#s.nocase ? "i" : "") + (s ? "u" : "");
          return Object.assign(new RegExp(`^${r}$`, u), { _src: r, _glob: e });
        }
        get options() {
          return this.#s;
        }
        toRegExpSource(e) {
          let r = e ?? !!this.#s.dot;
          if ((this.#e === this && this.#p(), !this.type)) {
            let c = this.isStart() && this.isEnd(),
              m = this.#n
                .map((h) => {
                  let [g, b, A, y] = typeof h == "string" ? t.#g(h, this.#t, c) : h.toRegExpSource(e);
                  return ((this.#t = this.#t || A), (this.#r = this.#r || y), g);
                })
                .join(""),
              d = "";
            if (this.isStart() && typeof this.#n[0] == "string" && !(this.#n.length === 1 && Ana.has(this.#n[0]))) {
              let g = bna,
                b =
                  (r && g.has(m.charAt(0))) ||
                  (m.startsWith("\\.") && g.has(m.charAt(2))) ||
                  (m.startsWith("\\.\\.") && g.has(m.charAt(4))),
                A = !r && !e && g.has(m.charAt(0));
              d = b ? gna : A ? Jnt : "";
            }
            let f = "";
            return (
              this.isEnd() && this.#e.#a && this.#i?.type === "!" && (f = "(?:$|\\/)"),
              [d + m + f, UE(m), (this.#t = !!this.#t), this.#r]
            );
          }
          let n = this.type === "*" || this.type === "+",
            o = this.type === "!" ? "(?:(?!(?:" : "(?:",
            s = this.#h(r);
          if (this.isStart() && this.isEnd() && !s && this.type !== "!") {
            let c = this.toString();
            return ((this.#n = [c]), (this.type = null), (this.#t = void 0), [c, UE(this.toString()), !1, !1]);
          }
          let a = !n || e || r || !Jnt ? "" : this.#h(!0);
          (a === s && (a = ""), a && (s = `(?:${s})(?:${a})*?`));
          let u = "";
          if (this.type === "!" && this.#c) u = (this.isStart() && !r ? Jnt : "") + VWn;
          else {
            let c =
              this.type === "!"
                ? "))" + (this.isStart() && !r && !e ? Jnt : "") + HWn + ")"
                : this.type === "@"
                  ? ")"
                  : this.type === "?"
                    ? ")?"
                    : this.type === "+" && a
                      ? ")"
                      : this.type === "*" && a
                        ? ")?"
                        : `)${this.type}`;
            u = o + s + c;
          }
          return [u, UE(s), (this.#t = !!this.#t), this.#r];
        }
        #h(e) {
          return this.#n
            .map((r) => {
              if (typeof r == "string") throw new Error("string type in extglob ast??");
              let [n, o, s, a] = r.toRegExpSource(e);
              return ((this.#r = this.#r || a), n);
            })
            .filter((r) => !(this.isStart() && this.isEnd()) || !!r)
            .join("|");
        }
        static #g(e, r, n = !1) {
          let o = !1,
            s = "",
            a = !1;
          for (let u = 0; u < e.length; u++) {
            let c = e.charAt(u);
            if (o) {
              ((o = !1), (s += (yna.has(c) ? "\\" : "") + c));
              continue;
            }
            if (c === "\\") {
              u === e.length - 1 ? (s += "\\\\") : (o = !0);
              continue;
            }
            if (c === "[") {
              let [m, d, f, p] = QWn(e, u);
              if (f) {
                ((s += m), (a = a || d), (u += f - 1), (r = r || p));
                continue;
              }
            }
            if (c === "*") {
              (n && e === "*" ? (s += VWn) : (s += HWn), (r = !0));
              continue;
            }
            if (c === "?") {
              ((s += Jir), (r = !0));
              continue;
            }
            s += _na(c);
          }
          return [s, UE(e), !!r, a];
        }
      }));
  });
var Sz,
  Zir = j(() => {
    Sz = (t, { windowsPathsNoEscape: e = !1 } = {}) =>
      e ? t.replace(/[?*()[\]]/g, "[$&]") : t.replace(/[?*()[\]\\]/g, "\\$&");
  });
var YWn,
  j2,
  Ena,
  vna,
  Cna,
  Sna,
  wna,
  xna,
  Tna,
  Dna,
  Ina,
  Rna,
  kna,
  Ona,
  Nna,
  Pna,
  Bna,
  Lna,
  Mna,
  Fna,
  KWn,
  JWn,
  XWn,
  WWn,
  Una,
  $g,
  $na,
  jna,
  Qna,
  Gna,
  qna,
  $E,
  Hna,
  ZWn,
  Vna,
  Wna,
  zWn,
  zna,
  Q6,
  nU = j(() => {
    YWn = Se(UWn(), 1);
    $Wn();
    Xir();
    Zir();
    Knt();
    Xir();
    Zir();
    Knt();
    ((j2 = (t, e, r = {}) => (ave(e), !r.nocomment && e.charAt(0) === "#" ? !1 : new Q6(e, r).match(t))),
      (Ena = /^\*+([^+@!?\*\[\(]*)$/),
      (vna = (t) => (e) => !e.startsWith(".") && e.endsWith(t)),
      (Cna = (t) => (e) => e.endsWith(t)),
      (Sna = (t) => ((t = t.toLowerCase()), (e) => !e.startsWith(".") && e.toLowerCase().endsWith(t))),
      (wna = (t) => ((t = t.toLowerCase()), (e) => e.toLowerCase().endsWith(t))),
      (xna = /^\*+\.\*+$/),
      (Tna = (t) => !t.startsWith(".") && t.includes(".")),
      (Dna = (t) => t !== "." && t !== ".." && t.includes(".")),
      (Ina = /^\.\*+$/),
      (Rna = (t) => t !== "." && t !== ".." && t.startsWith(".")),
      (kna = /^\*+$/),
      (Ona = (t) => t.length !== 0 && !t.startsWith(".")),
      (Nna = (t) => t.length !== 0 && t !== "." && t !== ".."),
      (Pna = /^\?+([^+@!?\*\[\(]*)?$/),
      (Bna = ([t, e = ""]) => {
        let r = KWn([t]);
        return e ? ((e = e.toLowerCase()), (n) => r(n) && n.toLowerCase().endsWith(e)) : r;
      }),
      (Lna = ([t, e = ""]) => {
        let r = JWn([t]);
        return e ? ((e = e.toLowerCase()), (n) => r(n) && n.toLowerCase().endsWith(e)) : r;
      }),
      (Mna = ([t, e = ""]) => {
        let r = JWn([t]);
        return e ? (n) => r(n) && n.endsWith(e) : r;
      }),
      (Fna = ([t, e = ""]) => {
        let r = KWn([t]);
        return e ? (n) => r(n) && n.endsWith(e) : r;
      }),
      (KWn = ([t]) => {
        let e = t.length;
        return (r) => r.length === e && !r.startsWith(".");
      }),
      (JWn = ([t]) => {
        let e = t.length;
        return (r) => r.length === e && r !== "." && r !== "..";
      }),
      (XWn =
        typeof process == "object" && process
          ? (typeof process.env == "object" && process.env && process.env.__MINIMATCH_TESTING_PLATFORM__) ||
            process.platform
          : "posix"),
      (WWn = { win32: { sep: "\\" }, posix: { sep: "/" } }),
      (Una = XWn === "win32" ? WWn.win32.sep : WWn.posix.sep));
    j2.sep = Una;
    $g = Symbol("globstar **");
    j2.GLOBSTAR = $g;
    (($na = "[^/]"),
      (jna = $na + "*?"),
      (Qna = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?"),
      (Gna = "(?:(?!(?:\\/|^)\\.).)*?"),
      (qna =
        (t, e = {}) =>
        (r) =>
          j2(r, t, e)));
    j2.filter = qna;
    (($E = (t, e = {}) => Object.assign({}, t, e)),
      (Hna = (t) => {
        if (!t || typeof t != "object" || !Object.keys(t).length) return j2;
        let e = j2;
        return Object.assign((n, o, s = {}) => e(n, o, $E(t, s)), {
          Minimatch: class extends e.Minimatch {
            constructor(o, s = {}) {
              super(o, $E(t, s));
            }
            static defaults(o) {
              return e.defaults($E(t, o)).Minimatch;
            }
          },
          AST: class extends e.AST {
            constructor(o, s, a = {}) {
              super(o, s, $E(t, a));
            }
            static fromGlob(o, s = {}) {
              return e.AST.fromGlob(o, $E(t, s));
            }
          },
          unescape: (n, o = {}) => e.unescape(n, $E(t, o)),
          escape: (n, o = {}) => e.escape(n, $E(t, o)),
          filter: (n, o = {}) => e.filter(n, $E(t, o)),
          defaults: (n) => e.defaults($E(t, n)),
          makeRe: (n, o = {}) => e.makeRe(n, $E(t, o)),
          braceExpand: (n, o = {}) => e.braceExpand(n, $E(t, o)),
          match: (n, o, s = {}) => e.match(n, o, $E(t, s)),
          sep: e.sep,
          GLOBSTAR: $g,
        });
      }));
    j2.defaults = Hna;
    ZWn = (t, e = {}) => (ave(t), e.nobrace || !/\{(?:(?!\{).)*\}/.test(t) ? [t] : (0, YWn.default)(t));
    j2.braceExpand = ZWn;
    Vna = (t, e = {}) => new Q6(t, e).makeRe();
    j2.makeRe = Vna;
    Wna = (t, e, r = {}) => {
      let n = new Q6(e, r);
      return ((t = t.filter((o) => n.match(o))), n.options.nonull && !t.length && t.push(e), t);
    };
    j2.match = Wna;
    ((zWn = /[?*]|[+@!]\(.*?\)|\[|\]/),
      (zna = (t) => t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")),
      (Q6 = class {
        options;
        set;
        pattern;
        windowsPathsNoEscape;
        nonegate;
        negate;
        comment;
        empty;
        preserveMultipleSlashes;
        partial;
        globSet;
        globParts;
        nocase;
        isWindows;
        platform;
        windowsNoMagicRoot;
        regexp;
        constructor(e, r = {}) {
          (ave(e),
            (r = r || {}),
            (this.options = r),
            (this.pattern = e),
            (this.platform = r.platform || XWn),
            (this.isWindows = this.platform === "win32"),
            (this.windowsPathsNoEscape = !!r.windowsPathsNoEscape || r.allowWindowsEscape === !1),
            this.windowsPathsNoEscape && (this.pattern = this.pattern.replace(/\\/g, "/")),
            (this.preserveMultipleSlashes = !!r.preserveMultipleSlashes),
            (this.regexp = null),
            (this.negate = !1),
            (this.nonegate = !!r.nonegate),
            (this.comment = !1),
            (this.empty = !1),
            (this.partial = !!r.partial),
            (this.nocase = !!this.options.nocase),
            (this.windowsNoMagicRoot =
              r.windowsNoMagicRoot !== void 0 ? r.windowsNoMagicRoot : !!(this.isWindows && this.nocase)),
            (this.globSet = []),
            (this.globParts = []),
            (this.set = []),
            this.make());
        }
        hasMagic() {
          if (this.options.magicalBraces && this.set.length > 1) return !0;
          for (let e of this.set) for (let r of e) if (typeof r != "string") return !0;
          return !1;
        }
        debug(...e) {}
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
          (this.parseNegate(),
            (this.globSet = [...new Set(this.braceExpand())]),
            r.debug && (this.debug = (...s) => console.error(...s)),
            this.debug(this.pattern, this.globSet));
          let n = this.globSet.map((s) => this.slashSplit(s));
          ((this.globParts = this.preprocess(n)), this.debug(this.pattern, this.globParts));
          let o = this.globParts.map((s, a, u) => {
            if (this.isWindows && this.windowsNoMagicRoot) {
              let c = s[0] === "" && s[1] === "" && (s[2] === "?" || !zWn.test(s[2])) && !zWn.test(s[3]),
                m = /^[a-z]:/i.test(s[0]);
              if (c) return [...s.slice(0, 4), ...s.slice(4).map((d) => this.parse(d))];
              if (m) return [s[0], ...s.slice(1).map((d) => this.parse(d))];
            }
            return s.map((c) => this.parse(c));
          });
          if ((this.debug(this.pattern, o), (this.set = o.filter((s) => s.indexOf(!1) === -1)), this.isWindows))
            for (let s = 0; s < this.set.length; s++) {
              let a = this.set[s];
              a[0] === "" &&
                a[1] === "" &&
                this.globParts[s][2] === "?" &&
                typeof a[3] == "string" &&
                /^[a-z]:$/i.test(a[3]) &&
                (a[2] = "?");
            }
          this.debug(this.pattern, this.set);
        }
        preprocess(e) {
          if (this.options.noglobstar)
            for (let n = 0; n < e.length; n++)
              for (let o = 0; o < e[n].length; o++) e[n][o] === "**" && (e[n][o] = "*");
          let { optimizationLevel: r = 1 } = this.options;
          return (
            r >= 2
              ? ((e = this.firstPhasePreProcess(e)), (e = this.secondPhasePreProcess(e)))
              : r >= 1
                ? (e = this.levelOneOptimize(e))
                : (e = this.adjascentGlobstarOptimize(e)),
            e
          );
        }
        adjascentGlobstarOptimize(e) {
          return e.map((r) => {
            let n = -1;
            for (; (n = r.indexOf("**", n + 1)) !== -1; ) {
              let o = n;
              for (; r[o + 1] === "**"; ) o++;
              o !== n && r.splice(n, o - n);
            }
            return r;
          });
        }
        levelOneOptimize(e) {
          return e.map(
            (r) => (
              (r = r.reduce((n, o) => {
                let s = n[n.length - 1];
                return o === "**" && s === "**"
                  ? n
                  : o === ".." && s && s !== ".." && s !== "." && s !== "**"
                    ? (n.pop(), n)
                    : (n.push(o), n);
              }, [])),
              r.length === 0 ? [""] : r
            ),
          );
        }
        levelTwoFileOptimize(e) {
          Array.isArray(e) || (e = this.slashSplit(e));
          let r = !1;
          do {
            if (((r = !1), !this.preserveMultipleSlashes)) {
              for (let o = 1; o < e.length - 1; o++) {
                let s = e[o];
                (o === 1 && s === "" && e[0] === "") || ((s === "." || s === "") && ((r = !0), e.splice(o, 1), o--));
              }
              e[0] === "." && e.length === 2 && (e[1] === "." || e[1] === "") && ((r = !0), e.pop());
            }
            let n = 0;
            for (; (n = e.indexOf("..", n + 1)) !== -1; ) {
              let o = e[n - 1];
              o && o !== "." && o !== ".." && o !== "**" && ((r = !0), e.splice(n - 1, 2), (n -= 2));
            }
          } while (r);
          return e.length === 0 ? [""] : e;
        }
        firstPhasePreProcess(e) {
          let r = !1;
          do {
            r = !1;
            for (let n of e) {
              let o = -1;
              for (; (o = n.indexOf("**", o + 1)) !== -1; ) {
                let a = o;
                for (; n[a + 1] === "**"; ) a++;
                a > o && n.splice(o + 1, a - o);
                let u = n[o + 1],
                  c = n[o + 2],
                  m = n[o + 3];
                if (u !== ".." || !c || c === "." || c === ".." || !m || m === "." || m === "..") continue;
                ((r = !0), n.splice(o, 1));
                let d = n.slice(0);
                ((d[o] = "**"), e.push(d), o--);
              }
              if (!this.preserveMultipleSlashes) {
                for (let a = 1; a < n.length - 1; a++) {
                  let u = n[a];
                  (a === 1 && u === "" && n[0] === "") || ((u === "." || u === "") && ((r = !0), n.splice(a, 1), a--));
                }
                n[0] === "." && n.length === 2 && (n[1] === "." || n[1] === "") && ((r = !0), n.pop());
              }
              let s = 0;
              for (; (s = n.indexOf("..", s + 1)) !== -1; ) {
                let a = n[s - 1];
                if (a && a !== "." && a !== ".." && a !== "**") {
                  r = !0;
                  let c = s === 1 && n[s + 1] === "**" ? ["."] : [];
                  (n.splice(s - 1, 2, ...c), n.length === 0 && n.push(""), (s -= 2));
                }
              }
            }
          } while (r);
          return e;
        }
        secondPhasePreProcess(e) {
          for (let r = 0; r < e.length - 1; r++)
            for (let n = r + 1; n < e.length; n++) {
              let o = this.partsMatch(e[r], e[n], !this.preserveMultipleSlashes);
              if (o) {
                ((e[r] = []), (e[n] = o));
                break;
              }
            }
          return e.filter((r) => r.length);
        }
        partsMatch(e, r, n = !1) {
          let o = 0,
            s = 0,
            a = [],
            u = "";
          for (; o < e.length && s < r.length; )
            if (e[o] === r[s]) (a.push(u === "b" ? r[s] : e[o]), o++, s++);
            else if (n && e[o] === "**" && r[s] === e[o + 1]) (a.push(e[o]), o++);
            else if (n && r[s] === "**" && e[o] === r[s + 1]) (a.push(r[s]), s++);
            else if (e[o] === "*" && r[s] && (this.options.dot || !r[s].startsWith(".")) && r[s] !== "**") {
              if (u === "b") return !1;
              ((u = "a"), a.push(e[o]), o++, s++);
            } else if (r[s] === "*" && e[o] && (this.options.dot || !e[o].startsWith(".")) && e[o] !== "**") {
              if (u === "a") return !1;
              ((u = "b"), a.push(r[s]), o++, s++);
            } else return !1;
          return e.length === r.length && a;
        }
        parseNegate() {
          if (this.nonegate) return;
          let e = this.pattern,
            r = !1,
            n = 0;
          for (let o = 0; o < e.length && e.charAt(o) === "!"; o++) ((r = !r), n++);
          (n && (this.pattern = e.slice(n)), (this.negate = r));
        }
        matchOne(e, r, n = !1) {
          let o = this.options;
          if (this.isWindows) {
            let b = typeof e[0] == "string" && /^[a-z]:$/i.test(e[0]),
              A = !b && e[0] === "" && e[1] === "" && e[2] === "?" && /^[a-z]:$/i.test(e[3]),
              y = typeof r[0] == "string" && /^[a-z]:$/i.test(r[0]),
              E = !y && r[0] === "" && r[1] === "" && r[2] === "?" && typeof r[3] == "string" && /^[a-z]:$/i.test(r[3]),
              v = A ? 3 : b ? 0 : void 0,
              C = E ? 3 : y ? 0 : void 0;
            if (typeof v == "number" && typeof C == "number") {
              let [x, k] = [e[v], r[C]];
              x.toLowerCase() === k.toLowerCase() && ((r[C] = x), C > v ? (r = r.slice(C)) : v > C && (e = e.slice(v)));
            }
          }
          let { optimizationLevel: s = 1 } = this.options;
          (s >= 2 && (e = this.levelTwoFileOptimize(e)),
            this.debug("matchOne", this, { file: e, pattern: r }),
            this.debug("matchOne", e.length, r.length));
          for (var a = 0, u = 0, c = e.length, m = r.length; a < c && u < m; a++, u++) {
            this.debug("matchOne loop");
            var d = r[u],
              f = e[a];
            if ((this.debug(r, d, f), d === !1)) return !1;
            if (d === $g) {
              this.debug("GLOBSTAR", [r, d, f]);
              var p = a,
                h = u + 1;
              if (h === m) {
                for (this.debug("** at the end"); a < c; a++)
                  if (e[a] === "." || e[a] === ".." || (!o.dot && e[a].charAt(0) === ".")) return !1;
                return !0;
              }
              for (; p < c; ) {
                var g = e[p];
                if (
                  (this.debug(
                    `
globstar while`,
                    e,
                    p,
                    r,
                    h,
                    g,
                  ),
                  this.matchOne(e.slice(p), r.slice(h), n))
                )
                  return (this.debug("globstar found match!", p, c, g), !0);
                if (g === "." || g === ".." || (!o.dot && g.charAt(0) === ".")) {
                  this.debug("dot detected!", e, p, r, h);
                  break;
                }
                (this.debug("globstar swallow a segment, and continue"), p++);
              }
              return !!(
                n &&
                (this.debug(
                  `
>>> no match, partial?`,
                  e,
                  p,
                  r,
                  h,
                ),
                p === c)
              );
            }
            let b;
            if (
              (typeof d == "string"
                ? ((b = f === d), this.debug("string match", d, f, b))
                : ((b = d.test(f)), this.debug("pattern match", d, f, b)),
              !b)
            )
              return !1;
          }
          if (a === c && u === m) return !0;
          if (a === c) return n;
          if (u === m) return a === c - 1 && e[a] === "";
          throw new Error("wtf?");
        }
        braceExpand() {
          return ZWn(this.pattern, this.options);
        }
        parse(e) {
          ave(e);
          let r = this.options;
          if (e === "**") return $g;
          if (e === "") return "";
          let n,
            o = null;
          (n = e.match(kna))
            ? (o = r.dot ? Nna : Ona)
            : (n = e.match(Ena))
              ? (o = (r.nocase ? (r.dot ? wna : Sna) : r.dot ? Cna : vna)(n[1]))
              : (n = e.match(Pna))
                ? (o = (r.nocase ? (r.dot ? Lna : Bna) : r.dot ? Mna : Fna)(n))
                : (n = e.match(xna))
                  ? (o = r.dot ? Dna : Tna)
                  : (n = e.match(Ina)) && (o = Rna);
          let s = jce.fromGlob(e, this.options).toMMPattern();
          return (o && typeof s == "object" && Reflect.defineProperty(s, "test", { value: o }), s);
        }
        makeRe() {
          if (this.regexp || this.regexp === !1) return this.regexp;
          let e = this.set;
          if (!e.length) return ((this.regexp = !1), this.regexp);
          let r = this.options,
            n = r.noglobstar ? jna : r.dot ? Qna : Gna,
            o = new Set(r.nocase ? ["i"] : []),
            s = e
              .map((c) => {
                let m = c.map((d) => {
                  if (d instanceof RegExp) for (let f of d.flags.split("")) o.add(f);
                  return typeof d == "string" ? zna(d) : d === $g ? $g : d._src;
                });
                return (
                  m.forEach((d, f) => {
                    let p = m[f + 1],
                      h = m[f - 1];
                    d !== $g ||
                      h === $g ||
                      (h === void 0
                        ? p !== void 0 && p !== $g
                          ? (m[f + 1] = "(?:\\/|" + n + "\\/)?" + p)
                          : (m[f] = n)
                        : p === void 0
                          ? (m[f - 1] = h + "(?:\\/|" + n + ")?")
                          : p !== $g && ((m[f - 1] = h + "(?:\\/|\\/" + n + "\\/)" + p), (m[f + 1] = $g)));
                  }),
                  m.filter((d) => d !== $g).join("/")
                );
              })
              .join("|"),
            [a, u] = e.length > 1 ? ["(?:", ")"] : ["", ""];
          ((s = "^" + a + s + u + "$"), this.negate && (s = "^(?!" + s + ").+$"));
          try {
            this.regexp = new RegExp(s, [...o].join(""));
          } catch {
            this.regexp = !1;
          }
          return this.regexp;
        }
        slashSplit(e) {
          return this.preserveMultipleSlashes
            ? e.split("/")
            : this.isWindows && /^\/\/[^\/]+/.test(e)
              ? ["", ...e.split(/\/+/)]
              : e.split(/\/+/);
        }
        match(e, r = this.partial) {
          if ((this.debug("match", e, this.pattern), this.comment)) return !1;
          if (this.empty) return e === "";
          if (e === "/" && r) return !0;
          let n = this.options;
          this.isWindows && (e = e.split("\\").join("/"));
          let o = this.slashSplit(e);
          this.debug(this.pattern, "split", o);
          let s = this.set;
          this.debug(this.pattern, "set", s);
          let a = o[o.length - 1];
          if (!a) for (let u = o.length - 2; !a && u >= 0; u--) a = o[u];
          for (let u = 0; u < s.length; u++) {
            let c = s[u],
              m = o;
            if ((n.matchBase && c.length === 1 && (m = [a]), this.matchOne(m, c, r)))
              return n.flipNegate ? !0 : !this.negate;
          }
          return n.flipNegate ? !1 : this.negate;
        }
        static defaults(e) {
          return j2.defaults(e).Minimatch;
        }
      }));
    j2.AST = jce;
    j2.Minimatch = Q6;
    j2.escape = Sz;
    j2.unescape = UE;
  });
var Qce,
  tzn,
  eor,
  rzn,
  Xnt,
  ezn,
  Yna,
  D_c,
  iU,
  nzn,
  Gce,
  tor,
  cve,
  izn = j(() => {
    ((Qce = typeof performance == "object" && performance && typeof performance.now == "function" ? performance : Date),
      (tzn = new Set()),
      (eor = typeof process == "object" && process ? process : {}),
      (rzn = (t, e, r, n) => {
        typeof eor.emitWarning == "function" ? eor.emitWarning(t, e, r, n) : console.error(`[${r}] ${e}: ${t}`);
      }),
      (Xnt = globalThis.AbortController),
      (ezn = globalThis.AbortSignal));
    if (typeof Xnt > "u") {
      ((ezn = class {
        onabort;
        _onabort = [];
        reason;
        aborted = !1;
        addEventListener(n, o) {
          this._onabort.push(o);
        }
      }),
        (Xnt = class {
          constructor() {
            e();
          }
          signal = new ezn();
          abort(n) {
            if (!this.signal.aborted) {
              ((this.signal.reason = n), (this.signal.aborted = !0));
              for (let o of this.signal._onabort) o(n);
              this.signal.onabort?.(n);
            }
          }
        }));
      let t = eor.env?.LRU_CACHE_IGNORE_AC_WARNING !== "1",
        e = () => {
          t &&
            ((t = !1),
            rzn(
              "AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.",
              "NO_ABORT_CONTROLLER",
              "ENOTSUP",
              e,
            ));
        };
    }
    ((Yna = (t) => !tzn.has(t)),
      (D_c = Symbol("type")),
      (iU = (t) => t && t === Math.floor(t) && t > 0 && isFinite(t)),
      (nzn = (t) =>
        iU(t)
          ? t <= Math.pow(2, 8)
            ? Uint8Array
            : t <= Math.pow(2, 16)
              ? Uint16Array
              : t <= Math.pow(2, 32)
                ? Uint32Array
                : t <= Number.MAX_SAFE_INTEGER
                  ? Gce
                  : null
          : null),
      (Gce = class extends Array {
        constructor(e) {
          (super(e), this.fill(0));
        }
      }),
      (tor = class t {
        heap;
        length;
        static #e = !1;
        static create(e) {
          let r = nzn(e);
          if (!r) return [];
          t.#e = !0;
          let n = new t(e, r);
          return ((t.#e = !1), n);
        }
        constructor(e, r) {
          if (!t.#e) throw new TypeError("instantiate Stack using Stack.create(n)");
          ((this.heap = new r(e)), (this.length = 0));
        }
        push(e) {
          this.heap[this.length++] = e;
        }
        pop() {
          return this.heap[--this.length];
        }
      }),
      (cve = class t {
        #e;
        #t;
        #r;
        #n;
        #i;
        #o;
        ttl;
        ttlResolution;
        ttlAutopurge;
        updateAgeOnGet;
        updateAgeOnHas;
        allowStale;
        noDisposeOnSet;
        noUpdateTTL;
        maxEntrySize;
        sizeCalculation;
        noDeleteOnFetchRejection;
        noDeleteOnStaleGet;
        allowStaleOnFetchAbort;
        allowStaleOnFetchRejection;
        ignoreFetchAbort;
        #u;
        #a;
        #s;
        #l;
        #c;
        #p;
        #f;
        #h;
        #g;
        #E;
        #b;
        #v;
        #S;
        #_;
        #C;
        #w;
        #A;
        static unsafeExposeInternals(e) {
          return {
            starts: e.#S,
            ttls: e.#_,
            sizes: e.#v,
            keyMap: e.#s,
            keyList: e.#l,
            valList: e.#c,
            next: e.#p,
            prev: e.#f,
            get head() {
              return e.#h;
            },
            get tail() {
              return e.#g;
            },
            free: e.#E,
            isBackgroundFetch: (r) => e.#d(r),
            backgroundFetch: (r, n, o, s) => e.#U(r, n, o, s),
            moveToTail: (r) => e.#B(r),
            indexes: (r) => e.#x(r),
            rindexes: (r) => e.#T(r),
            isStale: (r) => e.#y(r),
          };
        }
        get max() {
          return this.#e;
        }
        get maxSize() {
          return this.#t;
        }
        get calculatedSize() {
          return this.#a;
        }
        get size() {
          return this.#u;
        }
        get fetchMethod() {
          return this.#i;
        }
        get memoMethod() {
          return this.#o;
        }
        get dispose() {
          return this.#r;
        }
        get disposeAfter() {
          return this.#n;
        }
        constructor(e) {
          let {
            max: r = 0,
            ttl: n,
            ttlResolution: o = 1,
            ttlAutopurge: s,
            updateAgeOnGet: a,
            updateAgeOnHas: u,
            allowStale: c,
            dispose: m,
            disposeAfter: d,
            noDisposeOnSet: f,
            noUpdateTTL: p,
            maxSize: h = 0,
            maxEntrySize: g = 0,
            sizeCalculation: b,
            fetchMethod: A,
            memoMethod: y,
            noDeleteOnFetchRejection: E,
            noDeleteOnStaleGet: v,
            allowStaleOnFetchRejection: C,
            allowStaleOnFetchAbort: x,
            ignoreFetchAbort: k,
          } = e;
          if (r !== 0 && !iU(r)) throw new TypeError("max option must be a nonnegative integer");
          let R = r ? nzn(r) : Array;
          if (!R) throw new Error("invalid max value: " + r);
          if (
            ((this.#e = r),
            (this.#t = h),
            (this.maxEntrySize = g || this.#t),
            (this.sizeCalculation = b),
            this.sizeCalculation)
          ) {
            if (!this.#t && !this.maxEntrySize)
              throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
            if (typeof this.sizeCalculation != "function") throw new TypeError("sizeCalculation set to non-function");
          }
          if (y !== void 0 && typeof y != "function") throw new TypeError("memoMethod must be a function if defined");
          if (((this.#o = y), A !== void 0 && typeof A != "function"))
            throw new TypeError("fetchMethod must be a function if specified");
          if (
            ((this.#i = A),
            (this.#w = !!A),
            (this.#s = new Map()),
            (this.#l = new Array(r).fill(void 0)),
            (this.#c = new Array(r).fill(void 0)),
            (this.#p = new R(r)),
            (this.#f = new R(r)),
            (this.#h = 0),
            (this.#g = 0),
            (this.#E = tor.create(r)),
            (this.#u = 0),
            (this.#a = 0),
            typeof m == "function" && (this.#r = m),
            typeof d == "function" ? ((this.#n = d), (this.#b = [])) : ((this.#n = void 0), (this.#b = void 0)),
            (this.#C = !!this.#r),
            (this.#A = !!this.#n),
            (this.noDisposeOnSet = !!f),
            (this.noUpdateTTL = !!p),
            (this.noDeleteOnFetchRejection = !!E),
            (this.allowStaleOnFetchRejection = !!C),
            (this.allowStaleOnFetchAbort = !!x),
            (this.ignoreFetchAbort = !!k),
            this.maxEntrySize !== 0)
          ) {
            if (this.#t !== 0 && !iU(this.#t)) throw new TypeError("maxSize must be a positive integer if specified");
            if (!iU(this.maxEntrySize)) throw new TypeError("maxEntrySize must be a positive integer if specified");
            this.#O();
          }
          if (
            ((this.allowStale = !!c),
            (this.noDeleteOnStaleGet = !!v),
            (this.updateAgeOnGet = !!a),
            (this.updateAgeOnHas = !!u),
            (this.ttlResolution = iU(o) || o === 0 ? o : 1),
            (this.ttlAutopurge = !!s),
            (this.ttl = n || 0),
            this.ttl)
          ) {
            if (!iU(this.ttl)) throw new TypeError("ttl must be a positive integer if specified");
            this.#R();
          }
          if (this.#e === 0 && this.ttl === 0 && this.#t === 0)
            throw new TypeError("At least one of max, maxSize, or ttl is required");
          if (!this.ttlAutopurge && !this.#e && !this.#t) {
            let P = "LRU_CACHE_UNBOUNDED";
            Yna(P) &&
              (tzn.add(P),
              rzn(
                "TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.",
                "UnboundedCacheWarning",
                P,
                t,
              ));
          }
        }
        getRemainingTTL(e) {
          return this.#s.has(e) ? 1 / 0 : 0;
        }
        #R() {
          let e = new Gce(this.#e),
            r = new Gce(this.#e);
          ((this.#_ = e),
            (this.#S = r),
            (this.#L = (s, a, u = Qce.now()) => {
              if (((r[s] = a !== 0 ? u : 0), (e[s] = a), a !== 0 && this.ttlAutopurge)) {
                let c = setTimeout(() => {
                  this.#y(s) && this.#D(this.#l[s], "expire");
                }, a + 1);
                c.unref && c.unref();
              }
            }),
            (this.#I = (s) => {
              r[s] = e[s] !== 0 ? Qce.now() : 0;
            }),
            (this.#m = (s, a) => {
              if (e[a]) {
                let u = e[a],
                  c = r[a];
                if (!u || !c) return;
                ((s.ttl = u), (s.start = c), (s.now = n || o()));
                let m = s.now - c;
                s.remainingTTL = u - m;
              }
            }));
          let n = 0,
            o = () => {
              let s = Qce.now();
              if (this.ttlResolution > 0) {
                n = s;
                let a = setTimeout(() => (n = 0), this.ttlResolution);
                a.unref && a.unref();
              }
              return s;
            };
          ((this.getRemainingTTL = (s) => {
            let a = this.#s.get(s);
            if (a === void 0) return 0;
            let u = e[a],
              c = r[a];
            if (!u || !c) return 1 / 0;
            let m = (n || o()) - c;
            return u - m;
          }),
            (this.#y = (s) => {
              let a = r[s],
                u = e[s];
              return !!u && !!a && (n || o()) - a > u;
            }));
        }
        #I = () => {};
        #m = () => {};
        #L = () => {};
        #y = () => !1;
        #O() {
          let e = new Gce(this.#e);
          ((this.#a = 0),
            (this.#v = e),
            (this.#k = (r) => {
              ((this.#a -= e[r]), (e[r] = 0));
            }),
            (this.#M = (r, n, o, s) => {
              if (this.#d(n)) return 0;
              if (!iU(o))
                if (s) {
                  if (typeof s != "function") throw new TypeError("sizeCalculation must be a function");
                  if (((o = s(n, r)), !iU(o)))
                    throw new TypeError("sizeCalculation return invalid (expect positive integer)");
                } else
                  throw new TypeError(
                    "invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.",
                  );
              return o;
            }),
            (this.#N = (r, n, o) => {
              if (((e[r] = n), this.#t)) {
                let s = this.#t - e[r];
                for (; this.#a > s; ) this.#P(!0);
              }
              ((this.#a += e[r]), o && ((o.entrySize = n), (o.totalCalculatedSize = this.#a)));
            }));
        }
        #k = (e) => {};
        #N = (e, r, n) => {};
        #M = (e, r, n, o) => {
          if (n || o) throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
          return 0;
        };
        *#x({ allowStale: e = this.allowStale } = {}) {
          if (this.#u)
            for (let r = this.#g; !(!this.#F(r) || ((e || !this.#y(r)) && (yield r), r === this.#h)); ) r = this.#f[r];
        }
        *#T({ allowStale: e = this.allowStale } = {}) {
          if (this.#u)
            for (let r = this.#h; !(!this.#F(r) || ((e || !this.#y(r)) && (yield r), r === this.#g)); ) r = this.#p[r];
        }
        #F(e) {
          return e !== void 0 && this.#s.get(this.#l[e]) === e;
        }
        *entries() {
          for (let e of this.#x())
            this.#c[e] !== void 0 && this.#l[e] !== void 0 && !this.#d(this.#c[e]) && (yield [this.#l[e], this.#c[e]]);
        }
        *rentries() {
          for (let e of this.#T())
            this.#c[e] !== void 0 && this.#l[e] !== void 0 && !this.#d(this.#c[e]) && (yield [this.#l[e], this.#c[e]]);
        }
        *keys() {
          for (let e of this.#x()) {
            let r = this.#l[e];
            r !== void 0 && !this.#d(this.#c[e]) && (yield r);
          }
        }
        *rkeys() {
          for (let e of this.#T()) {
            let r = this.#l[e];
            r !== void 0 && !this.#d(this.#c[e]) && (yield r);
          }
        }
        *values() {
          for (let e of this.#x()) this.#c[e] !== void 0 && !this.#d(this.#c[e]) && (yield this.#c[e]);
        }
        *rvalues() {
          for (let e of this.#T()) this.#c[e] !== void 0 && !this.#d(this.#c[e]) && (yield this.#c[e]);
        }
        [Symbol.iterator]() {
          return this.entries();
        }
        [Symbol.toStringTag] = "LRUCache";
        find(e, r = {}) {
          for (let n of this.#x()) {
            let o = this.#c[n],
              s = this.#d(o) ? o.__staleWhileFetching : o;
            if (s !== void 0 && e(s, this.#l[n], this)) return this.get(this.#l[n], r);
          }
        }
        forEach(e, r = this) {
          for (let n of this.#x()) {
            let o = this.#c[n],
              s = this.#d(o) ? o.__staleWhileFetching : o;
            s !== void 0 && e.call(r, s, this.#l[n], this);
          }
        }
        rforEach(e, r = this) {
          for (let n of this.#T()) {
            let o = this.#c[n],
              s = this.#d(o) ? o.__staleWhileFetching : o;
            s !== void 0 && e.call(r, s, this.#l[n], this);
          }
        }
        purgeStale() {
          let e = !1;
          for (let r of this.#T({ allowStale: !0 })) this.#y(r) && (this.#D(this.#l[r], "expire"), (e = !0));
          return e;
        }
        info(e) {
          let r = this.#s.get(e);
          if (r === void 0) return;
          let n = this.#c[r],
            o = this.#d(n) ? n.__staleWhileFetching : n;
          if (o === void 0) return;
          let s = { value: o };
          if (this.#_ && this.#S) {
            let a = this.#_[r],
              u = this.#S[r];
            if (a && u) {
              let c = a - (Qce.now() - u);
              ((s.ttl = c), (s.start = Date.now()));
            }
          }
          return (this.#v && (s.size = this.#v[r]), s);
        }
        dump() {
          let e = [];
          for (let r of this.#x({ allowStale: !0 })) {
            let n = this.#l[r],
              o = this.#c[r],
              s = this.#d(o) ? o.__staleWhileFetching : o;
            if (s === void 0 || n === void 0) continue;
            let a = { value: s };
            if (this.#_ && this.#S) {
              a.ttl = this.#_[r];
              let u = Qce.now() - this.#S[r];
              a.start = Math.floor(Date.now() - u);
            }
            (this.#v && (a.size = this.#v[r]), e.unshift([n, a]));
          }
          return e;
        }
        load(e) {
          this.clear();
          for (let [r, n] of e) {
            if (n.start) {
              let o = Date.now() - n.start;
              n.start = Qce.now() - o;
            }
            this.set(r, n.value, n);
          }
        }
        set(e, r, n = {}) {
          if (r === void 0) return (this.delete(e), this);
          let {
              ttl: o = this.ttl,
              start: s,
              noDisposeOnSet: a = this.noDisposeOnSet,
              sizeCalculation: u = this.sizeCalculation,
              status: c,
            } = n,
            { noUpdateTTL: m = this.noUpdateTTL } = n,
            d = this.#M(e, r, n.size || 0, u);
          if (this.maxEntrySize && d > this.maxEntrySize)
            return (c && ((c.set = "miss"), (c.maxEntrySizeExceeded = !0)), this.#D(e, "set"), this);
          let f = this.#u === 0 ? void 0 : this.#s.get(e);
          if (f === void 0)
            ((f =
              this.#u === 0
                ? this.#g
                : this.#E.length !== 0
                  ? this.#E.pop()
                  : this.#u === this.#e
                    ? this.#P(!1)
                    : this.#u),
              (this.#l[f] = e),
              (this.#c[f] = r),
              this.#s.set(e, f),
              (this.#p[this.#g] = f),
              (this.#f[f] = this.#g),
              (this.#g = f),
              this.#u++,
              this.#N(f, d, c),
              c && (c.set = "add"),
              (m = !1));
          else {
            this.#B(f);
            let p = this.#c[f];
            if (r !== p) {
              if (this.#w && this.#d(p)) {
                p.__abortController.abort(new Error("replaced"));
                let { __staleWhileFetching: h } = p;
                h !== void 0 && !a && (this.#C && this.#r?.(h, e, "set"), this.#A && this.#b?.push([h, e, "set"]));
              } else a || (this.#C && this.#r?.(p, e, "set"), this.#A && this.#b?.push([p, e, "set"]));
              if ((this.#k(f), this.#N(f, d, c), (this.#c[f] = r), c)) {
                c.set = "replace";
                let h = p && this.#d(p) ? p.__staleWhileFetching : p;
                h !== void 0 && (c.oldValue = h);
              }
            } else c && (c.set = "update");
          }
          if (
            (o !== 0 && !this.#_ && this.#R(),
            this.#_ && (m || this.#L(f, o, s), c && this.#m(c, f)),
            !a && this.#A && this.#b)
          ) {
            let p = this.#b,
              h;
            for (; (h = p?.shift()); ) this.#n?.(...h);
          }
          return this;
        }
        pop() {
          try {
            for (; this.#u; ) {
              let e = this.#c[this.#h];
              if ((this.#P(!0), this.#d(e))) {
                if (e.__staleWhileFetching) return e.__staleWhileFetching;
              } else if (e !== void 0) return e;
            }
          } finally {
            if (this.#A && this.#b) {
              let e = this.#b,
                r;
              for (; (r = e?.shift()); ) this.#n?.(...r);
            }
          }
        }
        #P(e) {
          let r = this.#h,
            n = this.#l[r],
            o = this.#c[r];
          return (
            this.#w && this.#d(o)
              ? o.__abortController.abort(new Error("evicted"))
              : (this.#C || this.#A) &&
                (this.#C && this.#r?.(o, n, "evict"), this.#A && this.#b?.push([o, n, "evict"])),
            this.#k(r),
            e && ((this.#l[r] = void 0), (this.#c[r] = void 0), this.#E.push(r)),
            this.#u === 1 ? ((this.#h = this.#g = 0), (this.#E.length = 0)) : (this.#h = this.#p[r]),
            this.#s.delete(n),
            this.#u--,
            r
          );
        }
        has(e, r = {}) {
          let { updateAgeOnHas: n = this.updateAgeOnHas, status: o } = r,
            s = this.#s.get(e);
          if (s !== void 0) {
            let a = this.#c[s];
            if (this.#d(a) && a.__staleWhileFetching === void 0) return !1;
            if (this.#y(s)) o && ((o.has = "stale"), this.#m(o, s));
            else return (n && this.#I(s), o && ((o.has = "hit"), this.#m(o, s)), !0);
          } else o && (o.has = "miss");
          return !1;
        }
        peek(e, r = {}) {
          let { allowStale: n = this.allowStale } = r,
            o = this.#s.get(e);
          if (o === void 0 || (!n && this.#y(o))) return;
          let s = this.#c[o];
          return this.#d(s) ? s.__staleWhileFetching : s;
        }
        #U(e, r, n, o) {
          let s = r === void 0 ? void 0 : this.#c[r];
          if (this.#d(s)) return s;
          let a = new Xnt(),
            { signal: u } = n;
          u?.addEventListener("abort", () => a.abort(u.reason), { signal: a.signal });
          let c = { signal: a.signal, options: n, context: o },
            m = (b, A = !1) => {
              let { aborted: y } = a.signal,
                E = n.ignoreFetchAbort && b !== void 0;
              if (
                (n.status &&
                  (y && !A
                    ? ((n.status.fetchAborted = !0),
                      (n.status.fetchError = a.signal.reason),
                      E && (n.status.fetchAbortIgnored = !0))
                    : (n.status.fetchResolved = !0)),
                y && !E && !A)
              )
                return f(a.signal.reason);
              let v = h;
              return (
                this.#c[r] === h &&
                  (b === void 0
                    ? v.__staleWhileFetching
                      ? (this.#c[r] = v.__staleWhileFetching)
                      : this.#D(e, "fetch")
                    : (n.status && (n.status.fetchUpdated = !0), this.set(e, b, c.options))),
                b
              );
            },
            d = (b) => (n.status && ((n.status.fetchRejected = !0), (n.status.fetchError = b)), f(b)),
            f = (b) => {
              let { aborted: A } = a.signal,
                y = A && n.allowStaleOnFetchAbort,
                E = y || n.allowStaleOnFetchRejection,
                v = E || n.noDeleteOnFetchRejection,
                C = h;
              if (
                (this.#c[r] === h &&
                  (!v || C.__staleWhileFetching === void 0
                    ? this.#D(e, "fetch")
                    : y || (this.#c[r] = C.__staleWhileFetching)),
                E)
              )
                return (
                  n.status && C.__staleWhileFetching !== void 0 && (n.status.returnedStale = !0),
                  C.__staleWhileFetching
                );
              if (C.__returned === C) throw b;
            },
            p = (b, A) => {
              let y = this.#i?.(e, s, c);
              (y && y instanceof Promise && y.then((E) => b(E === void 0 ? void 0 : E), A),
                a.signal.addEventListener("abort", () => {
                  (!n.ignoreFetchAbort || n.allowStaleOnFetchAbort) &&
                    (b(void 0), n.allowStaleOnFetchAbort && (b = (E) => m(E, !0)));
                }));
            };
          n.status && (n.status.fetchDispatched = !0);
          let h = new Promise(p).then(m, d),
            g = Object.assign(h, { __abortController: a, __staleWhileFetching: s, __returned: void 0 });
          return (
            r === void 0 ? (this.set(e, g, { ...c.options, status: void 0 }), (r = this.#s.get(e))) : (this.#c[r] = g),
            g
          );
        }
        #d(e) {
          if (!this.#w) return !1;
          let r = e;
          return (
            !!r &&
            r instanceof Promise &&
            r.hasOwnProperty("__staleWhileFetching") &&
            r.__abortController instanceof Xnt
          );
        }
        async fetch(e, r = {}) {
          let {
            allowStale: n = this.allowStale,
            updateAgeOnGet: o = this.updateAgeOnGet,
            noDeleteOnStaleGet: s = this.noDeleteOnStaleGet,
            ttl: a = this.ttl,
            noDisposeOnSet: u = this.noDisposeOnSet,
            size: c = 0,
            sizeCalculation: m = this.sizeCalculation,
            noUpdateTTL: d = this.noUpdateTTL,
            noDeleteOnFetchRejection: f = this.noDeleteOnFetchRejection,
            allowStaleOnFetchRejection: p = this.allowStaleOnFetchRejection,
            ignoreFetchAbort: h = this.ignoreFetchAbort,
            allowStaleOnFetchAbort: g = this.allowStaleOnFetchAbort,
            context: b,
            forceRefresh: A = !1,
            status: y,
            signal: E,
          } = r;
          if (!this.#w)
            return (
              y && (y.fetch = "get"),
              this.get(e, { allowStale: n, updateAgeOnGet: o, noDeleteOnStaleGet: s, status: y })
            );
          let v = {
              allowStale: n,
              updateAgeOnGet: o,
              noDeleteOnStaleGet: s,
              ttl: a,
              noDisposeOnSet: u,
              size: c,
              sizeCalculation: m,
              noUpdateTTL: d,
              noDeleteOnFetchRejection: f,
              allowStaleOnFetchRejection: p,
              allowStaleOnFetchAbort: g,
              ignoreFetchAbort: h,
              status: y,
              signal: E,
            },
            C = this.#s.get(e);
          if (C === void 0) {
            y && (y.fetch = "miss");
            let x = this.#U(e, C, v, b);
            return (x.__returned = x);
          } else {
            let x = this.#c[C];
            if (this.#d(x)) {
              let O = n && x.__staleWhileFetching !== void 0;
              return (
                y && ((y.fetch = "inflight"), O && (y.returnedStale = !0)),
                O ? x.__staleWhileFetching : (x.__returned = x)
              );
            }
            let k = this.#y(C);
            if (!A && !k) return (y && (y.fetch = "hit"), this.#B(C), o && this.#I(C), y && this.#m(y, C), x);
            let R = this.#U(e, C, v, b),
              D = R.__staleWhileFetching !== void 0 && n;
            return (
              y && ((y.fetch = k ? "stale" : "refresh"), D && k && (y.returnedStale = !0)),
              D ? R.__staleWhileFetching : (R.__returned = R)
            );
          }
        }
        async forceFetch(e, r = {}) {
          let n = await this.fetch(e, r);
          if (n === void 0) throw new Error("fetch() returned undefined");
          return n;
        }
        memo(e, r = {}) {
          let n = this.#o;
          if (!n) throw new Error("no memoMethod provided to constructor");
          let { context: o, forceRefresh: s, ...a } = r,
            u = this.get(e, a);
          if (!s && u !== void 0) return u;
          let c = n(e, u, { options: a, context: o });
          return (this.set(e, c, a), c);
        }
        get(e, r = {}) {
          let {
              allowStale: n = this.allowStale,
              updateAgeOnGet: o = this.updateAgeOnGet,
              noDeleteOnStaleGet: s = this.noDeleteOnStaleGet,
              status: a,
            } = r,
            u = this.#s.get(e);
          if (u !== void 0) {
            let c = this.#c[u],
              m = this.#d(c);
            return (
              a && this.#m(a, u),
              this.#y(u)
                ? (a && (a.get = "stale"),
                  m
                    ? (a && n && c.__staleWhileFetching !== void 0 && (a.returnedStale = !0),
                      n ? c.__staleWhileFetching : void 0)
                    : (s || this.#D(e, "expire"), a && n && (a.returnedStale = !0), n ? c : void 0))
                : (a && (a.get = "hit"), m ? c.__staleWhileFetching : (this.#B(u), o && this.#I(u), c))
            );
          } else a && (a.get = "miss");
        }
        #$(e, r) {
          ((this.#f[r] = e), (this.#p[e] = r));
        }
        #B(e) {
          e !== this.#g &&
            (e === this.#h ? (this.#h = this.#p[e]) : this.#$(this.#f[e], this.#p[e]),
            this.#$(this.#g, e),
            (this.#g = e));
        }
        delete(e) {
          return this.#D(e, "delete");
        }
        #D(e, r) {
          let n = !1;
          if (this.#u !== 0) {
            let o = this.#s.get(e);
            if (o !== void 0)
              if (((n = !0), this.#u === 1)) this.#j(r);
              else {
                this.#k(o);
                let s = this.#c[o];
                if (
                  (this.#d(s)
                    ? s.__abortController.abort(new Error("deleted"))
                    : (this.#C || this.#A) && (this.#C && this.#r?.(s, e, r), this.#A && this.#b?.push([s, e, r])),
                  this.#s.delete(e),
                  (this.#l[o] = void 0),
                  (this.#c[o] = void 0),
                  o === this.#g)
                )
                  this.#g = this.#f[o];
                else if (o === this.#h) this.#h = this.#p[o];
                else {
                  let a = this.#f[o];
                  this.#p[a] = this.#p[o];
                  let u = this.#p[o];
                  this.#f[u] = this.#f[o];
                }
                (this.#u--, this.#E.push(o));
              }
          }
          if (this.#A && this.#b?.length) {
            let o = this.#b,
              s;
            for (; (s = o?.shift()); ) this.#n?.(...s);
          }
          return n;
        }
        clear() {
          return this.#j("delete");
        }
        #j(e) {
          for (let r of this.#T({ allowStale: !0 })) {
            let n = this.#c[r];
            if (this.#d(n)) n.__abortController.abort(new Error("deleted"));
            else {
              let o = this.#l[r];
              (this.#C && this.#r?.(n, o, e), this.#A && this.#b?.push([n, o, e]));
            }
          }
          if (
            (this.#s.clear(),
            this.#c.fill(void 0),
            this.#l.fill(void 0),
            this.#_ && this.#S && (this.#_.fill(0), this.#S.fill(0)),
            this.#v && this.#v.fill(0),
            (this.#h = 0),
            (this.#g = 0),
            (this.#E.length = 0),
            (this.#a = 0),
            (this.#u = 0),
            this.#A && this.#b)
          ) {
            let r = this.#b,
              n;
            for (; (n = r?.shift()); ) this.#n?.(...n);
          }
        }
      }));
  });
import { EventEmitter as uor } from "node:events";
import czn from "node:stream";
import { StringDecoder as Kna } from "node:string_decoder";
var ozn,
  Jna,
  Xna,
  Zna,
  SO,
  wO,
  oU,
  Znt,
  lve,
  eit,
  szn,
  tit,
  azn,
  fS,
  qce,
  e3,
  mve,
  Hce,
  t3,
  Q2,
  r3,
  ror,
  rit,
  aA,
  nf,
  nor,
  ior,
  uzn,
  oor,
  bD,
  sor,
  nit,
  dve,
  wz,
  G6,
  fve,
  eia,
  tia,
  ria,
  nia,
  iit,
  aor,
  iia,
  oia,
  sU,
  cor = j(() => {
    ((ozn = typeof process == "object" && process ? process : { stdout: null, stderr: null }),
      (Jna = (t) => !!t && typeof t == "object" && (t instanceof sU || t instanceof czn || Xna(t) || Zna(t))),
      (Xna = (t) =>
        !!t &&
        typeof t == "object" &&
        t instanceof uor &&
        typeof t.pipe == "function" &&
        t.pipe !== czn.Writable.prototype.pipe),
      (Zna = (t) =>
        !!t && typeof t == "object" && t instanceof uor && typeof t.write == "function" && typeof t.end == "function"),
      (SO = Symbol("EOF")),
      (wO = Symbol("maybeEmitEnd")),
      (oU = Symbol("emittedEnd")),
      (Znt = Symbol("emittingEnd")),
      (lve = Symbol("emittedError")),
      (eit = Symbol("closed")),
      (szn = Symbol("read")),
      (tit = Symbol("flush")),
      (azn = Symbol("flushChunk")),
      (fS = Symbol("encoding")),
      (qce = Symbol("decoder")),
      (e3 = Symbol("flowing")),
      (mve = Symbol("paused")),
      (Hce = Symbol("resume")),
      (t3 = Symbol("buffer")),
      (Q2 = Symbol("pipes")),
      (r3 = Symbol("bufferLength")),
      (ror = Symbol("bufferPush")),
      (rit = Symbol("bufferShift")),
      (aA = Symbol("objectMode")),
      (nf = Symbol("destroyed")),
      (nor = Symbol("error")),
      (ior = Symbol("emitData")),
      (uzn = Symbol("emitEnd")),
      (oor = Symbol("emitEnd2")),
      (bD = Symbol("async")),
      (sor = Symbol("abort")),
      (nit = Symbol("aborted")),
      (dve = Symbol("signal")),
      (wz = Symbol("dataListeners")),
      (G6 = Symbol("discarded")),
      (fve = (t) => Promise.resolve().then(t)),
      (eia = (t) => t()),
      (tia = (t) => t === "end" || t === "finish" || t === "prefinish"),
      (ria = (t) =>
        t instanceof ArrayBuffer ||
        (!!t && typeof t == "object" && t.constructor && t.constructor.name === "ArrayBuffer" && t.byteLength >= 0)),
      (nia = (t) => !Buffer.isBuffer(t) && ArrayBuffer.isView(t)),
      (iit = class {
        src;
        dest;
        opts;
        ondrain;
        constructor(e, r, n) {
          ((this.src = e),
            (this.dest = r),
            (this.opts = n),
            (this.ondrain = () => e[Hce]()),
            this.dest.on("drain", this.ondrain));
        }
        unpipe() {
          this.dest.removeListener("drain", this.ondrain);
        }
        proxyErrors(e) {}
        end() {
          (this.unpipe(), this.opts.end && this.dest.end());
        }
      }),
      (aor = class extends iit {
        unpipe() {
          (this.src.removeListener("error", this.proxyErrors), super.unpipe());
        }
        constructor(e, r, n) {
          (super(e, r, n), (this.proxyErrors = (o) => r.emit("error", o)), e.on("error", this.proxyErrors));
        }
      }),
      (iia = (t) => !!t.objectMode),
      (oia = (t) => !t.objectMode && !!t.encoding && t.encoding !== "buffer"),
      (sU = class extends uor {
        [e3] = !1;
        [mve] = !1;
        [Q2] = [];
        [t3] = [];
        [aA];
        [fS];
        [bD];
        [qce];
        [SO] = !1;
        [oU] = !1;
        [Znt] = !1;
        [eit] = !1;
        [lve] = null;
        [r3] = 0;
        [nf] = !1;
        [dve];
        [nit] = !1;
        [wz] = 0;
        [G6] = !1;
        writable = !0;
        readable = !0;
        constructor(...e) {
          let r = e[0] || {};
          if ((super(), r.objectMode && typeof r.encoding == "string"))
            throw new TypeError("Encoding and objectMode may not be used together");
          (iia(r)
            ? ((this[aA] = !0), (this[fS] = null))
            : oia(r)
              ? ((this[fS] = r.encoding), (this[aA] = !1))
              : ((this[aA] = !1), (this[fS] = null)),
            (this[bD] = !!r.async),
            (this[qce] = this[fS] ? new Kna(this[fS]) : null),
            r && r.debugExposeBuffer === !0 && Object.defineProperty(this, "buffer", { get: () => this[t3] }),
            r && r.debugExposePipes === !0 && Object.defineProperty(this, "pipes", { get: () => this[Q2] }));
          let { signal: n } = r;
          n && ((this[dve] = n), n.aborted ? this[sor]() : n.addEventListener("abort", () => this[sor]()));
        }
        get bufferLength() {
          return this[r3];
        }
        get encoding() {
          return this[fS];
        }
        set encoding(e) {
          throw new Error("Encoding must be set at instantiation time");
        }
        setEncoding(e) {
          throw new Error("Encoding must be set at instantiation time");
        }
        get objectMode() {
          return this[aA];
        }
        set objectMode(e) {
          throw new Error("objectMode must be set at instantiation time");
        }
        get async() {
          return this[bD];
        }
        set async(e) {
          this[bD] = this[bD] || !!e;
        }
        [sor]() {
          ((this[nit] = !0), this.emit("abort", this[dve]?.reason), this.destroy(this[dve]?.reason));
        }
        get aborted() {
          return this[nit];
        }
        set aborted(e) {}
        write(e, r, n) {
          if (this[nit]) return !1;
          if (this[SO]) throw new Error("write after end");
          if (this[nf])
            return (
              this.emit(
                "error",
                Object.assign(new Error("Cannot call write after a stream was destroyed"), {
                  code: "ERR_STREAM_DESTROYED",
                }),
              ),
              !0
            );
          (typeof r == "function" && ((n = r), (r = "utf8")), r || (r = "utf8"));
          let o = this[bD] ? fve : eia;
          if (!this[aA] && !Buffer.isBuffer(e)) {
            if (nia(e)) e = Buffer.from(e.buffer, e.byteOffset, e.byteLength);
            else if (ria(e)) e = Buffer.from(e);
            else if (typeof e != "string") throw new Error("Non-contiguous data written to non-objectMode stream");
          }
          return this[aA]
            ? (this[e3] && this[r3] !== 0 && this[tit](!0),
              this[e3] ? this.emit("data", e) : this[ror](e),
              this[r3] !== 0 && this.emit("readable"),
              n && o(n),
              this[e3])
            : e.length
              ? (typeof e == "string" && !(r === this[fS] && !this[qce]?.lastNeed) && (e = Buffer.from(e, r)),
                Buffer.isBuffer(e) && this[fS] && (e = this[qce].write(e)),
                this[e3] && this[r3] !== 0 && this[tit](!0),
                this[e3] ? this.emit("data", e) : this[ror](e),
                this[r3] !== 0 && this.emit("readable"),
                n && o(n),
                this[e3])
              : (this[r3] !== 0 && this.emit("readable"), n && o(n), this[e3]);
        }
        read(e) {
          if (this[nf]) return null;
          if (((this[G6] = !1), this[r3] === 0 || e === 0 || (e && e > this[r3]))) return (this[wO](), null);
          (this[aA] && (e = null),
            this[t3].length > 1 &&
              !this[aA] &&
              (this[t3] = [this[fS] ? this[t3].join("") : Buffer.concat(this[t3], this[r3])]));
          let r = this[szn](e || null, this[t3][0]);
          return (this[wO](), r);
        }
        [szn](e, r) {
          if (this[aA]) this[rit]();
          else {
            let n = r;
            e === n.length || e === null
              ? this[rit]()
              : typeof n == "string"
                ? ((this[t3][0] = n.slice(e)), (r = n.slice(0, e)), (this[r3] -= e))
                : ((this[t3][0] = n.subarray(e)), (r = n.subarray(0, e)), (this[r3] -= e));
          }
          return (this.emit("data", r), !this[t3].length && !this[SO] && this.emit("drain"), r);
        }
        end(e, r, n) {
          return (
            typeof e == "function" && ((n = e), (e = void 0)),
            typeof r == "function" && ((n = r), (r = "utf8")),
            e !== void 0 && this.write(e, r),
            n && this.once("end", n),
            (this[SO] = !0),
            (this.writable = !1),
            (this[e3] || !this[mve]) && this[wO](),
            this
          );
        }
        [Hce]() {
          this[nf] ||
            (!this[wz] && !this[Q2].length && (this[G6] = !0),
            (this[mve] = !1),
            (this[e3] = !0),
            this.emit("resume"),
            this[t3].length ? this[tit]() : this[SO] ? this[wO]() : this.emit("drain"));
        }
        resume() {
          return this[Hce]();
        }
        pause() {
          ((this[e3] = !1), (this[mve] = !0), (this[G6] = !1));
        }
        get destroyed() {
          return this[nf];
        }
        get flowing() {
          return this[e3];
        }
        get paused() {
          return this[mve];
        }
        [ror](e) {
          (this[aA] ? (this[r3] += 1) : (this[r3] += e.length), this[t3].push(e));
        }
        [rit]() {
          return (this[aA] ? (this[r3] -= 1) : (this[r3] -= this[t3][0].length), this[t3].shift());
        }
        [tit](e = !1) {
          do;
          while (this[azn](this[rit]()) && this[t3].length);
          !e && !this[t3].length && !this[SO] && this.emit("drain");
        }
        [azn](e) {
          return (this.emit("data", e), this[e3]);
        }
        pipe(e, r) {
          if (this[nf]) return e;
          this[G6] = !1;
          let n = this[oU];
          return (
            (r = r || {}),
            e === ozn.stdout || e === ozn.stderr ? (r.end = !1) : (r.end = r.end !== !1),
            (r.proxyErrors = !!r.proxyErrors),
            n
              ? r.end && e.end()
              : (this[Q2].push(r.proxyErrors ? new aor(this, e, r) : new iit(this, e, r)),
                this[bD] ? fve(() => this[Hce]()) : this[Hce]()),
            e
          );
        }
        unpipe(e) {
          let r = this[Q2].find((n) => n.dest === e);
          r &&
            (this[Q2].length === 1
              ? (this[e3] && this[wz] === 0 && (this[e3] = !1), (this[Q2] = []))
              : this[Q2].splice(this[Q2].indexOf(r), 1),
            r.unpipe());
        }
        addListener(e, r) {
          return this.on(e, r);
        }
        on(e, r) {
          let n = super.on(e, r);
          if (e === "data") ((this[G6] = !1), this[wz]++, !this[Q2].length && !this[e3] && this[Hce]());
          else if (e === "readable" && this[r3] !== 0) super.emit("readable");
          else if (tia(e) && this[oU]) (super.emit(e), this.removeAllListeners(e));
          else if (e === "error" && this[lve]) {
            let o = r;
            this[bD] ? fve(() => o.call(this, this[lve])) : o.call(this, this[lve]);
          }
          return n;
        }
        removeListener(e, r) {
          return this.off(e, r);
        }
        off(e, r) {
          let n = super.off(e, r);
          return (
            e === "data" &&
              ((this[wz] = this.listeners("data").length),
              this[wz] === 0 && !this[G6] && !this[Q2].length && (this[e3] = !1)),
            n
          );
        }
        removeAllListeners(e) {
          let r = super.removeAllListeners(e);
          return (
            (e === "data" || e === void 0) && ((this[wz] = 0), !this[G6] && !this[Q2].length && (this[e3] = !1)),
            r
          );
        }
        get emittedEnd() {
          return this[oU];
        }
        [wO]() {
          !this[Znt] &&
            !this[oU] &&
            !this[nf] &&
            this[t3].length === 0 &&
            this[SO] &&
            ((this[Znt] = !0),
            this.emit("end"),
            this.emit("prefinish"),
            this.emit("finish"),
            this[eit] && this.emit("close"),
            (this[Znt] = !1));
        }
        emit(e, ...r) {
          let n = r[0];
          if (e !== "error" && e !== "close" && e !== nf && this[nf]) return !1;
          if (e === "data") return !this[aA] && !n ? !1 : this[bD] ? (fve(() => this[ior](n)), !0) : this[ior](n);
          if (e === "end") return this[uzn]();
          if (e === "close") {
            if (((this[eit] = !0), !this[oU] && !this[nf])) return !1;
            let s = super.emit("close");
            return (this.removeAllListeners("close"), s);
          } else if (e === "error") {
            ((this[lve] = n), super.emit(nor, n));
            let s = !this[dve] || this.listeners("error").length ? super.emit("error", n) : !1;
            return (this[wO](), s);
          } else if (e === "resume") {
            let s = super.emit("resume");
            return (this[wO](), s);
          } else if (e === "finish" || e === "prefinish") {
            let s = super.emit(e);
            return (this.removeAllListeners(e), s);
          }
          let o = super.emit(e, ...r);
          return (this[wO](), o);
        }
        [ior](e) {
          for (let n of this[Q2]) n.dest.write(e) === !1 && this.pause();
          let r = this[G6] ? !1 : super.emit("data", e);
          return (this[wO](), r);
        }
        [uzn]() {
          return this[oU]
            ? !1
            : ((this[oU] = !0), (this.readable = !1), this[bD] ? (fve(() => this[oor]()), !0) : this[oor]());
        }
        [oor]() {
          if (this[qce]) {
            let r = this[qce].end();
            if (r) {
              for (let n of this[Q2]) n.dest.write(r);
              this[G6] || super.emit("data", r);
            }
          }
          for (let r of this[Q2]) r.end();
          let e = super.emit("end");
          return (this.removeAllListeners("end"), e);
        }
        async collect() {
          let e = Object.assign([], { dataLength: 0 });
          this[aA] || (e.dataLength = 0);
          let r = this.promise();
          return (
            this.on("data", (n) => {
              (e.push(n), this[aA] || (e.dataLength += n.length));
            }),
            await r,
            e
          );
        }
        async concat() {
          if (this[aA]) throw new Error("cannot concat in objectMode");
          let e = await this.collect();
          return this[fS] ? e.join("") : Buffer.concat(e, e.dataLength);
        }
        async promise() {
          return new Promise((e, r) => {
            (this.on(nf, () => r(new Error("stream destroyed"))),
              this.on("error", (n) => r(n)),
              this.on("end", () => e()));
          });
        }
        [Symbol.asyncIterator]() {
          this[G6] = !1;
          let e = !1,
            r = async () => (this.pause(), (e = !0), { value: void 0, done: !0 });
          return {
            next: () => {
              if (e) return r();
              let o = this.read();
              if (o !== null) return Promise.resolve({ done: !1, value: o });
              if (this[SO]) return r();
              let s,
                a,
                u = (f) => {
                  (this.off("data", c), this.off("end", m), this.off(nf, d), r(), a(f));
                },
                c = (f) => {
                  (this.off("error", u),
                    this.off("end", m),
                    this.off(nf, d),
                    this.pause(),
                    s({ value: f, done: !!this[SO] }));
                },
                m = () => {
                  (this.off("error", u), this.off("data", c), this.off(nf, d), r(), s({ done: !0, value: void 0 }));
                },
                d = () => u(new Error("stream destroyed"));
              return new Promise((f, p) => {
                ((a = p), (s = f), this.once(nf, d), this.once("error", u), this.once("end", m), this.once("data", c));
              });
            },
            throw: r,
            return: r,
            [Symbol.asyncIterator]() {
              return this;
            },
          };
        }
        [Symbol.iterator]() {
          this[G6] = !1;
          let e = !1,
            r = () => (
              this.pause(),
              this.off(nor, r),
              this.off(nf, r),
              this.off("end", r),
              (e = !0),
              { done: !0, value: void 0 }
            ),
            n = () => {
              if (e) return r();
              let o = this.read();
              return o === null ? r() : { done: !1, value: o };
            };
          return (
            this.once("end", r),
            this.once(nor, r),
            this.once(nf, r),
            {
              next: n,
              throw: r,
              return: r,
              [Symbol.iterator]() {
                return this;
              },
            }
          );
        }
        destroy(e) {
          if (this[nf]) return (e ? this.emit("error", e) : this.emit(nf), this);
          ((this[nf] = !0), (this[G6] = !0), (this[t3].length = 0), (this[r3] = 0));
          let r = this;
          return (
            typeof r.close == "function" && !this[eit] && r.close(),
            e ? this.emit("error", e) : this.emit(nf),
            this
          );
        }
        static get isStream() {
          return Jna;
        }
      }));
  });
import { posix as sia, win32 as dor } from "node:path";
import { fileURLToPath as aia } from "node:url";
import { lstatSync as uia, readdir as cia, readdirSync as lia, readlinkSync as mia, realpathSync as dia } from "fs";
import * as fia from "node:fs";
import { lstat as hia, readdir as gia, readlink as bia, realpath as Aia } from "node:fs/promises";
var pia,
  hve,
  pzn,
  hzn,
  yia,
  _ia,
  QE,
  gzn,
  bzn,
  AD,
  Azn,
  yzn,
  xz,
  _zn,
  jE,
  pve,
  lor,
  lzn,
  gve,
  pS,
  oit,
  ait,
  mzn,
  Eia,
  mor,
  dzn,
  bve,
  fzn,
  sit,
  uit,
  por,
  Ezn,
  uA,
  cit,
  lit,
  mit,
  Vce,
  Wce,
  Ave,
  $_c,
  vzn,
  Czn = j(() => {
    izn();
    cor();
    ((pia = dia.native),
      (hve = {
        lstatSync: uia,
        readdir: cia,
        readdirSync: lia,
        readlinkSync: mia,
        realpathSync: pia,
        promises: { lstat: hia, readdir: gia, readlink: bia, realpath: Aia },
      }),
      (pzn = (t) =>
        !t || t === hve || t === fia ? hve : { ...hve, ...t, promises: { ...hve.promises, ...(t.promises || {}) } }),
      (hzn = /^\\\\\?\\([a-z]:)\\?$/i),
      (yia = (t) => t.replace(/\//g, "\\").replace(hzn, "$1\\")),
      (_ia = /[\\\/]/),
      (QE = 0),
      (gzn = 1),
      (bzn = 2),
      (AD = 4),
      (Azn = 6),
      (yzn = 8),
      (xz = 10),
      (_zn = 12),
      (jE = 15),
      (pve = ~jE),
      (lor = 16),
      (lzn = 32),
      (gve = 64),
      (pS = 128),
      (oit = 256),
      (ait = 512),
      (mzn = gve | pS | ait),
      (Eia = 1023),
      (mor = (t) =>
        t.isFile()
          ? yzn
          : t.isDirectory()
            ? AD
            : t.isSymbolicLink()
              ? xz
              : t.isCharacterDevice()
                ? bzn
                : t.isBlockDevice()
                  ? Azn
                  : t.isSocket()
                    ? _zn
                    : t.isFIFO()
                      ? gzn
                      : QE),
      (dzn = new Map()),
      (bve = (t) => {
        let e = dzn.get(t);
        if (e) return e;
        let r = t.normalize("NFKD");
        return (dzn.set(t, r), r);
      }),
      (fzn = new Map()),
      (sit = (t) => {
        let e = fzn.get(t);
        if (e) return e;
        let r = bve(t.toLowerCase());
        return (fzn.set(t, r), r);
      }),
      (uit = class extends cve {
        constructor() {
          super({ max: 256 });
        }
      }),
      (por = class extends cve {
        constructor(e = 16 * 1024) {
          super({ maxSize: e, sizeCalculation: (r) => r.length + 1 });
        }
      }),
      (Ezn = Symbol("PathScurry setAsCwd")),
      (uA = class {
        name;
        root;
        roots;
        parent;
        nocase;
        isCWD = !1;
        #e;
        #t;
        get dev() {
          return this.#t;
        }
        #r;
        get mode() {
          return this.#r;
        }
        #n;
        get nlink() {
          return this.#n;
        }
        #i;
        get uid() {
          return this.#i;
        }
        #o;
        get gid() {
          return this.#o;
        }
        #u;
        get rdev() {
          return this.#u;
        }
        #a;
        get blksize() {
          return this.#a;
        }
        #s;
        get ino() {
          return this.#s;
        }
        #l;
        get size() {
          return this.#l;
        }
        #c;
        get blocks() {
          return this.#c;
        }
        #p;
        get atimeMs() {
          return this.#p;
        }
        #f;
        get mtimeMs() {
          return this.#f;
        }
        #h;
        get ctimeMs() {
          return this.#h;
        }
        #g;
        get birthtimeMs() {
          return this.#g;
        }
        #E;
        get atime() {
          return this.#E;
        }
        #b;
        get mtime() {
          return this.#b;
        }
        #v;
        get ctime() {
          return this.#v;
        }
        #S;
        get birthtime() {
          return this.#S;
        }
        #_;
        #C;
        #w;
        #A;
        #R;
        #I;
        #m;
        #L;
        #y;
        #O;
        get parentPath() {
          return (this.parent || this).fullpath();
        }
        get path() {
          return this.parentPath;
        }
        constructor(e, r = QE, n, o, s, a, u) {
          ((this.name = e),
            (this.#_ = s ? sit(e) : bve(e)),
            (this.#m = r & Eia),
            (this.nocase = s),
            (this.roots = o),
            (this.root = n || this),
            (this.#L = a),
            (this.#w = u.fullpath),
            (this.#R = u.relative),
            (this.#I = u.relativePosix),
            (this.parent = u.parent),
            this.parent ? (this.#e = this.parent.#e) : (this.#e = pzn(u.fs)));
        }
        depth() {
          return this.#C !== void 0 ? this.#C : this.parent ? (this.#C = this.parent.depth() + 1) : (this.#C = 0);
        }
        childrenCache() {
          return this.#L;
        }
        resolve(e) {
          if (!e) return this;
          let r = this.getRootString(e),
            o = e.substring(r.length).split(this.splitSep);
          return r ? this.getRoot(r).#k(o) : this.#k(o);
        }
        #k(e) {
          let r = this;
          for (let n of e) r = r.child(n);
          return r;
        }
        children() {
          let e = this.#L.get(this);
          if (e) return e;
          let r = Object.assign([], { provisional: 0 });
          return (this.#L.set(this, r), (this.#m &= ~lor), r);
        }
        child(e, r) {
          if (e === "" || e === ".") return this;
          if (e === "..") return this.parent || this;
          let n = this.children(),
            o = this.nocase ? sit(e) : bve(e);
          for (let c of n) if (c.#_ === o) return c;
          let s = this.parent ? this.sep : "",
            a = this.#w ? this.#w + s + e : void 0,
            u = this.newChild(e, QE, { ...r, parent: this, fullpath: a });
          return (this.canReaddir() || (u.#m |= pS), n.push(u), u);
        }
        relative() {
          if (this.isCWD) return "";
          if (this.#R !== void 0) return this.#R;
          let e = this.name,
            r = this.parent;
          if (!r) return (this.#R = this.name);
          let n = r.relative();
          return n + (!n || !r.parent ? "" : this.sep) + e;
        }
        relativePosix() {
          if (this.sep === "/") return this.relative();
          if (this.isCWD) return "";
          if (this.#I !== void 0) return this.#I;
          let e = this.name,
            r = this.parent;
          if (!r) return (this.#I = this.fullpathPosix());
          let n = r.relativePosix();
          return n + (!n || !r.parent ? "" : "/") + e;
        }
        fullpath() {
          if (this.#w !== void 0) return this.#w;
          let e = this.name,
            r = this.parent;
          if (!r) return (this.#w = this.name);
          let o = r.fullpath() + (r.parent ? this.sep : "") + e;
          return (this.#w = o);
        }
        fullpathPosix() {
          if (this.#A !== void 0) return this.#A;
          if (this.sep === "/") return (this.#A = this.fullpath());
          if (!this.parent) {
            let o = this.fullpath().replace(/\\/g, "/");
            return /^[a-z]:\//i.test(o) ? (this.#A = `//?/${o}`) : (this.#A = o);
          }
          let e = this.parent,
            r = e.fullpathPosix(),
            n = r + (!r || !e.parent ? "" : "/") + this.name;
          return (this.#A = n);
        }
        isUnknown() {
          return (this.#m & jE) === QE;
        }
        isType(e) {
          return this[`is${e}`]();
        }
        getType() {
          return this.isUnknown()
            ? "Unknown"
            : this.isDirectory()
              ? "Directory"
              : this.isFile()
                ? "File"
                : this.isSymbolicLink()
                  ? "SymbolicLink"
                  : this.isFIFO()
                    ? "FIFO"
                    : this.isCharacterDevice()
                      ? "CharacterDevice"
                      : this.isBlockDevice()
                        ? "BlockDevice"
                        : this.isSocket()
                          ? "Socket"
                          : "Unknown";
        }
        isFile() {
          return (this.#m & jE) === yzn;
        }
        isDirectory() {
          return (this.#m & jE) === AD;
        }
        isCharacterDevice() {
          return (this.#m & jE) === bzn;
        }
        isBlockDevice() {
          return (this.#m & jE) === Azn;
        }
        isFIFO() {
          return (this.#m & jE) === gzn;
        }
        isSocket() {
          return (this.#m & jE) === _zn;
        }
        isSymbolicLink() {
          return (this.#m & xz) === xz;
        }
        lstatCached() {
          return this.#m & lzn ? this : void 0;
        }
        readlinkCached() {
          return this.#y;
        }
        realpathCached() {
          return this.#O;
        }
        readdirCached() {
          let e = this.children();
          return e.slice(0, e.provisional);
        }
        canReadlink() {
          if (this.#y) return !0;
          if (!this.parent) return !1;
          let e = this.#m & jE;
          return !((e !== QE && e !== xz) || this.#m & oit || this.#m & pS);
        }
        calledReaddir() {
          return !!(this.#m & lor);
        }
        isENOENT() {
          return !!(this.#m & pS);
        }
        isNamed(e) {
          return this.nocase ? this.#_ === sit(e) : this.#_ === bve(e);
        }
        async readlink() {
          let e = this.#y;
          if (e) return e;
          if (this.canReadlink() && this.parent)
            try {
              let r = await this.#e.promises.readlink(this.fullpath()),
                n = (await this.parent.realpath())?.resolve(r);
              if (n) return (this.#y = n);
            } catch (r) {
              this.#d(r.code);
              return;
            }
        }
        readlinkSync() {
          let e = this.#y;
          if (e) return e;
          if (this.canReadlink() && this.parent)
            try {
              let r = this.#e.readlinkSync(this.fullpath()),
                n = this.parent.realpathSync()?.resolve(r);
              if (n) return (this.#y = n);
            } catch (r) {
              this.#d(r.code);
              return;
            }
        }
        #N(e) {
          this.#m |= lor;
          for (let r = e.provisional; r < e.length; r++) {
            let n = e[r];
            n && n.#M();
          }
        }
        #M() {
          this.#m & pS || ((this.#m = (this.#m | pS) & pve), this.#x());
        }
        #x() {
          let e = this.children();
          e.provisional = 0;
          for (let r of e) r.#M();
        }
        #T() {
          ((this.#m |= ait), this.#F());
        }
        #F() {
          if (this.#m & gve) return;
          let e = this.#m;
          ((e & jE) === AD && (e &= pve), (this.#m = e | gve), this.#x());
        }
        #P(e = "") {
          e === "ENOTDIR" || e === "EPERM" ? this.#F() : e === "ENOENT" ? this.#M() : (this.children().provisional = 0);
        }
        #U(e = "") {
          e === "ENOTDIR" ? this.parent.#F() : e === "ENOENT" && this.#M();
        }
        #d(e = "") {
          let r = this.#m;
          ((r |= oit),
            e === "ENOENT" && (r |= pS),
            (e === "EINVAL" || e === "UNKNOWN") && (r &= pve),
            (this.#m = r),
            e === "ENOTDIR" && this.parent && this.parent.#F());
        }
        #$(e, r) {
          return this.#D(e, r) || this.#B(e, r);
        }
        #B(e, r) {
          let n = mor(e),
            o = this.newChild(e.name, n, { parent: this }),
            s = o.#m & jE;
          return (s !== AD && s !== xz && s !== QE && (o.#m |= gve), r.unshift(o), r.provisional++, o);
        }
        #D(e, r) {
          for (let n = r.provisional; n < r.length; n++) {
            let o = r[n];
            if ((this.nocase ? sit(e.name) : bve(e.name)) === o.#_) return this.#j(e, o, n, r);
          }
        }
        #j(e, r, n, o) {
          let s = r.name;
          return (
            (r.#m = (r.#m & pve) | mor(e)),
            s !== e.name && (r.name = e.name),
            n !== o.provisional && (n === o.length - 1 ? o.pop() : o.splice(n, 1), o.unshift(r)),
            o.provisional++,
            r
          );
        }
        async lstat() {
          if ((this.#m & pS) === 0)
            try {
              return (this.#H(await this.#e.promises.lstat(this.fullpath())), this);
            } catch (e) {
              this.#U(e.code);
            }
        }
        lstatSync() {
          if ((this.#m & pS) === 0)
            try {
              return (this.#H(this.#e.lstatSync(this.fullpath())), this);
            } catch (e) {
              this.#U(e.code);
            }
        }
        #H(e) {
          let {
            atime: r,
            atimeMs: n,
            birthtime: o,
            birthtimeMs: s,
            blksize: a,
            blocks: u,
            ctime: c,
            ctimeMs: m,
            dev: d,
            gid: f,
            ino: p,
            mode: h,
            mtime: g,
            mtimeMs: b,
            nlink: A,
            rdev: y,
            size: E,
            uid: v,
          } = e;
          ((this.#E = r),
            (this.#p = n),
            (this.#S = o),
            (this.#g = s),
            (this.#a = a),
            (this.#c = u),
            (this.#v = c),
            (this.#h = m),
            (this.#t = d),
            (this.#o = f),
            (this.#s = p),
            (this.#r = h),
            (this.#b = g),
            (this.#f = b),
            (this.#n = A),
            (this.#u = y),
            (this.#l = E),
            (this.#i = v));
          let C = mor(e);
          ((this.#m = (this.#m & pve) | C | lzn), C !== QE && C !== AD && C !== xz && (this.#m |= gve));
        }
        #G = [];
        #q = !1;
        #V(e) {
          this.#q = !1;
          let r = this.#G.slice();
          ((this.#G.length = 0), r.forEach((n) => n(null, e)));
        }
        readdirCB(e, r = !1) {
          if (!this.canReaddir()) {
            r ? e(null, []) : queueMicrotask(() => e(null, []));
            return;
          }
          let n = this.children();
          if (this.calledReaddir()) {
            let s = n.slice(0, n.provisional);
            r ? e(null, s) : queueMicrotask(() => e(null, s));
            return;
          }
          if ((this.#G.push(e), this.#q)) return;
          this.#q = !0;
          let o = this.fullpath();
          this.#e.readdir(o, { withFileTypes: !0 }, (s, a) => {
            if (s) (this.#P(s.code), (n.provisional = 0));
            else {
              for (let u of a) this.#$(u, n);
              this.#N(n);
            }
            this.#V(n.slice(0, n.provisional));
          });
        }
        #Q;
        async readdir() {
          if (!this.canReaddir()) return [];
          let e = this.children();
          if (this.calledReaddir()) return e.slice(0, e.provisional);
          let r = this.fullpath();
          if (this.#Q) await this.#Q;
          else {
            let n = () => {};
            this.#Q = new Promise((o) => (n = o));
            try {
              for (let o of await this.#e.promises.readdir(r, { withFileTypes: !0 })) this.#$(o, e);
              this.#N(e);
            } catch (o) {
              (this.#P(o.code), (e.provisional = 0));
            }
            ((this.#Q = void 0), n());
          }
          return e.slice(0, e.provisional);
        }
        readdirSync() {
          if (!this.canReaddir()) return [];
          let e = this.children();
          if (this.calledReaddir()) return e.slice(0, e.provisional);
          let r = this.fullpath();
          try {
            for (let n of this.#e.readdirSync(r, { withFileTypes: !0 })) this.#$(n, e);
            this.#N(e);
          } catch (n) {
            (this.#P(n.code), (e.provisional = 0));
          }
          return e.slice(0, e.provisional);
        }
        canReaddir() {
          if (this.#m & mzn) return !1;
          let e = jE & this.#m;
          return e === QE || e === AD || e === xz;
        }
        shouldWalk(e, r) {
          return (this.#m & AD) === AD && !(this.#m & mzn) && !e.has(this) && (!r || r(this));
        }
        async realpath() {
          if (this.#O) return this.#O;
          if (!((ait | oit | pS) & this.#m))
            try {
              let e = await this.#e.promises.realpath(this.fullpath());
              return (this.#O = this.resolve(e));
            } catch {
              this.#T();
            }
        }
        realpathSync() {
          if (this.#O) return this.#O;
          if (!((ait | oit | pS) & this.#m))
            try {
              let e = this.#e.realpathSync(this.fullpath());
              return (this.#O = this.resolve(e));
            } catch {
              this.#T();
            }
        }
        [Ezn](e) {
          if (e === this) return;
          ((e.isCWD = !1), (this.isCWD = !0));
          let r = new Set([]),
            n = [],
            o = this;
          for (; o && o.parent; )
            (r.add(o), (o.#R = n.join(this.sep)), (o.#I = n.join("/")), (o = o.parent), n.push(".."));
          for (o = e; o && o.parent && !r.has(o); ) ((o.#R = void 0), (o.#I = void 0), (o = o.parent));
        }
      }),
      (cit = class t extends uA {
        sep = "\\";
        splitSep = _ia;
        constructor(e, r = QE, n, o, s, a, u) {
          super(e, r, n, o, s, a, u);
        }
        newChild(e, r = QE, n = {}) {
          return new t(e, r, this.root, this.roots, this.nocase, this.childrenCache(), n);
        }
        getRootString(e) {
          return dor.parse(e).root;
        }
        getRoot(e) {
          if (((e = yia(e.toUpperCase())), e === this.root.name)) return this.root;
          for (let [r, n] of Object.entries(this.roots)) if (this.sameRoot(e, r)) return (this.roots[e] = n);
          return (this.roots[e] = new Vce(e, this).root);
        }
        sameRoot(e, r = this.root.name) {
          return ((e = e.toUpperCase().replace(/\//g, "\\").replace(hzn, "$1\\")), e === r);
        }
      }),
      (lit = class t extends uA {
        splitSep = "/";
        sep = "/";
        constructor(e, r = QE, n, o, s, a, u) {
          super(e, r, n, o, s, a, u);
        }
        getRootString(e) {
          return e.startsWith("/") ? "/" : "";
        }
        getRoot(e) {
          return this.root;
        }
        newChild(e, r = QE, n = {}) {
          return new t(e, r, this.root, this.roots, this.nocase, this.childrenCache(), n);
        }
      }),
      (mit = class {
        root;
        rootPath;
        roots;
        cwd;
        #e;
        #t;
        #r;
        nocase;
        #n;
        constructor(e = process.cwd(), r, n, { nocase: o, childrenCacheSize: s = 16 * 1024, fs: a = hve } = {}) {
          ((this.#n = pzn(a)), (e instanceof URL || e.startsWith("file://")) && (e = aia(e)));
          let u = r.resolve(e);
          ((this.roots = Object.create(null)),
            (this.rootPath = this.parseRootPath(u)),
            (this.#e = new uit()),
            (this.#t = new uit()),
            (this.#r = new por(s)));
          let c = u.substring(this.rootPath.length).split(n);
          if ((c.length === 1 && !c[0] && c.pop(), o === void 0))
            throw new TypeError("must provide nocase setting to PathScurryBase ctor");
          ((this.nocase = o), (this.root = this.newRoot(this.#n)), (this.roots[this.rootPath] = this.root));
          let m = this.root,
            d = c.length - 1,
            f = r.sep,
            p = this.rootPath,
            h = !1;
          for (let g of c) {
            let b = d--;
            ((m = m.child(g, {
              relative: new Array(b).fill("..").join(f),
              relativePosix: new Array(b).fill("..").join("/"),
              fullpath: (p += (h ? "" : f) + g),
            })),
              (h = !0));
          }
          this.cwd = m;
        }
        depth(e = this.cwd) {
          return (typeof e == "string" && (e = this.cwd.resolve(e)), e.depth());
        }
        childrenCache() {
          return this.#r;
        }
        resolve(...e) {
          let r = "";
          for (let s = e.length - 1; s >= 0; s--) {
            let a = e[s];
            if (!(!a || a === ".") && ((r = r ? `${a}/${r}` : a), this.isAbsolute(a))) break;
          }
          let n = this.#e.get(r);
          if (n !== void 0) return n;
          let o = this.cwd.resolve(r).fullpath();
          return (this.#e.set(r, o), o);
        }
        resolvePosix(...e) {
          let r = "";
          for (let s = e.length - 1; s >= 0; s--) {
            let a = e[s];
            if (!(!a || a === ".") && ((r = r ? `${a}/${r}` : a), this.isAbsolute(a))) break;
          }
          let n = this.#t.get(r);
          if (n !== void 0) return n;
          let o = this.cwd.resolve(r).fullpathPosix();
          return (this.#t.set(r, o), o);
        }
        relative(e = this.cwd) {
          return (typeof e == "string" && (e = this.cwd.resolve(e)), e.relative());
        }
        relativePosix(e = this.cwd) {
          return (typeof e == "string" && (e = this.cwd.resolve(e)), e.relativePosix());
        }
        basename(e = this.cwd) {
          return (typeof e == "string" && (e = this.cwd.resolve(e)), e.name);
        }
        dirname(e = this.cwd) {
          return (typeof e == "string" && (e = this.cwd.resolve(e)), (e.parent || e).fullpath());
        }
        async readdir(e = this.cwd, r = { withFileTypes: !0 }) {
          typeof e == "string" ? (e = this.cwd.resolve(e)) : e instanceof uA || ((r = e), (e = this.cwd));
          let { withFileTypes: n } = r;
          if (e.canReaddir()) {
            let o = await e.readdir();
            return n ? o : o.map((s) => s.name);
          } else return [];
        }
        readdirSync(e = this.cwd, r = { withFileTypes: !0 }) {
          typeof e == "string" ? (e = this.cwd.resolve(e)) : e instanceof uA || ((r = e), (e = this.cwd));
          let { withFileTypes: n = !0 } = r;
          return e.canReaddir() ? (n ? e.readdirSync() : e.readdirSync().map((o) => o.name)) : [];
        }
        async lstat(e = this.cwd) {
          return (typeof e == "string" && (e = this.cwd.resolve(e)), e.lstat());
        }
        lstatSync(e = this.cwd) {
          return (typeof e == "string" && (e = this.cwd.resolve(e)), e.lstatSync());
        }
        async readlink(e = this.cwd, { withFileTypes: r } = { withFileTypes: !1 }) {
          typeof e == "string" ? (e = this.cwd.resolve(e)) : e instanceof uA || ((r = e.withFileTypes), (e = this.cwd));
          let n = await e.readlink();
          return r ? n : n?.fullpath();
        }
        readlinkSync(e = this.cwd, { withFileTypes: r } = { withFileTypes: !1 }) {
          typeof e == "string" ? (e = this.cwd.resolve(e)) : e instanceof uA || ((r = e.withFileTypes), (e = this.cwd));
          let n = e.readlinkSync();
          return r ? n : n?.fullpath();
        }
        async realpath(e = this.cwd, { withFileTypes: r } = { withFileTypes: !1 }) {
          typeof e == "string" ? (e = this.cwd.resolve(e)) : e instanceof uA || ((r = e.withFileTypes), (e = this.cwd));
          let n = await e.realpath();
          return r ? n : n?.fullpath();
        }
        realpathSync(e = this.cwd, { withFileTypes: r } = { withFileTypes: !1 }) {
          typeof e == "string" ? (e = this.cwd.resolve(e)) : e instanceof uA || ((r = e.withFileTypes), (e = this.cwd));
          let n = e.realpathSync();
          return r ? n : n?.fullpath();
        }
        async walk(e = this.cwd, r = {}) {
          typeof e == "string" ? (e = this.cwd.resolve(e)) : e instanceof uA || ((r = e), (e = this.cwd));
          let { withFileTypes: n = !0, follow: o = !1, filter: s, walkFilter: a } = r,
            u = [];
          (!s || s(e)) && u.push(n ? e : e.fullpath());
          let c = new Set(),
            m = (f, p) => {
              (c.add(f),
                f.readdirCB((h, g) => {
                  if (h) return p(h);
                  let b = g.length;
                  if (!b) return p();
                  let A = () => {
                    --b === 0 && p();
                  };
                  for (let y of g)
                    ((!s || s(y)) && u.push(n ? y : y.fullpath()),
                      o && y.isSymbolicLink()
                        ? y
                            .realpath()
                            .then((E) => (E?.isUnknown() ? E.lstat() : E))
                            .then((E) => (E?.shouldWalk(c, a) ? m(E, A) : A()))
                        : y.shouldWalk(c, a)
                          ? m(y, A)
                          : A());
                }, !0));
            },
            d = e;
          return new Promise((f, p) => {
            m(d, (h) => {
              if (h) return p(h);
              f(u);
            });
          });
        }
        walkSync(e = this.cwd, r = {}) {
          typeof e == "string" ? (e = this.cwd.resolve(e)) : e instanceof uA || ((r = e), (e = this.cwd));
          let { withFileTypes: n = !0, follow: o = !1, filter: s, walkFilter: a } = r,
            u = [];
          (!s || s(e)) && u.push(n ? e : e.fullpath());
          let c = new Set([e]);
          for (let m of c) {
            let d = m.readdirSync();
            for (let f of d) {
              (!s || s(f)) && u.push(n ? f : f.fullpath());
              let p = f;
              if (f.isSymbolicLink()) {
                if (!(o && (p = f.realpathSync()))) continue;
                p.isUnknown() && p.lstatSync();
              }
              p.shouldWalk(c, a) && c.add(p);
            }
          }
          return u;
        }
        [Symbol.asyncIterator]() {
          return this.iterate();
        }
        iterate(e = this.cwd, r = {}) {
          return (
            typeof e == "string" ? (e = this.cwd.resolve(e)) : e instanceof uA || ((r = e), (e = this.cwd)),
            this.stream(e, r)[Symbol.asyncIterator]()
          );
        }
        [Symbol.iterator]() {
          return this.iterateSync();
        }
        *iterateSync(e = this.cwd, r = {}) {
          typeof e == "string" ? (e = this.cwd.resolve(e)) : e instanceof uA || ((r = e), (e = this.cwd));
          let { withFileTypes: n = !0, follow: o = !1, filter: s, walkFilter: a } = r;
          (!s || s(e)) && (yield n ? e : e.fullpath());
          let u = new Set([e]);
          for (let c of u) {
            let m = c.readdirSync();
            for (let d of m) {
              (!s || s(d)) && (yield n ? d : d.fullpath());
              let f = d;
              if (d.isSymbolicLink()) {
                if (!(o && (f = d.realpathSync()))) continue;
                f.isUnknown() && f.lstatSync();
              }
              f.shouldWalk(u, a) && u.add(f);
            }
          }
        }
        stream(e = this.cwd, r = {}) {
          typeof e == "string" ? (e = this.cwd.resolve(e)) : e instanceof uA || ((r = e), (e = this.cwd));
          let { withFileTypes: n = !0, follow: o = !1, filter: s, walkFilter: a } = r,
            u = new sU({ objectMode: !0 });
          (!s || s(e)) && u.write(n ? e : e.fullpath());
          let c = new Set(),
            m = [e],
            d = 0,
            f = () => {
              let p = !1;
              for (; !p; ) {
                let h = m.shift();
                if (!h) {
                  d === 0 && u.end();
                  return;
                }
                (d++, c.add(h));
                let g = (A, y, E = !1) => {
                    if (A) return u.emit("error", A);
                    if (o && !E) {
                      let v = [];
                      for (let C of y)
                        C.isSymbolicLink() && v.push(C.realpath().then((x) => (x?.isUnknown() ? x.lstat() : x)));
                      if (v.length) {
                        Promise.all(v).then(() => g(null, y, !0));
                        return;
                      }
                    }
                    for (let v of y) v && (!s || s(v)) && (u.write(n ? v : v.fullpath()) || (p = !0));
                    d--;
                    for (let v of y) {
                      let C = v.realpathCached() || v;
                      C.shouldWalk(c, a) && m.push(C);
                    }
                    p && !u.flowing ? u.once("drain", f) : b || f();
                  },
                  b = !0;
                (h.readdirCB(g, !0), (b = !1));
              }
            };
          return (f(), u);
        }
        streamSync(e = this.cwd, r = {}) {
          typeof e == "string" ? (e = this.cwd.resolve(e)) : e instanceof uA || ((r = e), (e = this.cwd));
          let { withFileTypes: n = !0, follow: o = !1, filter: s, walkFilter: a } = r,
            u = new sU({ objectMode: !0 }),
            c = new Set();
          (!s || s(e)) && u.write(n ? e : e.fullpath());
          let m = [e],
            d = 0,
            f = () => {
              let p = !1;
              for (; !p; ) {
                let h = m.shift();
                if (!h) {
                  d === 0 && u.end();
                  return;
                }
                (d++, c.add(h));
                let g = h.readdirSync();
                for (let b of g) (!s || s(b)) && (u.write(n ? b : b.fullpath()) || (p = !0));
                d--;
                for (let b of g) {
                  let A = b;
                  if (b.isSymbolicLink()) {
                    if (!(o && (A = b.realpathSync()))) continue;
                    A.isUnknown() && A.lstatSync();
                  }
                  A.shouldWalk(c, a) && m.push(A);
                }
              }
              p && !u.flowing && u.once("drain", f);
            };
          return (f(), u);
        }
        chdir(e = this.cwd) {
          let r = this.cwd;
          ((this.cwd = typeof e == "string" ? this.cwd.resolve(e) : e), this.cwd[Ezn](r));
        }
      }),
      (Vce = class extends mit {
        sep = "\\";
        constructor(e = process.cwd(), r = {}) {
          let { nocase: n = !0 } = r;
          (super(e, dor, "\\", { ...r, nocase: n }), (this.nocase = n));
          for (let o = this.cwd; o; o = o.parent) o.nocase = this.nocase;
        }
        parseRootPath(e) {
          return dor.parse(e).root.toUpperCase();
        }
        newRoot(e) {
          return new cit(this.rootPath, AD, void 0, this.roots, this.nocase, this.childrenCache(), { fs: e });
        }
        isAbsolute(e) {
          return e.startsWith("/") || e.startsWith("\\") || /^[a-z]:(\/|\\)/i.test(e);
        }
      }),
      (Wce = class extends mit {
        sep = "/";
        constructor(e = process.cwd(), r = {}) {
          let { nocase: n = !1 } = r;
          (super(e, sia, "/", { ...r, nocase: n }), (this.nocase = n));
        }
        parseRootPath(e) {
          return "/";
        }
        newRoot(e) {
          return new lit(this.rootPath, AD, void 0, this.roots, this.nocase, this.childrenCache(), { fs: e });
        }
        isAbsolute(e) {
          return e.startsWith("/");
        }
      }),
      (Ave = class extends Wce {
        constructor(e = process.cwd(), r = {}) {
          let { nocase: n = !0 } = r;
          super(e, { ...r, nocase: n });
        }
      }),
      ($_c = process.platform === "win32" ? cit : lit),
      (vzn = process.platform === "win32" ? Vce : process.platform === "darwin" ? Ave : Wce));
  });
var via,
  Cia,
  zce,
  hor = j(() => {
    nU();
    ((via = (t) => t.length >= 1),
      (Cia = (t) => t.length >= 1),
      (zce = class t {
        #e;
        #t;
        #r;
        length;
        #n;
        #i;
        #o;
        #u;
        #a;
        #s;
        #l = !0;
        constructor(e, r, n, o) {
          if (!via(e)) throw new TypeError("empty pattern list");
          if (!Cia(r)) throw new TypeError("empty glob list");
          if (r.length !== e.length) throw new TypeError("mismatched pattern list and glob list lengths");
          if (((this.length = e.length), n < 0 || n >= this.length)) throw new TypeError("index out of range");
          if (((this.#e = e), (this.#t = r), (this.#r = n), (this.#n = o), this.#r === 0)) {
            if (this.isUNC()) {
              let [s, a, u, c, ...m] = this.#e,
                [d, f, p, h, ...g] = this.#t;
              m[0] === "" && (m.shift(), g.shift());
              let b = [s, a, u, c, ""].join("/"),
                A = [d, f, p, h, ""].join("/");
              ((this.#e = [b, ...m]), (this.#t = [A, ...g]), (this.length = this.#e.length));
            } else if (this.isDrive() || this.isAbsolute()) {
              let [s, ...a] = this.#e,
                [u, ...c] = this.#t;
              a[0] === "" && (a.shift(), c.shift());
              let m = s + "/",
                d = u + "/";
              ((this.#e = [m, ...a]), (this.#t = [d, ...c]), (this.length = this.#e.length));
            }
          }
        }
        pattern() {
          return this.#e[this.#r];
        }
        isString() {
          return typeof this.#e[this.#r] == "string";
        }
        isGlobstar() {
          return this.#e[this.#r] === $g;
        }
        isRegExp() {
          return this.#e[this.#r] instanceof RegExp;
        }
        globString() {
          return (this.#o =
            this.#o ||
            (this.#r === 0
              ? this.isAbsolute()
                ? this.#t[0] + this.#t.slice(1).join("/")
                : this.#t.join("/")
              : this.#t.slice(this.#r).join("/")));
        }
        hasMore() {
          return this.length > this.#r + 1;
        }
        rest() {
          return this.#i !== void 0
            ? this.#i
            : this.hasMore()
              ? ((this.#i = new t(this.#e, this.#t, this.#r + 1, this.#n)),
                (this.#i.#s = this.#s),
                (this.#i.#a = this.#a),
                (this.#i.#u = this.#u),
                this.#i)
              : (this.#i = null);
        }
        isUNC() {
          let e = this.#e;
          return this.#a !== void 0
            ? this.#a
            : (this.#a =
                this.#n === "win32" &&
                this.#r === 0 &&
                e[0] === "" &&
                e[1] === "" &&
                typeof e[2] == "string" &&
                !!e[2] &&
                typeof e[3] == "string" &&
                !!e[3]);
        }
        isDrive() {
          let e = this.#e;
          return this.#u !== void 0
            ? this.#u
            : (this.#u =
                this.#n === "win32" &&
                this.#r === 0 &&
                this.length > 1 &&
                typeof e[0] == "string" &&
                /^[a-z]:$/i.test(e[0]));
        }
        isAbsolute() {
          let e = this.#e;
          return this.#s !== void 0
            ? this.#s
            : (this.#s = (e[0] === "" && e.length > 1) || this.isDrive() || this.isUNC());
        }
        root() {
          let e = this.#e[0];
          return typeof e == "string" && this.isAbsolute() && this.#r === 0 ? e : "";
        }
        checkFollowGlobstar() {
          return !(this.#r === 0 || !this.isGlobstar() || !this.#l);
        }
        markFollowGlobstar() {
          return this.#r === 0 || !this.isGlobstar() || !this.#l ? !1 : ((this.#l = !1), !0);
        }
      }));
  });
var Sia,
  Tz,
  gor = j(() => {
    nU();
    hor();
    ((Sia = typeof process == "object" && process && typeof process.platform == "string" ? process.platform : "linux"),
      (Tz = class {
        relative;
        relativeChildren;
        absolute;
        absoluteChildren;
        platform;
        mmopts;
        constructor(e, { nobrace: r, nocase: n, noext: o, noglobstar: s, platform: a = Sia }) {
          ((this.relative = []),
            (this.absolute = []),
            (this.relativeChildren = []),
            (this.absoluteChildren = []),
            (this.platform = a),
            (this.mmopts = {
              dot: !0,
              nobrace: r,
              nocase: n,
              noext: o,
              noglobstar: s,
              optimizationLevel: 2,
              platform: a,
              nocomment: !0,
              nonegate: !0,
            }));
          for (let u of e) this.add(u);
        }
        add(e) {
          let r = new Q6(e, this.mmopts);
          for (let n = 0; n < r.set.length; n++) {
            let o = r.set[n],
              s = r.globParts[n];
            if (!o || !s) throw new Error("invalid pattern object");
            for (; o[0] === "." && s[0] === "."; ) (o.shift(), s.shift());
            let a = new zce(o, s, 0, this.platform),
              u = new Q6(a.globString(), this.mmopts),
              c = s[s.length - 1] === "**",
              m = a.isAbsolute();
            (m ? this.absolute.push(u) : this.relative.push(u),
              c && (m ? this.absoluteChildren.push(u) : this.relativeChildren.push(u)));
          }
        }
        ignored(e) {
          let r = e.fullpath(),
            n = `${r}/`,
            o = e.relative() || ".",
            s = `${o}/`;
          for (let a of this.relative) if (a.match(o) || a.match(s)) return !0;
          for (let a of this.absolute) if (a.match(r) || a.match(n)) return !0;
          return !1;
        }
        childrenIgnored(e) {
          let r = e.fullpath() + "/",
            n = (e.relative() || ".") + "/";
          for (let o of this.relativeChildren) if (o.match(n)) return !0;
          for (let o of this.absoluteChildren) if (o.match(r)) return !0;
          return !1;
        }
      }));
  });
var bor,
  Aor,
  yor,
  yve,
  Szn = j(() => {
    nU();
    ((bor = class t {
      store;
      constructor(e = new Map()) {
        this.store = e;
      }
      copy() {
        return new t(new Map(this.store));
      }
      hasWalked(e, r) {
        return this.store.get(e.fullpath())?.has(r.globString());
      }
      storeWalked(e, r) {
        let n = e.fullpath(),
          o = this.store.get(n);
        o ? o.add(r.globString()) : this.store.set(n, new Set([r.globString()]));
      }
    }),
      (Aor = class {
        store = new Map();
        add(e, r, n) {
          let o = (r ? 2 : 0) | (n ? 1 : 0),
            s = this.store.get(e);
          this.store.set(e, s === void 0 ? o : o & s);
        }
        entries() {
          return [...this.store.entries()].map(([e, r]) => [e, !!(r & 2), !!(r & 1)]);
        }
      }),
      (yor = class {
        store = new Map();
        add(e, r) {
          if (!e.canReaddir()) return;
          let n = this.store.get(e);
          n ? n.find((o) => o.globString() === r.globString()) || n.push(r) : this.store.set(e, [r]);
        }
        get(e) {
          let r = this.store.get(e);
          if (!r) throw new Error("attempting to walk unknown path");
          return r;
        }
        entries() {
          return this.keys().map((e) => [e, this.store.get(e)]);
        }
        keys() {
          return [...this.store.keys()].filter((e) => e.canReaddir());
        }
      }),
      (yve = class t {
        hasWalkedCache;
        matches = new Aor();
        subwalks = new yor();
        patterns;
        follow;
        dot;
        opts;
        constructor(e, r) {
          ((this.opts = e),
            (this.follow = !!e.follow),
            (this.dot = !!e.dot),
            (this.hasWalkedCache = r ? r.copy() : new bor()));
        }
        processPatterns(e, r) {
          this.patterns = r;
          let n = r.map((o) => [e, o]);
          for (let [o, s] of n) {
            this.hasWalkedCache.storeWalked(o, s);
            let a = s.root(),
              u = s.isAbsolute() && this.opts.absolute !== !1;
            if (a) {
              o = o.resolve(a === "/" && this.opts.root !== void 0 ? this.opts.root : a);
              let f = s.rest();
              if (f) s = f;
              else {
                this.matches.add(o, !0, !1);
                continue;
              }
            }
            if (o.isENOENT()) continue;
            let c,
              m,
              d = !1;
            for (; typeof (c = s.pattern()) == "string" && (m = s.rest()); ) ((o = o.resolve(c)), (s = m), (d = !0));
            if (((c = s.pattern()), (m = s.rest()), d)) {
              if (this.hasWalkedCache.hasWalked(o, s)) continue;
              this.hasWalkedCache.storeWalked(o, s);
            }
            if (typeof c == "string") {
              let f = c === ".." || c === "" || c === ".";
              this.matches.add(o.resolve(c), u, f);
              continue;
            } else if (c === $g) {
              (!o.isSymbolicLink() || this.follow || s.checkFollowGlobstar()) && this.subwalks.add(o, s);
              let f = m?.pattern(),
                p = m?.rest();
              if (!m || ((f === "" || f === ".") && !p)) this.matches.add(o, u, f === "" || f === ".");
              else if (f === "..") {
                let h = o.parent || o;
                p ? this.hasWalkedCache.hasWalked(h, p) || this.subwalks.add(h, p) : this.matches.add(h, u, !0);
              }
            } else c instanceof RegExp && this.subwalks.add(o, s);
          }
          return this;
        }
        subwalkTargets() {
          return this.subwalks.keys();
        }
        child() {
          return new t(this.opts, this.hasWalkedCache);
        }
        filterEntries(e, r) {
          let n = this.subwalks.get(e),
            o = this.child();
          for (let s of r)
            for (let a of n) {
              let u = a.isAbsolute(),
                c = a.pattern(),
                m = a.rest();
              c === $g
                ? o.testGlobstar(s, a, m, u)
                : c instanceof RegExp
                  ? o.testRegExp(s, c, m, u)
                  : o.testString(s, c, m, u);
            }
          return o;
        }
        testGlobstar(e, r, n, o) {
          if (
            ((this.dot || !e.name.startsWith(".")) &&
              (r.hasMore() || this.matches.add(e, o, !1),
              e.canReaddir() &&
                (this.follow || !e.isSymbolicLink()
                  ? this.subwalks.add(e, r)
                  : e.isSymbolicLink() &&
                    (n && r.checkFollowGlobstar()
                      ? this.subwalks.add(e, n)
                      : r.markFollowGlobstar() && this.subwalks.add(e, r)))),
            n)
          ) {
            let s = n.pattern();
            if (typeof s == "string" && s !== ".." && s !== "" && s !== ".") this.testString(e, s, n.rest(), o);
            else if (s === "..") {
              let a = e.parent || e;
              this.subwalks.add(a, n);
            } else s instanceof RegExp && this.testRegExp(e, s, n.rest(), o);
          }
        }
        testRegExp(e, r, n, o) {
          r.test(e.name) && (n ? this.subwalks.add(e, n) : this.matches.add(e, o, !1));
        }
        testString(e, r, n, o) {
          e.isNamed(r) && (n ? this.subwalks.add(e, n) : this.matches.add(e, o, !1));
        }
      }));
  });
var wia,
  dit,
  _ve,
  Eve,
  wzn = j(() => {
    cor();
    gor();
    Szn();
    ((wia = (t, e) => (typeof t == "string" ? new Tz([t], e) : Array.isArray(t) ? new Tz(t, e) : t)),
      (dit = class {
        path;
        patterns;
        opts;
        seen = new Set();
        paused = !1;
        aborted = !1;
        #e = [];
        #t;
        #r;
        signal;
        maxDepth;
        includeChildMatches;
        constructor(e, r, n) {
          if (
            ((this.patterns = e),
            (this.path = r),
            (this.opts = n),
            (this.#r = !n.posix && n.platform === "win32" ? "\\" : "/"),
            (this.includeChildMatches = n.includeChildMatches !== !1),
            (n.ignore || !this.includeChildMatches) &&
              ((this.#t = wia(n.ignore ?? [], n)), !this.includeChildMatches && typeof this.#t.add != "function"))
          ) {
            let o = "cannot ignore child matches, ignore lacks add() method.";
            throw new Error(o);
          }
          ((this.maxDepth = n.maxDepth || 1 / 0),
            n.signal &&
              ((this.signal = n.signal),
              this.signal.addEventListener("abort", () => {
                this.#e.length = 0;
              })));
        }
        #n(e) {
          return this.seen.has(e) || !!this.#t?.ignored?.(e);
        }
        #i(e) {
          return !!this.#t?.childrenIgnored?.(e);
        }
        pause() {
          this.paused = !0;
        }
        resume() {
          if (this.signal?.aborted) return;
          this.paused = !1;
          let e;
          for (; !this.paused && (e = this.#e.shift()); ) e();
        }
        onResume(e) {
          this.signal?.aborted || (this.paused ? this.#e.push(e) : e());
        }
        async matchCheck(e, r) {
          if (r && this.opts.nodir) return;
          let n;
          if (this.opts.realpath) {
            if (((n = e.realpathCached() || (await e.realpath())), !n)) return;
            e = n;
          }
          let s = e.isUnknown() || this.opts.stat ? await e.lstat() : e;
          if (this.opts.follow && this.opts.nodir && s?.isSymbolicLink()) {
            let a = await s.realpath();
            a && (a.isUnknown() || this.opts.stat) && (await a.lstat());
          }
          return this.matchCheckTest(s, r);
        }
        matchCheckTest(e, r) {
          return e &&
            (this.maxDepth === 1 / 0 || e.depth() <= this.maxDepth) &&
            (!r || e.canReaddir()) &&
            (!this.opts.nodir || !e.isDirectory()) &&
            (!this.opts.nodir || !this.opts.follow || !e.isSymbolicLink() || !e.realpathCached()?.isDirectory()) &&
            !this.#n(e)
            ? e
            : void 0;
        }
        matchCheckSync(e, r) {
          if (r && this.opts.nodir) return;
          let n;
          if (this.opts.realpath) {
            if (((n = e.realpathCached() || e.realpathSync()), !n)) return;
            e = n;
          }
          let s = e.isUnknown() || this.opts.stat ? e.lstatSync() : e;
          if (this.opts.follow && this.opts.nodir && s?.isSymbolicLink()) {
            let a = s.realpathSync();
            a && (a?.isUnknown() || this.opts.stat) && a.lstatSync();
          }
          return this.matchCheckTest(s, r);
        }
        matchFinish(e, r) {
          if (this.#n(e)) return;
          if (!this.includeChildMatches && this.#t?.add) {
            let s = `${e.relativePosix()}/**`;
            this.#t.add(s);
          }
          let n = this.opts.absolute === void 0 ? r : this.opts.absolute;
          this.seen.add(e);
          let o = this.opts.mark && e.isDirectory() ? this.#r : "";
          if (this.opts.withFileTypes) this.matchEmit(e);
          else if (n) {
            let s = this.opts.posix ? e.fullpathPosix() : e.fullpath();
            this.matchEmit(s + o);
          } else {
            let s = this.opts.posix ? e.relativePosix() : e.relative(),
              a = this.opts.dotRelative && !s.startsWith(".." + this.#r) ? "." + this.#r : "";
            this.matchEmit(s ? a + s + o : "." + o);
          }
        }
        async match(e, r, n) {
          let o = await this.matchCheck(e, n);
          o && this.matchFinish(o, r);
        }
        matchSync(e, r, n) {
          let o = this.matchCheckSync(e, n);
          o && this.matchFinish(o, r);
        }
        walkCB(e, r, n) {
          (this.signal?.aborted && n(), this.walkCB2(e, r, new yve(this.opts), n));
        }
        walkCB2(e, r, n, o) {
          if (this.#i(e)) return o();
          if ((this.signal?.aborted && o(), this.paused)) {
            this.onResume(() => this.walkCB2(e, r, n, o));
            return;
          }
          n.processPatterns(e, r);
          let s = 1,
            a = () => {
              --s === 0 && o();
            };
          for (let [u, c, m] of n.matches.entries()) this.#n(u) || (s++, this.match(u, c, m).then(() => a()));
          for (let u of n.subwalkTargets()) {
            if (this.maxDepth !== 1 / 0 && u.depth() >= this.maxDepth) continue;
            s++;
            let c = u.readdirCached();
            u.calledReaddir() ? this.walkCB3(u, c, n, a) : u.readdirCB((m, d) => this.walkCB3(u, d, n, a), !0);
          }
          a();
        }
        walkCB3(e, r, n, o) {
          n = n.filterEntries(e, r);
          let s = 1,
            a = () => {
              --s === 0 && o();
            };
          for (let [u, c, m] of n.matches.entries()) this.#n(u) || (s++, this.match(u, c, m).then(() => a()));
          for (let [u, c] of n.subwalks.entries()) (s++, this.walkCB2(u, c, n.child(), a));
          a();
        }
        walkCBSync(e, r, n) {
          (this.signal?.aborted && n(), this.walkCB2Sync(e, r, new yve(this.opts), n));
        }
        walkCB2Sync(e, r, n, o) {
          if (this.#i(e)) return o();
          if ((this.signal?.aborted && o(), this.paused)) {
            this.onResume(() => this.walkCB2Sync(e, r, n, o));
            return;
          }
          n.processPatterns(e, r);
          let s = 1,
            a = () => {
              --s === 0 && o();
            };
          for (let [u, c, m] of n.matches.entries()) this.#n(u) || this.matchSync(u, c, m);
          for (let u of n.subwalkTargets()) {
            if (this.maxDepth !== 1 / 0 && u.depth() >= this.maxDepth) continue;
            s++;
            let c = u.readdirSync();
            this.walkCB3Sync(u, c, n, a);
          }
          a();
        }
        walkCB3Sync(e, r, n, o) {
          n = n.filterEntries(e, r);
          let s = 1,
            a = () => {
              --s === 0 && o();
            };
          for (let [u, c, m] of n.matches.entries()) this.#n(u) || this.matchSync(u, c, m);
          for (let [u, c] of n.subwalks.entries()) (s++, this.walkCB2Sync(u, c, n.child(), a));
          a();
        }
      }),
      (_ve = class extends dit {
        matches = new Set();
        constructor(e, r, n) {
          super(e, r, n);
        }
        matchEmit(e) {
          this.matches.add(e);
        }
        async walk() {
          if (this.signal?.aborted) throw this.signal.reason;
          return (
            this.path.isUnknown() && (await this.path.lstat()),
            await new Promise((e, r) => {
              this.walkCB(this.path, this.patterns, () => {
                this.signal?.aborted ? r(this.signal.reason) : e(this.matches);
              });
            }),
            this.matches
          );
        }
        walkSync() {
          if (this.signal?.aborted) throw this.signal.reason;
          return (
            this.path.isUnknown() && this.path.lstatSync(),
            this.walkCBSync(this.path, this.patterns, () => {
              if (this.signal?.aborted) throw this.signal.reason;
            }),
            this.matches
          );
        }
      }),
      (Eve = class extends dit {
        results;
        constructor(e, r, n) {
          (super(e, r, n),
            (this.results = new sU({ signal: this.signal, objectMode: !0 })),
            this.results.on("drain", () => this.resume()),
            this.results.on("resume", () => this.resume()));
        }
        matchEmit(e) {
          (this.results.write(e), this.results.flowing || this.pause());
        }
        stream() {
          let e = this.path;
          return (
            e.isUnknown()
              ? e.lstat().then(() => {
                  this.walkCB(e, this.patterns, () => this.results.end());
                })
              : this.walkCB(e, this.patterns, () => this.results.end()),
            this.results
          );
        }
        streamSync() {
          return (
            this.path.isUnknown() && this.path.lstatSync(),
            this.walkCBSync(this.path, this.patterns, () => this.results.end()),
            this.results
          );
        }
      }));
  });
import { fileURLToPath as xia } from "node:url";
var Tia,
  GE,
  _or = j(() => {
    nU();
    Czn();
    hor();
    wzn();
    ((Tia = typeof process == "object" && process && typeof process.platform == "string" ? process.platform : "linux"),
      (GE = class {
        absolute;
        cwd;
        root;
        dot;
        dotRelative;
        follow;
        ignore;
        magicalBraces;
        mark;
        matchBase;
        maxDepth;
        nobrace;
        nocase;
        nodir;
        noext;
        noglobstar;
        pattern;
        platform;
        realpath;
        scurry;
        stat;
        signal;
        windowsPathsNoEscape;
        withFileTypes;
        includeChildMatches;
        opts;
        patterns;
        constructor(e, r) {
          if (!r) throw new TypeError("glob options required");
          if (
            ((this.withFileTypes = !!r.withFileTypes),
            (this.signal = r.signal),
            (this.follow = !!r.follow),
            (this.dot = !!r.dot),
            (this.dotRelative = !!r.dotRelative),
            (this.nodir = !!r.nodir),
            (this.mark = !!r.mark),
            r.cwd ? (r.cwd instanceof URL || r.cwd.startsWith("file://")) && (r.cwd = xia(r.cwd)) : (this.cwd = ""),
            (this.cwd = r.cwd || ""),
            (this.root = r.root),
            (this.magicalBraces = !!r.magicalBraces),
            (this.nobrace = !!r.nobrace),
            (this.noext = !!r.noext),
            (this.realpath = !!r.realpath),
            (this.absolute = r.absolute),
            (this.includeChildMatches = r.includeChildMatches !== !1),
            (this.noglobstar = !!r.noglobstar),
            (this.matchBase = !!r.matchBase),
            (this.maxDepth = typeof r.maxDepth == "number" ? r.maxDepth : 1 / 0),
            (this.stat = !!r.stat),
            (this.ignore = r.ignore),
            this.withFileTypes && this.absolute !== void 0)
          )
            throw new Error("cannot set absolute and withFileTypes:true");
          if (
            (typeof e == "string" && (e = [e]),
            (this.windowsPathsNoEscape = !!r.windowsPathsNoEscape || r.allowWindowsEscape === !1),
            this.windowsPathsNoEscape && (e = e.map((c) => c.replace(/\\/g, "/"))),
            this.matchBase)
          ) {
            if (r.noglobstar) throw new TypeError("base matching requires globstar");
            e = e.map((c) => (c.includes("/") ? c : `./**/${c}`));
          }
          if (
            ((this.pattern = e),
            (this.platform = r.platform || Tia),
            (this.opts = { ...r, platform: this.platform }),
            r.scurry)
          ) {
            if (((this.scurry = r.scurry), r.nocase !== void 0 && r.nocase !== r.scurry.nocase))
              throw new Error("nocase option contradicts provided scurry option");
          } else {
            let c = r.platform === "win32" ? Vce : r.platform === "darwin" ? Ave : r.platform ? Wce : vzn;
            this.scurry = new c(this.cwd, { nocase: r.nocase, fs: r.fs });
          }
          this.nocase = this.scurry.nocase;
          let n = this.platform === "darwin" || this.platform === "win32",
            o = {
              ...r,
              dot: this.dot,
              matchBase: this.matchBase,
              nobrace: this.nobrace,
              nocase: this.nocase,
              nocaseMagicOnly: n,
              nocomment: !0,
              noext: this.noext,
              nonegate: !0,
              optimizationLevel: 2,
              platform: this.platform,
              windowsPathsNoEscape: this.windowsPathsNoEscape,
              debug: !!this.opts.debug,
            },
            s = this.pattern.map((c) => new Q6(c, o)),
            [a, u] = s.reduce((c, m) => (c[0].push(...m.set), c[1].push(...m.globParts), c), [[], []]);
          this.patterns = a.map((c, m) => {
            let d = u[m];
            if (!d) throw new Error("invalid pattern object");
            return new zce(c, d, 0, this.platform);
          });
        }
        async walk() {
          return [
            ...(await new _ve(this.patterns, this.scurry.cwd, {
              ...this.opts,
              maxDepth: this.maxDepth !== 1 / 0 ? this.maxDepth + this.scurry.cwd.depth() : 1 / 0,
              platform: this.platform,
              nocase: this.nocase,
              includeChildMatches: this.includeChildMatches,
            }).walk()),
          ];
        }
        walkSync() {
          return [
            ...new _ve(this.patterns, this.scurry.cwd, {
              ...this.opts,
              maxDepth: this.maxDepth !== 1 / 0 ? this.maxDepth + this.scurry.cwd.depth() : 1 / 0,
              platform: this.platform,
              nocase: this.nocase,
              includeChildMatches: this.includeChildMatches,
            }).walkSync(),
          ];
        }
        stream() {
          return new Eve(this.patterns, this.scurry.cwd, {
            ...this.opts,
            maxDepth: this.maxDepth !== 1 / 0 ? this.maxDepth + this.scurry.cwd.depth() : 1 / 0,
            platform: this.platform,
            nocase: this.nocase,
            includeChildMatches: this.includeChildMatches,
          }).stream();
        }
        streamSync() {
          return new Eve(this.patterns, this.scurry.cwd, {
            ...this.opts,
            maxDepth: this.maxDepth !== 1 / 0 ? this.maxDepth + this.scurry.cwd.depth() : 1 / 0,
            platform: this.platform,
            nocase: this.nocase,
            includeChildMatches: this.includeChildMatches,
          }).streamSync();
        }
        iterateSync() {
          return this.streamSync()[Symbol.iterator]();
        }
        [Symbol.iterator]() {
          return this.iterateSync();
        }
        iterate() {
          return this.stream()[Symbol.asyncIterator]();
        }
        [Symbol.asyncIterator]() {
          return this.iterate();
        }
      }));
  });
var fit,
  Eor = j(() => {
    nU();
    fit = (t, e = {}) => {
      Array.isArray(t) || (t = [t]);
      for (let r of t) if (new Q6(r, e).hasMagic()) return !0;
      return !1;
    };
  });
var Ozn = {};
Wi(Ozn, {
  Glob: () => GE,
  Ignore: () => Tz,
  escape: () => Sz,
  glob: () => q6,
  globIterate: () => vor,
  globIterateSync: () => wve,
  globStream: () => Cve,
  globStreamSync: () => vve,
  globSync: () => Sve,
  hasMagic: () => fit,
  iterate: () => Rzn,
  iterateSync: () => Izn,
  stream: () => Dzn,
  streamSync: () => Tzn,
  sync: () => kzn,
  unescape: () => UE,
});
function vve(t, e = {}) {
  return new GE(t, e).streamSync();
}
function Cve(t, e = {}) {
  return new GE(t, e).stream();
}
function Sve(t, e = {}) {
  return new GE(t, e).walkSync();
}
async function xzn(t, e = {}) {
  return new GE(t, e).walk();
}
function wve(t, e = {}) {
  return new GE(t, e).iterateSync();
}
function vor(t, e = {}) {
  return new GE(t, e).iterate();
}
var Tzn,
  Dzn,
  Izn,
  Rzn,
  kzn,
  q6,
  xO = j(() => {
    nU();
    _or();
    Eor();
    nU();
    _or();
    Eor();
    gor();
    ((Tzn = vve),
      (Dzn = Object.assign(Cve, { sync: vve })),
      (Izn = wve),
      (Rzn = Object.assign(vor, { sync: wve })),
      (kzn = Object.assign(Sve, { stream: vve, iterate: wve })),
      (q6 = Object.assign(xzn, {
        glob: xzn,
        globSync: Sve,
        sync: kzn,
        globStream: Cve,
        stream: Dzn,
        globStreamSync: vve,
        streamSync: Tzn,
        globIterate: vor,
        iterate: Rzn,
        globIterateSync: wve,
        iterateSync: Izn,
        Glob: GE,
        hasMagic: fit,
        escape: Sz,
        unescape: UE,
      })));
    q6.glob = q6;
  });
import * as Dz from "fs";
import * as hS from "path";
import * as pit from "os";
import { execSync as hit } from "child_process";
function ll(t) {
  try {
    let e = hS.resolve(t);
    for (;;) {
      let r = hS.join(e, ".git");
      if (Dz.existsSync(r)) return !0;
      let n = hS.dirname(e);
      if (n === e) break;
      e = n;
    }
    return !1;
  } catch {
    return !1;
  }
}
function w0() {
  try {
    let e = (() => {
      let r = pit.platform(),
        n = process.env.PATH || "";
      if (r === "win32") {
        let o = [
            "C:\\Program Files\\Git\\bin\\git.exe",
            "C:\\Program Files (x86)\\Git\\bin\\git.exe",
            "C:\\Users\\" + pit.userInfo().username + "\\AppData\\Local\\Programs\\Git\\bin\\git.exe",
          ],
          s = n.split(";").map((a) => hS.join(a, "git.exe"));
        return [...o, ...s];
      } else {
        let o = [
            "/usr/bin/git",
            "/usr/local/bin/git",
            "/opt/homebrew/bin/git",
            "/home/linuxbrew/.linuxbrew/bin/git",
            "/snap/bin/git",
          ],
          s = n.split(":").map((a) => hS.join(a, "git"));
        return [...o, ...s];
      }
    })();
    for (let r of e)
      try {
        return (Dz.accessSync(r, Dz.constants.F_OK), !0);
      } catch {}
    return !1;
  } catch {
    return !1;
  }
}
function Dia(t) {
  try {
    let e = hS.resolve(t);
    for (;;) {
      let r = hS.join(e, ".git");
      if (Dz.existsSync(r)) return e;
      let n = hS.dirname(e);
      if (n === e) break;
      e = n;
    }
    return null;
  } catch {
    return null;
  }
}
function Iz(t = process.cwd(), e = "origin") {
  try {
    return !w0() || !ll(t)
      ? null
      : hit(`git remote get-url ${e}`, { cwd: t, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
  } catch {
    return null;
  }
}
function Rz(t = process.cwd()) {
  try {
    return !w0() || !ll(t)
      ? null
      : hit("git rev-parse HEAD", { cwd: t, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
  } catch {
    return null;
  }
}
function Iia(t = process.cwd()) {
  try {
    return !w0() || !ll(t)
      ? null
      : hit("git rev-parse --abbrev-ref HEAD", {
          cwd: t,
          encoding: "utf8",
          stdio: ["ignore", "pipe", "ignore"],
        }).trim();
  } catch {
    return null;
  }
}
function git(t = process.cwd()) {
  try {
    if (!w0() || !ll(t)) return null;
    let e = hit("git status --short", { cwd: t, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] });
    e = e.trim() || "Clean working directory";
    let r = 1e4;
    return e.length > r ? e.substring(0, r) + "...[content truncated]" : e;
  } catch {
    return null;
  }
}
var TO = j(() => {
  "use strict";
});
import Ria from "fs";
import kia from "fs/promises";
import DO from "path";
import { spawn as Cor } from "child_process";
var H6,
  Yce = j(() => {
    "use strict";
    xO();
    Fc();
    Bb();
    Ba();
    Bp();
    Pa();
    E0();
    TO();
    bi();
    H6 = class t extends Li {
      config;
      static Name = "search_file_content";
      static DisplayName = "Search";
      static ExecutionError = class extends Error {
        type;
        constructor(e, r) {
          (super(r), (this.type = e), (this.name = "GrepToolExecutionError"));
        }
      };
      constructor(e) {
        (super(
          t.Name,
          t.DisplayName,
          "Searches for a regular expression pattern within the content of files in a specified directory (or current working directory). Can filter files by a glob pattern. Returns the lines containing matches, along with their file paths and line numbers.",
          Mi.Regex,
          Fi.Search,
          {
            properties: {
              pattern: {
                description:
                  "The regular expression (regex) pattern to search for within file contents (e.g., 'function\\s+myFunction', 'import\\s+\\{.*\\}\\s+from\\s+.*').",
                type: Dt.STRING,
              },
              path: {
                description:
                  "Optional: The absolute path to the directory to search within. If omitted, searches the current working directory.",
                type: Dt.STRING,
              },
              include: {
                description:
                  "Optional: A glob pattern to filter which files are searched (e.g., '*.js', '*.{ts,tsx}', 'src/**'). If omitted, searches all files (respecting potential global ignores).",
                type: Dt.STRING,
              },
            },
            required: ["pattern"],
            type: Dt.OBJECT,
          },
          !0,
          !1,
          ["grep", "Grep", "Find_Text", "FindText", "SearchFileContent"],
        ),
          (this.config = e));
      }
      resolveAndValidatePath(e) {
        if (!e) return null;
        let r = DO.resolve(this.config.getTargetDir(), e),
          n = this.config.getWorkspaceContext();
        if (!n.isPathWithinWorkspace(r)) {
          let o = n.getDirectories();
          throw new Error(I.t("grepTool.errors.pathValidationFailed", { path: e, directories: o.join(", ") }));
        }
        try {
          if (!Ria.statSync(r).isDirectory()) throw new Error(I.t("grepTool.errors.pathNotDirectory", { path: r }));
        } catch (o) {
          throw Go(o) && o.code !== "ENOENT"
            ? new Error(I.t("grepTool.errors.pathNotExist", { path: r }))
            : new Error(I.t("grepTool.errors.pathAccessFailed", { path: r, error: o }));
        }
        return r;
      }
      validateToolParams(e) {
        let r = iu.validate(this.schema.parameters, e);
        if (r) return r;
        if (!e.pattern || e.pattern.trim() === "")
          return I.t("grepTool.errors.invalidPattern", { pattern: e.pattern, error: "Pattern cannot be empty" });
        try {
          new RegExp(e.pattern);
        } catch (n) {
          return I.t("grepTool.errors.invalidPattern", { pattern: e.pattern, error: mr(n) });
        }
        if (e.path)
          try {
            this.resolveAndValidatePath(e.path);
          } catch (n) {
            return mr(n);
          }
        return null;
      }
      async execute(e, r) {
        let n = this.validateToolParams(e);
        if (n)
          return {
            llmContent: I.t("grepTool.errors.invalidParameters", { reason: n }),
            returnDisplay: I.t("grepTool.errors.invalidParametersShort", { error: n }),
            error: { message: n, type: Lr.INVALID_TOOL_PARAMS },
          };
        try {
          let o = this.config.getWorkspaceContext(),
            s = this.resolveAndValidatePath(e.path),
            a = e.path || ".",
            u;
          s === null ? (u = o.getDirectories()) : (u = [s]);
          let c = [];
          for (let g of u) {
            let b = await this.performGrepSearch({ pattern: e.pattern, path: g, include: e.include, signal: r });
            if (u.length > 1) {
              let A = DO.basename(g);
              b.forEach((y) => {
                y.filePath = DO.join(A, y.filePath);
              });
            }
            c = c.concat(b);
          }
          let m;
          if (s === null) {
            let g = o.getDirectories().length;
            m = g > 1 ? `across ${g} workspace directories` : "in the workspace directory";
          } else m = `in path "${a}"`;
          if (c.length === 0)
            return {
              llmContent:
                I.t("grepTool.messages.noMatches", { pattern: e.pattern }) +
                ` ${m}${e.include ? ` (filter: "${e.include}")` : ""}.`,
              returnDisplay: I.t("grepTool.messages.noMatchesShort"),
            };
          let d = c.reduce((g, b) => {
              let A = b.filePath;
              return (g[A] || (g[A] = []), g[A].push(b), g[A].sort((y, E) => y.lineNumber - E.lineNumber), g);
            }, {}),
            f = c.length,
            p = f === 1 ? "match" : "matches",
            h =
              I.t("grepTool.messages.matchesFound", {
                count: f,
                matchType: p,
                pattern: e.pattern,
                fileCount: Object.keys(d).length,
              }) +
              ` ${m}${e.include ? ` (filter: "${e.include}")` : ""}:
---
`;
          for (let g in d)
            ((h += `File: ${g}
`),
              d[g].forEach((b) => {
                let A = b.line.trim();
                h += `L${b.lineNumber}: ${A}
`;
              }),
              (h += `---
`));
          return {
            llmContent: h.trim(),
            returnDisplay: I.t("grepTool.messages.matchesFoundShort", { count: f, matchType: p }),
          };
        } catch (o) {
          console.error(`Error during GrepLogic execution: ${o}`);
          let s = mr(o);
          return {
            llmContent: I.t("grepTool.errors.searchFailed", { error: s }),
            returnDisplay: I.t("grepTool.errors.searchFailedShort", { error: s }),
            error: { message: s, type: Lr.GREP_EXECUTION_ERROR },
          };
        }
      }
      isCommandAvailable(e) {
        return new Promise((r) => {
          let n = process.platform === "win32" ? "where" : "command",
            o = process.platform === "win32" ? [e] : ["-v", e];
          try {
            let s = Cor(n, o, { stdio: "ignore", shell: process.platform === "win32" });
            (s.on("close", (a) => r(a === 0)), s.on("error", () => r(!1)));
          } catch {
            r(!1);
          }
        });
      }
      parseGrepOutput(e, r) {
        let n = [];
        if (!e) return n;
        let o = e.split(/\r?\n/);
        for (let s of o) {
          if (!s.trim()) continue;
          let a = s.indexOf(":");
          if (a === -1) continue;
          let u = s.indexOf(":", a + 1);
          if (u === -1) continue;
          let c = s.substring(0, a),
            m = s.substring(a + 1, u),
            d = s.substring(u + 1),
            f = parseInt(m, 10);
          if (!isNaN(f)) {
            let p = DO.resolve(r, c),
              h = DO.relative(r, p);
            n.push({ filePath: h || DO.basename(p), lineNumber: f, line: d });
          }
        }
        return n;
      }
      getDescription(e) {
        if (!e?.pattern) return "";
        let r = `'${e.pattern}'`;
        if ((e.include && (r += ` in ${e.include}`), e.path)) {
          let n = DO.resolve(this.config.getTargetDir(), e.path);
          if (n === this.config.getTargetDir() || e.path === ".") r += " within ./";
          else {
            let o = Mc(n, this.config.getTargetDir());
            r += ` within ${ba(o)}`;
          }
        } else
          this.config.getWorkspaceContext().getDirectories().length > 1 && (r += " across all workspace directories");
        return r;
      }
      async performGrepSearch(e) {
        let { pattern: r, path: n, include: o } = e,
          s = "none";
        try {
          if (ll(n) && w0()) {
            s = "git grep";
            let g = ["grep", "--untracked", "-n", "-E", "--ignore-case", r];
            o && g.push("--", o);
            try {
              let b = await new Promise((A, y) => {
                let E = Cor("git", g, { cwd: n, windowsHide: !0 }),
                  v = [],
                  C = [];
                (E.stdout.on("data", (x) => v.push(x)),
                  E.stderr.on("data", (x) => C.push(x)),
                  E.on("error", (x) => y(new Error(`Failed to start git grep: ${x.message}`))),
                  E.on("close", (x) => {
                    let k = Buffer.concat(v).toString("utf8"),
                      R = Buffer.concat(C).toString("utf8");
                    x === 0 ? A(k) : x === 1 ? A("") : y(new Error(`git grep exited with code ${x}: ${R}`));
                  }));
              });
              return this.parseGrepOutput(b, n);
            } catch (b) {
              console.debug(`GrepLogic: git grep failed: ${mr(b)}. Falling back...`);
            }
          }
          if (await this.isCommandAvailable("grep")) {
            s = "system grep";
            let g = ["-r", "-n", "-H", "-E"];
            ([".git", "node_modules", "bower_components"].forEach((A) => g.push(`--exclude-dir=${A}`)),
              o && g.push(`--include=${o}`),
              g.push(r),
              g.push("."));
            try {
              let A = await new Promise((y, E) => {
                let v = Cor("grep", g, { cwd: n, windowsHide: !0 }),
                  C = [],
                  x = [],
                  k = (N) => C.push(N),
                  R = (N) => {
                    let F = N.toString();
                    !F.includes("Permission denied") && !/grep:.*: Is a directory/i.test(F) && x.push(N);
                  },
                  P = (N) => {
                    (O(), E(new Error(`Failed to start system grep: ${N.message}`)));
                  },
                  D = (N) => {
                    let F = Buffer.concat(C).toString("utf8"),
                      B = Buffer.concat(x).toString("utf8").trim();
                    (O(),
                      N === 0
                        ? y(F)
                        : N === 1
                          ? y("")
                          : B
                            ? E(new Error(`System grep exited with code ${N}: ${B}`))
                            : y(""));
                  },
                  O = () => {
                    (v.stdout.removeListener("data", k),
                      v.stderr.removeListener("data", R),
                      v.removeListener("error", P),
                      v.removeListener("close", D),
                      v.connected && v.disconnect());
                  };
                (v.stdout.on("data", k), v.stderr.on("data", R), v.on("error", P), v.on("close", D));
              });
              return this.parseGrepOutput(A, n);
            } catch (A) {
              console.debug(`GrepLogic: System grep failed: ${mr(A)}. Falling back...`);
            }
          }
          (console.debug("GrepLogic: Falling back to JavaScript grep implementation."), (s = "javascript fallback"));
          let f = Cve(o || "**/*", {
              cwd: n,
              dot: !0,
              ignore: [".git/**", "node_modules/**", "bower_components/**", ".svn/**", ".hg/**"],
              absolute: !0,
              nodir: !0,
              signal: e.signal,
            }),
            p = new RegExp(r, "i"),
            h = [];
          for await (let g of f) {
            let b = g;
            try {
              (await kia.readFile(b, "utf8")).split(/\r?\n/).forEach((E, v) => {
                p.test(E) && h.push({ filePath: DO.relative(n, b) || DO.basename(b), lineNumber: v + 1, line: E });
              });
            } catch (A) {
              (!Go(A) || A.code !== "ENOENT") && console.debug(`GrepLogic: Could not read/process ${b}: ${mr(A)}`);
            }
          }
          return h;
        } catch (a) {
          throw (console.error(`GrepLogic: Error in performGrepSearch (Strategy: ${s}): ${mr(a)}`), a);
        }
      }
    };
  });
function gS() {}
function Nzn(t, e, r, n, o) {
  for (var s = [], a; e; ) (s.push(e), (a = e.previousComponent), delete e.previousComponent, (e = a));
  s.reverse();
  for (var u = 0, c = s.length, m = 0, d = 0; u < c; u++) {
    var f = s[u];
    if (f.removed) ((f.value = t.join(n.slice(d, d + f.count))), (d += f.count));
    else {
      if (!f.added && o) {
        var p = r.slice(m, m + f.count);
        ((p = p.map(function (h, g) {
          var b = n[d + g];
          return b.length > h.length ? b : h;
        })),
          (f.value = t.join(p)));
      } else f.value = t.join(r.slice(m, m + f.count));
      ((m += f.count), f.added || (d += f.count));
    }
  }
  return s;
}
function Pzn(t, e) {
  var r;
  for (r = 0; r < t.length && r < e.length; r++) if (t[r] != e[r]) return t.slice(0, r);
  return t.slice(0, r);
}
function Bzn(t, e) {
  var r;
  if (!t || !e || t[t.length - 1] != e[e.length - 1]) return "";
  for (r = 0; r < t.length && r < e.length; r++) if (t[t.length - (r + 1)] != e[e.length - (r + 1)]) return t.slice(-r);
  return t.slice(-r);
}
function wor(t, e, r) {
  if (t.slice(0, e.length) != e)
    throw Error(
      "string ".concat(JSON.stringify(t), " doesn't start with prefix ").concat(JSON.stringify(e), "; this is a bug"),
    );
  return r + t.slice(e.length);
}
function xor(t, e, r) {
  if (!e) return t + r;
  if (t.slice(-e.length) != e)
    throw Error(
      "string ".concat(JSON.stringify(t), " doesn't end with suffix ").concat(JSON.stringify(e), "; this is a bug"),
    );
  return t.slice(0, -e.length) + r;
}
function xve(t, e) {
  return wor(t, e, "");
}
function bit(t, e) {
  return xor(t, e, "");
}
function Lzn(t, e) {
  return e.slice(0, Oia(t, e));
}
function Oia(t, e) {
  var r = 0;
  t.length > e.length && (r = t.length - e.length);
  var n = e.length;
  t.length < e.length && (n = t.length);
  var o = Array(n),
    s = 0;
  o[0] = 0;
  for (var a = 1; a < n; a++) {
    for (e[a] == e[s] ? (o[a] = o[s]) : (o[a] = s); s > 0 && e[a] != e[s]; ) s = o[s];
    e[a] == e[s] && s++;
  }
  s = 0;
  for (var u = r; u < t.length; u++) {
    for (; s > 0 && t[u] != e[s]; ) s = o[s];
    t[u] == e[s] && s++;
  }
  return s;
}
function Mzn(t, e, r, n) {
  if (e && r) {
    var o = e.value.match(/^\s*/)[0],
      s = e.value.match(/\s*$/)[0],
      a = r.value.match(/^\s*/)[0],
      u = r.value.match(/\s*$/)[0];
    if (t) {
      var c = Pzn(o, a);
      ((t.value = xor(t.value, a, c)), (e.value = xve(e.value, c)), (r.value = xve(r.value, c)));
    }
    if (n) {
      var m = Bzn(s, u);
      ((n.value = wor(n.value, u, m)), (e.value = bit(e.value, m)), (r.value = bit(r.value, m)));
    }
  } else if (r) (t && (r.value = r.value.replace(/^\s*/, "")), n && (n.value = n.value.replace(/^\s*/, "")));
  else if (t && n) {
    var d = n.value.match(/^\s*/)[0],
      f = e.value.match(/^\s*/)[0],
      p = e.value.match(/\s*$/)[0],
      h = Pzn(d, f);
    e.value = xve(e.value, h);
    var g = Bzn(xve(d, h), p);
    ((e.value = bit(e.value, g)),
      (n.value = wor(n.value, d, g)),
      (t.value = xor(t.value, d, d.slice(0, d.length - g.length))));
  } else if (n) {
    var b = n.value.match(/^\s*/)[0],
      A = e.value.match(/\s*$/)[0],
      y = Lzn(A, b);
    e.value = bit(e.value, y);
  } else if (t) {
    var E = t.value.match(/\s*$/)[0],
      v = e.value.match(/^\s*/)[0],
      C = Lzn(E, v);
    e.value = xve(e.value, C);
  }
}
function Fzn(t, e, r) {
  return Eit.diff(t, e, r);
}
function Uzn(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    (e &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function yit(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Uzn(Object(r), !0).forEach(function (n) {
          Uia(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Uzn(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function Mia(t, e) {
  if (typeof t != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Fia(t) {
  var e = Mia(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function Tor(t) {
  "@babel/helpers - typeof";
  return (
    (Tor =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    Tor(t)
  );
}
function Uia(t, e, r) {
  return (
    (e = Fia(e)),
    e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r),
    t
  );
}
function Sor(t) {
  return $ia(t) || jia(t) || Qia(t) || Gia();
}
function $ia(t) {
  if (Array.isArray(t)) return Dor(t);
}
function jia(t) {
  if ((typeof Symbol < "u" && t[Symbol.iterator] != null) || t["@@iterator"] != null) return Array.from(t);
}
function Qia(t, e) {
  if (t) {
    if (typeof t == "string") return Dor(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if ((r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")) return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Dor(t, e);
  }
}
function Dor(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function Gia() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ior(t, e, r, n, o) {
  ((e = e || []), (r = r || []), n && (t = n(o, t)));
  var s;
  for (s = 0; s < e.length; s += 1) if (e[s] === t) return r[s];
  var a;
  if (Object.prototype.toString.call(t) === "[object Array]") {
    for (e.push(t), a = new Array(t.length), r.push(a), s = 0; s < t.length; s += 1) a[s] = Ior(t[s], e, r, n, o);
    return (e.pop(), r.pop(), a);
  }
  if ((t && t.toJSON && (t = t.toJSON()), Tor(t) === "object" && t !== null)) {
    (e.push(t), (a = {}), r.push(a));
    var u = [],
      c;
    for (c in t) Object.prototype.hasOwnProperty.call(t, c) && u.push(c);
    for (u.sort(), s = 0; s < u.length; s += 1) ((c = u[s]), (a[c] = Ior(t[c], e, r, n, c)));
    (e.pop(), r.pop());
  } else a = t;
  return a;
}
function $zn(t, e, r, n, o, s, a) {
  if (
    (a || (a = {}),
    typeof a == "function" && (a = { callback: a }),
    typeof a.context > "u" && (a.context = 4),
    a.newlineIsToken)
  )
    throw new Error("newlineIsToken may not be used with patch-generation functions, only with diffing functions");
  if (a.callback) {
    var u = a,
      c = u.callback;
    Fzn(
      r,
      n,
      yit(
        yit({}, a),
        {},
        {
          callback: function (f) {
            var p = m(f);
            c(p);
          },
        },
      ),
    );
  } else return m(Fzn(r, n, a));
  function m(d) {
    if (!d) return;
    d.push({ value: "", lines: [] });
    function f(P) {
      return P.map(function (D) {
        return " " + D;
      });
    }
    for (
      var p = [],
        h = 0,
        g = 0,
        b = [],
        A = 1,
        y = 1,
        E = function () {
          var D = d[v],
            O = D.lines || Hia(D.value);
          if (((D.lines = O), D.added || D.removed)) {
            var N;
            if (!h) {
              var F = d[v - 1];
              ((h = A),
                (g = y),
                F && ((b = a.context > 0 ? f(F.lines.slice(-a.context)) : []), (h -= b.length), (g -= b.length)));
            }
            ((N = b).push.apply(
              N,
              Sor(
                O.map(function (K) {
                  return (D.added ? "+" : "-") + K;
                }),
              ),
            ),
              D.added ? (y += O.length) : (A += O.length));
          } else {
            if (h)
              if (O.length <= a.context * 2 && v < d.length - 2) {
                var B;
                (B = b).push.apply(B, Sor(f(O)));
              } else {
                var L,
                  G = Math.min(O.length, a.context);
                (L = b).push.apply(L, Sor(f(O.slice(0, G))));
                var Q = { oldStart: h, oldLines: A - h + G, newStart: g, newLines: y - g + G, lines: b };
                (p.push(Q), (h = 0), (g = 0), (b = []));
              }
            ((A += O.length), (y += O.length));
          }
        },
        v = 0;
      v < d.length;
      v++
    )
      E();
    for (var C = 0, x = p; C < x.length; C++)
      for (var k = x[C], R = 0; R < k.lines.length; R++)
        k.lines[R].endsWith(`
`)
          ? (k.lines[R] = k.lines[R].slice(0, -1))
          : (k.lines.splice(R + 1, 0, "\\ No newline at end of file"), R++);
    return { oldFileName: t, newFileName: e, oldHeader: o, newHeader: s, hunks: p };
  }
}
function kor(t) {
  if (Array.isArray(t))
    return t.map(kor).join(`
`);
  var e = [];
  (t.oldFileName == t.newFileName && e.push("Index: " + t.oldFileName),
    e.push("==================================================================="),
    e.push("--- " + t.oldFileName + (typeof t.oldHeader > "u" ? "" : "	" + t.oldHeader)),
    e.push("+++ " + t.newFileName + (typeof t.newHeader > "u" ? "" : "	" + t.newHeader)));
  for (var r = 0; r < t.hunks.length; r++) {
    var n = t.hunks[r];
    (n.oldLines === 0 && (n.oldStart -= 1),
      n.newLines === 0 && (n.newStart -= 1),
      e.push("@@ -" + n.oldStart + "," + n.oldLines + " +" + n.newStart + "," + n.newLines + " @@"),
      e.push.apply(e, n.lines));
  }
  return (
    e.join(`
`) +
    `
`
  );
}
function qia(t, e, r, n, o, s, a) {
  var u;
  if ((typeof a == "function" && (a = { callback: a }), (u = a) !== null && u !== void 0 && u.callback)) {
    var m = a,
      d = m.callback;
    $zn(
      t,
      e,
      r,
      n,
      o,
      s,
      yit(
        yit({}, a),
        {},
        {
          callback: function (p) {
            p ? d(kor(p)) : d();
          },
        },
      ),
    );
  } else {
    var c = $zn(t, e, r, n, o, s, a);
    return c ? kor(c) : void 0;
  }
}
function zf(t, e, r, n, o, s) {
  return qia(t, t, e, r, n, o, s);
}
function Hia(t) {
  var e = t.endsWith(`
`),
    r = t
      .split(
        `
`,
      )
      .map(function (n) {
        return (
          n +
          `
`
        );
      });
  return (e ? r.pop() : r.push(r.pop().slice(0, -1)), r);
}
var kEc,
  Ait,
  Nia,
  _it,
  Pia,
  Eit,
  Bia,
  Lia,
  Tve,
  Ror,
  aU = j(() => {
    gS.prototype = {
      diff: function (e, r) {
        var n,
          o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
          s = o.callback;
        typeof o == "function" && ((s = o), (o = {}));
        var a = this;
        function u(C) {
          return (
            (C = a.postProcess(C, o)),
            s
              ? (setTimeout(function () {
                  s(C);
                }, 0),
                !0)
              : C
          );
        }
        ((e = this.castInput(e, o)),
          (r = this.castInput(r, o)),
          (e = this.removeEmpty(this.tokenize(e, o))),
          (r = this.removeEmpty(this.tokenize(r, o))));
        var c = r.length,
          m = e.length,
          d = 1,
          f = c + m;
        o.maxEditLength != null && (f = Math.min(f, o.maxEditLength));
        var p = (n = o.timeout) !== null && n !== void 0 ? n : 1 / 0,
          h = Date.now() + p,
          g = [{ oldPos: -1, lastComponent: void 0 }],
          b = this.extractCommon(g[0], r, e, 0, o);
        if (g[0].oldPos + 1 >= m && b + 1 >= c) return u(Nzn(a, g[0].lastComponent, r, e, a.useLongestToken));
        var A = -1 / 0,
          y = 1 / 0;
        function E() {
          for (var C = Math.max(A, -d); C <= Math.min(y, d); C += 2) {
            var x = void 0,
              k = g[C - 1],
              R = g[C + 1];
            k && (g[C - 1] = void 0);
            var P = !1;
            if (R) {
              var D = R.oldPos - C;
              P = R && 0 <= D && D < c;
            }
            var O = k && k.oldPos + 1 < m;
            if (!P && !O) {
              g[C] = void 0;
              continue;
            }
            if (
              (!O || (P && k.oldPos < R.oldPos)
                ? (x = a.addToPath(R, !0, !1, 0, o))
                : (x = a.addToPath(k, !1, !0, 1, o)),
              (b = a.extractCommon(x, r, e, C, o)),
              x.oldPos + 1 >= m && b + 1 >= c)
            )
              return u(Nzn(a, x.lastComponent, r, e, a.useLongestToken));
            ((g[C] = x), x.oldPos + 1 >= m && (y = Math.min(y, C - 1)), b + 1 >= c && (A = Math.max(A, C + 1)));
          }
          d++;
        }
        if (s)
          (function C() {
            setTimeout(function () {
              if (d > f || Date.now() > h) return s();
              E() || C();
            }, 0);
          })();
        else
          for (; d <= f && Date.now() <= h; ) {
            var v = E();
            if (v) return v;
          }
      },
      addToPath: function (e, r, n, o, s) {
        var a = e.lastComponent;
        return a && !s.oneChangePerToken && a.added === r && a.removed === n
          ? {
              oldPos: e.oldPos + o,
              lastComponent: { count: a.count + 1, added: r, removed: n, previousComponent: a.previousComponent },
            }
          : { oldPos: e.oldPos + o, lastComponent: { count: 1, added: r, removed: n, previousComponent: a } };
      },
      extractCommon: function (e, r, n, o, s) {
        for (
          var a = r.length, u = n.length, c = e.oldPos, m = c - o, d = 0;
          m + 1 < a && c + 1 < u && this.equals(n[c + 1], r[m + 1], s);
        )
          (m++,
            c++,
            d++,
            s.oneChangePerToken &&
              (e.lastComponent = { count: 1, previousComponent: e.lastComponent, added: !1, removed: !1 }));
        return (
          d &&
            !s.oneChangePerToken &&
            (e.lastComponent = { count: d, previousComponent: e.lastComponent, added: !1, removed: !1 }),
          (e.oldPos = c),
          m
        );
      },
      equals: function (e, r, n) {
        return n.comparator ? n.comparator(e, r) : e === r || (n.ignoreCase && e.toLowerCase() === r.toLowerCase());
      },
      removeEmpty: function (e) {
        for (var r = [], n = 0; n < e.length; n++) e[n] && r.push(e[n]);
        return r;
      },
      castInput: function (e) {
        return e;
      },
      tokenize: function (e) {
        return Array.from(e);
      },
      join: function (e) {
        return e.join("");
      },
      postProcess: function (e) {
        return e;
      },
    };
    kEc = new gS();
    ((Ait =
      "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}"),
      (Nia = new RegExp("[".concat(Ait, "]+|\\s+|[^").concat(Ait, "]"), "ug")),
      (_it = new gS()));
    _it.equals = function (t, e, r) {
      return (r.ignoreCase && ((t = t.toLowerCase()), (e = e.toLowerCase())), t.trim() === e.trim());
    };
    _it.tokenize = function (t) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        r;
      if (e.intlSegmenter) {
        if (e.intlSegmenter.resolvedOptions().granularity != "word")
          throw new Error('The segmenter passed must have a granularity of "word"');
        r = Array.from(e.intlSegmenter.segment(t), function (s) {
          return s.segment;
        });
      } else r = t.match(Nia) || [];
      var n = [],
        o = null;
      return (
        r.forEach(function (s) {
          (/\s/.test(s)
            ? o == null
              ? n.push(s)
              : n.push(n.pop() + s)
            : /\s/.test(o)
              ? n[n.length - 1] == o
                ? n.push(n.pop() + s)
                : n.push(o + s)
              : n.push(s),
            (o = s));
        }),
        n
      );
    };
    _it.join = function (t) {
      return t
        .map(function (e, r) {
          return r == 0 ? e : e.replace(/^\s+/, "");
        })
        .join("");
    };
    _it.postProcess = function (t, e) {
      if (!t || e.oneChangePerToken) return t;
      var r = null,
        n = null,
        o = null;
      return (
        t.forEach(function (s) {
          s.added ? (n = s) : s.removed ? (o = s) : ((n || o) && Mzn(r, o, n, s), (r = s), (n = null), (o = null));
        }),
        (n || o) && Mzn(r, o, n, null),
        t
      );
    };
    Pia = new gS();
    Pia.tokenize = function (t) {
      var e = new RegExp("(\\r?\\n)|[".concat(Ait, "]+|[^\\S\\n\\r]+|[^").concat(Ait, "]"), "ug");
      return t.match(e) || [];
    };
    Eit = new gS();
    Eit.tokenize = function (t, e) {
      e.stripTrailingCr &&
        (t = t.replace(
          /\r\n/g,
          `
`,
        ));
      var r = [],
        n = t.split(/(\n|\r\n)/);
      n[n.length - 1] || n.pop();
      for (var o = 0; o < n.length; o++) {
        var s = n[o];
        o % 2 && !e.newlineIsToken ? (r[r.length - 1] += s) : r.push(s);
      }
      return r;
    };
    Eit.equals = function (t, e, r) {
      return (
        r.ignoreWhitespace
          ? ((!r.newlineIsToken ||
              !t.includes(`
`)) &&
              (t = t.trim()),
            (!r.newlineIsToken ||
              !e.includes(`
`)) &&
              (e = e.trim()))
          : r.ignoreNewlineAtEof &&
            !r.newlineIsToken &&
            (t.endsWith(`
`) && (t = t.slice(0, -1)),
            e.endsWith(`
`) && (e = e.slice(0, -1))),
        gS.prototype.equals.call(this, t, e, r)
      );
    };
    Bia = new gS();
    Bia.tokenize = function (t) {
      return t.split(/(\S.+?[.!?])(?=\s+|$)/);
    };
    Lia = new gS();
    Lia.tokenize = function (t) {
      return t.split(/([{}:;,]|\s+)/);
    };
    Tve = new gS();
    Tve.useLongestToken = !0;
    Tve.tokenize = Eit.tokenize;
    Tve.castInput = function (t, e) {
      var r = e.undefinedReplacement,
        n = e.stringifyReplacer,
        o =
          n === void 0
            ? function (s, a) {
                return typeof a > "u" ? r : a;
              }
            : n;
      return typeof t == "string" ? t : JSON.stringify(Ior(t, null, null, o), o, "  ");
    };
    Tve.equals = function (t, e, r) {
      return gS.prototype.equals.call(Tve, t.replace(/,([\r\n])/g, "$1"), e.replace(/,([\r\n])/g, "$1"), r);
    };
    Ror = new gS();
    Ror.tokenize = function (t) {
      return t.slice();
    };
    Ror.join = Ror.removeEmpty = function (t) {
      return t;
    };
  });
var n3,
  Oz = j(() => {
    "use strict";
    n3 = { context: 3, ignoreWhitespace: !0 };
  });
import * as IO from "fs/promises";
import * as Bz from "path";
function Jce(t) {
  Array.isArray(t) ? t.length > 0 && (uU = t.map((e) => e.trim())) : t && t.trim() !== "" && (uU = t.trim());
}
function Xce() {
  return Array.isArray(uU) ? uU[0] : uU;
}
function Lz() {
  return Array.isArray(uU) ? uU : [uU];
}
function Nz() {
  return Bz.join(Tn(), Xce());
}
function Qzn(t) {
  return t.length === 0 ||
    t.endsWith(`

`) ||
    t.endsWith(`\r
\r
`)
    ? ""
    : t.endsWith(`
`) ||
        t.endsWith(`\r
`)
      ? `
`
      : `

`;
}
var jzn,
  Via,
  Kce,
  Gzn,
  qzn,
  Pz,
  uU,
  cA,
  RO = j(() => {
    "use strict";
    Fc();
    Ba();
    aU();
    Oz();
    Pa();
    bi();
    ((jzn = {
      name: "save_memory",
      description:
        "Saves a specific piece of information or fact to your long-term memory. Use this when the user explicitly asks you to remember something, or when they state a clear, concise fact that seems important to retain for future interactions.",
      parameters: {
        type: Dt.OBJECT,
        properties: {
          fact: {
            type: Dt.STRING,
            description:
              "The specific fact or piece of information to remember. Should be a clear, self-contained statement.",
          },
        },
        required: ["fact"],
      },
    }),
      (Via = `
Saves a specific piece of information or fact to your long-term memory.

Use this tool:

- When the user explicitly asks you to remember something (e.g., "Remember that I like pineapple on pizza", "Please save this: my cat's name is Whiskers").
- When the user states a clear, concise fact about themselves, their preferences, or their environment that seems important for you to retain for future interactions to provide a more personalized and effective assistance.

Do NOT use this tool:

- To remember conversational context that is only relevant for the current session.
- To save long, complex, or rambling pieces of text. The fact should be relatively short and to the point.
- If you are unsure whether the information is a fact worth remembering long-term. If in doubt, you can ask the user, "Should I remember that for you?"

## Parameters

- \`fact\` (string, required): The specific fact or piece of information to remember. This should be a clear, self-contained statement. For example, if the user says "My favorite color is blue", the fact would be "My favorite color is blue".
`),
      (Kce = ui()),
      (Gzn = "IFLOW.md"),
      (qzn = "AGENTS.md"),
      (Pz = "## iFlow Added Memories"),
      (uU = [qzn, Gzn]));
    cA = class t extends Li {
      static allowlist = new Set();
      static Name = jzn.name;
      static DisplayName = "Save Memory";
      constructor() {
        super(t.Name, t.DisplayName, Via, Mi.LightBulb, Fi.Edit, jzn.parameters);
      }
      getDescription(e) {
        let r = Nz();
        return `in ${lx(r)}`;
      }
      async readMemoryFileContent() {
        try {
          return await IO.readFile(Nz(), "utf-8");
        } catch (e) {
          let r = e;
          if (!(r instanceof Error) || r.code !== "ENOENT") throw e;
          return "";
        }
      }
      computeNewContent(e, r) {
        let n = r.trim();
        n = n.replace(/^(-+\s*)+/, "").trim();
        let o = `- ${n}`,
          s = e.indexOf(Pz);
        if (s === -1) {
          let a = Qzn(e);
          return (
            e +
            `${a}${Pz}
${o}
`
          );
        } else {
          let a = s + Pz.length,
            u = e.indexOf(
              `
## `,
              a,
            );
          u === -1 && (u = e.length);
          let c = e.substring(0, a).trimEnd(),
            m = e.substring(a, u).trimEnd(),
            d = e.substring(u);
          return (
            (m += `
${o}`),
            `${c}
${m.trimStart()}
${d}`.trimEnd() +
              `
`
          );
        }
      }
      async shouldConfirmExecute(e, r) {
        let n = Nz(),
          o = n;
        if (t.allowlist.has(o)) return !1;
        let s = await this.readMemoryFileContent(),
          a = this.computeNewContent(s, e.fact),
          u = Bz.basename(n),
          c = zf(u, s, a, "Current", "Proposed", n3);
        return {
          type: "edit",
          title: `Confirm Memory Save: ${lx(n)}`,
          fileName: n,
          fileDiff: c,
          originalContent: s,
          newContent: a,
          onConfirm: async (d) => {
            d === cn.ProceedAlways && t.allowlist.add(o);
          },
        };
      }
      static async performAddMemoryEntry(e, r, n) {
        let o = e.trim();
        o = o.replace(/^(-+\s*)+/, "").trim();
        let s = `- ${o}`;
        try {
          await n.mkdir(Bz.dirname(r), { recursive: !0 });
          let a = "";
          try {
            a = await n.readFile(r, "utf-8");
          } catch {}
          let u = a.indexOf(Pz);
          if (u === -1) {
            let c = Qzn(a);
            a += `${c}${Pz}
${s}
`;
          } else {
            let c = u + Pz.length,
              m = a.indexOf(
                `
## `,
                c,
              );
            m === -1 && (m = a.length);
            let d = a.substring(0, c).trimEnd(),
              f = a.substring(c, m).trimEnd(),
              p = a.substring(m);
            ((f += `
${s}`),
              (a =
                `${d}
${f.trimStart()}
${p}`.trimEnd() +
                `
`));
          }
          await n.writeFile(r, a, "utf-8");
        } catch (a) {
          throw (
            console.error(`[MemoryTool] Error adding memory entry to ${r}:`, a),
            new Error(`[MemoryTool] Failed to add memory entry: ${a instanceof Error ? a.message : String(a)}`)
          );
        }
      }
      async execute(e, r) {
        let { fact: n, modified_by_user: o, modified_content: s } = e;
        if (!n || typeof n != "string" || n.trim() === "") {
          let a = I.t("memoryTool.errors.factRequired");
          return { llmContent: JSON.stringify({ success: !1, error: a }), returnDisplay: `Error: ${a}` };
        }
        try {
          if (o && s !== void 0) {
            (await IO.mkdir(Bz.dirname(Nz()), { recursive: !0 }), await IO.writeFile(Nz(), s, "utf-8"));
            let a = I.t("memoryTool.messages.fileUpdated");
            return { llmContent: JSON.stringify({ success: !0, message: a }), returnDisplay: a };
          } else {
            await t.performAddMemoryEntry(n, Nz(), { readFile: IO.readFile, writeFile: IO.writeFile, mkdir: IO.mkdir });
            let a = I.t("memoryTool.messages.factRemembered", { fact: n });
            return { llmContent: JSON.stringify({ success: !0, message: a }), returnDisplay: a };
          }
        } catch (a) {
          let u = a instanceof Error ? a.message : String(a);
          return (
            console.error(`[MemoryTool] Error executing save_memory for fact "${n}": ${u}`),
            {
              llmContent: JSON.stringify({ success: !1, error: `Failed to save memory. Detail: ${u}` }),
              returnDisplay: I.t("memoryTool.errors.savingError", { error: u }),
            }
          );
        }
      }
      getModifyContext(e) {
        return {
          getFilePath: (r) => Nz(),
          getCurrentContent: async (r) => this.readMemoryFileContent(),
          getProposedContent: async (r) => {
            let n = await this.readMemoryFileContent();
            return this.computeNewContent(n, r.fact);
          },
          createUpdatedParams: (r, n, o) => ({ ...o, modified_by_user: !0, modified_content: n }),
        };
      }
    };
  });
import Wia from "node:path";
function Jia(t) {
  let e = new Set(
    t
      .filter((r) => r.includes("*."))
      .flatMap((r) => {
        let n = r.substring(r.lastIndexOf("*.") + 1);
        if (n.startsWith(".{") && n.endsWith("}"))
          return n
            .slice(2, -1)
            .split(",")
            .map((s) => `.${s.trim()}`)
            .filter((s) => s !== ".");
        if (n.startsWith(".") && !n.includes("/") && !n.includes("{") && !n.includes("}")) {
          let s = Wia.extname(`dummy${n}`) || n;
          return s && s !== "." && !s.substring(1).includes(".") ? [s] : [];
        }
        return [];
      }),
  );
  return Array.from(e).sort();
}
var Hzn,
  Vzn,
  zia,
  Oor,
  Wzn,
  Yia,
  Kia,
  vit,
  jEc,
  zzn = j(() => {
    "use strict";
    RO();
    ((Hzn = ["**/node_modules/**", "**/.git/**", "**/bower_components/**", "**/.svn/**", "**/.hg/**"]),
      (Vzn = [
        "**/*.bin",
        "**/*.exe",
        "**/*.dll",
        "**/*.so",
        "**/*.dylib",
        "**/*.class",
        "**/*.jar",
        "**/*.war",
        "**/*.zip",
        "**/*.tar",
        "**/*.gz",
        "**/*.bz2",
        "**/*.rar",
        "**/*.7z",
        "**/*.doc",
        "**/*.docx",
        "**/*.xls",
        "**/*.xlsx",
        "**/*.ppt",
        "**/*.pptx",
        "**/*.odt",
        "**/*.ods",
        "**/*.odp",
      ]),
      (zia = ["**/*.pdf", "**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.gif", "**/*.webp", "**/*.bmp", "**/*.svg"]),
      (Oor = ["**/.vscode/**", "**/.idea/**", "**/dist/**", "**/build/**", "**/coverage/**", "**/__pycache__/**"]),
      (Wzn = ["**/*.pyc", "**/*.pyo"]),
      (Yia = ["**/.DS_Store", "**/.env"]),
      (Kia = [...Hzn, ...Oor, ...Vzn, ...Wzn, ...Yia]),
      (vit = class {
        config;
        constructor(e) {
          this.config = e;
        }
        getCoreIgnorePatterns() {
          return [...Hzn];
        }
        getDefaultExcludePatterns(e = {}) {
          let {
              includeDefaults: r = !0,
              customPatterns: n = [],
              runtimePatterns: o = [],
              includeDynamicPatterns: s = !0,
            } = e,
            a = [];
          return (r && a.push(...Kia), s && a.push(`**/${Xce()}`), a.push(...n), a.push(...o), a);
        }
        getReadManyFilesExcludes(e = []) {
          return this.getDefaultExcludePatterns({
            includeDefaults: !0,
            runtimePatterns: e,
            includeDynamicPatterns: !0,
          });
        }
        getGlobExcludes(e = []) {
          return [...this.getCoreIgnorePatterns(), ...e];
        }
        buildExcludePatterns(e) {
          return this.getDefaultExcludePatterns(e);
        }
      }));
    jEc = [...Jia([...Vzn, ...zia, ...Wzn]), ".dat", ".obj", ".o", ".a", ".lib", ".wasm"].sort();
  });
import Yzn from "node:fs";
import kO from "node:path";
import { spawn as Kzn } from "node:child_process";
var Nor,
  lA,
  Zce = j(() => {
    "use strict";
    Fc();
    Ba();
    Bp();
    Pa();
    E0();
    bi();
    zzn();
    ((Nor = 2e4),
      (lA = class t extends Li {
        config;
        static Name = "search_file_content";
        static DisplayName = "Search";
        constructor(e) {
          (super(
            t.Name,
            t.DisplayName,
            "Searches for a regular expression pattern within the content of files or directories using ripgrep for fast performance. Can search in a specific file or recursively in a directory. Can filter files by a glob pattern. Returns the lines containing matches, along with their file paths and line numbers. Directory results limited to 20,000 matches like VSCode.",
            Mi.Regex,
            Fi.Search,
            {
              properties: {
                pattern: {
                  description:
                    "The regular expression (regex) pattern to search for within file contents (e.g., 'function\\\\s+myFunction', 'import\\\\s+\\\\{.*\\\\}\\\\s+from\\\\s+.*').",
                  type: Dt.STRING,
                },
                path: {
                  description:
                    "Optional: The absolute path to the file or directory to search within. If omitted, searches the current working directory.",
                  type: Dt.STRING,
                },
                include: {
                  description:
                    "Optional: A glob pattern to filter which files are searched (e.g., '*.js', '*.{ts,tsx}', 'src/**'). When searching a single file, validates if the file matches the pattern. If omitted, searches all files (respecting potential global ignores).",
                  type: Dt.STRING,
                },
                case_sensitive: {
                  description: "If true, search is case-sensitive. Defaults to false (ignore case) if omitted.",
                  type: Dt.BOOLEAN,
                },
                fixed_strings: {
                  description:
                    "If true, treats the `pattern` as a literal string instead of a regular expression. Defaults to false (basic regex) if omitted.",
                  type: Dt.BOOLEAN,
                },
                context: {
                  description:
                    "Show this many lines of context around each match (equivalent to grep -C). Defaults to 0 if omitted.",
                  type: Dt.INTEGER,
                },
                after: {
                  description:
                    "Show this many lines after each match (equivalent to grep -A). Defaults to 0 if omitted.",
                  type: Dt.INTEGER,
                },
                before: {
                  description:
                    "Show this many lines before each match (equivalent to grep -B). Defaults to 0 if omitted.",
                  type: Dt.INTEGER,
                },
                no_ignore: {
                  description:
                    "If true, searches all files including those usually ignored (like in .gitignore, build/, dist/, etc). Defaults to false if omitted.",
                  type: Dt.BOOLEAN,
                },
              },
              required: ["pattern"],
              type: Dt.OBJECT,
            },
            !0,
            !1,
            ["ripgrep", "RipGrep", "rg"],
          ),
            (this.config = e));
        }
        resolveAndValidatePath(e) {
          if (!e) return { absolutePath: null, isFile: !1, displayPath: "." };
          let r = kO.resolve(this.config.getTargetDir(), e),
            n = this.config.getWorkspaceContext();
          if (!n.isPathWithinWorkspace(r)) {
            let o = n.getDirectories();
            throw new Error(I.t("ripgrepTool.errors.pathValidationFailed", { path: e, directories: o.join(", ") }));
          }
          try {
            let o = Yzn.statSync(r);
            return { absolutePath: r, isFile: o.isFile(), displayPath: e };
          } catch (o) {
            throw Go(o) && o.code === "ENOENT"
              ? new Error(I.t("ripgrepTool.errors.pathNotExist", { path: r }))
              : new Error(I.t("ripgrepTool.errors.pathAccessFailed", { path: r, error: o }));
          }
        }
        validateToolParams(e) {
          let r = iu.validate(this.schema.parameters, e);
          if (r) return r;
          if (e.path)
            try {
              this.resolveAndValidatePath(e.path);
            } catch (n) {
              return mr(n);
            }
          return null;
        }
        async execute(e) {
          try {
            let r = this.config.getWorkspaceContext(),
              n = this.resolveAndValidatePath(e.path),
              o = [],
              s;
            if (n.absolutePath && n.isFile)
              ((o = await this.performSingleFileSearch({
                pattern: e.pattern,
                filePath: n.absolutePath,
                include: e.include,
                case_sensitive: e.case_sensitive,
                fixed_strings: e.fixed_strings,
                context: e.context,
                after: e.after,
                before: e.before,
                no_ignore: e.no_ignore,
              })),
                (s = `in file "${n.displayPath}"`));
            else {
              let f;
              if (n.absolutePath === null) {
                f = r.getDirectories();
                let h = f.length;
                s = h > 1 ? `across ${h} workspace directories` : "in the workspace directory";
              } else ((f = [n.absolutePath]), (s = `in path "${n.displayPath}"`));
              let p = Nor;
              this.config.getDebugMode() && console.log(`[RipGrepTool] Total result limit: ${p}`);
              for (let h of f) {
                let g = await this.performDirectorySearch({
                  pattern: e.pattern,
                  path: h,
                  include: e.include,
                  case_sensitive: e.case_sensitive,
                  fixed_strings: e.fixed_strings,
                  context: e.context,
                  after: e.after,
                  before: e.before,
                  no_ignore: e.no_ignore,
                });
                if (f.length > 1) {
                  let b = kO.basename(h);
                  g.forEach((A) => {
                    A.filePath = kO.join(b, A.filePath);
                  });
                }
                if (((o = o.concat(g)), o.length >= p)) {
                  o = o.slice(0, p);
                  break;
                }
              }
            }
            if (o.length === 0)
              return {
                llmContent: I.t("ripgrepTool.messages.noMatchesFound", {
                  pattern: e.pattern,
                  location: s,
                  filter: e.include ? ` (${I.t("ripgrepTool.messages.filter")}: "${e.include}")` : "",
                }),
                returnDisplay: I.t("ripgrepTool.messages.noMatchesFoundShort"),
              };
            let a = !n.isFile && n.absolutePath && o.length >= Nor,
              u = o.reduce((f, p) => {
                let h = p.filePath;
                return (f[h] || (f[h] = []), f[h].push(p), f[h].sort((g, b) => g.lineNumber - b.lineNumber), f);
              }, {}),
              c = o.length,
              m = I.t("ripgrepTool.messages.matchesFound", {
                count: c,
                matchType: I.t(c === 1 ? "ripgrepTool.messages.match" : "ripgrepTool.messages.matches"),
                pattern: e.pattern,
                location: s,
                filter: e.include ? ` (${I.t("ripgrepTool.messages.filter")}: "${e.include}")` : "",
              });
            (a && (m += ` (${I.t("ripgrepTool.messages.resultsLimited", { maxMatches: Nor })})`),
              (m += `:
---
`));
            for (let f in u)
              ((m += `File: ${f}
`),
                u[f].forEach((p) => {
                  let h = p.line.trim();
                  m += `L${p.lineNumber}: ${h}
`;
                }),
                (m += `---
`));
            let d = I.t("ripgrepTool.messages.foundMatches", {
              count: c,
              matchType: I.t(c === 1 ? "ripgrepTool.messages.match" : "ripgrepTool.messages.matches"),
            });
            return (
              a && (d += ` (${I.t("ripgrepTool.messages.limited")})`),
              { llmContent: m.trim(), returnDisplay: d }
            );
          } catch (r) {
            console.error(`Error during RipGrepTool execution: ${r}`);
            let n = mr(r);
            return {
              llmContent: I.t("ripgrepTool.errors.searchFailed", { error: n }),
              returnDisplay: I.t("ripgrepTool.errors.searchFailedShort", { error: n }),
            };
          }
        }
        parseRipgrepJsonOutput(e, r) {
          let n = [];
          if (!e) return n;
          let o = e.trim().split(`
`);
          for (let s of o)
            if (s.trim())
              try {
                let a = JSON.parse(s);
                if (a.type === "match") {
                  let u = a.data;
                  if (u.path?.text && u.lines?.text) {
                    let c = kO.resolve(r, u.path.text),
                      m = kO.relative(r, c);
                    n.push({ filePath: m || kO.basename(c), lineNumber: u.line_number, line: u.lines.text.trimEnd() });
                  }
                }
              } catch (a) {
                this.config.getDebugMode() && console.warn(`[RipGrepTool] Failed to parse ripgrep JSON line: ${s}`, a);
              }
          return n;
        }
        async performSingleFileSearch(e) {
          let {
            pattern: r,
            filePath: n,
            include: o,
            case_sensitive: s,
            fixed_strings: a,
            context: u,
            after: c,
            before: m,
            no_ignore: d,
          } = e;
          if (o) {
            let p = kO.basename(n),
              h = o.replace(/\*/g, ".*").replace(/\?/g, ".");
            if (!new RegExp(`^${h}$`, "i").test(p)) return [];
          }
          let f = ["--json"];
          (s || f.push("--ignore-case"),
            a ? (f.push("--fixed-strings"), f.push(r)) : f.push("--regexp", r),
            u && f.push("--context", u.toString()),
            c && f.push("--after-context", c.toString()),
            m && f.push("--before-context", m.toString()),
            d && f.push("--no-ignore"),
            f.push(n));
          try {
            let p = await new Promise((g, b) => {
                let A = Kzn(bOe(), f, { windowsHide: !0, env: process.env }),
                  y = [],
                  E = [];
                (A.stdout.on("data", (v) => y.push(v)),
                  A.stderr.on("data", (v) => E.push(v)),
                  A.on("error", (v) => {
                    b(new Error(I.t("ripgrepTool.errors.failedToStart", { error: v.message })));
                  }),
                  A.on("close", (v) => {
                    let C = Buffer.concat(y).toString("utf8"),
                      x = Buffer.concat(E).toString("utf8");
                    v === 0
                      ? g(C)
                      : v === 1
                        ? g("")
                        : b(new Error(I.t("ripgrepTool.errors.ripgrepExited", { code: v, stderr: x })));
                  }));
              }),
              h = kO.dirname(n);
            return this.parseRipgrepJsonOutput(p, h);
          } catch (p) {
            throw (console.error(`RipGrepTool: Single file search failed: ${mr(p)}`), p);
          }
        }
        async performDirectorySearch(e) {
          let {
              pattern: r,
              path: n,
              include: o,
              case_sensitive: s,
              fixed_strings: a,
              context: u,
              after: c,
              before: m,
              no_ignore: d,
            } = e,
            f = ["--json"];
          (s || f.push("--ignore-case"),
            a ? (f.push("--fixed-strings"), f.push(r)) : f.push("--regexp", r),
            u && f.push("--context", u.toString()),
            c && f.push("--after-context", c.toString()),
            m && f.push("--before-context", m.toString()),
            d && f.push("--no-ignore"),
            o && f.push("--glob", o),
            d ||
              new vit(this.config).getGlobExcludes([...Oor, "*.log", "*.tmp"]).forEach((g) => {
                f.push("--glob", `!${g}`);
              }),
            f.push("--threads", "4"),
            f.push(n));
          try {
            let p = await new Promise((h, g) => {
              let b = Kzn(bOe(), f, { windowsHide: !0 }),
                A = [],
                y = [];
              (b.stdout.on("data", (E) => A.push(E)),
                b.stderr.on("data", (E) => y.push(E)),
                b.on("error", (E) => {
                  g(new Error(I.t("ripgrepTool.errors.failedToStart", { error: E.message })));
                }),
                b.on("close", (E) => {
                  let v = Buffer.concat(A).toString("utf8"),
                    C = Buffer.concat(y).toString("utf8");
                  E === 0
                    ? h(v)
                    : E === 1
                      ? h("")
                      : g(new Error(I.t("ripgrepTool.errors.ripgrepExited", { code: E, stderr: C })));
                }));
            });
            return this.parseRipgrepJsonOutput(p, n);
          } catch (p) {
            throw (console.error(`RipGrepTool: ripgrep failed: ${mr(p)}`), p);
          }
        }
        getDescription(e) {
          if (!e?.pattern) return "";
          let r = `'${e.pattern}'`;
          if ((e.include && (r += ` in ${e.include}`), e.path)) {
            let n = kO.resolve(this.config.getTargetDir(), e.path);
            if (n === this.config.getTargetDir() || e.path === ".") r += " within ./";
            else {
              let o = Mc(n, this.config.getTargetDir());
              try {
                Yzn.statSync(n).isFile() ? (r += ` in file ${ba(o)}`) : (r += ` within ${ba(o)}`);
              } catch {
                r += ` within ${ba(o)}`;
              }
            }
          } else
            this.config.getWorkspaceContext().getDirectories().length > 1
              ? (r += " across all workspace directories")
              : (r += " within ./");
          return r;
        }
      }));
  });
import Jzn from "fs";
import Dve from "path";
function Xzn(t, e, r) {
  let n = [...t];
  return (
    n.sort((o, s) => {
      let a = o.mtimeMs ?? 0,
        u = s.mtimeMs ?? 0,
        c = e - a < r,
        m = e - u < r;
      return c && m ? u - a : c ? -1 : m ? 1 : o.fullpath().localeCompare(s.fullpath());
    }),
    n
  );
}
var cd,
  cU = j(() => {
    "use strict";
    xO();
    Bp();
    Fc();
    Bb();
    Ba();
    Pa();
    bi();
    cd = class t extends Li {
      config;
      static Name = "glob";
      static DisplayName = "Glob";
      static ExecutionError = class extends Error {
        type;
        constructor(e, r) {
          (super(r), (this.type = e), (this.name = "GlobToolExecutionError"));
        }
      };
      constructor(e) {
        (super(
          t.Name,
          t.DisplayName,
          "Efficiently finds files matching specific glob patterns (e.g., `src/**/*.ts`, `**/*.md`), returning absolute paths sorted by modification time (newest first). Ideal for quickly locating files based on their name or path structure, especially in large codebases.",
          Mi.FileSearch,
          Fi.Search,
          {
            properties: {
              pattern: {
                description: "The glob pattern to match against (e.g., '**/*.py', 'docs/*.md').",
                type: Dt.STRING,
              },
              path: {
                description:
                  "Optional: The absolute path to the directory to search within. If omitted, searches the root directory.",
                type: Dt.STRING,
              },
              case_sensitive: {
                description: "Optional: Whether the search should be case-sensitive. Defaults to false.",
                type: Dt.BOOLEAN,
              },
              respect_git_ignore: {
                description:
                  "Optional: Whether to respect .gitignore patterns when finding files. Only available in git repositories. Defaults to true.",
                type: Dt.BOOLEAN,
              },
            },
            required: ["pattern"],
            type: Dt.OBJECT,
          },
          !0,
          !1,
          ["Glob"],
        ),
          (this.config = e));
      }
      validateToolParams(e) {
        let r = iu.validate(this.schema.parameters, e);
        if (r) return r;
        let n = Dve.resolve(this.config.getTargetDir(), e.path || "."),
          o = this.config.getWorkspaceContext();
        if (!o.isPathWithinWorkspace(n)) {
          let a = o.getDirectories();
          return I.t("globTool.errors.pathNotInWorkspace", { path: n, directories: a.join(", ") });
        }
        let s = n || this.config.getTargetDir();
        try {
          if (!Jzn.existsSync(s)) return I.t("globTool.errors.pathNotExist", { path: s });
          if (!Jzn.statSync(s).isDirectory()) return I.t("globTool.errors.pathNotDirectory", { path: s });
        } catch (a) {
          return I.t("globTool.errors.accessError", { error: a });
        }
        return !e.pattern || typeof e.pattern != "string" || e.pattern.trim() === ""
          ? I.t("globTool.errors.patternEmpty")
          : null;
      }
      getDescription(e) {
        if (!e?.pattern) return "";
        let r = `'${e.pattern}'`;
        if (e.path) {
          let n = Dve.resolve(this.config.getTargetDir(), e.path || "."),
            o = Mc(n, this.config.getTargetDir());
          r += ` within ${ba(o)}`;
        }
        return r;
      }
      async execute(e, r) {
        let n = this.validateToolParams(e);
        if (n)
          return {
            llmContent: `Error: Invalid parameters provided. Reason: ${n}`,
            returnDisplay: n,
            error: { message: n, type: Lr.INVALID_TOOL_PARAMS },
          };
        try {
          let o = this.config.getWorkspaceContext(),
            s = o.getDirectories(),
            a;
          if (e.path) {
            let C = Dve.resolve(this.config.getTargetDir(), e.path);
            if (!o.isPathWithinWorkspace(C))
              return {
                llmContent: I.t("globTool.errors.pathNotInWorkspace", { path: e.path, directories: s.join(", ") }),
                returnDisplay: I.t("globTool.errors.pathNotInWorkspaceShort"),
                error: {
                  message: I.t("globTool.errors.pathNotInWorkspace", { path: e.path, directories: s.join(", ") }),
                  type: Lr.PATH_NOT_IN_WORKSPACE,
                },
              };
            a = [C];
          } else a = s;
          let u = e.respect_git_ignore ?? this.config.getFileFilteringRespectGitIgnore(),
            c = this.config.getFileService(),
            m = [];
          for (let C of a) {
            let x = await q6(e.pattern, {
              cwd: C,
              withFileTypes: !0,
              nodir: !0,
              stat: !0,
              nocase: !e.case_sensitive,
              dot: !0,
              ignore: ["**/node_modules/**", "**/.git/**"],
              follow: !1,
              signal: r,
            });
            m = m.concat(x);
          }
          let d = m,
            f = d,
            p = 0;
          if (u) {
            let C = d.map((R) => Dve.relative(this.config.getTargetDir(), R.fullpath())),
              x = c.filterFiles(C, { respectGitIgnore: u }),
              k = new Set(x.map((R) => Dve.resolve(this.config.getTargetDir(), R)));
            ((f = d.filter((R) => k.has(R.fullpath()))), (p = d.length - f.length));
          }
          if (!f || f.length === 0) {
            let C = I.t("globTool.messages.noFilesFound", { pattern: e.pattern });
            return (
              a.length === 1 ? (C += ` within ${a[0]}`) : (C += ` within ${a.length} workspace directories`),
              p > 0 && (C += ` (${p} files were git-ignored)`),
              { llmContent: C, returnDisplay: I.t("globTool.messages.noFilesFoundShort") }
            );
          }
          let h = 1440 * 60 * 1e3,
            g = new Date().getTime(),
            A = Xzn(f, g, h).map((C) => C.fullpath()),
            y = A.join(`
`),
            E = A.length,
            v = I.t("globTool.messages.filesFound", { count: E, pattern: e.pattern });
          return (
            a.length === 1 ? (v += ` within ${a[0]}`) : (v += ` across ${a.length} workspace directories`),
            p > 0 && (v += ` (${p} additional files were git-ignored)`),
            (v += `, sorted by modification time (newest first):
${y}`),
            { llmContent: v, returnDisplay: I.t("globTool.messages.filesFoundShort", { count: E }) }
          );
        } catch (o) {
          let s = o instanceof Error ? o.message : String(o);
          return (
            console.error(`GlobLogic execute Error: ${s}`, o),
            {
              llmContent: I.t("globTool.errors.searchFailed", { error: s }),
              returnDisplay: I.t("globTool.errors.searchFailedShort"),
              error: { message: s, type: Lr.GLOB_EXECUTION_ERROR },
            }
          );
        }
      }
    };
  });
async function Zzn(t, e) {
  let { host: r, port: n, path: o, authToken: s } = t,
    a;
  try {
    e.debug("Attempting to connect to IDE via Websocket");
    let u = new S6({ name: "websocket-client", version: "1.0.0" }),
      c = {};
    return (
      s && (c.websocketOptions = { headers: { Authorization: `Bearer ${s}` } }),
      (a = new mV(new URL(`ws://${r}:${n}${o}`), c)),
      u.connect(a),
      { success: !0, client: u }
    );
  } catch (u) {
    if ((e.error("Websocket connection failed:", u), a))
      try {
        await a.close();
      } catch (c) {
        e.debug("Failed to close transport:", c);
      }
    return { success: !1 };
  }
}
var eYn = j(() => {
  "use strict";
  ase();
  Ejt();
});