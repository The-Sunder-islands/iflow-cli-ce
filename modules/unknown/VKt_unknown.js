/**
 * @module VKt
 * @category unknown
 * @label unknown
 * @position 1215 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (VKt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var VKt = T((o2c, ekn) => {
  var $ks = f1(),
    jks = Kr(),
    HKt = class extends jks {
      get tag() {
        return "sheetFormatPr";
      }
      render(e, r) {
        if (r) {
          let n = {
            defaultRowHeight: r.defaultRowHeight,
            outlineLevelRow: r.outlineLevelRow,
            outlineLevelCol: r.outlineLevelCol,
            "x14ac:dyDescent": r.dyDescent,
          };
          (r.defaultColWidth && (n.defaultColWidth = r.defaultColWidth),
            (!r.defaultRowHeight || r.defaultRowHeight !== 15) && (n.customHeight = "1"),
            $ks.some(n, (o) => o !== void 0) && e.leafNode("sheetFormatPr", n));
        }
      }
      parseOpen(e) {
        return e.name === "sheetFormatPr"
          ? ((this.model = {
              defaultRowHeight: parseFloat(e.attributes.defaultRowHeight || "0"),
              dyDescent: parseFloat(e.attributes["x14ac:dyDescent"] || "0"),
              outlineLevelRow: parseInt(e.attributes.outlineLevelRow || "0", 10),
              outlineLevelCol: parseInt(e.attributes.outlineLevelCol || "0", 10),
            }),
            e.attributes.defaultColWidth && (this.model.defaultColWidth = parseFloat(e.attributes.defaultColWidth)),
            !0)
          : !1;
      }
      parseText() {}
      parseClose() {
        return !1;
      }
    };
  ekn.exports = HKt;
});