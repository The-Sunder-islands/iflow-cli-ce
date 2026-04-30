/**
 * @module LEn
 * @category utils/oop
 * @label oop
 * @position 1003 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (LEn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var LEn = T((m3c, BEn) => {
  "use strict";
  var NEn = I6(),
    PEn = Nd();
  function XHt(t) {
    (NEn.call(this, "ConvertWorker to " + t), (this.destType = t));
  }
  PEn.inherits(XHt, NEn);
  XHt.prototype.processChunk = function (t) {
    this.push({ data: PEn.transformTo(this.destType, t.data), meta: t.meta });
  };
  BEn.exports = XHt;
});