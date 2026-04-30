/**
 * @module ABn
 * @category utils/oop
 * @label oop
 * @position 1309 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ABn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ABn = T((Rtt) => {
  "use strict";
  Object.defineProperty(Rtt, "__esModule", { value: !0 });
  Rtt.Parser = void 0;
  var B$s = vZt(),
    bBn = OZt(),
    L$s = OF(),
    NZt = class t {
      constructor(e) {
        ((this.parserOptions = e), (this.rowParser = new bBn.RowParser(this.parserOptions)));
      }
      static removeBOM(e) {
        return e && e.charCodeAt(0) === 65279 ? e.slice(1) : e;
      }
      parse(e, r) {
        let n = new B$s.Scanner({ line: t.removeBOM(e), parserOptions: this.parserOptions, hasMoreData: r });
        return this.parserOptions.supportsComments ? this.parseWithComments(n) : this.parseWithoutComments(n);
      }
      parseWithoutComments(e) {
        let r = [],
          n = !0;
        for (; n; ) n = this.parseRow(e, r);
        return { line: e.line, rows: r };
      }
      parseWithComments(e) {
        let { parserOptions: r } = this,
          n = [];
        for (let o = e.nextCharacterToken; o !== null; o = e.nextCharacterToken)
          if (L$s.Token.isTokenComment(o, r)) {
            if (e.advancePastLine() === null) return { line: e.lineFromCursor, rows: n };
            if (!e.hasMoreCharacters) return { line: e.lineFromCursor, rows: n };
            e.truncateToCursor();
          } else if (!this.parseRow(e, n)) break;
        return { line: e.line, rows: n };
      }
      parseRow(e, r) {
        if (!e.nextNonSpaceToken) return !1;
        let o = this.rowParser.parse(e);
        return o === null ? !1 : ((this.parserOptions.ignoreEmpty && bBn.RowParser.isEmptyRow(o)) || r.push(o), !0);
      }
    };
  Rtt.Parser = NZt;
});