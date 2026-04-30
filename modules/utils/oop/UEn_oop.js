/**
 * @module UEn
 * @category utils/oop
 * @label oop
 * @position 1004 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (UEn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var UEn = T((d3c, FEn) => {
  "use strict";
  var MEn = MHt().Readable,
    lEs = Nd();
  lEs.inherits(ZHt, MEn);
  function ZHt(t, e, r) {
    (MEn.call(this, e), (this._helper = t));
    var n = this;
    t.on("data", function (o, s) {
      (n.push(o) || n._helper.pause(), r && r(s));
    })
      .on("error", function (o) {
        n.emit("error", o);
      })
      .on("end", function () {
        n.push(null);
      });
  }
  ZHt.prototype._read = function () {
    this._helper.resume();
  };
  FEn.exports = ZHt;
});