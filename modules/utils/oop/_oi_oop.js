/**
 * @module _oi
 * @category utils/oop
 * @label oop
 * @position 1610 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (_oi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var _oi = T((FD) => {
  "use strict";
  var nAa =
    (FD && FD.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
  Object.defineProperty(FD, "__esModule", { value: !0 });
  FD.ISO_2022_CN = FD.ISO_2022_KR = FD.ISO_2022_JP = void 0;
  var iAa = nAa(AY()),
    qCe = class {
      constructor() {
        this.escapeSequences = [];
      }
      name() {
        return "ISO_2022";
      }
      match(e) {
        let r,
          n,
          o,
          s = 0,
          a = 0,
          u = 0,
          c,
          m = e.inputBytes,
          d = e.inputLen;
        e: for (r = 0; r < d; r++) {
          if (m[r] == 27) {
            t: for (o = 0; o < this.escapeSequences.length; o++) {
              let f = this.escapeSequences[o];
              if (d - r < f.length) continue t;
              for (n = 1; n < f.length; n++) if (f[n] != m[r + n]) continue t;
              (s++, (r += f.length - 1));
              continue e;
            }
            a++;
          }
          (m[r] == 14 || m[r] == 15) && u++;
        }
        return s == 0
          ? null
          : ((c = (100 * s - 100 * a) / (s + a)),
            s + u < 5 && (c -= (5 - (s + u)) * 10),
            c <= 0 ? null : (0, iAa.default)(e, this, c));
      }
    },
    d0r = class extends qCe {
      constructor() {
        (super(...arguments),
          (this.escapeSequences = [
            [27, 36, 40, 67],
            [27, 36, 40, 68],
            [27, 36, 64],
            [27, 36, 65],
            [27, 36, 66],
            [27, 38, 64],
            [27, 40, 66],
            [27, 40, 72],
            [27, 40, 73],
            [27, 40, 74],
            [27, 46, 65],
            [27, 46, 70],
          ]));
      }
      name() {
        return "ISO-2022-JP";
      }
      language() {
        return "ja";
      }
    };
  FD.ISO_2022_JP = d0r;
  var f0r = class extends qCe {
    constructor() {
      (super(...arguments), (this.escapeSequences = [[27, 36, 41, 67]]));
    }
    name() {
      return "ISO-2022-KR";
    }
    language() {
      return "kr";
    }
  };
  FD.ISO_2022_KR = f0r;
  var p0r = class extends qCe {
    constructor() {
      (super(...arguments),
        (this.escapeSequences = [
          [27, 36, 41, 65],
          [27, 36, 41, 71],
          [27, 36, 42, 72],
          [27, 36, 41, 69],
          [27, 36, 43, 73],
          [27, 36, 43, 74],
          [27, 36, 43, 75],
          [27, 36, 43, 76],
          [27, 36, 43, 77],
          [27, 78],
          [27, 79],
        ]));
    }
    name() {
      return "ISO-2022-CN";
    }
    language() {
      return "zh";
    }
  };
  FD.ISO_2022_CN = p0r;
});