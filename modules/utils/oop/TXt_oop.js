/**
 * @module TXt
 * @category utils/oop
 * @label oop
 * @position 1282 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (TXt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var TXt = T((Qet) => {
  "use strict";
  Object.defineProperty(Qet, "__esModule", { value: !0 });
  Qet.FormatterOptions = void 0;
  var xXt = class {
    constructor(e = {}) {
      var r;
      ((this.objectMode = !0),
        (this.delimiter = ","),
        (this.rowDelimiter = `
`),
        (this.quote = '"'),
        (this.escape = this.quote),
        (this.quoteColumns = !1),
        (this.quoteHeaders = this.quoteColumns),
        (this.headers = null),
        (this.includeEndRowDelimiter = !1),
        (this.writeBOM = !1),
        (this.BOM = "\uFEFF"),
        (this.alwaysWriteHeaders = !1),
        Object.assign(this, e || {}),
        typeof e?.quoteHeaders > "u" && (this.quoteHeaders = this.quoteColumns),
        e?.quote === !0 ? (this.quote = '"') : e?.quote === !1 && (this.quote = ""),
        typeof e?.escape != "string" && (this.escape = this.quote),
        (this.shouldWriteHeaders = !!this.headers && ((r = e.writeHeaders) !== null && r !== void 0 ? r : !0)),
        (this.headers = Array.isArray(this.headers) ? this.headers : null),
        (this.escapedQuote = `${this.escape}${this.quote}`));
    }
  };
  Qet.FormatterOptions = xXt;
});