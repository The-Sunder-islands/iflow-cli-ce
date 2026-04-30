/**
 * @module Vkn
 * @category unknown
 * @label unknown
 * @position 1242 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Vkn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Vkn = T((O2c, Hkn) => {
  var vW = Kr(),
    jOs = W8(),
    QOs = IJt(),
    GOs = qkn(),
    OJt = class extends jOs {
      constructor() {
        (super(),
          (this.map = { "x14:cfvo": (this.cfvoXform = new QOs()), "x14:cfIcon": (this.cfIconXform = new GOs()) }));
      }
      get tag() {
        return "x14:iconSet";
      }
      render(e, r) {
        (e.openNode(this.tag, {
          iconSet: vW.toStringAttribute(r.iconSet),
          reverse: vW.toBoolAttribute(r.reverse, !1),
          showValue: vW.toBoolAttribute(r.showValue, !0),
          custom: vW.toBoolAttribute(r.icons, !1),
        }),
          r.cfvo.forEach((n) => {
            this.cfvoXform.render(e, n);
          }),
          r.icons &&
            r.icons.forEach((n, o) => {
              ((n.iconId = o), this.cfIconXform.render(e, n));
            }),
          e.closeNode());
      }
      createNewModel({ attributes: e }) {
        return {
          cfvo: [],
          iconSet: vW.toStringValue(e.iconSet, "3TrafficLights"),
          reverse: vW.toBoolValue(e.reverse, !1),
          showValue: vW.toBoolValue(e.showValue, !0),
        };
      }
      onParserClose(e, r) {
        let [, n] = e.split(":");
        switch (n) {
          case "cfvo":
            this.model.cfvo.push(r.model);
            break;
          case "cfIcon":
            (this.model.icons || (this.model.icons = []), this.model.icons.push(r.model));
            break;
          default:
            this.model[n] = r.model;
            break;
        }
      }
    };
  Hkn.exports = OJt;
});