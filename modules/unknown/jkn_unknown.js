/**
 * @module jkn
 * @category unknown
 * @label unknown
 * @position 1240 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (jkn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var jkn = T((R2c, $kn) => {
  var tA = Kr(),
    UOs = W8(),
    Ret = CF(),
    $Os = IJt(),
    RJt = class extends UOs {
      constructor() {
        (super(),
          (this.map = {
            "x14:cfvo": (this.cfvoXform = new $Os()),
            "x14:borderColor": (this.borderColorXform = new Ret("x14:borderColor")),
            "x14:negativeBorderColor": (this.negativeBorderColorXform = new Ret("x14:negativeBorderColor")),
            "x14:negativeFillColor": (this.negativeFillColorXform = new Ret("x14:negativeFillColor")),
            "x14:axisColor": (this.axisColorXform = new Ret("x14:axisColor")),
          }));
      }
      static isExt(e) {
        return !e.gradient;
      }
      get tag() {
        return "x14:dataBar";
      }
      render(e, r) {
        (e.openNode(this.tag, {
          minLength: tA.toIntAttribute(r.minLength, 0, !0),
          maxLength: tA.toIntAttribute(r.maxLength, 100, !0),
          border: tA.toBoolAttribute(r.border, !1),
          gradient: tA.toBoolAttribute(r.gradient, !0),
          negativeBarColorSameAsPositive: tA.toBoolAttribute(r.negativeBarColorSameAsPositive, !0),
          negativeBarBorderColorSameAsPositive: tA.toBoolAttribute(r.negativeBarBorderColorSameAsPositive, !0),
          axisPosition: tA.toAttribute(r.axisPosition, "auto"),
          direction: tA.toAttribute(r.direction, "leftToRight"),
        }),
          r.cfvo.forEach((n) => {
            this.cfvoXform.render(e, n);
          }),
          this.borderColorXform.render(e, r.borderColor),
          this.negativeBorderColorXform.render(e, r.negativeBorderColor),
          this.negativeFillColorXform.render(e, r.negativeFillColor),
          this.axisColorXform.render(e, r.axisColor),
          e.closeNode());
      }
      createNewModel({ attributes: e }) {
        return {
          cfvo: [],
          minLength: tA.toIntValue(e.minLength, 0),
          maxLength: tA.toIntValue(e.maxLength, 100),
          border: tA.toBoolValue(e.border, !1),
          gradient: tA.toBoolValue(e.gradient, !0),
          negativeBarColorSameAsPositive: tA.toBoolValue(e.negativeBarColorSameAsPositive, !0),
          negativeBarBorderColorSameAsPositive: tA.toBoolValue(e.negativeBarBorderColorSameAsPositive, !0),
          axisPosition: tA.toStringValue(e.axisPosition, "auto"),
          direction: tA.toStringValue(e.direction, "leftToRight"),
        };
      }
      onParserClose(e, r) {
        let [, n] = e.split(":");
        switch (n) {
          case "cfvo":
            this.model.cfvo.push(r.model);
            break;
          default:
            this.model[n] = r.model;
            break;
        }
      }
    };
  $kn.exports = RJt;
});