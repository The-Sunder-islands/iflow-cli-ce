/**
 * @module OF
 * @category utils/oop
 * @label oop
 * @position 1301 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (OF) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var OF = T((vtt) => {
  "use strict";
  Object.defineProperty(vtt, "__esModule", { value: !0 });
  vtt.Token = void 0;
  var _Zt = class {
    constructor(e) {
      ((this.token = e.token), (this.startCursor = e.startCursor), (this.endCursor = e.endCursor));
    }
    static isTokenRowDelimiter(e) {
      let r = e.token;
      return (
        r === "\r" ||
        r ===
          `
` ||
        r ===
          `\r
`
      );
    }
    static isTokenCarriageReturn(e, r) {
      return e.token === r.carriageReturn;
    }
    static isTokenComment(e, r) {
      return r.supportsComments && !!e && e.token === r.comment;
    }
    static isTokenEscapeCharacter(e, r) {
      return e.token === r.escapeChar;
    }
    static isTokenQuote(e, r) {
      return e.token === r.quote;
    }
    static isTokenDelimiter(e, r) {
      return e.token === r.delimiter;
    }
  };
  vtt.Token = _Zt;
});