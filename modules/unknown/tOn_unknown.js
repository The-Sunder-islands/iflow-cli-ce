/**
 * @module tOn
 * @category unknown
 * @label unknown
 * @position 1246 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (tOn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var tOn = T((L2c, eOn) => {
  var JOs = W8(),
    XOs = PJt(),
    ZOs = Zkn(),
    FJt = class extends JOs {
      constructor() {
        (super(), (this.map = { "x14:conditionalFormatting": (this.cfXform = new ZOs()) }));
      }
      get tag() {
        return "x14:conditionalFormattings";
      }
      hasContent(e) {
        return (
          e.hasExtContent === void 0 && (e.hasExtContent = e.some((r) => r.rules.some(XOs.isExt))),
          e.hasExtContent
        );
      }
      prepare(e, r) {
        e.forEach((n) => {
          this.cfXform.prepare(n, r);
        });
      }
      render(e, r) {
        this.hasContent(r) && (e.openNode(this.tag), r.forEach((n) => this.cfXform.render(e, n)), e.closeNode());
      }
      createNewModel() {
        return [];
      }
      onParserClose(e, r) {
        this.model.push(r.model);
      }
    };
  eOn.exports = FJt;
});