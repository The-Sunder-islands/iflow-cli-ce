/**
 * @module zYt
 * @category utils/object
 * @label object
 * @position 1179 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (zYt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var zYt = T((_Ac, F7n) => {
  var M7n = Kr(),
    L7n = eA(),
    oRs = CF(),
    SF = class t extends M7n {
      constructor(e) {
        (super(), (this.name = e), (this.map = { color: new oRs() }));
      }
      get tag() {
        return this.name;
      }
      render(e, r, n) {
        let o = (r && r.color) || n || this.defaultColor;
        (e.openNode(this.name),
          r && r.style && (e.addAttribute("style", r.style), o && this.map.color.render(e, o)),
          e.closeNode());
      }
      parseOpen(e) {
        if (this.parser) return (this.parser.parseOpen(e), !0);
        switch (e.name) {
          case this.name: {
            let { style: r } = e.attributes;
            return (r ? (this.model = { style: r }) : (this.model = void 0), !0);
          }
          case "color":
            return ((this.parser = this.map.color), this.parser.parseOpen(e), !0);
          default:
            return !1;
        }
      }
      parseText(e) {
        this.parser && this.parser.parseText(e);
      }
      parseClose(e) {
        return this.parser
          ? (this.parser.parseClose(e) || (this.parser = void 0), !0)
          : (e === this.name &&
              this.map.color.model &&
              (this.model || (this.model = {}), (this.model.color = this.map.color.model)),
            !1);
      }
      validStyle(e) {
        return t.validStyleValues[e];
      }
    };
  SF.validStyleValues = [
    "thin",
    "dashed",
    "dotted",
    "dashDot",
    "hair",
    "dashDotDot",
    "slantDashDot",
    "mediumDashed",
    "mediumDashDotDot",
    "mediumDashDot",
    "medium",
    "double",
    "thick",
  ].reduce((t, e) => ((t[e] = !0), t), {});
  var WYt = class extends M7n {
    constructor() {
      (super(),
        (this.map = {
          top: new SF("top"),
          left: new SF("left"),
          bottom: new SF("bottom"),
          right: new SF("right"),
          diagonal: new SF("diagonal"),
        }));
    }
    render(e, r) {
      let { color: n } = r;
      (e.openNode("border"),
        r.diagonal &&
          r.diagonal.style &&
          (r.diagonal.up && e.addAttribute("diagonalUp", "1"), r.diagonal.down && e.addAttribute("diagonalDown", "1")));
      function o(s, a) {
        (s && !s.color && r.color && (s = { ...s, color: r.color }), a.render(e, s, n));
      }
      (o(r.left, this.map.left),
        o(r.right, this.map.right),
        o(r.top, this.map.top),
        o(r.bottom, this.map.bottom),
        o(r.diagonal, this.map.diagonal),
        e.closeNode());
    }
    parseOpen(e) {
      if (this.parser) return (this.parser.parseOpen(e), !0);
      switch (e.name) {
        case "border":
          return (
            this.reset(),
            (this.diagonalUp = L7n.parseBoolean(e.attributes.diagonalUp)),
            (this.diagonalDown = L7n.parseBoolean(e.attributes.diagonalDown)),
            !0
          );
        default:
          return ((this.parser = this.map[e.name]), this.parser ? (this.parser.parseOpen(e), !0) : !1);
      }
    }
    parseText(e) {
      this.parser && this.parser.parseText(e);
    }
    parseClose(e) {
      if (this.parser) return (this.parser.parseClose(e) || (this.parser = void 0), !0);
      if (e === "border") {
        let r = (this.model = {}),
          n = function (o, s, a) {
            s && (a && Object.assign(s, a), (r[o] = s));
          };
        (n("left", this.map.left.model),
          n("right", this.map.right.model),
          n("top", this.map.top.model),
          n("bottom", this.map.bottom.model),
          n("diagonal", this.map.diagonal.model, { up: this.diagonalUp, down: this.diagonalDown }));
      }
      return !1;
    }
  };
  F7n.exports = WYt;
});
var $7n = T((EAc, U7n) => {
  U7n.exports = {
    0: { f: "General" },
    1: { f: "0" },
    2: { f: "0.00" },
    3: { f: "#,##0" },
    4: { f: "#,##0.00" },
    9: { f: "0%" },
    10: { f: "0.00%" },
    11: { f: "0.00E+00" },
    12: { f: "# ?/?" },
    13: { f: "# ??/??" },
    14: { f: "mm-dd-yy" },
    15: { f: "d-mmm-yy" },
    16: { f: "d-mmm" },
    17: { f: "mmm-yy" },
    18: { f: "h:mm AM/PM" },
    19: { f: "h:mm:ss AM/PM" },
    20: { f: "h:mm" },
    21: { f: "h:mm:ss" },
    22: { f: 'm/d/yy "h":mm' },
    27: {
      "zh-tw": "[$-404]e/m/d",
      "zh-cn": 'yyyy"\u5E74"m"\u6708"',
      "ja-jp": "[$-411]ge.m.d",
      "ko-kr": 'yyyy"\u5E74" mm"\u6708" dd"\u65E5"',
    },
    28: {
      "zh-tw": '[$-404]e"\u5E74"m"\u6708"d"\u65E5"',
      "zh-cn": 'm"\u6708"d"\u65E5"',
      "ja-jp": '[$-411]ggge"\u5E74"m"\u6708"d"\u65E5"',
      "ko-kr": "mm-dd",
    },
    29: {
      "zh-tw": '[$-404]e"\u5E74"m"\u6708"d"\u65E5"',
      "zh-cn": 'm"\u6708"d"\u65E5"',
      "ja-jp": '[$-411]ggge"\u5E74"m"\u6708"d"\u65E5"',
      "ko-kr": "mm-dd",
    },
    30: { "zh-tw": "m/d/yy ", "zh-cn": "m-d-yy", "ja-jp": "m/d/yy", "ko-kr": "mm-dd-yy" },
    31: {
      "zh-tw": 'yyyy"\u5E74"m"\u6708"d"\u65E5"',
      "zh-cn": 'yyyy"\u5E74"m"\u6708"d"\u65E5"',
      "ja-jp": 'yyyy"\u5E74"m"\u6708"d"\u65E5"',
      "ko-kr": 'yyyy"\uB144" mm"\uC6D4" dd"\uC77C"',
    },
    32: {
      "zh-tw": 'hh"\u6642"mm"\u5206"',
      "zh-cn": 'h"\u65F6"mm"\u5206"',
      "ja-jp": 'h"\u6642"mm"\u5206"',
      "ko-kr": 'h"\uC2DC" mm"\uBD84"',
    },
    33: {
      "zh-tw": 'hh"\u6642"mm"\u5206"ss"\u79D2"',
      "zh-cn": 'h"\u65F6"mm"\u5206"ss"\u79D2"',
      "ja-jp": 'h"\u6642"mm"\u5206"ss"\u79D2"',
      "ko-kr": 'h"\uC2DC" mm"\uBD84" ss"\uCD08"',
    },
    34: {
      "zh-tw": '\u4E0A\u5348/\u4E0B\u5348 hh"\u6642"mm"\u5206"',
      "zh-cn": '\u4E0A\u5348/\u4E0B\u5348 h"\u65F6"mm"\u5206"',
      "ja-jp": 'yyyy"\u5E74"m"\u6708"',
      "ko-kr": "yyyy-mm-dd",
    },
    35: {
      "zh-tw": '\u4E0A\u5348/\u4E0B\u5348 hh"\u6642"mm"\u5206"ss"\u79D2"',
      "zh-cn": '\u4E0A\u5348/\u4E0B\u5348 h"\u65F6"mm"\u5206"ss"\u79D2"',
      "ja-jp": 'm"\u6708"d"\u65E5"',
      "ko-kr": "yyyy-mm-dd",
    },
    36: {
      "zh-tw": "[$-404]e/m/d",
      "zh-cn": 'yyyy"\u5E74"m"\u6708"',
      "ja-jp": "[$-411]ge.m.d",
      "ko-kr": 'yyyy"\u5E74" mm"\u6708" dd"\u65E5"',
    },
    37: { f: "#,##0 ;(#,##0)" },
    38: { f: "#,##0 ;[Red](#,##0)" },
    39: { f: "#,##0.00 ;(#,##0.00)" },
    40: { f: "#,##0.00 ;[Red](#,##0.00)" },
    45: { f: "mm:ss" },
    46: { f: "[h]:mm:ss" },
    47: { f: "mmss.0" },
    48: { f: "##0.0E+0" },
    49: { f: "@" },
    50: {
      "zh-tw": "[$-404]e/m/d",
      "zh-cn": 'yyyy"\u5E74"m"\u6708"',
      "ja-jp": "[$-411]ge.m.d",
      "ko-kr": 'yyyy"\u5E74" mm"\u6708" dd"\u65E5"',
    },
    51: {
      "zh-tw": '[$-404]e"\u5E74"m"\u6708"d"\u65E5"',
      "zh-cn": 'm"\u6708"d"\u65E5"',
      "ja-jp": '[$-411]ggge"\u5E74"m"\u6708"d"\u65E5"',
      "ko-kr": "mm-dd",
    },
    52: {
      "zh-tw": '\u4E0A\u5348/\u4E0B\u5348 hh"\u6642"mm"\u5206"',
      "zh-cn": 'yyyy"\u5E74"m"\u6708"',
      "ja-jp": 'yyyy"\u5E74"m"\u6708"',
      "ko-kr": "yyyy-mm-dd",
    },
    53: {
      "zh-tw": '\u4E0A\u5348/\u4E0B\u5348 hh"\u6642"mm"\u5206"ss"\u79D2"',
      "zh-cn": 'm"\u6708"d"\u65E5"',
      "ja-jp": 'm"\u6708"d"\u65E5"',
      "ko-kr": "yyyy-mm-dd",
    },
    54: {
      "zh-tw": '[$-404]e"\u5E74"m"\u6708"d"\u65E5"',
      "zh-cn": 'm"\u6708"d"\u65E5"',
      "ja-jp": '[$-411]ggge"\u5E74"m"\u6708"d"\u65E5"',
      "ko-kr": "mm-dd",
    },
    55: {
      "zh-tw": '\u4E0A\u5348/\u4E0B\u5348 hh"\u6642"mm"\u5206"',
      "zh-cn": '\u4E0A\u5348/\u4E0B\u5348 h"\u65F6"mm"\u5206"',
      "ja-jp": 'yyyy"\u5E74"m"\u6708"',
      "ko-kr": "yyyy-mm-dd",
    },
    56: {
      "zh-tw": '\u4E0A\u5348/\u4E0B\u5348 hh"\u6642"mm"\u5206"ss"\u79D2"',
      "zh-cn": '\u4E0A\u5348/\u4E0B\u5348 h"\u65F6"mm"\u5206"ss"\u79D2"',
      "ja-jp": 'm"\u6708"d"\u65E5"',
      "ko-kr": "yyyy-mm-dd",
    },
    57: {
      "zh-tw": "[$-404]e/m/d",
      "zh-cn": 'yyyy"\u5E74"m"\u6708"',
      "ja-jp": "[$-411]ge.m.d",
      "ko-kr": 'yyyy"\u5E74" mm"\u6708" dd"\u65E5"',
    },
    58: {
      "zh-tw": '[$-404]e"\u5E74"m"\u6708"d"\u65E5"',
      "zh-cn": 'm"\u6708"d"\u65E5"',
      "ja-jp": '[$-411]ggge"\u5E74"m"\u6708"d"\u65E5"',
      "ko-kr": "mm-dd",
    },
    59: { "th-th": "t0" },
    60: { "th-th": "t0.00" },
    61: { "th-th": "t#,##0" },
    62: { "th-th": "t#,##0.00" },
    67: { "th-th": "t0%" },
    68: { "th-th": "t0.00%" },
    69: { "th-th": "t# ?/?" },
    70: { "th-th": "t# ??/??" },
    81: { "th-th": "d/m/bb" },
  };
});