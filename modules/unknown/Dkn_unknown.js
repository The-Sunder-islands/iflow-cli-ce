/**
 * @module Dkn
 * @category unknown
 * @label unknown
 * @position 1233 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Dkn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Dkn = T((C2c, Tkn) => {
  var AOs = W8(),
    yOs = CF(),
    _Os = Iet(),
    _Jt = class extends AOs {
      constructor() {
        (super(), (this.map = { cfvo: (this.cfvoXform = new _Os()), color: (this.colorXform = new yOs()) }));
      }
      get tag() {
        return "colorScale";
      }
      render(e, r) {
        (e.openNode(this.tag),
          r.cfvo.forEach((n) => {
            this.cfvoXform.render(e, n);
          }),
          r.color.forEach((n) => {
            this.colorXform.render(e, n);
          }),
          e.closeNode());
      }
      createNewModel(e) {
        return { cfvo: [], color: [] };
      }
      onParserClose(e, r) {
        this.model[e].push(r.model);
      }
    };
  Tkn.exports = _Jt;
});