/**
 * @module poi
 * @category utils/oop
 * @label oop
 * @position 1606 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (poi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var poi = T((GCe) => {
  "use strict";
  var zba =
    (GCe && GCe.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
  Object.defineProperty(GCe, "__esModule", { value: !0 });
  var Yba = zba(AY()),
    qlr = class {
      name() {
        return "UTF-8";
      }
      match(e) {
        let r = !1,
          n = 0,
          o = 0,
          s = 0,
          a,
          u = e.rawInput;
        e.rawLen >= 3 && (u[0] & 255) == 239 && (u[1] & 255) == 187 && (u[2] & 255) == 191 && (r = !0);
        for (let c = 0; c < e.rawLen; c++) {
          let m = u[c];
          if ((m & 128) != 0) {
            if ((m & 224) == 192) s = 1;
            else if ((m & 240) == 224) s = 2;
            else if ((m & 248) == 240) s = 3;
            else {
              if ((o++, o > 5)) break;
              s = 0;
            }
            for (; c++, !(c >= e.rawLen); ) {
              if ((u[c] & 192) != 128) {
                o++;
                break;
              }
              if (--s == 0) {
                n++;
                break;
              }
            }
          }
        }
        if (((a = 0), r && o == 0)) a = 100;
        else if (r && n > o * 10) a = 80;
        else if (n > 3 && o == 0) a = 100;
        else if (n > 0 && o == 0) a = 80;
        else if (n == 0 && o == 0) a = 10;
        else if (n > o * 10) a = 25;
        else return null;
        return (0, Yba.default)(e, this, a);
      }
    };
  GCe.default = qlr;
});