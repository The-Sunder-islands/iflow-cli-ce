/**
 * @module cur
 * @category network/http
 * @label undici
 * @position 1526 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (cur) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var cur = T((pCc, FZn) => {
  "use strict";
  var { UndiciError: vma } = da(),
    MZn = Symbol.for("undici.error.UND_MOCK_ERR_MOCK_NOT_MATCHED"),
    uur = class extends vma {
      constructor(e) {
        (super(e),
          (this.name = "MockNotMatchedError"),
          (this.message = e || "The request does not match any registered mock dispatches"),
          (this.code = "UND_MOCK_ERR_MOCK_NOT_MATCHED"));
      }
      static [Symbol.hasInstance](e) {
        return e && e[MZn] === !0;
      }
      get [MZn]() {
        return !0;
      }
    };
  FZn.exports = { MockNotMatchedError: uur };
});