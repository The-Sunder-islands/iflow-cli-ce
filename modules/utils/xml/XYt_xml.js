/**
 * @module XYt
 * @category utils/xml
 * @label xml
 * @position 1181 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (XYt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var XYt = T((CAc, q7n) => {
  var Q7n = tS(),
    p_e = eA(),
    lRs = Kr(),
    yW = {
      horizontalValues: ["left", "center", "right", "fill", "centerContinuous", "distributed", "justify"].reduce(
        (t, e) => ((t[e] = !0), t),
        {},
      ),
      horizontal(t) {
        return this.horizontalValues[t] ? t : void 0;
      },
      verticalValues: ["top", "middle", "bottom", "distributed", "justify"].reduce((t, e) => ((t[e] = !0), t), {}),
      vertical(t) {
        return t === "middle" ? "center" : this.verticalValues[t] ? t : void 0;
      },
      wrapText(t) {
        return t ? !0 : void 0;
      },
      shrinkToFit(t) {
        return t ? !0 : void 0;
      },
      textRotation(t) {
        switch (t) {
          case "vertical":
            return t;
          default:
            return ((t = p_e.validInt(t)), t >= -90 && t <= 90 ? t : void 0);
        }
      },
      indent(t) {
        return ((t = p_e.validInt(t)), Math.max(0, t));
      },
      readingOrder(t) {
        switch (t) {
          case "ltr":
            return Q7n.ReadingOrder.LeftToRight;
          case "rtl":
            return Q7n.ReadingOrder.RightToLeft;
          default:
            return;
        }
      },
    },
    G7n = {
      toXml(t) {
        if (((t = yW.textRotation(t)), t)) {
          if (t === "vertical") return 255;
          let e = Math.round(t);
          if (e >= 0 && e <= 90) return e;
          if (e < 0 && e >= -90) return 90 - e;
        }
      },
      toModel(t) {
        let e = p_e.validInt(t);
        if (e !== void 0) {
          if (e === 255) return "vertical";
          if (e >= 0 && e <= 90) return e;
          if (e > 90 && e <= 180) return 90 - e;
        }
      },
    },
    JYt = class extends lRs {
      get tag() {
        return "alignment";
      }
      render(e, r) {
        (e.addRollback(), e.openNode("alignment"));
        let n = !1;
        function o(s, a) {
          a && (e.addAttribute(s, a), (n = !0));
        }
        (o("horizontal", yW.horizontal(r.horizontal)),
          o("vertical", yW.vertical(r.vertical)),
          o("wrapText", yW.wrapText(r.wrapText) ? "1" : !1),
          o("shrinkToFit", yW.shrinkToFit(r.shrinkToFit) ? "1" : !1),
          o("indent", yW.indent(r.indent)),
          o("textRotation", G7n.toXml(r.textRotation)),
          o("readingOrder", yW.readingOrder(r.readingOrder)),
          e.closeNode(),
          n ? e.commit() : e.rollback());
      }
      parseOpen(e) {
        let r = {},
          n = !1;
        function o(s, a, u) {
          s && ((r[a] = u), (n = !0));
        }
        (o(e.attributes.horizontal, "horizontal", e.attributes.horizontal),
          o(e.attributes.vertical, "vertical", e.attributes.vertical === "center" ? "middle" : e.attributes.vertical),
          o(e.attributes.wrapText, "wrapText", p_e.parseBoolean(e.attributes.wrapText)),
          o(e.attributes.shrinkToFit, "shrinkToFit", p_e.parseBoolean(e.attributes.shrinkToFit)),
          o(e.attributes.indent, "indent", parseInt(e.attributes.indent, 10)),
          o(e.attributes.textRotation, "textRotation", G7n.toModel(e.attributes.textRotation)),
          o(e.attributes.readingOrder, "readingOrder", e.attributes.readingOrder === "2" ? "rtl" : "ltr"),
          (this.model = n ? r : null));
      }
      parseText() {}
      parseClose() {
        return !1;
      }
    };
  q7n.exports = JYt;
});