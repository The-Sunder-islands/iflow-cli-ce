/**
 * @module OZt
 * @category utils/oop
 * @label oop
 * @position 1308 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (OZt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var OZt = T((Itt) => {
  "use strict";
  Object.defineProperty(Itt, "__esModule", { value: !0 });
  Itt.RowParser = void 0;
  var P$s = IZt(),
    Mue = OF(),
    RZt = "",
    kZt = class {
      constructor(e) {
        ((this.parserOptions = e), (this.columnParser = new P$s.ColumnParser(e)));
      }
      static isEmptyRow(e) {
        return e.join(RZt).replace(/\s+/g, RZt) === RZt;
      }
      parse(e) {
        let { parserOptions: r } = this,
          { hasMoreData: n } = e,
          o = e,
          s = [],
          a = this.getStartToken(o, s);
        for (; a; ) {
          if (Mue.Token.isTokenRowDelimiter(a))
            return (
              o.advancePastToken(a),
              !o.hasMoreCharacters && Mue.Token.isTokenCarriageReturn(a, r) && n ? null : (o.truncateToCursor(), s)
            );
          if (!this.shouldSkipColumnParse(o, a, s)) {
            let u = this.columnParser.parse(o);
            if (u === null) return null;
            s.push(u);
          }
          a = o.nextNonSpaceToken;
        }
        return n ? null : (o.truncateToCursor(), s);
      }
      getStartToken(e, r) {
        let n = e.nextNonSpaceToken;
        return n !== null && Mue.Token.isTokenDelimiter(n, this.parserOptions) ? (r.push(""), e.nextNonSpaceToken) : n;
      }
      shouldSkipColumnParse(e, r, n) {
        let { parserOptions: o } = this;
        if (Mue.Token.isTokenDelimiter(r, o)) {
          e.advancePastToken(r);
          let s = e.nextCharacterToken;
          if (
            !e.hasMoreCharacters ||
            (s !== null && Mue.Token.isTokenRowDelimiter(s)) ||
            (s !== null && Mue.Token.isTokenDelimiter(s, o))
          )
            return (n.push(""), !0);
        }
        return !1;
      }
    };
  Itt.RowParser = kZt;
});