/**
 * @module ERe
 * @category app/i18n
 * @label iflow-i18n
 * @position 27 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ERe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 *
 * === Auto-analyzed semantic info ===
 * Exports: default
 * Functions: Umo, Smo, wmo, kRe, Fmo, Ghe, U9t, sTr, imo, xmo, nTr, TTr, j9t, DTr, NRe
 * Features: esbuild module exports: ERe
 * === End semantic info ===
 */


var ERe = T((Pyu, R9t) => {
  "use strict";
  var Jxr = Kxr();
  R9t.exports = Jxr;
  R9t.exports.default = Jxr;
});
function emo() {
  let t = new Map();
  for (let [e, r] of Object.entries(ed)) {
    for (let [n, o] of Object.entries(r))
      ((ed[n] = { open: `\x1B[${o[0]}m`, close: `\x1B[${o[1]}m` }), (r[n] = ed[n]), t.set(o[0], o[1]));
    Object.defineProperty(ed, e, { value: r, enumerable: !1 });
  }
  return (
    Object.defineProperty(ed, "codes", { value: t, enumerable: !1 }),
    (ed.color.close = "\x1B[39m"),
    (ed.bgColor.close = "\x1B[49m"),
    (ed.color.ansi = Xxr()),
    (ed.color.ansi256 = Zxr()),
    (ed.color.ansi16m = eTr()),
    (ed.bgColor.ansi = Xxr(10)),
    (ed.bgColor.ansi256 = Zxr(10)),
    (ed.bgColor.ansi16m = eTr(10)),
    Object.defineProperties(ed, {
      rgbToAnsi256: {
        value(e, r, n) {
          return e === r && r === n
            ? e < 8
              ? 16
              : e > 248
                ? 231
                : Math.round(((e - 8) / 247) * 24) + 232
            : 16 + 36 * Math.round((e / 255) * 5) + 6 * Math.round((r / 255) * 5) + Math.round((n / 255) * 5);
        },
        enumerable: !1,
      },
      hexToRgb: {
        value(e) {
          let r = /[a-f\d]{6}|[a-f\d]{3}/i.exec(e.toString(16));
          if (!r) return [0, 0, 0];
          let [n] = r;
          n.length === 3 && (n = [...n].map((s) => s + s).join(""));
          let o = Number.parseInt(n, 16);
          return [(o >> 16) & 255, (o >> 8) & 255, o & 255];
        },
        enumerable: !1,
      },
      hexToAnsi256: { value: (e) => ed.rgbToAnsi256(...ed.hexToRgb(e)), enumerable: !1 },
      ansi256ToAnsi: {
        value(e) {
          if (e < 8) return 30 + e;
          if (e < 16) return 90 + (e - 8);
          let r, n, o;
          if (e >= 232) ((r = ((e - 232) * 10 + 8) / 255), (n = r), (o = r));
          else {
            e -= 16;
            let u = e % 36;
            ((r = Math.floor(e / 36) / 5), (n = Math.floor(u / 6) / 5), (o = (u % 6) / 5));
          }
          let s = Math.max(r, n, o) * 2;
          if (s === 0) return 30;
          let a = 30 + ((Math.round(o) << 2) | (Math.round(n) << 1) | Math.round(r));
          return (s === 2 && (a += 60), a);
        },
        enumerable: !1,
      },
      rgbToAnsi: { value: (e, r, n) => ed.ansi256ToAnsi(ed.rgbToAnsi256(e, r, n)), enumerable: !1 },
      hexToAnsi: { value: (e) => ed.ansi256ToAnsi(ed.hexToAnsi256(e)), enumerable: !1 },
    }),
    ed
  );
}
var Xxr,
  Zxr,
  eTr,
  ed,
  Byu,
  X0o,
  Z0o,
  Lyu,
  tmo,
  EC,
  tTr = j(() => {
    ((Xxr =
      (t = 0) =>
      (e) =>
        `\x1B[${e + t}m`),
      (Zxr =
        (t = 0) =>
        (e) =>
          `\x1B[${38 + t};5;${e}m`),
      (eTr =
        (t = 0) =>
        (e, r, n) =>
          `\x1B[${38 + t};2;${e};${r};${n}m`),
      (ed = {
        modifier: {
          reset: [0, 0],
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          overline: [53, 55],
          inverse: [7, 27],
          hidden: [8, 28],
          strikethrough: [9, 29],
        },
        color: {
          black: [30, 39],
          red: [31, 39],
          green: [32, 39],
          yellow: [33, 39],
          blue: [34, 39],
          magenta: [35, 39],
          cyan: [36, 39],
          white: [37, 39],
          blackBright: [90, 39],
          gray: [90, 39],
          grey: [90, 39],
          redBright: [91, 39],
          greenBright: [92, 39],
          yellowBright: [93, 39],
          blueBright: [94, 39],
          magentaBright: [95, 39],
          cyanBright: [96, 39],
          whiteBright: [97, 39],
        },
        bgColor: {
          bgBlack: [40, 49],
          bgRed: [41, 49],
          bgGreen: [42, 49],
          bgYellow: [43, 49],
          bgBlue: [44, 49],
          bgMagenta: [45, 49],
          bgCyan: [46, 49],
          bgWhite: [47, 49],
          bgBlackBright: [100, 49],
          bgGray: [100, 49],
          bgGrey: [100, 49],
          bgRedBright: [101, 49],
          bgGreenBright: [102, 49],
          bgYellowBright: [103, 49],
          bgBlueBright: [104, 49],
          bgMagentaBright: [105, 49],
          bgCyanBright: [106, 49],
          bgWhiteBright: [107, 49],
        },
      }),
      (Byu = Object.keys(ed.modifier)),
      (X0o = Object.keys(ed.color)),
      (Z0o = Object.keys(ed.bgColor)),
      (Lyu = [...X0o, ...Z0o]));
    ((tmo = emo()), (EC = tmo));
  });
