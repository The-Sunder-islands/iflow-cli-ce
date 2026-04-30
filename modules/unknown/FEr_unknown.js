/**
 * @module FEr
 * @category unknown
 * @label unknown
 * @position 1949 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (FEr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var FEr = T((Pxl, Qeo) => {
  "use strict";
  var Ahu = LEr(),
    yhu = MEr(),
    _hu = Tfe(),
    Ehu = sAt(),
    vhu = oAt(),
    Chu = aAt(),
    Shu = (t, e, r, n) => {
      switch (e) {
        case "===":
          return (typeof t == "object" && (t = t.version), typeof r == "object" && (r = r.version), t === r);
        case "!==":
          return (typeof t == "object" && (t = t.version), typeof r == "object" && (r = r.version), t !== r);
        case "":
        case "=":
        case "==":
          return Ahu(t, r, n);
        case "!=":
          return yhu(t, r, n);
        case ">":
          return _hu(t, r, n);
        case ">=":
          return Ehu(t, r, n);
        case "<":
          return vhu(t, r, n);
        case "<=":
          return Chu(t, r, n);
        default:
          throw new TypeError(`Invalid operator: ${e}`);
      }
    };
  Qeo.exports = Shu;
});