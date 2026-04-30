/**
 * @module tHi
 * @category utils/oop
 * @label oop
 * @position 1896 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (tHi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var tHi = T((qfl, eHi) => {
  "use strict";
  var Kqi =
      (t, e) =>
      (...r) =>
        `\x1B[${t(...r) + e}m`,
    Jqi =
      (t, e) =>
      (...r) => {
        let n = t(...r);
        return `\x1B[${38 + e};5;${n}m`;
      },
    Xqi =
      (t, e) =>
      (...r) => {
        let n = t(...r);
        return `\x1B[${38 + e};2;${n[0]};${n[1]};${n[2]}m`;
      },
    dgt = (t) => t,
    Zqi = (t, e, r) => [t, e, r],
    G1e = (t, e, r) => {
      Object.defineProperty(t, e, {
        get: () => {
          let n = r();
          return (Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0 }), n);
        },
        enumerable: !0,
        configurable: !0,
      });
    },
    ayr,
    q1e = (t, e, r, n) => {
      ayr === void 0 && (ayr = Yqi());
      let o = n ? 10 : 0,
        s = {};
      for (let [a, u] of Object.entries(ayr)) {
        let c = a === "ansi16" ? "ansi" : a;
        a === e ? (s[c] = t(r, o)) : typeof u == "object" && (s[c] = t(u[e], o));
      }
      return s;
    };
  function nlu() {
    let t = new Map(),
      e = {
        modifier: {
          reset: [0, 0],
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
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
          bgRedBright: [101, 49],
          bgGreenBright: [102, 49],
          bgYellowBright: [103, 49],
          bgBlueBright: [104, 49],
          bgMagentaBright: [105, 49],
          bgCyanBright: [106, 49],
          bgWhiteBright: [107, 49],
        },
      };
    ((e.color.gray = e.color.blackBright),
      (e.bgColor.bgGray = e.bgColor.bgBlackBright),
      (e.color.grey = e.color.blackBright),
      (e.bgColor.bgGrey = e.bgColor.bgBlackBright));
    for (let [r, n] of Object.entries(e)) {
      for (let [o, s] of Object.entries(n))
        ((e[o] = { open: `\x1B[${s[0]}m`, close: `\x1B[${s[1]}m` }), (n[o] = e[o]), t.set(s[0], s[1]));
      Object.defineProperty(e, r, { value: n, enumerable: !1 });
    }
    return (
      Object.defineProperty(e, "codes", { value: t, enumerable: !1 }),
      (e.color.close = "\x1B[39m"),
      (e.bgColor.close = "\x1B[49m"),
      G1e(e.color, "ansi", () => q1e(Kqi, "ansi16", dgt, !1)),
      G1e(e.color, "ansi256", () => q1e(Jqi, "ansi256", dgt, !1)),
      G1e(e.color, "ansi16m", () => q1e(Xqi, "rgb", Zqi, !1)),
      G1e(e.bgColor, "ansi", () => q1e(Kqi, "ansi16", dgt, !0)),
      G1e(e.bgColor, "ansi256", () => q1e(Jqi, "ansi256", dgt, !0)),
      G1e(e.bgColor, "ansi16m", () => q1e(Xqi, "rgb", Zqi, !0)),
      e
    );
  }
  Object.defineProperty(eHi, "exports", { enumerable: !0, get: nlu });
});