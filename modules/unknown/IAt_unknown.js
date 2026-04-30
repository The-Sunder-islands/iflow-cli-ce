/**
 * @module IAt
 * @category unknown
 * @label unknown
 * @position 1982 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (IAt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var IAt = T((qIl, _no) => {
  "use strict";
  _no.exports = wbu;
  function wbu(t, e) {
    if (t.pos == null || t.line == null) return t;
    let r = t.message;
    if (
      ((r += ` at row ${t.line + 1}, col ${t.col + 1}, pos ${t.pos}:
`),
      e && e.split)
    ) {
      let n = e.split(/\n/),
        o = String(Math.min(n.length, t.line + 3)).length,
        s = " ";
      for (; s.length < o; ) s += " ";
      for (let a = Math.max(0, t.line - 1); a < Math.min(n.length, t.line + 2); ++a) {
        let u = String(a + 1);
        if ((u.length < o && (u = " " + u), t.line === a)) {
          ((r +=
            u +
            "> " +
            n[a] +
            `
`),
            (r += s + "  "));
          for (let c = 0; c < t.col; ++c) r += " ";
          r += `^
`;
        } else
          r +=
            u +
            ": " +
            n[a] +
            `
`;
      }
    }
    return (
      (t.message =
        r +
        `
`),
      t
    );
  }
});