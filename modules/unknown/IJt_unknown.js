/**
 * @module IJt
 * @category unknown
 * @label unknown
 * @position 1239 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (IJt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var IJt = T((I2c, Ukn) => {
  var MOs = W8(),
    FOs = Fkn(),
    DJt = class extends MOs {
      constructor() {
        (super(), (this.map = { "xm:f": (this.fExtXform = new FOs()) }));
      }
      get tag() {
        return "x14:cfvo";
      }
      render(e, r) {
        (e.openNode(this.tag, { type: r.type }),
          r.value !== void 0 && this.fExtXform.render(e, r.value),
          e.closeNode());
      }
      createNewModel(e) {
        return { type: e.attributes.type };
      }
      onParserClose(e, r) {
        switch (e) {
          case "xm:f":
            this.model.value = r.model ? parseFloat(r.model) : 0;
            break;
        }
      }
    };
  Ukn.exports = DJt;
});