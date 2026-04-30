/**
 * @module kxr
 * @category unknown
 * @label unknown
 * @position 23 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (kxr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var kxr = T((_yu, Rxr) => {
  "use strict";
  var { tokenChars: N0o } = iee();
  function P0o(t) {
    let e = new Set(),
      r = -1,
      n = -1,
      o = 0;
    for (o; o < t.length; o++) {
      let a = t.charCodeAt(o);
      if (n === -1 && N0o[a] === 1) r === -1 && (r = o);
      else if (o !== 0 && (a === 32 || a === 9)) n === -1 && r !== -1 && (n = o);
      else if (a === 44) {
        if (r === -1) throw new SyntaxError(`Unexpected character at index ${o}`);
        n === -1 && (n = o);
        let u = t.slice(r, n);
        if (e.has(u)) throw new SyntaxError(`The "${u}" subprotocol is duplicated`);
        (e.add(u), (r = n = -1));
      } else throw new SyntaxError(`Unexpected character at index ${o}`);
    }
    if (r === -1 || n !== -1) throw new SyntaxError("Unexpected end of input");
    let s = t.slice(r, o);
    if (e.has(s)) throw new SyntaxError(`The "${s}" subprotocol is duplicated`);
    return (e.add(s), e);
  }
  Rxr.exports = { parse: P0o };
});