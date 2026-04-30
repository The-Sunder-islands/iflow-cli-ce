/**
 * @module DMi
 * @category app/auth
 * @label iflow-auth
 * @position 1834 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (DMi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var DMi = T((hil, GN) => {
  var C8r = Ae("fs"),
    Fht = Ae("path"),
    Fru = Ae("os"),
    Uru = Ae("crypto"),
    $ru = vMi(),
    S8r = $ru.version,
    CMi = [
      "\u{1F510} encrypt with Dotenvx: https://dotenvx.com",
      "\u{1F510} prevent committing .env to code: https://dotenvx.com/precommit",
      "\u{1F510} prevent building .env in docker: https://dotenvx.com/prebuild",
      "\u{1F4E1} add observability to secrets: https://dotenvx.com/ops",
      "\u{1F465} sync secrets across teammates & machines: https://dotenvx.com/ops",
      "\u{1F5C2}\uFE0F backup and recover secrets: https://dotenvx.com/ops",
      "\u2705 audit secrets and track compliance: https://dotenvx.com/ops",
      "\u{1F504} add secrets lifecycle management: https://dotenvx.com/ops",
      "\u{1F511} add access controls to secrets: https://dotenvx.com/ops",
      "\u{1F6E0}\uFE0F  run anywhere with `dotenvx run -- yourcommand`",
      "\u2699\uFE0F  specify custom .env file path with { path: '/custom/path/.env' }",
      "\u2699\uFE0F  enable debug logging with { debug: true }",
      "\u2699\uFE0F  override existing env vars with { override: true }",
      "\u2699\uFE0F  suppress all logs with { quiet: true }",
      "\u2699\uFE0F  write to custom object with { processEnv: myObject }",
      "\u2699\uFE0F  load multiple .env files with { path: ['.env.local', '.env'] }",
    ];
  function jru() {
    return CMi[Math.floor(Math.random() * CMi.length)];
  }
  function c1e(t) {
    return typeof t == "string" ? !["false", "0", "no", "off", ""].includes(t.toLowerCase()) : !!t;
  }
  function Qru() {
    return process.stdout.isTTY;
  }
  function Gru(t) {
    return Qru() ? `\x1B[2m${t}\x1B[0m` : t;
  }
  var qru =
    /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/gm;
  function Hru(t) {
    let e = {},
      r = t.toString();
    r = r.replace(
      /\r\n?/gm,
      `
`,
    );
    let n;
    for (; (n = qru.exec(r)) != null; ) {
      let o = n[1],
        s = n[2] || "";
      s = s.trim();
      let a = s[0];
      ((s = s.replace(/^(['"`])([\s\S]*)\1$/gm, "$2")),
        a === '"' &&
          ((s = s.replace(
            /\\n/g,
            `
`,
          )),
          (s = s.replace(/\\r/g, "\r"))),
        (e[o] = s));
    }
    return e;
  }
  function Vru(t) {
    t = t || {};
    let e = TMi(t);
    t.path = e;
    let r = Zp.configDotenv(t);
    if (!r.parsed) {
      let a = new Error(`MISSING_DATA: Cannot parse ${e} for an unknown reason`);
      throw ((a.code = "MISSING_DATA"), a);
    }
    let n = xMi(t).split(","),
      o = n.length,
      s;
    for (let a = 0; a < o; a++)
      try {
        let u = n[a].trim(),
          c = zru(r, u);
        s = Zp.decrypt(c.ciphertext, c.key);
        break;
      } catch (u) {
        if (a + 1 >= o) throw u;
      }
    return Zp.parse(s);
  }
  function Wru(t) {
    console.error(`[dotenv@${S8r}][WARN] ${t}`);
  }
  function tTe(t) {
    console.log(`[dotenv@${S8r}][DEBUG] ${t}`);
  }
  function wMi(t) {
    console.log(`[dotenv@${S8r}] ${t}`);
  }
  function xMi(t) {
    return t && t.DOTENV_KEY && t.DOTENV_KEY.length > 0
      ? t.DOTENV_KEY
      : process.env.DOTENV_KEY && process.env.DOTENV_KEY.length > 0
        ? process.env.DOTENV_KEY
        : "";
  }
  function zru(t, e) {
    let r;
    try {
      r = new URL(e);
    } catch (u) {
      if (u.code === "ERR_INVALID_URL") {
        let c = new Error(
          "INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development",
        );
        throw ((c.code = "INVALID_DOTENV_KEY"), c);
      }
      throw u;
    }
    let n = r.password;
    if (!n) {
      let u = new Error("INVALID_DOTENV_KEY: Missing key part");
      throw ((u.code = "INVALID_DOTENV_KEY"), u);
    }
    let o = r.searchParams.get("environment");
    if (!o) {
      let u = new Error("INVALID_DOTENV_KEY: Missing environment part");
      throw ((u.code = "INVALID_DOTENV_KEY"), u);
    }
    let s = `DOTENV_VAULT_${o.toUpperCase()}`,
      a = t.parsed[s];
    if (!a) {
      let u = new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${s} in your .env.vault file.`);
      throw ((u.code = "NOT_FOUND_DOTENV_ENVIRONMENT"), u);
    }
    return { ciphertext: a, key: n };
  }
  function TMi(t) {
    let e = null;
    if (t && t.path && t.path.length > 0)
      if (Array.isArray(t.path))
        for (let r of t.path) C8r.existsSync(r) && (e = r.endsWith(".vault") ? r : `${r}.vault`);
      else e = t.path.endsWith(".vault") ? t.path : `${t.path}.vault`;
    else e = Fht.resolve(process.cwd(), ".env.vault");
    return C8r.existsSync(e) ? e : null;
  }
  function SMi(t) {
    return t[0] === "~" ? Fht.join(Fru.homedir(), t.slice(1)) : t;
  }
  function Yru(t) {
    let e = c1e(process.env.DOTENV_CONFIG_DEBUG || (t && t.debug)),
      r = c1e(process.env.DOTENV_CONFIG_QUIET || (t && t.quiet));
    (e || !r) && wMi("Loading env from encrypted .env.vault");
    let n = Zp._parseVault(t),
      o = process.env;
    return (t && t.processEnv != null && (o = t.processEnv), Zp.populate(o, n, t), { parsed: n });
  }
  function Kru(t) {
    let e = Fht.resolve(process.cwd(), ".env"),
      r = "utf8",
      n = process.env;
    t && t.processEnv != null && (n = t.processEnv);
    let o = c1e(n.DOTENV_CONFIG_DEBUG || (t && t.debug)),
      s = c1e(n.DOTENV_CONFIG_QUIET || (t && t.quiet));
    t && t.encoding ? (r = t.encoding) : o && tTe("No encoding is specified. UTF-8 is used by default");
    let a = [e];
    if (t && t.path)
      if (!Array.isArray(t.path)) a = [SMi(t.path)];
      else {
        a = [];
        for (let d of t.path) a.push(SMi(d));
      }
    let u,
      c = {};
    for (let d of a)
      try {
        let f = Zp.parse(C8r.readFileSync(d, { encoding: r }));
        Zp.populate(c, f, t);
      } catch (f) {
        (o && tTe(`Failed to load ${d} ${f.message}`), (u = f));
      }
    let m = Zp.populate(n, c, t);
    if (((o = c1e(n.DOTENV_CONFIG_DEBUG || o)), (s = c1e(n.DOTENV_CONFIG_QUIET || s)), o || !s)) {
      let d = Object.keys(m).length,
        f = [];
      for (let p of a)
        try {
          let h = Fht.relative(process.cwd(), p);
          f.push(h);
        } catch (h) {
          (o && tTe(`Failed to load ${p} ${h.message}`), (u = h));
        }
      wMi(`injecting env (${d}) from ${f.join(",")} ${Gru(`-- tip: ${jru()}`)}`);
    }
    return u ? { parsed: c, error: u } : { parsed: c };
  }
  function Jru(t) {
    if (xMi(t).length === 0) return Zp.configDotenv(t);
    let e = TMi(t);
    return e
      ? Zp._configVault(t)
      : (Wru(`You set DOTENV_KEY but you are missing a .env.vault file at ${e}. Did you forget to build it?`),
        Zp.configDotenv(t));
  }
  function Xru(t, e) {
    let r = Buffer.from(e.slice(-64), "hex"),
      n = Buffer.from(t, "base64"),
      o = n.subarray(0, 12),
      s = n.subarray(-16);
    n = n.subarray(12, -16);
    try {
      let a = Uru.createDecipheriv("aes-256-gcm", r, o);
      return (a.setAuthTag(s), `${a.update(n)}${a.final()}`);
    } catch (a) {
      let u = a instanceof RangeError,
        c = a.message === "Invalid key length",
        m = a.message === "Unsupported state or unable to authenticate data";
      if (u || c) {
        let d = new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");
        throw ((d.code = "INVALID_DOTENV_KEY"), d);
      } else if (m) {
        let d = new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");
        throw ((d.code = "DECRYPTION_FAILED"), d);
      } else throw a;
    }
  }
  function Zru(t, e, r = {}) {
    let n = !!(r && r.debug),
      o = !!(r && r.override),
      s = {};
    if (typeof e != "object") {
      let a = new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");
      throw ((a.code = "OBJECT_REQUIRED"), a);
    }
    for (let a of Object.keys(e))
      Object.prototype.hasOwnProperty.call(t, a)
        ? (o === !0 && ((t[a] = e[a]), (s[a] = e[a])),
          n &&
            tTe(
              o === !0
                ? `"${a}" is already defined and WAS overwritten`
                : `"${a}" is already defined and was NOT overwritten`,
            ))
        : ((t[a] = e[a]), (s[a] = e[a]));
    return s;
  }
  var Zp = {
    configDotenv: Kru,
    _configVault: Yru,
    _parseVault: Vru,
    config: Jru,
    decrypt: Xru,
    parse: Hru,
    populate: Zru,
  };
  GN.exports.configDotenv = Zp.configDotenv;
  GN.exports._configVault = Zp._configVault;
  GN.exports._parseVault = Zp._parseVault;
  GN.exports.config = Zp.config;
  GN.exports.decrypt = Zp.decrypt;
  GN.exports.parse = Zp.parse;
  GN.exports.populate = Zp.populate;
  GN.exports = Zp;
});
function RMi(t) {
  let e = t.toLowerCase();
  if (e.startsWith("#")) return /^#[0-9A-Fa-f]{3}([0-9A-Fa-f]{3})?$/.test(t) ? e : void 0;
  if (enu.has(e)) return e;
  if (IMi[e]) return IMi[e];
  Ud.warn(`[ColorUtils] Could not resolve color "${t}" to an Ink-compatible format.`);
}
var IMi,
  enu,
  kMi = j(() => {
    "use strict";
    Ot();
    ((IMi = {
      aliceblue: "#f0f8ff",
      antiquewhite: "#faebd7",
      aqua: "#00ffff",
      aquamarine: "#7fffd4",
      azure: "#f0ffff",
      beige: "#f5f5dc",
      bisque: "#ffe4c4",
      blanchedalmond: "#ffebcd",
      blueviolet: "#8a2be2",
      brown: "#a52a2a",
      burlywood: "#deb887",
      cadetblue: "#5f9ea0",
      chartreuse: "#7fff00",
      chocolate: "#d2691e",
      coral: "#ff7f50",
      cornflowerblue: "#6495ed",
      cornsilk: "#fff8dc",
      crimson: "#dc143c",
      darkblue: "#00008b",
      darkcyan: "#008b8b",
      darkgoldenrod: "#b8860b",
      darkgray: "#a9a9a9",
      darkgrey: "#a9a9a9",
      darkgreen: "#006400",
      darkkhaki: "#bdb76b",
      darkmagenta: "#8b008b",
      darkolivegreen: "#556b2f",
      darkorange: "#ff8c00",
      darkorchid: "#9932cc",
      darkred: "#8b0000",
      darksalmon: "#e9967a",
      darkseagreen: "#8fbc8f",
      darkslateblue: "#483d8b",
      darkslategray: "#2f4f4f",
      darkslategrey: "#2f4f4f",
      darkturquoise: "#00ced1",
      darkviolet: "#9400d3",
      deeppink: "#ff1493",
      deepskyblue: "#00bfff",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1e90ff",
      firebrick: "#b22222",
      floralwhite: "#fffaf0",
      forestgreen: "#228b22",
      fuchsia: "#ff00ff",
      gainsboro: "#dcdcdc",
      ghostwhite: "#f8f8ff",
      gold: "#ffd700",
      goldenrod: "#daa520",
      greenyellow: "#adff2f",
      honeydew: "#f0fff0",
      hotpink: "#ff69b4",
      indianred: "#cd5c5c",
      indigo: "#4b0082",
      ivory: "#fffff0",
      khaki: "#f0e68c",
      lavender: "#e6e6fa",
      lavenderblush: "#fff0f5",
      lawngreen: "#7cfc00",
      lemonchiffon: "#fffacd",
      lightblue: "#add8e6",
      lightcoral: "#f08080",
      lightcyan: "#e0ffff",
      lightgoldenrodyellow: "#fafad2",
      lightgray: "#d3d3d3",
      lightgrey: "#d3d3d3",
      lightgreen: "#90ee90",
      lightpink: "#ffb6c1",
      lightsalmon: "#ffa07a",
      lightseagreen: "#20b2aa",
      lightskyblue: "#87cefa",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#b0c4de",
      lightyellow: "#ffffe0",
      lime: "#00ff00",
      limegreen: "#32cd32",
      linen: "#faf0e6",
      maroon: "#800000",
      mediumaquamarine: "#66cdaa",
      mediumblue: "#0000cd",
      mediumorchid: "#ba55d3",
      mediumpurple: "#9370db",
      mediumseagreen: "#3cb371",
      mediumslateblue: "#7b68ee",
      mediumspringgreen: "#00fa9a",
      mediumturquoise: "#48d1cc",
      mediumvioletred: "#c71585",
      midnightblue: "#191970",
      mintcream: "#f5fffa",
      mistyrose: "#ffe4e1",
      moccasin: "#ffe4b5",
      navajowhite: "#ffdead",
      navy: "#000080",
      oldlace: "#fdf5e6",
      olive: "#808000",
      olivedrab: "#6b8e23",
      orange: "#ffa500",
      orangered: "#ff4500",
      orchid: "#da70d6",
      palegoldenrod: "#eee8aa",
      palegreen: "#98fb98",
      paleturquoise: "#afeeee",
      palevioletred: "#db7093",
      papayawhip: "#ffefd5",
      peachpuff: "#ffdab9",
      peru: "#cd853f",
      pink: "#ffc0cb",
      plum: "#dda0dd",
      powderblue: "#b0e0e6",
      purple: "#800080",
      rebeccapurple: "#663399",
      rosybrown: "#bc8f8f",
      royalblue: "#4169e1",
      saddlebrown: "#8b4513",
      salmon: "#fa8072",
      sandybrown: "#f4a460",
      seagreen: "#2e8b57",
      seashell: "#fff5ee",
      sienna: "#a0522d",
      silver: "#c0c0c0",
      skyblue: "#87ceeb",
      slateblue: "#6a5acd",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#fffafa",
      springgreen: "#00ff7f",
      steelblue: "#4682b4",
      tan: "#d2b48c",
      teal: "#008080",
      thistle: "#d8bfd8",
      tomato: "#ff6347",
      turquoise: "#40e0d0",
      violet: "#ee82ee",
      wheat: "#f5deb3",
      whitesmoke: "#f5f5f5",
      yellowgreen: "#9acd32",
    }),
      (enu = new Set([
        "black",
        "red",
        "green",
        "yellow",
        "blue",
        "cyan",
        "magenta",
        "white",
        "gray",
        "grey",
        "blackbright",
        "redbright",
        "greenbright",
        "yellowbright",
        "bluebright",
        "cyanbright",
        "magentabright",
        "whitebright",
      ])));
  });
function w8r(t) {
  let e = {
      type: "custom",
      Background: t.background?.primary ?? t.Background ?? "",
      UserMessageBackground: t.UserMessageBackground ?? "",
      UserMessageColor: t.UserMessageColor ?? "",
      Foreground: t.text?.primary ?? t.Foreground ?? "",
      LightBlue: t.text?.link ?? t.LightBlue ?? "",
      AccentBlue: t.text?.link ?? t.AccentBlue ?? "",
      AccentPurple: t.text?.accent ?? t.AccentPurple ?? "",
      AccentCyan: t.text?.link ?? t.AccentCyan ?? "",
      AccentGreen: t.status?.success ?? t.AccentGreen ?? "",
      AccentYellow: t.status?.warning ?? t.AccentYellow ?? "",
      AccentRed: t.status?.error ?? t.AccentRed ?? "",
      DiffAdded: t.background?.diff?.added ?? t.DiffAdded ?? "",
      DiffRemoved: t.background?.diff?.removed ?? t.DiffRemoved ?? "",
      Comment: t.ui?.comment ?? t.Comment ?? "",
      Gray: t.text?.secondary ?? t.Gray ?? "",
      GradientColors: t.ui?.gradient ?? t.GradientColors,
    },
    r = {
      hljs: { display: "block", overflowX: "auto", padding: "0.5em", background: e.Background, color: e.Foreground },
      "hljs-keyword": { color: e.AccentBlue },
      "hljs-literal": { color: e.AccentBlue },
      "hljs-symbol": { color: e.AccentBlue },
      "hljs-name": { color: e.AccentBlue },
      "hljs-link": { color: e.AccentBlue, textDecoration: "underline" },
      "hljs-built_in": { color: e.AccentCyan },
      "hljs-type": { color: e.AccentCyan },
      "hljs-number": { color: e.AccentGreen },
      "hljs-class": { color: e.AccentGreen },
      "hljs-string": { color: e.AccentYellow },
      "hljs-meta-string": { color: e.AccentYellow },
      "hljs-regexp": { color: e.AccentRed },
      "hljs-template-tag": { color: e.AccentRed },
      "hljs-subst": { color: e.Foreground },
      "hljs-function": { color: e.Foreground },
      "hljs-title": { color: e.Foreground },
      "hljs-params": { color: e.Foreground },
      "hljs-formula": { color: e.Foreground },
      "hljs-comment": { color: e.Comment, fontStyle: "italic" },
      "hljs-quote": { color: e.Comment, fontStyle: "italic" },
      "hljs-doctag": { color: e.Comment },
      "hljs-meta": { color: e.Gray },
      "hljs-meta-keyword": { color: e.Gray },
      "hljs-tag": { color: e.Gray },
      "hljs-variable": { color: e.AccentPurple },
      "hljs-template-variable": { color: e.AccentPurple },
      "hljs-attr": { color: e.LightBlue },
      "hljs-attribute": { color: e.LightBlue },
      "hljs-builtin-name": { color: e.LightBlue },
      "hljs-section": { color: e.AccentYellow },
      "hljs-emphasis": { fontStyle: "italic" },
      "hljs-strong": { fontWeight: "bold" },
      "hljs-bullet": { color: e.AccentYellow },
      "hljs-selector-tag": { color: e.AccentYellow },
      "hljs-selector-id": { color: e.AccentYellow },
      "hljs-selector-class": { color: e.AccentYellow },
      "hljs-selector-attr": { color: e.AccentYellow },
      "hljs-selector-pseudo": { color: e.AccentYellow },
      "hljs-addition": { backgroundColor: e.AccentGreen, display: "inline-block", width: "100%" },
      "hljs-deletion": { backgroundColor: e.AccentRed, display: "inline-block", width: "100%" },
    },
    n = {
      text: {
        primary: t.text?.primary ?? e.Foreground,
        secondary: t.text?.secondary ?? e.Gray,
        link: t.text?.link ?? e.AccentBlue,
        accent: t.text?.accent ?? e.AccentPurple,
      },
      background: {
        primary: t.background?.primary ?? e.Background,
        diff: {
          added: t.background?.diff?.added ?? e.DiffAdded,
          removed: t.background?.diff?.removed ?? e.DiffRemoved,
        },
      },
      border: { default: t.border?.default ?? e.Gray, focused: t.border?.focused ?? e.AccentBlue },
      ui: {
        comment: t.ui?.comment ?? e.Comment,
        symbol: t.ui?.symbol ?? e.Gray,
        gradient: t.ui?.gradient ?? e.GradientColors,
      },
      status: {
        error: t.status?.error ?? e.AccentRed,
        success: t.status?.success ?? e.AccentGreen,
        warning: t.status?.warning ?? e.AccentYellow,
      },
    };
  return new zc(t.name, "custom", r, e, n);
}
function x8r(t) {
  return t.name && !tnu(t.name) ? { isValid: !1, error: `Invalid theme name: ${t.name}` } : { isValid: !0 };
}
function tnu(t) {
  return t.trim().length > 0 && t.trim().length <= 50;
}
var Ic,
  xa,
  zc,
  OA = j(() => {
    "use strict";
    kMi();
    ((Ic = {
      type: "light",
      Background: "#FAFAFA",
      UserMessageBackground: "#f5f5f5",
      UserMessageColor: "#6a6a6a",
      Foreground: "",
      LightBlue: "#89BDCD",
      AccentBlue: "#3B82F6",
      AccentPurple: "#8B5CF6",
      AccentCyan: "#06B6D4",
      AccentGreen: "#3CA84B",
      AccentYellow: "#D5A40A",
      AccentRed: "#DD4C4C",
      DiffAdded: "#C6EAD8",
      DiffRemoved: "#FFCCCC",
      Comment: "#008000",
      Gray: "#97a0b0",
      GradientColors: ["#4796E4", "#847ACE", "#C3677F"],
    }),
      (xa = {
        type: "dark",
        Background: "#1E1E2E",
        UserMessageBackground: "#3C3C3C",
        UserMessageColor: "#c0c0c0",
        Foreground: "",
        LightBlue: "#ADD8E6",
        AccentBlue: "#89B4FA",
        AccentPurple: "#CBA6F7",
        AccentCyan: "#89DCEB",
        AccentGreen: "#A6E3A1",
        AccentYellow: "#F9E2AF",
        AccentRed: "#F38BA8",
        DiffAdded: "#28350B",
        DiffRemoved: "#430000",
        Comment: "#6C7086",
        Gray: "#6C7086",
        GradientColors: ["#4796E4", "#847ACE", "#C3677F"],
      }),
      (zc = class t {
        constructor(e, r, n, o, s) {
          this.name = e;
          this.type = r;
          this.colors = o;
          ((this.semanticColors = s ?? {
            text: {
              primary: this.colors.Foreground,
              secondary: this.colors.Gray,
              link: this.colors.AccentBlue,
              accent: this.colors.AccentPurple,
            },
            background: {
              primary: this.colors.Background,
              diff: { added: this.colors.DiffAdded, removed: this.colors.DiffRemoved },
            },
            border: { default: this.colors.Gray, focused: this.colors.AccentBlue },
            ui: { comment: this.colors.Gray, symbol: this.colors.AccentCyan, gradient: this.colors.GradientColors },
            status: {
              error: this.colors.AccentRed,
              success: this.colors.AccentGreen,
              warning: this.colors.AccentYellow,
            },
          }),
            (this._colorMap = Object.freeze(this._buildColorMap(n))));
          let a = n.hljs?.color;
          this.defaultColor = (a ? t._resolveColor(a) : void 0) ?? "";
        }
        defaultColor;
        _colorMap;
        semanticColors;
        getInkColor(e) {
          return this._colorMap[e];
        }
        static _resolveColor(e) {
          return RMi(e);
        }
        _buildColorMap(e) {
          let r = {};
          for (let n in e) {
            if (!n.startsWith("hljs-") && n !== "hljs") continue;
            let o = e[n];
            if (o?.color) {
              let s = t._resolveColor(o.color);
              s !== void 0 && (r[n] = s);
            }
          }
          return r;
        }
      }));
  });
var rTe,
  T8r = j(() => {
    "use strict";
    OA();
    rTe = new zc(
      "Default Light",
      "light",
      {
        hljs: {
          display: "block",
          overflowX: "auto",
          padding: "0.5em",
          background: Ic.Background,
          color: Ic.Foreground,
        },
        "hljs-comment": { color: Ic.Comment },
        "hljs-quote": { color: Ic.Comment },
        "hljs-variable": { color: Ic.Foreground },
        "hljs-keyword": { color: Ic.AccentBlue },
        "hljs-selector-tag": { color: Ic.AccentBlue },
        "hljs-built_in": { color: Ic.AccentBlue },
        "hljs-name": { color: Ic.AccentBlue },
        "hljs-tag": { color: Ic.AccentBlue },
        "hljs-string": { color: Ic.AccentRed },
        "hljs-title": { color: Ic.AccentRed },
        "hljs-section": { color: Ic.AccentRed },
        "hljs-attribute": { color: Ic.AccentRed },
        "hljs-literal": { color: Ic.AccentRed },
        "hljs-template-tag": { color: Ic.AccentRed },
        "hljs-template-variable": { color: Ic.AccentRed },
        "hljs-type": { color: Ic.AccentRed },
        "hljs-addition": { color: Ic.AccentGreen },
        "hljs-deletion": { color: Ic.AccentRed },
        "hljs-selector-attr": { color: Ic.AccentCyan },
        "hljs-selector-pseudo": { color: Ic.AccentCyan },
        "hljs-meta": { color: Ic.AccentCyan },
        "hljs-doctag": { color: Ic.Gray },
        "hljs-attr": { color: Ic.AccentRed },
        "hljs-symbol": { color: Ic.AccentCyan },
        "hljs-bullet": { color: Ic.AccentCyan },
        "hljs-link": { color: Ic.AccentCyan },
        "hljs-emphasis": { fontStyle: "italic" },
        "hljs-strong": { fontWeight: "bold" },
      },
      Ic,
    );
  });
var l1e,
  D8r = j(() => {
    "use strict";
    OA();
    l1e = new zc(
      "Default",
      "dark",
      {
        hljs: {
          display: "block",
          overflowX: "auto",
          padding: "0.5em",
          background: xa.Background,
          color: xa.Foreground,
        },
        "hljs-keyword": { color: xa.AccentBlue },
        "hljs-literal": { color: xa.AccentBlue },
        "hljs-symbol": { color: xa.AccentBlue },
        "hljs-name": { color: xa.AccentBlue },
        "hljs-link": { color: xa.AccentBlue, textDecoration: "underline" },
        "hljs-built_in": { color: xa.AccentCyan },
        "hljs-type": { color: xa.AccentCyan },
        "hljs-number": { color: xa.AccentGreen },
        "hljs-class": { color: xa.AccentGreen },
        "hljs-string": { color: xa.AccentYellow },
        "hljs-meta-string": { color: xa.AccentYellow },
        "hljs-regexp": { color: xa.AccentRed },
        "hljs-template-tag": { color: xa.AccentRed },
        "hljs-subst": { color: xa.Foreground },
        "hljs-function": { color: xa.Foreground },
        "hljs-title": { color: xa.Foreground },
        "hljs-params": { color: xa.Foreground },
        "hljs-formula": { color: xa.Foreground },
        "hljs-comment": { color: xa.Comment, fontStyle: "italic" },
        "hljs-quote": { color: xa.Comment, fontStyle: "italic" },
        "hljs-doctag": { color: xa.Comment },
        "hljs-meta": { color: xa.Gray },
        "hljs-meta-keyword": { color: xa.Gray },
        "hljs-tag": { color: xa.Gray },
        "hljs-variable": { color: xa.AccentPurple },
        "hljs-template-variable": { color: xa.AccentPurple },
        "hljs-attr": { color: xa.LightBlue },
        "hljs-attribute": { color: xa.LightBlue },
        "hljs-builtin-name": { color: xa.LightBlue },
        "hljs-section": { color: xa.AccentYellow },
        "hljs-emphasis": { fontStyle: "italic" },
        "hljs-strong": { fontWeight: "bold" },
        "hljs-bullet": { color: xa.AccentYellow },
        "hljs-selector-tag": { color: xa.AccentYellow },
        "hljs-selector-id": { color: xa.AccentYellow },
        "hljs-selector-class": { color: xa.AccentYellow },
        "hljs-selector-attr": { color: xa.AccentYellow },
        "hljs-selector-pseudo": { color: xa.AccentYellow },
        "hljs-addition": { backgroundColor: "#144212", display: "inline-block", width: "100%" },
        "hljs-deletion": { backgroundColor: "#600", display: "inline-block", width: "100%" },
      },
      xa,
    );
  });
var LMi = {};
Wi(LMi, {
  LoadedSettings: () => jht,
  SETTINGS_DIRECTORY_NAME: () => SI,
  SettingScope: () => eh,
  USER_SETTINGS_DIR: () => Ght,
  USER_SETTINGS_PATH: () => eJ,
  getSystemSettingsPath: () => NMi,
  loadEnvironment: () => qht,
  loadSettings: () => hu,
  saveSettings: () => BMi,
  setUpCloudShellEnvironment: () => PMi,
});
import * as x1 from "fs";
import * as y5 from "path";
import { homedir as $ht, platform as OMi } from "os";
function NMi() {
  return process.env.IFLOW_CLI_SYSTEM_SETTINGS_PATH
    ? process.env.IFLOW_CLI_SYSTEM_SETTINGS_PATH
    : OMi() === "darwin"
      ? "/Library/Application Support/iFlowCli/settings.json"
      : OMi() === "win32"
        ? "C:\\ProgramData\\iflow-cli\\settings.json"
        : "/etc/iflow-cli/settings.json";
}
function rnu(t) {
  let e = /\$(?:(\w+)|{([^}]+)})/g;
  return t.replace(e, (r, n, o) => {
    let s = n || o;
    return process && process.env && typeof process.env[s] == "string" ? process.env[s] : r;
  });
}
function nTe(t) {
  if (t == null || typeof t == "boolean" || typeof t == "number") return t;
  if (typeof t == "string") return rnu(t);
  if (Array.isArray(t)) return t.map((e) => nTe(e));
  if (typeof t == "object") {
    let e = { ...t };
    for (let r in e) Object.prototype.hasOwnProperty.call(e, r) && (e[r] = nTe(e[r]));
    return e;
  }
  return t;
}
function nnu(t) {
  let e = y5.resolve(t);
  for (;;) {
    let r = y5.join(e, ui(), ".env");
    if (x1.existsSync(r)) return r;
    let n = y5.join(e, ".env");
    if (x1.existsSync(n)) return n;
    let o = y5.dirname(e);
    if (o === e || !o) {
      let s = y5.join($ht(), ui(), ".env");
      if (x1.existsSync(s)) return s;
      let a = y5.join($ht(), ".env");
      return x1.existsSync(a) ? a : null;
    }
    e = o;
  }
}
function PMi(t) {
  if (t && x1.existsSync(t)) {
    let e = x1.readFileSync(t),
      r = Qht.parse(e);
    r.GOOGLE_CLOUD_PROJECT
      ? (process.env.GOOGLE_CLOUD_PROJECT = r.GOOGLE_CLOUD_PROJECT)
      : (process.env.GOOGLE_CLOUD_PROJECT = "cloudshell-gca");
  } else process.env.GOOGLE_CLOUD_PROJECT = "cloudshell-gca";
}
function qht() {
  let t = nnu(process.cwd());
  (process.env.CLOUD_SHELL === "true" && PMi(t), t && Qht.config({ path: t, quiet: !0 }));
}
function hu(t) {
  qht();
  let e = {},
    r = {},
    n = {},
    o = [],
    s = NMi(),
    a = y5.resolve(t),
    u = y5.resolve($ht()),
    c = a;
  try {
    c = x1.realpathSync(a);
  } catch {}
  let m = x1.realpathSync(u);
  try {
    if (x1.existsSync(s)) {
      let f = x1.readFileSync(s, "utf-8"),
        p = JSON.parse((0, Uht.default)(f));
      e = nTe(p);
    }
  } catch (f) {
    o.push({ message: mr(f), path: s });
  }
  try {
    if (x1.existsSync(eJ)) {
      let f = x1.readFileSync(eJ, "utf-8"),
        p = JSON.parse((0, Uht.default)(f));
      ((r = nTe(p)),
        r.theme && r.theme === "VS" ? (r.theme = rTe.name) : r.theme && r.theme === "VS2015" && (r.theme = l1e.name),
        "multimodalModelName" in r && delete r.multimodalModelName);
    }
  } catch (f) {
    o.push({ message: mr(f), path: eJ });
  }
  let d = y5.join(t, SI, "settings.json");
  if (c !== m)
    try {
      if (x1.existsSync(d)) {
        let f = x1.readFileSync(d, "utf-8"),
          p = JSON.parse((0, Uht.default)(f));
        ((n = nTe(p)),
          n.theme && n.theme === "VS" ? (n.theme = rTe.name) : n.theme && n.theme === "VS2015" && (n.theme = l1e.name),
          "multimodalModelName" in n && delete n.multimodalModelName);
      }
    } catch (f) {
      o.push({ message: mr(f), path: d });
    }
  return new jht({ path: s, settings: e }, { path: eJ, settings: r }, { path: d, settings: n }, o);
}
function BMi(t) {
  try {
    let e = y5.dirname(t.path);
    (x1.existsSync(e) || x1.mkdirSync(e, { recursive: !0 }),
      x1.writeFileSync(t.path, JSON.stringify(t.settings, null, 2), "utf-8"));
  } catch (e) {
    console.error("Error saving user settings file:", e);
  }
}
var Qht,
  Uht,
  SI,
  Ght,
  eJ,
  eh,
  jht,
  dc = j(() => {
    "use strict";
    Qht = Se(DMi(), 1);
    Ot();
    Uht = Se(Ffr(), 1);
    T8r();
    D8r();
    ((SI = ui()), (Ght = y5.join($ht(), SI)), (eJ = y5.join(Ght, "settings.json")));
    ((eh = ((n) => ((n.User = "User"), (n.Workspace = "Workspace"), (n.System = "System"), n))(eh || {})),
      (jht = class {
        constructor(e, r, n, o) {
          ((this.system = e),
            (this.user = r),
            (this.workspace = n),
            (this.errors = o),
            (this._merged = this.computeMergedSettings()));
        }
        system;
        user;
        workspace;
        errors;
        _merged;
        get merged() {
          return this._merged;
        }
        computeMergedSettings() {
          let e = this.system.settings,
            r = this.user.settings,
            n = this.workspace.settings,
            o = zOt();
          return {
            ...r,
            ...n,
            ...e,
            ...o,
            outputLimit: n.outputLimit ?? r.outputLimit ?? e.outputLimit ?? o.outputLimit ?? !0,
            customThemes: {
              ...(r.customThemes || {}),
              ...(n.customThemes || {}),
              ...(e.customThemes || {}),
              ...(o.customThemes || {}),
            },
            mcpServers: {
              ...(r.mcpServers || {}),
              ...(n.mcpServers || {}),
              ...(e.mcpServers || {}),
              ...(o.mcpServers || {}),
            },
            checkpointing: {
              ...(r.checkpointing || {}),
              ...(n.checkpointing || {}),
              ...(e.checkpointing || {}),
              ...(o.checkpointing || {}),
            },
          };
        }
        forScope(e) {
          switch (e) {
            case "User":
              return this.user;
            case "Workspace":
              return this.workspace;
            case "System":
              return this.system;
            default:
              throw new Error(`Invalid scope: ${e}`);
          }
        }
        setValue(e, r, n) {
          let o = this.forScope(e);
          ((o.settings[r] = n), (this._merged = this.computeMergedSettings()), BMi(o));
        }
      }));
  });