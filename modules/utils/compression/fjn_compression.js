/**
 * @module fjn
 * @category utils/compression
 * @label compression
 * @position 1393 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (fjn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var fjn = T((q9c, djn) => {
  var qYs = Ae("util").inherits,
    ljn = Dg().Transform,
    HYs = Htr(),
    mjn = tEe(),
    VF = function (t) {
      if (!(this instanceof VF)) return new VF(t);
      ((t = this.options = mjn.defaults(t, {})),
        ljn.call(this, t),
        (this.supports = { directory: !0, symlink: !0 }),
        (this.files = []));
    };
  qYs(VF, ljn);
  VF.prototype._transform = function (t, e, r) {
    r(null, t);
  };
  VF.prototype._writeStringified = function () {
    var t = JSON.stringify(this.files);
    this.write(t);
  };
  VF.prototype.append = function (t, e, r) {
    var n = this;
    e.crc32 = 0;
    function o(s, a) {
      if (s) {
        r(s);
        return;
      }
      ((e.size = a.length || 0), (e.crc32 = HYs.unsigned(a)), n.files.push(e), r(null, e));
    }
    e.sourceType === "buffer" ? o(null, t) : e.sourceType === "stream" && mjn.collectStream(t, o);
  };
  VF.prototype.finalize = function () {
    (this._writeStringified(), this.end());
  };
  djn.exports = VF;
});