/**
 * @module YXt
 * @category utils/oop
 * @label oop
 * @position 1293 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (YXt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var YXt = T((Sue) => {
  "use strict";
  var yPn =
    (Sue && Sue.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
  Object.defineProperty(Sue, "__esModule", { value: !0 });
  Sue.ParserOptions = void 0;
  var DMs = yPn($Xt()),
    IMs = yPn(UXt()),
    zXt = class {
      constructor(e) {
        var r;
        if (
          ((this.objectMode = !0),
          (this.delimiter = ","),
          (this.ignoreEmpty = !1),
          (this.quote = '"'),
          (this.escape = null),
          (this.escapeChar = this.quote),
          (this.comment = null),
          (this.supportsComments = !1),
          (this.ltrim = !1),
          (this.rtrim = !1),
          (this.trim = !1),
          (this.headers = null),
          (this.renameHeaders = !1),
          (this.strictColumnHandling = !1),
          (this.discardUnmappedColumns = !1),
          (this.carriageReturn = "\r"),
          (this.encoding = "utf8"),
          (this.limitRows = !1),
          (this.maxRows = 0),
          (this.skipLines = 0),
          (this.skipRows = 0),
          Object.assign(this, e || {}),
          this.delimiter.length > 1)
        )
          throw new Error("delimiter option must be one character long");
        ((this.escapedDelimiter = DMs.default(this.delimiter)),
          (this.escapeChar = (r = this.escape) !== null && r !== void 0 ? r : this.quote),
          (this.supportsComments = !IMs.default(this.comment)),
          (this.NEXT_TOKEN_REGEXP = new RegExp(`([^\\s]|\\r\\n|\\n|\\r|${this.escapedDelimiter})`)),
          this.maxRows > 0 && (this.limitRows = !0));
      }
    };
  Sue.ParserOptions = zXt;
});