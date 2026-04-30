/**
 * @module Jkn
 * @category unknown
 * @label unknown
 * @position 1244 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Jkn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Jkn = T((P2c, Kkn) => {
  var zOs = Kr(),
    BJt = class extends zOs {
      get tag() {
        return "xm:sqref";
      }
      render(e, r) {
        e.leafNode(this.tag, null, r);
      }
      parseOpen() {
        this.model = "";
      }
      parseText(e) {
        this.model += e;
      }
      parseClose(e) {
        return e !== this.tag;
      }
    };
  Kkn.exports = BJt;
});