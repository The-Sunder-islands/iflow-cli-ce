/**
 * @module oNn
 * @category unknown
 * @label unknown
 * @position 1275 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (oNn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var oNn = T((m5c, iNn) => {
  var PPs = Kr(),
    dXt = class extends PPs {
      constructor(e) {
        (super(), (this._model = e));
      }
      get tag() {
        return this._model && this._model.tag;
      }
      render(e, r) {
        e.leafNode(this.tag, null, r);
      }
      parseOpen(e) {
        switch (e.name) {
          case this.tag:
            return ((this.text = ""), !0);
          default:
            return !1;
        }
      }
      parseText(e) {
        this.text = e;
      }
      parseClose() {
        return !1;
      }
    };
  iNn.exports = dXt;
});