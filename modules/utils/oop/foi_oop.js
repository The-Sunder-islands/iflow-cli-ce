/**
 * @module foi
 * @category utils/oop
 * @label oop
 * @position 1605 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (foi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var foi = T((QCe) => {
  "use strict";
  var Wba =
    (QCe && QCe.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
  Object.defineProperty(QCe, "__esModule", { value: !0 });
  var doi = Wba(AY()),
    Glr = class {
      name() {
        return "ASCII";
      }
      match(e) {
        let r = e.rawInput;
        for (let n = 0; n < e.rawLen; n++) {
          let o = r[n];
          if (o < 32 || o > 126) return (0, doi.default)(e, this, 0);
        }
        return (0, doi.default)(e, this, 100);
      }
    };
  QCe.default = Glr;
});