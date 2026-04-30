/**
 * @module vZt
 * @category utils/oop
 * @label oop
 * @position 1302 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (vZt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var vZt = T((Ctt) => {
  "use strict";
  Object.defineProperty(Ctt, "__esModule", { value: !0 });
  Ctt.Scanner = void 0;
  var pBn = OF(),
    S$s = /((?:\r\n)|\n|\r)/,
    EZt = class {
      constructor(e) {
        ((this.cursor = 0),
          (this.line = e.line),
          (this.lineLength = this.line.length),
          (this.parserOptions = e.parserOptions),
          (this.hasMoreData = e.hasMoreData),
          (this.cursor = e.cursor || 0));
      }
      get hasMoreCharacters() {
        return this.lineLength > this.cursor;
      }
      get nextNonSpaceToken() {
        let { lineFromCursor: e } = this,
          r = this.parserOptions.NEXT_TOKEN_REGEXP;
        if (e.search(r) === -1) return null;
        let n = r.exec(e);
        if (n == null) return null;
        let o = n[1],
          s = this.cursor + (n.index || 0);
        return new pBn.Token({ token: o, startCursor: s, endCursor: s + o.length - 1 });
      }
      get nextCharacterToken() {
        let { cursor: e, lineLength: r } = this;
        return r <= e ? null : new pBn.Token({ token: this.line[e], startCursor: e, endCursor: e });
      }
      get lineFromCursor() {
        return this.line.substr(this.cursor);
      }
      advancePastLine() {
        let e = S$s.exec(this.lineFromCursor);
        return e
          ? ((this.cursor += (e.index || 0) + e[0].length), this)
          : this.hasMoreData
            ? null
            : ((this.cursor = this.lineLength), this);
      }
      advanceTo(e) {
        return ((this.cursor = e), this);
      }
      advanceToToken(e) {
        return ((this.cursor = e.startCursor), this);
      }
      advancePastToken(e) {
        return ((this.cursor = e.endCursor + 1), this);
      }
      truncateToCursor() {
        return ((this.line = this.lineFromCursor), (this.lineLength = this.line.length), (this.cursor = 0), this);
      }
    };
  Ctt.Scanner = EZt;
});