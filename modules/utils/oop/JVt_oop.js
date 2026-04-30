/**
 * @module JVt
 * @category utils/oop
 * @label oop
 * @position 1035 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (JVt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var JVt = T((H3c, p4n) => {
  "use strict";
  var f4n = KVt(),
    QCs = Nd();
  function Pae(t) {
    f4n.call(this, t);
    for (var e = 0; e < this.data.length; e++) t[e] = t[e] & 255;
  }
  QCs.inherits(Pae, f4n);
  Pae.prototype.byteAt = function (t) {
    return this.data[this.zero + t];
  };
  Pae.prototype.lastIndexOfSignature = function (t) {
    for (
      var e = t.charCodeAt(0), r = t.charCodeAt(1), n = t.charCodeAt(2), o = t.charCodeAt(3), s = this.length - 4;
      s >= 0;
      --s
    )
      if (this.data[s] === e && this.data[s + 1] === r && this.data[s + 2] === n && this.data[s + 3] === o)
        return s - this.zero;
    return -1;
  };
  Pae.prototype.readAndCheckSignature = function (t) {
    var e = t.charCodeAt(0),
      r = t.charCodeAt(1),
      n = t.charCodeAt(2),
      o = t.charCodeAt(3),
      s = this.readData(4);
    return e === s[0] && r === s[1] && n === s[2] && o === s[3];
  };
  Pae.prototype.readData = function (t) {
    if ((this.checkOffset(t), t === 0)) return [];
    var e = this.data.slice(this.zero + this.index, this.zero + this.index + t);
    return ((this.index += t), e);
  };
  p4n.exports = Pae;
});