/**
 * @module Coi
 * @category cli/args
 * @label yargs
 * @position 1612 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Coi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Coi = T((T0) => {
  "use strict";
  var sAa =
      (T0 && T0.__createBinding) ||
      (Object.create
        ? function (t, e, r, n) {
            n === void 0 && (n = r);
            var o = Object.getOwnPropertyDescriptor(e, r);
            ((!o || ("get" in o ? !e.__esModule : o.writable || o.configurable)) &&
              (o = {
                enumerable: !0,
                get: function () {
                  return e[r];
                },
              }),
              Object.defineProperty(t, n, o));
          }
        : function (t, e, r, n) {
            (n === void 0 && (n = r), (t[n] = e[r]));
          }),
    aAa =
      (T0 && T0.__setModuleDefault) ||
      (Object.create
        ? function (t, e) {
            Object.defineProperty(t, "default", { enumerable: !0, value: e });
          }
        : function (t, e) {
            t.default = e;
          }),
    zst =
      (T0 && T0.__importStar) ||
      (function () {
        var t = function (e) {
          return (
            (t =
              Object.getOwnPropertyNames ||
              function (r) {
                var n = [];
                for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (n[n.length] = o);
                return n;
              }),
            t(e)
          );
        };
        return function (e) {
          if (e && e.__esModule) return e;
          var r = {};
          if (e != null) for (var n = t(e), o = 0; o < n.length; o++) n[o] !== "default" && sAa(r, e, n[o]);
          return (aAa(r, e), r);
        };
      })(),
    g0r =
      (T0 && T0.__importDefault) ||
      function (t) {
        return t && t.__esModule ? t : { default: t };
      };
  Object.defineProperty(T0, "__esModule", { value: !0 });
  T0.detectFileSync = T0.detectFile = T0.analyse = T0.detect = void 0;
  var voi = g0r(moi()),
    uAa = g0r(foi()),
    cAa = g0r(poi()),
    Wst = zst(hoi()),
    HCe = zst(boi()),
    UD = zst(yoi()),
    h0r = zst(_oi()),
    lAa = Eoi(),
    mAa = [
      new cAa.default(),
      new Wst.UTF_16BE(),
      new Wst.UTF_16LE(),
      new Wst.UTF_32BE(),
      new Wst.UTF_32LE(),
      new HCe.sjis(),
      new HCe.big5(),
      new HCe.euc_jp(),
      new HCe.euc_kr(),
      new HCe.gb_18030(),
      new h0r.ISO_2022_JP(),
      new h0r.ISO_2022_KR(),
      new h0r.ISO_2022_CN(),
      new UD.ISO_8859_1(),
      new UD.ISO_8859_2(),
      new UD.ISO_8859_5(),
      new UD.ISO_8859_6(),
      new UD.ISO_8859_7(),
      new UD.ISO_8859_8(),
      new UD.ISO_8859_9(),
      new UD.windows_1251(),
      new UD.windows_1256(),
      new UD.KOI8_R(),
      new uAa.default(),
    ],
    dAa = (t) => {
      let e = (0, T0.analyse)(t);
      return e.length > 0 ? e[0].name : null;
    };
  T0.detect = dAa;
  var fAa = (t) => {
    if (!(0, lAa.isByteArray)(t)) throw new Error("Input must be a byte array, e.g. Buffer or Uint8Array");
    let e = [];
    for (let s = 0; s < 256; s++) e[s] = 0;
    for (let s = t.length - 1; s >= 0; s--) e[t[s] & 255]++;
    let r = !1;
    for (let s = 128; s <= 159; s += 1)
      if (e[s] !== 0) {
        r = !0;
        break;
      }
    let n = { byteStats: e, c1Bytes: r, rawInput: t, rawLen: t.length, inputBytes: t, inputLen: t.length };
    return mAa
      .map((s) => s.match(n))
      .filter((s) => !!s)
      .sort((s, a) => a.confidence - s.confidence);
  };
  T0.analyse = fAa;
  var pAa = (t, e = {}) =>
    new Promise((r, n) => {
      let o,
        s = (0, voi.default)(),
        a = (c, m) => {
          (o && s.closeSync(o), c ? n(c) : m ? r((0, T0.detect)(m)) : n(new Error("No error and no buffer received")));
        },
        u = e?.sampleSize || 0;
      if (u > 0) {
        o = s.openSync(t, "r");
        let c = Buffer.allocUnsafe(u);
        s.read(o, c, 0, u, e.offset, (m, d) => {
          m ? a(m, null) : (d < u && (c = c.subarray(0, d)), a(null, c));
        });
        return;
      }
      s.readFile(t, a);
    });
  T0.detectFile = pAa;
  var hAa = (t, e = {}) => {
    let r = (0, voi.default)();
    if (e && e.sampleSize) {
      let n = r.openSync(t, "r"),
        o = Buffer.allocUnsafe(e.sampleSize),
        s = r.readSync(n, o, 0, e.sampleSize, e.offset);
      return (s < e.sampleSize && (o = o.subarray(0, s)), r.closeSync(n), (0, T0.detect)(o));
    }
    return (0, T0.detect)(r.readFileSync(t));
  };
  T0.detectFileSync = hAa;
  T0.default = { analyse: T0.analyse, detect: T0.detect, detectFileSync: T0.detectFileSync, detectFile: T0.detectFile };
});
import { execSync as Soi } from "child_process";
import gAa from "os";
function bAa() {
  VCe = void 0;
}
function WCe(t) {
  return t.length >= 3 && t[0] === 239 && t[1] === 187 && t[2] === 191
    ? "utf-8"
    : (VCe === void 0 && (VCe = xoi()), VCe || Doi(t) || "utf-8");
}
function xoi() {
  if (gAa.platform() === "win32") {
    try {
      let n = Soi("chcp", { encoding: "utf8" }),
        o = n.match(/:\s*(\d+)/);
      if (o) {
        let s = parseInt(o[1], 10);
        if (!isNaN(s)) return s === 65001 ? "utf-8" : Toi(s);
      }
      throw new Error(`Unable to parse Windows code page from 'chcp' output "${n.trim()}". `);
    } catch (n) {
      console.warn(
        `Failed to get Windows code page using 'chcp' command: ${n instanceof Error ? n.message : String(n)}. Will attempt to detect encoding from command output instead.`,
      );
    }
    return null;
  }
  let t = process.env,
    e = t.LC_ALL || t.LC_CTYPE || t.LANG || "";
  if (!e)
    try {
      e = Soi("locale charmap", { encoding: "utf8" }).toString().trim();
    } catch {
      return (console.warn("Failed to get locale charmap."), null);
    }
  let r = e.match(/\.(.+)/);
  return r && r[1] ? r[1].toLowerCase() : e && !e.includes(".") ? e.toLowerCase() : null;
}
function Toi(t) {
  let e = {
    437: "cp437",
    850: "cp850",
    852: "cp852",
    866: "cp866",
    874: "windows-874",
    932: "shift_jis",
    936: "gbk",
    949: "euc-kr",
    950: "big5",
    20936: "gb2312",
    54936: "gb18030",
    1200: "utf-16le",
    1201: "utf-16be",
    1250: "windows-1250",
    1251: "windows-1251",
    1252: "windows-1252",
    1253: "windows-1253",
    1254: "windows-1254",
    1255: "windows-1255",
    1256: "windows-1256",
    1257: "windows-1257",
    1258: "windows-1258",
    65001: "utf-8",
  };
  return e[t] ? e[t] : (console.warn(`Unable to determine encoding for windows code page ${t}.`), null);
}
function Doi(t) {
  try {
    let e = (0, woi.detect)(t);
    if (e && typeof e == "string") return e.toLowerCase();
  } catch (e) {
    console.warn("Failed to detect encoding with chardet:", e);
  }
  return null;
}
var woi,
  VCe,
  b0r = j(() => {
    "use strict";
    woi = Se(Coi(), 1);
  });
function A0r(t, e, r) {
  if (e === "" || !t.includes(e)) return t;
  if (!r.includes("$")) return t.replaceAll(e, r);
  let n = r.replaceAll("$", "$$$$");
  return t.replaceAll(e, n);
}
function Yle(t, e = 512) {
  if (!t) return !1;
  let r = t.length > e ? t.subarray(0, e) : t;
  for (let n of r) if (n === 0) return !0;
  return !1;
}
var Yst = j(() => {
  "use strict";
});
var Ioi,
  Roi = j(() => {
    "use strict";
    Ioi = async () => {
      try {
        return { module: await import("@lydell/node-pty"), name: "lydell-node-pty" };
      } catch {
        try {
          return { module: await import("node-pty"), name: "node-pty" };
        } catch {
          return null;
        }
      }
    };
  });
function koi(t) {
  let e = t.buffer.active,
    r = e.cursorX,
    n = e.cursorY,
    o = "",
    s = "",
    a = [];
  for (let u = 0; u < t.rows; u++) {
    let c = e.getLine(e.viewportY + u),
      m = [];
    if (!c) {
      a.push(m);
      continue;
    }
    let d = new Jst(null, -1, -1, r, n),
      f = "";
    for (let p = 0; p < t.cols; p++) {
      let h = c.getCell(p),
        g = new Jst(h || null, p, u, r, n);
      if (p > 0 && !g.equals(d)) {
        if (f) {
          let b = {
            text: f,
            bold: d.isAttribute(2),
            italic: d.isAttribute(4),
            underline: d.isAttribute(8),
            dim: d.isAttribute(16),
            inverse: d.isAttribute(1) || d.isCursor(),
            fg: Kst(d.fg, d.fgColorMode, o),
            bg: Kst(d.bg, d.bgColorMode, s),
          };
          m.push(b);
        }
        f = "";
      }
      ((f += g.getChars()), (d = g));
    }
    if (f) {
      let p = {
        text: f,
        bold: d.isAttribute(2),
        italic: d.isAttribute(4),
        underline: d.isAttribute(8),
        dim: d.isAttribute(16),
        inverse: d.isAttribute(1) || d.isCursor(),
        fg: Kst(d.fg, d.fgColorMode, o),
        bg: Kst(d.bg, d.bgColorMode, s),
      };
      m.push(p);
    }
    a.push(m);
  }
  return a;
}
function Kst(t, e, r) {
  if (e === 2) {
    let n = (t >> 16) & 255,
      o = (t >> 8) & 255,
      s = t & 255;
    return `#${n.toString(16).padStart(2, "0")}${o.toString(16).padStart(2, "0")}${s.toString(16).padStart(2, "0")}`;
  }
  return (e === 1 && AAa[t]) || r;
}
var Jst,
  AAa,
  Ooi = j(() => {
    "use strict";
    Jst = class {
      cell;
      x;
      y;
      cursorX;
      cursorY;
      attributes = 0;
      fg = 0;
      bg = 0;
      fgColorMode = 0;
      bgColorMode = 0;
      constructor(e, r, n, o, s) {
        ((this.cell = e),
          (this.x = r),
          (this.y = n),
          (this.cursorX = o),
          (this.cursorY = s),
          e &&
            (e.isInverse() && (this.attributes += 1),
            e.isBold() && (this.attributes += 2),
            e.isItalic() && (this.attributes += 4),
            e.isUnderline() && (this.attributes += 8),
            e.isDim() && (this.attributes += 16),
            e.isFgRGB() ? (this.fgColorMode = 2) : e.isFgPalette() ? (this.fgColorMode = 1) : (this.fgColorMode = 0),
            e.isBgRGB() ? (this.bgColorMode = 2) : e.isBgPalette() ? (this.bgColorMode = 1) : (this.bgColorMode = 0),
            this.fgColorMode === 0 ? (this.fg = -1) : (this.fg = e.getFgColor()),
            this.bgColorMode === 0 ? (this.bg = -1) : (this.bg = e.getBgColor())));
      }
      isCursor() {
        return this.x === this.cursorX && this.y === this.cursorY;
      }
      getChars() {
        return this.cell?.getChars() || " ";
      }
      isAttribute(e) {
        return (this.attributes & e) !== 0;
      }
      equals(e) {
        return (
          this.attributes === e.attributes &&
          this.fg === e.fg &&
          this.bg === e.bg &&
          this.fgColorMode === e.fgColorMode &&
          this.bgColorMode === e.bgColorMode &&
          this.isCursor() === e.isCursor()
        );
      }
    };
    AAa = [
      "#000000",
      "#800000",
      "#008000",
      "#808000",
      "#000080",
      "#800080",
      "#008080",
      "#c0c0c0",
      "#808080",
      "#ff0000",
      "#00ff00",
      "#ffff00",
      "#0000ff",
      "#ff00ff",
      "#00ffff",
      "#ffffff",
      "#000000",
      "#00005f",
      "#000087",
      "#0000af",
      "#0000d7",
      "#0000ff",
      "#005f00",
      "#005f5f",
      "#005f87",
      "#005faf",
      "#005fd7",
      "#005fff",
      "#008700",
      "#00875f",
      "#008787",
      "#0087af",
      "#0087d7",
      "#0087ff",
      "#00af00",
      "#00af5f",
      "#00af87",
      "#00afaf",
      "#00afd7",
      "#00afff",
      "#00d700",
      "#00d75f",
      "#00d787",
      "#00d7af",
      "#00d7d7",
      "#00d7ff",
      "#00ff00",
      "#00ff5f",
      "#00ff87",
      "#00ffaf",
      "#00ffd7",
      "#00ffff",
      "#5f0000",
      "#5f005f",
      "#5f0087",
      "#5f00af",
      "#5f00d7",
      "#5f00ff",
      "#5f5f00",
      "#5f5f5f",
      "#5f5f87",
      "#5f5faf",
      "#5f5fd7",
      "#5f5fff",
      "#5f8700",
      "#5f875f",
      "#5f8787",
      "#5f87af",
      "#5f87d7",
      "#5f87ff",
      "#5faf00",
      "#5faf5f",
      "#5faf87",
      "#5fafaf",
      "#5fafd7",
      "#5fafff",
      "#5fd700",
      "#5fd75f",
      "#5fd787",
      "#5fd7af",
      "#5fd7d7",
      "#5fd7ff",
      "#5fff00",
      "#5fff5f",
      "#5fff87",
      "#5fffaf",
      "#5fffd7",
      "#5fffff",
      "#870000",
      "#87005f",
      "#870087",
      "#8700af",
      "#8700d7",
      "#8700ff",
      "#875f00",
      "#875f5f",
      "#875f87",
      "#875faf",
      "#875fd7",
      "#875fff",
      "#878700",
      "#87875f",
      "#878787",
      "#8787af",
      "#8787d7",
      "#8787ff",
      "#87af00",
      "#87af5f",
      "#87af87",
      "#87afaf",
      "#87afd7",
      "#87afff",
      "#87d700",
      "#87d75f",
      "#87d787",
      "#87d7af",
      "#87d7d7",
      "#87d7ff",
      "#87ff00",
      "#87ff5f",
      "#87ff87",
      "#87ffaf",
      "#87ffd7",
      "#87ffff",
      "#af0000",
      "#af005f",
      "#af0087",
      "#af00af",
      "#af00d7",
      "#af00ff",
      "#af5f00",
      "#af5f5f",
      "#af5f87",
      "#af5faf",
      "#af5fd7",
      "#af5fff",
      "#af8700",
      "#af875f",
      "#af8787",
      "#af87af",
      "#af87d7",
      "#af87ff",
      "#afaf00",
      "#afaf5f",
      "#afaf87",
      "#afafaf",
      "#afafd7",
      "#afafff",
      "#afd700",
      "#afd75f",
      "#afd787",
      "#afd7af",
      "#afd7d7",
      "#afd7ff",
      "#afff00",
      "#afff5f",
      "#afff87",
      "#afffaf",
      "#afffd7",
      "#afffff",
      "#d70000",
      "#d7005f",
      "#d70087",
      "#d700af",
      "#d700d7",
      "#d700ff",
      "#d75f00",
      "#d75f5f",
      "#d75f87",
      "#d75faf",
      "#d75fd7",
      "#d75fff",
      "#d78700",
      "#d7875f",
      "#d78787",
      "#d787af",
      "#d787d7",
      "#d787ff",
      "#d7af00",
      "#d7af5f",
      "#d7af87",
      "#d7afaf",
      "#d7afd7",
      "#d7afff",
      "#d7d700",
      "#d7d75f",
      "#d7d787",
      "#d7d7af",
      "#d7d7d7",
      "#d7d7ff",
      "#d7ff00",
      "#d7ff5f",
      "#d7ff87",
      "#d7ffaf",
      "#d7ffd7",
      "#d7ffff",
      "#ff0000",
      "#ff005f",
      "#ff0087",
      "#ff00af",
      "#ff00d7",
      "#ff00ff",
      "#ff5f00",
      "#ff5f5f",
      "#ff5f87",
      "#ff5faf",
      "#ff5fd7",
      "#ff5fff",
      "#ff8700",
      "#ff875f",
      "#ff8787",
      "#ff87af",
      "#ff87d7",
      "#ff87ff",
      "#ffaf00",
      "#ffaf5f",
      "#ffaf87",
      "#ffafaf",
      "#ffafd7",
      "#ffafff",
      "#ffd700",
      "#ffd75f",
      "#ffd787",
      "#ffd7af",
      "#ffd7d7",
      "#ffd7ff",
      "#ffff00",
      "#ffff5f",
      "#ffff87",
      "#ffffaf",
      "#ffffd7",
      "#ffffff",
      "#080808",
      "#121212",
      "#1c1c1c",
      "#262626",
      "#303030",
      "#3a3a3a",
      "#444444",
      "#4e4e4e",
      "#585858",
      "#626262",
      "#6c6c6c",
      "#767676",
      "#808080",
      "#8a8a8a",
      "#949494",
      "#9e9e9e",
      "#a8a8a8",
      "#b2b2b2",
      "#bcbcbc",
      "#c6c6c6",
      "#d0d0d0",
      "#dadada",
      "#e4e4e4",
      "#eeeeee",
    ];
  });
function yAa(t) {
  return (
    typeof t == "object" &&
    t !== null &&
    "name" in t &&
    "execute" in t &&
    typeof t.name == "string" &&
    typeof t.execute == "function"
  );
}
function _Y(t, e, r) {
  let n;
  (yAa(t) ? (n = [t.name, t.constructor.name]) : (n = [t]),
    n.some((o) => cv.includes(o)) && (n = [...new Set([...n, ...cv])]));
  for (let o of r) {
    let s = o.indexOf("(");
    if (s === -1) {
      if (n.includes(o)) return !0;
      continue;
    }
    let a = o.substring(0, s);
    if (!n.includes(a) || !o.endsWith(")")) continue;
    let u = o.substring(s + 1, o.length - 1),
      c;
    if (typeof e == "string") c = e;
    else {
      if (!("command" in e.params)) continue;
      c = String(e.params.command);
    }
    if (n.some((m) => cv.includes(m)) && (c === u || c.startsWith(u + " "))) return !0;
  }
  return !1;
}
var y0r = j(() => {
  "use strict";
  Kle();
});
function Jle(t) {
  if (t !== BU) throw new Error("Illegal constructor");
}
function YCe(t) {
  return !!t && typeof t.row == "number" && typeof t.column == "number";
}
function Boi(t) {
  dt = t;
}
function w0r(t, e, r, n) {
  let o = r - e,
    s = t.textCallback(e, n);
  if (s) {
    for (e += s.length; e < r; ) {
      let a = t.textCallback(e, n);
      if (a && a.length > 0) ((e += a.length), (s += a));
      else break;
    }
    e > r && (s = s.slice(0, o));
  }
  return s ?? "";
}
function S0r(t, e, r, n, o) {
  for (let s = 0, a = o.length; s < a; s++) {
    let u = dt.getValue(r, "i32");
    r += $i;
    let c = md(e, r);
    ((r += a9), (o[s] = { patternIndex: n, name: t.captureNames[u], node: c }));
  }
  return r;
}
function Us(t, e = 0) {
  let r = vi + e * a9;
  (dt.setValue(r, t.id, "i32"),
    (r += $i),
    dt.setValue(r, t.startIndex, "i32"),
    (r += $i),
    dt.setValue(r, t.startPosition.row, "i32"),
    (r += $i),
    dt.setValue(r, t.startPosition.column, "i32"),
    (r += $i),
    dt.setValue(r, t[0], "i32"));
}
function md(t, e = vi) {
  let r = dt.getValue(e, "i32");
  if (((e += $i), r === 0)) return null;
  let n = dt.getValue(e, "i32");
  e += $i;
  let o = dt.getValue(e, "i32");
  e += $i;
  let s = dt.getValue(e, "i32");
  e += $i;
  let a = dt.getValue(e, "i32");
  return new SAa(BU, { id: r, tree: t, startIndex: n, startPosition: { row: o, column: s }, other: a });
}
function D0(t, e = vi) {
  (dt.setValue(e + 0 * $i, t[0], "i32"),
    dt.setValue(e + 1 * $i, t[1], "i32"),
    dt.setValue(e + 2 * $i, t[2], "i32"),
    dt.setValue(e + 3 * $i, t[3], "i32"));
}
function ty(t) {
  ((t[0] = dt.getValue(vi + 0 * $i, "i32")),
    (t[1] = dt.getValue(vi + 1 * $i, "i32")),
    (t[2] = dt.getValue(vi + 2 * $i, "i32")),
    (t[3] = dt.getValue(vi + 3 * $i, "i32")));
}
function lv(t, e) {
  (dt.setValue(t, e.row, "i32"), dt.setValue(t + $i, e.column, "i32"));
}
function EY(t) {
  return { row: dt.getValue(t, "i32") >>> 0, column: dt.getValue(t + $i, "i32") >>> 0 };
}
function Moi(t, e) {
  (lv(t, e.startPosition),
    (t += $D),
    lv(t, e.endPosition),
    (t += $D),
    dt.setValue(t, e.startIndex, "i32"),
    (t += $i),
    dt.setValue(t, e.endIndex, "i32"),
    (t += $i));
}
function Zst(t) {
  let e = {};
  return (
    (e.startPosition = EY(t)),
    (t += $D),
    (e.endPosition = EY(t)),
    (t += $D),
    (e.startIndex = dt.getValue(t, "i32") >>> 0),
    (t += $i),
    (e.endIndex = dt.getValue(t, "i32") >>> 0),
    e
  );
}
function Foi(t, e = vi) {
  (lv(e, t.startPosition),
    (e += $D),
    lv(e, t.oldEndPosition),
    (e += $D),
    lv(e, t.newEndPosition),
    (e += $D),
    dt.setValue(e, t.startIndex, "i32"),
    (e += $i),
    dt.setValue(e, t.oldEndIndex, "i32"),
    (e += $i),
    dt.setValue(e, t.newEndIndex, "i32"),
    (e += $i));
}
function Uoi(t) {
  let e = dt.getValue(t, "i32"),
    r = dt.getValue((t += $i), "i32"),
    n = dt.getValue((t += $i), "i32");
  return { major_version: e, minor_version: r, patch_version: n };
}
function joi(t, e, r, n) {
  if (t.length !== 3)
    throw new Error(`Wrong number of arguments to \`#${r}\` predicate. Expected 2, got ${t.length - 1}`);
  if (!Poi(t[1])) throw new Error(`First argument of \`#${r}\` predicate must be a capture. Got "${t[1].value}"`);
  let o = r === "eq?" || r === "any-eq?",
    s = !r.startsWith("any-");
  if (Poi(t[2])) {
    let a = t[1].name,
      u = t[2].name;
    n[e].push((c) => {
      let m = [],
        d = [];
      for (let p of c) (p.name === a && m.push(p.node), p.name === u && d.push(p.node));
      let f = Vt((p, h, g) => (g ? p.text === h.text : p.text !== h.text), "compare");
      return s ? m.every((p) => d.some((h) => f(p, h, o))) : m.some((p) => d.some((h) => f(p, h, o)));
    });
  } else {
    let a = t[1].name,
      u = t[2].value,
      c = Vt((d) => d.text === u, "matches"),
      m = Vt((d) => d.text !== u, "doesNotMatch");
    n[e].push((d) => {
      let f = [];
      for (let h of d) h.name === a && f.push(h.node);
      let p = o ? c : m;
      return s ? f.every(p) : f.some(p);
    });
  }
}
function Qoi(t, e, r, n) {
  if (t.length !== 3)
    throw new Error(`Wrong number of arguments to \`#${r}\` predicate. Expected 2, got ${t.length - 1}.`);
  if (t[1].type !== "capture")
    throw new Error(`First argument of \`#${r}\` predicate must be a capture. Got "${t[1].value}".`);
  if (t[2].type !== "string")
    throw new Error(`Second argument of \`#${r}\` predicate must be a string. Got @${t[2].name}.`);
  let o = r === "match?" || r === "any-match?",
    s = !r.startsWith("any-"),
    a = t[1].name,
    u = new RegExp(t[2].value);
  n[e].push((c) => {
    let m = [];
    for (let f of c) f.name === a && m.push(f.node.text);
    let d = Vt((f, p) => (p ? u.test(f) : !u.test(f)), "test");
    return m.length === 0 ? !o : s ? m.every((f) => d(f, o)) : m.some((f) => d(f, o));
  });
}
function Goi(t, e, r, n) {
  if (t.length < 2)
    throw new Error(`Wrong number of arguments to \`#${r}\` predicate. Expected at least 1. Got ${t.length - 1}.`);
  if (t[1].type !== "capture")
    throw new Error(`First argument of \`#${r}\` predicate must be a capture. Got "${t[1].value}".`);
  let o = r === "any-of?",
    s = t[1].name,
    a = t.slice(2);
  if (!a.every(x0r)) throw new Error(`Arguments to \`#${r}\` predicate must be strings.".`);
  let u = a.map((c) => c.value);
  n[e].push((c) => {
    let m = [];
    for (let d of c) d.name === s && m.push(d.node.text);
    return m.length === 0 ? !o : m.every((d) => u.includes(d)) === o;
  });
}
function qoi(t, e, r, n, o) {
  if (t.length < 2 || t.length > 3)
    throw new Error(`Wrong number of arguments to \`#${r}\` predicate. Expected 1 or 2. Got ${t.length - 1}.`);
  if (!t.every(x0r)) throw new Error(`Arguments to \`#${r}\` predicate must be strings.".`);
  let s = r === "is?" ? n : o;
  (s[e] || (s[e] = {}), (s[e][t[1].value] = t[2]?.value ?? null));
}
function Hoi(t, e, r) {
  if (t.length < 2 || t.length > 3)
    throw new Error(`Wrong number of arguments to \`#set!\` predicate. Expected 1 or 2. Got ${t.length - 1}.`);
  if (!t.every(x0r)) throw new Error('Arguments to `#set!` predicate must be strings.".');
  (r[e] || (r[e] = {}), (r[e][t[1].value] = t[2]?.value ?? null));
}
function Voi(t, e, r, n, o, s, a, u, c, m, d) {
  if (e === wAa) {
    let f = n[r];
    s.push({ type: "capture", name: f });
  } else if (e === xAa) s.push({ type: "string", value: o[r] });
  else if (s.length > 0) {
    if (s[0].type !== "string") throw new Error("Predicates must begin with a literal value");
    let f = s[0].value;
    switch (f) {
      case "any-not-eq?":
      case "not-eq?":
      case "any-eq?":
      case "eq?":
        joi(s, t, f, a);
        break;
      case "any-not-match?":
      case "not-match?":
      case "any-match?":
      case "match?":
        Qoi(s, t, f, a);
        break;
      case "not-any-of?":
      case "any-of?":
        Goi(s, t, f, a);
        break;
      case "is?":
      case "is-not?":
        qoi(s, t, f, m, d);
        break;
      case "set!":
        Hoi(s, t, c);
        break;
      default:
        u[t].push({ operator: f, operands: s.slice(1) });
    }
    s.length = 0;
  }
}
async function zoi(t) {
  return (Xst || (Xst = await kAa(t)), Xst);
}
function Yoi() {
  return !!Xst;
}
var _Aa,
  Vt,
  Noi,
  $i,
  _0r,
  a9,
  $D,
  KCe,
  PU,
  BU,
  dt,
  EAa,
  vAa,
  CAa,
  SAa,
  wAa,
  xAa,
  TAa,
  cxc,
  Poi,
  x0r,
  xS,
  zCe,
  DAa,
  IAa,
  T0r,
  RAa,
  kAa,
  Xst,
  vi,
  E0r,
  v0r,
  D0r,
  Koi = j(() => {
    ((_Aa = Object.defineProperty),
      (Vt = (t, e) => _Aa(t, "name", { value: e, configurable: !0 })),
      (Noi = 2),
      ($i = 4),
      (_0r = 4 * $i),
      (a9 = 5 * $i),
      ($D = 2 * $i),
      (KCe = 2 * $i + 2 * $D),
      (PU = { row: 0, column: 0 }),
      (BU = Symbol("INTERNAL")));
    Vt(Jle, "assertInternal");
    Vt(YCe, "isPoint");
    Vt(Boi, "setModule");
    EAa = class {
      static {
        Vt(this, "LookaheadIterator");
      }
      0 = 0;
      language;
      constructor(t, e, r) {
        (Jle(t), (this[0] = e), (this.language = r));
      }
      get currentTypeId() {
        return dt._ts_lookahead_iterator_current_symbol(this[0]);
      }
      get currentType() {
        return this.language.types[this.currentTypeId] || "ERROR";
      }
      delete() {
        (dt._ts_lookahead_iterator_delete(this[0]), (this[0] = 0));
      }
      reset(t, e) {
        return dt._ts_lookahead_iterator_reset(this[0], t[0], e) ? ((this.language = t), !0) : !1;
      }
      resetState(t) {
        return !!dt._ts_lookahead_iterator_reset_state(this[0], t);
      }
      [Symbol.iterator]() {
        return {
          next: Vt(
            () =>
              dt._ts_lookahead_iterator_next(this[0]) ? { done: !1, value: this.currentType } : { done: !0, value: "" },
            "next",
          ),
        };
      }
    };
    Vt(w0r, "getText");
    ((vAa = class C0r {
      static {
        Vt(this, "Tree");
      }
      0 = 0;
      textCallback;
      language;
      constructor(e, r, n, o) {
        (Jle(e), (this[0] = r), (this.language = n), (this.textCallback = o));
      }
      copy() {
        let e = dt._ts_tree_copy(this[0]);
        return new C0r(BU, e, this.language, this.textCallback);
      }
      delete() {
        (dt._ts_tree_delete(this[0]), (this[0] = 0));
      }
      get rootNode() {
        return (dt._ts_tree_root_node_wasm(this[0]), md(this));
      }
      rootNodeWithOffset(e, r) {
        let n = vi + a9;
        return (dt.setValue(n, e, "i32"), lv(n + $i, r), dt._ts_tree_root_node_with_offset_wasm(this[0]), md(this));
      }
      edit(e) {
        (Foi(e), dt._ts_tree_edit_wasm(this[0]));
      }
      walk() {
        return this.rootNode.walk();
      }
      getChangedRanges(e) {
        if (!(e instanceof C0r)) throw new TypeError("Argument must be a Tree");
        dt._ts_tree_get_changed_ranges_wasm(this[0], e[0]);
        let r = dt.getValue(vi, "i32"),
          n = dt.getValue(vi + $i, "i32"),
          o = new Array(r);
        if (r > 0) {
          let s = n;
          for (let a = 0; a < r; a++) ((o[a] = Zst(s)), (s += KCe));
          dt._free(n);
        }
        return o;
      }
      getIncludedRanges() {
        dt._ts_tree_included_ranges_wasm(this[0]);
        let e = dt.getValue(vi, "i32"),
          r = dt.getValue(vi + $i, "i32"),
          n = new Array(e);
        if (e > 0) {
          let o = r;
          for (let s = 0; s < e; s++) ((n[s] = Zst(o)), (o += KCe));
          dt._free(r);
        }
        return n;
      }
    }),
      (CAa = class Loi {
        static {
          Vt(this, "TreeCursor");
        }
        0 = 0;
        1 = 0;
        2 = 0;
        3 = 0;
        tree;
        constructor(e, r) {
          (Jle(e), (this.tree = r), ty(this));
        }
        copy() {
          let e = new Loi(BU, this.tree);
          return (dt._ts_tree_cursor_copy_wasm(this.tree[0]), ty(e), e);
        }
        delete() {
          (D0(this), dt._ts_tree_cursor_delete_wasm(this.tree[0]), (this[0] = this[1] = this[2] = 0));
        }
        get currentNode() {
          return (D0(this), dt._ts_tree_cursor_current_node_wasm(this.tree[0]), md(this.tree));
        }
        get currentFieldId() {
          return (D0(this), dt._ts_tree_cursor_current_field_id_wasm(this.tree[0]));
        }
        get currentFieldName() {
          return this.tree.language.fields[this.currentFieldId];
        }
        get currentDepth() {
          return (D0(this), dt._ts_tree_cursor_current_depth_wasm(this.tree[0]));
        }
        get currentDescendantIndex() {
          return (D0(this), dt._ts_tree_cursor_current_descendant_index_wasm(this.tree[0]));
        }
        get nodeType() {
          return this.tree.language.types[this.nodeTypeId] || "ERROR";
        }
        get nodeTypeId() {
          return (D0(this), dt._ts_tree_cursor_current_node_type_id_wasm(this.tree[0]));
        }
        get nodeStateId() {
          return (D0(this), dt._ts_tree_cursor_current_node_state_id_wasm(this.tree[0]));
        }
        get nodeId() {
          return (D0(this), dt._ts_tree_cursor_current_node_id_wasm(this.tree[0]));
        }
        get nodeIsNamed() {
          return (D0(this), dt._ts_tree_cursor_current_node_is_named_wasm(this.tree[0]) === 1);
        }
        get nodeIsMissing() {
          return (D0(this), dt._ts_tree_cursor_current_node_is_missing_wasm(this.tree[0]) === 1);
        }
        get nodeText() {
          D0(this);
          let e = dt._ts_tree_cursor_start_index_wasm(this.tree[0]),
            r = dt._ts_tree_cursor_end_index_wasm(this.tree[0]);
          dt._ts_tree_cursor_start_position_wasm(this.tree[0]);
          let n = EY(vi);
          return w0r(this.tree, e, r, n);
        }
        get startPosition() {
          return (D0(this), dt._ts_tree_cursor_start_position_wasm(this.tree[0]), EY(vi));
        }
        get endPosition() {
          return (D0(this), dt._ts_tree_cursor_end_position_wasm(this.tree[0]), EY(vi));
        }
        get startIndex() {
          return (D0(this), dt._ts_tree_cursor_start_index_wasm(this.tree[0]));
        }
        get endIndex() {
          return (D0(this), dt._ts_tree_cursor_end_index_wasm(this.tree[0]));
        }
        gotoFirstChild() {
          D0(this);
          let e = dt._ts_tree_cursor_goto_first_child_wasm(this.tree[0]);
          return (ty(this), e === 1);
        }
        gotoLastChild() {
          D0(this);
          let e = dt._ts_tree_cursor_goto_last_child_wasm(this.tree[0]);
          return (ty(this), e === 1);
        }
        gotoParent() {
          D0(this);
          let e = dt._ts_tree_cursor_goto_parent_wasm(this.tree[0]);
          return (ty(this), e === 1);
        }
        gotoNextSibling() {
          D0(this);
          let e = dt._ts_tree_cursor_goto_next_sibling_wasm(this.tree[0]);
          return (ty(this), e === 1);
        }
        gotoPreviousSibling() {
          D0(this);
          let e = dt._ts_tree_cursor_goto_previous_sibling_wasm(this.tree[0]);
          return (ty(this), e === 1);
        }
        gotoDescendant(e) {
          (D0(this), dt._ts_tree_cursor_goto_descendant_wasm(this.tree[0], e), ty(this));
        }
        gotoFirstChildForIndex(e) {
          (D0(this), dt.setValue(vi + _0r, e, "i32"));
          let r = dt._ts_tree_cursor_goto_first_child_for_index_wasm(this.tree[0]);
          return (ty(this), r === 1);
        }
        gotoFirstChildForPosition(e) {
          (D0(this), lv(vi + _0r, e));
          let r = dt._ts_tree_cursor_goto_first_child_for_position_wasm(this.tree[0]);
          return (ty(this), r === 1);
        }
        reset(e) {
          (Us(e), D0(this, vi + a9), dt._ts_tree_cursor_reset_wasm(this.tree[0]), ty(this));
        }
        resetTo(e) {
          (D0(this, vi), D0(e, vi + _0r), dt._ts_tree_cursor_reset_to_wasm(this.tree[0], e.tree[0]), ty(this));
        }
      }),
      (SAa = class {
        static {
          Vt(this, "Node");
        }
        0 = 0;
        _children;
        _namedChildren;
        constructor(t, { id: e, tree: r, startIndex: n, startPosition: o, other: s }) {
          (Jle(t), (this[0] = s), (this.id = e), (this.tree = r), (this.startIndex = n), (this.startPosition = o));
        }
        id;
        startIndex;
        startPosition;
        tree;
        get typeId() {
          return (Us(this), dt._ts_node_symbol_wasm(this.tree[0]));
        }
        get grammarId() {
          return (Us(this), dt._ts_node_grammar_symbol_wasm(this.tree[0]));
        }
        get type() {
          return this.tree.language.types[this.typeId] || "ERROR";
        }
        get grammarType() {
          return this.tree.language.types[this.grammarId] || "ERROR";
        }
        get isNamed() {
          return (Us(this), dt._ts_node_is_named_wasm(this.tree[0]) === 1);
        }
        get isExtra() {
          return (Us(this), dt._ts_node_is_extra_wasm(this.tree[0]) === 1);
        }
        get isError() {
          return (Us(this), dt._ts_node_is_error_wasm(this.tree[0]) === 1);
        }
        get isMissing() {
          return (Us(this), dt._ts_node_is_missing_wasm(this.tree[0]) === 1);
        }
        get hasChanges() {
          return (Us(this), dt._ts_node_has_changes_wasm(this.tree[0]) === 1);
        }
        get hasError() {
          return (Us(this), dt._ts_node_has_error_wasm(this.tree[0]) === 1);
        }
        get endIndex() {
          return (Us(this), dt._ts_node_end_index_wasm(this.tree[0]));
        }
        get endPosition() {
          return (Us(this), dt._ts_node_end_point_wasm(this.tree[0]), EY(vi));
        }
        get text() {
          return w0r(this.tree, this.startIndex, this.endIndex, this.startPosition);
        }
        get parseState() {
          return (Us(this), dt._ts_node_parse_state_wasm(this.tree[0]));
        }
        get nextParseState() {
          return (Us(this), dt._ts_node_next_parse_state_wasm(this.tree[0]));
        }
        equals(t) {
          return this.tree === t.tree && this.id === t.id;
        }
        child(t) {
          return (Us(this), dt._ts_node_child_wasm(this.tree[0], t), md(this.tree));
        }
        namedChild(t) {
          return (Us(this), dt._ts_node_named_child_wasm(this.tree[0], t), md(this.tree));
        }
        childForFieldId(t) {
          return (Us(this), dt._ts_node_child_by_field_id_wasm(this.tree[0], t), md(this.tree));
        }
        childForFieldName(t) {
          let e = this.tree.language.fields.indexOf(t);
          return e !== -1 ? this.childForFieldId(e) : null;
        }
        fieldNameForChild(t) {
          Us(this);
          let e = dt._ts_node_field_name_for_child_wasm(this.tree[0], t);
          return e ? dt.AsciiToString(e) : null;
        }
        fieldNameForNamedChild(t) {
          Us(this);
          let e = dt._ts_node_field_name_for_named_child_wasm(this.tree[0], t);
          return e ? dt.AsciiToString(e) : null;
        }
        childrenForFieldName(t) {
          let e = this.tree.language.fields.indexOf(t);
          return e !== -1 && e !== 0 ? this.childrenForFieldId(e) : [];
        }
        childrenForFieldId(t) {
          (Us(this), dt._ts_node_children_by_field_id_wasm(this.tree[0], t));
          let e = dt.getValue(vi, "i32"),
            r = dt.getValue(vi + $i, "i32"),
            n = new Array(e);
          if (e > 0) {
            let o = r;
            for (let s = 0; s < e; s++) ((n[s] = md(this.tree, o)), (o += a9));
            dt._free(r);
          }
          return n;
        }
        firstChildForIndex(t) {
          Us(this);
          let e = vi + a9;
          return (dt.setValue(e, t, "i32"), dt._ts_node_first_child_for_byte_wasm(this.tree[0]), md(this.tree));
        }
        firstNamedChildForIndex(t) {
          Us(this);
          let e = vi + a9;
          return (dt.setValue(e, t, "i32"), dt._ts_node_first_named_child_for_byte_wasm(this.tree[0]), md(this.tree));
        }
        get childCount() {
          return (Us(this), dt._ts_node_child_count_wasm(this.tree[0]));
        }
        get namedChildCount() {
          return (Us(this), dt._ts_node_named_child_count_wasm(this.tree[0]));
        }
        get firstChild() {
          return this.child(0);
        }
        get firstNamedChild() {
          return this.namedChild(0);
        }
        get lastChild() {
          return this.child(this.childCount - 1);
        }
        get lastNamedChild() {
          return this.namedChild(this.namedChildCount - 1);
        }
        get children() {
          if (!this._children) {
            (Us(this), dt._ts_node_children_wasm(this.tree[0]));
            let t = dt.getValue(vi, "i32"),
              e = dt.getValue(vi + $i, "i32");
            if (((this._children = new Array(t)), t > 0)) {
              let r = e;
              for (let n = 0; n < t; n++) ((this._children[n] = md(this.tree, r)), (r += a9));
              dt._free(e);
            }
          }
          return this._children;
        }
        get namedChildren() {
          if (!this._namedChildren) {
            (Us(this), dt._ts_node_named_children_wasm(this.tree[0]));
            let t = dt.getValue(vi, "i32"),
              e = dt.getValue(vi + $i, "i32");
            if (((this._namedChildren = new Array(t)), t > 0)) {
              let r = e;
              for (let n = 0; n < t; n++) ((this._namedChildren[n] = md(this.tree, r)), (r += a9));
              dt._free(e);
            }
          }
          return this._namedChildren;
        }
        descendantsOfType(t, e = PU, r = PU) {
          Array.isArray(t) || (t = [t]);
          let n = [],
            o = this.tree.language.types;
          for (let m of t) m == "ERROR" && n.push(65535);
          for (let m = 0, d = o.length; m < d; m++) t.includes(o[m]) && n.push(m);
          let s = dt._malloc($i * n.length);
          for (let m = 0, d = n.length; m < d; m++) dt.setValue(s + m * $i, n[m], "i32");
          (Us(this), dt._ts_node_descendants_of_type_wasm(this.tree[0], s, n.length, e.row, e.column, r.row, r.column));
          let a = dt.getValue(vi, "i32"),
            u = dt.getValue(vi + $i, "i32"),
            c = new Array(a);
          if (a > 0) {
            let m = u;
            for (let d = 0; d < a; d++) ((c[d] = md(this.tree, m)), (m += a9));
          }
          return (dt._free(u), dt._free(s), c);
        }
        get nextSibling() {
          return (Us(this), dt._ts_node_next_sibling_wasm(this.tree[0]), md(this.tree));
        }
        get previousSibling() {
          return (Us(this), dt._ts_node_prev_sibling_wasm(this.tree[0]), md(this.tree));
        }
        get nextNamedSibling() {
          return (Us(this), dt._ts_node_next_named_sibling_wasm(this.tree[0]), md(this.tree));
        }
        get previousNamedSibling() {
          return (Us(this), dt._ts_node_prev_named_sibling_wasm(this.tree[0]), md(this.tree));
        }
        get descendantCount() {
          return (Us(this), dt._ts_node_descendant_count_wasm(this.tree[0]));
        }
        get parent() {
          return (Us(this), dt._ts_node_parent_wasm(this.tree[0]), md(this.tree));
        }
        childWithDescendant(t) {
          return (Us(this), Us(t, 1), dt._ts_node_child_with_descendant_wasm(this.tree[0]), md(this.tree));
        }
        descendantForIndex(t, e = t) {
          if (typeof t != "number" || typeof e != "number") throw new Error("Arguments must be numbers");
          Us(this);
          let r = vi + a9;
          return (
            dt.setValue(r, t, "i32"),
            dt.setValue(r + $i, e, "i32"),
            dt._ts_node_descendant_for_index_wasm(this.tree[0]),
            md(this.tree)
          );
        }
        namedDescendantForIndex(t, e = t) {
          if (typeof t != "number" || typeof e != "number") throw new Error("Arguments must be numbers");
          Us(this);
          let r = vi + a9;
          return (
            dt.setValue(r, t, "i32"),
            dt.setValue(r + $i, e, "i32"),
            dt._ts_node_named_descendant_for_index_wasm(this.tree[0]),
            md(this.tree)
          );
        }
        descendantForPosition(t, e = t) {
          if (!YCe(t) || !YCe(e)) throw new Error("Arguments must be {row, column} objects");
          Us(this);
          let r = vi + a9;
          return (lv(r, t), lv(r + $D, e), dt._ts_node_descendant_for_position_wasm(this.tree[0]), md(this.tree));
        }
        namedDescendantForPosition(t, e = t) {
          if (!YCe(t) || !YCe(e)) throw new Error("Arguments must be {row, column} objects");
          Us(this);
          let r = vi + a9;
          return (lv(r, t), lv(r + $D, e), dt._ts_node_named_descendant_for_position_wasm(this.tree[0]), md(this.tree));
        }
        walk() {
          return (Us(this), dt._ts_tree_cursor_new_wasm(this.tree[0]), new CAa(BU, this.tree));
        }
        edit(t) {
          if (this.startIndex >= t.oldEndIndex) {
            this.startIndex = t.newEndIndex + (this.startIndex - t.oldEndIndex);
            let e, r;
            (this.startPosition.row > t.oldEndPosition.row
              ? ((e = this.startPosition.row - t.oldEndPosition.row), (r = this.startPosition.column))
              : ((e = 0),
                (r = this.startPosition.column),
                this.startPosition.column >= t.oldEndPosition.column &&
                  (r = this.startPosition.column - t.oldEndPosition.column)),
              e > 0
                ? ((this.startPosition.row += e), (this.startPosition.column = r))
                : (this.startPosition.column += r));
          } else
            this.startIndex > t.startIndex &&
              ((this.startIndex = t.newEndIndex),
              (this.startPosition.row = t.newEndPosition.row),
              (this.startPosition.column = t.newEndPosition.column));
        }
        toString() {
          Us(this);
          let t = dt._ts_node_to_string_wasm(this.tree[0]),
            e = dt.AsciiToString(t);
          return (dt._free(t), e);
        }
      }));
    Vt(S0r, "unmarshalCaptures");
    Vt(Us, "marshalNode");
    Vt(md, "unmarshalNode");
    Vt(D0, "marshalTreeCursor");
    Vt(ty, "unmarshalTreeCursor");
    Vt(lv, "marshalPoint");
    Vt(EY, "unmarshalPoint");
    Vt(Moi, "marshalRange");
    Vt(Zst, "unmarshalRange");
    Vt(Foi, "marshalEdit");
    Vt(Uoi, "unmarshalLanguageMetadata");
    ((wAa = 1),
      (xAa = 2),
      (TAa = /[\w-]+/g),
      (cxc = { Zero: 0, ZeroOrOne: 1, ZeroOrMore: 2, One: 3, OneOrMore: 4 }),
      (Poi = Vt((t) => t.type === "capture", "isCaptureStep")),
      (x0r = Vt((t) => t.type === "string", "isStringStep")),
      (xS = { Syntax: 1, NodeName: 2, FieldName: 3, CaptureName: 4, PatternStructure: 5 }),
      (zCe = class $oi extends Error {
        constructor(e, r, n, o) {
          (super($oi.formatMessage(e, r)),
            (this.kind = e),
            (this.info = r),
            (this.index = n),
            (this.length = o),
            (this.name = "QueryError"));
        }
        static {
          Vt(this, "QueryError");
        }
        static formatMessage(e, r) {
          switch (e) {
            case xS.NodeName:
              return `Bad node name '${r.word}'`;
            case xS.FieldName:
              return `Bad field name '${r.word}'`;
            case xS.CaptureName:
              return `Bad capture name @${r.word}`;
            case xS.PatternStructure:
              return `Bad pattern structure at offset ${r.suffix}`;
            case xS.Syntax:
              return `Bad syntax at offset ${r.suffix}`;
          }
        }
      }));
    Vt(joi, "parseAnyPredicate");
    Vt(Qoi, "parseMatchPredicate");
    Vt(Goi, "parseAnyOfPredicate");
    Vt(qoi, "parseIsPredicate");
    Vt(Hoi, "parseSetDirective");
    Vt(Voi, "parsePattern");
    ((DAa = class {
      static {
        Vt(this, "Query");
      }
      0 = 0;
      exceededMatchLimit;
      textPredicates;
      captureNames;
      captureQuantifiers;
      predicates;
      setProperties;
      assertedProperties;
      refutedProperties;
      matchLimit;
      constructor(t, e) {
        let r = dt.lengthBytesUTF8(e),
          n = dt._malloc(r + 1);
        dt.stringToUTF8(e, n, r + 1);
        let o = dt._ts_query_new(t[0], n, r, vi, vi + $i);
        if (!o) {
          let A = dt.getValue(vi + $i, "i32"),
            y = dt.getValue(vi, "i32"),
            E = dt.UTF8ToString(n, y).length,
            v = e.slice(E, E + 100).split(`
`)[0],
            C = v.match(TAa)?.[0] ?? "";
          switch ((dt._free(n), A)) {
            case xS.Syntax:
              throw new zCe(xS.Syntax, { suffix: `${E}: '${v}'...` }, E, 0);
            case xS.NodeName:
              throw new zCe(A, { word: C }, E, C.length);
            case xS.FieldName:
              throw new zCe(A, { word: C }, E, C.length);
            case xS.CaptureName:
              throw new zCe(A, { word: C }, E, C.length);
            case xS.PatternStructure:
              throw new zCe(A, { suffix: `${E}: '${v}'...` }, E, 0);
          }
        }
        let s = dt._ts_query_string_count(o),
          a = dt._ts_query_capture_count(o),
          u = dt._ts_query_pattern_count(o),
          c = new Array(a),
          m = new Array(u),
          d = new Array(s);
        for (let A = 0; A < a; A++) {
          let y = dt._ts_query_capture_name_for_id(o, A, vi),
            E = dt.getValue(vi, "i32");
          c[A] = dt.UTF8ToString(y, E);
        }
        for (let A = 0; A < u; A++) {
          let y = new Array(a);
          for (let E = 0; E < a; E++) {
            let v = dt._ts_query_capture_quantifier_for_id(o, A, E);
            y[E] = v;
          }
          m[A] = y;
        }
        for (let A = 0; A < s; A++) {
          let y = dt._ts_query_string_value_for_id(o, A, vi),
            E = dt.getValue(vi, "i32");
          d[A] = dt.UTF8ToString(y, E);
        }
        let f = new Array(u),
          p = new Array(u),
          h = new Array(u),
          g = new Array(u),
          b = new Array(u);
        for (let A = 0; A < u; A++) {
          let y = dt._ts_query_predicates_for_pattern(o, A, vi),
            E = dt.getValue(vi, "i32");
          ((g[A] = []), (b[A] = []));
          let v = new Array(),
            C = y;
          for (let x = 0; x < E; x++) {
            let k = dt.getValue(C, "i32");
            C += $i;
            let R = dt.getValue(C, "i32");
            ((C += $i), Voi(A, k, R, c, d, v, b, g, f, p, h));
          }
          (Object.freeze(b[A]), Object.freeze(g[A]), Object.freeze(f[A]), Object.freeze(p[A]), Object.freeze(h[A]));
        }
        (dt._free(n),
          (this[0] = o),
          (this.captureNames = c),
          (this.captureQuantifiers = m),
          (this.textPredicates = b),
          (this.predicates = g),
          (this.setProperties = f),
          (this.assertedProperties = p),
          (this.refutedProperties = h),
          (this.exceededMatchLimit = !1));
      }
      delete() {
        (dt._ts_query_delete(this[0]), (this[0] = 0));
      }
      matches(t, e = {}) {
        let r = e.startPosition ?? PU,
          n = e.endPosition ?? PU,
          o = e.startIndex ?? 0,
          s = e.endIndex ?? 0,
          a = e.matchLimit ?? 4294967295,
          u = e.maxStartDepth ?? 4294967295,
          c = e.timeoutMicros ?? 0,
          m = e.progressCallback;
        if (typeof a != "number") throw new Error("Arguments must be numbers");
        if (((this.matchLimit = a), s !== 0 && o > s))
          throw new Error("`startIndex` cannot be greater than `endIndex`");
        if (n !== PU && (r.row > n.row || (r.row === n.row && r.column > n.column)))
          throw new Error("`startPosition` cannot be greater than `endPosition`");
        (m && (dt.currentQueryProgressCallback = m),
          Us(t),
          dt._ts_query_matches_wasm(this[0], t.tree[0], r.row, r.column, n.row, n.column, o, s, a, u, c));
        let d = dt.getValue(vi, "i32"),
          f = dt.getValue(vi + $i, "i32"),
          p = dt.getValue(vi + 2 * $i, "i32"),
          h = new Array(d);
        this.exceededMatchLimit = !!p;
        let g = 0,
          b = f;
        for (let A = 0; A < d; A++) {
          let y = dt.getValue(b, "i32");
          b += $i;
          let E = dt.getValue(b, "i32");
          b += $i;
          let v = new Array(E);
          if (((b = S0r(this, t.tree, b, y, v)), this.textPredicates[y].every((C) => C(v)))) {
            h[g] = { pattern: y, patternIndex: y, captures: v };
            let C = this.setProperties[y];
            h[g].setProperties = C;
            let x = this.assertedProperties[y];
            h[g].assertedProperties = x;
            let k = this.refutedProperties[y];
            ((h[g].refutedProperties = k), g++);
          }
        }
        return ((h.length = g), dt._free(f), (dt.currentQueryProgressCallback = null), h);
      }
      captures(t, e = {}) {
        let r = e.startPosition ?? PU,
          n = e.endPosition ?? PU,
          o = e.startIndex ?? 0,
          s = e.endIndex ?? 0,
          a = e.matchLimit ?? 4294967295,
          u = e.maxStartDepth ?? 4294967295,
          c = e.timeoutMicros ?? 0,
          m = e.progressCallback;
        if (typeof a != "number") throw new Error("Arguments must be numbers");
        if (((this.matchLimit = a), s !== 0 && o > s))
          throw new Error("`startIndex` cannot be greater than `endIndex`");
        if (n !== PU && (r.row > n.row || (r.row === n.row && r.column > n.column)))
          throw new Error("`startPosition` cannot be greater than `endPosition`");
        (m && (dt.currentQueryProgressCallback = m),
          Us(t),
          dt._ts_query_captures_wasm(this[0], t.tree[0], r.row, r.column, n.row, n.column, o, s, a, u, c));
        let d = dt.getValue(vi, "i32"),
          f = dt.getValue(vi + $i, "i32"),
          p = dt.getValue(vi + 2 * $i, "i32"),
          h = new Array();
        this.exceededMatchLimit = !!p;
        let g = new Array(),
          b = f;
        for (let A = 0; A < d; A++) {
          let y = dt.getValue(b, "i32");
          b += $i;
          let E = dt.getValue(b, "i32");
          b += $i;
          let v = dt.getValue(b, "i32");
          if (
            ((b += $i), (g.length = E), (b = S0r(this, t.tree, b, y, g)), this.textPredicates[y].every((C) => C(g)))
          ) {
            let C = g[v],
              x = this.setProperties[y];
            C.setProperties = x;
            let k = this.assertedProperties[y];
            C.assertedProperties = k;
            let R = this.refutedProperties[y];
            ((C.refutedProperties = R), h.push(C));
          }
        }
        return (dt._free(f), (dt.currentQueryProgressCallback = null), h);
      }
      predicatesForPattern(t) {
        return this.predicates[t];
      }
      disableCapture(t) {
        let e = dt.lengthBytesUTF8(t),
          r = dt._malloc(e + 1);
        (dt.stringToUTF8(t, r, e + 1), dt._ts_query_disable_capture(this[0], r, e), dt._free(r));
      }
      disablePattern(t) {
        if (t >= this.predicates.length)
          throw new Error(`Pattern index is ${t} but the pattern count is ${this.predicates.length}`);
        dt._ts_query_disable_pattern(this[0], t);
      }
      didExceedMatchLimit() {
        return this.exceededMatchLimit;
      }
      startIndexForPattern(t) {
        if (t >= this.predicates.length)
          throw new Error(`Pattern index is ${t} but the pattern count is ${this.predicates.length}`);
        return dt._ts_query_start_byte_for_pattern(this[0], t);
      }
      endIndexForPattern(t) {
        if (t >= this.predicates.length)
          throw new Error(`Pattern index is ${t} but the pattern count is ${this.predicates.length}`);
        return dt._ts_query_end_byte_for_pattern(this[0], t);
      }
      patternCount() {
        return dt._ts_query_pattern_count(this[0]);
      }
      captureIndexForName(t) {
        return this.captureNames.indexOf(t);
      }
      isPatternRooted(t) {
        return dt._ts_query_is_pattern_rooted(this[0], t) === 1;
      }
      isPatternNonLocal(t) {
        return dt._ts_query_is_pattern_non_local(this[0], t) === 1;
      }
      isPatternGuaranteedAtStep(t) {
        return dt._ts_query_is_pattern_guaranteed_at_step(this[0], t) === 1;
      }
    }),
      (IAa = /^tree_sitter_\w+$/),
      (T0r = class Woi {
        static {
          Vt(this, "Language");
        }
        0 = 0;
        types;
        fields;
        constructor(e, r) {
          (Jle(e), (this[0] = r), (this.types = new Array(dt._ts_language_symbol_count(this[0]))));
          for (let n = 0, o = this.types.length; n < o; n++)
            dt._ts_language_symbol_type(this[0], n) < 2 &&
              (this.types[n] = dt.UTF8ToString(dt._ts_language_symbol_name(this[0], n)));
          this.fields = new Array(dt._ts_language_field_count(this[0]) + 1);
          for (let n = 0, o = this.fields.length; n < o; n++) {
            let s = dt._ts_language_field_name_for_id(this[0], n);
            s !== 0 ? (this.fields[n] = dt.UTF8ToString(s)) : (this.fields[n] = null);
          }
        }
        get name() {
          let e = dt._ts_language_name(this[0]);
          return e === 0 ? null : dt.UTF8ToString(e);
        }
        get version() {
          return dt._ts_language_version(this[0]);
        }
        get abiVersion() {
          return dt._ts_language_abi_version(this[0]);
        }
        get metadata() {
          dt._ts_language_metadata(this[0]);
          let e = dt.getValue(vi, "i32"),
            r = dt.getValue(vi + $i, "i32");
          return e === 0 ? null : Uoi(r);
        }
        get fieldCount() {
          return this.fields.length - 1;
        }
        get stateCount() {
          return dt._ts_language_state_count(this[0]);
        }
        fieldIdForName(e) {
          let r = this.fields.indexOf(e);
          return r !== -1 ? r : null;
        }
        fieldNameForId(e) {
          return this.fields[e] ?? null;
        }
        idForNodeType(e, r) {
          let n = dt.lengthBytesUTF8(e),
            o = dt._malloc(n + 1);
          dt.stringToUTF8(e, o, n + 1);
          let s = dt._ts_language_symbol_for_name(this[0], o, n, r ? 1 : 0);
          return (dt._free(o), s || null);
        }
        get nodeTypeCount() {
          return dt._ts_language_symbol_count(this[0]);
        }
        nodeTypeForId(e) {
          let r = dt._ts_language_symbol_name(this[0], e);
          return r ? dt.UTF8ToString(r) : null;
        }
        nodeTypeIsNamed(e) {
          return !!dt._ts_language_type_is_named_wasm(this[0], e);
        }
        nodeTypeIsVisible(e) {
          return !!dt._ts_language_type_is_visible_wasm(this[0], e);
        }
        get supertypes() {
          dt._ts_language_supertypes_wasm(this[0]);
          let e = dt.getValue(vi, "i32"),
            r = dt.getValue(vi + $i, "i32"),
            n = new Array(e);
          if (e > 0) {
            let o = r;
            for (let s = 0; s < e; s++) ((n[s] = dt.getValue(o, "i16")), (o += Noi));
          }
          return n;
        }
        subtypes(e) {
          dt._ts_language_subtypes_wasm(this[0], e);
          let r = dt.getValue(vi, "i32"),
            n = dt.getValue(vi + $i, "i32"),
            o = new Array(r);
          if (r > 0) {
            let s = n;
            for (let a = 0; a < r; a++) ((o[a] = dt.getValue(s, "i16")), (s += Noi));
          }
          return o;
        }
        nextState(e, r) {
          return dt._ts_language_next_state(this[0], e, r);
        }
        lookaheadIterator(e) {
          let r = dt._ts_lookahead_iterator_new(this[0], e);
          return r ? new EAa(BU, r, this) : null;
        }
        query(e) {
          return (
            console.warn("Language.query is deprecated. Use new Query(language, source) instead."),
            new DAa(this, e)
          );
        }
        static async load(e) {
          let r;
          e instanceof Uint8Array
            ? (r = Promise.resolve(e))
            : globalThis.process?.versions.node
              ? (r = (await import("fs/promises")).readFile(e))
              : (r = fetch(e).then((u) =>
                  u.arrayBuffer().then((c) => {
                    if (u.ok) return new Uint8Array(c);
                    {
                      let m = new TextDecoder("utf-8").decode(c);
                      throw new Error(`Language.load failed with status ${u.status}.

${m}`);
                    }
                  }),
                ));
          let n = await dt.loadWebAssemblyModule(await r, { loadAsync: !0 }),
            o = Object.keys(n),
            s = o.find((u) => IAa.test(u) && !u.includes("external_scanner_"));
          if (!s)
            throw (
              console.log(`Couldn't find language function in WASM file. Symbols:
${JSON.stringify(o, null, 2)}`),
              new Error("Language.load failed: no language function found in WASM file")
            );
          let a = n[s]();
          return new Woi(BU, a);
        }
      }),
      (RAa = (() => {
        var _scriptName = import.meta.url;
        return async function (moduleArg = {}) {
          var moduleRtn,
            Module = moduleArg,
            readyPromiseResolve,
            readyPromiseReject,
            readyPromise = new Promise((t, e) => {
              ((readyPromiseResolve = t), (readyPromiseReject = e));
            }),
            ENVIRONMENT_IS_WEB = typeof window == "object",
            ENVIRONMENT_IS_WORKER = typeof WorkerGlobalScope < "u",
            ENVIRONMENT_IS_NODE =
              typeof process == "object" &&
              typeof process.versions == "object" &&
              typeof process.versions.node == "string" &&
              process.type != "renderer",
            ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
          if (ENVIRONMENT_IS_NODE) {
            let { createRequire: t } = await import("module");
            var require = t(import.meta.url);
          }
          ((Module.currentQueryProgressCallback = null),
            (Module.currentProgressCallback = null),
            (Module.currentLogCallback = null),
            (Module.currentParseCallback = null));
          var moduleOverrides = Object.assign({}, Module),
            arguments_ = [],
            thisProgram = "./this.program",
            quit_ = Vt((t, e) => {
              throw e;
            }, "quit_"),
            scriptDirectory = "";
          function locateFile(t) {
            return Module.locateFile ? Module.locateFile(t, scriptDirectory) : scriptDirectory + t;
          }
          Vt(locateFile, "locateFile");
          var readAsync, readBinary;
          if (ENVIRONMENT_IS_NODE) {
            var fs = require("fs"),
              nodePath = require("path");
            (import.meta.url.startsWith("data:") ||
              (scriptDirectory = nodePath.dirname(require("url").fileURLToPath(import.meta.url)) + "/"),
              (readBinary = Vt((t) => {
                t = isFileURI(t) ? new URL(t) : t;
                var e = fs.readFileSync(t);
                return e;
              }, "readBinary")),
              (readAsync = Vt(async (t, e = !0) => {
                t = isFileURI(t) ? new URL(t) : t;
                var r = fs.readFileSync(t, e ? void 0 : "utf8");
                return r;
              }, "readAsync")),
              !Module.thisProgram && process.argv.length > 1 && (thisProgram = process.argv[1].replace(/\\/g, "/")),
              (arguments_ = process.argv.slice(2)),
              (quit_ = Vt((t, e) => {
                throw ((process.exitCode = t), e);
              }, "quit_")));
          } else
            (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) &&
              (ENVIRONMENT_IS_WORKER
                ? (scriptDirectory = self.location.href)
                : typeof document < "u" && document.currentScript && (scriptDirectory = document.currentScript.src),
              _scriptName && (scriptDirectory = _scriptName),
              scriptDirectory.startsWith("blob:")
                ? (scriptDirectory = "")
                : (scriptDirectory = scriptDirectory.slice(
                    0,
                    scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1,
                  )),
              ENVIRONMENT_IS_WORKER &&
                (readBinary = Vt((t) => {
                  var e = new XMLHttpRequest();
                  return (
                    e.open("GET", t, !1),
                    (e.responseType = "arraybuffer"),
                    e.send(null),
                    new Uint8Array(e.response)
                  );
                }, "readBinary")),
              (readAsync = Vt(async (t) => {
                if (isFileURI(t))
                  return new Promise((r, n) => {
                    var o = new XMLHttpRequest();
                    (o.open("GET", t, !0),
                      (o.responseType = "arraybuffer"),
                      (o.onload = () => {
                        if (o.status == 200 || (o.status == 0 && o.response)) {
                          r(o.response);
                          return;
                        }
                        n(o.status);
                      }),
                      (o.onerror = n),
                      o.send(null));
                  });
                var e = await fetch(t, { credentials: "same-origin" });
                if (e.ok) return e.arrayBuffer();
                throw new Error(e.status + " : " + e.url);
              }, "readAsync")));
          var out = Module.print || console.log.bind(console),
            err = Module.printErr || console.error.bind(console);
          (Object.assign(Module, moduleOverrides),
            (moduleOverrides = null),
            Module.arguments && (arguments_ = Module.arguments),
            Module.thisProgram && (thisProgram = Module.thisProgram));
          var dynamicLibraries = Module.dynamicLibraries || [],
            wasmBinary = Module.wasmBinary,
            wasmMemory,
            ABORT = !1,
            EXITSTATUS;
          function assert(t, e) {
            t || abort(e);
          }
          Vt(assert, "assert");
          var HEAP,
            HEAP8,
            HEAPU8,
            HEAP16,
            HEAPU16,
            HEAP32,
            HEAPU32,
            HEAPF32,
            HEAP64,
            HEAPU64,
            HEAPF64,
            HEAP_DATA_VIEW,
            runtimeInitialized = !1,
            isFileURI = Vt((t) => t.startsWith("file://"), "isFileURI");
          function updateMemoryViews() {
            var t = wasmMemory.buffer;
            ((Module.HEAP_DATA_VIEW = HEAP_DATA_VIEW = new DataView(t)),
              (Module.HEAP8 = HEAP8 = new Int8Array(t)),
              (Module.HEAP16 = HEAP16 = new Int16Array(t)),
              (Module.HEAPU8 = HEAPU8 = new Uint8Array(t)),
              (Module.HEAPU16 = HEAPU16 = new Uint16Array(t)),
              (Module.HEAP32 = HEAP32 = new Int32Array(t)),
              (Module.HEAPU32 = HEAPU32 = new Uint32Array(t)),
              (Module.HEAPF32 = HEAPF32 = new Float32Array(t)),
              (Module.HEAPF64 = HEAPF64 = new Float64Array(t)),
              (Module.HEAP64 = HEAP64 = new BigInt64Array(t)),
              (Module.HEAPU64 = HEAPU64 = new BigUint64Array(t)));
          }
          if ((Vt(updateMemoryViews, "updateMemoryViews"), Module.wasmMemory)) wasmMemory = Module.wasmMemory;
          else {
            var INITIAL_MEMORY = Module.INITIAL_MEMORY || 33554432;
            wasmMemory = new WebAssembly.Memory({ initial: INITIAL_MEMORY / 65536, maximum: 32768 });
          }
          updateMemoryViews();
          var __RELOC_FUNCS__ = [];
          function preRun() {
            if (Module.preRun)
              for (typeof Module.preRun == "function" && (Module.preRun = [Module.preRun]); Module.preRun.length; )
                addOnPreRun(Module.preRun.shift());
            callRuntimeCallbacks(onPreRuns);
          }
          Vt(preRun, "preRun");
          function initRuntime() {
            ((runtimeInitialized = !0),
              callRuntimeCallbacks(__RELOC_FUNCS__),
              wasmExports.__wasm_call_ctors(),
              callRuntimeCallbacks(onPostCtors));
          }
          Vt(initRuntime, "initRuntime");
          function preMain() {}
          Vt(preMain, "preMain");
          function postRun() {
            if (Module.postRun)
              for (typeof Module.postRun == "function" && (Module.postRun = [Module.postRun]); Module.postRun.length; )
                addOnPostRun(Module.postRun.shift());
            callRuntimeCallbacks(onPostRuns);
          }
          Vt(postRun, "postRun");
          var runDependencies = 0,
            dependenciesFulfilled = null;
          function getUniqueRunDependency(t) {
            return t;
          }
          Vt(getUniqueRunDependency, "getUniqueRunDependency");
          function addRunDependency(t) {
            (runDependencies++, Module.monitorRunDependencies?.(runDependencies));
          }
          Vt(addRunDependency, "addRunDependency");
          function removeRunDependency(t) {
            if (
              (runDependencies--,
              Module.monitorRunDependencies?.(runDependencies),
              runDependencies == 0 && dependenciesFulfilled)
            ) {
              var e = dependenciesFulfilled;
              ((dependenciesFulfilled = null), e());
            }
          }
          Vt(removeRunDependency, "removeRunDependency");
          function abort(t) {
            (Module.onAbort?.(t),
              (t = "Aborted(" + t + ")"),
              err(t),
              (ABORT = !0),
              (t += ". Build with -sASSERTIONS for more info."));
            var e = new WebAssembly.RuntimeError(t);
            throw (readyPromiseReject(e), e);
          }
          Vt(abort, "abort");
          var wasmBinaryFile;
          function findWasmBinary() {
            return Module.locateFile
              ? locateFile("tree-sitter.wasm")
              : new URL("tree-sitter.wasm", import.meta.url).href;
          }
          Vt(findWasmBinary, "findWasmBinary");
          function getBinarySync(t) {
            if (t == wasmBinaryFile && wasmBinary) return new Uint8Array(wasmBinary);
            if (readBinary) return readBinary(t);
            throw "both async and sync fetching of the wasm failed";
          }
          Vt(getBinarySync, "getBinarySync");
          async function getWasmBinary(t) {
            if (!wasmBinary)
              try {
                var e = await readAsync(t);
                return new Uint8Array(e);
              } catch {}
            return getBinarySync(t);
          }
          Vt(getWasmBinary, "getWasmBinary");
          async function instantiateArrayBuffer(t, e) {
            try {
              var r = await getWasmBinary(t),
                n = await WebAssembly.instantiate(r, e);
              return n;
            } catch (o) {
              (err(`failed to asynchronously prepare wasm: ${o}`), abort(o));
            }
          }
          Vt(instantiateArrayBuffer, "instantiateArrayBuffer");
          async function instantiateAsync(t, e, r) {
            if (!t && typeof WebAssembly.instantiateStreaming == "function" && !isFileURI(e) && !ENVIRONMENT_IS_NODE)
              try {
                var n = fetch(e, { credentials: "same-origin" }),
                  o = await WebAssembly.instantiateStreaming(n, r);
                return o;
              } catch (s) {
                (err(`wasm streaming compile failed: ${s}`), err("falling back to ArrayBuffer instantiation"));
              }
            return instantiateArrayBuffer(e, r);
          }
          Vt(instantiateAsync, "instantiateAsync");
          function getWasmImports() {
            return {
              env: wasmImports,
              wasi_snapshot_preview1: wasmImports,
              "GOT.mem": new Proxy(wasmImports, GOTHandler),
              "GOT.func": new Proxy(wasmImports, GOTHandler),
            };
          }
          Vt(getWasmImports, "getWasmImports");
          async function createWasm() {
            function t(s, a) {
              ((wasmExports = s.exports), (wasmExports = relocateExports(wasmExports, 1024)));
              var u = getDylinkMetadata(a);
              return (
                u.neededDynlibs && (dynamicLibraries = u.neededDynlibs.concat(dynamicLibraries)),
                mergeLibSymbols(wasmExports, "main"),
                LDSO.init(),
                loadDylibs(),
                __RELOC_FUNCS__.push(wasmExports.__wasm_apply_data_relocs),
                removeRunDependency("wasm-instantiate"),
                wasmExports
              );
            }
            (Vt(t, "receiveInstance"), addRunDependency("wasm-instantiate"));
            function e(s) {
              return t(s.instance, s.module);
            }
            Vt(e, "receiveInstantiationResult");
            var r = getWasmImports();
            if (Module.instantiateWasm)
              return new Promise((s, a) => {
                Module.instantiateWasm(r, (u, c) => {
                  (t(u, c), s(u.exports));
                });
              });
            wasmBinaryFile ??= findWasmBinary();
            try {
              var n = await instantiateAsync(wasmBinary, wasmBinaryFile, r),
                o = e(n);
              return o;
            } catch (s) {
              return (readyPromiseReject(s), Promise.reject(s));
            }
          }
          Vt(createWasm, "createWasm");
          var ASM_CONSTS = {};
          class ExitStatus {
            static {
              Vt(this, "ExitStatus");
            }
            name = "ExitStatus";
            constructor(e) {
              ((this.message = `Program terminated with exit(${e})`), (this.status = e));
            }
          }
          var GOT = {},
            currentModuleWeakSymbols = new Set([]),
            GOTHandler = {
              get(t, e) {
                var r = GOT[e];
                return (
                  r || (r = GOT[e] = new WebAssembly.Global({ value: "i32", mutable: !0 })),
                  currentModuleWeakSymbols.has(e) || (r.required = !0),
                  r
                );
              },
            },
            LE_HEAP_LOAD_F32 = Vt((t) => HEAP_DATA_VIEW.getFloat32(t, !0), "LE_HEAP_LOAD_F32"),
            LE_HEAP_LOAD_F64 = Vt((t) => HEAP_DATA_VIEW.getFloat64(t, !0), "LE_HEAP_LOAD_F64"),
            LE_HEAP_LOAD_I16 = Vt((t) => HEAP_DATA_VIEW.getInt16(t, !0), "LE_HEAP_LOAD_I16"),
            LE_HEAP_LOAD_I32 = Vt((t) => HEAP_DATA_VIEW.getInt32(t, !0), "LE_HEAP_LOAD_I32"),
            LE_HEAP_LOAD_U16 = Vt((t) => HEAP_DATA_VIEW.getUint16(t, !0), "LE_HEAP_LOAD_U16"),
            LE_HEAP_LOAD_U32 = Vt((t) => HEAP_DATA_VIEW.getUint32(t, !0), "LE_HEAP_LOAD_U32"),
            LE_HEAP_STORE_F32 = Vt((t, e) => HEAP_DATA_VIEW.setFloat32(t, e, !0), "LE_HEAP_STORE_F32"),
            LE_HEAP_STORE_F64 = Vt((t, e) => HEAP_DATA_VIEW.setFloat64(t, e, !0), "LE_HEAP_STORE_F64"),
            LE_HEAP_STORE_I16 = Vt((t, e) => HEAP_DATA_VIEW.setInt16(t, e, !0), "LE_HEAP_STORE_I16"),
            LE_HEAP_STORE_I32 = Vt((t, e) => HEAP_DATA_VIEW.setInt32(t, e, !0), "LE_HEAP_STORE_I32"),
            LE_HEAP_STORE_U16 = Vt((t, e) => HEAP_DATA_VIEW.setUint16(t, e, !0), "LE_HEAP_STORE_U16"),
            LE_HEAP_STORE_U32 = Vt((t, e) => HEAP_DATA_VIEW.setUint32(t, e, !0), "LE_HEAP_STORE_U32"),
            callRuntimeCallbacks = Vt((t) => {
              for (; t.length > 0; ) t.shift()(Module);
            }, "callRuntimeCallbacks"),
            onPostRuns = [],
            addOnPostRun = Vt((t) => onPostRuns.unshift(t), "addOnPostRun"),
            onPreRuns = [],
            addOnPreRun = Vt((t) => onPreRuns.unshift(t), "addOnPreRun"),
            UTF8Decoder = typeof TextDecoder < "u" ? new TextDecoder() : void 0,
            UTF8ArrayToString = Vt((t, e = 0, r = NaN) => {
              for (var n = e + r, o = e; t[o] && !(o >= n); ) ++o;
              if (o - e > 16 && t.buffer && UTF8Decoder) return UTF8Decoder.decode(t.subarray(e, o));
              for (var s = ""; e < o; ) {
                var a = t[e++];
                if (!(a & 128)) {
                  s += String.fromCharCode(a);
                  continue;
                }
                var u = t[e++] & 63;
                if ((a & 224) == 192) {
                  s += String.fromCharCode(((a & 31) << 6) | u);
                  continue;
                }
                var c = t[e++] & 63;
                if (
                  ((a & 240) == 224
                    ? (a = ((a & 15) << 12) | (u << 6) | c)
                    : (a = ((a & 7) << 18) | (u << 12) | (c << 6) | (t[e++] & 63)),
                  a < 65536)
                )
                  s += String.fromCharCode(a);
                else {
                  var m = a - 65536;
                  s += String.fromCharCode(55296 | (m >> 10), 56320 | (m & 1023));
                }
              }
              return s;
            }, "UTF8ArrayToString"),
            getDylinkMetadata = Vt((t) => {
              var e = 0,
                r = 0;
              function n() {
                return t[e++];
              }
              Vt(n, "getU8");
              function o() {
                for (var B = 0, L = 1; ; ) {
                  var G = t[e++];
                  if (((B += (G & 127) * L), (L *= 128), !(G & 128))) break;
                }
                return B;
              }
              Vt(o, "getLEB");
              function s() {
                var B = o();
                return ((e += B), UTF8ArrayToString(t, e - B, B));
              }
              Vt(s, "getString");
              function a(B, L) {
                if (B) throw new Error(L);
              }
              Vt(a, "failIf");
              var u = "dylink.0";
              if (t instanceof WebAssembly.Module) {
                var c = WebAssembly.Module.customSections(t, u);
                (c.length === 0 && ((u = "dylink"), (c = WebAssembly.Module.customSections(t, u))),
                  a(c.length === 0, "need dylink section"),
                  (t = new Uint8Array(c[0])),
                  (r = t.length));
              } else {
                var m = new Uint32Array(new Uint8Array(t.subarray(0, 24)).buffer),
                  d = m[0] == 1836278016 || m[0] == 6386541;
                (a(!d, "need to see wasm magic number"), a(t[8] !== 0, "need the dylink section to be first"), (e = 9));
                var f = o();
                ((r = e + f), (u = s()));
              }
              var p = { neededDynlibs: [], tlsExports: new Set(), weakImports: new Set() };
              if (u == "dylink") {
                ((p.memorySize = o()), (p.memoryAlign = o()), (p.tableSize = o()), (p.tableAlign = o()));
                for (var h = o(), g = 0; g < h; ++g) {
                  var b = s();
                  p.neededDynlibs.push(b);
                }
              } else {
                a(u !== "dylink.0");
                for (var A = 1, y = 2, E = 3, v = 4, C = 256, x = 3, k = 1; e < r; ) {
                  var R = n(),
                    P = o();
                  if (R === A) ((p.memorySize = o()), (p.memoryAlign = o()), (p.tableSize = o()), (p.tableAlign = o()));
                  else if (R === y) for (var h = o(), g = 0; g < h; ++g) ((b = s()), p.neededDynlibs.push(b));
                  else if (R === E)
                    for (var D = o(); D--; ) {
                      var O = s(),
                        N = o();
                      N & C && p.tlsExports.add(O);
                    }
                  else if (R === v)
                    for (var D = o(); D--; ) {
                      var F = s(),
                        O = s(),
                        N = o();
                      (N & x) == k && p.weakImports.add(O);
                    }
                  else e += P;
                }
              }
              return p;
            }, "getDylinkMetadata");
          function getValue(t, e = "i8") {
            switch ((e.endsWith("*") && (e = "*"), e)) {
              case "i1":
                return HEAP8[t];
              case "i8":
                return HEAP8[t];
              case "i16":
                return LE_HEAP_LOAD_I16((t >> 1) * 2);
              case "i32":
                return LE_HEAP_LOAD_I32((t >> 2) * 4);
              case "i64":
                return HEAP64[t >> 3];
              case "float":
                return LE_HEAP_LOAD_F32((t >> 2) * 4);
              case "double":
                return LE_HEAP_LOAD_F64((t >> 3) * 8);
              case "*":
                return LE_HEAP_LOAD_U32((t >> 2) * 4);
              default:
                abort(`invalid type for getValue: ${e}`);
            }
          }
          Vt(getValue, "getValue");
          var newDSO = Vt((t, e, r) => {
              var n = { refcount: 1 / 0, name: t, exports: r, global: !0 };
              return ((LDSO.loadedLibsByName[t] = n), e != null && (LDSO.loadedLibsByHandle[e] = n), n);
            }, "newDSO"),
            LDSO = {
              loadedLibsByName: {},
              loadedLibsByHandle: {},
              init() {
                newDSO("__main__", 0, wasmImports);
              },
            },
            ___heap_base = 78224,
            alignMemory = Vt((t, e) => Math.ceil(t / e) * e, "alignMemory"),
            getMemory = Vt((t) => {
              if (runtimeInitialized) return _calloc(t, 1);
              var e = ___heap_base,
                r = e + alignMemory(t, 16);
              return ((___heap_base = r), (GOT.__heap_base.value = r), e);
            }, "getMemory"),
            isInternalSym = Vt(
              (t) =>
                [
                  "__cpp_exception",
                  "__c_longjmp",
                  "__wasm_apply_data_relocs",
                  "__dso_handle",
                  "__tls_size",
                  "__tls_align",
                  "__set_stack_limits",
                  "_emscripten_tls_init",
                  "__wasm_init_tls",
                  "__wasm_call_ctors",
                  "__start_em_asm",
                  "__stop_em_asm",
                  "__start_em_js",
                  "__stop_em_js",
                ].includes(t) || t.startsWith("__em_js__"),
              "isInternalSym",
            ),
            uleb128Encode = Vt((t, e) => {
              t < 128 ? e.push(t) : e.push((t % 128) | 128, t >> 7);
            }, "uleb128Encode"),
            sigToWasmTypes = Vt((t) => {
              for (
                var e = { i: "i32", j: "i64", f: "f32", d: "f64", e: "externref", p: "i32" },
                  r = { parameters: [], results: t[0] == "v" ? [] : [e[t[0]]] },
                  n = 1;
                n < t.length;
                ++n
              )
                r.parameters.push(e[t[n]]);
              return r;
            }, "sigToWasmTypes"),
            generateFuncType = Vt((t, e) => {
              var r = t.slice(0, 1),
                n = t.slice(1),
                o = { i: 127, p: 127, j: 126, f: 125, d: 124, e: 111 };
              (e.push(96), uleb128Encode(n.length, e));
              for (var s = 0; s < n.length; ++s) e.push(o[n[s]]);
              r == "v" ? e.push(0) : e.push(1, o[r]);
            }, "generateFuncType"),
            convertJsFunctionToWasm = Vt((t, e) => {
              if (typeof WebAssembly.Function == "function") return new WebAssembly.Function(sigToWasmTypes(e), t);
              var r = [1];
              generateFuncType(e, r);
              var n = [0, 97, 115, 109, 1, 0, 0, 0, 1];
              (uleb128Encode(r.length, n), n.push(...r), n.push(2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0));
              var o = new WebAssembly.Module(new Uint8Array(n)),
                s = new WebAssembly.Instance(o, { e: { f: t } }),
                a = s.exports.f;
              return a;
            }, "convertJsFunctionToWasm"),
            wasmTableMirror = [],
            wasmTable = new WebAssembly.Table({ initial: 31, element: "anyfunc" }),
            getWasmTableEntry = Vt((t) => {
              var e = wasmTableMirror[t];
              return (
                e ||
                  (t >= wasmTableMirror.length && (wasmTableMirror.length = t + 1),
                  (wasmTableMirror[t] = e = wasmTable.get(t))),
                e
              );
            }, "getWasmTableEntry"),
            updateTableMap = Vt((t, e) => {
              if (functionsInTableMap)
                for (var r = t; r < t + e; r++) {
                  var n = getWasmTableEntry(r);
                  n && functionsInTableMap.set(n, r);
                }
            }, "updateTableMap"),
            functionsInTableMap,
            getFunctionAddress = Vt(
              (t) => (
                functionsInTableMap || ((functionsInTableMap = new WeakMap()), updateTableMap(0, wasmTable.length)),
                functionsInTableMap.get(t) || 0
              ),
              "getFunctionAddress",
            ),
            freeTableIndexes = [],
            getEmptyTableSlot = Vt(() => {
              if (freeTableIndexes.length) return freeTableIndexes.pop();
              try {
                wasmTable.grow(1);
              } catch (t) {
                throw t instanceof RangeError ? "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH." : t;
              }
              return wasmTable.length - 1;
            }, "getEmptyTableSlot"),
            setWasmTableEntry = Vt((t, e) => {
              (wasmTable.set(t, e), (wasmTableMirror[t] = wasmTable.get(t)));
            }, "setWasmTableEntry"),
            addFunction = Vt((t, e) => {
              var r = getFunctionAddress(t);
              if (r) return r;
              var n = getEmptyTableSlot();
              try {
                setWasmTableEntry(n, t);
              } catch (s) {
                if (!(s instanceof TypeError)) throw s;
                var o = convertJsFunctionToWasm(t, e);
                setWasmTableEntry(n, o);
              }
              return (functionsInTableMap.set(t, n), n);
            }, "addFunction"),
            updateGOT = Vt((t, e) => {
              for (var r in t)
                if (!isInternalSym(r)) {
                  var n = t[r];
                  ((GOT[r] ||= new WebAssembly.Global({ value: "i32", mutable: !0 })),
                    (e || GOT[r].value == 0) &&
                      (typeof n == "function"
                        ? (GOT[r].value = addFunction(n))
                        : typeof n == "number"
                          ? (GOT[r].value = n)
                          : err(`unhandled export type for '${r}': ${typeof n}`)));
                }
            }, "updateGOT"),
            relocateExports = Vt((t, e, r) => {
              var n = {};
              for (var o in t) {
                var s = t[o];
                (typeof s == "object" && (s = s.value), typeof s == "number" && (s += e), (n[o] = s));
              }
              return (updateGOT(n, r), n);
            }, "relocateExports"),
            isSymbolDefined = Vt((t) => {
              var e = wasmImports[t];
              return !(!e || e.stub);
            }, "isSymbolDefined"),
            dynCall = Vt((t, e, r = []) => {
              var n = getWasmTableEntry(e)(...r);
              return n;
            }, "dynCall"),
            stackSave = Vt(() => _emscripten_stack_get_current(), "stackSave"),
            stackRestore = Vt((t) => __emscripten_stack_restore(t), "stackRestore"),
            createInvokeFunction = Vt(
              (t) =>
                (e, ...r) => {
                  var n = stackSave();
                  try {
                    return dynCall(t, e, r);
                  } catch (o) {
                    if ((stackRestore(n), o !== o + 0)) throw o;
                    if ((_setThrew(1, 0), t[0] == "j")) return 0n;
                  }
                },
              "createInvokeFunction",
            ),
            resolveGlobalSymbol = Vt((t, e = !1) => {
              var r;
              return (
                isSymbolDefined(t)
                  ? (r = wasmImports[t])
                  : t.startsWith("invoke_") && (r = wasmImports[t] = createInvokeFunction(t.split("_")[1])),
                { sym: r, name: t }
              );
            }, "resolveGlobalSymbol"),
            onPostCtors = [],
            addOnPostCtor = Vt((t) => onPostCtors.unshift(t), "addOnPostCtor"),
            UTF8ToString = Vt((t, e) => (t ? UTF8ArrayToString(HEAPU8, t, e) : ""), "UTF8ToString"),
            loadWebAssemblyModule = Vt((binary, flags, libName, localScope, handle) => {
              var metadata = getDylinkMetadata(binary);
              currentModuleWeakSymbols = metadata.weakImports;
              function loadModule() {
                var memAlign = Math.pow(2, metadata.memoryAlign),
                  memoryBase = metadata.memorySize
                    ? alignMemory(getMemory(metadata.memorySize + memAlign), memAlign)
                    : 0,
                  tableBase = metadata.tableSize ? wasmTable.length : 0;
                (handle &&
                  ((HEAP8[handle + 8] = 1),
                  LE_HEAP_STORE_U32(((handle + 12) >> 2) * 4, memoryBase),
                  LE_HEAP_STORE_I32(((handle + 16) >> 2) * 4, metadata.memorySize),
                  LE_HEAP_STORE_U32(((handle + 20) >> 2) * 4, tableBase),
                  LE_HEAP_STORE_I32(((handle + 24) >> 2) * 4, metadata.tableSize)),
                  metadata.tableSize && wasmTable.grow(metadata.tableSize));
                var moduleExports;
                function resolveSymbol(t) {
                  var e = resolveGlobalSymbol(t).sym;
                  return (!e && localScope && (e = localScope[t]), e || (e = moduleExports[t]), e);
                }
                Vt(resolveSymbol, "resolveSymbol");
                var proxyHandler = {
                    get(t, e) {
                      switch (e) {
                        case "__memory_base":
                          return memoryBase;
                        case "__table_base":
                          return tableBase;
                      }
                      if (e in wasmImports && !wasmImports[e].stub) {
                        var r = wasmImports[e];
                        return r;
                      }
                      if (!(e in t)) {
                        var n;
                        t[e] = (...o) => ((n ||= resolveSymbol(e)), n(...o));
                      }
                      return t[e];
                    },
                  },
                  proxy = new Proxy({}, proxyHandler),
                  info = {
                    "GOT.mem": new Proxy({}, GOTHandler),
                    "GOT.func": new Proxy({}, GOTHandler),
                    env: proxy,
                    wasi_snapshot_preview1: proxy,
                  };
                function postInstantiation(module, instance) {
                  (updateTableMap(tableBase, metadata.tableSize),
                    (moduleExports = relocateExports(instance.exports, memoryBase)),
                    flags.allowUndefined || reportUndefinedSymbols());
                  function addEmAsm(addr, body) {
                    for (var args = [], arity = 0; arity < 16 && body.indexOf("$" + arity) != -1; arity++)
                      args.push("$" + arity);
                    args = args.join(",");
                    var func = `(${args}) => { ${body} };`;
                    ASM_CONSTS[start] = eval(func);
                  }
                  if ((Vt(addEmAsm, "addEmAsm"), "__start_em_asm" in moduleExports))
                    for (var start = moduleExports.__start_em_asm, stop = moduleExports.__stop_em_asm; start < stop; ) {
                      var jsString = UTF8ToString(start);
                      (addEmAsm(start, jsString), (start = HEAPU8.indexOf(0, start) + 1));
                    }
                  function addEmJs(name, cSig, body) {
                    var jsArgs = [];
                    if (((cSig = cSig.slice(1, -1)), cSig != "void")) {
                      cSig = cSig.split(",");
                      for (var i in cSig) {
                        var jsArg = cSig[i].split(" ").pop();
                        jsArgs.push(jsArg.replace("*", ""));
                      }
                    }
                    var func = `(${jsArgs}) => ${body};`;
                    moduleExports[name] = eval(func);
                  }
                  Vt(addEmJs, "addEmJs");
                  for (var name in moduleExports)
                    if (name.startsWith("__em_js__")) {
                      var start = moduleExports[name],
                        jsString = UTF8ToString(start),
                        parts = jsString.split("<::>");
                      (addEmJs(name.replace("__em_js__", ""), parts[0], parts[1]), delete moduleExports[name]);
                    }
                  var applyRelocs = moduleExports.__wasm_apply_data_relocs;
                  applyRelocs && (runtimeInitialized ? applyRelocs() : __RELOC_FUNCS__.push(applyRelocs));
                  var init = moduleExports.__wasm_call_ctors;
                  return (init && (runtimeInitialized ? init() : addOnPostCtor(init)), moduleExports);
                }
                if ((Vt(postInstantiation, "postInstantiation"), flags.loadAsync)) {
                  if (binary instanceof WebAssembly.Module) {
                    var instance = new WebAssembly.Instance(binary, info);
                    return Promise.resolve(postInstantiation(binary, instance));
                  }
                  return WebAssembly.instantiate(binary, info).then((t) => postInstantiation(t.module, t.instance));
                }
                var module = binary instanceof WebAssembly.Module ? binary : new WebAssembly.Module(binary),
                  instance = new WebAssembly.Instance(module, info);
                return postInstantiation(module, instance);
              }
              return (
                Vt(loadModule, "loadModule"),
                flags.loadAsync
                  ? metadata.neededDynlibs
                      .reduce((t, e) => t.then(() => loadDynamicLibrary(e, flags, localScope)), Promise.resolve())
                      .then(loadModule)
                  : (metadata.neededDynlibs.forEach((t) => loadDynamicLibrary(t, flags, localScope)), loadModule())
              );
            }, "loadWebAssemblyModule"),
            mergeLibSymbols = Vt((t, e) => {
              for (var [r, n] of Object.entries(t)) {
                let o = Vt((a) => {
                  isSymbolDefined(a) || (wasmImports[a] = n);
                }, "setImport");
                o(r);
                let s = "__main_argc_argv";
                (r == "main" && o(s), r == s && o("main"));
              }
            }, "mergeLibSymbols"),
            asyncLoad = Vt(async (t) => {
              var e = await readAsync(t);
              return new Uint8Array(e);
            }, "asyncLoad");
          function loadDynamicLibrary(t, e = { global: !0, nodelete: !0 }, r, n) {
            var o = LDSO.loadedLibsByName[t];
            if (o)
              return (
                e.global
                  ? o.global || ((o.global = !0), mergeLibSymbols(o.exports, t))
                  : r && Object.assign(r, o.exports),
                e.nodelete && o.refcount !== 1 / 0 && (o.refcount = 1 / 0),
                o.refcount++,
                n && (LDSO.loadedLibsByHandle[n] = o),
                e.loadAsync ? Promise.resolve(!0) : !0
              );
            ((o = newDSO(t, n, "loading")), (o.refcount = e.nodelete ? 1 / 0 : 1), (o.global = e.global));
            function s() {
              if (n) {
                var c = LE_HEAP_LOAD_U32(((n + 28) >> 2) * 4),
                  m = LE_HEAP_LOAD_U32(((n + 32) >> 2) * 4);
                if (c && m) {
                  var d = HEAP8.slice(c, c + m);
                  return e.loadAsync ? Promise.resolve(d) : d;
                }
              }
              var f = locateFile(t);
              if (e.loadAsync) return asyncLoad(f);
              if (!readBinary)
                throw new Error(`${f}: file not found, and synchronous loading of external files is not available`);
              return readBinary(f);
            }
            Vt(s, "loadLibData");
            function a() {
              return e.loadAsync
                ? s().then((c) => loadWebAssemblyModule(c, e, t, r, n))
                : loadWebAssemblyModule(s(), e, t, r, n);
            }
            Vt(a, "getExports");
            function u(c) {
              (o.global ? mergeLibSymbols(c, t) : r && Object.assign(r, c), (o.exports = c));
            }
            return (Vt(u, "moduleLoaded"), e.loadAsync ? a().then((c) => (u(c), !0)) : (u(a()), !0));
          }
          Vt(loadDynamicLibrary, "loadDynamicLibrary");
          var reportUndefinedSymbols = Vt(() => {
              for (var [t, e] of Object.entries(GOT))
                if (e.value == 0) {
                  var r = resolveGlobalSymbol(t, !0).sym;
                  if (!r && !e.required) continue;
                  if (typeof r == "function") e.value = addFunction(r, r.sig);
                  else if (typeof r == "number") e.value = r;
                  else throw new Error(`bad export type for '${t}': ${typeof r}`);
                }
            }, "reportUndefinedSymbols"),
            loadDylibs = Vt(() => {
              if (!dynamicLibraries.length) {
                reportUndefinedSymbols();
                return;
              }
              (addRunDependency("loadDylibs"),
                dynamicLibraries
                  .reduce(
                    (t, e) =>
                      t.then(() =>
                        loadDynamicLibrary(e, { loadAsync: !0, global: !0, nodelete: !0, allowUndefined: !0 }),
                      ),
                    Promise.resolve(),
                  )
                  .then(() => {
                    (reportUndefinedSymbols(), removeRunDependency("loadDylibs"));
                  }));
            }, "loadDylibs"),
            noExitRuntime = Module.noExitRuntime || !0;
          function setValue(t, e, r = "i8") {
            switch ((r.endsWith("*") && (r = "*"), r)) {
              case "i1":
                HEAP8[t] = e;
                break;
              case "i8":
                HEAP8[t] = e;
                break;
              case "i16":
                LE_HEAP_STORE_I16((t >> 1) * 2, e);
                break;
              case "i32":
                LE_HEAP_STORE_I32((t >> 2) * 4, e);
                break;
              case "i64":
                HEAP64[t >> 3] = BigInt(e);
                break;
              case "float":
                LE_HEAP_STORE_F32((t >> 2) * 4, e);
                break;
              case "double":
                LE_HEAP_STORE_F64((t >> 3) * 8, e);
                break;
              case "*":
                LE_HEAP_STORE_U32((t >> 2) * 4, e);
                break;
              default:
                abort(`invalid type for setValue: ${r}`);
            }
          }
          Vt(setValue, "setValue");
          var ___memory_base = new WebAssembly.Global({ value: "i32", mutable: !1 }, 1024),
            ___stack_pointer = new WebAssembly.Global({ value: "i32", mutable: !0 }, 78224),
            ___table_base = new WebAssembly.Global({ value: "i32", mutable: !1 }, 1),
            __abort_js = Vt(() => abort(""), "__abort_js");
          __abort_js.sig = "v";
          var _emscripten_get_now = Vt(() => performance.now(), "_emscripten_get_now");
          _emscripten_get_now.sig = "d";
          var _emscripten_date_now = Vt(() => Date.now(), "_emscripten_date_now");
          _emscripten_date_now.sig = "d";
          var nowIsMonotonic = 1,
            checkWasiClock = Vt((t) => t >= 0 && t <= 3, "checkWasiClock"),
            INT53_MAX = 9007199254740992,
            INT53_MIN = -9007199254740992,
            bigintToI53Checked = Vt((t) => (t < INT53_MIN || t > INT53_MAX ? NaN : Number(t)), "bigintToI53Checked");
          function _clock_time_get(t, e, r) {
            if (((e = bigintToI53Checked(e)), !checkWasiClock(t))) return 28;
            var n;
            if (t === 0) n = _emscripten_date_now();
            else if (nowIsMonotonic) n = _emscripten_get_now();
            else return 52;
            var o = Math.round(n * 1e3 * 1e3);
            return ((HEAP64[r >> 3] = BigInt(o)), 0);
          }
          (Vt(_clock_time_get, "_clock_time_get"), (_clock_time_get.sig = "iijp"));
          var getHeapMax = Vt(() => 2147483648, "getHeapMax"),
            growMemory = Vt((t) => {
              var e = wasmMemory.buffer,
                r = ((t - e.byteLength + 65535) / 65536) | 0;
              try {
                return (wasmMemory.grow(r), updateMemoryViews(), 1);
              } catch {}
            }, "growMemory"),
            _emscripten_resize_heap = Vt((t) => {
              var e = HEAPU8.length;
              t >>>= 0;
              var r = getHeapMax();
              if (t > r) return !1;
              for (var n = 1; n <= 4; n *= 2) {
                var o = e * (1 + 0.2 / n);
                o = Math.min(o, t + 100663296);
                var s = Math.min(r, alignMemory(Math.max(t, o), 65536)),
                  a = growMemory(s);
                if (a) return !0;
              }
              return !1;
            }, "_emscripten_resize_heap");
          _emscripten_resize_heap.sig = "ip";
          var _fd_close = Vt((t) => 52, "_fd_close");
          _fd_close.sig = "ii";
          function _fd_seek(t, e, r, n) {
            return ((e = bigintToI53Checked(e)), 70);
          }
          (Vt(_fd_seek, "_fd_seek"), (_fd_seek.sig = "iijip"));
          var printCharBuffers = [null, [], []],
            printChar = Vt((t, e) => {
              var r = printCharBuffers[t];
              e === 0 || e === 10 ? ((t === 1 ? out : err)(UTF8ArrayToString(r)), (r.length = 0)) : r.push(e);
            }, "printChar"),
            flush_NO_FILESYSTEM = Vt(() => {
              (printCharBuffers[1].length && printChar(1, 10), printCharBuffers[2].length && printChar(2, 10));
            }, "flush_NO_FILESYSTEM"),
            SYSCALLS = {
              varargs: void 0,
              getStr(t) {
                var e = UTF8ToString(t);
                return e;
              },
            },
            _fd_write = Vt((t, e, r, n) => {
              for (var o = 0, s = 0; s < r; s++) {
                var a = LE_HEAP_LOAD_U32((e >> 2) * 4),
                  u = LE_HEAP_LOAD_U32(((e + 4) >> 2) * 4);
                e += 8;
                for (var c = 0; c < u; c++) printChar(t, HEAPU8[a + c]);
                o += u;
              }
              return (LE_HEAP_STORE_U32((n >> 2) * 4, o), 0);
            }, "_fd_write");
          _fd_write.sig = "iippp";
          function _tree_sitter_log_callback(t, e) {
            if (Module.currentLogCallback) {
              let r = UTF8ToString(e);
              Module.currentLogCallback(r, t !== 0);
            }
          }
          Vt(_tree_sitter_log_callback, "_tree_sitter_log_callback");
          function _tree_sitter_parse_callback(t, e, r, n, o) {
            let a = Module.currentParseCallback(e, { row: r, column: n });
            typeof a == "string" ? (setValue(o, a.length, "i32"), stringToUTF16(a, t, 10240)) : setValue(o, 0, "i32");
          }
          Vt(_tree_sitter_parse_callback, "_tree_sitter_parse_callback");
          function _tree_sitter_progress_callback(t, e) {
            return Module.currentProgressCallback
              ? Module.currentProgressCallback({ currentOffset: t, hasError: e })
              : !1;
          }
          Vt(_tree_sitter_progress_callback, "_tree_sitter_progress_callback");
          function _tree_sitter_query_progress_callback(t) {
            return Module.currentQueryProgressCallback ? Module.currentQueryProgressCallback({ currentOffset: t }) : !1;
          }
          Vt(_tree_sitter_query_progress_callback, "_tree_sitter_query_progress_callback");
          var runtimeKeepaliveCounter = 0,
            keepRuntimeAlive = Vt(() => noExitRuntime || runtimeKeepaliveCounter > 0, "keepRuntimeAlive"),
            _proc_exit = Vt((t) => {
              ((EXITSTATUS = t), keepRuntimeAlive() || (Module.onExit?.(t), (ABORT = !0)), quit_(t, new ExitStatus(t)));
            }, "_proc_exit");
          _proc_exit.sig = "vi";
          var exitJS = Vt((t, e) => {
              ((EXITSTATUS = t), _proc_exit(t));
            }, "exitJS"),
            handleException = Vt((t) => {
              if (t instanceof ExitStatus || t == "unwind") return EXITSTATUS;
              quit_(1, t);
            }, "handleException"),
            lengthBytesUTF8 = Vt((t) => {
              for (var e = 0, r = 0; r < t.length; ++r) {
                var n = t.charCodeAt(r);
                n <= 127 ? e++ : n <= 2047 ? (e += 2) : n >= 55296 && n <= 57343 ? ((e += 4), ++r) : (e += 3);
              }
              return e;
            }, "lengthBytesUTF8"),
            stringToUTF8Array = Vt((t, e, r, n) => {
              if (!(n > 0)) return 0;
              for (var o = r, s = r + n - 1, a = 0; a < t.length; ++a) {
                var u = t.charCodeAt(a);
                if (u >= 55296 && u <= 57343) {
                  var c = t.charCodeAt(++a);
                  u = (65536 + ((u & 1023) << 10)) | (c & 1023);
                }
                if (u <= 127) {
                  if (r >= s) break;
                  e[r++] = u;
                } else if (u <= 2047) {
                  if (r + 1 >= s) break;
                  ((e[r++] = 192 | (u >> 6)), (e[r++] = 128 | (u & 63)));
                } else if (u <= 65535) {
                  if (r + 2 >= s) break;
                  ((e[r++] = 224 | (u >> 12)), (e[r++] = 128 | ((u >> 6) & 63)), (e[r++] = 128 | (u & 63)));
                } else {
                  if (r + 3 >= s) break;
                  ((e[r++] = 240 | (u >> 18)),
                    (e[r++] = 128 | ((u >> 12) & 63)),
                    (e[r++] = 128 | ((u >> 6) & 63)),
                    (e[r++] = 128 | (u & 63)));
                }
              }
              return ((e[r] = 0), r - o);
            }, "stringToUTF8Array"),
            stringToUTF8 = Vt((t, e, r) => stringToUTF8Array(t, HEAPU8, e, r), "stringToUTF8"),
            stackAlloc = Vt((t) => __emscripten_stack_alloc(t), "stackAlloc"),
            stringToUTF8OnStack = Vt((t) => {
              var e = lengthBytesUTF8(t) + 1,
                r = stackAlloc(e);
              return (stringToUTF8(t, r, e), r);
            }, "stringToUTF8OnStack"),
            AsciiToString = Vt((t) => {
              for (var e = ""; ; ) {
                var r = HEAPU8[t++];
                if (!r) return e;
                e += String.fromCharCode(r);
              }
            }, "AsciiToString"),
            stringToUTF16 = Vt((t, e, r) => {
              if (((r ??= 2147483647), r < 2)) return 0;
              r -= 2;
              for (var n = e, o = r < t.length * 2 ? r / 2 : t.length, s = 0; s < o; ++s) {
                var a = t.charCodeAt(s);
                (LE_HEAP_STORE_I16((e >> 1) * 2, a), (e += 2));
              }
              return (LE_HEAP_STORE_I16((e >> 1) * 2, 0), e - n);
            }, "stringToUTF16"),
            wasmImports = {
              __heap_base: ___heap_base,
              __indirect_function_table: wasmTable,
              __memory_base: ___memory_base,
              __stack_pointer: ___stack_pointer,
              __table_base: ___table_base,
              _abort_js: __abort_js,
              clock_time_get: _clock_time_get,
              emscripten_resize_heap: _emscripten_resize_heap,
              fd_close: _fd_close,
              fd_seek: _fd_seek,
              fd_write: _fd_write,
              memory: wasmMemory,
              tree_sitter_log_callback: _tree_sitter_log_callback,
              tree_sitter_parse_callback: _tree_sitter_parse_callback,
              tree_sitter_progress_callback: _tree_sitter_progress_callback,
              tree_sitter_query_progress_callback: _tree_sitter_query_progress_callback,
            },
            wasmExports = await createWasm(),
            ___wasm_call_ctors = wasmExports.__wasm_call_ctors,
            _malloc = (Module._malloc = wasmExports.malloc),
            _calloc = (Module._calloc = wasmExports.calloc),
            _realloc = (Module._realloc = wasmExports.realloc),
            _free = (Module._free = wasmExports.free),
            _memcmp = (Module._memcmp = wasmExports.memcmp),
            _ts_language_symbol_count = (Module._ts_language_symbol_count = wasmExports.ts_language_symbol_count),
            _ts_language_state_count = (Module._ts_language_state_count = wasmExports.ts_language_state_count),
            _ts_language_version = (Module._ts_language_version = wasmExports.ts_language_version),
            _ts_language_abi_version = (Module._ts_language_abi_version = wasmExports.ts_language_abi_version),
            _ts_language_metadata = (Module._ts_language_metadata = wasmExports.ts_language_metadata),
            _ts_language_name = (Module._ts_language_name = wasmExports.ts_language_name),
            _ts_language_field_count = (Module._ts_language_field_count = wasmExports.ts_language_field_count),
            _ts_language_next_state = (Module._ts_language_next_state = wasmExports.ts_language_next_state),
            _ts_language_symbol_name = (Module._ts_language_symbol_name = wasmExports.ts_language_symbol_name),
            _ts_language_symbol_for_name = (Module._ts_language_symbol_for_name =
              wasmExports.ts_language_symbol_for_name),
            _strncmp = (Module._strncmp = wasmExports.strncmp),
            _ts_language_symbol_type = (Module._ts_language_symbol_type = wasmExports.ts_language_symbol_type),
            _ts_language_field_name_for_id = (Module._ts_language_field_name_for_id =
              wasmExports.ts_language_field_name_for_id),
            _ts_lookahead_iterator_new = (Module._ts_lookahead_iterator_new = wasmExports.ts_lookahead_iterator_new),
            _ts_lookahead_iterator_delete = (Module._ts_lookahead_iterator_delete =
              wasmExports.ts_lookahead_iterator_delete),
            _ts_lookahead_iterator_reset_state = (Module._ts_lookahead_iterator_reset_state =
              wasmExports.ts_lookahead_iterator_reset_state),
            _ts_lookahead_iterator_reset = (Module._ts_lookahead_iterator_reset =
              wasmExports.ts_lookahead_iterator_reset),
            _ts_lookahead_iterator_next = (Module._ts_lookahead_iterator_next = wasmExports.ts_lookahead_iterator_next),
            _ts_lookahead_iterator_current_symbol = (Module._ts_lookahead_iterator_current_symbol =
              wasmExports.ts_lookahead_iterator_current_symbol),
            _ts_parser_delete = (Module._ts_parser_delete = wasmExports.ts_parser_delete),
            _ts_parser_reset = (Module._ts_parser_reset = wasmExports.ts_parser_reset),
            _ts_parser_set_language = (Module._ts_parser_set_language = wasmExports.ts_parser_set_language),
            _ts_parser_timeout_micros = (Module._ts_parser_timeout_micros = wasmExports.ts_parser_timeout_micros),
            _ts_parser_set_timeout_micros = (Module._ts_parser_set_timeout_micros =
              wasmExports.ts_parser_set_timeout_micros),
            _ts_parser_set_included_ranges = (Module._ts_parser_set_included_ranges =
              wasmExports.ts_parser_set_included_ranges),
            _ts_query_new = (Module._ts_query_new = wasmExports.ts_query_new),
            _ts_query_delete = (Module._ts_query_delete = wasmExports.ts_query_delete),
            _iswspace = (Module._iswspace = wasmExports.iswspace),
            _iswalnum = (Module._iswalnum = wasmExports.iswalnum),
            _ts_query_pattern_count = (Module._ts_query_pattern_count = wasmExports.ts_query_pattern_count),
            _ts_query_capture_count = (Module._ts_query_capture_count = wasmExports.ts_query_capture_count),
            _ts_query_string_count = (Module._ts_query_string_count = wasmExports.ts_query_string_count),
            _ts_query_capture_name_for_id = (Module._ts_query_capture_name_for_id =
              wasmExports.ts_query_capture_name_for_id),
            _ts_query_capture_quantifier_for_id = (Module._ts_query_capture_quantifier_for_id =
              wasmExports.ts_query_capture_quantifier_for_id),
            _ts_query_string_value_for_id = (Module._ts_query_string_value_for_id =
              wasmExports.ts_query_string_value_for_id),
            _ts_query_predicates_for_pattern = (Module._ts_query_predicates_for_pattern =
              wasmExports.ts_query_predicates_for_pattern),
            _ts_query_start_byte_for_pattern = (Module._ts_query_start_byte_for_pattern =
              wasmExports.ts_query_start_byte_for_pattern),
            _ts_query_end_byte_for_pattern = (Module._ts_query_end_byte_for_pattern =
              wasmExports.ts_query_end_byte_for_pattern),
            _ts_query_is_pattern_rooted = (Module._ts_query_is_pattern_rooted = wasmExports.ts_query_is_pattern_rooted),
            _ts_query_is_pattern_non_local = (Module._ts_query_is_pattern_non_local =
              wasmExports.ts_query_is_pattern_non_local),
            _ts_query_is_pattern_guaranteed_at_step = (Module._ts_query_is_pattern_guaranteed_at_step =
              wasmExports.ts_query_is_pattern_guaranteed_at_step),
            _ts_query_disable_capture = (Module._ts_query_disable_capture = wasmExports.ts_query_disable_capture),
            _ts_query_disable_pattern = (Module._ts_query_disable_pattern = wasmExports.ts_query_disable_pattern),
            _ts_tree_copy = (Module._ts_tree_copy = wasmExports.ts_tree_copy),
            _ts_tree_delete = (Module._ts_tree_delete = wasmExports.ts_tree_delete),
            _ts_init = (Module._ts_init = wasmExports.ts_init),
            _ts_parser_new_wasm = (Module._ts_parser_new_wasm = wasmExports.ts_parser_new_wasm),
            _ts_parser_enable_logger_wasm = (Module._ts_parser_enable_logger_wasm =
              wasmExports.ts_parser_enable_logger_wasm),
            _ts_parser_parse_wasm = (Module._ts_parser_parse_wasm = wasmExports.ts_parser_parse_wasm),
            _ts_parser_included_ranges_wasm = (Module._ts_parser_included_ranges_wasm =
              wasmExports.ts_parser_included_ranges_wasm),
            _ts_language_type_is_named_wasm = (Module._ts_language_type_is_named_wasm =
              wasmExports.ts_language_type_is_named_wasm),
            _ts_language_type_is_visible_wasm = (Module._ts_language_type_is_visible_wasm =
              wasmExports.ts_language_type_is_visible_wasm),
            _ts_language_supertypes_wasm = (Module._ts_language_supertypes_wasm =
              wasmExports.ts_language_supertypes_wasm),
            _ts_language_subtypes_wasm = (Module._ts_language_subtypes_wasm = wasmExports.ts_language_subtypes_wasm),
            _ts_tree_root_node_wasm = (Module._ts_tree_root_node_wasm = wasmExports.ts_tree_root_node_wasm),
            _ts_tree_root_node_with_offset_wasm = (Module._ts_tree_root_node_with_offset_wasm =
              wasmExports.ts_tree_root_node_with_offset_wasm),
            _ts_tree_edit_wasm = (Module._ts_tree_edit_wasm = wasmExports.ts_tree_edit_wasm),
            _ts_tree_included_ranges_wasm = (Module._ts_tree_included_ranges_wasm =
              wasmExports.ts_tree_included_ranges_wasm),
            _ts_tree_get_changed_ranges_wasm = (Module._ts_tree_get_changed_ranges_wasm =
              wasmExports.ts_tree_get_changed_ranges_wasm),
            _ts_tree_cursor_new_wasm = (Module._ts_tree_cursor_new_wasm = wasmExports.ts_tree_cursor_new_wasm),
            _ts_tree_cursor_copy_wasm = (Module._ts_tree_cursor_copy_wasm = wasmExports.ts_tree_cursor_copy_wasm),
            _ts_tree_cursor_delete_wasm = (Module._ts_tree_cursor_delete_wasm = wasmExports.ts_tree_cursor_delete_wasm),
            _ts_tree_cursor_reset_wasm = (Module._ts_tree_cursor_reset_wasm = wasmExports.ts_tree_cursor_reset_wasm),
            _ts_tree_cursor_reset_to_wasm = (Module._ts_tree_cursor_reset_to_wasm =
              wasmExports.ts_tree_cursor_reset_to_wasm),
            _ts_tree_cursor_goto_first_child_wasm = (Module._ts_tree_cursor_goto_first_child_wasm =
              wasmExports.ts_tree_cursor_goto_first_child_wasm),
            _ts_tree_cursor_goto_last_child_wasm = (Module._ts_tree_cursor_goto_last_child_wasm =
              wasmExports.ts_tree_cursor_goto_last_child_wasm),
            _ts_tree_cursor_goto_first_child_for_index_wasm = (Module._ts_tree_cursor_goto_first_child_for_index_wasm =
              wasmExports.ts_tree_cursor_goto_first_child_for_index_wasm),
            _ts_tree_cursor_goto_first_child_for_position_wasm =
              (Module._ts_tree_cursor_goto_first_child_for_position_wasm =
                wasmExports.ts_tree_cursor_goto_first_child_for_position_wasm),
            _ts_tree_cursor_goto_next_sibling_wasm = (Module._ts_tree_cursor_goto_next_sibling_wasm =
              wasmExports.ts_tree_cursor_goto_next_sibling_wasm),
            _ts_tree_cursor_goto_previous_sibling_wasm = (Module._ts_tree_cursor_goto_previous_sibling_wasm =
              wasmExports.ts_tree_cursor_goto_previous_sibling_wasm),
            _ts_tree_cursor_goto_descendant_wasm = (Module._ts_tree_cursor_goto_descendant_wasm =
              wasmExports.ts_tree_cursor_goto_descendant_wasm),
            _ts_tree_cursor_goto_parent_wasm = (Module._ts_tree_cursor_goto_parent_wasm =
              wasmExports.ts_tree_cursor_goto_parent_wasm),
            _ts_tree_cursor_current_node_type_id_wasm = (Module._ts_tree_cursor_current_node_type_id_wasm =
              wasmExports.ts_tree_cursor_current_node_type_id_wasm),
            _ts_tree_cursor_current_node_state_id_wasm = (Module._ts_tree_cursor_current_node_state_id_wasm =
              wasmExports.ts_tree_cursor_current_node_state_id_wasm),
            _ts_tree_cursor_current_node_is_named_wasm = (Module._ts_tree_cursor_current_node_is_named_wasm =
              wasmExports.ts_tree_cursor_current_node_is_named_wasm),
            _ts_tree_cursor_current_node_is_missing_wasm = (Module._ts_tree_cursor_current_node_is_missing_wasm =
              wasmExports.ts_tree_cursor_current_node_is_missing_wasm),
            _ts_tree_cursor_current_node_id_wasm = (Module._ts_tree_cursor_current_node_id_wasm =
              wasmExports.ts_tree_cursor_current_node_id_wasm),
            _ts_tree_cursor_start_position_wasm = (Module._ts_tree_cursor_start_position_wasm =
              wasmExports.ts_tree_cursor_start_position_wasm),
            _ts_tree_cursor_end_position_wasm = (Module._ts_tree_cursor_end_position_wasm =
              wasmExports.ts_tree_cursor_end_position_wasm),
            _ts_tree_cursor_start_index_wasm = (Module._ts_tree_cursor_start_index_wasm =
              wasmExports.ts_tree_cursor_start_index_wasm),
            _ts_tree_cursor_end_index_wasm = (Module._ts_tree_cursor_end_index_wasm =
              wasmExports.ts_tree_cursor_end_index_wasm),
            _ts_tree_cursor_current_field_id_wasm = (Module._ts_tree_cursor_current_field_id_wasm =
              wasmExports.ts_tree_cursor_current_field_id_wasm),
            _ts_tree_cursor_current_depth_wasm = (Module._ts_tree_cursor_current_depth_wasm =
              wasmExports.ts_tree_cursor_current_depth_wasm),
            _ts_tree_cursor_current_descendant_index_wasm = (Module._ts_tree_cursor_current_descendant_index_wasm =
              wasmExports.ts_tree_cursor_current_descendant_index_wasm),
            _ts_tree_cursor_current_node_wasm = (Module._ts_tree_cursor_current_node_wasm =
              wasmExports.ts_tree_cursor_current_node_wasm),
            _ts_node_symbol_wasm = (Module._ts_node_symbol_wasm = wasmExports.ts_node_symbol_wasm),
            _ts_node_field_name_for_child_wasm = (Module._ts_node_field_name_for_child_wasm =
              wasmExports.ts_node_field_name_for_child_wasm),
            _ts_node_field_name_for_named_child_wasm = (Module._ts_node_field_name_for_named_child_wasm =
              wasmExports.ts_node_field_name_for_named_child_wasm),
            _ts_node_children_by_field_id_wasm = (Module._ts_node_children_by_field_id_wasm =
              wasmExports.ts_node_children_by_field_id_wasm),
            _ts_node_first_child_for_byte_wasm = (Module._ts_node_first_child_for_byte_wasm =
              wasmExports.ts_node_first_child_for_byte_wasm),
            _ts_node_first_named_child_for_byte_wasm = (Module._ts_node_first_named_child_for_byte_wasm =
              wasmExports.ts_node_first_named_child_for_byte_wasm),
            _ts_node_grammar_symbol_wasm = (Module._ts_node_grammar_symbol_wasm =
              wasmExports.ts_node_grammar_symbol_wasm),
            _ts_node_child_count_wasm = (Module._ts_node_child_count_wasm = wasmExports.ts_node_child_count_wasm),
            _ts_node_named_child_count_wasm = (Module._ts_node_named_child_count_wasm =
              wasmExports.ts_node_named_child_count_wasm),
            _ts_node_child_wasm = (Module._ts_node_child_wasm = wasmExports.ts_node_child_wasm),
            _ts_node_named_child_wasm = (Module._ts_node_named_child_wasm = wasmExports.ts_node_named_child_wasm),
            _ts_node_child_by_field_id_wasm = (Module._ts_node_child_by_field_id_wasm =
              wasmExports.ts_node_child_by_field_id_wasm),
            _ts_node_next_sibling_wasm = (Module._ts_node_next_sibling_wasm = wasmExports.ts_node_next_sibling_wasm),
            _ts_node_prev_sibling_wasm = (Module._ts_node_prev_sibling_wasm = wasmExports.ts_node_prev_sibling_wasm),
            _ts_node_next_named_sibling_wasm = (Module._ts_node_next_named_sibling_wasm =
              wasmExports.ts_node_next_named_sibling_wasm),
            _ts_node_prev_named_sibling_wasm = (Module._ts_node_prev_named_sibling_wasm =
              wasmExports.ts_node_prev_named_sibling_wasm),
            _ts_node_descendant_count_wasm = (Module._ts_node_descendant_count_wasm =
              wasmExports.ts_node_descendant_count_wasm),
            _ts_node_parent_wasm = (Module._ts_node_parent_wasm = wasmExports.ts_node_parent_wasm),
            _ts_node_child_with_descendant_wasm = (Module._ts_node_child_with_descendant_wasm =
              wasmExports.ts_node_child_with_descendant_wasm),
            _ts_node_descendant_for_index_wasm = (Module._ts_node_descendant_for_index_wasm =
              wasmExports.ts_node_descendant_for_index_wasm),
            _ts_node_named_descendant_for_index_wasm = (Module._ts_node_named_descendant_for_index_wasm =
              wasmExports.ts_node_named_descendant_for_index_wasm),
            _ts_node_descendant_for_position_wasm = (Module._ts_node_descendant_for_position_wasm =
              wasmExports.ts_node_descendant_for_position_wasm),
            _ts_node_named_descendant_for_position_wasm = (Module._ts_node_named_descendant_for_position_wasm =
              wasmExports.ts_node_named_descendant_for_position_wasm),
            _ts_node_start_point_wasm = (Module._ts_node_start_point_wasm = wasmExports.ts_node_start_point_wasm),
            _ts_node_end_point_wasm = (Module._ts_node_end_point_wasm = wasmExports.ts_node_end_point_wasm),
            _ts_node_start_index_wasm = (Module._ts_node_start_index_wasm = wasmExports.ts_node_start_index_wasm),
            _ts_node_end_index_wasm = (Module._ts_node_end_index_wasm = wasmExports.ts_node_end_index_wasm),
            _ts_node_to_string_wasm = (Module._ts_node_to_string_wasm = wasmExports.ts_node_to_string_wasm),
            _ts_node_children_wasm = (Module._ts_node_children_wasm = wasmExports.ts_node_children_wasm),
            _ts_node_named_children_wasm = (Module._ts_node_named_children_wasm =
              wasmExports.ts_node_named_children_wasm),
            _ts_node_descendants_of_type_wasm = (Module._ts_node_descendants_of_type_wasm =
              wasmExports.ts_node_descendants_of_type_wasm),
            _ts_node_is_named_wasm = (Module._ts_node_is_named_wasm = wasmExports.ts_node_is_named_wasm),
            _ts_node_has_changes_wasm = (Module._ts_node_has_changes_wasm = wasmExports.ts_node_has_changes_wasm),
            _ts_node_has_error_wasm = (Module._ts_node_has_error_wasm = wasmExports.ts_node_has_error_wasm),
            _ts_node_is_error_wasm = (Module._ts_node_is_error_wasm = wasmExports.ts_node_is_error_wasm),
            _ts_node_is_missing_wasm = (Module._ts_node_is_missing_wasm = wasmExports.ts_node_is_missing_wasm),
            _ts_node_is_extra_wasm = (Module._ts_node_is_extra_wasm = wasmExports.ts_node_is_extra_wasm),
            _ts_node_parse_state_wasm = (Module._ts_node_parse_state_wasm = wasmExports.ts_node_parse_state_wasm),
            _ts_node_next_parse_state_wasm = (Module._ts_node_next_parse_state_wasm =
              wasmExports.ts_node_next_parse_state_wasm),
            _ts_query_matches_wasm = (Module._ts_query_matches_wasm = wasmExports.ts_query_matches_wasm),
            _ts_query_captures_wasm = (Module._ts_query_captures_wasm = wasmExports.ts_query_captures_wasm),
            _memset = (Module._memset = wasmExports.memset),
            _memcpy = (Module._memcpy = wasmExports.memcpy),
            _memmove = (Module._memmove = wasmExports.memmove),
            _iswalpha = (Module._iswalpha = wasmExports.iswalpha),
            _iswblank = (Module._iswblank = wasmExports.iswblank),
            _iswdigit = (Module._iswdigit = wasmExports.iswdigit),
            _iswlower = (Module._iswlower = wasmExports.iswlower),
            _iswupper = (Module._iswupper = wasmExports.iswupper),
            _iswxdigit = (Module._iswxdigit = wasmExports.iswxdigit),
            _memchr = (Module._memchr = wasmExports.memchr),
            _strlen = (Module._strlen = wasmExports.strlen),
            _strcmp = (Module._strcmp = wasmExports.strcmp),
            _strncat = (Module._strncat = wasmExports.strncat),
            _strncpy = (Module._strncpy = wasmExports.strncpy),
            _towlower = (Module._towlower = wasmExports.towlower),
            _towupper = (Module._towupper = wasmExports.towupper),
            _setThrew = wasmExports.setThrew,
            __emscripten_stack_restore = wasmExports._emscripten_stack_restore,
            __emscripten_stack_alloc = wasmExports._emscripten_stack_alloc,
            _emscripten_stack_get_current = wasmExports.emscripten_stack_get_current,
            ___wasm_apply_data_relocs = wasmExports.__wasm_apply_data_relocs;
          ((Module.setValue = setValue),
            (Module.getValue = getValue),
            (Module.UTF8ToString = UTF8ToString),
            (Module.stringToUTF8 = stringToUTF8),
            (Module.lengthBytesUTF8 = lengthBytesUTF8),
            (Module.AsciiToString = AsciiToString),
            (Module.stringToUTF16 = stringToUTF16),
            (Module.loadWebAssemblyModule = loadWebAssemblyModule));
          function callMain(t = []) {
            var e = resolveGlobalSymbol("main").sym;
            if (e) {
              t.unshift(thisProgram);
              var r = t.length,
                n = stackAlloc((r + 1) * 4),
                o = n;
              (t.forEach((a) => {
                (LE_HEAP_STORE_U32((o >> 2) * 4, stringToUTF8OnStack(a)), (o += 4));
              }),
                LE_HEAP_STORE_U32((o >> 2) * 4, 0));
              try {
                var s = e(r, n);
                return (exitJS(s, !0), s);
              } catch (a) {
                return handleException(a);
              }
            }
          }
          Vt(callMain, "callMain");
          function run(t = arguments_) {
            if (runDependencies > 0) {
              dependenciesFulfilled = run;
              return;
            }
            if ((preRun(), runDependencies > 0)) {
              dependenciesFulfilled = run;
              return;
            }
            function e() {
              if (((Module.calledRun = !0), !ABORT)) {
                (initRuntime(), readyPromiseResolve(Module), Module.onRuntimeInitialized?.());
                var r = Module.noInitialRun;
                (r || callMain(t), postRun());
              }
            }
            (Vt(e, "doRun"),
              Module.setStatus
                ? (Module.setStatus("Running..."),
                  setTimeout(() => {
                    (setTimeout(() => Module.setStatus(""), 1), e());
                  }, 1))
                : e());
          }
          if ((Vt(run, "run"), Module.preInit))
            for (
              typeof Module.preInit == "function" && (Module.preInit = [Module.preInit]);
              Module.preInit.length > 0;
            )
              Module.preInit.pop()();
          return (run(), (moduleRtn = readyPromise), moduleRtn);
        };
      })()),
      (kAa = RAa),
      (Xst = null));
    Vt(zoi, "initializeBinding");
    Vt(Yoi, "checkModule");
    D0r = class {
      static {
        Vt(this, "Parser");
      }
      0 = 0;
      1 = 0;
      logCallback = null;
      language = null;
      static async init(t) {
        (Boi(await zoi(t)), (vi = dt._ts_init()), (E0r = dt.getValue(vi, "i32")), (v0r = dt.getValue(vi + $i, "i32")));
      }
      constructor() {
        this.initialize();
      }
      initialize() {
        if (!Yoi()) throw new Error("cannot construct a Parser before calling `init()`");
        (dt._ts_parser_new_wasm(), (this[0] = dt.getValue(vi, "i32")), (this[1] = dt.getValue(vi + $i, "i32")));
      }
      delete() {
        (dt._ts_parser_delete(this[0]), dt._free(this[1]), (this[0] = 0), (this[1] = 0));
      }
      setLanguage(t) {
        let e;
        if (!t) ((e = 0), (this.language = null));
        else if (t.constructor === T0r) {
          e = t[0];
          let r = dt._ts_language_version(e);
          if (r < v0r || E0r < r)
            throw new Error(`Incompatible language version ${r}. Compatibility range ${v0r} through ${E0r}.`);
          this.language = t;
        } else throw new Error("Argument must be a Language");
        return (dt._ts_parser_set_language(this[0], e), this);
      }
      parse(t, e, r) {
        if (typeof t == "string") dt.currentParseCallback = (u) => t.slice(u);
        else if (typeof t == "function") dt.currentParseCallback = t;
        else throw new Error("Argument must be a string or a function");
        (r?.progressCallback ? (dt.currentProgressCallback = r.progressCallback) : (dt.currentProgressCallback = null),
          this.logCallback
            ? ((dt.currentLogCallback = this.logCallback), dt._ts_parser_enable_logger_wasm(this[0], 1))
            : ((dt.currentLogCallback = null), dt._ts_parser_enable_logger_wasm(this[0], 0)));
        let n = 0,
          o = 0;
        if (r?.includedRanges) {
          ((n = r.includedRanges.length), (o = dt._calloc(n, KCe)));
          let u = o;
          for (let c = 0; c < n; c++) (Moi(u, r.includedRanges[c]), (u += KCe));
        }
        let s = dt._ts_parser_parse_wasm(this[0], this[1], e ? e[0] : 0, o, n);
        if (!s)
          return (
            (dt.currentParseCallback = null),
            (dt.currentLogCallback = null),
            (dt.currentProgressCallback = null),
            null
          );
        if (!this.language) throw new Error("Parser must have a language to parse");
        let a = new vAa(BU, s, this.language, dt.currentParseCallback);
        return (
          (dt.currentParseCallback = null),
          (dt.currentLogCallback = null),
          (dt.currentProgressCallback = null),
          a
        );
      }
      reset() {
        dt._ts_parser_reset(this[0]);
      }
      getIncludedRanges() {
        dt._ts_parser_included_ranges_wasm(this[0]);
        let t = dt.getValue(vi, "i32"),
          e = dt.getValue(vi + $i, "i32"),
          r = new Array(t);
        if (t > 0) {
          let n = e;
          for (let o = 0; o < t; o++) ((r[o] = Zst(n)), (n += KCe));
          dt._free(e);
        }
        return r;
      }
      getTimeoutMicros() {
        return dt._ts_parser_timeout_micros(this[0]);
      }
      setTimeoutMicros(t) {
        dt._ts_parser_set_timeout_micros(this[0], 0, t);
      }
      setLogger(t) {
        if (!t) this.logCallback = null;
        else {
          if (typeof t != "function") throw new Error("Logger callback must be a function");
          this.logCallback = t;
        }
        return this;
      }
      getLogger() {
        return this.logCallback;
      }
    };
  });