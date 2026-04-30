/**
 * @module Yt
 * @category browser/jsdom
 * @label jsdom
 * @position 2 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Yt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Yt = T((p9u, lSr) => {
  "use strict";
  lSr.exports = cSr();
});
function mSr(t, e, { signal: r, edges: n } = {}) {
  let o,
    s = null,
    a = n != null && n.includes("leading"),
    u = n == null || n.includes("trailing"),
    c = () => {
      s !== null && (t.apply(o, s), (o = void 0), (s = null));
    },
    m = () => {
      (u && c(), h());
    },
    d = null,
    f = () => {
      (d != null && clearTimeout(d),
        (d = setTimeout(() => {
          ((d = null), m());
        }, e)));
    },
    p = () => {
      d !== null && (clearTimeout(d), (d = null));
    },
    h = () => {
      (p(), (o = void 0), (s = null));
    },
    g = () => {
      c();
    },
    b = function (...A) {
      if (r?.aborted) return;
      ((o = this), (s = A));
      let y = d == null;
      (f(), a && y && c());
    };
  return ((b.schedule = f), (b.cancel = h), (b.flush = g), r?.addEventListener("abort", h, { once: !0 }), b);
}
var dSr = j(() => {});
function fSr(t, e = 0, r = {}) {
  typeof r != "object" && (r = {});
  let { leading: n = !1, trailing: o = !0, maxWait: s } = r,
    a = Array(2);
  (n && (a[0] = "leading"), o && (a[1] = "trailing"));
  let u,
    c = null,
    m = mSr(
      function (...p) {
        ((u = t.apply(this, p)), (c = null));
      },
      e,
      { edges: a },
    ),
    d = function (...p) {
      return s != null && (c === null && (c = Date.now()), Date.now() - c >= s)
        ? ((u = t.apply(this, p)), (c = Date.now()), m.cancel(), m.schedule(), u)
        : (m.apply(this, p), u);
    },
    f = () => (m.flush(), u);
  return ((d.cancel = m.cancel), (d.flush = f), d);
}
var pSr = j(() => {
  dSr();
});
function $7e(t, e = 0, r = {}) {
  let { leading: n = !0, trailing: o = !0 } = r;
  return fSr(t, e, { leading: n, maxWait: e, trailing: o });
}
var hSr = j(() => {
  pSr();
});
var gSr = j(() => {
  hSr();
});
var GZ,
  v9u,
  C9u,
  S9u,
  w9u,
  x9u,
  T9u,
  D9u,
  I9u,
  R9u,
  hhe,
  k9u,
  O9u,
  N9u,
  P9u,
  B9u,
  bSr = j(() => {
    ((GZ = globalThis.window?.document !== void 0),
      (v9u = globalThis.process?.versions?.node !== void 0),
      (C9u = globalThis.process?.versions?.bun !== void 0),
      (S9u = globalThis.Deno?.version?.deno !== void 0),
      (w9u = globalThis.process?.versions?.electron !== void 0),
      (x9u = globalThis.navigator?.userAgent?.includes("jsdom") === !0),
      (T9u = typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope),
      (D9u = typeof DedicatedWorkerGlobalScope < "u" && globalThis instanceof DedicatedWorkerGlobalScope),
      (I9u = typeof SharedWorkerGlobalScope < "u" && globalThis instanceof SharedWorkerGlobalScope),
      (R9u = typeof ServiceWorkerGlobalScope < "u" && globalThis instanceof ServiceWorkerGlobalScope),
      (hhe = globalThis.navigator?.userAgentData?.platform),
      (k9u =
        hhe === "macOS" ||
        globalThis.navigator?.platform === "MacIntel" ||
        globalThis.navigator?.userAgent?.includes(" Mac ") === !0 ||
        globalThis.process?.platform === "darwin"),
      (O9u =
        hhe === "Windows" || globalThis.navigator?.platform === "Win32" || globalThis.process?.platform === "win32"),
      (N9u =
        hhe === "Linux" ||
        globalThis.navigator?.platform?.startsWith("Linux") === !0 ||
        globalThis.navigator?.userAgent?.includes(" Linux ") === !0 ||
        globalThis.process?.platform === "linux"),
      (P9u =
        hhe === "iOS" ||
        (globalThis.navigator?.platform === "MacIntel" && globalThis.navigator?.maxTouchPoints > 1) ||
        /iPad|iPhone|iPod/.test(globalThis.navigator?.platform)),
      (B9u =
        hhe === "Android" ||
        globalThis.navigator?.platform === "Android" ||
        globalThis.navigator?.userAgent?.includes(" Android ") === !0 ||
        globalThis.process?.platform === "android"));
  });
var M1 = {};
Wi(M1, {
  ConEmu: () => CSr,
  beep: () => _co,
  clearScreen: () => pco,
  clearTerminal: () => bco,
  clearViewport: () => hco,
  cursorBackward: () => Zuo,
  cursorDown: () => Juo,
  cursorForward: () => Xuo,
  cursorGetPosition: () => rco,
  cursorHide: () => oco,
  cursorLeft: () => _Sr,
  cursorMove: () => Kuo,
  cursorNextLine: () => nco,
  cursorPrevLine: () => ico,
  cursorRestorePosition: () => tco,
  cursorSavePosition: () => eco,
  cursorShow: () => sco,
  cursorTo: () => Yuo,
  cursorUp: () => ySr,
  enterAlternativeScreen: () => Aco,
  eraseDown: () => lco,
  eraseEndLine: () => uco,
  eraseLine: () => ESr,
  eraseLines: () => aco,
  eraseScreen: () => j7e,
  eraseStartLine: () => cco,
  eraseUp: () => mco,
  exitAlternativeScreen: () => yco,
  iTerm: () => vSr,
  image: () => vco,
  link: () => Eco,
  scrollDown: () => fco,
  scrollUp: () => dco,
  setCwd: () => Cco,
});
import qZ from "node:process";
import Vuo from "node:os";
var yc,
  HZ,
  XQ,
  ghe,
  ASr,
  Wuo,
  zuo,
  p8t,
  VZ,
  Yuo,
  Kuo,
  ySr,
  Juo,
  Xuo,
  Zuo,
  _Sr,
  eco,
  tco,
  rco,
  nco,
  ico,
  oco,
  sco,
  aco,
  uco,
  cco,
  ESr,
  lco,
  mco,
  j7e,
  dco,
  fco,
  pco,
  hco,
  gco,
  bco,
  Aco,
  yco,
  _co,
  Eco,
  vco,
  vSr,
  CSr,
  Cco,
  h8t = j(() => {
    bSr();
    ((yc = "\x1B["),
      (HZ = "\x1B]"),
      (XQ = "\x07"),
      (ghe = ";"),
      (ASr = !GZ && qZ.env.TERM_PROGRAM === "Apple_Terminal"),
      (Wuo = !GZ && qZ.platform === "win32"),
      (zuo = !GZ && (qZ.env.TERM?.startsWith("screen") || qZ.env.TERM?.startsWith("tmux") || qZ.env.TMUX !== void 0)),
      (p8t = GZ
        ? () => {
            throw new Error("`process.cwd()` only works in Node.js, not the browser.");
          }
        : qZ.cwd),
      (VZ = (t) => (zuo ? "\x1BPtmux;" + t.replaceAll("\x1B", "\x1B\x1B") + "\x1B\\" : t)),
      (Yuo = (t, e) => {
        if (typeof t != "number") throw new TypeError("The `x` argument is required");
        return typeof e != "number" ? yc + (t + 1) + "G" : yc + (e + 1) + ghe + (t + 1) + "H";
      }),
      (Kuo = (t, e) => {
        if (typeof t != "number") throw new TypeError("The `x` argument is required");
        let r = "";
        return (
          t < 0 ? (r += yc + -t + "D") : t > 0 && (r += yc + t + "C"),
          e < 0 ? (r += yc + -e + "A") : e > 0 && (r += yc + e + "B"),
          r
        );
      }),
      (ySr = (t = 1) => yc + t + "A"),
      (Juo = (t = 1) => yc + t + "B"),
      (Xuo = (t = 1) => yc + t + "C"),
      (Zuo = (t = 1) => yc + t + "D"),
      (_Sr = yc + "G"),
      (eco = ASr ? "\x1B7" : yc + "s"),
      (tco = ASr ? "\x1B8" : yc + "u"),
      (rco = yc + "6n"),
      (nco = yc + "E"),
      (ico = yc + "F"),
      (oco = yc + "?25l"),
      (sco = yc + "?25h"),
      (aco = (t) => {
        let e = "";
        for (let r = 0; r < t; r++) e += ESr + (r < t - 1 ? ySr() : "");
        return (t && (e += _Sr), e);
      }),
      (uco = yc + "K"),
      (cco = yc + "1K"),
      (ESr = yc + "2K"),
      (lco = yc + "J"),
      (mco = yc + "1J"),
      (j7e = yc + "2J"),
      (dco = yc + "S"),
      (fco = yc + "T"),
      (pco = "\x1Bc"),
      (hco = `${j7e}${yc}H`),
      (gco = () => {
        if (GZ || !Wuo) return !1;
        let t = Vuo.release().split("."),
          e = Number(t[0]),
          r = Number(t[2] ?? 0);
        return e < 10 || (e === 10 && r < 10586);
      }),
      (bco = gco() ? `${j7e}${yc}0f` : `${j7e}${yc}3J${yc}H`),
      (Aco = yc + "?1049h"),
      (yco = yc + "?1049l"),
      (_co = XQ),
      (Eco = (t, e) => {
        let r = VZ(`${HZ}8${ghe}${ghe}${e}${XQ}`),
          n = VZ(`${HZ}8${ghe}${ghe}${XQ}`);
        return r + t + n;
      }),
      (vco = (t, e = {}) => {
        let r = `${HZ}1337;File=inline=1`;
        (e.width && (r += `;width=${e.width}`),
          e.height && (r += `;height=${e.height}`),
          e.preserveAspectRatio === !1 && (r += ";preserveAspectRatio=0"));
        let n = Buffer.from(t);
        return VZ(r + `;size=${n.byteLength}:` + n.toString("base64") + XQ);
      }),
      (vSr = {
        setCwd: (t = p8t()) => VZ(`${HZ}50;CurrentDir=${t}${XQ}`),
        annotation(t, e = {}) {
          let r = `${HZ}1337;`,
            n = e.x !== void 0,
            o = e.y !== void 0;
          if ((n || o) && !(n && o && e.length !== void 0))
            throw new Error("`x`, `y` and `length` must be defined when `x` or `y` is defined");
          return (
            (t = t.replaceAll("|", "")),
            (r += e.isHidden ? "AddHiddenAnnotation=" : "AddAnnotation="),
            e.length > 0 ? (r += (n ? [t, e.length, e.x, e.y] : [e.length, t]).join("|")) : (r += t),
            VZ(r + XQ)
          );
        },
      }),
      (CSr = { setCwd: (t = p8t()) => VZ(`${HZ}9;9;${t}${XQ}`) }),
      (Cco = (t = p8t()) => vSr.setCwd(t) + CSr.setCwd(t)));
  });
var bhe = j(() => {
  h8t();
  h8t();
});
var Y7,
  g8t = j(() => {
    "use strict";
    Y7 = !1;
  });
function b8t(t, { include: e, exclude: r } = {}) {
  let n = (o) => {
    let s = (a) => (typeof a == "string" ? o === a : a.test(o));
    return e ? e.some(s) : r ? !r.some(s) : !0;
  };
  for (let [o, s] of Sco(t.constructor.prototype)) {
    if (s === "constructor" || !n(s)) continue;
    let a = Reflect.getOwnPropertyDescriptor(o, s);
    a && typeof a.value == "function" && (t[s] = t[s].bind(t));
  }
  return t;
}
var Sco,
  SSr = j(() => {
    Sco = (t) => {
      let e = new Set();
      do for (let r of Reflect.ownKeys(t)) e.add([t, r]);
      while ((t = Reflect.getPrototypeOf(t)) && t !== Object.prototype);
      return e;
    };
  });