import k9t from "node:process";
import rmo from "node:os";
import rTr from "node:tty";
function m_(t, e = globalThis.Deno ? globalThis.Deno.args : k9t.argv) {
  let r = t.startsWith("-") ? "" : t.length === 1 ? "-" : "--",
    n = e.indexOf(r + t),
    o = e.indexOf("--");
  return n !== -1 && (o === -1 || n < o);
}
function nmo() {
  if ("FORCE_COLOR" in td)
    return td.FORCE_COLOR === "true"
      ? 1
      : td.FORCE_COLOR === "false"
        ? 0
        : td.FORCE_COLOR.length === 0
          ? 1
          : Math.min(Number.parseInt(td.FORCE_COLOR, 10), 3);
}
function imo(t) {
  return t === 0 ? !1 : { level: t, hasBasic: !0, has256: t >= 2, has16m: t >= 3 };
}
function omo(t, { streamIsTTY: e, sniffFlags: r = !0 } = {}) {
  let n = nmo();
  n !== void 0 && (vRe = n);
  let o = r ? vRe : n;
  if (o === 0) return 0;
  if (r) {
    if (m_("color=16m") || m_("color=full") || m_("color=truecolor")) return 3;
    if (m_("color=256")) return 2;
  }
  if ("TF_BUILD" in td && "AGENT_NAME" in td) return 1;
  if (t && !e && o === void 0) return 0;
  let s = o || 0;
  if (td.TERM === "dumb") return s;
  if (k9t.platform === "win32") {
    let a = rmo.release().split(".");
    return Number(a[0]) >= 10 && Number(a[2]) >= 10586 ? (Number(a[2]) >= 14931 ? 3 : 2) : 1;
  }
  if ("CI" in td)
    return ["GITHUB_ACTIONS", "GITEA_ACTIONS", "CIRCLECI"].some((a) => a in td)
      ? 3
      : ["TRAVIS", "APPVEYOR", "GITLAB_CI", "BUILDKITE", "DRONE"].some((a) => a in td) || td.CI_NAME === "codeship"
        ? 1
        : s;
  if ("TEAMCITY_VERSION" in td) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(td.TEAMCITY_VERSION) ? 1 : 0;
  if (td.COLORTERM === "truecolor" || td.TERM === "xterm-kitty" || td.TERM === "xterm-ghostty" || td.TERM === "wezterm")
    return 3;
  if ("TERM_PROGRAM" in td) {
    let a = Number.parseInt((td.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
    switch (td.TERM_PROGRAM) {
      case "iTerm.app":
        return a >= 3 ? 3 : 2;
      case "Apple_Terminal":
        return 2;
    }
  }
  return /-256(color)?$/i.test(td.TERM)
    ? 2
    : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(td.TERM) || "COLORTERM" in td
      ? 1
      : s;
}
function nTr(t, e = {}) {
  let r = omo(t, { streamIsTTY: t && t.isTTY, ...e });
  return imo(r);
}
var td,
  vRe,
  smo,
  iTr,
  oTr = j(() => {
    ({ env: td } = k9t);
    m_("no-color") || m_("no-colors") || m_("color=false") || m_("color=never")
      ? (vRe = 0)
      : (m_("color") || m_("colors") || m_("color=true") || m_("color=always")) && (vRe = 1);
    ((smo = { stdout: nTr({ isTTY: rTr.isatty(1) }), stderr: nTr({ isTTY: rTr.isatty(2) }) }), (iTr = smo));
  });
function sTr(t, e, r) {
  let n = t.indexOf(e);
  if (n === -1) return t;
  let o = e.length,
    s = 0,
    a = "";
  do ((a += t.slice(s, n) + e + r), (s = n + o), (n = t.indexOf(e, s)));
  while (n !== -1);
  return ((a += t.slice(s)), a);
}
function aTr(t, e, r, n) {
  let o = 0,
    s = "";
  do {
    let a = t[n - 1] === "\r";
    ((s +=
      t.slice(o, a ? n - 1 : n) +
      e +
      (a
        ? `\r
`
        : `
`) +
      r),
      (o = n + 1),
      (n = t.indexOf(
        `
`,
        o,
      )));
  } while (n !== -1);
  return ((s += t.slice(o)), s);
}
var uTr = j(() => {});
function Qhe(t) {
  return umo(t);
}
var cTr,
  lTr,
  O9t,
  cee,
  jhe,
  mTr,
  lee,
  amo,
  umo,
  N9t,
  cmo,
  lmo,
  P9t,
  CRe,
  mmo,
  dmo,
  Vyu,
  Zd,
  SRe = j(() => {
    tTr();
    oTr();
    uTr();
    (({ stdout: cTr, stderr: lTr } = iTr),
      (O9t = Symbol("GENERATOR")),
      (cee = Symbol("STYLER")),
      (jhe = Symbol("IS_EMPTY")),
      (mTr = ["ansi", "ansi", "ansi256", "ansi16m"]),
      (lee = Object.create(null)),
      (amo = (t, e = {}) => {
        if (e.level && !(Number.isInteger(e.level) && e.level >= 0 && e.level <= 3))
          throw new Error("The `level` option should be an integer from 0 to 3");
        let r = cTr ? cTr.level : 0;
        t.level = e.level === void 0 ? r : e.level;
      }),
      (umo = (t) => {
        let e = (...r) => r.join(" ");
        return (amo(e, t), Object.setPrototypeOf(e, Qhe.prototype), e);
      }));
    Object.setPrototypeOf(Qhe.prototype, Function.prototype);
    for (let [t, e] of Object.entries(EC))
      lee[t] = {
        get() {
          let r = CRe(this, P9t(e.open, e.close, this[cee]), this[jhe]);
          return (Object.defineProperty(this, t, { value: r }), r);
        },
      };
    lee.visible = {
      get() {
        let t = CRe(this, this[cee], !0);
        return (Object.defineProperty(this, "visible", { value: t }), t);
      },
    };
    ((N9t = (t, e, r, ...n) =>
      t === "rgb"
        ? e === "ansi16m"
          ? EC[r].ansi16m(...n)
          : e === "ansi256"
            ? EC[r].ansi256(EC.rgbToAnsi256(...n))
            : EC[r].ansi(EC.rgbToAnsi(...n))
        : t === "hex"
          ? N9t("rgb", e, r, ...EC.hexToRgb(...n))
          : EC[r][t](...n)),
      (cmo = ["rgb", "hex", "ansi256"]));
    for (let t of cmo) {
      lee[t] = {
        get() {
          let { level: r } = this;
          return function (...n) {
            let o = P9t(N9t(t, mTr[r], "color", ...n), EC.color.close, this[cee]);
            return CRe(this, o, this[jhe]);
          };
        },
      };
      let e = "bg" + t[0].toUpperCase() + t.slice(1);
      lee[e] = {
        get() {
          let { level: r } = this;
          return function (...n) {
            let o = P9t(N9t(t, mTr[r], "bgColor", ...n), EC.bgColor.close, this[cee]);
            return CRe(this, o, this[jhe]);
          };
        },
      };
    }
    ((lmo = Object.defineProperties(() => {}, {
      ...lee,
      level: {
        enumerable: !0,
        get() {
          return this[O9t].level;
        },
        set(t) {
          this[O9t].level = t;
        },
      },
    })),
      (P9t = (t, e, r) => {
        let n, o;
        return (
          r === void 0 ? ((n = t), (o = e)) : ((n = r.openAll + t), (o = e + r.closeAll)),
          { open: t, close: e, openAll: n, closeAll: o, parent: r }
        );
      }),
      (CRe = (t, e, r) => {
        let n = (...o) => mmo(n, o.length === 1 ? "" + o[0] : o.join(" "));
        return (Object.setPrototypeOf(n, lmo), (n[O9t] = t), (n[cee] = e), (n[jhe] = r), n);
      }),
      (mmo = (t, e) => {
        if (t.level <= 0 || !e) return t[jhe] ? "" : e;
        let r = t[cee];
        if (r === void 0) return e;
        let { openAll: n, closeAll: o } = r;
        if (e.includes("\x1B")) for (; r !== void 0; ) ((e = sTr(e, r.close, r.open)), (r = r.parent));
        let s = e.indexOf(`
`);
        return (s !== -1 && (e = aTr(e, o, n, s)), n + e + o);
      }));
    Object.defineProperties(Qhe.prototype, lee);
    ((dmo = Qhe()), (Vyu = Qhe({ level: lTr ? lTr.level : 0 })), (Zd = dmo));
  });
var fmo,
  pmo,
  hmo,
  gmo,
  Xw,
  wRe = j(() => {
    SRe();
    ((fmo = /^rgb\(\s?(\d+),\s?(\d+),\s?(\d+)\s?\)$/),
      (pmo = /^ansi256\(\s?(\d+)\s?\)$/),
      (hmo = (t) => t in Zd),
      (gmo = (t, e, r) => {
        if (!e) return t;
        if (hmo(e)) {
          if (r === "foreground") return Zd[e](t);
          let n = `bg${e[0].toUpperCase() + e.slice(1)}`;
          return Zd[n](t);
        }
        if (e.startsWith("#")) return r === "foreground" ? Zd.hex(e)(t) : Zd.bgHex(e)(t);
        if (e.startsWith("ansi256")) {
          let n = pmo.exec(e);
          if (!n) return t;
          let o = Number(n[1]);
          return r === "foreground" ? Zd.ansi256(o)(t) : Zd.bgAnsi256(o)(t);
        }
        if (e.startsWith("rgb")) {
          let n = fmo.exec(e);
          if (!n) return t;
          let o = Number(n[1]),
            s = Number(n[2]),
            a = Number(n[3]);
          return r === "foreground" ? Zd.rgb(o, s, a)(t) : Zd.bgRgb(o, s, a)(t);
        }
        return t;
      }),
      (Xw = gmo));
  });
var dTr,
  bmo,
  fTr,
  pTr = j(() => {
    dTr = Se(ERe(), 1);
    SRe();
    wRe();
    ((bmo = (t, e, r, n) => {
      if (r.style.borderStyle) {
        let o = r.yogaNode.getComputedWidth(),
          s = r.yogaNode.getComputedHeight(),
          a = typeof r.style.borderStyle == "string" ? dTr.default[r.style.borderStyle] : r.style.borderStyle,
          u = r.style.borderTopColor ?? r.style.borderColor,
          c = r.style.borderBottomColor ?? r.style.borderColor,
          m = r.style.borderLeftColor ?? r.style.borderColor,
          d = r.style.borderRightColor ?? r.style.borderColor,
          f = r.style.borderTopDimColor ?? r.style.borderDimColor,
          p = r.style.borderBottomDimColor ?? r.style.borderDimColor,
          h = r.style.borderLeftDimColor ?? r.style.borderDimColor,
          g = r.style.borderRightDimColor ?? r.style.borderDimColor,
          b = r.style.borderTop !== !1,
          A = r.style.borderBottom !== !1,
          y = r.style.borderLeft !== !1,
          E = r.style.borderRight !== !1,
          v = o - (y ? 1 : 0) - (E ? 1 : 0),
          C = b ? Xw((y ? a.topLeft : "") + a.top.repeat(v) + (E ? a.topRight : ""), u, "foreground") : void 0;
        b && f && (C = Zd.dim(C));
        let x = s;
        (b && (x -= 1), A && (x -= 1));
        let k = (
          Xw(a.left, m, "foreground") +
          `
`
        ).repeat(x);
        h && (k = Zd.dim(k));
        let R = (
          Xw(a.right, d, "foreground") +
          `
`
        ).repeat(x);
        g && (R = Zd.dim(R));
        let P = A
          ? Xw((y ? a.bottomLeft : "") + a.bottom.repeat(v) + (E ? a.bottomRight : ""), c, "foreground")
          : void 0;
        A && p && (P = Zd.dim(P));
        let D = b ? 1 : 0;
        (C && n.write(t, e, C, { transformers: [] }),
          y && n.write(t, e + D, k, { transformers: [] }),
          E && n.write(t + o - 1, e + D, R, { transformers: [] }),
          P && n.write(t, e + s - 1, P, { transformers: [] }));
      }
    }),
      (fTr = bmo));
  });
var Amo,
  hTr,
  gTr = j(() => {
    wRe();
    ((Amo = (t, e, r, n) => {
      if (!r.style.backgroundColor) return;
      let o = r.yogaNode.getComputedWidth(),
        s = r.yogaNode.getComputedHeight(),
        a = r.style.borderStyle && r.style.borderLeft !== !1 ? 1 : 0,
        u = r.style.borderStyle && r.style.borderRight !== !1 ? 1 : 0,
        c = r.style.borderStyle && r.style.borderTop !== !1 ? 1 : 0,
        m = r.style.borderStyle && r.style.borderBottom !== !1 ? 1 : 0,
        d = o - a - u,
        f = s - c - m;
      if (!(d > 0 && f > 0)) return;
      let p = Xw(" ".repeat(d), r.style.backgroundColor, "background");
      for (let h = 0; h < f; h++) n.write(t + a, e + c + h, p, { transformers: [] });
    }),
      (hTr = Amo));
  });
var ymo,
  xRe,
  bTr,
  B9t,
  ATr = j(async () => {
    Z7e();
    Wxr();
    await tG();
    K8t();
    await Yxr();
    J8t();
    pTr();
    gTr();
    ((ymo = (t, e) => {
      let r = t.childNodes[0]?.yogaNode;
      if (r) {
        let n = r.getComputedLeft(),
          o = r.getComputedTop();
        e =
          `
`.repeat(o) + I9t(e, n);
      }
      return e;
    }),
      (xRe = (t, e = {}) => {
        if ((e.skipStaticElements && t.internal_static) || t.yogaNode?.getDisplay() === gi.DISPLAY_NONE) return "";
        let r = "";
        if (t.nodeName === "ink-text") r = Dhe(t);
        else if (t.nodeName === "ink-box" || t.nodeName === "ink-root") {
          let n =
            t.style.flexDirection === "row" || t.style.flexDirection === "row-reverse"
              ? " "
              : `
`;
          r = (
            t.style.flexDirection === "row-reverse" || t.style.flexDirection === "column-reverse"
              ? [...t.childNodes].reverse()
              : [...t.childNodes]
          )
            .map((s) =>
              xRe(s, { parentRole: t.internal_accessibility?.role, skipStaticElements: e.skipStaticElements }),
            )
            .filter(Boolean)
            .join(n);
        }
        if (t.internal_accessibility) {
          let { role: n, state: o } = t.internal_accessibility;
          if (o) {
            let a = Object.keys(o)
              .filter((u) => o[u])
              .join(", ");
            a && (r = `(${a}) ${r}`);
          }
          n && n !== e.parentRole && (r = `${n}: ${r}`);
        }
        return r;
      }),
      (bTr = (t, e, r) => {
        let { offsetX: n = 0, offsetY: o = 0, transformers: s = [], skipStaticElements: a } = r;
        if (a && t.internal_static) return;
        let { yogaNode: u } = t;
        if (u) {
          if (u.getDisplay() === gi.DISPLAY_NONE) return;
          let c = n + u.getComputedLeft(),
            m = o + u.getComputedTop(),
            d = s;
          if (
            (typeof t.internal_transform == "function" && (d = [t.internal_transform, ...s]), t.nodeName === "ink-text")
          ) {
            let p = Dhe(t);
            if (p.length > 0) {
              let h = nG(p),
                g = zxr(u);
              if (h > g) {
                let b = t.style.textWrap ?? "wrap";
                p = tRe(p, g, b);
              }
              ((p = ymo(t, p)), e.write(c, m, p, { transformers: d }));
            }
            return;
          }
          let f = !1;
          if (t.nodeName === "ink-box") {
            (hTr(c, m, t, e), fTr(c, m, t, e));
            let p = t.style.overflowX === "hidden" || t.style.overflow === "hidden",
              h = t.style.overflowY === "hidden" || t.style.overflow === "hidden";
            if (p || h) {
              let g = p ? c + u.getComputedBorder(gi.EDGE_LEFT) : void 0,
                b = p ? c + u.getComputedWidth() - u.getComputedBorder(gi.EDGE_RIGHT) : void 0,
                A = h ? m + u.getComputedBorder(gi.EDGE_TOP) : void 0,
                y = h ? m + u.getComputedHeight() - u.getComputedBorder(gi.EDGE_BOTTOM) : void 0;
              (e.clip({ x1: g, x2: b, y1: A, y2: y }), (f = !0));
            }
          }
          if (t.nodeName === "ink-root" || t.nodeName === "ink-box") {
            for (let p of t.childNodes) bTr(p, e, { offsetX: c, offsetY: m, transformers: d, skipStaticElements: a });
            f && e.unclip();
          }
        }
      }),
      (B9t = bTr));
  });
function Smo(t) {
  return t.replace(vmo, "");
}
function wmo(t) {
  return Emo.test(t);
}
function xmo(t, e) {
  let r = 0;
  if (t.length > 1) for (let n of t.slice(1)) n >= "\uFF00" && n <= "\uFFEF" && (r += q5(n.codePointAt(0), e));
  return r;
}
function TRe(t, e = {}) {
  if (typeof t != "string" || t.length === 0) return 0;
  let { ambiguousIsNarrow: r = !0, countAnsiEscapeCodes: n = !1 } = e,
    o = t;
  if ((n || (o = p0(o)), o.length === 0)) return 0;
  let s = 0,
    a = { ambiguousAsWide: !r };
  for (let { segment: u } of _mo.segment(o)) {
    if (wmo(u)) continue;
    if (Cmo.test(u)) {
      s += 2;
      continue;
    }
    let c = Smo(u).codePointAt(0);
    ((s += q5(c, a)), (s += xmo(u, a)));
  }
  return s;
}
var _mo,
  Emo,
  vmo,
  Cmo,
  yTr = j(() => {
    s_();
    XP();
    ((_mo = new Intl.Segmenter()),
      (Emo = /^(?:\p{Default_Ignorable_Code_Point}|\p{Control}|\p{Mark}|\p{Surrogate})+$/v),
      (vmo = /^[\p{Default_Ignorable_Code_Point}\p{Control}\p{Format}\p{Mark}\p{Surrogate}]+/v),
      (Cmo = /^\p{RGI_Emoji}$/v));
  });
function Imo() {
  let t = new Map();
  for (let [e, r] of Object.entries(rd)) {
    for (let [n, o] of Object.entries(r))
      ((rd[n] = { open: `\x1B[${o[0]}m`, close: `\x1B[${o[1]}m` }), (r[n] = rd[n]), t.set(o[0], o[1]));
    Object.defineProperty(rd, e, { value: r, enumerable: !1 });
  }
  return (
    Object.defineProperty(rd, "codes", { value: t, enumerable: !1 }),
    (rd.color.close = "\x1B[39m"),
    (rd.bgColor.close = "\x1B[49m"),
    (rd.color.ansi = _Tr()),
    (rd.color.ansi256 = ETr()),
    (rd.color.ansi16m = vTr()),
    (rd.bgColor.ansi = _Tr(10)),
    (rd.bgColor.ansi256 = ETr(10)),
    (rd.bgColor.ansi16m = vTr(10)),
    Object.defineProperties(rd, {
      rgbToAnsi256: {
        value(e, r, n) {
          return e === r && r === n
            ? e < 8
              ? 16
              : e > 248
                ? 231
                : Math.round(((e - 8) / 247) * 24) + 232
            : 16 + 36 * Math.round((e / 255) * 5) + 6 * Math.round((r / 255) * 5) + Math.round((n / 255) * 5);
        },
        enumerable: !1,
      },
      hexToRgb: {
        value(e) {
          let r = /[a-f\d]{6}|[a-f\d]{3}/i.exec(e.toString(16));
          if (!r) return [0, 0, 0];
          let [n] = r;
          n.length === 3 && (n = [...n].map((s) => s + s).join(""));
          let o = Number.parseInt(n, 16);
          return [(o >> 16) & 255, (o >> 8) & 255, o & 255];
        },
        enumerable: !1,
      },
      hexToAnsi256: { value: (e) => rd.rgbToAnsi256(...rd.hexToRgb(e)), enumerable: !1 },
      ansi256ToAnsi: {
        value(e) {
          if (e < 8) return 30 + e;
          if (e < 16) return 90 + (e - 8);
          let r, n, o;
          if (e >= 232) ((r = ((e - 232) * 10 + 8) / 255), (n = r), (o = r));
          else {
            e -= 16;
            let u = e % 36;
            ((r = Math.floor(e / 36) / 5), (n = Math.floor(u / 6) / 5), (o = (u % 6) / 5));
          }
          let s = Math.max(r, n, o) * 2;
          if (s === 0) return 30;
          let a = 30 + ((Math.round(o) << 2) | (Math.round(n) << 1) | Math.round(r));
          return (s === 2 && (a += 60), a);
        },
        enumerable: !1,
      },
      rgbToAnsi: { value: (e, r, n) => rd.ansi256ToAnsi(rd.rgbToAnsi256(e, r, n)), enumerable: !1 },
      hexToAnsi: { value: (e) => rd.ansi256ToAnsi(rd.hexToAnsi256(e)), enumerable: !1 },
    }),
    rd
  );
}
var _Tr,
  ETr,
  vTr,
  rd,
  f_u,
  Tmo,
  Dmo,
  p_u,
  Rmo,
  H5,
  L9t = j(() => {
    ((_Tr =
      (t = 0) =>
      (e) =>
        `\x1B[${e + t}m`),
      (ETr =
        (t = 0) =>
        (e) =>
          `\x1B[${38 + t};5;${e}m`),
      (vTr =
        (t = 0) =>
        (e, r, n) =>
          `\x1B[${38 + t};2;${e};${r};${n}m`),
      (rd = {
        modifier: {
          reset: [0, 0],
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          overline: [53, 55],
          inverse: [7, 27],
          hidden: [8, 28],
          strikethrough: [9, 29],
        },
        color: {
          black: [30, 39],
          red: [31, 39],
          green: [32, 39],
          yellow: [33, 39],
          blue: [34, 39],
          magenta: [35, 39],
          cyan: [36, 39],
          white: [37, 39],
          blackBright: [90, 39],
          gray: [90, 39],
          grey: [90, 39],
          redBright: [91, 39],
          greenBright: [92, 39],
          yellowBright: [93, 39],
          blueBright: [94, 39],
          magentaBright: [95, 39],
          cyanBright: [96, 39],
          whiteBright: [97, 39],
        },
        bgColor: {
          bgBlack: [40, 49],
          bgRed: [41, 49],
          bgGreen: [42, 49],
          bgYellow: [43, 49],
          bgBlue: [44, 49],
          bgMagenta: [45, 49],
          bgCyan: [46, 49],
          bgWhite: [47, 49],
          bgBlackBright: [100, 49],
          bgGray: [100, 49],
          bgGrey: [100, 49],
          bgRedBright: [101, 49],
          bgGreenBright: [102, 49],
          bgYellowBright: [103, 49],
          bgBlueBright: [104, 49],
          bgMagentaBright: [105, 49],
          bgCyanBright: [106, 49],
          bgWhiteBright: [107, 49],
        },
      }),
      (f_u = Object.keys(rd.modifier)),
      (Tmo = Object.keys(rd.color)),
      (Dmo = Object.keys(rd.bgColor)),
      (p_u = [...Tmo, ...Dmo]));
    ((Rmo = Imo()), (H5 = Rmo));
  });
function U9t(t) {
  if (DRe.has(t)) return t;
  if (M9t.has(t)) return M9t.get(t);
  if (t.startsWith(IRe)) return kmo;
  if (((t = t.slice(2)), t.startsWith("38"))) return H5.color.close;
  if (t.startsWith("48")) return H5.bgColor.close;
  let e = H5.codes.get(parseInt(t, 10));
  return e ? H5.color.ansi(e) : H5.reset.open;
}
function Ghe(t) {
  return [...new Set(t.map((r) => r.code))].join("");
}
function RRe(t) {
  return t.code === H5.bold.open || t.code === H5.dim.open;
}
var CTr,
  STr,
  wTr,
  DRe,
  M9t,
  IRe,
  F9t,
  xTr,
  b_u,
  kmo,
  mee = j(() => {
    L9t();
    ((CTr = new Set([27, 155])),
      (STr = "[".codePointAt(0)),
      (wTr = "]".codePointAt(0)),
      (DRe = new Set()),
      (M9t = new Map()));
    for (let [t, e] of H5.codes) (DRe.add(H5.color.ansi(e)), M9t.set(H5.color.ansi(t), H5.color.ansi(e)));
    ((IRe = "\x1B]8;;"),
      (F9t = IRe.split("").map((t) => t.charCodeAt(0))),
      (xTr = "\x07"),
      (b_u = xTr.charCodeAt(0)),
      (kmo = `\x1B]8;;${xTr}`));
  });
function $9t(t) {
  return kRe([], t);
}
function kRe(t, e) {
  let r = [...t];
  for (let n of e)
    n.code === H5.reset.open
      ? (r = [])
      : DRe.has(n.code)
        ? (r = r.filter((o) => o.endCode !== n.code))
        : RRe(n)
          ? r.find((o) => o.code === n.code && o.endCode === n.endCode) || r.push(n)
          : ((r = r.filter((o) => o.endCode !== n.endCode)), r.push(n));
  return r;
}
var ORe = j(() => {
  L9t();
  mee();
});
function j9t(t) {
  return $9t(t)
    .reverse()
    .map((e) => ({ ...e, code: e.endCode }));
}
var Q9t = j(() => {
  ORe();
});
function NRe(t, e) {
  let r = new Set(e.map((s) => s.endCode)),
    n = new Set(e.map((s) => s.code)),
    o = new Set(t.map((s) => s.code));
  return [...j9t(t.filter((s) => (RRe(s) ? !n.has(s.code) : !r.has(s.endCode)))), ...e.filter((s) => !o.has(s.code))];
}
var G9t = j(() => {
  mee();
  Q9t();
});
function TTr(t) {
  let e = [],
    r = [];
  for (let n of t) n.type === "ansi" ? (e = kRe(e, [n])) : n.type === "char" && r.push({ ...n, styles: [...e] });
  return r;
}
function DTr(t) {
  let e = "";
  for (let r = 0; r < t.length; r++) {
    let n = t[r];
    (r === 0 ? (e += Ghe(n.styles)) : (e += Ghe(NRe(t[r - 1].styles, n.styles))),
      (e += n.value),
      r === t.length - 1 && (e += Ghe(NRe(n.styles, []))));
  }
  return e;
}
var ITr = j(() => {
  mee();
  G9t();
  ORe();
});
function Omo(t, e) {
  t = t.slice(e);
  for (let n = 1; n < F9t.length; n++) if (t.charCodeAt(n) !== F9t[n]) return;
  let r = t.indexOf("\x07", IRe.length);
  if (r !== -1) return t.slice(0, r + 1);
}
function Mmo(t) {
  for (let e = 2; e < t.length; e++) {
    let r = t.charCodeAt(e);
    if (r === Lmo) return e;
    if (r !== Bmo && !(r >= Nmo && r <= Pmo)) break;
  }
  return -1;
}
function Fmo(t, e) {
  t = t.slice(e);
  let r = Mmo(t);
  if (r !== -1) return t.slice(0, r + 1);
}
function Umo(t) {
  if (!t.includes(";")) return [t];
  let e = t.slice(2, -1).split(";"),
    r = [];
  for (let n = 0; n < e.length; n++) {
    let o = e[n];
    if (o === "38" || o === "48") {
      if (n + 2 < e.length && e[n + 1] === "5") {
        (r.push(e.slice(n, n + 3).join(";")), (n += 2));
        continue;
      } else if (n + 4 < e.length && e[n + 1] === "2") {
        (r.push(e.slice(n, n + 5).join(";")), (n += 4));
        continue;
      }
    }
    r.push(o);
  }
  return r.map((n) => `\x1B[${n}m`);
}
function RTr(t, e = Number.POSITIVE_INFINITY) {
  let r = [],
    n = 0,
    o = 0;
  for (; n < t.length; ) {
    let s = t.codePointAt(n);
    if (CTr.has(s)) {
      let c,
        m = t.codePointAt(n + 1);
      if (m === wTr) ((c = Omo(t, n)), c && r.push({ type: "ansi", code: c, endCode: U9t(c) }));
      else if (m === STr && ((c = Fmo(t, n)), c)) {
        let d = Umo(c);
        for (let f of d) r.push({ type: "ansi", code: f, endCode: U9t(f) });
      }
      if (c) {
        n += c.length;
        continue;
      }
    }
    let a = The(s),
      u = String.fromCodePoint(s);
    if ((r.push({ type: "char", value: u, fullWidth: a }), (n += u.length), (o += a ? 2 : u.length), o >= e)) break;
  }
  return r;
}
var Nmo,
  Pmo,
  Bmo,
  Lmo,
  kTr = j(() => {
    H8t();
    mee();
    ((Nmo = 48), (Pmo = 57), (Bmo = 59), (Lmo = 109));
  });
var OTr = j(() => {
  mee();
  G9t();
  ORe();
  ITr();
  kTr();
  Q9t();
});
var dee,
  NTr = j(() => {
    z8t();
    yTr();
    Z7e();
    OTr();
    dee = class {
      width;
      height;
      operations = [];
      constructor(e) {
        let { width: r, height: n } = e;
        ((this.width = r), (this.height = n));
      }
      write(e, r, n, o) {
        let { transformers: s } = o;
        n && this.operations.push({ type: "write", x: e, y: r, text: n, transformers: s });
      }
      clip(e) {
        this.operations.push({ type: "clip", clip: e });
      }
      unclip() {
        this.operations.push({ type: "unclip" });
      }
      get() {
        let e = [];
        for (let o = 0; o < this.height; o++) {
          let s = [];
          for (let a = 0; a < this.width; a++) s.push({ type: "char", value: " ", fullWidth: !1, styles: [] });
          e.push(s);
        }
        let r = [];
        for (let o of this.operations)
          if ((o.type === "clip" && r.push(o.clip), o.type === "unclip" && r.pop(), o.type === "write")) {
            let { text: s, transformers: a } = o,
              { x: u, y: c } = o,
              m = s.split(`
`),
              d = r.at(-1);
            if (d) {
              let p = typeof d?.x1 == "number" && typeof d?.x2 == "number",
                h = typeof d?.y1 == "number" && typeof d?.y2 == "number";
              if (p) {
                let g = nG(s);
                if (u + g < d.x1 || u > d.x2) continue;
              }
              if (h) {
                let g = m.length;
                if (c + g < d.y1 || c > d.y2) continue;
              }
              if (
                (p &&
                  ((m = m.map((g) => {
                    let b = u < d.x1 ? d.x1 - u : 0,
                      A = TRe(g),
                      y = u + A > d.x2 ? d.x2 - u : A;
                    return u_(g, b, y);
                  })),
                  u < d.x1 && (u = d.x1)),
                h)
              ) {
                let g = c < d.y1 ? d.y1 - c : 0,
                  b = m.length,
                  A = c + b > d.y2 ? d.y2 - c : b;
                ((m = m.slice(g, A)), c < d.y1 && (c = d.y1));
              }
            }
            let f = 0;
            for (let [p, h] of m.entries()) {
              let g = e[c + f];
              if (!g) continue;
              for (let y of a) h = y(h, p);
              let b = TTr(RTr(h)),
                A = u;
              for (let y of b) {
                g[A] = y;
                let E = Math.max(1, TRe(y.value));
                if (E > 1)
                  for (let v = 1; v < E; v++) g[A + v] = { type: "char", value: "", fullWidth: !1, styles: y.styles };
                A += E;
              }
              f++;
            }
          }
        return {
          output: e.map((o) => {
            let s = o.filter((a) => a !== void 0);
            return DTr(s).trimEnd();
          }).join(`
`),
          height: e.length,
        };
      }
    };
  });
var $mo,
  PTr,
  BTr = j(async () => {
    await ATr();
    NTr();
    (($mo = (t, e) => {
      if (t.yogaNode) {
        if (e) {
          let a = xRe(t, { skipStaticElements: !0 }),
            u =
              a === ""
                ? 0
                : a.split(`
`).length,
            c = "";
          return (
            t.staticNode && (c = xRe(t.staticNode, { skipStaticElements: !1 })),
            {
              output: a,
              outputHeight: u,
              staticOutput: c
                ? `${c}
`
                : "",
            }
          );
        }
        let r = new dee({ width: t.yogaNode.getComputedWidth(), height: t.yogaNode.getComputedHeight() });
        B9t(t, r, { skipStaticElements: !0 });
        let n;
        t.staticNode?.yogaNode &&
          ((n = new dee({
            width: t.staticNode.yogaNode.getComputedWidth(),
            height: t.staticNode.yogaNode.getComputedHeight(),
          })),
          B9t(t.staticNode, n, { skipStaticElements: !1 }));
        let { output: o, height: s } = r.get();
        return {
          output: o,
          outputHeight: s,
          staticOutput: n
            ? `${n.get().output}
`
            : "",
        };
      }
      return { output: "", outputHeight: 0, staticOutput: "" };
    }),
      (PTr = $mo));
  });