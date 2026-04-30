/**
 * @module aNn
 * @category unknown
 * @label unknown
 * @position 1276 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (aNn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var aNn = T((d5c, sNn) => {
  var BPs = Kr(),
    fXt = class extends BPs {
      constructor(e) {
        (super(), (this._model = e));
      }
      get tag() {
        return this._model && this._model.tag;
      }
      render(e, r, n) {
        r === n[2] ? e.leafNode(this.tag) : this.tag === "x:SizeWithCells" && r === n[1] && e.leafNode(this.tag);
      }
      parseOpen(e) {
        switch (e.name) {
          case this.tag:
            return ((this.model = {}), (this.model[this.tag] = !0), !0);
          default:
            return !1;
        }
      }
      parseText() {}
      parseClose() {
        return !1;
      }
    };
  sNn.exports = fXt;
});