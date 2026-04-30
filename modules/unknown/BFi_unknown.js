/**
 * @module BFi
 * @category unknown
 * @label unknown
 * @position 1852 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (BFi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var BFi = T((tol, PFi) => {
  "use strict";
  PFi.exports = ({ onlyFirst: t = !1 } = {}) => {
    let e = [
      "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
      "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))",
    ].join("|");
    return new RegExp(e, t ? void 0 : "g");
  };
});