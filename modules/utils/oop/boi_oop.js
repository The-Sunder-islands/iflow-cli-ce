/**
 * @module boi
 * @category utils/oop
 * @label oop
 * @position 1608 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (boi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var boi = T((s9) => {
  "use strict";
  var Jba =
    (s9 && s9.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
  Object.defineProperty(s9, "__esModule", { value: !0 });
  s9.gb_18030 = s9.euc_kr = s9.euc_jp = s9.big5 = s9.sjis = void 0;
  var Xba = Jba(AY());
  function Zba(t, e) {
    let r = (n, o, s, a) => {
      if (a < s) return -1;
      let u = Math.floor((s + a) >>> 1);
      return o > n[u] ? r(n, o, u + 1, a) : o < n[u] ? r(n, o, s, u - 1) : u;
    };
    return r(t, e, 0, t.length - 1);
  }
  var Klr = class {
      constructor() {
        ((this.charValue = 0), (this.index = 0), (this.nextIndex = 0), (this.error = !1), (this.done = !1));
      }
      reset() {
        ((this.charValue = 0), (this.index = -1), (this.nextIndex = 0), (this.error = !1), (this.done = !1));
      }
      nextByte(e) {
        return this.nextIndex >= e.rawLen ? ((this.done = !0), -1) : e.rawInput[this.nextIndex++] & 255;
      }
    },
    yY = class {
      constructor() {
        this.commonChars = [];
      }
      name() {
        return "mbcs";
      }
      match(e) {
        let r = 0,
          n = 0,
          o = 0,
          s = 0,
          a = 0,
          u = new Klr();
        e: {
          for (u.reset(); this.nextChar(u, e); ) {
            if ((s++, u.error)) o++;
            else {
              let c = u.charValue & 4294967295;
              c > 255 && (r++, this.commonChars != null && Zba(this.commonChars, c) >= 0 && n++);
            }
            if (o >= 2 && o * 5 >= r) break e;
          }
          if (r <= 10 && o == 0) {
            r == 0 && s < 10 ? (a = 0) : (a = 10);
            break e;
          }
          if (r < 20 * o) {
            a = 0;
            break e;
          }
          if (this.commonChars == null) ((a = 30 + r - 20 * o), a > 100 && (a = 100));
          else {
            let m = 90 / Math.log(r / 4);
            ((a = Math.floor(Math.log(n + 1) * m + 10)), (a = Math.min(a, 100)));
          }
        }
        return a == 0 ? null : (0, Xba.default)(e, this, a);
      }
      nextChar(e, r) {
        return !0;
      }
    },
    Jlr = class extends yY {
      constructor() {
        (super(...arguments),
          (this.commonChars = [
            33088, 33089, 33090, 33093, 33115, 33129, 33130, 33141, 33142, 33440, 33442, 33444, 33449, 33450, 33451,
            33453, 33455, 33457, 33459, 33461, 33463, 33469, 33470, 33473, 33476, 33477, 33478, 33480, 33481, 33484,
            33485, 33500, 33504, 33511, 33512, 33513, 33514, 33520, 33521, 33601, 33603, 33614, 33615, 33624, 33630,
            33634, 33639, 33653, 33654, 33673, 33674, 33675, 33677, 33683, 36502, 37882, 38314,
          ]));
      }
      name() {
        return "Shift_JIS";
      }
      language() {
        return "ja";
      }
      nextChar(e, r) {
        ((e.index = e.nextIndex), (e.error = !1));
        let n = (e.charValue = e.nextByte(r));
        if (n < 0) return !1;
        if (n <= 127 || (n > 160 && n <= 223)) return !0;
        let o = e.nextByte(r);
        return o < 0
          ? !1
          : ((e.charValue = (n << 8) | o), (o >= 64 && o <= 127) || (o >= 128 && o <= 255) || (e.error = !0), !0);
      }
    };
  s9.sjis = Jlr;
  var Xlr = class extends yY {
    constructor() {
      (super(...arguments),
        (this.commonChars = [
          41280, 41281, 41282, 41283, 41287, 41289, 41333, 41334, 42048, 42054, 42055, 42056, 42065, 42068, 42071,
          42084, 42090, 42092, 42103, 42147, 42148, 42151, 42177, 42190, 42193, 42207, 42216, 42237, 42304, 42312,
          42328, 42345, 42445, 42471, 42583, 42593, 42594, 42600, 42608, 42664, 42675, 42681, 42707, 42715, 42726,
          42738, 42816, 42833, 42841, 42970, 43171, 43173, 43181, 43217, 43219, 43236, 43260, 43456, 43474, 43507,
          43627, 43706, 43710, 43724, 43772, 44103, 44111, 44208, 44242, 44377, 44745, 45024, 45290, 45423, 45747,
          45764, 45935, 46156, 46158, 46412, 46501, 46525, 46544, 46552, 46705, 47085, 47207, 47428, 47832, 47940,
          48033, 48593, 49860, 50105, 50240, 50271,
        ]));
    }
    name() {
      return "Big5";
    }
    language() {
      return "zh";
    }
    nextChar(e, r) {
      ((e.index = e.nextIndex), (e.error = !1));
      let n = (e.charValue = e.nextByte(r));
      if (n < 0) return !1;
      if (n <= 127 || n == 255) return !0;
      let o = e.nextByte(r);
      return o < 0
        ? !1
        : ((e.charValue = (e.charValue << 8) | o), (o < 64 || o == 127 || o == 255) && (e.error = !0), !0);
    }
  };
  s9.big5 = Xlr;
  function goi(t, e) {
    ((t.index = t.nextIndex), (t.error = !1));
    let r = 0,
      n = 0,
      o = 0;
    e: {
      if (((r = t.charValue = t.nextByte(e)), r < 0)) {
        t.done = !0;
        break e;
      }
      if (r <= 141) break e;
      if (((n = t.nextByte(e)), (t.charValue = (t.charValue << 8) | n), r >= 161 && r <= 254)) {
        n < 161 && (t.error = !0);
        break e;
      }
      if (r == 142) {
        n < 161 && (t.error = !0);
        break e;
      }
      r == 143 && ((o = t.nextByte(e)), (t.charValue = (t.charValue << 8) | o), o < 161 && (t.error = !0));
    }
    return t.done == !1;
  }
  var Zlr = class extends yY {
    constructor() {
      (super(...arguments),
        (this.commonChars = [
          41377, 41378, 41379, 41382, 41404, 41418, 41419, 41430, 41431, 42146, 42148, 42150, 42152, 42154, 42155,
          42156, 42157, 42159, 42161, 42163, 42165, 42167, 42169, 42171, 42173, 42175, 42176, 42177, 42179, 42180,
          42182, 42183, 42184, 42185, 42186, 42187, 42190, 42191, 42192, 42206, 42207, 42209, 42210, 42212, 42216,
          42217, 42218, 42219, 42220, 42223, 42226, 42227, 42402, 42403, 42404, 42406, 42407, 42410, 42413, 42415,
          42416, 42419, 42421, 42423, 42424, 42425, 42431, 42435, 42438, 42439, 42440, 42441, 42443, 42448, 42453,
          42454, 42455, 42462, 42464, 42465, 42469, 42473, 42474, 42475, 42476, 42477, 42483, 47273, 47572, 47854,
          48072, 48880, 49079, 50410, 50940, 51133, 51896, 51955, 52188, 52689,
        ]),
        (this.nextChar = goi));
    }
    name() {
      return "EUC-JP";
    }
    language() {
      return "ja";
    }
  };
  s9.euc_jp = Zlr;
  var e0r = class extends yY {
    constructor() {
      (super(...arguments),
        (this.commonChars = [
          45217, 45235, 45253, 45261, 45268, 45286, 45293, 45304, 45306, 45308, 45496, 45497, 45511, 45527, 45538,
          45994, 46011, 46274, 46287, 46297, 46315, 46501, 46517, 46527, 46535, 46569, 46835, 47023, 47042, 47054,
          47270, 47278, 47286, 47288, 47291, 47337, 47531, 47534, 47564, 47566, 47613, 47800, 47822, 47824, 47857,
          48103, 48115, 48125, 48301, 48314, 48338, 48374, 48570, 48576, 48579, 48581, 48838, 48840, 48863, 48878,
          48888, 48890, 49057, 49065, 49088, 49124, 49131, 49132, 49144, 49319, 49327, 49336, 49338, 49339, 49341,
          49351, 49356, 49358, 49359, 49366, 49370, 49381, 49403, 49404, 49572, 49574, 49590, 49622, 49631, 49654,
          49656, 50337, 50637, 50862, 51151, 51153, 51154, 51160, 51173, 51373,
        ]),
        (this.nextChar = goi));
    }
    name() {
      return "EUC-KR";
    }
    language() {
      return "ko";
    }
  };
  s9.euc_kr = e0r;
  var t0r = class extends yY {
    constructor() {
      (super(...arguments),
        (this.commonChars = [
          41377, 41378, 41379, 41380, 41392, 41393, 41457, 41459, 41889, 41900, 41914, 45480, 45496, 45502, 45755,
          46025, 46070, 46323, 46525, 46532, 46563, 46767, 46804, 46816, 47010, 47016, 47037, 47062, 47069, 47284,
          47327, 47350, 47531, 47561, 47576, 47610, 47613, 47821, 48039, 48086, 48097, 48122, 48316, 48347, 48382,
          48588, 48845, 48861, 49076, 49094, 49097, 49332, 49389, 49611, 49883, 50119, 50396, 50410, 50636, 50935,
          51192, 51371, 51403, 51413, 51431, 51663, 51706, 51889, 51893, 51911, 51920, 51926, 51957, 51965, 52460,
          52728, 52906, 52932, 52946, 52965, 53173, 53186, 53206, 53442, 53445, 53456, 53460, 53671, 53930, 53938,
          53941, 53947, 53972, 54211, 54224, 54269, 54466, 54490, 54754, 54992,
        ]));
    }
    name() {
      return "GB18030";
    }
    language() {
      return "zh";
    }
    nextChar(e, r) {
      ((e.index = e.nextIndex), (e.error = !1));
      let n = 0,
        o = 0,
        s = 0,
        a = 0;
      e: {
        if (((n = e.charValue = e.nextByte(r)), n < 0)) {
          e.done = !0;
          break e;
        }
        if (n <= 128) break e;
        if (((o = e.nextByte(r)), (e.charValue = (e.charValue << 8) | o), n >= 129 && n <= 254)) {
          if ((o >= 64 && o <= 126) || (o >= 80 && o <= 254)) break e;
          if (
            o >= 48 &&
            o <= 57 &&
            ((s = e.nextByte(r)), s >= 129 && s <= 254 && ((a = e.nextByte(r)), a >= 48 && a <= 57))
          ) {
            e.charValue = (e.charValue << 16) | (s << 8) | a;
            break e;
          }
          e.error = !0;
          break e;
        }
      }
      return e.done == !1;
    }
  };
  s9.gb_18030 = t0r;
});