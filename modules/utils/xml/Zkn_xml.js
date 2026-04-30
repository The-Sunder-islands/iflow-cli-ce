/**
 * @module Zkn
 * @category utils/xml
 * @label xml
 * @position 1245 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Zkn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Zkn = T((B2c, Xkn) => {
  var YOs = W8(),
    KOs = Jkn(),
    LJt = PJt(),
    MJt = class extends YOs {
      constructor() {
        (super(), (this.map = { "xm:sqref": (this.sqRef = new KOs()), "x14:cfRule": (this.cfRule = new LJt()) }));
      }
      get tag() {
        return "x14:conditionalFormatting";
      }
      prepare(e, r) {
        e.rules.forEach((n) => {
          this.cfRule.prepare(n, r);
        });
      }
      render(e, r) {
        r.rules.some(LJt.isExt) &&
          (e.openNode(this.tag, { "xmlns:xm": "http://schemas.microsoft.com/office/excel/2006/main" }),
          r.rules.filter(LJt.isExt).forEach((n) => this.cfRule.render(e, n)),
          this.sqRef.render(e, r.ref),
          e.closeNode());
      }
      createNewModel() {
        return { rules: [] };
      }
      onParserClose(e, r) {
        switch (e) {
          case "xm:sqref":
            this.model.ref = r.model;
            break;
          case "x14:cfRule":
            this.model.rules.push(r.model);
            break;
        }
      }
    };
  Xkn.exports = MJt;
});