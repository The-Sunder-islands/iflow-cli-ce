/**
 * @module v4n
 * @category utils/oop
 * @label oop
 * @position 1038 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (v4n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var v4n = T((z3c, E4n) => {
  "use strict";
  var _4n = ZVt(),
    HCs = Nd();
  function eWt(t) {
    _4n.call(this, t);
  }
  HCs.inherits(eWt, _4n);
  eWt.prototype.readData = function (t) {
    this.checkOffset(t);
    var e = this.data.slice(this.zero + this.index, this.zero + this.index + t);
    return ((this.index += t), e);
  };
  E4n.exports = eWt;
});