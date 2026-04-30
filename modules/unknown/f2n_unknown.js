/**
 * @module f2n
 * @category unknown
 * @label unknown
 * @position 869 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (f2n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var f2n = T((_nc, d2n) => {
  "use strict";
  d2n.exports = function (e) {
    return e
      .map(function (r) {
        return r === ""
          ? "''"
          : r && typeof r == "object"
            ? r.op.replace(/(.)/g, "\\$1")
            : /["\s\\]/.test(r) && !/'/.test(r)
              ? "'" + r.replace(/(['])/g, "\\$1") + "'"
              : /["'\s]/.test(r)
                ? '"' + r.replace(/(["\\$`!])/g, "\\$1") + '"'
                : String(r).replace(/([A-Za-z]:)?([#!"$&'()*,:;<=>?@[\\\]^`{|}])/g, "$1\\$2");
      })
      .join(" ");
  };
});