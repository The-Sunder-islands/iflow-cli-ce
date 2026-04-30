/**
 * @module hoi
 * @category utils/oop
 * @label oop
 * @position 1607 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (hoi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var hoi = T((av) => {
  "use strict";
  var Kba =
    (av && av.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
  Object.defineProperty(av, "__esModule", { value: !0 });
  av.UTF_32LE = av.UTF_32BE = av.UTF_16LE = av.UTF_16BE = void 0;
  var Ylr = Kba(AY()),
    Hlr = class {
      name() {
        return "UTF-16BE";
      }
      match(e) {
        let r = e.rawInput;
        return r.length >= 2 && (r[0] & 255) == 254 && (r[1] & 255) == 255 ? (0, Ylr.default)(e, this, 100) : null;
      }
    };
  av.UTF_16BE = Hlr;
  var Vlr = class {
    name() {
      return "UTF-16LE";
    }
    match(e) {
      let r = e.rawInput;
      return r.length >= 2 && (r[0] & 255) == 255 && (r[1] & 255) == 254
        ? r.length >= 4 && r[2] == 0 && r[3] == 0
          ? null
          : (0, Ylr.default)(e, this, 100)
        : null;
    }
  };
  av.UTF_16LE = Vlr;
  var qst = class {
      name() {
        return "UTF-32";
      }
      getChar(e, r) {
        return -1;
      }
      match(e) {
        let r = 0,
          n = 0,
          o = !1,
          s = 0,
          a = (e.rawLen / 4) * 4,
          u = e.rawInput;
        if (a == 0) return null;
        this.getChar(u, 0) == 65279 && (o = !0);
        for (let c = 0; c < a; c += 4) {
          let m = this.getChar(u, c);
          m < 0 || m >= 1114111 || (m >= 55296 && m <= 57343) ? (n += 1) : (r += 1);
        }
        return (
          o && n == 0
            ? (s = 100)
            : o && r > n * 10
              ? (s = 80)
              : r > 3 && n == 0
                ? (s = 100)
                : r > 0 && n == 0
                  ? (s = 80)
                  : r > n * 10 && (s = 25),
          s == 0 ? null : (0, Ylr.default)(e, this, s)
        );
      }
    },
    Wlr = class extends qst {
      name() {
        return "UTF-32BE";
      }
      getChar(e, r) {
        return ((e[r + 0] & 255) << 24) | ((e[r + 1] & 255) << 16) | ((e[r + 2] & 255) << 8) | (e[r + 3] & 255);
      }
    };
  av.UTF_32BE = Wlr;
  var zlr = class extends qst {
    name() {
      return "UTF-32LE";
    }
    getChar(e, r) {
      return ((e[r + 3] & 255) << 24) | ((e[r + 2] & 255) << 16) | ((e[r + 1] & 255) << 8) | (e[r + 0] & 255);
    }
  };
  av.UTF_32LE = zlr;
});