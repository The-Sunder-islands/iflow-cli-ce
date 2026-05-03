/**
 * @module Sro
 * @category app/api
 * @label iflow-api
 * @position 1974 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Sro) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 *
 * === Auto-analyzed semantic info ===
 * Classes: class extends, class extends
 * Functions: lbu, obu, Lgu, ubu, abu, hvr, Ugu, QDe, CAt, sbu, vAt, pbu, cbu, Bgu, _At
 * Features: esbuild module exports: Sro, CONTAINS iflow.cn API references, dotenv related, telemetry/OTLP, agent/subagent
 * === End semantic info ===
 */


var Sro = T((NTl, Cro) => {
  "use strict";
  var Pgu = vro();
  function eX(t, e) {
    if (!t) return t;
    e = e || {};
    let r = e.align || "center";
    if (r === "left") return t;
    let n =
        e.split ||
        `
`,
      o = e.pad || " ",
      s = r !== "right" ? Bgu : Lgu,
      a = !1;
    Array.isArray(t) || ((a = !0), (t = String(t).split(n)));
    let u,
      c = 0;
    return (
      (t = t
        .map(function (m) {
          return ((m = String(m)), (u = Pgu(m)), (c = Math.max(u, c)), { str: m, width: u });
        })
        .map(function (m) {
          return new Array(s(c, m.width) + 1).join(o) + m.str;
        })),
      a ? t.join(n) : t
    );
  }
  eX.left = function (e) {
    return eX(e, { align: "left" });
  };
  eX.center = function (e) {
    return eX(e, { align: "center" });
  };
  eX.right = function (e) {
    return eX(e, { align: "right" });
  };
  Cro.exports = eX;
  function Bgu(t, e) {
    return Math.floor((t - e) / 2);
  }
  function Lgu(t, e) {
    return t - e;
  }
});
function Ugu() {
  let t = new Map();
  for (let [e, r] of Object.entries(wd)) {
    for (let [n, o] of Object.entries(r))
      ((wd[n] = { open: `\x1B[${o[0]}m`, close: `\x1B[${o[1]}m` }), (r[n] = wd[n]), t.set(o[0], o[1]));
    Object.defineProperty(wd, e, { value: r, enumerable: !1 });
  }
  return (
    Object.defineProperty(wd, "codes", { value: t, enumerable: !1 }),
    (wd.color.close = "\x1B[39m"),
    (wd.bgColor.close = "\x1B[49m"),
    (wd.color.ansi = wro()),
    (wd.color.ansi256 = xro()),
    (wd.color.ansi16m = Tro()),
    (wd.bgColor.ansi = wro(10)),
    (wd.bgColor.ansi256 = xro(10)),
    (wd.bgColor.ansi16m = Tro(10)),
    Object.defineProperties(wd, {
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
      hexToAnsi256: { value: (e) => wd.rgbToAnsi256(...wd.hexToRgb(e)), enumerable: !1 },
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
      rgbToAnsi: { value: (e, r, n) => wd.ansi256ToAnsi(wd.rgbToAnsi256(e, r, n)), enumerable: !1 },
      hexToAnsi: { value: (e) => wd.ansi256ToAnsi(wd.hexToAnsi256(e)), enumerable: !1 },
    }),
    wd
  );
}
var wro,
  xro,
  Tro,
  wd,
  PTl,
  Mgu,
  Fgu,
  BTl,
  $gu,
  Dro,
  Iro = j(() => {
    ((wro =
      (t = 0) =>
      (e) =>
        `\x1B[${e + t}m`),
      (xro =
        (t = 0) =>
        (e) =>
          `\x1B[${38 + t};5;${e}m`),
      (Tro =
        (t = 0) =>
        (e, r, n) =>
          `\x1B[${38 + t};2;${e};${r};${n}m`),
      (wd = {
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
      (PTl = Object.keys(wd.modifier)),
      (Mgu = Object.keys(wd.color)),
      (Fgu = Object.keys(wd.bgColor)),
      (BTl = [...Mgu, ...Fgu]));
    (($gu = Ugu()), (Dro = $gu));
  });
function _At(t, e, r) {
  return String(t)
    .normalize()
    .replaceAll(
      `\r
`,
      `
`,
    )
    .split(
      `
`,
    )
    .map((n) => Hgu(n, e, r)).join(`
`);
}
var yAt,
  jgu,
  lvr,
  Oro,
  Qgu,
  Nro,
  AAt,
  Rro,
  kro,
  Ggu,
  cvr,
  qgu,
  Hgu,
  Pro = j(() => {
    gAt();
    s_();
    Iro();
    ((yAt = new Set(["\x1B", "\x9B"])),
      (jgu = 39),
      (lvr = "\x07"),
      (Oro = "["),
      (Qgu = "]"),
      (Nro = "m"),
      (AAt = `${Qgu}8;;`),
      (Rro = (t) => `${yAt.values().next().value}${Oro}${t}${Nro}`),
      (kro = (t) => `${yAt.values().next().value}${AAt}${t}${lvr}`),
      (Ggu = (t) => t.split(" ").map((e) => I5(e))),
      (cvr = (t, e, r) => {
        let n = [...e],
          o = !1,
          s = !1,
          a = I5(p0(t.at(-1)));
        for (let [u, c] of n.entries()) {
          let m = I5(c);
          if (
            (a + m <= r ? (t[t.length - 1] += c) : (t.push(c), (a = 0)),
            yAt.has(c) && ((o = !0), (s = n.slice(u + 1, u + 1 + AAt.length).join("") === AAt)),
            o)
          ) {
            s ? c === lvr && ((o = !1), (s = !1)) : c === Nro && (o = !1);
            continue;
          }
          ((a += m), a === r && u < n.length - 1 && (t.push(""), (a = 0)));
        }
        !a && t.at(-1).length > 0 && t.length > 1 && (t[t.length - 2] += t.pop());
      }),
      (qgu = (t) => {
        let e = t.split(" "),
          r = e.length;
        for (; r > 0 && !(I5(e[r - 1]) > 0); ) r--;
        return r === e.length ? t : e.slice(0, r).join(" ") + e.slice(r).join("");
      }),
      (Hgu = (t, e, r = {}) => {
        if (r.trim !== !1 && t.trim() === "") return "";
        let n = "",
          o,
          s,
          a = Ggu(t),
          u = [""];
        for (let [f, p] of t.split(" ").entries()) {
          r.trim !== !1 && (u[u.length - 1] = u.at(-1).trimStart());
          let h = I5(u.at(-1));
          if (
            (f !== 0 &&
              (h >= e && (r.wordWrap === !1 || r.trim === !1) && (u.push(""), (h = 0)),
              (h > 0 || r.trim === !1) && ((u[u.length - 1] += " "), h++)),
            r.hard && a[f] > e)
          ) {
            let g = e - h,
              b = 1 + Math.floor((a[f] - g - 1) / e);
            (Math.floor((a[f] - 1) / e) < b && u.push(""), cvr(u, p, e));
            continue;
          }
          if (h + a[f] > e && h > 0 && a[f] > 0) {
            if (r.wordWrap === !1 && h < e) {
              cvr(u, p, e);
              continue;
            }
            u.push("");
          }
          if (h + a[f] > e && r.wordWrap === !1) {
            cvr(u, p, e);
            continue;
          }
          u[u.length - 1] += p;
        }
        r.trim !== !1 && (u = u.map((f) => qgu(f)));
        let c = u.join(`
`),
          m = [...c],
          d = 0;
        for (let [f, p] of m.entries()) {
          if (((n += p), yAt.has(p))) {
            let { groups: g } = new RegExp(`(?:\\${Oro}(?<code>\\d+)m|\\${AAt}(?<uri>.*)${lvr})`).exec(c.slice(d)) || {
              groups: {},
            };
            if (g.code !== void 0) {
              let b = Number.parseFloat(g.code);
              o = b === jgu ? void 0 : b;
            } else g.uri !== void 0 && (s = g.uri.length === 0 ? void 0 : g.uri);
          }
          let h = Dro.codes.get(Number(o));
          (m[f + 1] ===
          `
`
            ? (s && (n += kro("")), o && h && (n += Rro(h)))
            : p ===
                `
` && (o && h && (n += Rro(o)), s && (n += kro(s))),
            (d += p.length));
        }
        return n;
      }));
  });
import EAt from "node:process";
function vAt(t, e) {
  if (
    ((e = {
      padding: 0,
      borderStyle: "single",
      dimBorder: !1,
      textAlignment: "left",
      float: "left",
      titleAlignment: "left",
      ...e,
    }),
    e.align && (e.textAlignment = e.align),
    e.borderColor && !Mro(e.borderColor))
  )
    throw new Error(`${e.borderColor} is not a valid borderColor`);
  if (e.backgroundColor && !Mro(e.backgroundColor))
    throw new Error(`${e.backgroundColor} is not a valid backgroundColor`);
  return (
    (e.padding = Bro(e.padding)),
    (e.margin = Bro(e.margin)),
    (e = Jgu(t, e)),
    (t = zgu(t, e)),
    Ygu(t, e.width, e)
  );
}
var Fro,
  mvr,
  ebu,
  Wj,
  By,
  UDe,
  Uro,
  Bro,
  $De,
  Vgu,
  Wgu,
  zgu,
  Ygu,
  Kgu,
  Lro,
  Jgu,
  dvr,
  Mro,
  Xgu,
  Zgu,
  $ro = j(() => {
    gAt();
    sEr();
    aro();
    Fro = Se(ERe(), 1);
    dro();
    mvr = Se(Sro(), 1);
    Pro();
    ((ebu = Se(ERe(), 1)),
      (Wj = `
`),
      (By = " "),
      (UDe = "none"),
      (Uro = () => {
        let { env: t, stdout: e, stderr: r } = EAt;
        return e?.columns ? e.columns : r?.columns ? r.columns : t.COLUMNS ? Number.parseInt(t.COLUMNS, 10) : 80;
      }),
      (Bro = (t) =>
        typeof t == "number"
          ? { top: t, right: t * 3, bottom: t, left: t * 3 }
          : { top: 0, right: 0, bottom: 0, left: 0, ...t }),
      ($De = (t) => (t === UDe ? 0 : 2)),
      (Vgu = (t) => {
        let e = ["topLeft", "topRight", "bottomRight", "bottomLeft", "left", "right", "top", "bottom"],
          r;
        if (t === UDe) {
          t = {};
          for (let n of e) t[n] = "";
        }
        if (typeof t == "string") {
          if (((r = Fro.default[t]), !r)) throw new TypeError(`Invalid border style: ${t}`);
        } else {
          (typeof t?.vertical == "string" && ((t.left = t.vertical), (t.right = t.vertical)),
            typeof t?.horizontal == "string" && ((t.top = t.horizontal), (t.bottom = t.horizontal)));
          for (let n of e)
            if (t[n] === null || typeof t[n] != "string") throw new TypeError(`Invalid border style: ${n}`);
          r = t;
        }
        return r;
      }),
      (Wgu = (t, e, r) => {
        let n = "",
          o = I5(t);
        switch (r) {
          case "left": {
            n = t + e.slice(o);
            break;
          }
          case "right": {
            n = e.slice(o) + t;
            break;
          }
          default: {
            ((e = e.slice(o)),
              e.length % 2 === 1
                ? ((e = e.slice(Math.floor(e.length / 2))), (n = e.slice(1) + t + e))
                : ((e = e.slice(e.length / 2)), (n = e + t + e)));
            break;
          }
        }
        return n;
      }),
      (zgu = (t, { padding: e, width: r, textAlignment: n, height: o }) => {
        t = (0, mvr.default)(t, { align: n });
        let s = t.split(Wj),
          a = bAt(t),
          u = r - e.left - e.right;
        if (a > u) {
          let d = [];
          for (let f of s) {
            let p = _At(f, u, { hard: !0 }),
              g = (0, mvr.default)(p, { align: n }).split(`
`),
              b = Math.max(...g.map((A) => I5(A)));
            for (let A of g) {
              let y;
              switch (n) {
                case "center": {
                  y = By.repeat((u - b) / 2) + A;
                  break;
                }
                case "right": {
                  y = By.repeat(u - b) + A;
                  break;
                }
                default: {
                  y = A;
                  break;
                }
              }
              d.push(y);
            }
          }
          s = d;
        }
        n === "center" && a < u
          ? (s = s.map((d) => By.repeat((u - a) / 2) + d))
          : n === "right" && a < u && (s = s.map((d) => By.repeat(u - a) + d));
        let c = By.repeat(e.left),
          m = By.repeat(e.right);
        return (
          (s = s.map((d) => {
            let f = c + d + m;
            return f + By.repeat(r - I5(f));
          })),
          e.top > 0 && (s = [...Array.from({ length: e.top }).fill(By.repeat(r)), ...s]),
          e.bottom > 0 && (s = [...s, ...Array.from({ length: e.bottom }).fill(By.repeat(r))]),
          o && s.length > o
            ? (s = s.slice(0, o))
            : o && s.length < o && (s = [...s, ...Array.from({ length: o - s.length }).fill(By.repeat(r))]),
          s.join(Wj)
        );
      }),
      (Ygu = (t, e, r) => {
        let n = (d) => {
            let f = r.borderColor ? Xgu(r.borderColor)(d) : d;
            return r.dimBorder ? x5.dim(f) : f;
          },
          o = (d) => (r.backgroundColor ? Zgu(r.backgroundColor)(d) : d),
          s = Vgu(r.borderStyle),
          a = Uro(),
          u = By.repeat(r.margin.left);
        if (r.float === "center") {
          let d = Math.max((a - e - $De(r.borderStyle)) / 2, 0);
          u = By.repeat(d);
        } else if (r.float === "right") {
          let d = Math.max(a - e - r.margin.right - $De(r.borderStyle), 0);
          u = By.repeat(d);
        }
        let c = "";
        (r.margin.top && (c += Wj.repeat(r.margin.top)),
          (r.borderStyle !== UDe || r.title) &&
            (c +=
              n(
                u +
                  s.topLeft +
                  (r.title ? Wgu(r.title, s.top.repeat(e), r.titleAlignment) : s.top.repeat(e)) +
                  s.topRight,
              ) + Wj));
        let m = t.split(Wj);
        return (
          (c += m.map((d) => u + n(s.left) + o(d) + n(s.right)).join(Wj)),
          r.borderStyle !== UDe && (c += Wj + n(u + s.bottomLeft + s.bottom.repeat(e) + s.bottomRight)),
          r.margin.bottom && (c += Wj.repeat(r.margin.bottom)),
          c
        );
      }),
      (Kgu = (t) => {
        if (t.fullscreen && EAt?.stdout) {
          let e = [EAt.stdout.columns, EAt.stdout.rows];
          (typeof t.fullscreen == "function" && (e = t.fullscreen(...e)), (t.width ||= e[0]), (t.height ||= e[1]));
        }
        return (
          (t.width &&= Math.max(1, t.width - $De(t.borderStyle))),
          (t.height &&= Math.max(1, t.height - $De(t.borderStyle))),
          t
        );
      }),
      (Lro = (t, e) => (e === UDe ? t : ` ${t} `)),
      (Jgu = (t, e) => {
        e = Kgu(e);
        let r = e.width !== void 0,
          n = Uro(),
          o = $De(e.borderStyle),
          s = n - e.margin.left - e.margin.right - o,
          a = bAt(_At(t, n - o, { hard: !0, trim: !1 })) + e.padding.left + e.padding.right;
        if (
          (e.title && r
            ? ((e.title = e.title.slice(0, Math.max(0, e.width - 2))), (e.title &&= Lro(e.title, e.borderStyle)))
            : e.title &&
              ((e.title = e.title.slice(0, Math.max(0, s - 2))),
              e.title && ((e.title = Lro(e.title, e.borderStyle)), I5(e.title) > a && (e.width = I5(e.title)))),
          (e.width ||= a),
          !r)
        ) {
          if (e.margin.left && e.margin.right && e.width > s) {
            let c = (n - e.width - o) / (e.margin.left + e.margin.right);
            ((e.margin.left = Math.max(0, Math.floor(e.margin.left * c))),
              (e.margin.right = Math.max(0, Math.floor(e.margin.right * c))));
          }
          e.width = Math.min(e.width, n - o - e.margin.left - e.margin.right);
        }
        return (
          e.width - (e.padding.left + e.padding.right) <= 0 && ((e.padding.left = 0), (e.padding.right = 0)),
          e.height &&
            e.height - (e.padding.top + e.padding.bottom) <= 0 &&
            ((e.padding.top = 0), (e.padding.bottom = 0)),
          e
        );
      }),
      (dvr = (t) => t.match(/^#(?:[0-f]{3}){1,2}$/i)),
      (Mro = (t) => typeof t == "string" && (x5[t] ?? dvr(t))),
      (Xgu = (t) => (dvr(t) ? x5.hex(t) : x5[t])),
      (Zgu = (t) => (dvr(t) ? x5.bgHex(t) : x5[svr(["bg", t])])));
  });
function Qro(t, ...e) {
  if (typeof t == "string") return jro(t);
  let r = t[0];
  for (let [n, o] of e.entries()) r = r + jro(String(o)) + t[n + 1];
  return r;
}
var jro,
  Gro = j(() => {
    jro = (t) =>
      t
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
  });
function hvr(t, e, { ignoreMissing: r = !1, transform: n = ({ value: s }) => s, filters: o = {} } = {}) {
  if (typeof t != "string") throw new TypeError(`Expected a \`string\` in the first argument, got \`${typeof t}\``);
  if (typeof e != "object")
    throw new TypeError(`Expected an \`object\` or \`Array\` in the second argument, got \`${typeof e}\``);
  let s = "\uE000\uE001\uE002",
    a = "\uE003\uE004\uE005";
  ((t = t.replace(/\\{/g, s)), (t = t.replace(/\\}/g, a)));
  let u = (g) => {
      let b = [],
        A = "";
      for (let y = 0; y < g.length; y++)
        g[y] === "\\" && g[y + 1] === "." ? ((A += "."), y++) : g[y] === "." ? (b.push(A), (A = "")) : (A += g[y]);
      return (b.push(A), b);
    },
    c = (g, b) => {
      let A = b.split("|").map((k) => k.trim()),
        y = A[0],
        E = A.slice(1),
        v = u(y),
        C = e;
      for (let k of v) C && (C = C[k]);
      for (let k of E) {
        let R = o[k];
        if (!R) {
          if (r) return g;
          throw new pvr(k);
        }
        C !== void 0 && (C = R(C));
      }
      let x = n({ value: C, key: y });
      if (x === void 0) {
        if (r) return g;
        throw new fvr(y);
      }
      return String(x);
    },
    f = "((\\d+|[a-z$_][\\w\\-.$\\\\]*)\\s*(?:\\|\\s*[a-z$_][\\w$]*\\s*)*)",
    p = new RegExp(`{{${f}}}`, "gi"),
    h = new RegExp(`{${f}}`, "gi");
  return (
    (t = t.replace(p, (...g) => Qro(c(...g)))),
    (t = t.replace(h, c)),
    (t = t.replace(new RegExp(s, "g"), "{")),
    (t = t.replace(new RegExp(a, "g"), "}")),
    t
  );
}
var fvr,
  pvr,
  qro = j(() => {
    Gro();
    ((fvr = class extends Error {
      constructor(e) {
        (super(`Missing a value for ${e ? `the placeholder: ${e}` : "a placeholder"}`, e),
          (this.name = "MissingValueError"),
          (this.key = e));
      }
    }),
      (pvr = class extends Error {
        constructor(e) {
          (super(`Missing filter: ${e}`), (this.name = "MissingFilterError"), (this.filterName = e));
        }
      }));
  });
import tX from "node:process";
import { spawn as tbu } from "node:child_process";
import { fileURLToPath as rbu } from "node:url";
import Hro from "node:path";
import { format as gvr } from "node:util";
var Vro,
  Wro,
  nbu,
  ibu,
  jDe,
  zro = j(() => {
    XJi();
    sEr();
    ((Vro = Se(aEr(), 1)), (Wro = Se(Tfe(), 1)));
    $to();
    Gto();
    nro();
    $ro();
    j_r();
    g8t();
    qro();
    ((nbu = Hro.dirname(rbu(import.meta.url))),
      (ibu = 1e3 * 60 * 60 * 24),
      (jDe = class {
        config;
        update;
        _packageName;
        _shouldNotifyInNpmScript;
        #e;
        #t;
        #r;
        #n;
        constructor(e = {}) {
          if (
            ((this.#e = e),
            (e.pkg ??= {}),
            (e.distTag ??= "latest"),
            (e.pkg = { name: e.pkg.name ?? e.packageName, version: e.pkg.version ?? e.packageVersion }),
            !e.pkg.name || !e.pkg.version)
          )
            throw new Error("pkg.name and pkg.version required");
          if (
            ((this._packageName = e.pkg.name),
            (this.#t = e.pkg.version),
            (this.#r = typeof e.updateCheckInterval == "number" ? e.updateCheckInterval : ibu),
            (this.#n =
              "NO_UPDATE_NOTIFIER" in tX.env ||
              tX.env.NODE_ENV === "test" ||
              tX.argv.includes("--no-update-notifier") ||
              Y7),
            (this._shouldNotifyInNpmScript = e.shouldNotifyInNpmScript),
            !this.#n)
          )
            try {
              this.config = new vDe(`update-notifier-${this._packageName}`, {
                optOut: !1,
                lastUpdateCheck: Date.now(),
              });
            } catch {
              let r =
                x5.yellow(gvr(" %s update check failed ", e.pkg.name)) +
                gvr(
                  `
 Try running with %s or get access `,
                  x5.cyan("sudo"),
                ) +
                `
 to the local update config store via 
` +
                x5.cyan(gvr(" sudo chown -R $USER:$(id -gn $USER) %s ", Cfe));
              tX.on("exit", () => {
                console.error(vAt(r, { textAlignment: "center" }));
              });
            }
        }
        check() {
          !this.config ||
            this.config.get("optOut") ||
            this.#n ||
            ((this.update = this.config.get("update")),
            this.update && ((this.update.current = this.#t), this.config.delete("update")),
            !(Date.now() - this.config.get("lastUpdateCheck") < this.#r) &&
              tbu(tX.execPath, [Hro.join(nbu, "check.js"), JSON.stringify(this.#e)], {
                detached: !0,
                stdio: "ignore",
              }).unref());
        }
        async fetchInfo() {
          let { distTag: e } = this.#e,
            r = await ZEr(this._packageName, { version: e });
          return { latest: r, current: this.#t, type: (0, Vro.default)(this.#t, r) ?? e, name: this._packageName };
        }
        notify(e) {
          let r = !this._shouldNotifyInNpmScript && Qto;
          if (!tX.stdout.isTTY || r || !this.update || !(0, Wro.default)(this.update.latest, this.update.current))
            return this;
          e = { isGlobal: rro, ...e };
          let n = e.isGlobal ? `npm i -g ${this._packageName}` : `npm i ${this._packageName}`,
            o =
              "Update available " +
              x5.dim("{currentVersion}") +
              x5.reset(" \u2192 ") +
              x5.green("{latestVersion}") +
              ` 
Run ` +
              x5.cyan("{updateCommand}") +
              " to update",
            s = e.message || o;
          e.boxenOptions ??= {
            padding: 1,
            margin: 1,
            textAlignment: "center",
            borderColor: "yellow",
            borderStyle: "round",
          };
          let a = vAt(
            hvr(s, {
              packageName: this._packageName,
              currentVersion: this.update.current,
              latestVersion: this.update.latest,
              updateCommand: n,
            }),
            e.boxenOptions,
          );
          return (
            e.defer === !1
              ? console.error(a)
              : tX.on("exit", () => {
                  console.error(a);
                }),
            this
          );
        }
      }));
  });
function QDe(t) {
  let e = new jDe(t);
  return (e.check(), e);
}
var bvr = j(() => {
  zro();
});
function obu(t, e) {
  if (!t) return e || null;
  if (!e) return t || null;
  let r = t.latest,
    n = e.latest;
  return rX.default.coerce(n)?.version === rX.default.coerce(r)?.version ? t : rX.default.gt(n, r) ? e : t;
}
async function CAt() {
  try {
    if (process.env.DEV === "true") return null;
    let t = await vj();
    if (!t || !t.name || !t.version) return null;
    let { name: e, version: r } = t,
      n = (a) => QDe({ pkg: { name: e, version: r }, updateCheckInterval: 0, shouldNotifyInNpmScript: !0, distTag: a }),
      o = r.includes("nightly"),
      s = r.includes("beta");
    if (o) {
      let [a, u] = await Promise.all([n("nightly").fetchInfo(), n("latest").fetchInfo()]),
        c = obu(a, u);
      if (c && rX.default.gt(c.latest, r))
        return {
          message: I.t("autoUpdate.available", { currentVersion: r, newVersion: c.latest }),
          update: { ...c, current: r },
        };
    } else if (s) {
      let a = await n("beta").fetchInfo();
      if (a && rX.default.gt(a.latest, r))
        return {
          message: I.t("autoUpdate.available", { currentVersion: r, newVersion: a.latest }),
          update: { ...a, current: r },
        };
    } else {
      let a = await n("latest").fetchInfo();
      if (a && rX.default.gt(a.latest, r))
        return {
          message: I.t("autoUpdate.available", { currentVersion: r, newVersion: a.latest }),
          update: { ...a, current: r },
        };
    }
    return null;
  } catch (t) {
    return (console.warn("Failed to check for updates: " + t), null);
  }
}
var rX,
  Avr = j(() => {
    "use strict";
    bvr();
    rX = Se(mAt(), 1);
    Ot();
    TTe();
  });
function sbu(t, e) {
  if (!t) return e || null;
  if (!e) return t || null;
  let r = t.latest,
    n = e.latest;
  return nX.default.coerce(n)?.version === nX.default.coerce(r)?.version ? t : nX.default.gt(n, r) ? e : t;
}
var nX,
  Yro,
  Kro = j(() => {
    "use strict";
    Qs();
    Ot();
    Avr();
    j6r();
    U6r();
    $6r();
    TTe();
    bvr();
    nX = Se(mAt(), 1);
    Yro = {
      name: "update",
      description: I.t("command.update"),
      kind: "built-in",
      action: async (t, e) => {
        console.debug("Checking for updates...");
        let r = await CAt();
        if (!r) {
          let f = await vj();
          if (!f || !f.name || !f.version)
            return { type: "message", messageType: "error", content: I.t("autoUpdate.failed") };
          let { name: p, version: h } = f,
            g = (y) =>
              QDe({ pkg: { name: p, version: h }, updateCheckInterval: 0, shouldNotifyInNpmScript: !0, distTag: y }),
            b = h.includes("nightly"),
            A = h.includes("beta");
          if (b) {
            let [y, E] = await Promise.all([g("nightly").fetchInfo(), g("latest").fetchInfo()]),
              v = sbu(y, E);
            return v && nX.default.eq(v.latest, h)
              ? { type: "message", messageType: "info", content: I.t("autoUpdate.upToDate") }
              : { type: "message", messageType: "error", content: I.t("autoUpdate.failed") };
          } else if (A) {
            let y = await g("beta").fetchInfo();
            return y && nX.default.eq(y.latest, h)
              ? { type: "message", messageType: "info", content: I.t("autoUpdate.upToDate") }
              : { type: "message", messageType: "error", content: I.t("autoUpdate.failed") };
          } else {
            let y = await g("latest").fetchInfo();
            return y && nX.default.eq(y.latest, h)
              ? { type: "message", messageType: "info", content: I.t("autoUpdate.upToDate") }
              : { type: "message", messageType: "error", content: I.t("autoUpdate.failed") };
          }
        }
        let n = process.cwd(),
          o = q3t(n, !1),
          s = r.message;
        if (
          (o.updateMessage &&
            (s += `
${o.updateMessage}`),
          D3.emit("update-received", { message: s }),
          !o.updateCommand)
        )
          return { type: "message", messageType: "error", content: I.t("autoUpdate.failed") };
        let a = r.update.latest.includes("nightly"),
          u = r.update.latest.includes("beta"),
          c = o.updateCommand.replace("@latest", a ? "@nightly" : u ? "@beta" : `@${r.update.latest}`),
          m = H3t(c, { stdio: "pipe", shell: !0 }),
          d = "";
        (m.stderr.on("data", (f) => {
          d += f.toString();
        }),
          m.on("close", (f) => {
            f === 0
              ? D3.emit("update-success", {
                  message: "Update successful! The new version will be used on your next run.",
                })
              : D3.emit("update-failed", {
                  message: `Automatic update failed. Please try updating manually. (command: ${c}, stderr: ${d.trim()})`,
                });
          }),
          m.on("error", (f) => {
            D3.emit("update-failed", {
              message: `Automatic update failed. Please try updating manually. (error: ${f.message})`,
            });
          }));
      },
    };
  });
async function abu(t, e) {
  let r = "https://apis.iflow.cn/v1/chat/qaRetrieve /* @iflow-api-endpoint */";
  try {
    let n = await fetch(r, {
      method: "POST",
      headers: { Authorization: `Bearer ${e}`, "Content-Type": "application/json" },
      body: JSON.stringify({ question: t }),
    });
    return n.ok
      ? await n.json()
      : { success: !1, error: `API request failed with status ${n.status}: ${n.statusText}` };
  } catch (n) {
    return { success: !1, error: n instanceof Error ? n.message : String(n) };
  }
}
function ubu(t) {
  let e = t.replace(/\.(md|txt)$/i, ""),
    r = e.toLowerCase().replace(/[\s_]+/g, "-"),
    n = {
      changelog: "",
      glossary: "",
      quickstart: "",
      scenarios: "",
      iflow: "configuration",
      iflowignore: "configuration",
      settings: "configuration",
      "basic-usage": "examples",
      "best-practices": "examples",
      hooks: "examples",
      index: "examples",
      "keyboard-shortcuts": "examples",
      mcp: "examples",
      subagent: "examples",
      subcommand: "examples",
      workflow: "examples",
      action: "features",
      checkpointing: "features",
      ide: "features",
      interactive: "features",
      "memory-import": "features",
      sandbox: "features",
      "slash-commands": "features",
      "suspending-resuming": "features",
      telemetry: "features",
      thinking: "features",
      "sdk-android": "sdk",
      "sdk-java": "sdk",
      "sdk-python": "sdk",
      "sdk-typescript": "sdk",
    };
  return r in n
    ? n[r] === ""
      ? `https://platform.iflow.cn/cli/${r}` /* @iflow-platform-endpoint */
      : `https://platform.iflow.cn/cli/${n[r]}/${e}` /* @iflow-platform-endpoint */
    : "";
}
function cbu(t, e) {
  let r = [
      "You are a helpful AI assistant. A user has asked a question, and relevant context has been retrieved from a knowledge base.",
      "",
      "**User Question:**",
      t,
      "",
    ],
    n = e?.knowledgeBaseResponse?.nodes;
  return (
    n &&
      Array.isArray(n) &&
      n.length > 0 &&
      (r.push("**Retrieved Context from Knowledge Base:**"),
      r.push(""),
      n.forEach((o, s) => {
        (r.push(`**Document ${s + 1}**: ${o.sourceDocumentName}`),
          r.push(`Relevance Score: ${o.weightScore.toFixed(4)}`),
          r.push(`Matching Method: ${o.matchingMethod}`));
        let a = ubu(o.sourceDocumentName);
        (r.push(`Source: ${a}`),
          r.push(""),
          r.push("**Content:**"),
          r.push(o.retrievedContent),
          r.push(""),
          r.push("---"),
          r.push(""));
      })),
    r.push("**Instructions:**"),
    r.push(
      "Based on the retrieved context above, please provide a comprehensive and accurate answer to the user's question.",
    ),
    r.push(
      "If the context doesn't contain enough information to fully answer the question, please indicate what information is missing.",
    ),
    r.push(""),
    r.push(
      "**IMPORTANT: After answering the question, you MUST display the relevant documentation links to the user.**",
    ),
    r.push("Format the links section like this:"),
    r.push(""),
    r.push(" **Relevant Links\uFF1A**"),
    r.push("- [Document Name](Source URL)"),
    r.push(""),
    r.push("Use the document names and source URLs provided in the context above."),
    r.push(""),
    r.push(
      "**Important: Please respond to the user in Chinese by default, unless they specifically request another language.**",
    ),
    r.join(`
`)
  );
}
var Jro,
  Xro = j(() => {
    "use strict";
    Qs();
    Ot();
    Jro = {
      name: "qa",
      altNames: ["wenwen", "question", "guide"],
      description: I.t("command.qa"),
      kind: "built-in",
      action: async (t, e) => {
        let r = t.services.config;
        if (!r) return { type: "message", messageType: "error", content: I.t("qaCommand.noConfig") };
        let n = r.isIFlowService(),
          o = r.isAoneService();
        if (!n && !o) return { type: "message", messageType: "error", content: I.t("qaCommand.iflowOnlyFeature") };
        let s = e.trim();
        if (!s) return { type: "message", messageType: "error", content: I.t("qaCommand.noQuestion") };
        let a = r.getApiKey();
        if (!a) return { type: "message", messageType: "error", content: I.t("qaCommand.noApiKey") };
        (t.ui.addItem({ type: "info", text: I.t("qaCommand.retrievingNotification"), hiddenDivider: !0 }, Date.now()),
          t.ui.setPendingItem({ type: "info", text: I.t("qaCommand.retrieving") }));
        try {
          let u = await abu(s, a);
          if ((t.ui.setPendingItem(null), !u.success))
            return {
              type: "message",
              messageType: "error",
              content: I.t("qaCommand.retrievalFailed", { error: u.error || "Unknown error" }),
            };
          let m = u.data?.knowledgeBaseResponse?.nodes?.length || 0;
          return (
            m > 0
              ? t.ui.addItem({ type: "info", text: I.t("qaCommand.retrievalSuccess", { count: m }) }, Date.now())
              : t.ui.addItem({ type: "info", text: I.t("qaCommand.noResults") }, Date.now()),
            { type: "submit_prompt", content: cbu(s, u.data) }
          );
        } catch (u) {
          return (
            t.ui.setPendingItem(null),
            {
              type: "message",
              messageType: "error",
              content: I.t("qaCommand.unexpectedError", { error: u instanceof Error ? u.message : String(u) }),
            }
          );
        }
      },
    };
  });
var Zro,
  eno = j(() => {
    "use strict";
    Qs();
    Zro = {
      name: "statusline",
      description: " Set up iFlow status line UI",
      kind: "built-in",
      action: (t, e) => ({ type: "dialog", dialog: "statusline" }),
    };
  });
async function lbu(t, e, r) {
  let { config: n } = t.services;
  if (!n) return { type: "message", messageType: "error", content: I.t("skillsCommand.configNotLoaded") };
  let o = await n.getSkillRegistry();
  if (!o) return { type: "message", messageType: "error", content: I.t("skillsCommand.couldNotRetrieveRegistry") };
  let s = o.getAll();
  if (s.length === 0) return { type: "message", messageType: "info", content: I.t("skillsCommand.noSkillsConfigured") };
  let a =
    I.t("skillsCommand.configuredSkills") +
    `

`;
  for (let u of s) {
    let c = u.location === "global" ? I.t("skillsCommand.global") : I.t("skillsCommand.project");
    ((a += `\u{1F4E6} ${u.name} [${c}]
`),
      e &&
        u.description &&
        (a += `   ${u.description}
`),
      r &&
        ((a += `   ${I.t("skillsCommand.filePath")}: ${u.filePath}
`),
        u.license &&
          (a += `   ${I.t("skillsCommand.license")}: ${u.license}
`)),
      (a += `
`));
  }
  return (
    (a += `
${I.t("skillsCommand.totalSkills", { count: s.length })}
`),
    { type: "message", messageType: "info", content: a }
  );
}
var mbu,
  dbu,
  fbu,
  tno,
  rno = j(() => {
    "use strict";
    Ot();
    Qs();
    ((mbu = {
      name: "list",
      description: I.t("skillsCommand.list.description"),
      kind: "built-in",
      action: async (t, e) => {
        let r = e.toLowerCase().split(/\s+/).filter(Boolean);
        if (r.some((o) => ["desc", "descriptions", "nodesc", "nodescriptions", "details"].includes(o))) {
          let o = r.includes("desc") || r.includes("descriptions"),
            s = r.includes("nodesc") || r.includes("nodescriptions"),
            a = r.includes("details");
          return lbu(t, !s && (o || a), a);
        }
        return { type: "dialog", dialog: "skills-list" };
      },
    }),
      (dbu = {
        name: "refresh",
        description: I.t("skillsCommand.refresh.description"),
        kind: "built-in",
        action: async (t) => {
          let { config: e } = t.services;
          if (!e) return { type: "message", messageType: "error", content: I.t("skillsCommand.configNotLoaded") };
          let r = await e.getSkillRegistry();
          if (!r)
            return { type: "message", messageType: "error", content: I.t("skillsCommand.couldNotRetrieveRegistry") };
          t.ui.addItem({ type: "info", text: I.t("skillsCommand.refreshingSkills") }, Date.now());
          try {
            return (
              await r.scanAndRegister(),
              t.ui.addItem({ type: "info", text: I.t("skillsCommand.refresh.successMessage") }, Date.now()),
              { type: "message", messageType: "info", content: I.t("skillsCommand.refreshCompleted") }
            );
          } catch (n) {
            let o = I.t("skillsCommand.refresh.refreshFailed", {
              error: n instanceof Error ? n.message : I.t("common.unknown"),
            });
            return (
              t.ui.addItem({ type: "error", text: o }, Date.now()),
              { type: "message", messageType: "error", content: o }
            );
          }
        },
      }),
      (fbu = {
        name: "online",
        description: I.t("skillsCommand.online.description"),
        kind: "built-in",
        action: async () => ({ type: "dialog", dialog: "skills-online" }),
      }),
      (tno = {
        name: "skills",
        description: I.t("skillsCommand.description"),
        kind: "built-in",
        subCommands: [mbu, dbu, fbu],
        action: async (t, e) => ({ type: "dialog", dialog: "skills-list" }),
      }));
  });
function pbu(t) {
  return t.startsWith("http://") || t.startsWith("https://")
    ? t.includes("github.com")
      ? { type: "github", repo: t }
      : t.endsWith(".git")
        ? { type: "git", url: t }
        : { type: "url", url: t }
    : t.startsWith("/") || t.startsWith("./") || t.startsWith("../")
      ? { type: "local", path: t }
      : { type: "github", repo: t };
}
var i7,
  GDe,
  ino,
  ono,
  nno,
  n7,
  im,
  hbu,
  gbu,
  bbu,
  Abu,
  ybu,
  _bu,
  Ebu,
  vbu,
  Cbu,
  yvr,
  sno,
  ano = j(() => {
    "use strict";
    Qs();
    Ot();
    ((i7 = "\x1B[32m"),
      (GDe = "\x1B[33m"),
      (ino = "\x1B[31m"),
      (ono = "\x1B[36m"),
      (nno = "\x1B[90m"),
      (n7 = "\x1B[1m"),
      (im = "\x1B[0m"));
    ((hbu = async (t, e) => {
      try {
        let { config: r } = t.services;
        if (!r)
          return {
            type: "message",
            messageType: "error",
            content: I.t("pluginCommand.list.error", {
              defaultValue: "Failed to list plugins: Config not loaded",
              error: "Config not loaded",
            }),
          };
        let n = r.getExtensionManager();
        if (!n)
          return {
            type: "message",
            messageType: "error",
            content: I.t("pluginCommand.list.error", {
              defaultValue: "Failed to list plugins: {{error}}",
              error: "Extension manager not available",
            }),
          };
        let o = e.trim().split(/\s+/).filter(Boolean),
          s,
          a = !1,
          u = !1;
        for (let f of o)
          if (f === "--scope" || f === "-s") {
            let p = o.indexOf(f) + 1;
            if (p < o.length) {
              let h = o[p];
              (h === "user" || h === "project") && (s = h);
            }
          } else f === "--enabled" || f === "-e" ? (a = !0) : (f === "--disabled" || f === "-d") && (u = !0);
        let m = n.getAllPlugins();
        if (
          (s && (m = m.filter((f) => f.scope === s)),
          a && (m = m.filter((f) => f.enabled)),
          u && (m = m.filter((f) => !f.enabled)),
          m.length === 0)
        )
          return {
            type: "message",
            messageType: "info",
            content: I.t("pluginCommand.list.noPlugins", { defaultValue: "No plugins installed" }),
          };
        let d = `${n7}${I.t("pluginCommand.list.header", { defaultValue: "Installed Plugins ({{count}}):", count: m.length })}${im}

`;
        for (let f of m) {
          let p = f.enabled ? `${i7}\u2713` : `${ino}\u2717`,
            h = f.scope === "user" ? ono : GDe;
          if (
            ((d += `${p} ${n7}${f.config.name}${im} ${nno}v${f.config.version}${im}
`),
            (d += `  ${I.t("pluginCommand.list.scope", { defaultValue: "Scope" })}: ${h}${f.scope}${im}
`),
            f.config.author)
          ) {
            let g = typeof f.config.author == "string" ? f.config.author : f.config.author.name;
            d += `  ${I.t("pluginCommand.list.author", { defaultValue: "Author" })}: ${g}
`;
          }
          (f.config.description &&
            (d += `  ${I.t("pluginCommand.list.description", { defaultValue: "Description" })}: ${f.config.description}
`),
            (d += `  ${I.t("pluginCommand.list.path", { defaultValue: "Path" })}: ${nno}${f.pluginDir}${im}
`),
            (d += `
`));
        }
        return { type: "message", messageType: "info", content: d };
      } catch (r) {
        return {
          type: "message",
          messageType: "error",
          content: I.t("pluginCommand.list.error", { defaultValue: "Failed to list plugins: {{error}}", error: mr(r) }),
        };
      }
    }),
      (gbu = async (t, e) => {
        try {
          let { config: r } = t.services;
          if (!r)
            return {
              type: "message",
              messageType: "error",
              content: I.t("pluginCommand.install.error", {
                defaultValue: "Failed to install plugin: {{error}}",
                error: "Config not loaded",
              }),
            };
          let n = e.trim().split(/\s+/).filter(Boolean);
          if (n.length === 0)
            return {
              type: "message",
              messageType: "error",
              content: I.t("pluginCommand.install.error", {
                defaultValue: "Failed to install plugin: {{error}}",
                error: "Plugin source is required",
              }),
            };
          let o = n[0],
            s = "user",
            a = n.indexOf("--scope");
          if (a !== -1 && a + 1 < n.length) {
            let d = n[a + 1];
            (d === "user" || d === "project" || d === "local" || d === "managed") && (s = d);
          }
          let u = new op();
          await u.initialize();
          let c = { scope: s },
            m;
          if (o.includes("@") && !o.startsWith("http")) {
            let [d, f] = o.split("@");
            m = await u.installPluginFromMarketplace(d, f, c);
          } else {
            let d = pbu(o);
            m = await u.installPlugin(d, c);
          }
          return {
            type: "message",
            messageType: "info",
            content: `${i7}${I.t("pluginCommand.install.success", { defaultValue: "Plugin installed successfully to: {{pluginDir}}", pluginDir: m })}${im}

${GDe}${I.t("pluginCommand.install.restart", { defaultValue: "Note: You may need to restart iFlow for changes to take effect." })}${im}`,
          };
        } catch (r) {
          return {
            type: "message",
            messageType: "error",
            content: I.t("pluginCommand.install.error", {
              defaultValue: "Failed to install plugin: {{error}}",
              error: mr(r),
            }),
          };
        }
      }),
      (bbu = async (t, e) => {
        try {
          let { config: r } = t.services;
          if (!r)
            return {
              type: "message",
              messageType: "error",
              content: I.t("pluginCommand.uninstall.error", {
                defaultValue: "Failed to uninstall plugin: {{error}}",
                error: "Config not loaded",
              }),
            };
          let n = e.trim().split(/\s+/).filter(Boolean);
          if (n.length === 0)
            return {
              type: "message",
              messageType: "error",
              content: I.t("pluginCommand.uninstall.error", {
                defaultValue: "Failed to uninstall plugin: {{error}}",
                error: "Plugin name is required",
              }),
            };
          let o = n[0],
            s = "user",
            a = n.indexOf("--scope");
          a !== -1 && a + 1 < n.length && (s = n[a + 1]);
          let u = new op();
          return (
            await u.initialize(),
            await u.uninstallPlugin(o, s),
            {
              type: "message",
              messageType: "info",
              content: `${i7}${I.t("pluginCommand.uninstall.success", { defaultValue: 'Plugin "{{name}}" uninstalled successfully', name: o })}${im}

${GDe}${I.t("pluginCommand.uninstall.restart", { defaultValue: "Note: You may need to restart iFlow for changes to take effect." })}${im}`,
            }
          );
        } catch (r) {
          return {
            type: "message",
            messageType: "error",
            content: I.t("pluginCommand.uninstall.error", {
              defaultValue: "Failed to uninstall plugin: {{error}}",
              error: mr(r),
            }),
          };
        }
      }),
      (Abu = async (t, e) => {
        try {
          let { config: r } = t.services;
          if (!r)
            return {
              type: "message",
              messageType: "error",
              content: I.t("pluginCommand.enable.error", {
                defaultValue: "Failed to enable plugin: {{error}}",
                error: "Config not loaded",
              }),
            };
          let n = r.getExtensionManager();
          if (!n)
            return {
              type: "message",
              messageType: "error",
              content: I.t("pluginCommand.enable.error", {
                defaultValue: "Failed to enable plugin: {{error}}",
                error: "Extension manager not available",
              }),
            };
          let o = e.trim();
          return o
            ? (await n.enablePlugin(o),
              {
                type: "message",
                messageType: "info",
                content: `${i7}${I.t("pluginCommand.enable.success", { defaultValue: "Plugin enabled successfully" })}${im}

${GDe}${I.t("pluginCommand.enable.restart", { defaultValue: "Note: You may need to restart iFlow for changes to take effect." })}${im}`,
              })
            : {
                type: "message",
                messageType: "error",
                content: I.t("pluginCommand.enable.error", {
                  defaultValue: "Failed to enable plugin: {{error}}",
                  error: "Plugin name is required",
                }),
              };
        } catch (r) {
          return {
            type: "message",
            messageType: "error",
            content: I.t("pluginCommand.enable.error", {
              defaultValue: "Failed to enable plugin: {{error}}",
              error: mr(r),
            }),
          };
        }
      }),
      (ybu = async (t, e) => {
        try {
          let { config: r } = t.services;
          if (!r)
            return {
              type: "message",
              messageType: "error",
              content: I.t("pluginCommand.disable.error", {
                defaultValue: "Failed to disable plugin: {{error}}",
                error: "Config not loaded",
              }),
            };
          let n = r.getExtensionManager();
          if (!n)
            return {
              type: "message",
              messageType: "error",
              content: I.t("pluginCommand.disable.error", {
                defaultValue: "Failed to disable plugin: {{error}}",
                error: "Extension manager not available",
              }),
            };
          let o = e.trim();
          return o
            ? (await n.disablePlugin(o),
              {
                type: "message",
                messageType: "info",
                content: `${i7}${I.t("pluginCommand.disable.success", { defaultValue: "Plugin disabled successfully" })}${im}

${GDe}${I.t("pluginCommand.disable.restart", { defaultValue: "Note: You may need to restart iFlow for changes to take effect." })}${im}`,
              })
            : {
                type: "message",
                messageType: "error",
                content: I.t("pluginCommand.disable.error", {
                  defaultValue: "Failed to disable plugin: {{error}}",
                  error: "Plugin name is required",
                }),
              };
        } catch (r) {
          return {
            type: "message",
            messageType: "error",
            content: I.t("pluginCommand.disable.error", {
              defaultValue: "Failed to disable plugin: {{error}}",
              error: mr(r),
            }),
          };
        }
      }),
      (_bu = async (t, e) => {
        try {
          let r = e.trim().split(/\s+/).filter(Boolean);
          if (r.length === 0)
            return {
              type: "message",
              messageType: "error",
              content: I.t("pluginCommand.marketplace.add.error", {
                defaultValue: "Failed to add marketplace: {{error}}",
                error: "Source is required. Usage: /plugin marketplace add <owner/repo | git-url | local-path | url>",
              }),
            };
          let n = new op();
          if ((await n.initialize(), r.length >= 2)) {
            let [o, s] = r,
              a = { name: o, url: s, enabled: !0, plugins: [] };
            await n.addMarketplace(o, a);
          } else {
            let o = r[0];
            await n.addMarketplaceFromSource(o);
          }
          return {
            type: "message",
            messageType: "info",
            content: `${i7}${I.t("pluginCommand.marketplace.add.success", { defaultValue: "Marketplace added successfully" })}${im}`,
          };
        } catch (r) {
          return {
            type: "message",
            messageType: "error",
            content: I.t("pluginCommand.marketplace.add.error", {
              defaultValue: "Failed to add marketplace: {{error}}",
              error: mr(r),
            }),
          };
        }
      }),
      (Ebu = async (t, e) => {
        try {
          let r = e.trim();
          if (!r)
            return {
              type: "message",
              messageType: "error",
              content: I.t("pluginCommand.marketplace.remove.error", {
                defaultValue: "Failed to remove marketplace: {{error}}",
                error: "Marketplace name is required",
              }),
            };
          let n = new op();
          return (
            await n.initialize(),
            await n.removeMarketplace(r),
            {
              type: "message",
              messageType: "info",
              content: `${i7}${I.t("pluginCommand.marketplace.remove.success", { defaultValue: "Marketplace removed successfully" })}${im}`,
            }
          );
        } catch (r) {
          return {
            type: "message",
            messageType: "error",
            content: I.t("pluginCommand.marketplace.remove.error", {
              defaultValue: "Failed to remove marketplace: {{error}}",
              error: mr(r),
            }),
          };
        }
      }),
      (vbu = async (t, e) => {
        try {
          let r = new op();
          await r.initialize();
          let n = await r.listMarketplaces();
          if (n.length === 0)
            return {
              type: "message",
              messageType: "info",
              content: I.t("pluginCommand.marketplace.list.noMarketplaces", {
                defaultValue: "No marketplaces configured",
              }),
            };
          let o = `${n7}${I.t("pluginCommand.marketplace.list.header", { defaultValue: "Configured Marketplaces ({{count}}):", count: n.length })}${im}

`;
          for (let s of n) {
            let a = s.enabled ? `${i7}\u2713` : `${ino}\u2717`;
            ((o += `${a} ${n7}${s.name}${im}
`),
              (o += `  URL: ${ono}${s.url}${im}

`));
          }
          return { type: "message", messageType: "info", content: o };
        } catch (r) {
          return {
            type: "message",
            messageType: "error",
            content: I.t("pluginCommand.marketplace.list.error", {
              defaultValue: "Failed to list marketplaces: {{error}}",
              error: mr(r),
            }),
          };
        }
      }),
      (Cbu = async (t, e) => {
        try {
          let r = new op();
          await r.initialize();
          let n = e.trim();
          if (n)
            return (
              await r.updateMarketplace(n),
              {
                type: "message",
                messageType: "info",
                content: `${i7}${I.t("pluginCommand.marketplace.update.success", { defaultValue: "Marketplace(s) updated successfully" })}${im}`,
              }
            );
          {
            let o = await r.listMarketplaces();
            for (let s of o) s.enabled && (await r.updateMarketplace(s.name));
            return {
              type: "message",
              messageType: "info",
              content: `${i7}${I.t("pluginCommand.marketplace.update.success", { defaultValue: "Marketplace(s) updated successfully" })}${im}`,
            };
          }
        } catch (r) {
          return {
            type: "message",
            messageType: "error",
            content: I.t("pluginCommand.marketplace.update.error", {
              defaultValue: "Failed to update marketplace: {{error}}",
              error: mr(r),
            }),
          };
        }
      }),
      (yvr = {
        name: "marketplace",
        description: I.t("pluginCommand.marketplace.description", { defaultValue: "Manage plugin marketplaces" }),
        kind: "built-in",
        action: async (t, e) => {
          let r = e.trim().split(/\s+/),
            n = r[0]?.toLowerCase(),
            o = r.slice(1).join(" ");
          switch (n) {
            case "add":
              return _bu(t, o);
            case "remove":
            case "rm":
              return Ebu(t, o);
            case "list":
            case "ls":
              return vbu(t, o);
            case "update":
              return Cbu(t, o);
            default:
              return {
                type: "message",
                messageType: "info",
                content: `${n7}Usage:${im} /plugin marketplace <subcommand>

${n7}Subcommands:${im}
  add <source>         Add a marketplace (owner/repo, git URL, local path, or URL)
  remove <name>        Remove a marketplace source
  list                 List all marketplace sources
  update [name]        Update marketplace cache

${n7}Examples:${im}
  /plugin marketplace add dailydotdev/daily
  /plugin marketplace add https://github.com/org/marketplace.git
  /plugin marketplace add ./my-local-marketplace
`,
              };
          }
        },
      }),
      (sno = {
        name: "plugin",
        description: I.t("pluginCommand.description", { defaultValue: "Manage iFlow plugins" }),
        kind: "built-in",
        action: async (t, e) => {
          let r = e.trim().split(/\s+/),
            n = r[0]?.toLowerCase(),
            o = r.slice(1).join(" ");
          switch (n) {
            case "list":
            case "ls":
              return hbu(t, o);
            case "install":
            case "add":
              return gbu(t, o);
            case "uninstall":
            case "remove":
            case "rm":
              return bbu(t, o);
            case "enable":
              return Abu(t, o);
            case "disable":
              return ybu(t, o);
            case "marketplace":
            case "market":
              if (yvr.action) {
                let s = await yvr.action(t, o);
                if (s) return s;
              }
              return { type: "message", messageType: "error", content: "Marketplace command not available" };
            default:
              return {
                type: "message",
                messageType: "info",
                content: `${n7}Usage:${im} /plugin <subcommand>

${n7}Subcommands:${im}
  list                 List installed plugins
  install <source>     Install a plugin
  uninstall <name>     Uninstall a plugin
  enable <name>        Enable a plugin
  disable <name>       Disable a plugin
  marketplace          Manage plugin marketplaces

${n7}Examples:${im}
  /plugin list
  /plugin install user/repo
  /plugin install my-plugin@my-marketplace
  /plugin marketplace add dailydotdev/daily
`,
              };
          }
        },
        subCommands: [yvr],
      }));
  });
var zj,
  SAt = j(() => {
    "use strict";
    FYi();
    QYi();
    qYi();
    VYi();
    zYi();
    KYi();
    ZYi();
    tKi();
    nKi();
    cKi();
    T_r();
    mKi();
    pKi();
    I_r();
    bKi();
    _Ki();
    vKi();
    SKi();
    xKi();
    OKi();
    PKi();
    LKi();
    jKi();
    GKi();
    HKi();
    WKi();
    JKi();
    ZKi();
    tJi();
    F_r();
    nJi();
    cJi();
    mJi();
    fJi();
    hJi();
    Kro();
    Xro();
    eno();
    rno();
    ano();
    $_r();
    zj = class {
      constructor(e) {
        this.config = e;
      }
      async loadCommands(e) {
        return [
          MYi,
          pJi,
          jYi,
          GYi,
          HYi,
          WYi,
          YYi,
          XYi,
          eKi,
          rKi,
          uKi,
          Afe,
          lKi,
          dJi,
          fKi,
          yfe,
          gKi,
          yKi,
          EKi,
          CKi,
          wKi,
          vfe,
          vfe,
          lJi,
          kKi,
          NKi,
          rJi,
          Jro,
          BKi,
          sno,
          Zro,
          $Ki(this.config),
          QKi,
          tno,
          qKi,
          VKi,
          KKi,
          XKi,
          Yro,
          eJi,
          ...(Obt() ? [uJi] : []),
        ].filter(Boolean);
      }
    };
  });