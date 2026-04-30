/**
 * @module Ekn
 * @category unknown
 * @label unknown
 * @position 1230 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Ekn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Ekn = T((_2c, _kn) => {
  var fOs = W8(),
    pOs = CF(),
    hOs = Iet(),
    hJt = class extends fOs {
      constructor() {
        (super(), (this.map = { cfvo: (this.cfvoXform = new hOs()), color: (this.colorXform = new pOs()) }));
      }
      get tag() {
        return "dataBar";
      }
      render(e, r) {
        (e.openNode(this.tag),
          r.cfvo.forEach((n) => {
            this.cfvoXform.render(e, n);
          }),
          this.colorXform.render(e, r.color),
          e.closeNode());
      }
      createNewModel() {
        return { cfvo: [] };
      }
      onParserClose(e, r) {
        switch (e) {
          case "cfvo":
            this.model.cfvo.push(r.model);
            break;
          case "color":
            this.model.color = r.model;
            break;
        }
      }
    };
  _kn.exports = hJt;
});