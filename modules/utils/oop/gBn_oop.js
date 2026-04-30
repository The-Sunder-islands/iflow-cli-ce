/**
 * @module gBn
 * @category utils/oop
 * @label oop
 * @position 1306 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (gBn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var gBn = T((Dtt) => {
  "use strict";
  Object.defineProperty(Dtt, "__esModule", { value: !0 });
  Dtt.ColumnParser = void 0;
  var T$s = wZt(),
    D$s = TZt(),
    I$s = OF(),
    DZt = class {
      constructor(e) {
        ((this.parserOptions = e),
          (this.quotedColumnParser = new D$s.QuotedColumnParser(e)),
          (this.nonQuotedColumnParser = new T$s.NonQuotedColumnParser(e)));
      }
      parse(e) {
        let { nextNonSpaceToken: r } = e;
        return r !== null && I$s.Token.isTokenQuote(r, this.parserOptions)
          ? (e.advanceToToken(r), this.quotedColumnParser.parse(e))
          : this.nonQuotedColumnParser.parse(e);
      }
    };
  Dtt.ColumnParser = DZt;
});