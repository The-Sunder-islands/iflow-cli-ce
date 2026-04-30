/**
 * @module Bkn
 * @category unknown
 * @label unknown
 * @position 1236 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Bkn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Bkn = T((x2c, Pkn) => {
  var NOs = W8(),
    CJt = Nkn(),
    SJt = class extends NOs {
      constructor() {
        (super(), (this.map = { cfRule: new CJt() }));
      }
      get tag() {
        return "conditionalFormatting";
      }
      render(e, r) {
        r.rules.some(CJt.isPrimitive) &&
          (e.openNode(this.tag, { sqref: r.ref }),
          r.rules.forEach((n) => {
            CJt.isPrimitive(n) && ((n.ref = r.ref), this.map.cfRule.render(e, n));
          }),
          e.closeNode());
      }
      createNewModel({ attributes: e }) {
        return { ref: e.sqref, rules: [] };
      }
      onParserClose(e, r) {
        this.model.rules.push(r.model);
      }
    };
  Pkn.exports = SJt;
});