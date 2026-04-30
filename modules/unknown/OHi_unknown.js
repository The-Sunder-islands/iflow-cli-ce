/**
 * @module OHi
 * @category unknown
 * @label unknown
 * @position 1904 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (OHi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var OHi = T((Jfl, bgt) => {
  "use strict";
  var IHi = hyr(),
    Alu = THi(),
    DHi = /\s/g;
  function vyr(...t) {
    let e = Alu.apply(this, t),
      r = (n, o) => ylu(n ? n.toString() : "", e, o);
    return ((r.multiline = (n, o) => _lu(n ? n.toString() : "", e, o)), r);
  }
  var RHi = (t, e, r) => (e.interpolation.toLowerCase() === "hsv" ? t.hsv(r, e.hsvSpin.toLowerCase()) : t.rgb(r));
  function ylu(t, e, r) {
    let n = kHi(r),
      o = Math.max(t.replace(DHi, "").length, e.stops.length),
      s = RHi(e, n, o),
      a = "";
    for (let u of t) a += u.match(DHi) ? u : IHi.hex(s.shift().toHex())(u);
    return a;
  }
  function _lu(t, e, r) {
    let n = kHi(r),
      o = t.split(`
`),
      s = Math.max.apply(null, o.map((c) => c.length).concat([e.stops.length])),
      a = RHi(e, n, s),
      u = [];
    for (let c of o) {
      let m = a.slice(0),
        d = "";
      for (let f of c) d += IHi.hex(m.shift().toHex())(f);
      u.push(d);
    }
    return u.join(`
`);
  }
  function kHi(t) {
    let e = { interpolation: "rgb", hsvSpin: "short", ...t };
    if (t !== void 0 && typeof t != "object")
      throw new TypeError(`Expected \`options\` to be an \`object\`, got \`${typeof t}\``);
    if (typeof e.interpolation != "string")
      throw new TypeError(`Expected \`options.interpolation\` to be a \`string\`, got \`${typeof e.interpolation}\``);
    if (e.interpolation.toLowerCase() === "hsv" && typeof e.hsvSpin != "string")
      throw new TypeError(`Expected \`options.hsvSpin\` to be a \`string\`, got \`${typeof e.hsvSpin}\``);
    return e;
  }
  var zTe = {
    atlas: { colors: ["#feac5e", "#c779d0", "#4bc0c8"], options: {} },
    cristal: { colors: ["#bdfff3", "#4ac29a"], options: {} },
    teen: { colors: ["#77a1d3", "#79cbca", "#e684ae"], options: {} },
    mind: { colors: ["#473b7b", "#3584a7", "#30d2be"], options: {} },
    morning: { colors: ["#ff5f6d", "#ffc371"], options: { interpolation: "hsv" } },
    vice: { colors: ["#5ee7df", "#b490ca"], options: { interpolation: "hsv" } },
    passion: { colors: ["#f43b47", "#453a94"], options: {} },
    fruit: { colors: ["#ff4e50", "#f9d423"], options: {} },
    instagram: { colors: ["#833ab4", "#fd1d1d", "#fcb045"], options: {} },
    retro: {
      colors: ["#3f51b1", "#5a55ae", "#7b5fac", "#8f6aae", "#a86aa4", "#cc6b8e", "#f18271", "#f3a469", "#f7c978"],
      options: {},
    },
    summer: { colors: ["#fdbb2d", "#22c1c3"], options: {} },
    rainbow: { colors: ["#ff0000", "#ff0100"], options: { interpolation: "hsv", hsvSpin: "long" } },
    pastel: { colors: ["#74ebd5", "#74ecd5"], options: { interpolation: "hsv", hsvSpin: "long" } },
  };
  bgt.exports = vyr;
  for (let t in zTe)
    ((bgt.exports[t] = (e) => new vyr(zTe[t].colors)(e, zTe[t].options)),
      (bgt.exports[t].multiline = (e) => new vyr(zTe[t].colors).multiline(e, zTe[t].options)));
});
var V1e,
  FA,
  fw = j(() => {
    "use strict";
    ((V1e = (t) => {
      let e = t / 1073741824;
      return t < 1048576
        ? `${(t / 1024).toFixed(1)} KB`
        : t < 1073741824
          ? `${(t / 1048576).toFixed(1)} MB`
          : `${e.toFixed(2)} GB`;
    }),
      (FA = (t) => {
        if (t <= 0) return "0s";
        if (t < 1e3) return `${Math.round(t)}ms`;
        let e = t / 1e3;
        if (e < 60) return `${e.toFixed(1)}s`;
        let r = Math.floor(e / 3600),
          n = Math.floor((e % 3600) / 60),
          o = Math.floor(e % 60),
          s = [];
        return (
          r > 0 && s.push(`${r}h`),
          n > 0 && s.push(`${n}m`),
          o > 0 && s.push(`${o}s`),
          s.length === 0 ? (r > 0 ? `${r}h` : n > 0 ? `${n}m` : `${o}s`) : s.join(" ")
        );
      }));
  });