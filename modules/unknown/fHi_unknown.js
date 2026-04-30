/**
 * @module fHi
 * @category unknown
 * @label unknown
 * @position 1900 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (fHi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var fHi = T((zfl, dHi) => {
  "use strict";
  var ulu =
      /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,
    cHi = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,
    clu = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,
    llu = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi,
    mlu = new Map([
      [
        "n",
        `
`,
      ],
      ["r", "\r"],
      ["t", "	"],
      ["b", "\b"],
      ["f", "\f"],
      ["v", "\v"],
      ["0", "\0"],
      ["\\", "\\"],
      ["e", "\x1B"],
      ["a", "\x07"],
    ]);
  function mHi(t) {
    let e = t[0] === "u",
      r = t[1] === "{";
    return (e && !r && t.length === 5) || (t[0] === "x" && t.length === 3)
      ? String.fromCharCode(parseInt(t.slice(1), 16))
      : e && r
        ? String.fromCodePoint(parseInt(t.slice(2, -1), 16))
        : mlu.get(t) || t;
  }
  function dlu(t, e) {
    let r = [],
      n = e.trim().split(/\s*,\s*/g),
      o;
    for (let s of n) {
      let a = Number(s);
      if (!Number.isNaN(a)) r.push(a);
      else if ((o = s.match(clu))) r.push(o[2].replace(llu, (u, c, m) => (c ? mHi(c) : m)));
      else throw new Error(`Invalid Chalk template style argument: ${s} (in style '${t}')`);
    }
    return r;
  }
  function flu(t) {
    cHi.lastIndex = 0;
    let e = [],
      r;
    for (; (r = cHi.exec(t)) !== null; ) {
      let n = r[1];
      if (r[2]) {
        let o = dlu(n, r[2]);
        e.push([n].concat(o));
      } else e.push([n]);
    }
    return e;
  }
  function lHi(t, e) {
    let r = {};
    for (let o of e) for (let s of o.styles) r[s[0]] = o.inverse ? null : s.slice(1);
    let n = t;
    for (let [o, s] of Object.entries(r))
      if (Array.isArray(s)) {
        if (!(o in n)) throw new Error(`Unknown Chalk style: ${o}`);
        n = s.length > 0 ? n[o](...s) : n[o];
      }
    return n;
  }
  dHi.exports = (t, e) => {
    let r = [],
      n = [],
      o = [];
    if (
      (e.replace(ulu, (s, a, u, c, m, d) => {
        if (a) o.push(mHi(a));
        else if (c) {
          let f = o.join("");
          ((o = []), n.push(r.length === 0 ? f : lHi(t, r)(f)), r.push({ inverse: u, styles: flu(c) }));
        } else if (m) {
          if (r.length === 0) throw new Error("Found extraneous } in Chalk template literal");
          (n.push(lHi(t, r)(o.join(""))), (o = []), r.pop());
        } else o.push(d);
      }),
      n.push(o.join("")),
      r.length > 0)
    ) {
      let s = `Chalk template literal is missing ${r.length} closing bracket${r.length === 1 ? "" : "s"} (\`}\`)`;
      throw new Error(s);
    }
    return n.join("");
  };
});