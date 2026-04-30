/**
 * @module hyr
 * @category ui/terminal
 * @label terminal
 * @position 1901 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (hyr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var hyr = T((Yfl, yHi) => {
  "use strict";
  var VTe = tHi(),
    { stdout: myr, stderr: dyr } = sHi(),
    { stringReplaceAll: plu, stringEncaseCRLFWithFirstIndex: hlu } = uHi(),
    { isArray: fgt } = Array,
    hHi = ["ansi", "ansi", "ansi256", "ansi16m"],
    H1e = Object.create(null),
    glu = (t, e = {}) => {
      if (e.level && !(Number.isInteger(e.level) && e.level >= 0 && e.level <= 3))
        throw new Error("The `level` option should be an integer from 0 to 3");
      let r = myr ? myr.level : 0;
      t.level = e.level === void 0 ? r : e.level;
    },
    fyr = class {
      constructor(e) {
        return gHi(e);
      }
    },
    gHi = (t) => {
      let e = {};
      return (
        glu(e, t),
        (e.template = (...r) => AHi(e.template, ...r)),
        Object.setPrototypeOf(e, pgt.prototype),
        Object.setPrototypeOf(e.template, e),
        (e.template.constructor = () => {
          throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.");
        }),
        (e.template.Instance = fyr),
        e.template
      );
    };
  function pgt(t) {
    return gHi(t);
  }
  for (let [t, e] of Object.entries(VTe))
    H1e[t] = {
      get() {
        let r = hgt(this, pyr(e.open, e.close, this._styler), this._isEmpty);
        return (Object.defineProperty(this, t, { value: r }), r);
      },
    };
  H1e.visible = {
    get() {
      let t = hgt(this, this._styler, !0);
      return (Object.defineProperty(this, "visible", { value: t }), t);
    },
  };
  var bHi = ["rgb", "hex", "keyword", "hsl", "hsv", "hwb", "ansi", "ansi256"];
  for (let t of bHi)
    H1e[t] = {
      get() {
        let { level: e } = this;
        return function (...r) {
          let n = pyr(VTe.color[hHi[e]][t](...r), VTe.color.close, this._styler);
          return hgt(this, n, this._isEmpty);
        };
      },
    };
  for (let t of bHi) {
    let e = "bg" + t[0].toUpperCase() + t.slice(1);
    H1e[e] = {
      get() {
        let { level: r } = this;
        return function (...n) {
          let o = pyr(VTe.bgColor[hHi[r]][t](...n), VTe.bgColor.close, this._styler);
          return hgt(this, o, this._isEmpty);
        };
      },
    };
  }
  var blu = Object.defineProperties(() => {}, {
      ...H1e,
      level: {
        enumerable: !0,
        get() {
          return this._generator.level;
        },
        set(t) {
          this._generator.level = t;
        },
      },
    }),
    pyr = (t, e, r) => {
      let n, o;
      return (
        r === void 0 ? ((n = t), (o = e)) : ((n = r.openAll + t), (o = e + r.closeAll)),
        { open: t, close: e, openAll: n, closeAll: o, parent: r }
      );
    },
    hgt = (t, e, r) => {
      let n = (...o) =>
        fgt(o[0]) && fgt(o[0].raw) ? pHi(n, AHi(n, ...o)) : pHi(n, o.length === 1 ? "" + o[0] : o.join(" "));
      return (Object.setPrototypeOf(n, blu), (n._generator = t), (n._styler = e), (n._isEmpty = r), n);
    },
    pHi = (t, e) => {
      if (t.level <= 0 || !e) return t._isEmpty ? "" : e;
      let r = t._styler;
      if (r === void 0) return e;
      let { openAll: n, closeAll: o } = r;
      if (e.indexOf("\x1B") !== -1) for (; r !== void 0; ) ((e = plu(e, r.close, r.open)), (r = r.parent));
      let s = e.indexOf(`
`);
      return (s !== -1 && (e = hlu(e, o, n, s)), n + e + o);
    },
    lyr,
    AHi = (t, ...e) => {
      let [r] = e;
      if (!fgt(r) || !fgt(r.raw)) return e.join(" ");
      let n = e.slice(1),
        o = [r.raw[0]];
      for (let s = 1; s < r.length; s++) o.push(String(n[s - 1]).replace(/[{}\\]/g, "\\$&"), String(r.raw[s]));
      return (lyr === void 0 && (lyr = fHi()), lyr(t, o.join("")));
    };
  Object.defineProperties(pgt.prototype, H1e);
  var ggt = pgt();
  ggt.supportsColor = myr;
  ggt.stderr = pgt({ level: dyr ? dyr.level : 0 });
  ggt.stderr.supportsColor = dyr;
  yHi.exports = ggt;
});