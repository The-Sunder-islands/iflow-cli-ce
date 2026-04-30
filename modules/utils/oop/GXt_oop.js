/**
 * @module GXt
 * @category utils/oop
 * @label oop
 * @position 1287 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (GXt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var GXt = T((Eue) => {
  "use strict";
  var QXt =
    (Eue && Eue.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
  Object.defineProperty(Eue, "__esModule", { value: !0 });
  Eue.FieldFormatter = void 0;
  var aMs = QXt(aPn()),
    uMs = QXt(UXt()),
    cMs = QXt($Xt()),
    jXt = class {
      constructor(e) {
        ((this._headers = null),
          (this.formatterOptions = e),
          e.headers !== null && (this.headers = e.headers),
          (this.REPLACE_REGEXP = new RegExp(e.quote, "g")));
        let r = `[${e.delimiter}${cMs.default(e.rowDelimiter)}|\r|
]`;
        this.ESCAPE_REGEXP = new RegExp(r);
      }
      set headers(e) {
        this._headers = e;
      }
      shouldQuote(e, r) {
        let n = r ? this.formatterOptions.quoteHeaders : this.formatterOptions.quoteColumns;
        return aMs.default(n) ? n : Array.isArray(n) ? n[e] : this._headers !== null ? n[this._headers[e]] : !1;
      }
      format(e, r, n) {
        let o = `${uMs.default(e) ? "" : e}`.replace(/\0/g, ""),
          { formatterOptions: s } = this;
        return s.quote !== "" && o.indexOf(s.quote) !== -1
          ? this.quoteField(o.replace(this.REPLACE_REGEXP, s.escapedQuote))
          : o.search(this.ESCAPE_REGEXP) !== -1 || this.shouldQuote(r, n)
            ? this.quoteField(o)
            : o;
      }
      quoteField(e) {
        let { quote: r } = this.formatterOptions;
        return `${r}${e}${r}`;
      }
    };
  Eue.FieldFormatter = jXt;
});