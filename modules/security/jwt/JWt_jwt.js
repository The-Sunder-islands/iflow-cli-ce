/**
 * @module JWt
 * @category security/jwt
 * @label jwt
 * @position 1110 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (JWt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var JWt = T((fTn) => {
  fTn.error = function (t) {
    return new AZe(t);
  };
  var AZe = function (t) {
    ((this.expected = t.expected), (this.actual = t.actual), (this._location = t.location));
  };
  AZe.prototype.describe = function () {
    var t = this._location
      ? this._location.describe() +
        `:
`
      : "";
    return (
      t +
      "Expected " +
      this.expected +
      `
but got ` +
      this.actual
    );
  };
  AZe.prototype.lineNumber = function () {
    return this._location.lineNumber();
  };
  AZe.prototype.characterNumber = function () {
    return this._location.characterNumber();
  };
});