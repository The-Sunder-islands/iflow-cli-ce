/**
 * @module aTn
 * @category utils/oop
 * @label oop
 * @position 1106 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (aTn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var aTn = T((Jgc, sTn) => {
  var Xae = (sTn.exports = function (t, e) {
    ((this._tokens = t), (this._startIndex = e || 0));
  });
  Xae.prototype.head = function () {
    return this._tokens[this._startIndex];
  };
  Xae.prototype.tail = function (t) {
    return new Xae(this._tokens, this._startIndex + 1);
  };
  Xae.prototype.toArray = function () {
    return this._tokens.slice(this._startIndex);
  };
  Xae.prototype.end = function () {
    return this._tokens[this._tokens.length - 1];
  };
  Xae.prototype.to = function (t) {
    var e = this.head().source,
      r = t.head() || t.end();
    return e.to(r.source);
  };
});