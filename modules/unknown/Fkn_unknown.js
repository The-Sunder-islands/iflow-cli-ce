/**
 * @module Fkn
 * @category unknown
 * @label unknown
 * @position 1238 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Fkn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Fkn = T((D2c, Mkn) => {
  var LOs = Kr(),
    TJt = class extends LOs {
      get tag() {
        return "xm:f";
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
  Mkn.exports = TJt;
});