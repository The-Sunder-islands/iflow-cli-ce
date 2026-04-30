/**
 * @module TZt
 * @category utils/oop
 * @label oop
 * @position 1305 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (TZt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var TZt = T((Ttt) => {
  "use strict";
  Object.defineProperty(Ttt, "__esModule", { value: !0 });
  Ttt.QuotedColumnParser = void 0;
  var x$s = wtt(),
    Lue = OF(),
    xZt = class {
      constructor(e) {
        ((this.parserOptions = e), (this.columnFormatter = new x$s.ColumnFormatter(e)));
      }
      parse(e) {
        if (!e.hasMoreCharacters) return null;
        let r = e.cursor,
          { foundClosingQuote: n, col: o } = this.gatherDataBetweenQuotes(e);
        if (!n) {
          if ((e.advanceTo(r), !e.hasMoreData))
            throw new Error(
              `Parse Error: missing closing: '${this.parserOptions.quote || ""}' in line: at '${e.lineFromCursor.replace(/[\r\n]/g, "\\n'")}'`,
            );
          return null;
        }
        return (this.checkForMalformedColumn(e), o);
      }
      gatherDataBetweenQuotes(e) {
        let { parserOptions: r } = this,
          n = !1,
          o = !1,
          s = [],
          a = e.nextCharacterToken;
        for (; !o && a !== null; a = e.nextCharacterToken) {
          let u = Lue.Token.isTokenQuote(a, r);
          if (!n && u) n = !0;
          else if (n)
            if (Lue.Token.isTokenEscapeCharacter(a, r)) {
              e.advancePastToken(a);
              let c = e.nextCharacterToken;
              c !== null && (Lue.Token.isTokenQuote(c, r) || Lue.Token.isTokenEscapeCharacter(c, r))
                ? (s.push(c.token), (a = c))
                : u
                  ? (o = !0)
                  : s.push(a.token);
            } else u ? (o = !0) : s.push(a.token);
          e.advancePastToken(a);
        }
        return { col: this.columnFormatter.format(s.join("")), foundClosingQuote: o };
      }
      checkForMalformedColumn(e) {
        let { parserOptions: r } = this,
          { nextNonSpaceToken: n } = e;
        if (n) {
          let o = Lue.Token.isTokenDelimiter(n, r),
            s = Lue.Token.isTokenRowDelimiter(n);
          if (!(o || s)) {
            let a = e.lineFromCursor.substr(0, 10).replace(/[\r\n]/g, "\\n'");
            throw new Error(`Parse Error: expected: '${r.escapedDelimiter}' OR new line got: '${n.token}'. at '${a}`);
          }
          e.advanceToToken(n);
        } else e.hasMoreData || e.advancePastLine();
      }
    };
  Ttt.QuotedColumnParser = xZt;
});