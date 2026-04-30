/**
 * @module Rkn
 * @category unknown
 * @label unknown
 * @position 1234 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Rkn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Rkn = T((S2c, Ikn) => {
  var gue = Kr(),
    EOs = W8(),
    vOs = Iet(),
    EJt = class extends EOs {
      constructor() {
        (super(), (this.map = { cfvo: (this.cfvoXform = new vOs()) }));
      }
      get tag() {
        return "iconSet";
      }
      render(e, r) {
        (e.openNode(this.tag, {
          iconSet: gue.toStringAttribute(r.iconSet, "3TrafficLights"),
          reverse: gue.toBoolAttribute(r.reverse, !1),
          showValue: gue.toBoolAttribute(r.showValue, !0),
        }),
          r.cfvo.forEach((n) => {
            this.cfvoXform.render(e, n);
          }),
          e.closeNode());
      }
      createNewModel({ attributes: e }) {
        return {
          iconSet: gue.toStringValue(e.iconSet, "3TrafficLights"),
          reverse: gue.toBoolValue(e.reverse),
          showValue: gue.toBoolValue(e.showValue),
          cfvo: [],
        };
      }
      onParserClose(e, r) {
        this.model[e].push(r.model);
      }
    };
  Ikn.exports = EJt;
});