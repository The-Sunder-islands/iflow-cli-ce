/**
 * @module uHi
 * @category unknown
 * @label unknown
 * @position 1899 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (uHi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var uHi = T((Wfl, aHi) => {
  "use strict";
  var slu = (t, e, r) => {
      let n = t.indexOf(e);
      if (n === -1) return t;
      let o = e.length,
        s = 0,
        a = "";
      do ((a += t.substr(s, n - s) + e + r), (s = n + o), (n = t.indexOf(e, s)));
      while (n !== -1);
      return ((a += t.substr(s)), a);
    },
    alu = (t, e, r, n) => {
      let o = 0,
        s = "";
      do {
        let a = t[n - 1] === "\r";
        ((s +=
          t.substr(o, (a ? n - 1 : n) - o) +
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
      return ((s += t.substr(o)), s);
    };
  aHi.exports = { stringReplaceAll: slu, stringEncaseCRLFWithFirstIndex: alu };
});