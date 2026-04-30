/**
 * @module Awr
 * @category app/i18n
 * @label iflow-i18n
 * @position 11 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Awr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Awr = T((T6u, bwr) => {
  "use strict";
  bwr.exports = gwr();
});
function G8t(t, e = {}) {
  if (typeof t != "string" || t.length === 0) return 0;
  let { ambiguousIsNarrow: r = !0, countAnsiEscapeCodes: n = !1 } = e;
  if ((n || (t = p0(t)), t.length === 0)) return 0;
  let o = 0,
    s = { ambiguousAsWide: !r };
  for (let { segment: a } of qco.segment(t)) {
    let u = a.codePointAt(0);
    if (
      !(u <= 31 || (u >= 127 && u <= 159)) &&
      !((u >= 8203 && u <= 8207) || u === 65279) &&
      !(
        (u >= 768 && u <= 879) ||
        (u >= 6832 && u <= 6911) ||
        (u >= 7616 && u <= 7679) ||
        (u >= 8400 && u <= 8447) ||
        (u >= 65056 && u <= 65071)
      ) &&
      !(u >= 55296 && u <= 57343) &&
      !(u >= 65024 && u <= 65039) &&
      !Hco.test(a)
    ) {
      if ((0, ywr.default)().test(a)) {
        o += 2;
        continue;
      }
      o += q5(u, s);
    }
  }
  return o;
}
var ywr,
  qco,
  Hco,
  _wr = j(() => {
    s_();
    XP();
    ((ywr = Se(k8t(), 1)), (qco = new Intl.Segmenter()), (Hco = /^\p{Default_Ignorable_Code_Point}$/u));
  });
function nG(t) {
  let e = 0;
  for (let r of t.split(`
`))
    e = Math.max(e, G8t(r));
  return e;
}
var Z7e = j(() => {
  _wr();
});
var Ewr,
  Vco,
  q8t,
  vwr = j(() => {
    Z7e();
    ((Ewr = new Map()),
      (Vco = (t) => {
        if (t.length === 0) return { width: 0, height: 0 };
        let e = Ewr.get(t);
        if (e) return e;
        let r = nG(t),
          n = t.split(`
`).length,
          o = { width: r, height: n };
        return (Ewr.set(t, o), o);
      }),
      (q8t = Vco));
  });
function Yco() {
  let t = new Map();
  for (let [e, r] of Object.entries(Xm)) {
    for (let [n, o] of Object.entries(r))
      ((Xm[n] = { open: `\x1B[${o[0]}m`, close: `\x1B[${o[1]}m` }), (r[n] = Xm[n]), t.set(o[0], o[1]));
    Object.defineProperty(Xm, e, { value: r, enumerable: !1 });
  }
  return (
    Object.defineProperty(Xm, "codes", { value: t, enumerable: !1 }),
    (Xm.color.close = "\x1B[39m"),
    (Xm.bgColor.close = "\x1B[49m"),
    (Xm.color.ansi = Cwr()),
    (Xm.color.ansi256 = Swr()),
    (Xm.color.ansi16m = wwr()),
    (Xm.bgColor.ansi = Cwr(10)),
    (Xm.bgColor.ansi256 = Swr(10)),
    (Xm.bgColor.ansi16m = wwr(10)),
    Object.defineProperties(Xm, {
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
      hexToAnsi256: { value: (e) => Xm.rgbToAnsi256(...Xm.hexToRgb(e)), enumerable: !1 },
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
      rgbToAnsi: { value: (e, r, n) => Xm.ansi256ToAnsi(Xm.rgbToAnsi256(e, r, n)), enumerable: !1 },
      hexToAnsi: { value: (e) => Xm.ansi256ToAnsi(Xm.hexToAnsi256(e)), enumerable: !1 },
    }),
    Xm
  );
}
var Cwr,
  Swr,
  wwr,
  Xm,
  B6u,
  Wco,
  zco,
  L6u,
  Kco,
  Z7,
  xwr = j(() => {
    ((Cwr =
      (t = 0) =>
      (e) =>
        `\x1B[${e + t}m`),
      (Swr =
        (t = 0) =>
        (e) =>
          `\x1B[${38 + t};5;${e}m`),
      (wwr =
        (t = 0) =>
        (e, r, n) =>
          `\x1B[${38 + t};2;${e};${r};${n}m`),
      (Xm = {
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
      (B6u = Object.keys(Xm.modifier)),
      (Wco = Object.keys(Xm.color)),
      (zco = Object.keys(Xm.bgColor)),
      (L6u = [...Wco, ...zco]));
    ((Kco = Yco()), (Z7 = Kco));
  });
function The(t) {
  return Number.isInteger(t) ? _he(t) || Ehe(t) : !1;
}
var H8t = j(() => {
  XP();
});
function tlo(t) {
  if (W8t.has(t)) return t;
  if (V8t.has(t)) return V8t.get(t);
  ((t = t.slice(2)), t.includes(";") && (t = t[0] + "0"));
  let e = Z7.codes.get(Number.parseInt(t, 10));
  return e ? Z7.color.ansi(e) : Z7.reset.open;
}
function rlo(t) {
  for (let e = 0; e < t.length; e++) {
    let r = t.codePointAt(e);
    if (r >= Xco && r <= Zco) return e;
  }
  return -1;
}
function nlo(t, e) {
  t = t.slice(e, e + elo);
  let r = rlo(t);
  if (r !== -1) {
    let n = t.indexOf("m", r);
    return (n === -1 && (n = t.length), t.slice(0, n + 1));
  }
}
function ilo(t, e = Number.POSITIVE_INFINITY) {
  let r = [],
    n = 0,
    o = 0;
  for (; n < t.length; ) {
    let s = t.codePointAt(n);
    if (Jco.has(s)) {
      let c = nlo(t, n);
      if (c) {
        (r.push({ type: "ansi", code: c, endCode: tlo(c) }), (n += c.length));
        continue;
      }
    }
    let a = The(s),
      u = String.fromCodePoint(s);
    if ((r.push({ type: "character", value: u, isFullWidth: a }), (n += u.length), (o += a ? 2 : u.length), o >= e))
      break;
  }
  return r;
}
function Twr(t) {
  let e = [];
  for (let r of t)
    r.code === Z7.reset.open
      ? (e = [])
      : W8t.has(r.code)
        ? (e = e.filter((n) => n.endCode !== r.code))
        : ((e = e.filter((n) => n.endCode !== r.endCode)), e.push(r));
  return e;
}
function olo(t) {
  return Twr(t)
    .map(({ endCode: n }) => n)
    .reverse()
    .join("");
}
function u_(t, e, r) {
  let n = ilo(t, r),
    o = [],
    s = 0,
    a = "",
    u = !1;
  for (let c of n) {
    if (r !== void 0 && s >= r) break;
    c.type === "ansi"
      ? (o.push(c), u && (a += c.code))
      : (!u && s >= e && ((u = !0), (o = Twr(o)), (a = o.map(({ code: m }) => m).join(""))),
        u && (a += c.value),
        (s += c.isFullWidth ? 2 : c.value.length));
  }
  return ((a += olo(o)), a);
}
var Jco,
  Xco,
  Zco,
  elo,
  W8t,
  V8t,
  z8t = j(() => {
    xwr();
    H8t();
    ((Jco = new Set([27, 155])),
      (Xco = "0".codePointAt(0)),
      (Zco = "9".codePointAt(0)),
      (elo = 19),
      (W8t = new Set()),
      (V8t = new Map()));
    for (let [t, e] of Z7.codes) (W8t.add(Z7.color.ansi(e)), V8t.set(Z7.color.ansi(t), Z7.color.ansi(e)));
  });
function llo(t) {
  return t.replace(ulo, "");
}
function mlo(t) {
  return alo.test(t);
}
function dlo(t, e) {
  let r = 0;
  if (t.length > 1) for (let n of t.slice(1)) n >= "\uFF00" && n <= "\uFFEF" && (r += q5(n.codePointAt(0), e));
  return r;
}
function tee(t, e = {}) {
  if (typeof t != "string" || t.length === 0) return 0;
  let { ambiguousIsNarrow: r = !0, countAnsiEscapeCodes: n = !1 } = e,
    o = t;
  if ((n || (o = p0(o)), o.length === 0)) return 0;
  let s = 0,
    a = { ambiguousAsWide: !r };
  for (let { segment: u } of slo.segment(o)) {
    if (mlo(u)) continue;
    if (clo.test(u)) {
      s += 2;
      continue;
    }
    let c = llo(u).codePointAt(0);
    ((s += q5(c, a)), (s += dlo(u, a)));
  }
  return s;
}
var slo,
  alo,
  ulo,
  clo,
  Dwr = j(() => {
    s_();
    XP();
    ((slo = new Intl.Segmenter()),
      (alo = /^(?:\p{Default_Ignorable_Code_Point}|\p{Control}|\p{Mark}|\p{Surrogate})+$/v),
      (ulo = /^[\p{Default_Ignorable_Code_Point}\p{Control}\p{Format}\p{Mark}\p{Surrogate}]+/v),
      (clo = /^\p{RGI_Emoji}$/v));
  });
function eRe(t, e, r) {
  if (t.charAt(e) === " ") return e;
  let n = r ? 1 : -1;
  for (let o = 0; o <= 3; o++) {
    let s = e + o * n;
    if (t.charAt(s) === " ") return s;
  }
  return e;
}
function Y8t(t, e, r = {}) {
  let { position: n = "end", space: o = !1, preferTruncationOnSpace: s = !1 } = r,
    { truncationCharacter: a = "\u2026" } = r;
  if (typeof t != "string") throw new TypeError(`Expected \`input\` to be a string, got ${typeof t}`);
  if (typeof e != "number") throw new TypeError(`Expected \`columns\` to be a number, got ${typeof e}`);
  if (e < 1) return "";
  let u = tee(t);
  if (u <= e) return t;
  if (e === 1) return a;
  let c = { ESC: 27, LEFT_BRACKET: 91, LETTER_M: 109 },
    m = (g) => (g >= 48 && g <= 57) || g === 59;
  function d(g) {
    let b = 0;
    for (; b + 2 < g.length && g.codePointAt(b) === c.ESC && g.codePointAt(b + 1) === c.LEFT_BRACKET; ) {
      let A = b + 2;
      for (; A < g.length && m(g.codePointAt(A)); ) A++;
      if (A < g.length && g.codePointAt(A) === c.LETTER_M) {
        b = A + 1;
        continue;
      }
      break;
    }
    return b;
  }
  function f(g) {
    let b = g.length;
    for (; b > 1 && g.codePointAt(b - 1) === c.LETTER_M; ) {
      let A = b - 2;
      for (; A >= 0 && m(g.codePointAt(A)); ) A--;
      if (A >= 1 && g.codePointAt(A - 1) === c.ESC && g.codePointAt(A) === c.LEFT_BRACKET) {
        b = A - 1;
        continue;
      }
      break;
    }
    return b;
  }
  function p(g, b) {
    let A = f(g);
    return A === g.length ? g + b : g.slice(0, A) + b + g.slice(A);
  }
  function h(g, b) {
    let A = d(b);
    return A === 0 ? g + b : b.slice(0, A) + g + b.slice(A);
  }
  if (n === "start") {
    if (s) {
      let b = eRe(t, u - e + 1, !0),
        A = u_(t, b, u).trim();
      return h(a, A);
    }
    o && (a += " ");
    let g = u_(t, u - e + tee(a), u);
    return h(a, g);
  }
  if (n === "middle") {
    o && (a = ` ${a} `);
    let g = Math.floor(e / 2);
    if (s) {
      let b = eRe(t, g),
        A = eRe(t, u - (e - g) + 1, !0);
      return u_(t, 0, b) + a + u_(t, A, u).trim();
    }
    return u_(t, 0, g) + a + u_(t, u - (e - g) + tee(a), u);
  }
  if (n === "end") {
    if (s) {
      let b = eRe(t, e - 1),
        A = u_(t, 0, b);
      return p(A, a);
    }
    o && (a = ` ${a}`);
    let g = u_(t, 0, e - tee(a));
    return p(g, a);
  }
  throw new Error(`Expected \`options.position\` to be either \`start\`, \`middle\` or \`end\`, got ${n}`);
}
var Iwr = j(() => {
  z8t();
  Dwr();
});
var Rwr,
  flo,
  tRe,
  K8t = j(() => {
    P8t();
    Iwr();
    ((Rwr = {}),
      (flo = (t, e, r) => {
        let n = t + String(e) + String(r),
          o = Rwr[n];
        if (o) return o;
        let s = t;
        if ((r === "wrap" && (s = vhe(t, e, { trim: !1, hard: !0 })), r.startsWith("truncate"))) {
          let a = "end";
          (r === "truncate-middle" && (a = "middle"),
            r === "truncate-start" && (a = "start"),
            (s = Y8t(t, e, { position: a })));
        }
        return ((Rwr[n] = s), s);
      }),
      (tRe = flo));
  });
var kwr,
  Dhe,
  J8t = j(() => {
    ((kwr = (t) => {
      let e = "";
      for (let r = 0; r < t.childNodes.length; r++) {
        let n = t.childNodes[r];
        if (n === void 0) continue;
        let o = "";
        (n.nodeName === "#text"
          ? (o = n.nodeValue)
          : ((n.nodeName === "ink-text" || n.nodeName === "ink-virtual-text") && (o = kwr(n)),
            o.length > 0 && typeof n.internal_transform == "function" && (o = n.internal_transform(o, r))),
          (e += o));
      }
      return e;
    }),
      (Dhe = kwr));
  });
var rRe,
  nRe,
  X8t,
  Ihe,
  Z8t,
  e9t,
  Owr,
  plo,
  Nwr,
  iRe,
  Rhe,
  t9t = j(async () => {
    await tG();
    vwr();
    K8t();
    J8t();
    ((rRe = (t) => {
      let e = {
        nodeName: t,
        style: {},
        attributes: {},
        childNodes: [],
        parentNode: void 0,
        yogaNode: t === "ink-virtual-text" ? void 0 : gi.Node.create(),
        internal_accessibility: {},
      };
      return (t === "ink-text" && e.yogaNode?.setMeasureFunc(plo.bind(null, e)), e);
    }),
      (nRe = (t, e) => {
        (e.parentNode && Ihe(e.parentNode, e),
          (e.parentNode = t),
          t.childNodes.push(e),
          e.yogaNode && t.yogaNode?.insertChild(e.yogaNode, t.yogaNode.getChildCount()),
          (t.nodeName === "ink-text" || t.nodeName === "ink-virtual-text") && iRe(t));
      }),
      (X8t = (t, e, r) => {
        (e.parentNode && Ihe(e.parentNode, e), (e.parentNode = t));
        let n = t.childNodes.indexOf(r);
        if (n >= 0) {
          (t.childNodes.splice(n, 0, e), e.yogaNode && t.yogaNode?.insertChild(e.yogaNode, n));
          return;
        }
        (t.childNodes.push(e),
          e.yogaNode && t.yogaNode?.insertChild(e.yogaNode, t.yogaNode.getChildCount()),
          (t.nodeName === "ink-text" || t.nodeName === "ink-virtual-text") && iRe(t));
      }),
      (Ihe = (t, e) => {
        (e.yogaNode && e.parentNode?.yogaNode?.removeChild(e.yogaNode), (e.parentNode = void 0));
        let r = t.childNodes.indexOf(e);
        (r >= 0 && t.childNodes.splice(r, 1),
          (t.nodeName === "ink-text" || t.nodeName === "ink-virtual-text") && iRe(t));
      }),
      (Z8t = (t, e, r) => {
        if (e === "internal_accessibility") {
          t.internal_accessibility = r;
          return;
        }
        t.attributes[e] = r;
      }),
      (e9t = (t, e) => {
        t.style = e;
      }),
      (Owr = (t) => {
        let e = { nodeName: "#text", nodeValue: t, yogaNode: void 0, parentNode: void 0, style: {} };
        return (Rhe(e, t), e);
      }),
      (plo = function (t, e) {
        let r = t.nodeName === "#text" ? t.nodeValue : Dhe(t),
          n = q8t(r);
        if (n.width <= e || (n.width >= 1 && e > 0 && e < 1)) return n;
        let o = t.style?.textWrap ?? "wrap",
          s = tRe(r, e, o);
        return q8t(s);
      }),
      (Nwr = (t) => {
        if (t?.parentNode) return t.yogaNode ?? Nwr(t.parentNode);
      }),
      (iRe = (t) => {
        Nwr(t)?.markDirty();
      }),
      (Rhe = (t, e) => {
        (typeof e != "string" && (e = String(e)), (t.nodeValue = e), iRe(t));
      }));
  });
var glo,
  blo,
  Alo,
  ylo,
  _lo,
  Elo,
  vlo,
  Clo,
  Slo,
  r9t,
  Pwr = j(async () => {
    await tG();
    ((glo = (t, e) => {
      "position" in e &&
        t.setPositionType(e.position === "absolute" ? gi.POSITION_TYPE_ABSOLUTE : gi.POSITION_TYPE_RELATIVE);
    }),
      (blo = (t, e) => {
        ("margin" in e && t.setMargin(gi.EDGE_ALL, e.margin ?? 0),
          "marginX" in e && t.setMargin(gi.EDGE_HORIZONTAL, e.marginX ?? 0),
          "marginY" in e && t.setMargin(gi.EDGE_VERTICAL, e.marginY ?? 0),
          "marginLeft" in e && t.setMargin(gi.EDGE_START, e.marginLeft || 0),
          "marginRight" in e && t.setMargin(gi.EDGE_END, e.marginRight || 0),
          "marginTop" in e && t.setMargin(gi.EDGE_TOP, e.marginTop || 0),
          "marginBottom" in e && t.setMargin(gi.EDGE_BOTTOM, e.marginBottom || 0));
      }),
      (Alo = (t, e) => {
        ("padding" in e && t.setPadding(gi.EDGE_ALL, e.padding ?? 0),
          "paddingX" in e && t.setPadding(gi.EDGE_HORIZONTAL, e.paddingX ?? 0),
          "paddingY" in e && t.setPadding(gi.EDGE_VERTICAL, e.paddingY ?? 0),
          "paddingLeft" in e && t.setPadding(gi.EDGE_LEFT, e.paddingLeft || 0),
          "paddingRight" in e && t.setPadding(gi.EDGE_RIGHT, e.paddingRight || 0),
          "paddingTop" in e && t.setPadding(gi.EDGE_TOP, e.paddingTop || 0),
          "paddingBottom" in e && t.setPadding(gi.EDGE_BOTTOM, e.paddingBottom || 0));
      }),
      (ylo = (t, e) => {
        ("flexGrow" in e && t.setFlexGrow(e.flexGrow ?? 0),
          "flexShrink" in e && t.setFlexShrink(typeof e.flexShrink == "number" ? e.flexShrink : 1),
          "flexWrap" in e &&
            (e.flexWrap === "nowrap" && t.setFlexWrap(gi.WRAP_NO_WRAP),
            e.flexWrap === "wrap" && t.setFlexWrap(gi.WRAP_WRAP),
            e.flexWrap === "wrap-reverse" && t.setFlexWrap(gi.WRAP_WRAP_REVERSE)),
          "flexDirection" in e &&
            (e.flexDirection === "row" && t.setFlexDirection(gi.FLEX_DIRECTION_ROW),
            e.flexDirection === "row-reverse" && t.setFlexDirection(gi.FLEX_DIRECTION_ROW_REVERSE),
            e.flexDirection === "column" && t.setFlexDirection(gi.FLEX_DIRECTION_COLUMN),
            e.flexDirection === "column-reverse" && t.setFlexDirection(gi.FLEX_DIRECTION_COLUMN_REVERSE)),
          "flexBasis" in e &&
            (typeof e.flexBasis == "number"
              ? t.setFlexBasis(e.flexBasis)
              : typeof e.flexBasis == "string"
                ? t.setFlexBasisPercent(Number.parseInt(e.flexBasis, 10))
                : t.setFlexBasis(Number.NaN)),
          "alignItems" in e &&
            ((e.alignItems === "stretch" || !e.alignItems) && t.setAlignItems(gi.ALIGN_STRETCH),
            e.alignItems === "flex-start" && t.setAlignItems(gi.ALIGN_FLEX_START),
            e.alignItems === "center" && t.setAlignItems(gi.ALIGN_CENTER),
            e.alignItems === "flex-end" && t.setAlignItems(gi.ALIGN_FLEX_END)),
          "alignSelf" in e &&
            ((e.alignSelf === "auto" || !e.alignSelf) && t.setAlignSelf(gi.ALIGN_AUTO),
            e.alignSelf === "flex-start" && t.setAlignSelf(gi.ALIGN_FLEX_START),
            e.alignSelf === "center" && t.setAlignSelf(gi.ALIGN_CENTER),
            e.alignSelf === "flex-end" && t.setAlignSelf(gi.ALIGN_FLEX_END)),
          "justifyContent" in e &&
            ((e.justifyContent === "flex-start" || !e.justifyContent) && t.setJustifyContent(gi.JUSTIFY_FLEX_START),
            e.justifyContent === "center" && t.setJustifyContent(gi.JUSTIFY_CENTER),
            e.justifyContent === "flex-end" && t.setJustifyContent(gi.JUSTIFY_FLEX_END),
            e.justifyContent === "space-between" && t.setJustifyContent(gi.JUSTIFY_SPACE_BETWEEN),
            e.justifyContent === "space-around" && t.setJustifyContent(gi.JUSTIFY_SPACE_AROUND),
            e.justifyContent === "space-evenly" && t.setJustifyContent(gi.JUSTIFY_SPACE_EVENLY)));
      }),
      (_lo = (t, e) => {
        ("width" in e &&
          (typeof e.width == "number"
            ? t.setWidth(e.width)
            : typeof e.width == "string"
              ? t.setWidthPercent(Number.parseInt(e.width, 10))
              : t.setWidthAuto()),
          "height" in e &&
            (typeof e.height == "number"
              ? t.setHeight(e.height)
              : typeof e.height == "string"
                ? t.setHeightPercent(Number.parseInt(e.height, 10))
                : t.setHeightAuto()),
          "minWidth" in e &&
            (typeof e.minWidth == "string"
              ? t.setMinWidthPercent(Number.parseInt(e.minWidth, 10))
              : t.setMinWidth(e.minWidth ?? 0)),
          "minHeight" in e &&
            (typeof e.minHeight == "string"
              ? t.setMinHeightPercent(Number.parseInt(e.minHeight, 10))
              : t.setMinHeight(e.minHeight ?? 0)));
      }),
      (Elo = (t, e) => {
        "display" in e && t.setDisplay(e.display === "flex" ? gi.DISPLAY_FLEX : gi.DISPLAY_NONE);
      }),
      (vlo = (t, e) => {
        if ("borderStyle" in e) {
          let r = e.borderStyle ? 1 : 0;
          (e.borderTop !== !1 && t.setBorder(gi.EDGE_TOP, r),
            e.borderBottom !== !1 && t.setBorder(gi.EDGE_BOTTOM, r),
            e.borderLeft !== !1 && t.setBorder(gi.EDGE_LEFT, r),
            e.borderRight !== !1 && t.setBorder(gi.EDGE_RIGHT, r));
        }
      }),
      (Clo = (t, e) => {
        ("gap" in e && t.setGap(gi.GUTTER_ALL, e.gap ?? 0),
          "columnGap" in e && t.setGap(gi.GUTTER_COLUMN, e.columnGap ?? 0),
          "rowGap" in e && t.setGap(gi.GUTTER_ROW, e.rowGap ?? 0));
      }),
      (Slo = (t, e = {}) => {
        (glo(t, e), blo(t, e), Alo(t, e), ylo(t, e), _lo(t, e), Elo(t, e), vlo(t, e), Clo(t, e));
      }),
      (r9t = Slo));
  });