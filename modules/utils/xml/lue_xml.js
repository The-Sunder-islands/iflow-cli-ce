/**
 * @module lue
 * @category utils/xml
 * @label xml
 * @position 1170 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (lue) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var lue = T((mAc, w7n) => {
  var W7s = Kr(),
    z7s = Ig();
  function S7n(t, e) {
    (t.openNode(e.tag, e.$),
      e.c &&
        e.c.forEach((r) => {
          S7n(t, r);
        }),
      e.t && t.writeText(e.t),
      t.closeNode());
  }
  var MYt = class extends W7s {
    constructor(e) {
      (super(), (this._model = e));
    }
    render(e) {
      if (!this._xml) {
        let r = new z7s();
        (S7n(r, this._model), (this._xml = r.xml));
      }
      e.writeXml(this._xml);
    }
    parseOpen() {
      return !0;
    }
    parseText() {}
    parseClose(e) {
      switch (e) {
        case this._model.tag:
          return !1;
        default:
          return !0;
      }
    }
  };
  w7n.exports = MYt;
});