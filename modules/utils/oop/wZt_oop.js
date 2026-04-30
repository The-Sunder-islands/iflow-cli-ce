/**
 * @module wZt
 * @category utils/oop
 * @label oop
 * @position 1304 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (wZt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var wZt = T((xtt) => {
  "use strict";
  Object.defineProperty(xtt, "__esModule", { value: !0 });
  xtt.NonQuotedColumnParser = void 0;
  var w$s = wtt(),
    hBn = OF(),
    SZt = class {
      constructor(e) {
        ((this.parserOptions = e), (this.columnFormatter = new w$s.ColumnFormatter(e)));
      }
      parse(e) {
        if (!e.hasMoreCharacters) return null;
        let { parserOptions: r } = this,
          n = [],
          o = e.nextCharacterToken;
        for (; o && !(hBn.Token.isTokenDelimiter(o, r) || hBn.Token.isTokenRowDelimiter(o)); o = e.nextCharacterToken)
          (n.push(o.token), e.advancePastToken(o));
        return this.columnFormatter.format(n.join(""));
      }
    };
  xtt.NonQuotedColumnParser = SZt;
});