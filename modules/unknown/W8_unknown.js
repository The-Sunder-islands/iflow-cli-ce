/**
 * @module W8
 * @category unknown
 * @label unknown
 * @position 1228 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (W8) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var W8 = T((A2c, bkn) => {
  var dOs = Kr(),
    fJt = class extends dOs {
      createNewModel(e) {
        return {};
      }
      parseOpen(e) {
        return (
          (this.parser = this.parser || this.map[e.name]),
          this.parser
            ? (this.parser.parseOpen(e), !0)
            : e.name === this.tag
              ? ((this.model = this.createNewModel(e)), !0)
              : !1
        );
      }
      parseText(e) {
        this.parser && this.parser.parseText(e);
      }
      onParserClose(e, r) {
        this.model[e] = r.model;
      }
      parseClose(e) {
        return this.parser
          ? (this.parser.parseClose(e) || (this.onParserClose(e, this.parser), (this.parser = void 0)), !0)
          : e !== this.tag;
      }
    };
  bkn.exports = fJt;
});