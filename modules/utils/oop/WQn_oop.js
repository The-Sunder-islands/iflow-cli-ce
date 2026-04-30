/**
 * @module WQn
 * @category utils/oop
 * @label oop
 * @position 1423 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (WQn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var WQn = T((y6c, VQn) => {
  var yEe = Ae("stream"),
    WJs = Ae("util");
  (!yEe.Writable || !yEe.Writable.prototype.destroy) && (yEe = bO());
  function _Ee() {
    if (!(this instanceof _Ee)) return new _Ee();
    yEe.Transform.call(this);
  }
  WJs.inherits(_Ee, yEe.Transform);
  _Ee.prototype._transform = function (t, e, r) {
    r();
  };
  VQn.exports = _Ee;
});